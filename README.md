# E-ZEDNAV local application backend

## Run locally

In PowerShell, from this project folder:

```powershell
$env:EDUNAV_ADMIN_PASSWORD = "choose-a-long-private-password"
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe app.py
```

Open `http://127.0.0.1:5000`. Applications and uploaded Grade 9 result documents are stored in `data/applications.sqlite3`. Open `http://127.0.0.1:5000/admin/login` to review applications and write feedback. Applicants can use `application-status.html` with their reference number and email to read that feedback. When you mark an application **Approved** and save it, the app generates an acceptance-letter PDF and emails it to the applicant.

## Acceptance-letter email

Configure an SMTP account before approving applications. For example, in PowerShell set the mail server details before starting the app:

```powershell
$env:EDUNAV_SMTP_HOST = "smtp.example.com"
$env:EDUNAV_SMTP_PORT = "587"
$env:EDUNAV_SMTP_USERNAME = "your-sender@example.com"
$env:EDUNAV_SMTP_PASSWORD = "your-mail-provider-app-password"
$env:EDUNAV_MAIL_FROM = "your-sender@example.com"
```

Port `587` uses STARTTLS by default. For an SMTP provider that requires implicit TLS, set `$env:EDUNAV_SMTP_USE_SSL = "1"` and use its SSL port (commonly `465`). Keep mail credentials private; do not commit them to source control. The admin page shows whether a letter was emailed. If delivery fails, it shows an error and saving the approved application again retries the send. The applicant receives a PDF attachment; this local app does not guarantee delivery or replace verifying the recipient address.

Keep the admin password and mail credentials private. Use made-up test applications while developing. This local development server is not suitable for public deployment or real student records without production hosting, HTTPS, secure secret management, access controls, backups, and a privacy/data-retention policy.
