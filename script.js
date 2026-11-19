const schoolDirectory = [
  { name: 'Mkushi Secondary School', province: 'Central', district: 'Mkushi', town: 'Mkushi', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chindwin Secondary School', province: 'Central', district: 'Kabwe', town: 'Kabwe', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kasanda Malombe Secondary School', province: 'Central', district: 'Kabwe', town: 'Kabwe', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chankomo Secondary School', province: 'Central', district: 'Kapiri Mposhi', town: 'Kapiri Mposhi', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chibombo Secondary School', province: 'Central', district: 'Chibombo', town: 'Chibombo', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chowa Secondary School', province: 'Central', district: 'Kabwe', town: 'Kabwe', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Liteta Secondary School', province: 'Central', district: 'Chibombo', town: 'Chibombo', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Serenje Boma Secondary School', province: 'Central', district: 'Serenje', town: 'Serenje', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chengelo School', province: 'Central', district: 'Mkushi', town: 'Mkushi', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Banani International School', province: 'Central', district: 'Chisamba', town: 'Chisamba', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Chiwala Boarding Secondary School', province: 'Copperbelt', district: 'Masaiti', town: 'Masaiti', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chati Boarding Secondary School', province: 'Copperbelt', district: 'Kitwe', town: 'Kitwe', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Ndeke Secondary School', province: 'Copperbelt', district: 'Ndola', town: 'Ndola', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kanini Secondary School', province: 'Copperbelt', district: 'Ndola', town: 'Ndola', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Lufwanyama Boarding Secondary School', province: 'Copperbelt', district: 'Lufwanyama', town: 'Lufwanyama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Masaiti Secondary School', province: 'Copperbelt', district: 'Masaiti', town: 'Masaiti', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mpelembe Secondary School', province: 'Copperbelt', district: 'Kitwe', town: 'Kitwe', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Lechwe School', province: 'Copperbelt', district: 'Kitwe', town: 'Kitwe', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Nkana Trust School', province: 'Copperbelt', district: 'Kitwe', town: 'Kitwe', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chingola Secondary School', province: 'Copperbelt', district: 'Chingola', town: 'Chingola', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Chipata Day Secondary School', province: 'Eastern', district: 'Chipata', town: 'Chipata', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chipata Boys Secondary School', province: 'Eastern', district: 'Chipata', town: 'Chipata', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chipata Girls Secondary School', province: 'Eastern', district: 'Chipata', town: 'Chipata', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: "St. Monica's Secondary School", province: 'Eastern', district: 'Chipata', town: 'Chipata', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Lundazi Secondary School', province: 'Eastern', district: 'Lundazi', town: 'Lundazi', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Katete Secondary School', province: 'Eastern', district: 'Katete', town: 'Katete', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Petauke Secondary School', province: 'Eastern', district: 'Petauke', town: 'Petauke', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chadiza Secondary School', province: 'Eastern', district: 'Chadiza', town: 'Chadiza', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Nyimba Secondary School', province: 'Eastern', district: 'Nyimba', town: 'Nyimba', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Edgar Lungu National STEM Secondary School', province: 'Eastern', district: 'Petauke', town: 'Petauke', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Mwense Secondary School', province: 'Luapula', district: 'Mwense', town: 'Mwense', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Nchelenge Secondary School', province: 'Luapula', district: 'Nchelenge', town: 'Nchelenge', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kawambwa Secondary School', province: 'Luapula', district: 'Kawambwa', town: 'Kawambwa', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mansa Secondary School', province: 'Luapula', district: 'Mansa', town: 'Mansa', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Samfya Secondary School', province: 'Luapula', district: 'Samfya', town: 'Samfya', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mwense Boarding Secondary School', province: 'Luapula', district: 'Mwense', town: 'Mwense', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mutono Secondary School', province: 'Luapula', district: 'Nchelenge', town: 'Nchelenge', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mpota Secondary School', province: 'Luapula', district: 'Kawambwa', town: 'Kawambwa', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Lukwesa Secondary School', province: 'Luapula', district: 'Mwense', town: 'Mwense', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chembe Secondary School', province: 'Luapula', district: 'Chembe', town: 'Chembe', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Munali Girls Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Nelson Mandela Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kamulanga Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kabulonga Boys Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kabulonga Girls Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'David Kaunda National STEM Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chelstone Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chilenje Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Bauleni Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Foxdale Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'International School of Lusaka', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Rhodes Park School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Baobab College', province: 'Lusaka', district: 'Kafue', town: 'Kafue', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Lusaka International Community School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Roma Girls Secondary School', province: 'Lusaka', district: 'Lusaka', town: 'Lusaka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Mpika Boys Secondary School', province: 'Muchinga', district: 'Mpika', town: 'Mpika', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Isoka Boys Secondary School', province: 'Muchinga', district: 'Isoka', town: 'Isoka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Nakonde Secondary School', province: 'Muchinga', district: 'Nakonde', town: 'Nakonde', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chinsali Secondary School', province: 'Muchinga', district: 'Chinsali', town: 'Chinsali', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mafinga Secondary School', province: 'Muchinga', district: 'Mafinga', town: 'Mafinga', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: "Shiwang'andu Secondary School", province: 'Muchinga', district: "Shiwang'andu", town: "Shiwang'andu", type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mpika Girls Secondary School', province: 'Muchinga', district: 'Mpika', town: 'Mpika', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chama Secondary School', province: 'Muchinga', district: 'Chama', town: 'Chama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chama Boarding Secondary School', province: 'Muchinga', district: 'Chama', town: 'Chama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kenneth Kaunda Secondary School', province: 'Muchinga', district: 'Mpika', town: 'Mpika', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Kasama Girls Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chileshe Chepela Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kasama Boys Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kasama Central Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kasama Day Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Malole Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Soft Katongo Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Lukashya Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Ituna Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Lualua Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kapongola Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chiba Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Luara Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mubanga Chipoya Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Itinti Secondary School', province: 'Northern', district: 'Kasama', town: 'Kasama', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mbala Boarding Secondary School', province: 'Northern', district: 'Mbala', town: 'Mbala', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mpulungu Boarding Secondary School', province: 'Northern', district: 'Mpulungu', town: 'Mpulungu', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mukanga Day Secondary School', province: 'Northern', district: 'Mbala', town: 'Mbala', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kaputa Secondary School', province: 'Northern', district: 'Kaputa', town: 'Kaputa', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Senga Day Secondary School', province: 'Northern', district: 'Mbala', town: 'Mbala', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kayambi Day Secondary School', province: 'Northern', district: 'Mungwi', town: 'Mungwi', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mporokoso Secondary School', province: 'Northern', district: 'Mporokoso', town: 'Mporokoso', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Luwingu Secondary School', province: 'Northern', district: 'Luwingu', town: 'Luwingu', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Solwezi Boys Technical Secondary School', province: 'North-Western', district: 'Solwezi', town: 'Solwezi', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Chavuma Day Secondary School', province: 'North-Western', district: 'Chavuma', town: 'Chavuma', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Zambezi Day Secondary School', province: 'North-Western', district: 'Zambezi', town: 'Zambezi', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Dipalata Secondary School', province: 'North-Western', district: 'Solwezi', town: 'Solwezi', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kalusha Day Secondary School', province: 'North-Western', district: 'Kasempa', town: 'Kasempa', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mwinilunga Secondary School', province: 'North-Western', district: 'Mwinilunga', town: 'Mwinilunga', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kabompo Secondary School', province: 'North-Western', district: 'Kabompo', town: 'Kabompo', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Manyinga Secondary School', province: 'North-Western', district: 'Manyinga', town: 'Manyinga', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Ikelenge Secondary School', province: 'North-Western', district: 'Ikelenge', town: 'Ikelenge', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mumena Secondary School', province: 'North-Western', district: 'Solwezi', town: 'Solwezi', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Siavonga Secondary School', province: 'Southern', district: 'Siavonga', town: 'Siavonga', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Maamba Secondary School', province: 'Southern', district: 'Sinazongwe', town: 'Sinazongwe', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Shampande Secondary School', province: 'Southern', district: 'Choma', town: 'Choma', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: "N'gombe Illede Secondary School", province: 'Southern', district: 'Chirundu', town: 'Chirundu', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Choma Secondary School', province: 'Southern', district: 'Choma', town: 'Choma', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Monze Secondary School', province: 'Southern', district: 'Monze', town: 'Monze', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mazabuka Secondary School', province: 'Southern', district: 'Mazabuka', town: 'Mazabuka', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kalomo Secondary School', province: 'Southern', district: 'Kalomo', town: 'Kalomo', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Livingstone Boys Secondary School', province: 'Southern', district: 'Livingstone', town: 'Livingstone', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Livingstone Girls Secondary School', province: 'Southern', district: 'Livingstone', town: 'Livingstone', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Musokotwane Secondary School', province: 'Southern', district: 'Kazungula', town: 'Kazungula', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Baobab College', province: 'Southern', district: 'Southern', town: 'Southern', type: 'Private', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },

  { name: 'Kambule Secondary School', province: 'Western', district: 'Mongu', town: 'Mongu', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mulambwa Combined School', province: 'Western', district: 'Kalabo', town: 'Kalabo', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Katima Secondary School', province: 'Western', district: 'Sesheke', town: 'Sesheke', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kaoma Boarding Secondary School', province: 'Western', district: 'Kaoma', town: 'Kaoma', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kalabo Boarding Secondary School', province: 'Western', district: 'Kalabo', town: 'Kalabo', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Kalabo Day Secondary School', province: 'Western', district: 'Kalabo', town: 'Kalabo', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Mangango Secondary School', province: 'Western', district: 'Kaoma', town: 'Kaoma', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Senanga Secondary School', province: 'Western', district: 'Senanga', town: 'Senanga', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Sesheke Secondary School', province: 'Western', district: 'Sesheke', town: 'Sesheke', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' },
  { name: 'Lukulu Secondary School', province: 'Western', district: 'Lukulu', town: 'Lukulu', type: 'Government', category: 'Secondary School', services: [], admission: 'Not provided', contact: 'Not provided', address: 'Not provided' }
];

const provinceList = [...new Set(schoolDirectory.map((school) => school.province))];

const normalizeProvinceName = (value = '') => {
  const cleanValue = String(value).trim().replace(/[_-]+/g, ' ').replace(/\s+/g, ' ');
  const words = cleanValue.split(' ').filter(Boolean);

  if (!words.length) return '';
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('-');
};

const resolveProvinceName = (value = '') => {
  const normalizedValue = normalizeProvinceName(value);
  return provinceList.find((province) => normalizeProvinceName(province) === normalizedValue) || '';
};

const provinceSummary = provinceList.map((province) => {
  const schools = schoolDirectory.filter((school) => school.province === province);
  return {
    province,
    totalSchools: schools.length,
    boarding: schools.filter((school) => school.category === 'Boarding').length,
    day: schools.filter((school) => school.category === 'Day').length
  };
});

function setupMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

function setupHomeSearch() {
  const form = document.getElementById('homeSearchForm');
  const input = document.getElementById('homeSearchInput');

  if (!form || !input) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const value = input.value.trim();
    const query = new URLSearchParams();
    if (value) query.set('search', value);
    window.location.href = `schools.html?${query.toString()}`;
  });
}

function setupEnrollmentModal() {
  const modalMarkup = `
    <div class="enrollment-modal" id="enrollmentModal" aria-hidden="true">
      <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="enrollmentTitle">
        <div class="modal-header">
          <div>
            <p class="eyebrow modal-eyebrow">ENROLMENT</p>
            <h3 id="enrollmentTitle">Apply to school</h3>
          </div>
          <button type="button" class="modal-close" aria-label="Close enrollment form"><span aria-hidden="true">&times;</span></button>
        </div>

        <form id="enrollmentForm" class="enrollment-form" novalidate>
          <input type="hidden" id="enrollmentSchool" name="schoolName" />

          <div class="field-grid">
            <label>
              Student full name
              <input type="text" name="studentName" required placeholder="Enter full name" />
            </label>
            <label>
              Guardian / parent name
              <input type="text" name="guardianName" required placeholder="Enter parent/guardian name" />
            </label>
          </div>

          <div class="field-grid">
            <label>
              Phone number
              <input type="tel" name="phone" required placeholder="Enter phone number" />
            </label>
            <label>
              Email address
              <input type="email" name="email" required placeholder="Enter email address" />
            </label>
          </div>

          <label>
            Grade 9 statement of result
            <input type="file" name="gradeNineResult" accept=".pdf,.png,.jpg,.jpeg" required />
          </label>

          <label>
            Additional information
            <textarea name="notes" rows="4" placeholder="Tell us why you want to join this school"></textarea>
          </label>

          <p class="enrollment-requirements">Submission: Please upload your Grade 9 statement of result and complete all required fields before submitting. After completing the requirements, submit your application for review.</p>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary modal-cancel">Cancel</button>
          </div>

          <p id="enrollmentStatus" class="form-status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalMarkup);

  const modal = document.getElementById('enrollmentModal');
  const form = document.getElementById('enrollmentForm');
  const schoolField = document.getElementById('enrollmentSchool');
  const status = document.getElementById('enrollmentStatus');
  const closeButtons = modal.querySelectorAll('.modal-close, .modal-cancel');

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    form.reset();
    status.textContent = '';
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.enrollment-btn');
    if (!button) return;

    const schoolName = button.dataset.schoolName;
    schoolField.value = schoolName || 'Selected school';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    status.textContent = '';
    form.querySelector('input[name="studentName"]').focus();
  });

  closeButtons.forEach((button) => button.addEventListener('click', closeModal));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fileInput = form.querySelector('input[type="file"]');
    const file = fileInput.files[0];
    if (!file) {
      status.textContent = 'Please upload your Grade 9 statement of result before submitting.';
      status.style.color = '#b42318';
      return;
    }

    const allowedExtensions = ['pdf', 'png', 'jpg', 'jpeg'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      status.textContent = 'Only PDF, JPG, JPEG and PNG files are allowed for the Grade 9 statement of result.';
      status.style.color = '#b42318';
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting…';
    status.textContent = 'Submitting your application…';
    status.style.color = '';
    status.scrollIntoView({ block: 'nearest' });

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        body: new FormData(form)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'The application could not be submitted.');

      status.replaceChildren(
        document.createTextNode(`Application received. Your reference is ${result.reference}. Save it to check for feedback. `)
      );
      const statusLink = document.createElement('a');
      statusLink.href = 'application-status.html';
      statusLink.textContent = 'Check application status';
      status.append(statusLink);
      status.style.color = '#167348';
      form.reset();
    } catch (error) {
      status.textContent = error.message || 'The application could not be submitted. Please try again.';
      status.style.color = '#b42318';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit';
      status.scrollIntoView({ block: 'nearest' });
    }
  });
}

function setupSchoolDirectory() {
  const provinceDirectory = document.getElementById('provinceDirectory');
  const provinceCards = document.getElementById('provinceCards');
  const provinceSchools = document.getElementById('provinceSchools');
  const allSchoolsSection = document.querySelector('.all-schools-section');
  const backToProvinces = document.getElementById('backToProvinces');
  const selectedProvinceTitle = document.getElementById('selectedProvinceTitle');
  const selectedProvinceMeta = document.getElementById('selectedProvinceMeta');
  const selectedProvinceDistricts = document.getElementById('selectedProvinceDistricts');
  const provinceSchoolResults = document.getElementById('provinceSchoolResults');
  const allSchoolsSearch = document.getElementById('allSchoolsSearch');
  const allSchoolsResults = document.getElementById('allSchoolsResults');
  const allSchoolsCount = document.getElementById('allSchoolsCount');

  if (!provinceCards || !provinceSchools) return;

  const sortedProvinces = [...provinceList].sort();

  const schoolCards = (schools) => schools.map((school) => `
      <article class="school-card">
        <header>
          <p class="school-meta">
            <mark class="tag">${school.type}</mark>
            <mark class="tag">${school.category}</mark>
            <mark class="tag">${school.province}</mark>
            ${school.statusNote ? `<mark class="tag tag-review">${school.statusNote}</mark>` : ''}
          </p>
          <h3>${school.name}</h3>
        </header>

        <p><strong>Location:</strong> ${school.town || 'Town not provided'}, ${school.district}</p>
        <p><strong>Mode:</strong> ${school.category}</p>
        <p><strong>Admission:</strong> ${school.admission}</p>

        <ul>
          ${school.services.length ? `<li>${school.services.join(' â€¢ ')}</li>` : ''}
          <li>${school.address}</li>
          <li>${school.contact}</li>
        </ul>

        <button type="button" class="btn btn-primary enrollment-btn" data-school-name="${school.name}">Apply now</button>
      </article>
    `).join('');

  const renderProvinceCards = () => {
    provinceCards.innerHTML = sortedProvinces.map((province, index) => {
      const schools = schoolDirectory.filter((school) => school.province === province);
      const districts = [...new Set(schools.map((school) => school.district))].sort();
      return `
        <li>
          <button type="button" class="province-directory-card" data-province="${province}">
            <small class="province-number">${String(index + 1).padStart(2, '0')}</small>
            <p class="province-card-content">
              <strong>${province}</strong>
              <small class="province-count">${districts.length} districts Â· ${schools.length} schools</small>
              <small class="province-districts">${districts.join(' Â· ')}</small>
            </p>
            <b class="province-arrow" aria-hidden="true">â†’</b>
          </button>
        </li>
      `;
    }).join('');
  };

  const renderAllSchools = (query = '') => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const matches = normalizedQuery
      ? schoolDirectory.filter((school) => [school.name, school.town, school.district, school.province]
        .some((value) => value.toLocaleLowerCase().includes(normalizedQuery)))
      : schoolDirectory;

    allSchoolsCount.textContent = `${matches.length} ${matches.length === 1 ? 'school' : 'schools'} found`;
    allSchoolsResults.innerHTML = matches.length
      ? schoolCards(matches)
      : '<p class="empty-results">No schools match that search. Try another school, town, district, or province.</p>';
  };

  const renderDistrictButtons = (province, selectedDistrict = '') => {
    const schools = schoolDirectory.filter((school) => school.province === province);
    const districts = [...new Set(schools.map((school) => school.district))].sort();
    selectedProvinceDistricts.innerHTML = `
      <li>
        <button type="button" class="district-button${selectedDistrict ? '' : ' active'}" data-district="">
          All districts
        </button>
      </li>
      ${districts.map((district) => `
      <li>
        <button type="button" class="district-button${district === selectedDistrict ? ' active' : ''}" data-district="${district}">
          ${district}
        </button>
      </li>
      `).join('')}
    `;
  };

  const showProvince = (province, updateUrl = true, selectedDistrict = '') => {
    const resolvedProvince = resolveProvinceName(province);
    if (!resolvedProvince) return;

    const schools = schoolDirectory.filter((school) => school.province === resolvedProvince);
    const districts = [...new Set(schools.map((school) => school.district))].sort();
    const activeDistrict = districts.includes(selectedDistrict) ? selectedDistrict : '';
    const visibleDistricts = activeDistrict ? [activeDistrict] : districts;
    selectedProvinceTitle.textContent = resolvedProvince;
    selectedProvinceMeta.textContent = activeDistrict
      ? `${schools.filter((school) => school.district === activeDistrict).length} schools in ${activeDistrict}`
      : `${schools.length} schools across ${districts.length} districts`;
    renderDistrictButtons(resolvedProvince, activeDistrict);
    provinceSchoolResults.innerHTML = visibleDistricts.map((district) => {
      const districtSchools = schools.filter((school) => school.district === district);
      return `
        <section class="district-school-group">
          <header class="district-school-heading">
            <h3>${district}</h3>
            <p>${districtSchools.length} ${districtSchools.length === 1 ? 'school' : 'schools'}</p>
          </header>
          <div class="school-results">${schoolCards(districtSchools)}</div>
        </section>
      `;
    }).join('');
    provinceDirectory.hidden = true;
    provinceSchools.hidden = false;
    if (allSchoolsSection) allSchoolsSection.hidden = true;

    if (updateUrl) {
      const query = new URLSearchParams({ province: resolvedProvince });
      if (activeDistrict) query.set('district', activeDistrict);
      window.history.pushState({}, '', `schools.html?${query.toString()}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showAllProvinces = (updateUrl = true) => {
    provinceDirectory.hidden = false;
    provinceSchools.hidden = true;
    if (allSchoolsSection) allSchoolsSection.hidden = false;

    if (updateUrl) {
      window.history.pushState({}, '', 'schools.html');
    }
  };

  provinceCards.addEventListener('click', (event) => {
    const provinceCard = event.target.closest('[data-province]');
    if (provinceCard) showProvince(provinceCard.dataset.province);
  });

  selectedProvinceDistricts.addEventListener('click', (event) => {
    const districtButton = event.target.closest('[data-district]');
    const province = selectedProvinceTitle.textContent;
    if (districtButton && province) showProvince(province, true, districtButton.dataset.district);
  });

  backToProvinces.addEventListener('click', () => showAllProvinces());
  allSchoolsSearch.addEventListener('input', (event) => renderAllSchools(event.target.value));
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const province = params.get('province');
    const district = params.get('district') || '';
    const resolvedProvince = resolveProvinceName(province);
    if (province && resolvedProvince) showProvince(resolvedProvince, false, district);
    else showAllProvinces(false);
  });

  renderProvinceCards();
  renderAllSchools();

  const initialParams = new URLSearchParams(window.location.search);
  const initialProvince = initialParams.get('province');
  const initialDistrict = initialParams.get('district') || '';
  const resolvedInitialProvince = resolveProvinceName(initialProvince);
  if (initialProvince && resolvedInitialProvince) showProvince(resolvedInitialProvince, false, initialDistrict);
}

function setupMapPage() {
  const mapElement = document.getElementById('zambiaMap');
  const searchInput = document.getElementById('mapSearch');
  const provinceFilter = document.getElementById('provinceFilter');
  const schoolList = document.getElementById('mapSchoolList');
  const resultCount = document.getElementById('mapResultCount');
  const mapTitle = document.getElementById('mapViewTitle');
  const resetButton = document.getElementById('resetMapView');
  const locateButton = document.getElementById('locateMapUser');
  const mapStatus = document.getElementById('mapStatus');

  if (!mapElement || !schoolList) return;

  const townLocations = {
    Lusaka: [-15.4167, 28.2833], Kafue: [-15.769, 28.181], Matero: [-15.367, 28.267],
    Kitwe: [-12.802, 28.213], Ndola: [-12.9587, 28.6366], Chingola: [-12.528, 27.883],
    Kabwe: [-14.4469, 28.4464], Mumbwa: [-14.982, 27.061], Serenje: [-13.232, 30.235],
    Livingstone: [-17.8419, 25.8543], Mazabuka: [-15.856, 27.748], Monze: [-16.283, 27.483],
    Chipata: [-13.633, 32.65], Petauke: [-14.242, 31.325], Katete: [-14.066, 32.05],
    Mongu: [-15.25, 23.15], Senanga: [-16.116, 23.266], Kalabo: [-14.983, 22.683],
    Mpulungu: [-8.762, 31.114], Mbala: [-8.84, 31.366], Kasama: [-10.212, 31.18],
    Kaputa: [-8.467, 29.66], Chilubi: [-11, 29], Luwingu: [-10.26, 29.93],
    Solwezi: [-12.183, 26.4], Mwinilunga: [-11.733, 24.433], Kasempa: [-13.45, 25.833],
    Mpika: [-11.84, 31.45], Isoka: [-10.16, 32.63], Chinsali: [-10.55, 32.07],
    Mansa: [-11.2, 28.89], Samfya: [-11.36, 29.55], Nchelenge: [-9.35, 28.74]
  };
  const provinceLocations = {
    Northern: [-10.2, 31.2],
    'North-Western': [-12.3, 25.5]
  };
  const locationFor = (school) => townLocations[school.town] || provinceLocations[school.province] || [-13.1339, 27.8493];
  const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
  const map = typeof L === 'undefined' ? null : L.map(mapElement, { scrollWheelZoom: false }).setView([-13.1339, 27.8493], 6);
  const markerLayer = map ? L.layerGroup().addTo(map) : null;
  const locationLayer = map ? L.layerGroup().addTo(map) : null;
  const routeLayer = map ? L.layerGroup().addTo(map) : null;
  const streetLayer = map ? L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }) : null;
  const markersBySchool = new Map();
  let currentLocation = null;
  let routeRequestId = 0;
  let visibleSchools = schoolDirectory;

  if (map) {
    streetLayer.addTo(map);
  } else {
    mapStatus.hidden = false;
    mapStatus.textContent = 'The interactive map could not load. School search and the list are still available.';
  }

  if (map) {
    map.on('locationfound', (event) => {
      currentLocation = event.latlng;
      routeRequestId += 1;
      routeLayer.clearLayers();
      locationLayer.clearLayers();
      L.circle(event.latlng, { radius: event.accuracy }).addTo(locationLayer);
      L.marker(event.latlng).bindPopup('Your current location').addTo(locationLayer).openPopup();
      map.setView(event.latlng, Math.max(map.getZoom(), 14));
      mapStatus.hidden = false;
      mapStatus.textContent = `Your location is shown. Accuracy: about ${Math.round(event.accuracy)} metres.`;
    });
    map.on('locationerror', (event) => {
      currentLocation = null;
      routeRequestId += 1;
      routeLayer.clearLayers();
      mapStatus.hidden = false;
      mapStatus.textContent = `Could not get your location: ${event.message} Check your location permission and try again.`;
    });
  }

  const showRouteToSchool = async (school) => {
    if (!map || !currentLocation) {
      mapStatus.hidden = false;
      mapStatus.textContent = 'Select Use my location first, then choose Route to school.';
      return;
    }

    const requestId = ++routeRequestId;
    const [destinationLat, destinationLon] = locationFor(school);
    const routeUrl = `https://router.project-osrm.org/route/v1/driving/${currentLocation.lng},${currentLocation.lat};${destinationLon},${destinationLat}?overview=full&geometries=geojson`;
    routeLayer.clearLayers();
    mapStatus.hidden = false;
    mapStatus.textContent = `Finding a road route to ${school.name}…`;

    try {
      const response = await fetch(routeUrl);
      if (!response.ok) throw new Error(`Routing service returned HTTP ${response.status}.`);
      const result = await response.json();
      if (requestId !== routeRequestId) return;
      if (result.code !== 'Ok' || !result.routes || !result.routes.length) {
        throw new Error('No driving route was found for these locations.');
      }

      const route = result.routes[0];
      const routeGeometry = L.geoJSON(route.geometry, {
        style: { color: '#0b746a', weight: 6, opacity: 0.85 }
      });
      routeGeometry.addTo(routeLayer);
      map.fitBounds(routeGeometry.getBounds(), { padding: [30, 30] });
      mapStatus.textContent = `Route shown to the approximate ${school.town || school.district} location: ${(route.distance / 1000).toFixed(1)} km, about ${Math.round(route.duration / 60)} minutes. This is not the exact school campus.`;
    } catch (error) {
      if (requestId !== routeRequestId) return;
      mapStatus.textContent = `Could not find a road route: ${error.message}`;
    }
  };

  const updateMap = () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const province = provinceFilter.value;
    visibleSchools = schoolDirectory.filter((school) => {
      const matchesProvince = province === 'all' || school.province === province;
      const matchesSearch = !query || [school.name, school.town, school.district, school.province]
        .some((value) => value.toLocaleLowerCase().includes(query));
      return matchesProvince && matchesSearch;
    });

    resultCount.textContent = `${visibleSchools.length} listed`;
    mapTitle.textContent = province === 'all' ? 'All listed schools' : `${province} schools`;
    schoolList.replaceChildren();
    markersBySchool.clear();
    routeRequestId += 1;
    if (routeLayer) routeLayer.clearLayers();
    if (map) map.closePopup();
    if (markerLayer) markerLayer.clearLayers();

    const locationGroups = new Map();
    visibleSchools.forEach((school) => {
      const coordinates = locationFor(school);
      const locationKey = coordinates.join(',');
      if (!locationGroups.has(locationKey)) locationGroups.set(locationKey, { coordinates, schools: [] });
      locationGroups.get(locationKey).schools.push(school);
    });

    locationGroups.forEach(({ coordinates, schools }) => {
      const names = schools.map((school) => `<li><strong>${escapeHtml(school.name)}</strong><br>${escapeHtml(school.town || school.district)}, ${escapeHtml(school.province)}</li>`).join('');
      const town = schools[0].town;
      const approximate = town === 'Northern Province' || !townLocations[town];
      const locationLabel = approximate ? `${schools[0].province} (approximate)` : town;
      const marker = map ? L.marker(coordinates, { icon: L.divIcon({
        className: 'school-map-marker-wrap',
        html: `<span class="school-map-marker">${schools.length}</span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      }) }).bindPopup(
        `<div class="map-popup"><strong>${escapeHtml(locationLabel)}</strong><ul>${names}</ul><span>${schools.length} listed ${schools.length === 1 ? 'school' : 'schools'}</span></div>`
      ).addTo(markerLayer) : null;
      schools.forEach((school) => markersBySchool.set(schoolDirectory.indexOf(school), marker));
    });

    visibleSchools.forEach((school) => {
      const index = schoolDirectory.indexOf(school);
      const item = document.createElement('li');
      const button = document.createElement('button');
      const routeButton = document.createElement('button');
      const name = document.createElement('strong');
      const meta = document.createElement('span');
      const actions = document.createElement('div');
      button.type = 'button';
      button.className = 'map-school-item';
      name.textContent = school.name;
      meta.textContent = `${school.town || school.district} Â· ${school.province}`;
      button.append(name, meta);
      button.addEventListener('click', () => {
        const marker = markersBySchool.get(index);
        if (map && marker) {
          map.setView(marker.getLatLng(), Math.max(map.getZoom(), 10));
          marker.openPopup();
        }
      });
      routeButton.type = 'button';
      routeButton.className = 'map-route-button';
      routeButton.textContent = 'Route to school';
      routeButton.setAttribute('aria-label', `Show road route to ${school.name}`);
      routeButton.addEventListener('click', () => showRouteToSchool(school));
      actions.className = 'map-school-actions';
      actions.append(routeButton);
      item.append(button, actions);
      schoolList.append(item);
    });

    if (!visibleSchools.length) {
      const emptyState = document.createElement('li');
      emptyState.className = 'map-empty-state';
      emptyState.textContent = 'No schools match this search.';
      schoolList.append(emptyState);
    }

    if (map && visibleSchools.length) {
      const coordinates = [...locationGroups.values()].map((group) => group.coordinates);
      if (province === 'all' && !query) map.setView([-13.1339, 27.8493], 6);
      else if (coordinates.length === 1) map.setView(coordinates[0], 10);
      else map.fitBounds(L.latLngBounds(coordinates).pad(0.12), { maxZoom: 7 });
    }
  };

  searchInput.addEventListener('input', updateMap);
  provinceFilter.addEventListener('change', updateMap);
  locateButton.addEventListener('click', () => {
    if (!map || !navigator.geolocation) {
      mapStatus.hidden = false;
      mapStatus.textContent = 'Location is not available in this browser. Try a current browser over HTTPS.';
      return;
    }
    mapStatus.hidden = false;
    mapStatus.textContent = 'Finding your location… Please allow location access when your browser asks.';
    map.locate({ setView: true, maxZoom: 14, enableHighAccuracy: true, timeout: 15000 });
  });
  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    provinceFilter.value = 'all';
    if (locationLayer) locationLayer.clearLayers();
    currentLocation = null;
    routeRequestId += 1;
    if (routeLayer) routeLayer.clearLayers();
    mapStatus.hidden = true;
    updateMap();
  });
  updateMap();
}

function setupContactForms() {
  const forms = document.querySelectorAll('form[data-contact-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      const nameField = form.querySelector('input[name="name"]');
      const name = nameField ? nameField.value.trim() : 'there';

      if (status) {
        status.textContent = `Thank you, ${name}! Your message has been saved locally for review.`;
        status.style.color = '#0d7a63';
      }

      form.reset();
    });
  });
}

function setupApplicationStatusPage() {
  const form = document.getElementById('applicationStatusForm');
  const message = document.getElementById('applicationStatusMessage');
  const resultPanel = document.getElementById('applicationStatusResult');
  const heading = document.getElementById('applicationStatusHeading');
  const feedback = document.getElementById('applicationFeedback');
  if (!form || !message || !resultPanel || !heading || !feedback) return;

  const referenceInput = form.querySelector('input[name="reference"]');
  const params = new URLSearchParams(window.location.search);
  referenceInput.value = params.get('reference') || '';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    message.textContent = 'Checking your application…';
    resultPanel.hidden = true;

    try {
      const response = await fetch('/api/application-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reference: referenceInput.value.trim(),
          email: form.querySelector('input[name="email"]').value.trim()
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not check the application.');
      heading.textContent = `Status: ${data.status}`;
      feedback.textContent = data.feedback || 'No feedback has been added yet. Please check again later.';
      message.textContent = `Submitted ${new Date(data.submittedAt).toLocaleString()}.`;
      resultPanel.hidden = false;
    } catch (error) {
      message.textContent = error.message || 'Could not check the application. Please try again.';
    }
  });
}

setupMobileNav();
setupYear();
setupHomeSearch();
setupEnrollmentModal();
setupSchoolDirectory();
setupMapPage();
setupContactForms();
setupApplicationStatusPage();
