from __future__ import annotations

import hmac
import os
import secrets
import smtplib
import ssl
import sqlite3
import uuid
from contextlib import contextmanager
from datetime import datetime, timezone
from email.message import EmailMessage
from functools import wraps
from io import BytesIO
from pathlib import Path
from typing import Any, Generator
from xml.sax.saxutils import escape

from flask import (
    Flask,
    abort,
    flash,
    jsonify,
    redirect,
    render_template,
    request,
    send_from_directory,
    session,
    url_for,
)
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer
from werkzeug.utils import secure_filename


BASE_DIR = Path(__file__).resolve().parent
PUBLIC_FILES = frozenset(
    {
        "about.html",
        "images (1).jpg",
        "images.jpg",
        "index.html",
        "map.html",
        "Map-of-Zambia-showing-all-the-districts-towns-and-cities-in-the-country.webp",
        "schools.html",
        "script.js",
        "services.html",
        "style.css",
        "application-status.html",
    }
)
ALLOWED_UPLOADS = {
    "pdf": ("application/pdf", b"%PDF-"),
    "png": ("image/png", b"\x89PNG\r\n\x1a\n"),
    "jpg": ("image/jpeg", b"\xff\xd8\xff"),
    "jpeg": ("image/jpeg", b"\xff\xd8\xff"),
}
APPLICATION_STATUSES = (
    "Pending",
    "Under review",
    "More information required",
    "Approved",
    "Declined",
)


class MailConfigurationError(RuntimeError):
    pass


def utc_timestamp() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def create_acceptance_letter(application: sqlite3.Row) -> bytes:
    pdf = BytesIO()
    document = SimpleDocTemplate(
        pdf,
        pagesize=letter,
        rightMargin=inch,
        leftMargin=inch,
        topMargin=0.8 * inch,
        bottomMargin=0.8 * inch,
        title="School application acceptance letter",
    )
    styles = getSampleStyleSheet()
    body_style = styles["BodyText"]
    body_style.leading = 17
    body_style.spaceAfter = 12
    story = [
        Paragraph("E-ZEDNAV", styles["Title"]),
        Paragraph("SCHOOL APPLICATION DECISION", styles["Heading2"]),
        Spacer(1, 16),
        Paragraph(datetime.now(timezone.utc).strftime("%B %d, %Y"), body_style),
        Paragraph(f"Application reference: {escape(application['reference'])}", body_style),
        Paragraph(f"Dear {escape(application['guardian_name'])},", body_style),
        Paragraph(
            f"We are pleased to inform you that the application for "
            f"{escape(application['student_name'])} to attend "
            f"{escape(application['school_name'])} has been approved.",
            body_style,
        ),
    ]
    feedback = application["feedback"].strip()
    if feedback:
        story.extend(
            [
                Paragraph("Next steps", styles["Heading3"]),
                Paragraph(escape(feedback).replace("\n", "<br/>"), body_style),
            ]
        )
    story.extend(
        [
            Paragraph(
                "Please keep this letter and the application reference for your records.",
                body_style,
            ),
            Paragraph("Yours sincerely,", body_style),
            Paragraph("E-ZEDNAV Admissions", styles["Heading3"]),
        ]
    )
    document.build(story)
    return pdf.getvalue()


def send_acceptance_email(application: sqlite3.Row, config: Any) -> None:
    host = str(config.get("SMTP_HOST") or "").strip()
    sender = str(config.get("MAIL_FROM") or config.get("SMTP_USERNAME") or "").strip()
    if not host or not sender:
        raise MailConfigurationError(
            "Set EDUNAV_SMTP_HOST and EDUNAV_MAIL_FROM (or EDUNAV_SMTP_USERNAME) to send acceptance letters."
        )

    try:
        port = int(config.get("SMTP_PORT", 587))
    except (TypeError, ValueError) as error:
        raise MailConfigurationError("EDUNAV_SMTP_PORT must be a valid port number.") from error

    username = str(config.get("SMTP_USERNAME") or "").strip()
    password = str(config.get("SMTP_PASSWORD") or "")
    if bool(username) != bool(password):
        raise MailConfigurationError(
            "Set both EDUNAV_SMTP_USERNAME and EDUNAV_SMTP_PASSWORD, or leave both blank."
        )

    message = EmailMessage()
    message["Subject"] = f"Acceptance letter - {application['school_name']}"
    message["From"] = sender
    message["To"] = application["email"]
    message.set_content(
        f"Dear {application['guardian_name']},\n\n"
        f"Please find attached the acceptance letter for "
        f"{application['student_name']} at {application['school_name']}.\n\n"
        f"Application reference: {application['reference']}\n\n"
        "Regards,\nE-ZEDNAV Admissions"
    )
    message.add_attachment(
        create_acceptance_letter(application),
        maintype="application",
        subtype="pdf",
        filename="acceptance-letter.pdf",
    )

    timeout = float(config.get("SMTP_TIMEOUT", 20))
    if config.get("SMTP_USE_SSL"):
        with smtplib.SMTP_SSL(
            host, port, timeout=timeout, context=ssl.create_default_context()
        ) as server:
            if username:
                server.login(username, password)
            server.send_message(message)
    else:
        with smtplib.SMTP(host, port, timeout=timeout) as server:
            server.ehlo()
            server.starttls(context=ssl.create_default_context())
            server.ehlo()
            if username:
                server.login(username, password)
            server.send_message(message)


def create_app(config: dict[str, Any] | None = None) -> Flask:
    app = Flask(__name__, template_folder="templates", static_folder=None)
    app.config.update(
        SECRET_KEY=os.environ.get("EDUNAV_SECRET_KEY") or secrets.token_hex(32),
        ADMIN_PASSWORD=os.environ.get("EDUNAV_ADMIN_PASSWORD"),
        DATABASE_PATH=str(BASE_DIR / "data" / "applications.sqlite3"),
        SMTP_HOST=os.environ.get("EDUNAV_SMTP_HOST"),
        SMTP_PORT=os.environ.get("EDUNAV_SMTP_PORT", "587"),
        SMTP_USERNAME=os.environ.get("EDUNAV_SMTP_USERNAME"),
        SMTP_PASSWORD=os.environ.get("EDUNAV_SMTP_PASSWORD"),
        MAIL_FROM=os.environ.get("EDUNAV_MAIL_FROM"),
        SMTP_USE_SSL=os.environ.get("EDUNAV_SMTP_USE_SSL") == "1",
        SMTP_TIMEOUT=20,
        MAX_CONTENT_LENGTH=6 * 1024 * 1024,
        SESSION_COOKIE_HTTPONLY=True,
        SESSION_COOKIE_SAMESITE="Strict",
        SESSION_COOKIE_SECURE=os.environ.get("EDUNAV_HTTPS") == "1",
    )
    if config:
        app.config.update(config)

    database_path = Path(app.config["DATABASE_PATH"])
    initialized = False

    @contextmanager
    def database() -> Generator[sqlite3.Connection, None, None]:
        database_path.parent.mkdir(parents=True, exist_ok=True)
        connection = sqlite3.connect(database_path)
        connection.row_factory = sqlite3.Row
        try:
            yield connection
            connection.commit()
        except Exception:
            connection.rollback()
            raise
        finally:
            connection.close()

    def initialize_database() -> None:
        with database() as connection:
            connection.execute(
                """
                CREATE TABLE IF NOT EXISTS applications (
                    reference TEXT PRIMARY KEY,
                    school_name TEXT NOT NULL,
                    student_name TEXT NOT NULL,
                    guardian_name TEXT NOT NULL,
                    phone TEXT NOT NULL,
                    email TEXT NOT NULL,
                    notes TEXT NOT NULL DEFAULT '',
                    document_name TEXT NOT NULL,
                    document_type TEXT NOT NULL,
                    document_data BLOB NOT NULL,
                    status TEXT NOT NULL DEFAULT 'Pending',
                    feedback TEXT NOT NULL DEFAULT '',
                    submitted_at TEXT NOT NULL,
                    updated_at TEXT NOT NULL,
                    acceptance_letter_sent_at TEXT
                )
                """
            )
            columns = {
                column["name"]
                for column in connection.execute(
                    "PRAGMA table_info(applications)"
                ).fetchall()
            }
            if "acceptance_letter_sent_at" not in columns:
                connection.execute(
                    "ALTER TABLE applications ADD COLUMN acceptance_letter_sent_at TEXT"
                )

    def admin_logged_in() -> bool:
        return session.get("admin_logged_in") is True

    def csrf_token() -> str:
        token = session.get("csrf_token")
        if not token:
            token = secrets.token_urlsafe(32)
            session["csrf_token"] = token
        return token

    def validate_csrf() -> None:
        submitted_token = request.form.get("csrf_token", "")
        expected_token = session.get("csrf_token", "")
        if not expected_token or not hmac.compare_digest(submitted_token, expected_token):
            abort(400, description="The form expired. Refresh the page and try again.")

    def require_admin(view: Any) -> Any:
        @wraps(view)
        def wrapped(*args: Any, **kwargs: Any) -> Any:
            if not admin_logged_in():
                return redirect(url_for("admin_login"))
            return view(*args, **kwargs)

        return wrapped

    @app.before_request
    def ensure_database() -> None:
        nonlocal initialized
        if not initialized:
            initialize_database()
            initialized = True

    @app.get("/")
    def home() -> Any:
        return send_from_directory(BASE_DIR, "index.html")

    @app.get("/<path:filename>")
    def public_file(filename: str) -> Any:
        if filename not in PUBLIC_FILES:
            abort(404)
        return send_from_directory(BASE_DIR, filename)

    @app.post("/api/applications")
    def submit_application() -> Any:
        fields = {
            "school_name": request.form.get("schoolName", "").strip(),
            "student_name": request.form.get("studentName", "").strip(),
            "guardian_name": request.form.get("guardianName", "").strip(),
            "phone": request.form.get("phone", "").strip(),
            "email": request.form.get("email", "").strip().lower(),
            "notes": request.form.get("notes", "").strip(),
        }
        limits = {
            "school_name": 160,
            "student_name": 120,
            "guardian_name": 120,
            "phone": 40,
            "email": 254,
            "notes": 2000,
        }
        if any(not fields[key] for key in ("school_name", "student_name", "guardian_name", "phone", "email")):
            return jsonify(error="Complete all required application fields."), 400
        if any(len(value) > limits[key] for key, value in fields.items()):
            return jsonify(error="One or more fields are too long."), 400
        if "@" not in fields["email"] or any(character.isspace() for character in fields["email"]):
            return jsonify(error="Enter a valid email address."), 400

        upload = request.files.get("gradeNineResult")
        if upload is None or not upload.filename:
            return jsonify(error="Upload the Grade 9 statement of result."), 400
        extension = Path(upload.filename).suffix.lower().lstrip(".")
        upload_details = ALLOWED_UPLOADS.get(extension)
        if upload_details is None:
            return jsonify(error="Upload a PDF, PNG, JPG, or JPEG file."), 400

        document_data = upload.read()
        content_type, signature = upload_details
        if not document_data.startswith(signature):
            return jsonify(error="The uploaded file does not match its file type."), 400
        if len(document_data) > 5 * 1024 * 1024:
            return jsonify(error="The uploaded file must be 5 MB or smaller."), 400

        reference = str(uuid.uuid4())
        timestamp = utc_timestamp()
        with database() as connection:
            connection.execute(
                """
                INSERT INTO applications (
                    reference, school_name, student_name, guardian_name, phone,
                    email, notes, document_name, document_type, document_data,
                    status, submitted_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pending', ?, ?)
                """,
                (
                    reference,
                    fields["school_name"],
                    fields["student_name"],
                    fields["guardian_name"],
                    fields["phone"],
                    fields["email"],
                    fields["notes"],
                    secure_filename(Path(upload.filename).name) or "grade-nine-result",
                    content_type,
                    document_data,
                    timestamp,
                    timestamp,
                ),
            )
        return jsonify(reference=reference, status="Pending"), 201

    @app.route("/api/application-status", methods=["GET", "POST"])
    def application_status() -> Any:
        if request.is_json:
            data = request.get_json(silent=True)
        else:
            data = request.form if request.form else request.args

        if not isinstance(data, dict):
            return jsonify(error="Enter your application reference and email."), 400

        reference = str(data.get("reference", "") or "").strip()
        email = str(data.get("email", "") or "").strip().lower()
        if not reference or not email or len(reference) > 64 or len(email) > 254:
            return jsonify(error="Enter your application reference and email."), 400

        with database() as connection:
            application = connection.execute(
                """
                SELECT status, feedback, submitted_at, acceptance_letter_sent_at
                FROM applications
                WHERE reference = ? AND email = ?
                """,
                (reference, email),
            ).fetchone()
        if application is None:
            return jsonify(error="No application matched those details. Check the reference and email."), 404
        return jsonify(
            status=application["status"],
            feedback=application["feedback"],
            submittedAt=application["submitted_at"],
            acceptanceLetterSent=application["acceptance_letter_sent_at"] is not None,
        )

    @app.get("/admin/login")
    def admin_login() -> Any:
        if admin_logged_in():
            return redirect(url_for("admin_dashboard"))
        return render_template("admin_login.html", csrf_token=csrf_token())

    @app.post("/admin/login")
    def admin_login_submit() -> Any:
        validate_csrf()
        configured_password = app.config.get("ADMIN_PASSWORD")
        submitted_password = request.form.get("password", "")
        if not configured_password:
            abort(503, description="Set EDUNAV_ADMIN_PASSWORD before starting the server.")
        if not hmac.compare_digest(str(configured_password), submitted_password):
            flash("The password was not accepted.", "error")
            return render_template("admin_login.html", csrf_token=csrf_token()), 401
        session.clear()
        session["admin_logged_in"] = True
        session["csrf_token"] = secrets.token_urlsafe(32)
        return redirect(url_for("admin_dashboard"))

    @app.get("/admin")
    @require_admin
    def admin_dashboard() -> Any:
        with database() as connection:
            applications = connection.execute(
                """
                SELECT reference, school_name, student_name, guardian_name,
                       phone, email, notes, document_name, status, feedback,
                       submitted_at, updated_at, acceptance_letter_sent_at
                FROM applications
                ORDER BY submitted_at DESC
                """
            ).fetchall()
        return render_template(
            "admin_dashboard.html",
            applications=applications,
            statuses=APPLICATION_STATUSES,
            csrf_token=csrf_token(),
        )

    @app.post("/admin/applications/<reference>")
    @require_admin
    def update_application(reference: str) -> Any:
        validate_csrf()
        status = request.form.get("status", "")
        feedback = request.form.get("feedback", "").strip()
        if status not in APPLICATION_STATUSES or len(feedback) > 2000:
            abort(400, description="Choose a valid status and keep feedback under 2,000 characters.")
        with database() as connection:
            result = connection.execute(
                """
                UPDATE applications
                SET status = ?, feedback = ?, updated_at = ?
                WHERE reference = ?
                """,
                (status, feedback, utc_timestamp(), reference),
            )
        if result.rowcount == 0:
            abort(404)
        if status == "Approved":
            with database() as connection:
                application = connection.execute(
                    """
                    SELECT reference, school_name, student_name, guardian_name,
                           email, feedback, acceptance_letter_sent_at
                    FROM applications
                    WHERE reference = ?
                    """,
                    (reference,),
                ).fetchone()
            if application["acceptance_letter_sent_at"] is not None:
                flash("Application feedback saved. The acceptance letter was already emailed.", "success")
            else:
                try:
                    send_acceptance_email(application, app.config)
                except MailConfigurationError as error:
                    app.logger.error("Acceptance email configuration error: %s", error)
                    flash(f"Application approved and feedback saved, but the letter was not emailed. {error}", "error")
                except (smtplib.SMTPException, OSError, ValueError):
                    app.logger.exception("Could not email the acceptance letter for application %s", reference)
                    flash(
                        "Application approved and feedback saved, but the acceptance letter could not be emailed. Check the mail settings and server log, then save again to retry.",
                        "error",
                    )
                else:
                    sent_at = utc_timestamp()
                    with database() as connection:
                        connection.execute(
                            """
                            UPDATE applications
                            SET acceptance_letter_sent_at = ?
                            WHERE reference = ?
                            """,
                            (sent_at, reference),
                        )
                    flash(f"Application feedback saved and acceptance letter emailed to {application['email']}.", "success")
        else:
            flash("Application feedback saved.", "success")
        return redirect(url_for("admin_dashboard"))

    @app.post("/admin/logout")
    @require_admin
    def admin_logout() -> Any:
        validate_csrf()
        session.clear()
        return redirect(url_for("admin_login"))

    @app.get("/admin/documents/<reference>")
    @require_admin
    def application_document(reference: str) -> Any:
        with database() as connection:
            application = connection.execute(
                """
                SELECT document_name, document_type, document_data
                FROM applications
                WHERE reference = ?
                """,
                (reference,),
            ).fetchone()
        if application is None:
            abort(404)
        response = app.response_class(
            application["document_data"],
            mimetype=application["document_type"],
            headers={
                "Content-Disposition": (
                    'attachment; filename="'
                    + (secure_filename(application["document_name"]) or "grade-nine-result")
                    + '"'
                )
            },
        )
        response.headers["X-Content-Type-Options"] = "nosniff"
        return response

    return app


app = create_app()


if __name__ == "__main__":
    if not app.config.get("ADMIN_PASSWORD"):
        raise SystemExit("Set EDUNAV_ADMIN_PASSWORD before starting the local server.")
    app.run(host="127.0.0.1", port=5000, debug=False)
