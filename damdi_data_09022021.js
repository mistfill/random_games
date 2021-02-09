console.log('Start')

let damdiLOGO = "https://thumb.tildacdn.com/tild3338-6163-4766-b838-386465326436/-/format/webp/noroot.png";

let allRESTARANS = [{'id': '1', 'restNAME': 'Чайхана NAVAT на Сейфуллина', 'restPRICE': '4000–5000', 'restKITCH': 'восточная, казахская, узбекская, уйгурская, европейская', 'restADRES': 'пр. Сейфуллина, 500/79', 'restINSTA': 'https://www.instagram.com/navat.com.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '2', 'restNAME': 'Turandot на Абая', 'restPRICE': '5000–6000', 'restKITCH': 'китайская', 'restADRES': 'пр. Абая, 157 А, уг. ул. Розыбакиева', 'restINSTA': 'https://www.instagram.com/turandot.kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '3', 'restNAME': 'Turandot на Достык', 'restPRICE': '5000–6000', 'restKITCH': 'китайская', 'restADRES': 'пр. Достык, 109 Б', 'restINSTA': 'https://www.instagram.com/turandot.kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '4', 'restNAME': 'Апрель', 'restPRICE': '5000–7000', 'restKITCH': 'восточная, европейская, итальянская, кавказская, корейская, японская', 'restADRES': 'пр. Гагарина, 111 Б', 'restINSTA': 'https://www.instagram.com/april_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '5', 'restNAME': 'Turandot на Жарокова', 'restPRICE': '5000–6000', 'restKITCH': 'китайская', 'restADRES': 'ул. Жарокова, 282, уг. ул. Дунаевского', 'restINSTA': 'https://www.instagram.com/turandot.kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '6', 'restNAME': 'МЯТА FOOD', 'restPRICE': '4000–4500', 'restKITCH': 'европейская, азиатская', 'restADRES': 'ул. Ауэзова, 109', 'restINSTA': 'https://www.instagram.com/myata_food_ayezova/', 'restTIME': 'Ежедневно с 13:00 до 23:00', 'restTimeOpen': '13:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '7', 'restNAME': 'Бочонок в Орбите', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, кавказская, мексиканская, немецкая', 'restADRES': 'мкр. Орбита 3, д. 3', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '8', 'restNAME': 'Бочонок на Назарбаева', 'restPRICE': '5000–7000', 'restKITCH': 'восточная, европейская, мексиканская, немецкая, кавказская', 'restADRES': 'пр. Назарбаева, 193 (бывш. ул. Фурманова)', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '9', 'restNAME': 'Бочонок на Достык', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, кавказская, немецкая', 'restADRES': 'пр. Достык, 109 Б', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '10', 'restNAME': 'Бочонок на Жандосова', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, кавказская, немецкая, мексиканская', 'restADRES': 'ул. Жандосова, 40, уг. ул. Жарокова', 'restINSTA': 'https://www.instagram.com/bochonok.kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '11', 'restNAME': 'Turandot на Назарбаева', 'restPRICE': '5000–6000', 'restKITCH': 'китайская', 'restADRES': 'пр. Назарбаева, 97 А (бывш. Фурманова)', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '12', 'restNAME': 'Чайхана NAVAT на Макатаева', 'restPRICE': '3500–5500', 'restKITCH': 'восточная, казахская, узбекская, уйгурская', 'restADRES': 'пр. Абылай хана, 58 А', 'restINSTA': 'https://www.instagram.com/navat.com.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '13', 'restNAME': 'Тануки', 'restPRICE': '5000–7000', 'restKITCH': 'японская, авторская', 'restADRES': 'пр. Достык, 232', 'restINSTA': 'https://www.instagram.com/tanuki_kz/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '14', 'restNAME': 'Якорь', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, итальянская, казахская', 'restADRES': 'ул. Толе би, 72, уг. пр. Желтоксан', 'restINSTA': 'https://www.instagram.com/restoran_yakor1/', 'restTIME': 'Ежедневно с 09:30 до 23:00', 'restTimeOpen': '09:30', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '15', 'restNAME': 'Алаша', 'restPRICE': '8000–15000', 'restKITCH': 'узбекская, восточно-европейская', 'restADRES': 'ул. Оспанова, 20, уг. пр. Достык', 'restINSTA': 'https://www.instagram.com/alasha.almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '16', 'restNAME': 'Little Brazil', 'restPRICE': '15000', 'restKITCH': 'бразильская, европейская', 'restADRES': 'пр. Аль-Фараби, 140 А/4', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '18', 'restNAME': 'Erbil', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, грузинская, восточная, казахская', 'restADRES': 'ул. Сауранбаева, 5', 'restINSTA': 'https://www.instagram.com/grand_erbil_hotel/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '19', 'restNAME': 'Чайхана', 'restPRICE': '5000–10000', 'restKITCH': 'казахская, узбекская, уйгурская, европейская', 'restADRES': 'ул. Муканова, 189', 'restINSTA': 'https://www.instagram.com/marakandakz/', 'restTIME': 'Ежедневно с 10:00 до 22:30', 'restTimeOpen': '10:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '20', 'restNAME': 'Мараканда', 'restPRICE': '5000–10000', 'restKITCH': 'казахская, узбекская, уйгурская, европейская, восточная', 'restADRES': 'ул. Муканова, 189', 'restINSTA': 'https://www.instagram.com/marakandakz/', 'restTIME': 'Ежедневно с 10:00 до 22:30', 'restTimeOpen': '10:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '21', 'restNAME': 'Double Coffee', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'Наурызбай Батыра, 94 уг. ул. Толе Би', 'restINSTA': 'https://www.instagram.com/doublecoffee_almaty/', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '22', 'restNAME': 'Noodles', 'restPRICE': '5000–7000', 'restKITCH': 'американская, европейская, паназиатская, турецкая', 'restADRES': 'пр. Достык, 52/2', 'restINSTA': 'https://www.instagram.com/noodles_almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '23', 'restNAME': 'Форт Горный', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, корейская', 'restADRES': 'мкр. Хан-Тенгри, 197', 'restINSTA': 'https://www.instagram.com/fort_vernyi/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '24', 'restNAME': 'Renion park', 'restPRICE': '3500–10000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Кунаева, 66', 'restINSTA': 'https://www.instagram.com/renion.kazakhstan/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '26', 'restNAME': 'Dolcetto', 'restPRICE': '5000–7500', 'restKITCH': 'итальянская, европейская', 'restADRES': 'ул. Кунаева, 114', 'restINSTA': 'https://www.instagram.com/dolcetto.almaty/', 'restTIME': 'Сегодня c 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '27', 'restNAME': 'Veranda', 'restPRICE': '5000–11000', 'restKITCH': 'восточно-европейская, кавказская, казахская, европейская', 'restADRES': 'ул. Акан серi, 75', 'restINSTA': 'https://www.instagram.com/_v_e_r_a_n_d_a/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '28', 'restNAME': 'Saint Pierre', 'restPRICE': '10000–20000', 'restKITCH': 'средиземноморская, европейская', 'restADRES': 'ул. Богенбай батыра, 136, уг. ул. Желтоксан', 'restINSTA': 'https://www.instagram.com/saint_pierre_restaurant/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '31', 'restNAME': 'Vmeste', 'restPRICE': '7000–10000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Кажымукана, 43', 'restINSTA': 'https://www.instagram.com/vmestealmaty/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '32', 'restNAME': 'Керемет', 'restPRICE': '5500–7500', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Аманжол, 12 Б', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '33', 'restNAME': 'Белый Слон', 'restPRICE': '6000–8000', 'restKITCH': 'тайская, европейская', 'restADRES': 'пр. Назарбаева, 226', 'restINSTA': 'https://www.instagram.com/beliyslon_thaifood/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '36', 'restNAME': 'ZMood', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, паназиатская', 'restADRES': 'мкр. Самал 3, ул. Хаджи Мукана, 49, ЖК Royal, 1 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '37', 'restNAME': 'Malvazija', 'restPRICE': '5000–8000', 'restKITCH': 'европейская, средиземноморская', 'restADRES': 'ул. Мусабаева, 8', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 20:00', 'restTimeOpen': '09:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '38', 'restNAME': 'Печь', 'restPRICE': '7000–11000', 'restKITCH': 'восточно-европейская, авторская', 'restADRES': 'ул. Шевченко, 41', 'restINSTA': 'https://www.instagram.com/pech.kz/', 'restTIME': 'Сегодня c 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '39', 'restNAME': 'Trattoria', 'restPRICE': '5000–7000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Назарбаева, 220', 'restINSTA': 'https://www.instagram.com/palladium_family/', 'restTIME': 'Сегодня c 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '40', 'restNAME': 'Вера и Ваке', 'restPRICE': '6000–7000', 'restKITCH': 'грузинская, кавказская', 'restADRES': 'ул. Желтоксан, 148', 'restINSTA': 'https://www.instagram.com/vera_vake/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '41', 'restNAME': 'Жу-Жу', 'restPRICE': '2000–6000', 'restKITCH': 'европейская', 'restADRES': 'мкр. Мамыр 7, 8 Б', 'restINSTA': 'https://www.instagram.com/zhuzhualmaty/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '42', 'restNAME': 'Family Art Resto Bar', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, казахская', 'restADRES': 'пр. Назарбаева, 97 А', 'restINSTA': 'https://www.instagram.com/harveys_almaty/', 'restTIME': 'Ежедневно с 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '43', 'restNAME': 'Bar & Grill', 'restPRICE': '20000–40000', 'restKITCH': 'европейская, японская', 'restADRES': 'пр. Аль-Фараби, 77/7', 'restINSTA': '', 'restTIME': 'Ежедневно с 18:00 до 24:00', 'restTimeOpen': '18:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '46', 'restNAME': 'Arasan Wellness & SPA', 'restPRICE': '1500–4000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Тулебаева, 78, уг. ул. Айтеке би', 'restINSTA': 'https://www.instagram.com/arasanspacomplex/', 'restTIME': 'Ежедневно с 07:00 до 22:40', 'restTimeOpen': '07:00', 'restTimeClose': '22:40', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '47', 'restNAME': 'ВьетКафе', 'restPRICE': '3000–5000', 'restKITCH': 'вьетнамская, японская', 'restADRES': 'ул. Розыбаекиева, 263, ТРЦ Mega Alma-Ata, 3 этаж, Галерея ресторанов', 'restINSTA': 'https://www.instagram.com/vietcafe_almaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '48', 'restNAME': 'Хинкальная', 'restPRICE': '5000–6000', 'restKITCH': 'грузинская', 'restADRES': 'ул. Пятницкого, 23, уг. ул. Сулейменова', 'restINSTA': 'https://www.instagram.com/restoran__hinkalnaya_almaty/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '49', 'restNAME': 'Наурыз', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Богенбай батыра, 115/105', 'restINSTA': '', 'restTIME': 'Ежедневно с 06:00 до 24:00', 'restTimeOpen': '06:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '50', 'restNAME': 'Honey Honey', 'restPRICE': '7000–10000', 'restKITCH': 'европейская, итальянская, японская', 'restADRES': 'пр. Аль-Фараби 77/1,\u2009в здании ЖК Еsentai Apartments, 1 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '52', 'restNAME': 'Mediterranean Restaurant', 'restPRICE': '10000–12000', 'restKITCH': 'средиземноморская, итальянская', 'restADRES': 'пр. Аль-Фараби 116\\20', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '53', 'restNAME': 'Wine Space', 'restPRICE': '10000–12000', 'restKITCH': 'европейская', 'restADRES': 'ул. \u200bСатпаева, 2', 'restINSTA': 'https://www.instagram.com/winespace.almaty/', 'restTIME': 'Сегодня c 11:00 до 03:00', 'restTimeOpen': '11:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '54', 'restNAME': 'R.S`SULTAN', 'restPRICE': '5000–16000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Калдаякова, 58', 'restINSTA': 'https://www.instagram.com/monroe_sultan/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '55', 'restNAME': 'Bestfood-Sport', 'restPRICE': '1500–2500', 'restKITCH': 'европейская', 'restADRES': 'мкр. Самал 1, ул. Жолдасбекова, 9', 'restINSTA': 'https://www.instagram.com/bestfoodsport/', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '56', 'restNAME': 'Pattaya', 'restPRICE': '3000–5000', 'restKITCH': 'тайская', 'restADRES': 'мкр. Хан-Тенгри, 212/3', 'restINSTA': 'https://www.instagram.com/pattayaspa.kz/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '58', 'restNAME': 'Пекинская утка', 'restPRICE': '7000–10000', 'restKITCH': 'китайская', 'restADRES': 'ул. Сатпаева, 220/3', 'restINSTA': 'https://www.instagram.com/palladium_family/', 'restTIME': 'Сегодня c 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '59', 'restNAME': 'Bereket', 'restPRICE': '1500–3000', 'restKITCH': 'турецкая', 'restADRES': 'мкр. Самал 2, ул. Мендикулова, 98, уг. ул. Бектурова', 'restINSTA': 'https://www.instagram.com/bereketcafe_almaty/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '60', 'restNAME': 'Додо пицца в ТРК ADK', 'restPRICE': '1500–3000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Сатпаева, 90', 'restINSTA': 'https://www.instagram.com/dodopizza.almaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '62', 'restNAME': 'Ozyurt Aport Mall', 'restPRICE': '3000–5000', 'restKITCH': 'турецкая', 'restADRES': 'Ташкентский тракт, 17км — 2 этаж, ТРЦ Апорт', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '63', 'restNAME': 'Bestfood-Sport', 'restPRICE': '1500–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Розыбакиева, 235', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '66', 'restNAME': 'Japanese Grill', 'restPRICE': '6000–10000', 'restKITCH': 'японская', 'restADRES': 'пр. Аль-Фараби 116\\21', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '68', 'restNAME': 'AsiaN BarBeQue', 'restPRICE': '3000–5000', 'restKITCH': 'азиатская, корейская, японская, китайская', 'restADRES': 'ул. Мынбаева, 117/40, уг. ул. Хусаинова', 'restINSTA': 'https://www.instagram.com/asianbbq/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '69', 'restNAME': 'Hanok', 'restPRICE': '3000–6000', 'restKITCH': 'корейская', 'restADRES': 'ул. Масанчи, 100', 'restINSTA': 'https://www.instagram.com/hanok_almaty/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '70', 'restNAME': 'Masisso на Назарбаева', 'restPRICE': '5000–6000', 'restKITCH': 'корейская, итальянская, паназиатская', 'restADRES': 'пр. Назарбаева, 57', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '71', 'restNAME': 'Dinastia', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'бул. Бухар Жырау, 20/2', 'restINSTA': 'https://www.instagram.com/dinastia_almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '72', 'restNAME': 'Grand Cafe Delicat`L', 'restPRICE': '8000–12000', 'restKITCH': 'европейская', 'restADRES': 'ул. Панфилова, 114', 'restINSTA': 'https://www.instagram.com/delicat_l/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '74', 'restNAME': 'Tavaduri', 'restPRICE': '5000–10000', 'restKITCH': 'грузинская, европейская, казахская', 'restADRES': 'ул. Розыбакиева, 165 А', 'restINSTA': 'https://www.instagram.com/tavaduri_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '75', 'restNAME': 'SAMURAI SUSHI по Шолохова', 'restPRICE': '2000–5000', 'restKITCH': 'японская, европейская', 'restADRES': 'ул. Шолохова 13, уг. ул. Рихарда Зорге', 'restINSTA': 'https://www.instagram.com/samuraisushi2014/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '76', 'restNAME': 'Хан-Тенгри', 'restPRICE': '5000–10000', 'restKITCH': 'казахская, европейская', 'restADRES': 'мкр. Хан-Тенгри, ул. Дулати, 97', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 03:00', 'restTimeOpen': '09:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '77', 'restNAME': 'Craft Kitchen & Bar', 'restPRICE': '5000–7000', 'restKITCH': 'авторская, бразильская, гавайская', 'restADRES': 'пр. Достык, 40/1', 'restINSTA': 'https://www.instagram.com/craft.almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '78', 'restNAME': 'Счастье на Абая', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, итальянская, азиатская', 'restADRES': 'пр. Абая, 82, уг. ул. Клочкова', 'restINSTA': 'https://www.instagram.com/schastyekz/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '79', 'restNAME': 'Tito Arcanum', 'restPRICE': '4500–7000', 'restKITCH': 'арабская, турецкая, еврейская', 'restADRES': 'пр. Аль-Фараби, 75 В/1', 'restINSTA': 'https://www.instagram.com/tito.arcanum/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '80', 'restNAME': 'Del Papa на Назарбаева', 'restPRICE': '3000–6000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Кабанбай батыра, 83 (бывш. ул. Калинина), уг. ул. Назарбаева', 'restINSTA': 'https://www.instagram.com/del_papa/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '81', 'restNAME': 'Одесса', 'restPRICE': '4000–10000', 'restKITCH': 'русская, украинская, еврейская', 'restADRES': 'пр. Назарбаева, 220', 'restINSTA': 'https://www.instagram.com/odessa_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '83', 'restNAME': 'Balu', 'restPRICE': '8000–12000', 'restKITCH': 'фьюжн-кухня', 'restADRES': 'ул. Панфилова, 110', 'restINSTA': 'https://www.instagram.com/balu_almaty/', 'restTIME': 'Сегодня c 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '85', 'restNAME': 'Prime House', 'restPRICE': '15000–20000', 'restKITCH': 'европейская', 'restADRES': 'ул. Оспанова, 69/2, ЖК «Нур тобе»', 'restINSTA': 'https://www.instagram.com/primehouse_almaty/', 'restTIME': 'Сегодня c 17:00 до 01:00', 'restTimeOpen': '17:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '86', 'restNAME': 'Сарай Бар', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Горная, 640', 'restINSTA': 'https://www.instagram.com/shymbulak_resort_hotel/', 'restTIME': 'Ежедневно с 08:00 до 02:00', 'restTimeOpen': '08:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '88', 'restNAME': 'Шарис', 'restPRICE': '3500–5000', 'restKITCH': 'восточно-европейская, казахская', 'restADRES': 'ул. Зорге, 2 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '89', 'restNAME': 'Старый мельник', 'restPRICE': '5000–6000', 'restKITCH': 'европейская, казахская, кавказская', 'restADRES': 'мкр. Алатау, квартал Б', 'restINSTA': 'https://www.instagram.com/staryymelnik_hotel_almaty/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '91', 'restNAME': 'Ресторанно-гостиничный комплекс "KaAiEr"', 'restPRICE': '1500–3000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Айтиева 31, ул. Кабанбай батыра', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '93', 'restNAME': 'LAJIA GOURMET', 'restPRICE': '4500–7000', 'restKITCH': 'китайская', 'restADRES': 'пр. Сейфуллина, 464', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '95', 'restNAME': 'Kalyan&Steak house', 'restPRICE': '7000–10000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Макатаева, 56, уг. ул. Кунаева', 'restINSTA': 'https://www.instagram.com/kalyan_steak_house/', 'restTIME': 'Ежедневно с 16:00 до 04:00', 'restTimeOpen': '16:00', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '97', 'restNAME': 'ВьетКафе в ТРК Dostyk Plaza', 'restPRICE': '2500–4000', 'restKITCH': 'японская, вьетнамская', 'restADRES': 'мкр. Самал 2, 111, ТРЦ Dostyk Plaza', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '99', 'restNAME': 'Ресторанно-гостиничный комплекс «Grand Family Hall»', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, восточная, казахская', 'restADRES': '4-й микрорайон, 10/2', 'restINSTA': 'https://www.instagram.com/grand_family_hall/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '100', 'restNAME': 'Отрар', 'restPRICE': '3000–6000', 'restKITCH': 'восточная, европейская, казахская', 'restADRES': 'ул. Гоголя, 73', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '102', 'restNAME': 'Тамшы Булак', 'restPRICE': '3000', 'restKITCH': 'казахская, восточная, европейская', 'restADRES': 'ул. Халиуллина, 210/1', 'restINSTA': 'https://www.instagram.com/tamshybulak_restoran/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '103', 'restNAME': 'Matador', 'restPRICE': '4000–5000', 'restKITCH': 'американская, турецкая', 'restADRES': 'ул. Богенбай батыра, 123', 'restINSTA': 'https://www.instagram.com/almaty_matador/', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '104', 'restNAME': 'Трактир на Калинина', 'restPRICE': '5000–8000', 'restKITCH': 'русская, европейская', 'restADRES': 'ул. Кабанбай Батыра, 140, уг. пр. Сейфуллина', 'restINSTA': 'https://www.instagram.com/traktirnakalinina/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '105', 'restNAME': 'Nino Restaurant', 'restPRICE': '7000–10000', 'restKITCH': 'грузинская, итальянская', 'restADRES': 'пр. Аль-Фараби, 140 А', 'restINSTA': 'https://www.instagram.com/nino.almaty/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '107', 'restNAME': 'Dante', 'restPRICE': '7000–8000', 'restKITCH': 'европейская', 'restADRES': 'ул. Желтоксан, 118', 'restINSTA': 'https://www.instagram.com/dante_almaty/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '109', 'restNAME': 'Хачапури Хинкальевич по пр. Достык', 'restPRICE': '3000–4000', 'restKITCH': 'грузинская, европейская', 'restADRES': 'пр. Достык, 29', 'restINSTA': 'https://www.instagram.com/hachapuri_hinkalevich/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '110', 'restNAME': 'Peppoli', 'restPRICE': '20000–25000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'пр. Аль-Фараби, 140 А', 'restINSTA': 'https://www.instagram.com/villaalmaty/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '113', 'restNAME': 'Thali', 'restPRICE': '5000–7000', 'restKITCH': 'индийская, ливанская, европейская, итальянская', 'restADRES': 'ул. Желтоксан, 160, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/thali_almaty/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '116', 'restNAME': 'BAO по Назарбаева', 'restPRICE': '3500–5000', 'restKITCH': 'паназиатская', 'restADRES': 'пр. Назарбаева (бывш. ул. Фурманова), 77, уг. ул. Гоголя', 'restINSTA': 'https://www.instagram.com/baoalmaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '117', 'restNAME': 'Восточный Экспресс', 'restPRICE': '5000–8000', 'restKITCH': 'восточная, дунганская, европейская, казахская, китайская', 'restADRES': 'ул. Наурызбай батыра, 12', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '118', 'restNAME': 'Salt', 'restPRICE': '4500–7500', 'restKITCH': 'европейская, американская, восточная, казахская, итальянская', 'restADRES': 'ул. Гоголя, 127/1', 'restINSTA': '', 'restTIME': 'Ежедневно с 07:00 до 22:00', 'restTimeOpen': '07:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '119', 'restNAME': 'Астра', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, казахская, русская', 'restADRES': 'ул. Желтоксан, 12', 'restINSTA': 'https://www.instagram.com/astrahotel.almaty/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '120', 'restNAME': 'Golden Mir', 'restPRICE': '6000–18000', 'restKITCH': 'европейская, казахская, турецкая', 'restADRES': 'ул. Жамакаева, 254 В', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '121', 'restNAME': 'Жайлау', 'restPRICE': '6500–10000', 'restKITCH': 'казахская, восточная', 'restADRES': 'ул. Орманова, 133', 'restINSTA': 'https://www.instagram.com/etnocafezhaylau/', 'restTIME': 'Ежедневно с 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '123', 'restNAME': 'Royal Cafe', 'restPRICE': '10000–15000', 'restKITCH': 'восточно-европейская, казахская, итальянская, азиатская', 'restADRES': 'ул. Оспанова, 401/2, уг. пр. Достык', 'restINSTA': 'https://www.instagram.com/royaltulipalmaty/', 'restTIME': 'Ежедневно с 06:30 до 23:00', 'restTimeOpen': '06:30', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '124', 'restNAME': 'Resto Bar 1GOG', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, паназиатская, кавказская', 'restADRES': 'ул. Байзакова, 280', 'restINSTA': 'https://www.instagram.com/1gog_resto_bar/', 'restTIME': 'Сегодня c 12:00 до 03:00', 'restTimeOpen': '12:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '127', 'restNAME': 'Best Western Plus Atakent Park Hotel', 'restPRICE': '10000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Тимирязева, 42', 'restINSTA': 'https://www.instagram.com/atakent_park_hotel/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '128', 'restNAME': 'Sapori Veri', 'restPRICE': '4500–7500', 'restKITCH': 'итальянская, европейская, американская', 'restADRES': 'ул Наурызбай батыра , 108, уг. ул. Карасай батыра', 'restINSTA': 'https://www.instagram.com/saporiveri_almaty/', 'restTIME': 'Ежедневно с 07:00 до 22:00', 'restTimeOpen': '07:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '129', 'restNAME': 'Abay', 'restPRICE': '10000–15000', 'restKITCH': 'казахская, восточная', 'restADRES': 'ул. Омаровой, 41/2', 'restINSTA': 'https://www.instagram.com/abay_koktobe/', 'restTIME': 'Сегодня c 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '130', 'restNAME': 'Чито Грито', 'restPRICE': '3000–5000', 'restKITCH': 'грузинская, европейская, восточная', 'restADRES': 'ул. Розыбакиева, 250 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '134', 'restNAME': 'Uno Dos Tacos в мкр. Самал', 'restPRICE': '1000–2000', 'restKITCH': 'мексиканская', 'restADRES': 'мкр. Самал 2, 111, ТРЦ Dostyk Plaza', 'restINSTA': 'https://www.instagram.com/uno_dos_tacos/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '135', 'restNAME': 'Жан Плов Лагман по Достык', 'restPRICE': '3000–3500', 'restKITCH': 'европейская, восточная, китайская, узбекская, кавказская', 'restADRES': 'пр. Достык, 118', 'restINSTA': 'https://www.instagram.com/zhan.plov.lagman/', 'restTIME': 'Сегодня c 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '137', 'restNAME': 'Додо пицца в мкр. Самал', 'restPRICE': '1500–3000', 'restKITCH': 'итальянская', 'restADRES': 'мкр. Самал 2, 63 в здании ЖК «Триумф»', 'restINSTA': 'https://www.instagram.com/dodopizza.almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '138', 'restNAME': 'У Афанасича', 'restPRICE': '8000–15000', 'restKITCH': 'американская, восточная, грузинская, европейская, итальянская, кавказская, русская, японская', 'restADRES': 'пр. Достык, 123/8', 'restINSTA': 'https://www.instagram.com/u_afanasicha/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '139', 'restNAME': 'Del Mar', 'restPRICE': '20000–25000', 'restKITCH': 'средиземноморская, европейская', 'restADRES': 'пр. Аль-Фараби, 140 А', 'restINSTA': 'https://www.instagram.com/del_mar_almaty/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '140', 'restNAME': 'SABABA', 'restPRICE': '5000–6000', 'restKITCH': 'европейская, турецкая', 'restADRES': 'ул. Желтоксан, 144', 'restINSTA': 'https://www.instagram.com/sababakz/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '141', 'restNAME': 'Fornarina', 'restPRICE': '5000–1000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Абылай хана, 59', 'restINSTA': 'https://www.instagram.com/fornarina.kz/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '142', 'restNAME': 'Line Brew', 'restPRICE': '10000–15000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 187 А', 'restINSTA': 'https://www.instagram.com/linebrew_almaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '143', 'restNAME': 'Мята Platinum', 'restPRICE': '4500–8000', 'restKITCH': 'европейская, итальянская', 'restADRES': '\u200bул. Тимирязева, 38/1', 'restINSTA': 'https://www.instagram.com/myata_platinum_atakent/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '145', 'restNAME': 'Жасмин', 'restPRICE': '2500–5000', 'restKITCH': 'восточная, европейская, кавказская, казахская', 'restADRES': 'ул. Карасай батыра, 156 А, ниже ул. Айтиева', 'restINSTA': 'https://www.instagram.com/zhasminrestaurant/', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '146', 'restNAME': 'OLIVIER Restaurant & Bar', 'restPRICE': '15000–20000', 'restKITCH': 'азиатская, европейская', 'restADRES': 'ул. Курмангазы, 43, пр. Назарбаева (бывш. ул. Фурманова)', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '147', 'restNAME': 'Grelka', 'restPRICE': '9000–1200', 'restKITCH': 'европейская, авторская', 'restADRES': 'ул. Горная, 640/3', 'restINSTA': 'https://www.instagram.com/grelkaalmaty/', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '149', 'restNAME': 'Dushes', 'restPRICE': '8000–12000', 'restKITCH': 'европейская, паназиатская, итальянская', 'restADRES': 'пр. Аль-Фараби, 21, ЖК «AFD Plaza», блок 1', 'restINSTA': 'https://www.instagram.com/dushes.kz/', 'restTIME': 'Сегодня c 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '150', 'restNAME': 'Turan', 'restPRICE': '1500–2000', 'restKITCH': 'европейская, восточная, итальянская', 'restADRES': 'ул. Рабат, 18', 'restINSTA': 'https://www.instagram.com/turan_halal/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '151', 'restNAME': 'Вахтангури', 'restPRICE': '7000–8000', 'restKITCH': 'европейская, казахская, японская, грузинская', 'restADRES': 'ул. Гоголя, 157, уг. ул. Досмухамедова', 'restINSTA': 'https://www.instagram.com/vakhtangury_almaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '153', 'restNAME': 'Sushi`n Roll', 'restPRICE': '3500–5000', 'restKITCH': 'итальянская, корейская, японская, европейская', 'restADRES': 'ул. Гоголя, 44/51, уг. ул. Пушкина', 'restINSTA': 'https://www.instagram.com/unq.kitchen/', 'restTIME': 'Сегодня c 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '154', 'restNAME': 'ХАН САРАЙ', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, итальянская, казахская', 'restADRES': 'ул. Розыбакиева, 272/13, уг. ул. Байкадамова (бывш. ул. Кихтенко)', 'restINSTA': 'https://www.instagram.com/woodman_almaty/', 'restTIME': 'Сегодня c 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '155', 'restNAME': 'Меланж', 'restPRICE': '5000–10000', 'restKITCH': 'восточная, грузинская, европейская', 'restADRES': 'мкр. 5, 12 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '156', 'restNAME': 'Ағайын', 'restPRICE': '3000–5000', 'restKITCH': 'восточная, европейская', 'restADRES': 'мкр. Айнабулак 4, ул. Жумабаева, 172 Г', 'restINSTA': 'https://www.instagram.com/agaiyn_complex/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '158', 'restNAME': 'Roof Garden', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, паназиатская', 'restADRES': 'ул. Досмухамедова, 115', 'restINSTA': 'https://www.instagram.com/roofgarden_restobar/', 'restTIME': 'Сегодня c 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '159', 'restNAME': 'Korean House на Гоголя', 'restPRICE': '7000', 'restKITCH': 'корейская, японская, паназиатская', 'restADRES': 'ул. Гоголя, 2, уг. ул. Барибаева', 'restINSTA': 'https://www.instagram.com/korean_house_kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '160', 'restNAME': 'Line Brew Mix', 'restPRICE': '10000–15000', 'restKITCH': 'американская, европейская, китайская', 'restADRES': 'ул. Жамбыла, 75', 'restINSTA': 'https://www.instagram.com/linebrewmix/', 'restTIME': 'Ежедневно с 12:00 до 22:30', 'restTimeOpen': '12:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '162', 'restNAME': 'J. Z. Peking Duck', 'restPRICE': '7000–12000', 'restKITCH': 'китайская', 'restADRES': 'ул. Шашкина, 1, уг. ул. Тимирязева', 'restINSTA': 'https://www.instagram.com/jz_pekingduck/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '164', 'restNAME': 'Хмельная Пражечка в мкр. 3', 'restPRICE': '3000–7000', 'restKITCH': 'европейская', 'restADRES': 'мкр. 3, 30 А', 'restINSTA': 'https://www.instagram.com/hmelnaya_prazhechka/', 'restTIME': 'Ежедневно с 13:00 до 22:00', 'restTimeOpen': '13:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '165', 'restNAME': 'Cherish', 'restPRICE': '4000–6000', 'restKITCH': 'европейская', 'restADRES': 'мкр. \u200bСамал, 36', 'restINSTA': 'https://www.instagram.com/cherish_samal/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '166', 'restNAME': 'Royal Palace', 'restPRICE': '5000–8000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Жансугурова, 178 (бывш. ул. Белинского)', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '167', 'restNAME': 'Zaman', 'restPRICE': '5000–7000', 'restKITCH': 'восточно-европейская', 'restADRES': 'пр. Достык, 32', 'restINSTA': 'https://www.instagram.com/zaman.almaty/', 'restTIME': 'Сегодня c 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '169', 'restNAME': 'Cosmo', 'restPRICE': '6000–10000', 'restKITCH': 'европейская, итальянская, кавказская, казахская, мексиканская, турецкая, японская', 'restADRES': 'ул. Розыбакиева, 287, уг. пр. Аль-Фараби', 'restINSTA': 'https://www.instagram.com/cosmo_complex/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '170', 'restNAME': 'Renion Hills', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, казахская', 'restADRES': 'пр. Назарбаева, 281', 'restINSTA': 'https://www.instagram.com/renion_hills/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '171', 'restNAME': 'ChinaROOM', 'restPRICE': '5000–20000', 'restKITCH': 'китайская', 'restADRES': 'ул. Богенбай батыра, 115', 'restINSTA': 'https://www.instagram.com/china_room_almaty_/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '172', 'restNAME': 'Maharaja', 'restPRICE': '2500–4000', 'restKITCH': 'индийская, китайская', 'restADRES': 'пр. Назарбаева, 229', 'restINSTA': 'https://www.instagram.com/maharaja_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '173', 'restNAME': 'Мёнсон', 'restPRICE': '5000', 'restKITCH': 'корейская', 'restADRES': 'ул. \u200bАйманова, 126', 'restINSTA': 'https://www.instagram.com/myeongseong.kz/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '174', 'restNAME': 'Ресторан Грузинской кухни Shavlego', 'restPRICE': '5000–7000', 'restKITCH': 'грузинская', 'restADRES': 'ул. Наурызбай батыра, 76/78', 'restINSTA': 'https://www.instagram.com/shavlego_restaurant/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '175', 'restNAME': 'Родня', 'restPRICE': '5000–6000', 'restKITCH': 'европейская, грузинская, итальянская', 'restADRES': 'пр. Абая, 101 А', 'restINSTA': 'https://www.instagram.com/rodnya_kz/', 'restTIME': 'Сегодня c 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '176', 'restNAME': 'Cuckoo  Restaurant & Bar', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'Панфилова 92(уг.Айтеке Би)', 'restINSTA': '', 'restTIME': 'Сегодня c 18:00 до 02:00', 'restTimeOpen': '18:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '178', 'restNAME': 'Elephant', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, итальянская, паназиатская, японская', 'restADRES': 'ул. Тимирязева, 42, КЦДС «Атакент»', 'restINSTA': 'https://www.instagram.com/elephant24.7/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '179', 'restNAME': 'Отау', 'restPRICE': '5000–10000', 'restKITCH': 'восточная, европейская, казахская', 'restADRES': 'пр. Сейфуллина, 14', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '180', 'restNAME': 'Медведь на Абая', 'restPRICE': '4000–7000', 'restKITCH': 'русская, европейская', 'restADRES': 'ул. Щепеткова, 137', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '181', 'restNAME': 'Таверна "На Углях"', 'restPRICE': '3500–5000', 'restKITCH': 'европейская, кавказская, казахская', 'restADRES': 'ул. Розыбакиева, 109', 'restINSTA': 'https://www.instagram.com/taverna_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '182', 'restNAME': 'Bahyt Dapanji', 'restPRICE': '3500–7000', 'restKITCH': 'восточная, дунганская', 'restADRES': 'мкр. Аксай 1 А, 15', 'restINSTA': 'https://www.instagram.com/dapanji_bahyt/', 'restTIME': 'Сегодня c 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '184', 'restNAME': 'Гости', 'restPRICE': '6000–9000', 'restKITCH': 'русская', 'restADRES': 'ул. Кунаева, 78, уг. ул. Казыбек би', 'restINSTA': 'https://www.instagram.com/gostialmaty.kz/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '185', 'restNAME': 'Ocean Basket', 'restPRICE': '6000–7000', 'restKITCH': 'европейская, средиземноморская, африканская, греческая', 'restADRES': 'мкр. Самал 2, 111, ТРЦ DOSTYK PLAZA, 3 этаж', 'restINSTA': 'https://www.instagram.com/oceanbasket.kz/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '186', 'restNAME': 'АИСТ', 'restPRICE': '5500–10000', 'restKITCH': 'европейская', 'restADRES': 'пр. Абая, 58 А', 'restINSTA': 'https://www.instagram.com/aist_restaurant/', 'restTIME': 'Ежедневно с 09:00 до 21:00', 'restTimeOpen': '09:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '189', 'restNAME': 'GG MIX HOUSE', 'restPRICE': '2500–5000', 'restKITCH': 'восточная, европейская, итальянская, паназиатская', 'restADRES': 'ул. Искендерова, 58', 'restINSTA': 'https://www.instagram.com/gg_steak/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '190', 'restNAME': 'Telavi', 'restPRICE': '4000–7000', 'restKITCH': 'грузинская', 'restADRES': 'мкр. Жулдыз 2, 55/1', 'restINSTA': 'https://www.instagram.com/telavi.almaty/', 'restTIME': 'Ежедневно с 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '192', 'restNAME': 'Tandoor', 'restPRICE': '4000–6000', 'restKITCH': 'индийская, китайская, тайская', 'restADRES': 'ул. Толе би, 102, уг. ул. Байтурсынова', 'restINSTA': 'https://www.instagram.com/tandoor.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '195', 'restNAME': 'Арайлым', 'restPRICE': '', 'restKITCH': 'европейская', 'restADRES': 'ул. Калдаякова, 50', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '197', 'restNAME': 'Villa dei Fiori', 'restPRICE': '20000–25000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'пр. Аль-Фараби, 140 А', 'restINSTA': 'https://www.instagram.com/villa_dei_fiori_almaty/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '198', 'restNAME': 'Додо пицца на Алтынсарина', 'restPRICE': '2500–3000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Алтынсарина, 51 Б', 'restINSTA': 'https://www.instagram.com/dodopizza.almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '199', 'restNAME': 'Munchen', 'restPRICE': '5000–8000', 'restKITCH': 'грузинская, европейская, немецкая', 'restADRES': 'пр. Сейфуллина, 526', 'restINSTA': 'https://www.instagram.com/munchenalmaty/', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '201', 'restNAME': 'Ехань', 'restPRICE': '3500–10000', 'restKITCH': 'корейская', 'restADRES': 'пр. Аль-Фараби 1, уг. пр. Достык, ТРК «Ритц-Палас»', 'restINSTA': 'https://www.instagram.com/ehan.rescafe/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '202', 'restNAME': 'As-Timian', 'restPRICE': '4000–7000', 'restKITCH': 'авторская, европейская', 'restADRES': 'ул. Навои, 208/4', 'restINSTA': 'https://www.instagram.com/as_timian/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '203', 'restNAME': 'Borgo Antico', 'restPRICE': '7000–15000', 'restKITCH': 'итальянская', 'restADRES': 'мкр. Горный Гигант, ул. Искендирова, 11/6', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '204', 'restNAME': 'BAO в ТРЦ Moskva Metropolitan', 'restPRICE': '2500–5000', 'restKITCH': 'азиатская', 'restADRES': 'мкр. 8, 37/1', 'restINSTA': 'https://www.instagram.com/baoalmaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '206', 'restNAME': 'Cafè Central', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, японская', 'restADRES': 'мкр. Самал 2, 111, ТРЦ «Dostyk Plaza»', 'restINSTA': 'https://www.instagram.com/centralalmaty/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '207', 'restNAME': 'Додо пицца на Жандосова', 'restPRICE': '2500–3000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Жандосова, 162 А/1', 'restINSTA': 'https://www.instagram.com/dodopizza.almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '210', 'restNAME': 'Primavera', 'restPRICE': '10000–15000', 'restKITCH': 'итальянская, европейская', 'restADRES': 'пр. Достык, 180', 'restINSTA': 'https://www.instagram.com/primavera_almaty/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '211', 'restNAME': 'Relax', 'restPRICE': '2000–4000', 'restKITCH': 'китайская', 'restADRES': 'мкр. \u200bКеремет, 7/43', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '212', 'restNAME': 'Chak-chak', 'restPRICE': '2000–3500', 'restKITCH': 'восточная, европейская, узбекская, татарская, азербайджанская', 'restADRES': 'ул. Байзакова, 190', 'restINSTA': 'https://www.instagram.com/chak.chak.almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '213', 'restNAME': 'Нур Эль', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, кавказская, казахская', 'restADRES': 'ул. Розыбакиева, 33 Б', 'restINSTA': 'https://www.instagram.com/restorannurel/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '214', 'restNAME': 'SAMURAI SUSHI по Жандосова', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, японская', 'restADRES': 'ул. Жандосова, 57', 'restINSTA': 'https://www.instagram.com/samuraisushi2014/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '217', 'restNAME': 'SMUG в ТРЦ Dostyk Plaza', 'restPRICE': '3000–4500', 'restKITCH': 'американская, авторская', 'restADRES': 'мкр. Самал, 111 в здании ТРЦ "Dostyk Plaza"', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '218', 'restNAME': "Leo's Cafe & Terrace", 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева (бывш. ул. Фурманова), 220', 'restINSTA': 'https://www.instagram.com/leos_almaty/', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '219', 'restNAME': 'Trieste', 'restPRICE': '4000–5000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Шевченко, 29', 'restINSTA': '', 'restTIME': 'Сегодня c 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '221', 'restNAME': 'TAL', 'restPRICE': '5000–7000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Жукова, 136', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '222', 'restNAME': 'Masisso Kangnam', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, корейская, японская', 'restADRES': 'пр. Жибек жолы, 102 А', 'restINSTA': 'https://www.instagram.com/masisso_kangnam/', 'restTIME': 'Сегодня c 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '223', 'restNAME': 'Счастье на Бутаковке', 'restPRICE': '4000–5000', 'restKITCH': 'европейская, американская, авторская, итальянская, средиземноморская', 'restADRES': 'ущ. Бутаковка, ул. Бейсеуова, 200', 'restINSTA': 'https://www.instagram.com/schastyekz/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '226', 'restNAME': 'Alma-Ata на Назарбаева', 'restPRICE': '6000–20000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 223', 'restINSTA': 'https://www.instagram.com/almaata.restobar/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '227', 'restNAME': 'Good Mood', 'restPRICE': '3000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Розыбакиева, 272', 'restINSTA': 'https://www.instagram.com/woodman_almaty/', 'restTIME': 'Сегодня c 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '229', 'restNAME': 'BAO в ТРК Mega Park', 'restPRICE': '2500–5000', 'restKITCH': 'азиатская', 'restADRES': 'пр. Сейфуллина, 483, В здании ТРК "MEGA Park"', 'restINSTA': 'https://www.instagram.com/mega.park/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '230', 'restNAME': 'Qazaq Auyl', 'restPRICE': '5000–8000', 'restKITCH': 'казахская, восточная', 'restADRES': 'ул. Керей Жанибек хандар, 586, (бывш. ул.Горная)', 'restINSTA': 'https://www.instagram.com/qazaqauyl/', 'restTIME': 'Сегодня c 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '231', 'restNAME': 'Ozyurt на Тулебаева', 'restPRICE': '4000–7000', 'restKITCH': 'турецкая', 'restADRES': 'ул. Тулебаева, 13, уг. ул. Маметовой', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '232', 'restNAME': 'Georgian Restaurant', 'restPRICE': '7000–10000', 'restKITCH': 'грузинская', 'restADRES': 'пр. Аль-Фараби, 116\\22', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '233', 'restNAME': 'SAMAL', 'restPRICE': '8000–10000', 'restKITCH': 'казахская, восточная, европейская', 'restADRES': 'ул. Горная, 548', 'restINSTA': 'https://www.instagram.com/samal_restaurant_almaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '234', 'restNAME': 'IL PONTE', 'restPRICE': '10000–15000', 'restKITCH': 'итальянская', 'restADRES': 'мкр. \u200bСамал 2, д. 111', 'restINSTA': 'https://www.instagram.com/thebottlekz/', 'restTIME': 'Сегодня c 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '235', 'restNAME': 'Barbeque by Bekir Chef', 'restPRICE': '3000–7000', 'restKITCH': 'турецкая', 'restADRES': 'ул. Масанчи, 79', 'restINSTA': 'https://www.instagram.com/barbequebybekirchef/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '236', 'restNAME': 'HIVA', 'restPRICE': '4000–5000', 'restKITCH': 'европейская, грузинская, восточная, узбекская', 'restADRES': 'ул. Кожамкулова, 202, уг. ул. Карасай батыра', 'restINSTA': 'https://www.instagram.com/hiva_restobar/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '237', 'restNAME': 'Harissa', 'restPRICE': '3000–4000', 'restKITCH': 'арабская, еврейская', 'restADRES': 'ул. Кабанбай батыра, 68', 'restINSTA': 'https://www.instagram.com/harissakz/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '240', 'restNAME': 'Compote', 'restPRICE': '3000–5000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Кабанбай батыра, 83, уг. ул. Фурманова', 'restINSTA': 'https://www.instagram.com/compotestudio/', 'restTIME': 'Ежедневно с 10:00 до 19:00', 'restTimeOpen': '10:00', 'restTimeClose': '19:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '242', 'restNAME': 'Golden Palace', 'restPRICE': '3000–5000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Байтурсынова, 54, уг. ул. Карасай батыра', 'restINSTA': 'https://www.instagram.com/goldenpalace_almaty/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '243', 'restNAME': 'Del Papa на Достык', 'restPRICE': '3000–5000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Достык, 248', 'restINSTA': 'https://www.instagram.com/del_papa/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '244', 'restNAME': 'Мимино в мкр. Орбита 1', 'restPRICE': '3500–5000', 'restKITCH': 'грузинская, европейская', 'restADRES': 'мкр. Орбита 1, 6', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '245', 'restNAME': 'Свет', 'restPRICE': '7000–10000', 'restKITCH': 'авторская, европейская', 'restADRES': 'ул. Кабанбай батыра, 83, уг. пр. Назарбаева', 'restINSTA': 'https://www.instagram.com/svet.restaurant/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '246', 'restNAME': 'SAMURAI SUSHI в мкр. Алмагуль', 'restPRICE': '2000–6000', 'restKITCH': 'европейская, японская', 'restADRES': 'мкр. Алмагуль 18 А, ул. Жарокова, уг. ул. Дунаевского', 'restINSTA': 'https://www.instagram.com/samuraisushi2014/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '247', 'restNAME': 'Aroma Indian Restaurant', 'restPRICE': '3500–5000', 'restKITCH': 'индийская', 'restADRES': 'ул. Маметовой, 76, уг. ул. Сейфуллина', 'restINSTA': 'https://www.instagram.com/aroma_gnh/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '248', 'restNAME': 'Sadu Concept Store в мкр. Самал', 'restPRICE': '5000–8000', 'restKITCH': 'итальянская, японская', 'restADRES': 'мкр. Самал 3, 25', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '249', 'restNAME': 'The Noodles', 'restPRICE': '5000–7000', 'restKITCH': 'азиатская, европейская', 'restADRES': 'пр. Достык, 52/2', 'restINSTA': 'https://www.instagram.com/noodles_almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '251', 'restNAME': 'Aquarium', 'restPRICE': '8000–10000', 'restKITCH': 'европейская, казахская, авторская', 'restADRES': 'ул. Керей-Жәнібек хандар, 548', 'restINSTA': 'https://www.instagram.com/samal_restaurant_almaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '252', 'restNAME': 'Салон вкуса', 'restPRICE': '15000–18000', 'restKITCH': 'средиземноморская', 'restADRES': 'мкр. Мирас, 182\\2', 'restINSTA': 'https://www.instagram.com/salonvkusaalmaty/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '253', 'restNAME': "As'salam", 'restPRICE': '2500–3500', 'restKITCH': 'восточная, европейская, казахская', 'restADRES': 'ул. Тургут Озала, 178 (бывш. ул. Баумана), уг. ул. Шакарима', 'restINSTA': 'https://www.instagram.com/assalam.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '254', 'restNAME': 'Хачапури & Вино', 'restPRICE': '7000–10000', 'restKITCH': 'восточная, грузинская, европейская, итальянская', 'restADRES': 'ул. Ходжанова, 77', 'restINSTA': 'https://www.instagram.com/khachapuri.i.vino/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '256', 'restNAME': 'Finik', 'restPRICE': '2000–4000', 'restKITCH': 'уйгурская, восточная, европейская, восточно-европейская', 'restADRES': 'ул. Желтоксан, 148', 'restINSTA': 'https://www.instagram.com/finik_vostok/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '257', 'restNAME': 'Кишлак', 'restPRICE': '5000–7000', 'restKITCH': 'восточная, европейская', 'restADRES': 'пр. Сейфуллина, 540 А, уг. пр. Абая', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:30 до 02:00', 'restTimeOpen': '11:30', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '258', 'restNAME': 'Халал палау', 'restPRICE': '1500–3000', 'restKITCH': 'узбекская, восточная', 'restADRES': 'мкр. Мамыр, ул. Керентау, 1, уг. ул. Яссауи', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '259', 'restNAME': 'Gagarin287', 'restPRICE': '5000', 'restKITCH': 'авторская, европейская', 'restADRES': 'пр. Гагарина, 287/2', 'restINSTA': 'https://www.instagram.com/gagarin287_restaurant/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '261', 'restNAME': 'Fellini Esentai Mall', 'restPRICE': '10000–15000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Аль-Фараби, 77/8, ТРК Esentaı Mall, 5 этаж', 'restINSTA': '', 'restTIME': 'Сегодня c 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '262', 'restNAME': 'Bottle', 'restPRICE': '8000–10000', 'restKITCH': 'итальянская, авторская, средиземноморская', 'restADRES': 'пр. Назарбаева, 130', 'restINSTA': 'https://www.instagram.com/thebottlekz/', 'restTIME': 'Сегодня c 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '263', 'restNAME': 'Craft', 'restPRICE': '4000–5000', 'restKITCH': 'бразильская, европейская', 'restADRES': 'ул. Фурманова, 124, уг. ул. Кабанбай батыра', 'restINSTA': 'https://www.instagram.com/craft_cheese_ast/', 'restTIME': 'Ежедневно с 09:30 до 20:00', 'restTimeOpen': '09:30', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '265', 'restNAME': 'Qingdao в мкр. Мамыр', 'restPRICE': '5000–7000', 'restKITCH': 'китайская', 'restADRES': 'мкр. Мамыр 4, 103', 'restINSTA': 'https://www.instagram.com/qingdao.almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '271', 'restNAME': 'Пиросмани', 'restPRICE': '4000–8000', 'restKITCH': 'грузинская', 'restADRES': 'пр. Абылай хана, 32', 'restINSTA': 'https://www.instagram.com/pirosmani_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '272', 'restNAME': 'AviaClub', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, казахская', 'restADRES': 'пр. Гагарина, 206 В', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '273', 'restNAME': 'Frau Irma', 'restPRICE': '8000–10000', 'restKITCH': 'немецкая, европейская', 'restADRES': 'ул. Курмангазы, 33', 'restINSTA': 'https://www.instagram.com/frauirma.kneipe/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '274', 'restNAME': 'OstroWOK', 'restPRICE': '4500–7000', 'restKITCH': 'китайская, дунганская, восточная', 'restADRES': 'мкр. Хан-Тенгри, 85', 'restINSTA': 'https://www.instagram.com/ostrowokkz/', 'restTIME': 'Сегодня c 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '275', 'restNAME': 'Korean house в Esentai Mall', 'restPRICE': '6000–7000', 'restKITCH': 'корейская, японская, паназиатская', 'restADRES': 'ул. Аль-Фараби, 77/8', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '277', 'restNAME': 'Хороший год', 'restPRICE': '5000–15000', 'restKITCH': 'авторская', 'restADRES': 'ул. Шевченко, 18', 'restINSTA': 'https://www.instagram.com/horoshiygod_almaty/', 'restTIME': 'Сегодня c 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '278', 'restNAME': 'Кишлак по пр. Достык', 'restPRICE': '6000–10000', 'restKITCH': 'восточная, европейская, казахская', 'restADRES': 'пр. Достык, 36', 'restINSTA': '', 'restTIME': 'Сегодня c 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '279', 'restNAME': 'Brother’s Burger, ресторан быстрого питания', 'restPRICE': '1200–2000', 'restKITCH': 'американская', 'restADRES': 'ул. Шолохова 6, уг. ул. Акан Серы', 'restINSTA': 'https://www.instagram.com/brotherhoodburger_halal/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '280', 'restNAME': 'Трактиръ Медведь на Сатпаева', 'restPRICE': '4000–6000', 'restKITCH': 'русская', 'restADRES': 'мкр. Коктем 3, 17', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '281', 'restNAME': 'Goloso Gastrobar', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, паназиатская', 'restADRES': 'ул. Жарокова, 91', 'restINSTA': 'https://www.instagram.com/goloso_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '282', 'restNAME': 'La Coppola', 'restPRICE': '8000–10000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Сейфуллина, 617', 'restINSTA': 'https://www.instagram.com/lacoppola_almaty/', 'restTIME': 'Ежедневно с 11:00 до 03:00', 'restTimeOpen': '11:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '283', 'restNAME': 'Дадиани', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, грузинская, японская', 'restADRES': 'ул. Кабанбай батыра, 37', 'restINSTA': 'https://www.instagram.com/dadiani_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '284', 'restNAME': 'Oscar', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, японская', 'restADRES': 'мкр. Аксай 4, 90 А', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '285', 'restNAME': 'Country-Club', 'restPRICE': '3500–5000', 'restKITCH': 'европейская', 'restADRES': 'гор. Чимбулак', 'restINSTA': 'https://www.instagram.com/zhailjau_country_club/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '287', 'restNAME': 'SATORI', 'restPRICE': '5000–8000', 'restKITCH': 'корейская, японская, паназиатская', 'restADRES': 'ул. Маметовой, 25', 'restINSTA': 'https://www.instagram.com/satorirest.kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '288', 'restNAME': 'Лимоны желтые', 'restPRICE': '5000', 'restKITCH': 'итальянская', 'restADRES': 'мкр. Бутаковка, ул. Бейceуова, 53 А', 'restINSTA': 'https://www.instagram.com/limoni_zheltie/', 'restTIME': 'Сегодня c 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '289', 'restNAME': 'Meesan', 'restPRICE': '2500–3000', 'restKITCH': 'восточная, грузинская, итальянская, уйгурская, европейская, казахская', 'restADRES': 'мкр. Шабыт, 8/1', 'restINSTA': 'https://www.instagram.com/meesan.kz/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '290', 'restNAME': 'Уют', 'restPRICE': '6000–10000', 'restKITCH': 'азиатская, восточная, европейская, казахская', 'restADRES': 'ул. Гоголя, 127/1', 'restINSTA': 'https://www.instagram.com/uyut_hotel/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '291', 'restNAME': 'Загс', 'restPRICE': '7000–10000', 'restKITCH': 'авторская', 'restADRES': 'ул. \u200bКурмангазы, 61', 'restINSTA': 'https://www.instagram.com/zags.kz/', 'restTIME': 'Сегодня c 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '292', 'restNAME': 'NAUTICA RESTAURANT', 'restPRICE': '10000–12000', 'restKITCH': 'восточная, европейская, итальянская, паназиатская, японская, китайская', 'restADRES': 'ул. Кажымукана, 59', 'restINSTA': 'https://www.instagram.com/nautica.restaurant/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '293', 'restNAME': 'Cafe Leffe', 'restPRICE': '4000–7000', 'restKITCH': 'европейская, бельгийская', 'restADRES': 'ул. Толе би, 63, уг. ул. Желтоксан', 'restINSTA': 'https://www.instagram.com/cafe_leffe_almaty/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '298', 'restNAME': 'ISSYK', 'restPRICE': '13000–20000', 'restKITCH': 'восточная, европейская, казахская', 'restADRES': 'ул. Кабанбай батыра, 85, уг. ул. Панфилова', 'restINSTA': 'https://www.instagram.com/issykrestaurant/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '299', 'restNAME': 'Дареджани по Навои', 'restPRICE': '5000–7000', 'restKITCH': 'грузинская', 'restADRES': 'ул. Навои, 328 А, уг. пр. Аль-Фараби', 'restINSTA': 'https://www.instagram.com/daredzhani/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '300', 'restNAME': 'China Town Restaurant на Маметова', 'restPRICE': '3000–7000', 'restKITCH': 'китайская', 'restADRES': 'ул. Маметова, 47, уг. пр. Абылай хана', 'restINSTA': 'https://www.instagram.com/restaurantchinatown/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '301', 'restNAME': 'Шеф', 'restPRICE': '7000–12000', 'restKITCH': 'европейская', 'restADRES': 'ул. Богенбай батыра, 104, уг. ул. Валиханова', 'restINSTA': 'https://www.instagram.com/__chef__/', 'restTIME': 'Сегодня c 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '303', 'restNAME': 'Wamboo', 'restPRICE': '3000–7000', 'restKITCH': 'китайская', 'restADRES': 'ул. Толе би, 200 А, уг. пр. Гагарина', 'restINSTA': 'https://www.instagram.com/restoran_wamboo_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '304', 'restNAME': 'Wine Gallery', 'restPRICE': '15000–25000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Оспанова,  401/2', 'restINSTA': '', 'restTIME': 'Ежедневно с 15:00 до 22:00', 'restTimeOpen': '15:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '306', 'restNAME': 'Любовь и голуби', 'restPRICE': '5000–7000', 'restKITCH': 'авторская, русская', 'restADRES': 'ул. Кажымукана, 37', 'restINSTA': 'https://www.instagram.com/lubov_i_golubi_kz/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '307', 'restNAME': 'Tokyo Ramen Izakaya Bar', 'restPRICE': '4000–5000', 'restKITCH': 'японская', 'restADRES': 'ул. Панфилова, 114', 'restINSTA': 'https://www.instagram.com/tokyoramen_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '308', 'restNAME': 'Дареджани на Кунаева', 'restPRICE': '6000–10000', 'restKITCH': 'грузинская', 'restADRES': 'ул. Кунаева, 85', 'restINSTA': 'https://www.instagram.com/daredzhani/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '309', 'restNAME': 'Myeong Ga', 'restPRICE': '3000–5000', 'restKITCH': 'корейская', 'restADRES': 'ул. Сыргабекова, 7', 'restINSTA': 'https://www.instagram.com/myeonga_market/', 'restTIME': 'Ежедневно с 10:30 до 22:30', 'restTimeOpen': '10:30', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '311', 'restNAME': 'Favor City View', 'restPRICE': '7000–15000', 'restKITCH': 'авторская', 'restADRES': 'Мкр. Эдельвейс, 256 А', 'restINSTA': 'https://www.instagram.com/favor.kz/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '312', 'restNAME': 'Korean House Mega Almaty', 'restPRICE': '5000–6000', 'restKITCH': 'корейская, паназиатская, японская', 'restADRES': 'ул. Розыбакиева, 263, ТРЦ MEGA Alma-Ata, 3 эт.', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '313', 'restNAME': 'Пугасов', 'restPRICE': '5000–10000', 'restKITCH': 'азербайджанская, казахская, европейская', 'restADRES': 'ул. Абдуллиных, 70', 'restINSTA': 'https://www.instagram.com/pugasov_almaty/', 'restTIME': 'Ежедневно с 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '314', 'restNAME': 'Versailles | Версаль', 'restPRICE': '4000–6000', 'restKITCH': 'восточная, европейская, кавказская', 'restADRES': 'ул. Тимирязева, 32 В', 'restINSTA': 'https://www.instagram.com/versailles_restaurant.kz/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '315', 'restNAME': 'Sancak', 'restPRICE': '2000–5000', 'restKITCH': 'турецкая', 'restADRES': 'пр. Жибек жолы, 15, уг. ул. Барибаева', 'restINSTA': 'https://www.instagram.com/restaurant_sancak_almaty/', 'restTIME': 'Ежедневно с 09:00 до 22:30', 'restTimeOpen': '09:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '316', 'restNAME': 'Mamma mia & Ciao Pizza', 'restPRICE': '5000–6000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Гоголя, 87, уг. ул. Панфилова', 'restINSTA': 'https://www.instagram.com/mammamia_kz/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '317', 'restNAME': 'Дархан', 'restPRICE': '3000–6000', 'restKITCH': 'азиатская, европейская, китайская', 'restADRES': 'ул. Айманова, 187 В, уг. ул. Джандосова', 'restINSTA': 'https://www.instagram.com/darhan_almaty/', 'restTIME': 'Сегодня c 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '318', 'restNAME': 'Rumi на Абылай хана', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, азиатская', 'restADRES': 'пр. Абылай хана, 92 А', 'restINSTA': 'https://www.instagram.com/rumi.qazaqstan/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '319', 'restNAME': 'Pirate', 'restPRICE': '4000–10000', 'restKITCH': 'европейская, казахская, восточная', 'restADRES': 'ул. Толе би, 209 А, уг. ул. Гайдара.', 'restINSTA': 'https://www.instagram.com/piratealmaty/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '320', 'restNAME': 'Принцесса на Тулебаева', 'restPRICE': '4000–5000', 'restKITCH': 'китайская', 'restADRES': 'ул. Тулебаева, 53, уг. ул. Гоголя', 'restINSTA': 'https://www.instagram.com/restaurant_princessa/', 'restTIME': 'Ежедневно с 12:00 до 22:30', 'restTimeOpen': '12:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '322', 'restNAME': 'AZIA MAMA', 'restPRICE': '6000–7500', 'restKITCH': 'восточная, европейская, японская, уйгурская, паназиатская, корейская, азиатская', 'restADRES': 'пр. Достык, 32', 'restINSTA': 'https://www.instagram.com/aziamama_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '323', 'restNAME': 'Ocean Basket на Панфилова', 'restPRICE': '6000–7000', 'restKITCH': 'средиземноморская, греческая', 'restADRES': 'ул. Панфилова, 100, уг. ул. Казыбек Би', 'restINSTA': 'https://www.instagram.com/oceanbasket.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '324', 'restNAME': 'Korean House на Абылай хана', 'restPRICE': '7000–11000', 'restKITCH': 'корейская, паназиатская, японская', 'restADRES': 'ул.  Кабанбай батыра 92/87, пр. Абылай хана', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '327', 'restNAME': 'Чешский Двор', 'restPRICE': '5000–8000', 'restKITCH': 'чешская, европейская', 'restADRES': 'ул. Манаса, 5 А, уг. ул. Шевченко', 'restINSTA': 'https://www.instagram.com/ceskydvur.kz/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '333', 'restNAME': 'La Barca', 'restPRICE': '20000–30000', 'restKITCH': 'средиземноморская', 'restADRES': 'пр. Абылай хана, 145, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/labarcafamily/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '334', 'restNAME': 'Ариал', 'restPRICE': '7000–8000', 'restKITCH': 'грузинская, европейская, казахская', 'restADRES': 'пр. Аль-Фараби, 142', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 20:00', 'restTimeOpen': '09:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '336', 'restNAME': 'Ziyafet Fish House', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, авторская, турецкая', 'restADRES': 'пр. Желтоксан, 172, уг. ул. Сатпаева', 'restINSTA': 'https://www.instagram.com/ziyafetsteakhouse/', 'restTIME': 'Ежедневно с 10:30 до 23:00', 'restTimeOpen': '10:30', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '337', 'restNAME': 'Tirol на Арбате', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, тирольская', 'restADRES': 'пр. Жибек Жолы, 98', 'restINSTA': 'https://www.instagram.com/tirolterrace/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '338', 'restNAME': 'BASTAU', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, итальянская, казахская', 'restADRES': 'ул. Шагабутдинова, 109 А', 'restINSTA': 'https://www.instagram.com/bastau_almaty/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '339', 'restNAME': 'Caffè del Teatro', 'restPRICE': '10000–15000', 'restKITCH': 'восточная, европейская, итальянская', 'restADRES': 'ул. Жамбула, 51 А, уг. ул. Байсеитовой', 'restINSTA': 'https://www.instagram.com/caffedelteatro/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '342', 'restNAME': 'Мамамия в БЦ «Нурлы Тау»', 'restPRICE': '4000–6000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Аль-Фараби, 7, БЦ «Нурлы Тау», блок 5 А', 'restINSTA': 'https://www.instagram.com/mammamia_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '343', 'restNAME': "McDonald's® «Алатау»", 'restPRICE': '1500–2000', 'restKITCH': 'американская', 'restADRES': 'ул. Толе би, 41, уг. ул. Кунаева', 'restINSTA': 'https://www.instagram.com/mcdonalds.kaz/', 'restTIME': 'Ежедневно с 08:00 до 22:45', 'restTimeOpen': '08:00', 'restTimeClose': '22:45', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '345', 'restNAME': 'Thai', 'restPRICE': '10000–25000', 'restKITCH': 'тайская, японская', 'restADRES': 'пр. Достык 50, уг. ул. Курмангазы', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '348', 'restNAME': "Zheka's Doner House в ТРЦ Mega Park", 'restPRICE': '1500–2000', 'restKITCH': 'американская, турецкая', 'restADRES': 'пр. Сейфуллина, 483, уг. ул. Макатаева, 127', 'restINSTA': 'https://www.instagram.com/mega.park/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '350', 'restNAME': 'Mado', 'restPRICE': '4000–5000', 'restKITCH': 'турецкая, итальянская', 'restADRES': 'мкр. Самал 2, 111', 'restINSTA': 'https://www.instagram.com/mado.almaty/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '352', 'restNAME': 'Ciao Pizza в мкр. Алмагуль', 'restPRICE': '4000–6000', 'restKITCH': 'итальянская', 'restADRES': 'мкр. Алмагуль 18 А, уг. ул. Жарокова', 'restINSTA': 'https://www.instagram.com/mammamia_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '354', 'restNAME': 'Capriccio', 'restPRICE': '5000–10000', 'restKITCH': 'итальянская, средиземноморская', 'restADRES': 'пр. Абылай хана, 145, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/capriccio.restaurant/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '355', 'restNAME': 'Алматы Тунi', 'restPRICE': '5000–13000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Лебедева, 4, уг. ул. Жандосова', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '356', 'restNAME': 'BAR3200', 'restPRICE': '3000–10000', 'restKITCH': 'европейская', 'restADRES': 'ул. Горная, 640', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 10:00 до 17:00', 'restTimeOpen': '10:00', 'restTimeClose': '17:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '357', 'restNAME': 'Ziyafet Steak House', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, турецкая', 'restADRES': 'пр. Желтоксан, 172, уг. ул. Сатпаева', 'restINSTA': 'https://www.instagram.com/ziyafetsteakhouse/', 'restTIME': 'Ежедневно с 10:30 до 23:00', 'restTimeOpen': '10:30', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '358', 'restNAME': 'Burger King в Moskva', 'restPRICE': '700–1500', 'restKITCH': 'американская', 'restADRES': 'мкр. 8, 37/1, ТРЦ Moskva Metropolitan, 2 этаж', 'restINSTA': 'https://www.instagram.com/burgerking_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '361', 'restNAME': "McDonald's® в мкр. Орбита", 'restPRICE': '1500–2000', 'restKITCH': 'американская', 'restADRES': 'мкр. Орбита 3, ул. Мустафина, 5 А', 'restINSTA': 'https://www.instagram.com/mcdonalds.kaz/', 'restTIME': 'Ежедневно с 08:00 до 22:45', 'restTimeOpen': '08:00', 'restTimeClose': '22:45', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '362', 'restNAME': 'Alani', 'restPRICE': '4000–5000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. \u200bЛуганского, 19', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '364', 'restNAME': 'Есть Хинкали, Пить Вино', 'restPRICE': '3000–4500', 'restKITCH': 'грузинская', 'restADRES': 'ул. Толе би, 4 Б, уг. ул. Каирбекова', 'restINSTA': 'https://www.instagram.com/est.hinkali/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '365', 'restNAME': 'Burger King по Достык', 'restPRICE': '700–1500', 'restKITCH': 'американская', 'restADRES': 'проспект Достык, 104', 'restINSTA': 'https://www.instagram.com/burgerking_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '366', 'restNAME': 'ACADEMIA', 'restPRICE': '5000–8000', 'restKITCH': 'авторская, европейская, восточная, итальянская', 'restADRES': 'ул. \u200bКабанбай батыра, 83', 'restINSTA': 'https://www.instagram.com/academiafoodhouse/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '368', 'restNAME': 'Горный', 'restPRICE': '6000–10000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ущ. Алма-Арасан, 22 км', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '369', 'restNAME': 'Del Papa на Гоголя', 'restPRICE': '3000–5000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Гоголя, 87, уг. ул. Байсеитовой', 'restINSTA': 'https://www.instagram.com/del_papa/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '371', 'restNAME': 'Burger King в Mega Center Alma-Ata', 'restPRICE': '700–1500', 'restKITCH': 'американская', 'restADRES': 'ул. Розыбакиева, 247 А, ТРК Mega Center Alma-Ata,\u20092 этаж', 'restINSTA': 'https://www.instagram.com/burgerking_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '372', 'restNAME': 'Ходжа Насреддин', 'restPRICE': '3500–10000', 'restKITCH': 'узбекская, европейская', 'restADRES': 'мкр. Алмагуль, 4 А', 'restINSTA': 'https://www.instagram.com/hodja_nasreddin_almaty/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '373', 'restNAME': "McDonald's® на Толе би", 'restPRICE': '1500–2000', 'restKITCH': 'американская', 'restADRES': 'ул. Толе би, 41', 'restINSTA': 'https://www.instagram.com/mcdonalds.kaz/', 'restTIME': 'Ежедневно с 08:00 до 22:45', 'restTimeOpen': '08:00', 'restTimeClose': '22:45', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '374', 'restNAME': 'PRAHA', 'restPRICE': '5000–6000', 'restKITCH': 'европейская', 'restADRES': 'пр. Достык, 248', 'restINSTA': 'https://www.instagram.com/praharestaurantalmaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '375', 'restNAME': 'Burger King в Globus', 'restPRICE': '700–1500', 'restKITCH': 'американская', 'restADRES': 'пр. Абая, 109 В/1, уг. ул. Ауэзова', 'restINSTA': 'https://www.instagram.com/burgerking_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '376', 'restNAME': "Zheka's Doner House в мкр. 8", 'restPRICE': '1500–2000', 'restKITCH': 'американская, турецкая', 'restADRES': 'мкр. 8 , 87 А', 'restINSTA': 'https://www.instagram.com/zhekas_doner_house/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '378', 'restNAME': 'Burger King на Саина', 'restPRICE': '700–1500', 'restKITCH': 'американская', 'restADRES': 'ул. Саина, 16, уг. ул. Толе би', 'restINSTA': 'https://www.instagram.com/burgerking_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '379', 'restNAME': 'BigChefs', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, восточная, турецкая', 'restADRES': 'мкр. \u200bСамал 2, 111', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '380', 'restNAME': 'Pivovaroff_Staronemetckoe', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, немецкая', 'restADRES': 'ул. Шевченко, 71', 'restINSTA': 'https://www.instagram.com/pivovaroff_staronemetckoe/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '381', 'restNAME': 'Beefeater', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, авторская', 'restADRES': 'пр. Достык, 43', 'restINSTA': 'https://www.instagram.com/beefeater_almaty/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '382', 'restNAME': 'Del Papa на Бухар Жырау', 'restPRICE': '3000–6000', 'restKITCH': 'итальянская', 'restADRES': 'бул. Бухар Жырау, 66, уг. ул. Ауезова', 'restINSTA': 'https://www.instagram.com/del_papa/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '384', 'restNAME': 'Bloom Ville', 'restPRICE': '5500–7000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Тимирязева, 42, «Атакент», павильон 19', 'restINSTA': 'https://www.instagram.com/bloomvillekz/', 'restTIME': 'Сегодня c 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '385', 'restNAME': 'Zheka\'s Doner House в ТРЦ "Mall Aport"', 'restPRICE': '1500–2000', 'restKITCH': 'американская, турецкая', 'restADRES': 'Ташкентский тракт, 17 К в здании ТРЦ "Mall Aport"', 'restINSTA': 'https://www.instagram.com/zhekas_doner_house/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '386', 'restNAME': 'Assorti Mega', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, итальянская, японская', 'restADRES': 'ул. Розыбакиева, 247 А, ТРЦ MEGA Alma-Ata, 2 этаж', 'restINSTA': 'https://www.instagram.com/assortikz/', 'restTIME': 'Сегодня c 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '387', 'restNAME': "McDonald's® «Мамыр»", 'restPRICE': '1500–3000', 'restKITCH': 'американская', 'restADRES': 'мкр. Мамыр 4, 197', 'restINSTA': 'https://www.instagram.com/mcdonalds.kaz/', 'restTIME': 'Ежедневно с 08:00 до 22:45', 'restTimeOpen': '08:00', 'restTimeClose': '22:45', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '388', 'restNAME': 'Crudo в MEGA Alma-Ata', 'restPRICE': '15000–20000', 'restKITCH': 'европейская', 'restADRES': 'ул. Розыбакиева, 263, ТРЦ «MEGA Alma-Ata», 3 этаж', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '389', 'restNAME': 'Galito`s', 'restPRICE': '5000–6000', 'restKITCH': 'африканская, португальская', 'restADRES': 'ул. \u200bПанфилова, 100', 'restINSTA': 'https://www.instagram.com/galitos.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '391', 'restNAME': 'Burger King на Абая', 'restPRICE': '700–1500', 'restKITCH': 'американская', 'restADRES': 'пр. Абая, 89, уг. ул. Ади Шарипова', 'restINSTA': 'https://www.instagram.com/burgerking_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '392', 'restNAME': 'Caffe del Teatro', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, итальянская, казахская, вегетарианская', 'restADRES': 'ул. \u200bЖамбыла, 51 А', 'restINSTA': 'https://www.instagram.com/caffedelteatro/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '393', 'restNAME': 'Золотой зал ресторана Grand Osteria', 'restPRICE': '5000–15000', 'restKITCH': 'европейская, казахская', 'restADRES': 'мкр. Аксай 4, 18 А', 'restINSTA': 'https://www.instagram.com/grand.osteria.karaoke/', 'restTIME': 'Ежедневно с 10:00 до 06:00', 'restTimeOpen': '10:00', 'restTimeClose': '06:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '394', 'restNAME': 'Restopark', 'restPRICE': '5000–10000', 'restKITCH': 'европейская', 'restADRES': 'пр. Сейфуллина, 617', 'restINSTA': 'https://www.instagram.com/restopark.almaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '395', 'restNAME': 'Танго', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Ауэзова, 56 В', 'restINSTA': 'https://www.instagram.com/tango_rest/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '396', 'restNAME': "Zheka's Doner House на Ауэзова", 'restPRICE': '1500–2000', 'restKITCH': 'американская, турецкая', 'restADRES': 'ул. Ауэзова, 171', 'restINSTA': 'https://www.instagram.com/zhekas_doner_house/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '397', 'restNAME': 'Dastarkhan-food', 'restPRICE': '900–1500', 'restKITCH': 'восточно-европейская, казахская', 'restADRES': 'ул. Наурызбай батыра, 122/124, уг. ул. Шевченко', 'restINSTA': 'https://www.instagram.com/dastarkhan_food/', 'restTIME': 'Ежедневно с 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '400', 'restNAME': 'Туран', 'restPRICE': '6000–10000', 'restKITCH': 'европейская, восточная, итальянская', 'restADRES': 'ул. \u200bКенесары хана, 88', 'restINSTA': 'https://www.instagram.com/turan_almaty/', 'restTIME': 'Ежедневно с 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '401', 'restNAME': 'Del Papa в мкр. Орбита', 'restPRICE': '3000–7000', 'restKITCH': 'итальянская', 'restADRES': 'мкр. Орбита 3, 3', 'restINSTA': 'https://www.instagram.com/del_papa/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '402', 'restNAME': 'Афиша', 'restPRICE': '5000–12000', 'restKITCH': 'авторская', 'restADRES': 'ул. Кабанбай батыра, 83', 'restINSTA': 'https://www.instagram.com/afisha.restaurant/', 'restTIME': 'Сегодня c 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '403', 'restNAME': 'Bitanga', 'restPRICE': '4500–7000', 'restKITCH': 'украинская', 'restADRES': 'ул. Панфилова, 114, уг. ул. Карасай батыра', 'restINSTA': 'https://www.instagram.com/bitanga.kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '404', 'restNAME': 'Seven Bar and Restaurant', 'restPRICE': '30000–75000', 'restKITCH': 'авторская', 'restADRES': 'пр. Аль-Фараби, 77/7, отель The Ritz-Carlton, Almaty, 28 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 18:00 до 24:00', 'restTimeOpen': '18:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '406', 'restNAME': 'Maui', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Зенкова, 24', 'restINSTA': 'https://www.instagram.com/maui_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '408', 'restNAME': 'Жан Плов Лагман на Жарокова', 'restPRICE': '3500–5000', 'restKITCH': 'восточная, европейская, китайская', 'restADRES': 'ул. Жарокова, 187/1, уг. ул. Жандосова', 'restINSTA': 'https://www.instagram.com/zhan.plov.lagman/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '410', 'restNAME': 'Spice Mantra', 'restPRICE': '3500–5000', 'restKITCH': 'индийская, китайская, тайская', 'restADRES': 'ул. \u200bШевченко, 136', 'restINSTA': 'https://www.instagram.com/spice_mantra/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '411', 'restNAME': 'Музкафе', 'restPRICE': '5000–10000', 'restKITCH': 'итальянская, паназиатская', 'restADRES': 'пр. \u200bАбая, 117', 'restINSTA': 'https://www.instagram.com/muzcafealmaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '412', 'restNAME': 'Bahandi burger в Самале', 'restPRICE': '1200–1500', 'restKITCH': 'американская', 'restADRES': 'мкр. Самал 3, 1 А/1', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '414', 'restNAME': 'NEBO bar gallery & terrace', 'restPRICE': '5000–10000', 'restKITCH': 'корейская, американская', 'restADRES': 'пр. \u200bДостык, 192/2', 'restINSTA': 'https://www.instagram.com/nebo.terrace/', 'restTIME': 'Сегодня c 18:00 до 03:00', 'restTimeOpen': '18:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '415', 'restNAME': 'SunRoof', 'restPRICE': '6000–8000', 'restKITCH': 'европейская, восточная', 'restADRES': 'мкр. \u200bСамал 3, 1', 'restINSTA': 'https://www.instagram.com/sunroof.restaurant/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '416', 'restNAME': 'Bahandi burger по Жумалиева', 'restPRICE': '1200–1500', 'restKITCH': 'американская', 'restADRES': 'ул. Жумалиева, 79', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '417', 'restNAME': 'Шеф', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Богенбай батыра, 104, уг. ул. Валиханова', 'restINSTA': 'https://www.instagram.com/__chef__/', 'restTIME': 'Сегодня c 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '418', 'restNAME': 'ПИОНЕР restaurant & cafe', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, паназиатская, итальянская', 'restADRES': 'пр. \u200bДостык, 132', 'restINSTA': 'https://www.instagram.com/pioner3.14/', 'restTIME': 'Ежедневно с 09:30 до 22:45', 'restTimeOpen': '09:30', 'restTimeClose': '22:45', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '419', 'restNAME': 'Bahandi burger по Гагарина', 'restPRICE': '1200–1500', 'restKITCH': 'американская', 'restADRES': 'пр. Гагарина, 41, 1 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '421', 'restNAME': 'ПерекуCityMixx', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, восточно-европейская', 'restADRES': 'ул. Шевченко, 99/68, уг. ул. Байтурсынова', 'restINSTA': 'https://www.instagram.com/perekycitymixx/', 'restTIME': 'Ежедневно с 09:00 до 21:00', 'restTimeOpen': '09:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '425', 'restNAME': 'Аль-Фараби', 'restPRICE': '3500–7000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Тайманова, 222 А', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '426', 'restNAME': 'Bahandi burger по Тукая', 'restPRICE': '1200–1500', 'restKITCH': 'американская', 'restADRES': 'ул.Тукая, 28', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '427', 'restNAME': 'GRAND ZINA', 'restPRICE': '8000–10000', 'restKITCH': 'авторская, европейская', 'restADRES': 'ул. Кабанбай батыра, 85', 'restINSTA': 'https://www.instagram.com/grand_zina/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '429', 'restNAME': 'Sunset Art&Kitchen', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, итальянская, паназиатская', 'restADRES': 'пр. \u200bАль-Фараби, 5 К2А', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '430', 'restNAME': 'Bellagio', 'restPRICE': '20000–25000', 'restKITCH': 'восточная, европейская, итальянская', 'restADRES': 'ущ. Бутаковка, ул. Горная, 197', 'restINSTA': 'https://www.instagram.com/bellagio_almaty/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '432', 'restNAME': 'Казыбек', 'restPRICE': '4000–5000', 'restKITCH': 'восточно-европейская, казахская', 'restADRES': 'ул. Досмухамедова, 55', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '433', 'restNAME': 'Рыба моей Мечты на Навои', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Навои, 97', 'restINSTA': 'https://www.instagram.com/rmmalmaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '435', 'restNAME': 'Hot2be', 'restPRICE': '5000–7000', 'restKITCH': '', 'restADRES': 'ул. Жамбыла, 204, уг. ул. Розыбакиева', 'restINSTA': 'https://www.instagram.com/hot_2_be/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '436', 'restNAME': 'Dolcetto', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Кунаева, 114', 'restINSTA': 'https://www.instagram.com/dolcetto.almaty/', 'restTIME': 'Сегодня c 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '437', 'restNAME': 'Funky bar & karaoke', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Байтурсынова, 44', 'restINSTA': 'https://www.instagram.com/funky.bar.karaoke/', 'restTIME': 'Сегодня c 18:00 до 03:00', 'restTimeOpen': '18:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '438', 'restNAME': 'Golden Class', 'restPRICE': '2000', 'restKITCH': '', 'restADRES': 'ул. Агадила Сухамбаева, 25', 'restINSTA': 'https://www.instagram.com/goldenclass.almaty/', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '441', 'restNAME': 'Astana Plaza', 'restPRICE': 'депозит', 'restKITCH': '', 'restADRES': 'мкр. Астана, 35 A', 'restINSTA': 'https://www.instagram.com/astana_plaza/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '442', 'restNAME': 'Assorti КРК', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'пр. Достык, 106 Г', 'restINSTA': 'https://www.instagram.com/assortikz/', 'restTIME': 'Сегодня c 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '444', 'restNAME': 'Suly sai — Сулу сай', 'restPRICE': 'депозит', 'restKITCH': '', 'restADRES': '\u200bОй-Карагай, 1660', 'restINSTA': 'https://www.instagram.com/sulysai.kz/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '445', 'restNAME': 'ПЯТНИЦА', 'restPRICE': '5000', 'restKITCH': '', 'restADRES': 'пр. Гагарина, 92, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/pyatnicacafe.kz/', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '446', 'restNAME': 'As karaoke bar', 'restPRICE': '2000–5000', 'restKITCH': '', 'restADRES': 'мкр. Аксай 1 А, 28 Б', 'restINSTA': 'https://www.instagram.com/askaraokekafebar/', 'restTIME': 'Ежедневно с 10:00 до 05:00', 'restTimeOpen': '10:00', 'restTimeClose': '05:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '447', 'restNAME': 'Апрель', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'пр. Гагарина, 111 Б', 'restINSTA': 'https://www.instagram.com/april_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '448', 'restNAME': 'Alberto', 'restPRICE': 'депозит', 'restKITCH': '', 'restADRES': 'ул. Гоголя, 144, уг. ул. Муратбаева', 'restINSTA': 'https://www.instagram.com/albertokz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '449', 'restNAME': 'Сакварели', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Муканова, 210, уг. ул. Жамбыла', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '450', 'restNAME': 'Voice', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Макатаева, 81', 'restINSTA': 'https://www.instagram.com/voice_karaoke/', 'restTIME': 'Ежедневно с 18:00 до 06:00', 'restTimeOpen': '18:00', 'restTimeClose': '06:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '452', 'restNAME': 'Jam', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'мкр. Алмагуль, 39', 'restINSTA': 'https://www.instagram.com/jam.karaoke/', 'restTIME': 'Ежедневно с 18:00 до 05:00', 'restTimeOpen': '18:00', 'restTimeClose': '05:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '456', 'restNAME': 'Ухо и Медведь на Саина', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'мкр. Мамыр 4, 197 А', 'restINSTA': 'https://www.instagram.com/yhoimedved_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '460', 'restNAME': 'Grand Osteria', 'restPRICE': '2000–2500', 'restKITCH': '', 'restADRES': 'мкр. Аксай 4, 18 А', 'restINSTA': 'https://www.instagram.com/grand.osteria.karaoke/', 'restTIME': 'Ежедневно с 10:00 до 06:00', 'restTimeOpen': '10:00', 'restTimeClose': '06:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '461', 'restNAME': 'Ухо и Медведь на Гагарина', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'пр. Гагарина 56, уг. ул. Кабанбай батыра', 'restINSTA': 'https://www.instagram.com/yhoimedved_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '462', 'restNAME': 'Пугасов', 'restPRICE': '', 'restKITCH': '', 'restADRES': 'ул. Абдуллиных, 70', 'restINSTA': 'https://www.instagram.com/pugasov_almaty/', 'restTIME': 'Ежедневно с 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '464', 'restNAME': 'Восточный квартал', 'restPRICE': '2000', 'restKITCH': '', 'restADRES': 'ул. Толе би, 174, уг. ул. Ауэзова', 'restINSTA': 'https://www.instagram.com/vkalmaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '465', 'restNAME': 'Fenomen', 'restPRICE': 'депозит', 'restKITCH': '', 'restADRES': 'ул. Шевченко, 100', 'restINSTA': 'https://www.instagram.com/fenomen_almaty/', 'restTIME': 'Ежедневно с 19:00 до 06:00', 'restTimeOpen': '19:00', 'restTimeClose': '06:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '466', 'restNAME': 'Мараканда', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Муканова, 189', 'restINSTA': 'https://www.instagram.com/marakandakz/', 'restTIME': 'Ежедневно с 10:00 до 22:30', 'restTimeOpen': '10:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '467', 'restNAME': 'Tirol на Арбате', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Жибек Жолы, 98', 'restINSTA': 'https://www.instagram.com/tirolterrace/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '470', 'restNAME': 'Celentano', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Кабанбай батыра, 132, уг. ул. Наурызбай батыра', 'restINSTA': 'https://www.instagram.com/celentano_almaty/', 'restTIME': 'Ежедневно с 18:00 до 23:00', 'restTimeOpen': '18:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '471', 'restNAME': 'Arena Pub', 'restPRICE': 'бесплатный', 'restKITCH': '', 'restADRES': 'ул. Джандосова, 2, уг. ул. Байзакова', 'restINSTA': 'https://www.instagram.com/arena_pubalmaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '472', 'restNAME': 'Пинта на Алтынсарина', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'пр. Алтынсарина, 51 Б', 'restINSTA': 'https://www.instagram.com/pinta_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '473', 'restNAME': 'JUNGLE', 'restPRICE': '6000–8000', 'restKITCH': 'европейская, паназиатская', 'restADRES': 'ул. Маркова, 61/2', 'restINSTA': 'https://www.instagram.com/jungle.almaty/', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '474', 'restNAME': 'Be to bee', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Жарокова, 124', 'restINSTA': 'https://www.instagram.com/betobee_kz/', 'restTIME': 'Сегодня c 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '475', 'restNAME': 'Пинта на Ауэзова', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Ауэзова, 84 А, уг. ул. Мынбаева', 'restINSTA': 'https://www.instagram.com/pinta_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '476', 'restNAME': 'Endorphin', 'restPRICE': '4000–6000', 'restKITCH': 'европейская', 'restADRES': 'ул. \u200bБогенбай батыра, 134', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '477', 'restNAME': 'Пинта на Гоголя', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Гоголя, 169', 'restINSTA': 'https://www.instagram.com/pinta_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '478', 'restNAME': 'PAROVOZ Cafe & Bar', 'restPRICE': '4000–5000', 'restKITCH': 'европейская, итальянская, японская', 'restADRES': 'ул. Шокая, 37', 'restINSTA': 'https://www.instagram.com/parovozbar/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '479', 'restNAME': 'Мята Lounge на Мендикулова', 'restPRICE': '5000–10000', 'restKITCH': 'европейская', 'restADRES': 'ул. Кажымукана, 49', 'restINSTA': 'https://www.instagram.com/myata_mendykulova/', 'restTIME': 'Сегодня c 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '480', 'restNAME': 'JS Bar', 'restPRICE': '3500–5500', 'restKITCH': 'европейская, азиатская', 'restADRES': 'ул. Ришата и Муслима Абдуллиных, 28/1', 'restINSTA': 'https://www.instagram.com/js_hookah_alm/', 'restTIME': 'Сегодня c 15:00 до 01:00', 'restTimeOpen': '15:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '481', 'restNAME': 'Friends bar & terrace', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, итальянская, японская, паназиатская', 'restADRES': 'пр. Сейфуллина, 617', 'restINSTA': 'https://www.instagram.com/friends.bar.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '483', 'restNAME': 'Ротанг', 'restPRICE': '1000–5000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Жарокова, 285 А, уг. ул. Кихтенко', 'restINSTA': 'https://www.instagram.com/rotangkafe/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '484', 'restNAME': 'Счастье на Бутаковке', 'restPRICE': '4000–5000', 'restKITCH': 'европейская, американская, средиземноморская, авторская, азиатская, итальянская', 'restADRES': 'ущ. Бутаковка, ул. Бейсеуова, 200', 'restINSTA': 'https://www.instagram.com/schastyekz/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '487', 'restNAME': 'Мята Lounge по Гагарина', 'restPRICE': '6000–10000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Гагарина, 208 А,  уг. ул. Утепова', 'restINSTA': 'https://www.instagram.com/myata_gagarina/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '488', 'restNAME': 'Oscar Cinema & Karaoke', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, японская', 'restADRES': 'мкр. Аксай 4, 90 А', 'restINSTA': 'https://www.instagram.com/oscar_kz/', 'restTIME': 'Ежедневно с 13:00 до 24:00', 'restTimeOpen': '13:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '489', 'restNAME': 'Астра', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, казахская, русская', 'restADRES': 'ул. Желтоксан, 12', 'restINSTA': 'https://www.instagram.com/astrahotel.almaty/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '490', 'restNAME': 'Sulu', 'restPRICE': '4000–7000', 'restKITCH': 'восточная, европейская, французская', 'restADRES': 'ул. Байтурсынова, 113, уг. ул. Сатпаева', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:30', 'restTimeOpen': '11:00', 'restTimeClose': '23:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '492', 'restNAME': 'Мята Lounge по Сейфуллина', 'restPRICE': '3500–7000', 'restKITCH': 'европейская, паназиатская', 'restADRES': 'пр. Сейфуллина, 472', 'restINSTA': 'https://www.instagram.com/myata_seifullina/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '493', 'restNAME': 'Julia', 'restPRICE': '2500–3500', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Байтурсынова, 104, уг. ул. Сатпаева', 'restINSTA': 'https://www.instagram.com/juliarestobar/', 'restTIME': 'Ежедневно с 08:00 до 02:00', 'restTimeOpen': '08:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '494', 'restNAME': 'Guinness Pub', 'restPRICE': '8000–10000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'пр. Достык, 71, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/guinnesspub.kz/', 'restTIME': 'Сегодня c 17:00 до 23:00', 'restTimeOpen': '17:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '495', 'restNAME': 'The Shakespeare Pub', 'restPRICE': '4000–8000', 'restKITCH': 'английская, европейская, индийская, мексиканская', 'restADRES': 'пр. Достык, 40', 'restINSTA': 'https://www.instagram.com/shakespeare_pub_kz/', 'restTIME': 'Сегодня c 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '496', 'restNAME': 'Erbil', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, восточная, казахская, грузинская', 'restADRES': 'ул. Сауранбаева, 5', 'restINSTA': 'https://www.instagram.com/grand_erbil_hotel/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '497', 'restNAME': 'Golden Shisha', 'restPRICE': '6000–8000', 'restKITCH': 'европейская', 'restADRES': 'ул. Шевченко, 18, уг. пр. Достык', 'restINSTA': 'https://www.instagram.com/goldenshisha.kz/', 'restTIME': 'Сегодня c 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '498', 'restNAME': 'The Банка Bar на Макатаева', 'restPRICE': '4500–6000', 'restKITCH': 'европейская', 'restADRES': 'ул. Макатаева, 81, уг. пр. Абылай хана', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '499', 'restNAME': 'Dickens', 'restPRICE': '7000–10000', 'restKITCH': 'европейская', 'restADRES': 'пр. Достык, 46, уг. ул. Шевченко', 'restINSTA': 'https://www.instagram.com/dickensalmata/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '501', 'restNAME': 'Форт Горный', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'мкр. Хан-Тенгри, 197', 'restINSTA': 'https://www.instagram.com/fort_vernyi/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '502', 'restNAME': 'Chilla Republic', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Кашгарская, 69/102', 'restINSTA': 'https://www.instagram.com/chilla_republic/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '506', 'restNAME': 'Скандалистъ', 'restPRICE': '5000–6000', 'restKITCH': 'европейская, азиатская', 'restADRES': 'ул. Богенбай батыра, 128', 'restINSTA': 'https://www.instagram.com/skandalist.almaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '507', 'restNAME': 'Есть Повод', 'restPRICE': '2500–4000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Райымбека, 384', 'restINSTA': 'https://www.instagram.com/est.povod.bar/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '508', 'restNAME': 'The garden', 'restPRICE': '7000–10000', 'restKITCH': 'европейская', 'restADRES': 'пр. Достык, 341', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '509', 'restNAME': 'Меланж — Паб', 'restPRICE': '3000–8000', 'restKITCH': 'грузинская, европейская, азиатская', 'restADRES': 'мкр. 5, 12 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '510', 'restNAME': 'Arasan Wellness & SPA', 'restPRICE': '1500–4000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Тулебаева, 78, уг.ул. Айтеке би', 'restINSTA': 'https://www.instagram.com/arasanspacomplex/', 'restTIME': 'Ежедневно с 07:00 до 22:40', 'restTimeOpen': '07:00', 'restTimeClose': '22:40', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '511', 'restNAME': 'Tomato на Толе би', 'restPRICE': '3500–5000', 'restKITCH': 'итальянская, европейская', 'restADRES': 'ул. Толе би, 130 А, уг. ул. Муканова', 'restINSTA': 'https://www.instagram.com/tomato_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '512', 'restNAME': 'The Oyster Bar', 'restPRICE': '15000–20000', 'restKITCH': 'европейская, средиземноморская', 'restADRES': 'пр. Абылайхана, 117, уг. ул. Кабанбай батыра', 'restINSTA': 'https://www.instagram.com/oysterbar.kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '514', 'restNAME': 'Barfly', 'restPRICE': '10000–15000', 'restKITCH': 'европейская, итальянская, паназиатская, японская, авторская', 'restADRES': 'пр. Достык, 52/2', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '515', 'restNAME': 'Alberto', 'restPRICE': '2000–4000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Гоголя, 144, уг. ул. Муратбаева', 'restINSTA': 'https://www.instagram.com/albertokz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '516', 'restNAME': 'Штаб', 'restPRICE': '3000–5000', 'restKITCH': 'азиатская, грузинская, европейская, китайская, итальянская', 'restADRES': 'ул. Желтоксан, 132, уг. ул. Карасай батыра', 'restINSTA': 'https://www.instagram.com/shtab_beer_bar/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '517', 'restNAME': 'ПЯТНИЦА', 'restPRICE': '6000–8000', 'restKITCH': 'европейская, грузинская, итальянская, японская', 'restADRES': 'пр. Гагарина, 92, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/pyatnicacafe.kz/', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '518', 'restNAME': 'Сухой Закон', 'restPRICE': '5000–10000', 'restKITCH': 'европейская', 'restADRES': 'ул. Ауэзова, 104 А, уг. ул. Сатпаева', 'restINSTA': 'https://www.instagram.com/suhoizakon_bar/', 'restTIME': 'Ежедневно с 18:00 до 23:00', 'restTimeOpen': '18:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '519', 'restNAME': 'ШИШКА Lounge Almaty', 'restPRICE': '3000–4500', 'restKITCH': 'европейская', 'restADRES': 'пр. Жибек Жолы, 66, уг. ул. Кунаева', 'restINSTA': 'https://www.instagram.com/shishka.lounge.almaty/', 'restTIME': 'Сегодня c 13:00 до 03:00', 'restTimeOpen': '13:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '521', 'restNAME': 'FREERIDER', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, азиатская', 'restADRES': 'пр. Гагарина, 232', 'restINSTA': 'https://www.instagram.com/freerider.kz/', 'restTIME': 'Сегодня c 10:00 до 17:00', 'restTimeOpen': '10:00', 'restTimeClose': '17:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '524', 'restNAME': 'Tomato на Жандосова', 'restPRICE': '4000–4500', 'restKITCH': 'итальянская, европейская', 'restADRES': 'ул. Жандосова, 1, уг. ул. Манаса', 'restINSTA': 'https://www.instagram.com/tomato_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '525', 'restNAME': 'HOUSE PUB', 'restPRICE': '3500–6000', 'restKITCH': 'европейская', 'restADRES': 'пр. Райымбека, 464', 'restINSTA': 'https://www.instagram.com/house_pub/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '526', 'restNAME': 'Friendly', 'restPRICE': '3500–4000', 'restKITCH': 'европейская', 'restADRES': 'пр. Достык, 89', 'restINSTA': 'https://www.instagram.com/friendly.almaty/', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '527', 'restNAME': 'SAMAL', 'restPRICE': '8000–10000', 'restKITCH': 'казахская, восточная, европейская', 'restADRES': 'ул. Горная, 548', 'restINSTA': 'https://www.instagram.com/samal_restaurant_almaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '530', 'restNAME': 'Aragosta', 'restPRICE': '4000–7000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Жамбыла, 129', 'restINSTA': 'https://www.instagram.com/aragosta.almaty/', 'restTIME': 'Ежедневно с 20:00 до 06:00', 'restTimeOpen': '20:00', 'restTimeClose': '06:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '531', 'restNAME': 'Меланж — Лаундж бар', 'restPRICE': '3000–8000', 'restKITCH': 'грузинская, европейская, восточная', 'restADRES': 'мкр. 5, 12 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '532', 'restNAME': 'Tomato по Мендикулова', 'restPRICE': '3500–4000', 'restKITCH': 'итальянская, европейская', 'restADRES': 'бул. Мендикулова, 98, уг. ул. Бектурова', 'restINSTA': 'https://www.instagram.com/tomato_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '533', 'restNAME': 'Glen Pub', 'restPRICE': '7000–10000', 'restKITCH': 'европейская, шотландская, казахская, русская', 'restADRES': 'ул. Шевченко, 44, уг. ул. Тулебаева', 'restINSTA': 'https://www.instagram.com/glenpub_almaty/', 'restTIME': 'Сегодня c 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '535', 'restNAME': 'Munchen', 'restPRICE': '5000–10000', 'restKITCH': 'грузинская, европейская, немецкая', 'restADRES': 'пр. Сейфуллина, 526', 'restINSTA': 'https://www.instagram.com/munchenalmaty/', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '537', 'restNAME': 'Agora', 'restPRICE': '10000–30000', 'restKITCH': 'европейская, индийская, итальянская, турецкая', 'restADRES': 'ул. Байтурсынова, 27/1, уг. ул. Казыбек би', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '538', 'restNAME': 'Центральная Мята на Абая Breakfast & bar', 'restPRICE': '5000–10000', 'restKITCH': 'европейская', 'restADRES': 'пр. \u200bАбая, 26 Г', 'restINSTA': 'https://www.instagram.com/myata.abaya/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '540', 'restNAME': 'Montana', 'restPRICE': '5000–6000', 'restKITCH': 'американская, европейская', 'restADRES': 'ул. \u200bНаурызбай батыра, 7 Б', 'restINSTA': 'https://www.instagram.com/montana_loungebar/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '541', 'restNAME': 'Коктейльный бар Fornarina', 'restPRICE': '5000–10000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Абылай хана, 59', 'restINSTA': 'https://www.instagram.com/fornarina.kz/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '542', 'restNAME': 'Training Cafe Bar', 'restPRICE': '3500–5000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Макатаева, 125', 'restINSTA': 'https://www.instagram.com/training_cafe_almaty/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '543', 'restNAME': 'Beer Garden', 'restPRICE': '2000–4000', 'restKITCH': 'европейская, японская, восточная', 'restADRES': 'ул. Муратбаева, 195', 'restINSTA': 'https://www.instagram.com/beer_garden_pub/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '545', 'restNAME': 'Lugo bar', 'restPRICE': '3000–4000', 'restKITCH': 'фьюжн-кухня, европейская, кавказская', 'restADRES': 'ул. Тимирязева, 1 А', 'restINSTA': 'https://www.instagram.com/lugo_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '546', 'restNAME': 'Хмельница на Навои', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, восточная, грузинская', 'restADRES': 'ул. Навои, 106', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '548', 'restNAME': 'Vilka', 'restPRICE': '2500–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Казыбек би, 105, уг. пр. Сейфулина', 'restINSTA': 'https://www.instagram.com/barvilka/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '552', 'restNAME': '#Zavod', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Умбетбаева, 183', 'restINSTA': 'https://www.instagram.com/zavod.bar/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '554', 'restNAME': 'ARBA WINE', 'restPRICE': '3000–6000', 'restKITCH': '', 'restADRES': 'пр. Абылай хана 71, уг. ул. Гоголя', 'restINSTA': 'https://www.instagram.com/arba_wine/', 'restTIME': 'Сегодня c 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '555', 'restNAME': 'OLD BRIDGE PUB', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'бул. Бухар Жырау, 2, уг. ул. Байтурсынова', 'restINSTA': 'https://www.instagram.com/friendshouse.almaty/', 'restTIME': 'Ежедневно с 17:00 до 23:00', 'restTimeOpen': '17:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '559', 'restNAME': 'Tomato в ТРЦ MEGA Park', 'restPRICE': '3500–5000', 'restKITCH': 'итальянская, европейская', 'restADRES': 'ул. Макатаева, 127/1, пр. Сейфуллина, 483', 'restINSTA': 'https://www.instagram.com/mega.park/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '561', 'restNAME': "Hoper's Bar на Гагарина", 'restPRICE': '3000–5000', 'restKITCH': 'авторская', 'restADRES': 'ул. Гагарина, 93 А', 'restINSTA': 'https://www.instagram.com/hopersbar/', 'restTIME': 'Ежедневно с 13:00 до 23:00', 'restTimeOpen': '13:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '562', 'restNAME': 'Mad Murphys Irish Pub', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, индийская, тайская, мексиканская', 'restADRES': 'ул. Толе би, 12, уг. ул. Зенкова', 'restINSTA': 'https://www.instagram.com/murphys_pub_almaty/', 'restTIME': 'Сегодня c 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '563', 'restNAME': 'Жигули', 'restPRICE': '3000–4000', 'restKITCH': 'европейская', 'restADRES': 'ул. Толе би, 45', 'restINSTA': 'https://www.instagram.com/zhiguli_kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '564', 'restNAME': 'Birmingham Pub', 'restPRICE': '4000–7000', 'restKITCH': 'английская', 'restADRES': 'ул. Егизбаева, 7/10', 'restINSTA': 'https://www.instagram.com/birmingham.pub.almaty/', 'restTIME': 'Ежедневно с 18:00 до 24:00', 'restTimeOpen': '18:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '566', 'restNAME': "William Lawson's 13 The Bar", 'restPRICE': '7000–10000', 'restKITCH': 'европейская', 'restADRES': 'ул. Богенбай Батыра, 102', 'restINSTA': 'https://www.instagram.com/wl13bar/', 'restTIME': 'Сегодня c 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '567', 'restNAME': 'Жара', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'пр. Абылай хана, 135', 'restINSTA': 'https://www.instagram.com/zhara_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '569', 'restNAME': 'Spirit bar', 'restPRICE': '5000–7000', 'restKITCH': 'английская, восточно-европейская, европейская, мексиканская', 'restADRES': 'пр. Аль-Фараби, 77/8, ТК Esentai Mall, 4 этаж', 'restINSTA': 'https://www.instagram.com/spiritbaralmaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '570', 'restNAME': 'Таверна Шмель', 'restPRICE': '4000–7000', 'restKITCH': 'европейская, итальянская, корейская', 'restADRES': 'ул. Жандарбекова, 152/7, уг. ул. Жарокова', 'restINSTA': 'https://www.instagram.com/taverna_shmel_/', 'restTIME': 'Сегодня c 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '571', 'restNAME': 'Garrison Pub', 'restPRICE': '8000–10000', 'restKITCH': 'европейская', 'restADRES': 'мкр. Ерменсай, ул. 1, 23', 'restINSTA': 'https://www.instagram.com/garrison.almaty/', 'restTIME': 'Сегодня c 13:00 до 22:00', 'restTimeOpen': '13:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '573', 'restNAME': 'LIGA', 'restPRICE': '3500–6000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Абдулинных, 50, уг. ул. Толе би', 'restINSTA': 'https://www.instagram.com/liga.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '574', 'restNAME': 'Khan El-Khalili в Алмарасане', 'restPRICE': '4000–6000', 'restKITCH': '', 'restADRES': 'ущ. Алмарасан, ул. Дулати, 2 А', 'restINSTA': 'https://www.instagram.com/khan__el_khalili/', 'restTIME': 'Ежедневно с 14:00 до 02:00', 'restTimeOpen': '14:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '575', 'restNAME': 'Khan El-Khalili на Радлова', 'restPRICE': '4000–6000', 'restKITCH': 'восточная, европейская, итальянская', 'restADRES': 'ул. Радлова, 1', 'restINSTA': 'https://www.instagram.com/khan__el_khalili/', 'restTIME': 'Сегодня c 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '576', 'restNAME': 'Hamster', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Розыбакиева, 234', 'restINSTA': 'https://www.instagram.com/hamsterpub/', 'restTIME': 'Сегодня c 16:00 до 23:00', 'restTimeOpen': '16:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '579', 'restNAME': 'Мята на Алтынсарина', 'restPRICE': '4000–6000', 'restKITCH': 'европейская', 'restADRES': 'мкр. 12, 24', 'restINSTA': 'https://www.instagram.com/myata_altynsarina/', 'restTIME': 'Сегодня c 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '580', 'restNAME': 'Fahrenheit Bar & Grill', 'restPRICE': '7000–10000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Абылай Хана, 96, уг.ул. Жамбыла', 'restINSTA': 'https://www.instagram.com/fahrenheit.almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '581', 'restNAME': 'Smoke lounge по мкр. Самал', 'restPRICE': '6000–8000', 'restKITCH': 'японская', 'restADRES': 'мкр. Самал, 2, ул. Мендикулова, 48', 'restINSTA': 'https://www.instagram.com/love_smoke_almaty/', 'restTIME': 'Ежедневно с 15:00 до 03:00', 'restTimeOpen': '15:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '582', 'restNAME': 'Smoke lounge на Кунаева', 'restPRICE': '2000–5000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Кунаева, 43', 'restINSTA': 'https://www.instagram.com/shishka.lounge.almaty/', 'restTIME': 'Сегодня c 13:00 до 03:00', 'restTimeOpen': '13:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '584', 'restNAME': 'All Saints', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, фьюжн-кухня', 'restADRES': 'ул. Чайковского, 170', 'restINSTA': 'https://www.instagram.com/allsaintsbaralmaty/', 'restTIME': 'Сегодня c 18:00 до 24:00', 'restTimeOpen': '18:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '586', 'restNAME': 'OVERPACK LOUNGE BAR', 'restPRICE': '4000–7000', 'restKITCH': 'европейская', 'restADRES': 'пр. \u200bГагарина, 250', 'restINSTA': 'https://www.instagram.com/overpack_lounge_bar/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '588', 'restNAME': 'КИАНУ', 'restPRICE': '3000–10000', 'restKITCH': 'корейская, паназиатская', 'restADRES': 'пр. Аль- Фараби, 140 А', 'restINSTA': 'https://www.instagram.com/villaalmaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '589', 'restNAME': 'Major Sushi Bar', 'restPRICE': '5000–7000', 'restKITCH': 'японская, итальянская', 'restADRES': 'ул. Торайгырова, 19 А', 'restINSTA': 'https://www.instagram.com/major_sushibar/', 'restTIME': 'Ежедневно с 12:00 до 05:00', 'restTimeOpen': '12:00', 'restTimeClose': '05:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '590', 'restNAME': 'ЧестныЙ на Розыбакиева', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, итальянская, мексиканская', 'restADRES': 'ул. Толе би, 216 В', 'restINSTA': 'https://www.instagram.com/chestniypubalmaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '591', 'restNAME': 'FUROR', 'restPRICE': '4000–5000', 'restKITCH': 'фьюжн-кухня', 'restADRES': 'ул. \u200bКабдолова, 14/2', 'restINSTA': 'https://www.instagram.com/loungebar_furor/', 'restTIME': 'Ежедневно с 07:00 до 23:00', 'restTimeOpen': '07:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '594', 'restNAME': 'Arena Pub', 'restPRICE': '3000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Джандосова, 2, уг. ул. Байзакова', 'restINSTA': 'https://www.instagram.com/arena_pubalmaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '595', 'restNAME': 'bar KAKNADO', 'restPRICE': '3000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Гоголя, 201', 'restINSTA': 'https://www.instagram.com/barkaknado/', 'restTIME': 'Сегодня c 15:00 до 02:00', 'restTimeOpen': '15:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '596', 'restNAME': 'Жиробас', 'restPRICE': '3500–6000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 220/3', 'restINSTA': 'https://www.instagram.com/jirobas_kz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '597', 'restNAME': 'Соседи', 'restPRICE': '5000', 'restKITCH': 'европейская', 'restADRES': 'БЦ Evolution, Бухар Жырау бульвар, 26/1', 'restINSTA': 'https://www.instagram.com/bar_sosedi_almaty/', 'restTIME': 'Сегодня c 12:30 до 02:00', 'restTimeOpen': '12:30', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '599', 'restNAME': 'Hookah Dreams LOUNGE', 'restPRICE': '5000–8000', 'restKITCH': 'европейская, азиатская', 'restADRES': 'ул. Каирбекова, 35 А', 'restINSTA': 'https://www.instagram.com/hdlounge.almaty/', 'restTIME': 'Сегодня c 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '600', 'restNAME': 'Weekend Vibes bar', 'restPRICE': '7000–10000', 'restKITCH': 'европейская', 'restADRES': 'ул. \u200bСатпаева, 30А К4', 'restINSTA': 'https://www.instagram.com/weekend_vibes_bar/', 'restTIME': 'Сегодня c 14:00 до 24:00', 'restTimeOpen': '14:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '601', 'restNAME': 'Tangiers Lounge', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Карасай Батыра, 55', 'restINSTA': 'https://www.instagram.com/tangierslounge.almaty/', 'restTIME': 'Ежедневно с 16:00 до 04:00', 'restTimeOpen': '16:00', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '602', 'restNAME': 'Крапива', 'restPRICE': '7000–8000', 'restKITCH': 'европейская', 'restADRES': 'ул. Кабдолова, 1', 'restINSTA': 'https://www.instagram.com/krapivabowling/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '604', 'restNAME': 'NEGORKIY BAR', 'restPRICE': '3500–5000', 'restKITCH': 'европейская', 'restADRES': 'бул. Бухар Жырау, 66', 'restINSTA': 'https://www.instagram.com/negorkiybar/?igshid=1rwzmpl6h3dle', 'restTIME': 'Сегодня c 12:00 до 03:00', 'restTimeOpen': '12:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '606', 'restNAME': 'Duran bar', 'restPRICE': '7000–10000', 'restKITCH': 'авторская, азиатская, европейская', 'restADRES': 'ул. Кажымукана, 49', 'restINSTA': 'https://www.instagram.com/duranbaralmaty/', 'restTIME': 'Сегодня c 13:00 до 22:00', 'restTimeOpen': '13:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '607', 'restNAME': 'ComeIn на Богенбай батыра', 'restPRICE': '5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Богенбай батыра, 104, уг. ул. Пушкина', 'restINSTA': 'https://www.instagram.com/comeinalmaty/', 'restTIME': 'Сегодня c 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '608', 'restNAME': 'Дымный Пончик', 'restPRICE': '2000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Толе би, 273 Б', 'restINSTA': 'https://www.instagram.com/smoky.donut/', 'restTIME': 'Ежедневно с 16:00 до 02:00', 'restTimeOpen': '16:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '610', 'restNAME': 'Harvey`s pub & grill', 'restPRICE': '5000–10000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 223', 'restINSTA': 'https://www.instagram.com/harveys_almaty/', 'restTIME': 'Ежедневно с 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '611', 'restNAME': 'BAYMAX', 'restPRICE': '5000–8000', 'restKITCH': 'европейская', 'restADRES': 'пр. Достык, 105', 'restINSTA': 'https://www.instagram.com/baymax_bar_grill/', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '613', 'restNAME': 'Hard Hookah bar', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Достык, 19', 'restINSTA': 'https://www.instagram.com/nebo.terrace/', 'restTIME': 'Сегодня c 18:00 до 03:00', 'restTimeOpen': '18:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '615', 'restNAME': 'Efe', 'restPRICE': '2000–5000', 'restKITCH': 'восточная, европейская, кавказская, турецкая', 'restADRES': 'ул. Тимирязева, 31', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:30 до 22:00', 'restTimeOpen': '10:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '616', 'restNAME': 'Reporter', 'restPRICE': '3000–5000', 'restKITCH': '', 'restADRES': 'ул. Ауэзова, 69, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/reporter_almaty/', 'restTIME': 'Сегодня c 16:00 до 01:00', 'restTimeOpen': '16:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '617', 'restNAME': 'ЦЕХ', 'restPRICE': '2000–4000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Рыскулова, ул. Касыма Шарипова, 59 А', 'restINSTA': 'https://www.instagram.com/bar_tseh_almaty/', 'restTIME': 'Ежедневно с 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '618', 'restNAME': 'Calliano', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, итальянская, американская', 'restADRES': 'ул. Жандосова, 9, уг. ул. Ауезова', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '619', 'restNAME': 'SENSEI', 'restPRICE': '4000–7000', 'restKITCH': 'японская', 'restADRES': 'пр. \u200bНазарбаева, 248', 'restINSTA': 'https://www.instagram.com/sensei_sushi_kz/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '620', 'restNAME': 'ZTB', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. \u200bЖамбыла, 77', 'restINSTA': 'https://www.instagram.com/ztb_gastrobar_almaty/', 'restTIME': 'Сегодня c 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '623', 'restNAME': 'YASUDA', 'restPRICE': '3000–5000', 'restKITCH': 'японская', 'restADRES': 'ул. Панфилова, 114', 'restINSTA': 'https://www.instagram.com/yasudasushi/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '624', 'restNAME': 'Sport bar', 'restPRICE': '5000–10000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева 103, 1 этаж', 'restINSTA': 'https://www.instagram.com/thesportbar/', 'restTIME': 'Ежедневно с 16:00 до 22:00', 'restTimeOpen': '16:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '625', 'restNAME': 'кафе-бар', 'restPRICE': '5000–6000', 'restKITCH': 'европейская', 'restADRES': 'ул. Касыма Шарипова, 78/2', 'restINSTA': 'https://www.instagram.com/kwak.almaty/', 'restTIME': 'Ежедневно с 14:00 до 23:00', 'restTimeOpen': '14:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '626', 'restNAME': 'Vilka na Muratbaeva', 'restPRICE': '1500–2500', 'restKITCH': 'европейская', 'restADRES': 'ул. Муратбаева, 164', 'restINSTA': 'https://www.instagram.com/barvilka/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '628', 'restNAME': 'Avenue CLUB', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, японская, итальянская', 'restADRES': 'ул. Мынбаева, 53, уг. ул. Ауэзова', 'restINSTA': 'https://www.instagram.com/avenue_club/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '629', 'restNAME': 'Пивная трапеза', 'restPRICE': '5000–6000', 'restKITCH': 'европейская', 'restADRES': 'ул. Брусиловского, 130', 'restINSTA': 'https://www.instagram.com/pivnaya_trapeza_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '630', 'restNAME': 'Lenore pub', 'restPRICE': '3000–4000', 'restKITCH': 'европейская, азиатская', 'restADRES': 'пр. Абая, 124, уг. Розыбакиева', 'restINSTA': 'https://www.instagram.com/lenore_pub/', 'restTIME': 'Сегодня c 17:00 до 01:00', 'restTimeOpen': '17:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '631', 'restNAME': 'Victory PUB', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, итальянская, американская', 'restADRES': 'ул. Розыбакиева, 238', 'restINSTA': 'https://www.instagram.com/victorypub/', 'restTIME': 'Сегодня c 18:00 до 01:00', 'restTimeOpen': '18:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '633', 'restNAME': '17st. Lounge Bar', 'restPRICE': '3000–7000', 'restKITCH': 'американская, европейская, итальянская', 'restADRES': 'ул. Розыбакиева, 166', 'restINSTA': 'https://www.instagram.com/17st.bar/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '634', 'restNAME': 'Мята Lounge на Сатпаева', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Манаса, 32 А, уг. ул. Сатпаева', 'restINSTA': 'https://www.instagram.com/myata.almaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '635', 'restNAME': 'Aura на Карасай Батыра', 'restPRICE': '2000–4000', 'restKITCH': 'американская', 'restADRES': 'ул. Карасай батыра, 224', 'restINSTA': '', 'restTIME': 'Сегодня c 16:00 до 01:00', 'restTimeOpen': '16:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '636', 'restNAME': 'Ginger Beer & Shots', 'restPRICE': '3000–5000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Курмангазы, 63', 'restINSTA': 'https://www.instagram.com/gin.ger_bar/', 'restTIME': 'Сегодня c 18:00 до 23:00', 'restTimeOpen': '18:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '637', 'restNAME': 'CONTRAST', 'restPRICE': '3000–5000', 'restKITCH': 'американская', 'restADRES': 'ул. Шевченко, 148, уг. ул. Кожамкулова', 'restINSTA': 'https://www.instagram.com/contrast_almaty/', 'restTIME': 'Ежедневно с 17:00 до 24:00', 'restTimeOpen': '17:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '639', 'restNAME': "Hoper's Bar на Кунаева", 'restPRICE': '3000–5000', 'restKITCH': 'авторская', 'restADRES': 'ул. Кунаева, 49, уг. ул. Жибек Жолы, 68', 'restINSTA': 'https://www.instagram.com/hopersbar/', 'restTIME': 'Ежедневно с 13:00 до 23:00', 'restTimeOpen': '13:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '640', 'restNAME': 'Мята Lounge на Назарбаева', 'restPRICE': '7000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 176, (бывш. Фурманова)', 'restINSTA': 'https://www.instagram.com/myata_furmanova/', 'restTIME': 'Ежедневно с 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '641', 'restNAME': 'MONGOL', 'restPRICE': '6000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Курмангазы, 43', 'restINSTA': 'https://www.instagram.com/mongol.almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '644', 'restNAME': 'THE ALBION CLUB', 'restPRICE': '7500–8000', 'restKITCH': 'европейская', 'restADRES': 'мкр. Самал, 2, ул. Бектурова, 104', 'restINSTA': 'https://www.instagram.com/thealbionclub_almaty/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '649', 'restNAME': 'Наше Время', 'restPRICE': '1500–7500', 'restKITCH': 'европейская, азиатская, восточная', 'restADRES': 'пр. Назарбаева, 187 Б (бывшая ул. Фурманова)', 'restINSTA': 'https://www.instagram.com/nashe.vremya/', 'restTIME': 'Сегодня c 08:00 до 18:00', 'restTimeOpen': '08:00', 'restTimeClose': '18:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '652', 'restNAME': 'Amber bar and beer', 'restPRICE': '7000–10000', 'restKITCH': '', 'restADRES': 'пр. Абая, 35/37', 'restINSTA': 'https://www.instagram.com/amber_bar_and_beer/', 'restTIME': 'Сегодня c 16:00 до 22:00', 'restTimeOpen': '16:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '653', 'restNAME': 'LA LA LEY', 'restPRICE': '4000–5000', 'restKITCH': 'итальянская, американская, паназиатская', 'restADRES': 'ул. Байтурсынова, 67', 'restINSTA': 'https://www.instagram.com/lalaley_bar/', 'restTIME': 'Сегодня c 16:00 до 01:00', 'restTimeOpen': '16:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '654', 'restNAME': 'Takara', 'restPRICE': '2000–5000', 'restKITCH': 'японская', 'restADRES': 'пр. Аль-Фараби, 7, БЦ «Нурлы Тау», блок 5 А', 'restINSTA': 'https://www.instagram.com/takara_sushi_bar/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '655', 'restNAME': 'RH lounge', 'restPRICE': '4500–5000', 'restKITCH': '', 'restADRES': 'Жамбыла, 154', 'restINSTA': 'https://www.instagram.com/rh_lounge/', 'restTIME': 'Ежедневно с 14:00 до 24:00', 'restTimeOpen': '14:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '656', 'restNAME': 'Simple Shisha', 'restPRICE': '4000–6000', 'restKITCH': 'восточная, европейская', 'restADRES': 'мкр. Таусамалы, ул. Кунаева, 7', 'restINSTA': 'https://www.instagram.com/simple_shisha_almaty/', 'restTIME': 'Сегодня c 15:00 до 01:00', 'restTimeOpen': '15:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '657', 'restNAME': 'Late night show', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 124', 'restINSTA': 'https://www.instagram.com/latenightshowbar/', 'restTIME': 'Сегодня c 18:00 до 04:00', 'restTimeOpen': '18:00', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '660', 'restNAME': "Zacapa's", 'restPRICE': '3000–5000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Ади Шарипова, 72', 'restINSTA': 'https://www.instagram.com/zacapas_pub/', 'restTIME': 'Ежедневно с 13:00 до 24:00', 'restTimeOpen': '13:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '661', 'restNAME': 'Kowloon bar', 'restPRICE': '7000–10000', 'restKITCH': 'паназиатская', 'restADRES': 'пр. Назарбаева, 226', 'restINSTA': 'https://www.instagram.com/kowloon_bar/', 'restTIME': 'Сегодня c 19:00 до 02:00', 'restTimeOpen': '19:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '662', 'restNAME': 'Shisha Bar By Parmigiano Group', 'restPRICE': '7000–10000', 'restKITCH': '', 'restADRES': 'пр. Аль-Фараби. 116\\20', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 17:00 до 23:00', 'restTimeOpen': '17:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '663', 'restNAME': 'Empire S', 'restPRICE': '3500–10000', 'restKITCH': 'европейская, итальянская, японская', 'restADRES': 'мкр. 4, 10 В', 'restINSTA': 'https://www.instagram.com/empire_s_s/', 'restTIME': 'Ежедневно с 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '664', 'restNAME': 'ESENTAI CITY BAR BY PARMIGIANO GROUP', 'restPRICE': '6000–10000', 'restKITCH': '', 'restADRES': 'пр. Аль-Фараби, 116\\21', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 17:00 до 23:00', 'restTimeOpen': '17:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '667', 'restNAME': 'Шаляпин бар', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'мкр. Мамыр, 1, 21/2', 'restINSTA': '', 'restTIME': 'Сегодня c 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '668', 'restNAME': '8 шнурков', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Толе би, 294/2', 'restINSTA': 'https://www.instagram.com/8_shnurkov/', 'restTIME': 'Сегодня c 16:00 до 04:00', 'restTimeOpen': '16:00', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '669', 'restNAME': 'BAR AMERICANO', 'restPRICE': '4000–6000', 'restKITCH': 'европейская', 'restADRES': 'ул. Байсеитовой, 32', 'restINSTA': '', 'restTIME': 'Сегодня c 20:00 до 04:00', 'restTimeOpen': '20:00', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '670', 'restNAME': 'Khalil Mamoon', 'restPRICE': '3500–4500', 'restKITCH': 'европейская, японская', 'restADRES': 'пр. \u200bАбылай хана, 46', 'restINSTA': 'https://www.instagram.com/khalilmamoonbar/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '672', 'restNAME': 'Birjer', 'restPRICE': '5000–10000', 'restKITCH': 'фьюжн-кухня', 'restADRES': 'ул. Татибекова, 4', 'restINSTA': 'https://www.instagram.com/bir_jer_almaty/', 'restTIME': 'Сегодня c 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '674', 'restNAME': 'PACMAN', 'restPRICE': '2500–5000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Абая, 141', 'restINSTA': 'https://www.instagram.com/pacman_lounge_bar/', 'restTIME': 'Ежедневно с 16:00 до 03:00', 'restTimeOpen': '16:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '676', 'restNAME': 'Woodman grill & beer', 'restPRICE': '10000–15000', 'restKITCH': 'японская, европейская, итальянская', 'restADRES': 'ул. \u200bРозыбакиева, 272', 'restINSTA': 'https://www.instagram.com/woodman_almaty/', 'restTIME': 'Сегодня c 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '677', 'restNAME': 'BERLOGA', 'restPRICE': '3500–4000', 'restKITCH': 'европейская', 'restADRES': 'ул. \u200bМаркова, 79', 'restINSTA': 'https://www.instagram.com/berloga_hookah/', 'restTIME': 'Ежедневно с 15:00 до 23:00', 'restTimeOpen': '15:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '679', 'restNAME': 'Aldavai', 'restPRICE': '1000–2000', 'restKITCH': 'восточная', 'restADRES': 'ул. Айтеке би, 126', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '681', 'restNAME': 'RАЯ народная', 'restPRICE': '3000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Толе би, 155 А', 'restINSTA': 'https://www.instagram.com/pivnaya_raya/', 'restTIME': 'Сегодня c 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '682', 'restNAME': 'Lounge Bar Бадьян', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'пр. Абылай хана, 46', 'restINSTA': 'https://www.instagram.com/badyankz/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '683', 'restNAME': 'Fizika', 'restPRICE': '8000–10000', 'restKITCH': 'европейская', 'restADRES': 'ул. Шевченко, 100', 'restINSTA': 'https://www.instagram.com/fizika_almaty/', 'restTIME': 'Сегодня c 18:00 до 01:00', 'restTimeOpen': '18:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '684', 'restNAME': 'Lolita', 'restPRICE': '10000–12000', 'restKITCH': 'фьюжн-кухня', 'restADRES': 'пр. Абылай хана, 92 А', 'restINSTA': 'https://www.instagram.com/bar_lolita/', 'restTIME': 'Сегодня c 16:00 до 23:00', 'restTimeOpen': '16:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '685', 'restNAME': 'RestoBar 1958', 'restPRICE': '7000–10000', 'restKITCH': 'европейская', 'restADRES': 'ул. Абылай хана, 121 А', 'restINSTA': 'https://www.instagram.com/restobar1958/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '686', 'restNAME': 'Chelsea', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, казахская, русская', 'restADRES': 'ул. Акан Серы, 156', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '687', 'restNAME': 'Harat`s Irish Pub в Нурлы Тау', 'restPRICE': '5000–7000', 'restKITCH': 'ирландская', 'restADRES': 'пр. Аль-Фараби, БЦ «Нурлы Тау» 7, блок 5/А', 'restINSTA': 'https://www.instagram.com/harats_almaty/', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '688', 'restNAME': 'Irish Pub Dublin', 'restPRICE': '5000–6000', 'restKITCH': 'европейская, ирландская', 'restADRES': 'ул. Байсеитовой, 45', 'restINSTA': 'https://www.instagram.com/dublin_pubkz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '689', 'restNAME': 'Harat`s Irish Pub на Панфилова', 'restPRICE': '4000–6000', 'restKITCH': 'ирландская', 'restADRES': 'ул. Панфилова, 110', 'restINSTA': 'https://www.instagram.com/haratspanfilova/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '690', 'restNAME': 'GASTREAT на Гагарина', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, паназиатская', 'restADRES': 'пр. Гагарина, 287 Б', 'restINSTA': 'https://www.instagram.com/gastreat.almaty/', 'restTIME': 'Ежедневно с 07:00 до 23:00', 'restTimeOpen': '07:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '691', 'restNAME': 'Gold', 'restPRICE': '1500–3500', 'restKITCH': 'паназиатская, американская, европейская, восточная, китайская', 'restADRES': 'мкр. Жетысу 2, 11', 'restINSTA': 'https://www.instagram.com/cafegold_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '692', 'restNAME': 'Пельмешка на Байтурсынова', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Байтурсынова, 78 А', 'restINSTA': 'https://www.instagram.com/pelmeshka.almaty2/', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '693', 'restNAME': 'Хомяк', 'restPRICE': '3000–7000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'бульвар Бухар Жырау, 27/5', 'restINSTA': 'https://www.instagram.com/cafehoma.almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '694', 'restNAME': 'Пельмешка на Абылай хана', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Абылай хана, 18, уг. пр. Райымбека', 'restINSTA': 'https://www.instagram.com/pelmeshka.almaty2/', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '695', 'restNAME': 'ПЯТНИЦА', 'restPRICE': '6000–8000', 'restKITCH': 'грузинская, европейская, итальянская, японская', 'restADRES': 'пр. Гагарина, 92, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/pyatnicacafe.kz/', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '698', 'restNAME': 'Qarlygash', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, казахская', 'restADRES': 'пр. Назарбаева, 145', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '699', 'restNAME': 'Gardizi', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, грузинская', 'restADRES': 'мкр. Кокжиек, 53/1', 'restINSTA': 'https://www.instagram.com/gardizi.kz/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '700', 'restNAME': 'China', 'restPRICE': '3000–7000', 'restKITCH': 'китайская', 'restADRES': 'пр. Абая, 89', 'restINSTA': 'https://www.instagram.com/chinacafe_kz/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '701', 'restNAME': 'Veranda', 'restPRICE': '3000–6000', 'restKITCH': 'европейская, восточная, кавказская, казахская', 'restADRES': 'ул. Акан серi, 75', 'restINSTA': 'https://www.instagram.com/_v_e_r_a_n_d_a/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '702', 'restNAME': 'ZAFFERANO', 'restPRICE': '3000–6000', 'restKITCH': 'европейская, восточная, кавказская', 'restADRES': 'ул. Ислама Каримова 2, (бывш. Гайдара), уг. пр. Райымбека', 'restINSTA': 'https://www.instagram.com/zafferano_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '703', 'restNAME': 'Островок', 'restPRICE': '4000–7000', 'restKITCH': 'восточная, европейская, кавказская', 'restADRES': 'пр. Райымбека, 240', 'restINSTA': 'https://www.instagram.com/ostrovok_almaty/', 'restTIME': 'Ежедневно с 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '705', 'restNAME': 'Мариям', 'restPRICE': '1000–3000', 'restKITCH': 'восточная, европейская, казахская', 'restADRES': 'ул. Ауэзова, 3 Г', 'restINSTA': '', 'restTIME': 'Сегодня c 08:30 до 18:00', 'restTimeOpen': '08:30', 'restTimeClose': '18:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '706', 'restNAME': 'Огни Алатау', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, казахская, корейская', 'restADRES': 'мкр. Калкаман 2, ул. Ашимова 239, уг. ул. Шаляпина', 'restINSTA': 'https://www.instagram.com/restoran_ogni_alatau/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '707', 'restNAME': 'Orient Park Atakent', 'restPRICE': '5000–7000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Тимирязева, 42, к 5, уг. ул. Ауэзова', 'restINSTA': 'https://www.instagram.com/atakent_park_hotel/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '709', 'restNAME': 'ПЛОВХАНА', 'restPRICE': '500–1500', 'restKITCH': '', 'restADRES': 'ул. Рихарда Зорге, 18/1', 'restINSTA': 'https://www.instagram.com/plovhana/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '710', 'restNAME': 'Amazon', 'restPRICE': '3000–5000', 'restKITCH': 'восточная, европейская, итальянская, грузинская, казахская', 'restADRES': 'ул. Жангельдина, 212 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '711', 'restNAME': 'Саним', 'restPRICE': '2000–4000', 'restKITCH': 'восточная, европейская, итальянская', 'restADRES': 'ул. \u200bХан шатыр, 253', 'restINSTA': 'https://www.instagram.com/sanim_almaty/', 'restTIME': 'Сегодня c 10:30 до 22:00', 'restTimeOpen': '10:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '714', 'restNAME': 'Бульон Столовая', 'restPRICE': '1500–3000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Ратушного, 78 Б (бывш. ул. Розовая)', 'restINSTA': 'https://www.instagram.com/bulyon.almaty/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '715', 'restNAME': 'Feast', 'restPRICE': '1200–2000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Республики, 13', 'restINSTA': '', 'restTIME': 'Сегодня c 08:30 до 17:30', 'restTimeOpen': '08:30', 'restTimeClose': '17:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '717', 'restNAME': 'TMIN', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, узбекская', 'restADRES': 'пр. Абая, 89', 'restINSTA': 'https://www.instagram.com/tmin_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '718', 'restNAME': 'Арафат', 'restPRICE': '600–1500', 'restKITCH': 'уйгурская, европейская, восточная, китайская', 'restADRES': 'ул. Бурундайская, 80/2', 'restINSTA': 'https://www.instagram.com/arafat_lagmanhana/', 'restTIME': 'Сегодня c 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '719', 'restNAME': 'Гастро Бар', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Назарбаева, 187 Б', 'restINSTA': 'https://www.instagram.com/nashe.vremya/', 'restTIME': 'Сегодня c 08:00 до 18:00', 'restTimeOpen': '08:00', 'restTimeClose': '18:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '720', 'restNAME': 'Anytime cafe', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'пр. \u200bАль-Фараби, 77/8', 'restINSTA': 'https://www.instagram.com/anytime_cafe_almaty/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '721', 'restNAME': 'Шалахо', 'restPRICE': '3500–5000', 'restKITCH': 'восточная, грузинская, европейская, турецкая', 'restADRES': 'ул. Акан Серы, 65, на 1 этаже', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '722', 'restNAME': 'Kunjut', 'restPRICE': '3000–4000', 'restKITCH': 'европейская, паназиатская, восточная, грузинская', 'restADRES': 'ул. Макатаева, 126', 'restINSTA': 'https://www.instagram.com/kunjut_cafe/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '723', 'restNAME': 'ANDALUS', 'restPRICE': '2000–3000', 'restKITCH': 'восточная', 'restADRES': 'ул. Толе би, 285 В/2', 'restINSTA': 'https://www.instagram.com/andalus_chaihana/', 'restTIME': 'Сегодня c 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '724', 'restNAME': 'Volpi Rosse', 'restPRICE': '3000–7000', 'restKITCH': 'американская, европейская, итальянская, русская', 'restADRES': 'бул. Бухар Жырау, 33, БЦ «Женис», 1 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:30', 'restTimeOpen': '09:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '725', 'restNAME': 'NEO', 'restPRICE': '2000–4000', 'restKITCH': '', 'restADRES': 'ул. Брусиловского, 164', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '729', 'restNAME': 'SUSHI CENTER', 'restPRICE': '2500–4000', 'restKITCH': 'японская, итальянская', 'restADRES': 'пр. Рыскулова, 103/3', 'restINSTA': 'https://www.instagram.com/sushi_center.kz/', 'restTIME': 'Ежедневно с 10:00 до 03:00', 'restTimeOpen': '10:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '730', 'restNAME': 'Береке', 'restPRICE': '2500–5000', 'restKITCH': 'восточно-европейская', 'restADRES': 'Кульжинский тракт, 1 А', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '731', 'restNAME': 'На бугорке', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Суюнбая, 379', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '732', 'restNAME': 'Giginova', 'restPRICE': '6000–7000', 'restKITCH': 'грузинская', 'restADRES': 'ул. Богенбай батыра, 142', 'restINSTA': 'https://www.instagram.com/restaurant_giginova/', 'restTIME': 'Сегодня c 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '733', 'restNAME': 'Буханка', 'restPRICE': '2000–5000', 'restKITCH': 'грузинская, европейская, кавказская', 'restADRES': 'ул. Толе би, 200в', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '736', 'restNAME': 'Уголёк', 'restPRICE': '2000–3000', 'restKITCH': 'итальянская, европейская, паназиатская', 'restADRES': 'ул. Жамбыла, 84', 'restINSTA': 'https://www.instagram.com/ugolekcafe/', 'restTIME': 'Сегодня c 13:00 до 01:00', 'restTimeOpen': '13:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '738', 'restNAME': 'Leonidas', 'restPRICE': '1500–3000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 149', 'restINSTA': 'https://www.instagram.com/leonidas_kz/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '739', 'restNAME': 'Карлыгаш', 'restPRICE': '2000–7000', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Майлина, 13', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 03:00', 'restTimeOpen': '08:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '740', 'restNAME': 'Анна-Мария', 'restPRICE': '4000–6500', 'restKITCH': 'европейская, казахская, итальянская', 'restADRES': 'пр. Достык, 31', 'restINSTA': 'https://www.instagram.com/annamariacafe/', 'restTIME': 'Ежедневно с 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '742', 'restNAME': 'ALI-SULTAN', 'restPRICE': '2000–3000', 'restKITCH': 'восточная', 'restADRES': 'ул. Аширбек Сыгай, 9', 'restINSTA': 'https://www.instagram.com/kafe_ali_sultan/', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '744', 'restNAME': 'Hose & Josper', 'restPRICE': '2000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Желтоксан, 162', 'restINSTA': 'https://www.instagram.com/jose_josper/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '745', 'restNAME': 'Восточный двор', 'restPRICE': '3000–4000', 'restKITCH': 'восточно-европейская, грузинская', 'restADRES': 'Мкр. Баянаул, 35', 'restINSTA': 'https://www.instagram.com/vostochniy_dvor/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '747', 'restNAME': 'Уютная', 'restPRICE': '700–1000', 'restKITCH': 'европейская, китайская, уйгурская', 'restADRES': 'ул. Гончарова, 37', 'restINSTA': '', 'restTIME': 'Сегодня c 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '748', 'restNAME': 'Alua`s Lagman house', 'restPRICE': '2000–4000', 'restKITCH': 'европейская, восточная, китайская', 'restADRES': 'ул. \u200bЫрысты, 36/1', 'restINSTA': 'https://www.instagram.com/aluas_lagman_house/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '749', 'restNAME': 'Хаят в мкр. 9', 'restPRICE': '1500–3000', 'restKITCH': 'узбекская, уйгурская', 'restADRES': 'мкр. 9, 35 А', 'restINSTA': 'https://www.instagram.com/hayat.cafe/', 'restTIME': 'Ежедневно с 09:30 до 22:00', 'restTimeOpen': '09:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '751', 'restNAME': 'Korean street food на Абая', 'restPRICE': '1500–2000', 'restKITCH': 'корейская', 'restADRES': 'ул. Абая, 89, уг. ул. Шарипова', 'restINSTA': 'https://www.instagram.com/korean_street_food/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '752', 'restNAME': 'Kim Chi', 'restPRICE': '2000–4000', 'restKITCH': 'корейская, японская', 'restADRES': 'мкр. Орбита 2, 6', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '753', 'restNAME': 'АндерСон', 'restPRICE': '5000–7000', 'restKITCH': 'европейская', 'restADRES': 'ул. Ауэзова, 60', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '754', 'restNAME': 'Bangkok', 'restPRICE': '2000–4000', 'restKITCH': 'тайская', 'restADRES': 'ул. Луганского, 57/6', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '755', 'restNAME': 'Alani Kebab на Поддубного', 'restPRICE': '1500–3000', 'restKITCH': 'турецкая, итальянская', 'restADRES': 'ул. Поддубного, 90', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '756', 'restNAME': 'Mamma mia & Ciao Pizza', 'restPRICE': '2000–5000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Толе би, 81 А, уг. ул. Сейфуллина', 'restINSTA': 'https://www.instagram.com/mammamia_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '757', 'restNAME': 'Ramadan', 'restPRICE': '2000–3000', 'restKITCH': 'восточно-европейская, китайская, итальянская', 'restADRES': 'мкр. Аксай 5, 25', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '759', 'restNAME': 'Плов на Сейфуллина', 'restPRICE': '1000–2000', 'restKITCH': 'восточная, узбекская', 'restADRES': 'пр. Сейфуллина, 340 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 19:00', 'restTimeOpen': '09:00', 'restTimeClose': '19:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '762', 'restNAME': 'Потенциал', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, казахская', 'restADRES': 'ул. Карасай батыра, 193 Б, уг. ул. Жарокова', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '763', 'restNAME': 'Zen Energy Cafe в Самале', 'restPRICE': '2000–5000', 'restKITCH': 'авторская, вегетарианская', 'restADRES': 'мкр. Самал 3, 20', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '764', 'restNAME': 'RS Кафе', 'restPRICE': '5000–7000', 'restKITCH': 'восточная, европейская', 'restADRES': '\u200bул. Жарокова, 198 А', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '765', 'restNAME': 'The Best', 'restPRICE': '1500–5000', 'restKITCH': 'европейская, корейская, грузинская, восточная', 'restADRES': 'ул. Розыбакиева, 92, уг. ул. Шевченко', 'restINSTA': 'https://www.instagram.com/best_cafebar/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '766', 'restNAME': 'Carafe', 'restPRICE': '3000–4500', 'restKITCH': 'восточная, европейская, грузинская', 'restADRES': 'пр. Суюнбая, 220/2', 'restINSTA': 'https://www.instagram.com/cafe.carafe/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '768', 'restNAME': 'Tushuri', 'restPRICE': '3000–4500', 'restKITCH': 'грузинская, европейская', 'restADRES': 'ул. Жансугурова, 327', 'restINSTA': 'https://www.instagram.com/cafe_tushuri_almaty/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '769', 'restNAME': 'Safran', 'restPRICE': '1200–4000', 'restKITCH': 'грузинская, казахская, европейская', 'restADRES': 'ул. \u200bБаянаульская, 30', 'restINSTA': 'https://www.instagram.com/cafe_fayton/', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '770', 'restNAME': 'As', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, восточная', 'restADRES': 'мкр. Аксай 1А, 28Б', 'restINSTA': 'https://www.instagram.com/askaraokekafebar/', 'restTIME': 'Ежедневно с 10:00 до 05:00', 'restTimeOpen': '10:00', 'restTimeClose': '05:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '772', 'restNAME': 'Мубарак', 'restPRICE': '1800–2500', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Байзакова, 44', 'restINSTA': 'https://www.instagram.com/cafe_mubarak/', 'restTIME': 'Сегодня c 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '773', 'restNAME': 'Чиль сон', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, корейская', 'restADRES': 'ул. Болтирик-шешен, 7, уг. ул. Грибоедова', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '776', 'restNAME': 'Van', 'restPRICE': '800–2000', 'restKITCH': 'восточная', 'restADRES': 'ул. \u200bЖансугурова, 309', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '778', 'restNAME': 'Korean street food на Чайковского', 'restPRICE': '1500–2000', 'restKITCH': 'корейская', 'restADRES': 'ул. Чайковского, 22', 'restINSTA': 'https://www.instagram.com/korean_street_food/', 'restTIME': 'Ежедневно с 10:00 до 21:00', 'restTimeOpen': '10:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '781', 'restNAME': 'Nedelka Espresso Bar по Шевченко', 'restPRICE': '2000–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Шевченко, 18, уг. ул. Достык', 'restINSTA': 'https://www.instagram.com/cafenedelka/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '782', 'restNAME': 'Сырмак', 'restPRICE': '1500–3000', 'restKITCH': 'восточно-европейская, китайская', 'restADRES': 'ул. Макатаева, 47, уг. ул. Есенова', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '783', 'restNAME': 'Белый журавль', 'restPRICE': '3500–5000', 'restKITCH': 'европейская, корейская, восточная', 'restADRES': 'ул. Сулейменова, 2 А', 'restINSTA': 'https://www.instagram.com/belyi_zhuravl/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '785', 'restNAME': 'Ак бопе в Каменке', 'restPRICE': '1000–1500', 'restKITCH': 'восточно-европейская', 'restADRES': 'пос. Каменка, ул. Кунаева, 37 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '786', 'restNAME': 'Халал палау', 'restPRICE': '1500–2500', 'restKITCH': 'узбекская, восточная', 'restADRES': 'мкр. Мамыр, ул. Керентау, 1, уг. ул. Яссауи', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '788', 'restNAME': 'Шашлычный двор', 'restPRICE': '2000–7000', 'restKITCH': 'европейская, грузинская, азербайджанская, казахская, русская', 'restADRES': 'ул. \u200bАбиша Кекилбайулы, 69', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '789', 'restNAME': 'Pizza Grill', 'restPRICE': '1500–5000', 'restKITCH': 'европейская, итальянская, восточная', 'restADRES': 'ул. Розыбакиева, 77/85, уг. ул. Сатпаева', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '790', 'restNAME': 'Z Cafe', 'restPRICE': '2000–3000', 'restKITCH': 'азиатская, восточная, еврейская, казахская, уйгурская', 'restADRES': 'ул. \u200bКурмангазы, 97', 'restINSTA': '', 'restTIME': 'Ежедневно с 07:00 до 22:00', 'restTimeOpen': '07:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '791', 'restNAME': 'Гранат', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, европейская', 'restADRES': 'мкр. Горный Гигант, ул. Жамакаева, 109', 'restINSTA': 'https://www.instagram.com/granat_cafe_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '792', 'restNAME': 'Алые паруса в ТРЦ Grand Park', 'restPRICE': '1500–3000', 'restKITCH': 'японская', 'restADRES': 'ул. Кабдолова, 1, в здании ТРЦ "Grand Park"', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '793', 'restNAME': 'Reverence', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Радостовца, 152/4', 'restINSTA': '', 'restTIME': 'Сегодня c 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '794', 'restNAME': 'Лепесток', 'restPRICE': '1500–4000', 'restKITCH': 'европейская, восточная', 'restADRES': 'мкр. Орбита 2, 17 Г', 'restINSTA': 'https://www.instagram.com/lepestok_kz/', 'restTIME': 'Ежедневно с 09:30 до 23:00', 'restTimeOpen': '09:30', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '796', 'restNAME': 'Masisso на Верещагина', 'restPRICE': '5000–6000', 'restKITCH': 'корейская, европейская', 'restADRES': 'ул. Верещагина, 163', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '797', 'restNAME': 'Гостиничный комплекс Medeus Villa', 'restPRICE': '6000–10000', 'restKITCH': 'восточно-европейская, кавказская', 'restADRES': 'ул. Горная, 243 А', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '798', 'restNAME': 'Алые паруса в ТЦ «ФОРУМ»', 'restPRICE': '1500–3000', 'restKITCH': 'японская, паназиатская', 'restADRES': 'пр. Сейфуллина, 617', 'restINSTA': 'https://www.instagram.com/alyeparusaa/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '800', 'restNAME': 'Хаят', 'restPRICE': '1500–3500', 'restKITCH': 'узбекская', 'restADRES': 'мкр. 9, 35 А', 'restINSTA': 'https://www.instagram.com/hayat.cafe/', 'restTIME': 'Ежедневно с 09:30 до 22:00', 'restTimeOpen': '09:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '802', 'restNAME': 'Lanzhou на Северном Кольце', 'restPRICE': '1000–2000', 'restKITCH': 'китайская', 'restADRES': 'Северное Кольцо шоссе, 32 Б', 'restINSTA': 'https://www.instagram.com/lanzhou_kafe/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '803', 'restNAME': 'Bounty', 'restPRICE': '1000–2000', 'restKITCH': 'европейская', 'restADRES': 'мкр. Жетысу 2, 83/1', 'restINSTA': 'https://www.instagram.com/banya.bounty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '805', 'restNAME': 'Ginger Sushi Cafe', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул.\u200b Жандарбекова, 128', 'restINSTA': 'https://www.instagram.com/ginger_sushi_/', 'restTIME': 'Сегодня c 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '806', 'restNAME': 'Irgeli', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, итальянская, китайская', 'restADRES': 'ул. \u200bИсагулова, 166, с. Иргели', 'restINSTA': 'https://www.instagram.com/irgely_kafe/', 'restTIME': 'Ежедневно с 08:00 до 01:00', 'restTimeOpen': '08:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '809', 'restNAME': 'Сытый папа', 'restPRICE': '4000–6000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Шухова, 2/1', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 03:00', 'restTimeOpen': '08:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '810', 'restNAME': 'Grand Cafe Delicat`L', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, фьюжн-кухня, итальянская, русская', 'restADRES': 'ул. Панфилова, 114', 'restINSTA': 'https://www.instagram.com/delicat_l/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '811', 'restNAME': 'Shipudim на Желтоксан', 'restPRICE': '2000–3500', 'restKITCH': 'восточная, европейская, грузинская', 'restADRES': 'пр. Желтоксан, 81, уг. ул. Гоголя', 'restINSTA': 'https://www.instagram.com/shipudim/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '812', 'restNAME': 'Ротанг', 'restPRICE': '3500–5000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Жарокова, 285 А', 'restINSTA': 'https://www.instagram.com/rotangkafe/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '813', 'restNAME': 'Шахристан', 'restPRICE': '2500–5000', 'restKITCH': 'европейская, восточная, корейская', 'restADRES': 'ул. Розыбакиева, 133', 'restINSTA': 'https://www.instagram.com/kafe_shahristan/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '815', 'restNAME': 'Masisso Kangnam', 'restPRICE': '3500–5000', 'restKITCH': 'корейская, европейская, японская', 'restADRES': 'пр. Жибек Жолы, 102а', 'restINSTA': 'https://www.instagram.com/masisso_kangnam/', 'restTIME': 'Сегодня c 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '816', 'restNAME': 'Arabis', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, паназиатская, итальянская', 'restADRES': 'мкр. 8, д. 41/6', 'restINSTA': 'https://www.instagram.com/arabis.almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '817', 'restNAME': 'HOGO CENTR', 'restPRICE': '3000–3500', 'restKITCH': 'дунганская, европейская, китайская', 'restADRES': 'ул. Жансугурова, 258', 'restINSTA': 'https://www.instagram.com/shaolin_hogo/', 'restTIME': 'Ежедневно с 10:00 до 02:30', 'restTimeOpen': '10:00', 'restTimeClose': '02:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '818', 'restNAME': 'Хачапури Хинкальевич', 'restPRICE': '3000–4000', 'restKITCH': 'грузинская', 'restADRES': 'ул. Кабанбай батыра, 68/51, уг. ул. Зенкова', 'restINSTA': 'https://www.instagram.com/hachapuri_hinkalevich/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '819', 'restNAME': 'STEKLO Grill & Bar', 'restPRICE': '5000–8000', 'restKITCH': 'европейская', 'restADRES': 'ул. Жангельдина, 166', 'restINSTA': 'https://www.instagram.com/steklo_grill.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '821', 'restNAME': 'Марь Иванна', 'restPRICE': '5000–20000', 'restKITCH': 'восточная, европейская, грузинская', 'restADRES': 'ул. \u200bЖансугурова, 383', 'restINSTA': 'https://www.instagram.com/cafe_marivanna/', 'restTIME': 'Ежедневно с 12:00 до 03:00', 'restTimeOpen': '12:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '824', 'restNAME': 'STELLA TERASSA', 'restPRICE': '1000–2500', 'restKITCH': 'европейская, восточная', 'restADRES': 'мкр. Айнабулак 3, 166/4', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '826', 'restNAME': 'Жаксылык', 'restPRICE': '800–1000', 'restKITCH': 'европейская, китайская, узбекская', 'restADRES': 'ул. Ак-Кайнар, 59', 'restINSTA': '', 'restTIME': 'Ежедневно с 07:00 до 23:00', 'restTimeOpen': '07:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '827', 'restNAME': 'SHAFRAN на Есенова', 'restPRICE': '2000–2500', 'restKITCH': 'европейская, восточная, японская', 'restADRES': 'ул. Есенова, 32', 'restINSTA': 'https://www.instagram.com/shafran.kz/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '828', 'restNAME': 'Gabali', 'restPRICE': '3500–6000', 'restKITCH': 'грузинская, европейская, кавказская, казахская', 'restADRES': 'ул. Акан Серы, 63', 'restINSTA': 'https://www.instagram.com/cafe_gabali/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '830', 'restNAME': 'GILAVAR', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, грузинская, восточная', 'restADRES': 'ул. Жангельдина, 82', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '832', 'restNAME': 'SHAFRAN на Абылайхана', 'restPRICE': '1500–3500', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Абылай хана, 62, 1 этаж', 'restINSTA': 'https://www.instagram.com/shafran.kz/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '833', 'restNAME': 'Borjomi', 'restPRICE': '3500–5000', 'restKITCH': 'восточная, грузинская', 'restADRES': 'ул. Ахметова, 23', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '836', 'restNAME': 'Stories', 'restPRICE': '2000–3000', 'restKITCH': 'европейская', 'restADRES': 'пр. Жибек жолы, 66', 'restINSTA': 'https://www.instagram.com/stories.shisharoom/', 'restTIME': 'Ежедневно с 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '838', 'restNAME': 'Senseasia', 'restPRICE': '3000–5000', 'restKITCH': 'грузинская, европейская', 'restADRES': 'пр. Сейфуллина, 136 А, уг. ул. Варшавская', 'restINSTA': 'https://www.instagram.com/senseasia.kz/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '841', 'restNAME': 'Камелот', 'restPRICE': '3000–5000', 'restKITCH': 'американская, европейская, мексиканская', 'restADRES': 'бул. Бухар Жырау, 37', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 01:00', 'restTimeOpen': '12:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '843', 'restNAME': 'AFIYET', 'restPRICE': '3000–8000', 'restKITCH': 'европейская, восточная', 'restADRES': '\u200bмкр. Саялы, 34', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '844', 'restNAME': 'Agora', 'restPRICE': '6000–10000', 'restKITCH': 'европейская, восточная, индийская', 'restADRES': 'ул. Байтурсынова, 27/1', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '845', 'restNAME': 'Лето', 'restPRICE': '4000–6000', 'restKITCH': 'европейская', 'restADRES': '5 мкр, 21 Г', 'restINSTA': 'https://www.instagram.com/letovalmaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '846', 'restNAME': 'Полярис', 'restPRICE': '3500–5000', 'restKITCH': 'европейская, грузинская', 'restADRES': 'мкр. \u200b6, 11 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 05:00', 'restTimeOpen': '11:00', 'restTimeClose': '05:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '847', 'restNAME': 'Adal', 'restPRICE': '3000–6000', 'restKITCH': 'европейская, грузинская', 'restADRES': 'ул. Розыбакиева, 140', 'restINSTA': 'https://www.instagram.com/cafe_adal1/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '848', 'restNAME': 'Аксакал', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, европейская, китайская', 'restADRES': 'ул. Каирбекова, 47', 'restINSTA': 'https://www.instagram.com/aksakal.kz/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '849', 'restNAME': 'Жибек Жолы', 'restPRICE': '3000–5000', 'restKITCH': 'грузинская, европейская', 'restADRES': 'мкр. Калкаман, ул. Ашимова, 13 А', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '850', 'restNAME': 'Bijou', 'restPRICE': '2500–4000', 'restKITCH': 'европейская, грузинская, армянская', 'restADRES': 'ул. Муканова, 187', 'restINSTA': '', 'restTIME': 'Сегодня c 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '851', 'restNAME': 'LaDoni', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'мкр. Мамыр 1, 29/6', 'restINSTA': 'https://www.instagram.com/ladoni_almaty/', 'restTIME': 'Сегодня c 13:00 до 22:00', 'restTimeOpen': '13:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '852', 'restNAME': 'Car Pizza and Sushi в мкр. Жетысу', 'restPRICE': '1500–4000', 'restKITCH': 'итальянская, японская', 'restADRES': 'мкр. Жетысу 2, 2 А', 'restINSTA': 'https://www.instagram.com/sushi_zhan/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '853', 'restNAME': 'MADAMIN', 'restPRICE': '2500–3000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Гагарина, 287/2', 'restINSTA': 'https://www.instagram.com/madamin_halal/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '854', 'restNAME': 'Fresh Timeв ТРЦ «Спутник»', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'мкр. Мамыр, 8 А, ТРЦ «Спутник», 3 этаж', 'restINSTA': 'https://www.instagram.com/fresh_time__almaty/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '857', 'restNAME': 'Пусан', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, корейская', 'restADRES': 'пр. Райымбека, 343, уг. ул. Тлендиева', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '858', 'restNAME': 'Ficelle', 'restPRICE': '3000–7000', 'restKITCH': 'средиземноморская, европейская', 'restADRES': 'мкр. Керемет, 7', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '862', 'restNAME': 'Дружба', 'restPRICE': '2000–4000', 'restKITCH': 'авторская, английская, азиатская, вьетнамская, вегетарианская, европейская, индийская, итальянская, китайская, паназиатская', 'restADRES': 'ул. Богенбай батыра, 132, уг. ул. Панфилова', 'restINSTA': 'https://www.instagram.com/druzhba.malina/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '863', 'restNAME': 'Бай', 'restPRICE': '1500–3000', 'restKITCH': 'казахская', 'restADRES': 'ул. Абая, 33', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '864', 'restNAME': 'Алмалы', 'restPRICE': '2500–5000', 'restKITCH': 'китайская, восточная', 'restADRES': 'пр. Гагарина, 41, уг. ул. Жамбыла', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '867', 'restNAME': 'Рамазан', 'restPRICE': '1000–3000', 'restKITCH': 'европейская, китайская, уйгурская, восточная, дунганская', 'restADRES': 'ул. Жангельдина, 194', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '870', 'restNAME': 'Мансарда', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Райымбека, 176', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '871', 'restNAME': 'Краснодарский парень', 'restPRICE': '2000–3500', 'restKITCH': 'американская', 'restADRES': 'пр. Абая, 12', 'restINSTA': 'https://www.instagram.com/krdparen_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '872', 'restNAME': "As'salam", 'restPRICE': '2500–3500', 'restKITCH': 'восточно-европейская, восточная, европейская, казахская, китайская', 'restADRES': 'ул. Тургут Озала, 178 (бывш. ул. Баумана), уг. ул. Шакарима', 'restINSTA': 'https://www.instagram.com/assalam.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '873', 'restNAME': 'Tree House Cafe', 'restPRICE': '1600–2000', 'restKITCH': 'европейская, азиатская', 'restADRES': 'пр. \u200bЖибек Жолы, 135', 'restINSTA': 'https://www.instagram.com/_tree_house/', 'restTIME': 'Сегодня c 08:00 до 19:00', 'restTimeOpen': '08:00', 'restTimeClose': '19:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '876', 'restNAME': 'АндерCон в ТРК Mega Center Alma-Ata', 'restPRICE': '5000–8000', 'restKITCH': 'европейская', 'restADRES': 'ул. Розыбакиева, 247 А, ТРК Mega Center Alma-Ata, 2 этаж', 'restINSTA': 'https://www.instagram.com/mega_center/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '877', 'restNAME': 'Sumo–San', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, японская', 'restADRES': 'ул. Байтурсынова, 159', 'restINSTA': 'https://www.instagram.com/sumosankz/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '880', 'restNAME': 'Fresh Timeв ТРЦ Promenade', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'ул. Абая, 44 А, ТРЦ Promenade, 2 этаж', 'restINSTA': 'https://www.instagram.com/fresh_time__almaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '883', 'restNAME': 'Chick f1rst', 'restPRICE': '3000–5000', 'restKITCH': 'корейская', 'restADRES': 'мкр. Мамыр 4, 1 а', 'restINSTA': 'https://www.instagram.com/chickf1rst_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '884', 'restNAME': 'Бакинский бульвар', 'restPRICE': '5000–7000', 'restKITCH': 'азербайджанская, грузинская, европейская', 'restADRES': 'ул. Шевченко, 155 А, уг. ул. Клочкова', 'restINSTA': 'https://www.instagram.com/bakinskiy.b/', 'restTIME': 'Сегодня c 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '885', 'restNAME': 'Эрмитаж', 'restPRICE': '5000–7000', 'restKITCH': 'грузинская, европейская', 'restADRES': 'ул. Жансугурова, 251', 'restINSTA': 'https://www.instagram.com/cafe_hermitage.almaty/', 'restTIME': 'Сегодня c 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '886', 'restNAME': 'Три казана', 'restPRICE': '5000–7000', 'restKITCH': 'восточная', 'restADRES': 'пр. \u200bСейфуллина, 617', 'restINSTA': 'https://www.instagram.com/3kazana.kz/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '887', 'restNAME': 'Контур', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, кавказская', 'restADRES': 'мкр. Аксай 2, 16 А', 'restINSTA': 'https://www.instagram.com/kafekontur/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '888', 'restNAME': 'K-Pizza', 'restPRICE': '2500–3500', 'restKITCH': 'корейская', 'restADRES': 'пр. Достык, 99 В', 'restINSTA': 'https://www.instagram.com/pioner3.14/', 'restTIME': 'Ежедневно с 09:30 до 22:45', 'restTimeOpen': '09:30', 'restTimeClose': '22:45', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '889', 'restNAME': 'Тянь-Шань', 'restPRICE': '3000–7000', 'restKITCH': 'дунганская, европейская, кавказская, казахская', 'restADRES': 'мкр. Хан Тенгри, ул. Дулати, 220', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '890', 'restNAME': 'Пещера на Макатаева', 'restPRICE': '2000–3000', 'restKITCH': 'казахская, восточная, итальянская, европейская, мексиканская', 'restADRES': 'ул. Макатаева, 49/1', 'restINSTA': 'https://www.instagram.com/peshera_halal_kafe/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '891', 'restNAME': 'AGA.in.kz', 'restPRICE': '1000–2000', 'restKITCH': 'восточная, европейская', 'restADRES': 'пр. Рыскулова, 129/1', 'restINSTA': 'https://www.instagram.com/again_cafe/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '892', 'restNAME': 'Алые паруса в ТРЦ Asia Park', 'restPRICE': '1000–5000', 'restKITCH': 'японская', 'restADRES': 'пр. Райымбека, 514 А, в здании ТРЦ "Asia Park"', 'restINSTA': 'https://www.instagram.com/asiapark.almaty/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '893', 'restNAME': 'Sultan doner & pizza', 'restPRICE': '1000–2000', 'restKITCH': 'восточно-европейская, восточная, итальянская, турецкая', 'restADRES': 'мкр. 9, 28 Б', 'restINSTA': 'https://www.instagram.com/sultan_express.kz/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '894', 'restNAME': 'Кухня', 'restPRICE': '1000–2000', 'restKITCH': 'европейская, азиатская', 'restADRES': 'ул. \u200bСатпаева, 90/21', 'restINSTA': 'https://www.instagram.com/kuhnya_food_kz/', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '896', 'restNAME': 'The Green House', 'restPRICE': '5000–8000', 'restKITCH': 'вегетарианская', 'restADRES': 'пр. Достык, 341', 'restINSTA': 'https://www.instagram.com/thegreenhousekz/', 'restTIME': 'Ежедневно с 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '897', 'restNAME': 'Узбечка на Жамбыла', 'restPRICE': '1500–2500', 'restKITCH': 'европейская, восточная, китайская', 'restADRES': 'ул. \u200bЖамбыла, 186', 'restINSTA': 'https://www.instagram.com/uzbechka_cafe_almatyy/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '898', 'restNAME': 'Nedelka по Абая', 'restPRICE': '2000–5000', 'restKITCH': 'европейская', 'restADRES': 'пр. Абая, 19, уг. ул. Валиханова', 'restINSTA': 'https://www.instagram.com/cafenedelka/', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '899', 'restNAME': 'LaMian', 'restPRICE': '800–1200', 'restKITCH': 'азиатская, корейская, китайская, японская', 'restADRES': 'ул. Сухамбаева, 21', 'restINSTA': 'https://www.instagram.com/lamian_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '900', 'restNAME': 'Восточка', 'restPRICE': '1000–2500', 'restKITCH': 'европейская, уйгурская, китайская, узбекская', 'restADRES': 'ул. Есенова, 16', 'restINSTA': 'https://www.instagram.com/lagmanhana_vostochka/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '901', 'restNAME': 'Paul на Чимбулаке', 'restPRICE': '3500–5000', 'restKITCH': 'французская', 'restADRES': 'ул. Горная, 640 А', 'restINSTA': 'https://www.instagram.com/paul_almaty/', 'restTIME': 'Ежедневно с 09:00 до 18:00', 'restTimeOpen': '09:00', 'restTimeClose': '18:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '904', 'restNAME': 'Presso', 'restPRICE': '4000–8000', 'restKITCH': 'европейская, паназиатская', 'restADRES': 'ул. Толе би, 50/52, уг. ул. Кунаева', 'restINSTA': 'https://www.instagram.com/by_presso/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '905', 'restNAME': 'Аслан', 'restPRICE': '3000–4000', 'restKITCH': 'европейская, казахская, кавказская', 'restADRES': 'ул. Ашимова, 162', 'restINSTA': '', 'restTIME': 'Ежедневно с 07:00 до 22:00', 'restTimeOpen': '07:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '906', 'restNAME': 'Гульдала', 'restPRICE': '2500–7000', 'restKITCH': 'европейская, китайская, восточная', 'restADRES': 'ул. Жибек Жолы, 1', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '908', 'restNAME': 'Ерен', 'restPRICE': '1000–2000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Суюнбая, 2/3', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 20:00', 'restTimeOpen': '09:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '909', 'restNAME': 'ПРИВАЛ', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Ер Тостык, 2/3', 'restINSTA': 'https://www.instagram.com/prival_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '910', 'restNAME': 'SHAFRAN в Грэссе', 'restPRICE': '2000–2500', 'restKITCH': 'еврейская, японская, восточная', 'restADRES': 'ул. Жансугурова, 80', 'restINSTA': 'https://www.instagram.com/shafran.kz/', 'restTIME': 'Сегодня c 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '912', 'restNAME': 'Мангал', 'restPRICE': '5000–7000', 'restKITCH': 'восточная, кавказская, европейская', 'restADRES': 'ул. Искендерова, 35 Б', 'restINSTA': 'https://www.instagram.com/kafe_mangal_gorny/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '913', 'restNAME': 'Летнее кафе', 'restPRICE': '1000–3000', 'restKITCH': 'европейская, восточная, казахская', 'restADRES': 'мкр. Аксай 4, 42 Б', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '914', 'restNAME': 'Royal Park', 'restPRICE': '3000–4000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Шолохова, 29', 'restINSTA': 'https://www.instagram.com/rp.hotels/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '915', 'restNAME': 'Золотой кувшин', 'restPRICE': '2000–3000', 'restKITCH': 'восточная, европейская, кавказская', 'restADRES': 'ул. Акан Серы, д. 81', 'restINSTA': 'https://www.instagram.com/zolotoi_kuvshin/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '916', 'restNAME': 'Лагман Хан', 'restPRICE': '800–1500', 'restKITCH': 'восточная, китайская, восточно-европейская, итальянская, японская', 'restADRES': 'ул. Макатаева, 73/60, уг. ул. Назарбаева', 'restINSTA': 'https://www.instagram.com/lagman_khan/', 'restTIME': 'Сегодня c 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '917', 'restNAME': 'Парваз', 'restPRICE': '5000–6000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Жусанды, 7', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '919', 'restNAME': 'Рамазан', 'restPRICE': '3000–5000', 'restKITCH': 'японская, итальянская, восточная, кавказская', 'restADRES': 'ул. \u200bЕсим хана, 77 А', 'restINSTA': 'https://www.instagram.com/pizza_sushi.ramazan/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '920', 'restNAME': 'Ciao Pizza', 'restPRICE': '3000–5000', 'restKITCH': 'итальянская', 'restADRES': 'мкр. 10, 3В', 'restINSTA': 'https://www.instagram.com/mammamia_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '921', 'restNAME': 'Das Grill Haus', 'restPRICE': '2000–4000', 'restKITCH': 'немецкая, турецкая, азиатская, восточная', 'restADRES': 'пр. Сейфуллина, 483', 'restINSTA': 'https://www.instagram.com/rotana_grill_house/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '924', 'restNAME': 'Chad Cafe', 'restPRICE': '3000–5000', 'restKITCH': 'авторская, паназиатская, тайская', 'restADRES': 'ул. Гоголя, 13', 'restINSTA': 'https://www.instagram.com/chad.cafe/', 'restTIME': 'Ежедневно с 08:30 до 22:00', 'restTimeOpen': '08:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '925', 'restNAME': 'Ramen 77', 'restPRICE': '2000–3000', 'restKITCH': 'японская', 'restADRES': 'ул. Кабанбай батыра, 77', 'restINSTA': 'https://www.instagram.com/ramen_77/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '926', 'restNAME': 'Избушечка трактир', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, восточная, кавказская', 'restADRES': 'ул. Толе би, 297 Е', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '928', 'restNAME': 'Эмиль', 'restPRICE': '3000–5000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Немировича-Данченко, 1 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 14:00 до 24:00', 'restTimeOpen': '14:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '929', 'restNAME': 'Gelato', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Валиханова, 170', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '933', 'restNAME': 'Расул', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. \u200bЧурина, 29 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '934', 'restNAME': 'В Тандыре', 'restPRICE': '3000–5000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Жетысуская, 24  А', 'restINSTA': 'https://www.instagram.com/vtandyre.kz/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '936', 'restNAME': 'MAGNIT', 'restPRICE': '4000–8000', 'restKITCH': 'восточная, кавказская, европейская', 'restADRES': 'ул. Омская, 125/1', 'restINSTA': 'https://www.instagram.com/cafe.magnit.almaty/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '937', 'restNAME': 'Resident City Hotel', 'restPRICE': '3000–5000', 'restKITCH': 'восточная, казахская', 'restADRES': 'ул. Желтоксан, 23', 'restINSTA': 'https://www.instagram.com/resident_city_hotel/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '938', 'restNAME': 'Om shanti', 'restPRICE': '5000–6000', 'restKITCH': 'индийская, европейская', 'restADRES': 'ул. Наурызбай Батыра, 102', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '939', 'restNAME': 'Апшерон', 'restPRICE': '3000–4500', 'restKITCH': 'европейская, кавказская', 'restADRES': 'ул. Озёрная, 32', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '940', 'restNAME': 'Night Star', 'restPRICE': '4000–6000', 'restKITCH': 'кавказская, грузинская, европейская, казахская', 'restADRES': 'ул. Шагабутдинова, 129, уг. ул. Джамбула', 'restINSTA': 'https://www.instagram.com/nightstar_cafe/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '943', 'restNAME': 'Тандем', 'restPRICE': '2000–5000', 'restKITCH': 'восточная, европейская, китайская', 'restADRES': 'ул. Жансугурова, 79', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '944', 'restNAME': 'Pinseria Esentai City', 'restPRICE': '6000–10000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Аль-Фараби, 116/21', 'restINSTA': 'https://www.instagram.com/parmigiano_group/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '946', 'restNAME': 'У тети Фаи', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Акан Серы, 19', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '947', 'restNAME': 'Афина', 'restPRICE': '3500–5000', 'restKITCH': 'европейская, грузинская', 'restADRES': 'ул. \u200bВольная, 2 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '948', 'restNAME': 'Shafran на Акан Серы', 'restPRICE': '2000–3500', 'restKITCH': 'восточно-европейская, грузинская', 'restADRES': 'ул. Акан Серы, 51/86', 'restINSTA': 'https://www.instagram.com/cafe__shafran/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '950', 'restNAME': 'AWESOME BAR', 'restPRICE': '4000–7000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Богенбай батыра, 128', 'restINSTA': '', 'restTIME': 'Сегодня c 07:00 до 24:00', 'restTimeOpen': '07:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '952', 'restNAME': 'Бастау', 'restPRICE': '1000–1500', 'restKITCH': 'китайская, европейская, казахская', 'restADRES': 'Талгарийский тракт, 13 км', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '954', 'restNAME': 'Восточный рай', 'restPRICE': '3000–4000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Галилея, 2/3', 'restINSTA': '', 'restTIME': 'Ежедневно с 18:00 до 04:00', 'restTimeOpen': '18:00', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '957', 'restNAME': 'Unison', 'restPRICE': '3000–10000', 'restKITCH': 'восточная, европейская', 'restADRES': 'пр. Райымбека, 496 А', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '958', 'restNAME': 'Ramen House', 'restPRICE': '2000–3000', 'restKITCH': 'азиатская, корейская, японская', 'restADRES': 'ул. Желтоксан, д. 118 1 этаж', 'restINSTA': 'https://www.instagram.com/ramen_house_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '959', 'restNAME': 'Место встречи', 'restPRICE': '3500–6000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Жансугурова, 271, уг. ул. Артиллерийская', 'restINSTA': 'https://www.instagram.com/mesto_vstrechii/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '960', 'restNAME': 'Кабачок Горыныч', 'restPRICE': '3500–7000', 'restKITCH': 'европейская, русская', 'restADRES': 'пр. Гагарина, 298 А', 'restINSTA': 'https://www.instagram.com/kabachok_gorinich_official/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '962', 'restNAME': 'У Иваныча', 'restPRICE': '2000–5000', 'restKITCH': 'азиатская', 'restADRES': 'ул. Жансугурова, 200', 'restINSTA': 'https://www.instagram.com/kafe_y_ivanicha/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '964', 'restNAME': 'Beyaz Firin', 'restPRICE': '1500–2000', 'restKITCH': 'турецкая, европейская, казахская', 'restADRES': 'пр. Райымбека  239г', 'restINSTA': 'https://www.instagram.com/zhekas_doner_house/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '966', 'restNAME': 'Palacio', 'restPRICE': '1500–5000', 'restKITCH': 'кавказская, восточная, европейская', 'restADRES': 'мкр. Айнабулак 3, 161 А', 'restINSTA': 'https://www.instagram.com/palacio_almaty/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '967', 'restNAME': 'Лагман Town', 'restPRICE': '1000–3000', 'restKITCH': 'восточно-европейская', 'restADRES': 'мкр. Достык, ул. Есенова, 42, уг. ул. Яссауи', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '968', 'restNAME': 'Лаза Джан', 'restPRICE': '2000–4000', 'restKITCH': 'восточная, европейская', 'restADRES': 'пр. Жибек Жолы, 68', 'restINSTA': 'https://www.instagram.com/lazadjan/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '971', 'restNAME': 'Иверия', 'restPRICE': '3000–6000', 'restKITCH': 'грузинская, европейская, восточная', 'restADRES': 'пр. Райымбека, 357', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '972', 'restNAME': 'Венера', 'restPRICE': '2500–5000', 'restKITCH': 'европейская, грузинская', 'restADRES': 'ул, Самаркандская, 16', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '975', 'restNAME': 'Pizzaiolo', 'restPRICE': '2000–4000', 'restKITCH': 'итальянская, японская', 'restADRES': 'ул. Брусиловского, 163', 'restINSTA': 'https://www.instagram.com/pizzaiolo_almaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '976', 'restNAME': 'У друзей', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, кавказская, восточная', 'restADRES': 'мкр. Мамыр, 7/15', 'restINSTA': 'https://www.instagram.com/u_druzey_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '977', 'restNAME': 'Арагви', 'restPRICE': '4000–7000', 'restKITCH': 'грузинская, европейская, кавказская, казахская', 'restADRES': 'пр. Райымбека, 309, уг. ул Туркебаева (бывш. Баумана)', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '979', 'restNAME': 'Четверг', 'restPRICE': '3000–4000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Утеген батыра, 126', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '980', 'restNAME': 'Rodem', 'restPRICE': '3000–5000', 'restKITCH': 'корейская', 'restADRES': 'пр. Абылай хана, 64, уг. ул. Жибек Жолы', 'restINSTA': 'https://www.instagram.com/rodem_korean_kafe/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '981', 'restNAME': 'Govinda’s', 'restPRICE': '1500–5000', 'restKITCH': 'вегетарианская', 'restADRES': 'пр. Абылай хана, 39', 'restINSTA': 'https://www.instagram.com/govindas_almaty/', 'restTIME': 'Ежедневно с 12:00 до 20:00', 'restTimeOpen': '12:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '983', 'restNAME': 'Alberto', 'restPRICE': '3000–4000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Гоголя, 144, уг. ул. Муратбаева', 'restINSTA': 'https://www.instagram.com/albertokz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '985', 'restNAME': 'Шынгыс', 'restPRICE': '1000–1500', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Жана Гасыр, 2/3', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '986', 'restNAME': 'Мармарис по ул. Ауезова', 'restPRICE': '3000–5000', 'restKITCH': 'турецкая, европейская', 'restADRES': 'ул. Ауэзова, 175', 'restINSTA': 'https://www.instagram.com/marmariskz/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '987', 'restNAME': 'Ламази', 'restPRICE': '1500–3000', 'restKITCH': 'грузинская, восточно-европейская', 'restADRES': 'ул. Жансугурова, 229', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 04:00', 'restTimeOpen': '12:00', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '988', 'restNAME': 'Coffee Corner, кофейня', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'ул. Гоголя, 86', 'restINSTA': 'https://www.instagram.com/led_plamya_kz/', 'restTIME': 'Сегодня c 09:00 до 20:00', 'restTimeOpen': '09:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '990', 'restNAME': 'Золотое руно', 'restPRICE': '3000–5000', 'restKITCH': 'грузинская, европейская', 'restADRES': 'мкр. Аксай 2, 16 А', 'restINSTA': 'https://www.instagram.com/zolotoe_runo_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '992', 'restNAME': 'На даче', 'restPRICE': '2000–5000', 'restKITCH': 'европейская, кавказская', 'restADRES': 'ул. Бузурбаева, 16', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '993', 'restNAME': 'LOVE SMOKE', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'мкр. Самал 2, 55', 'restINSTA': 'https://www.instagram.com/love_smoke_almaty/', 'restTIME': 'Ежедневно с 15:00 до 03:00', 'restTimeOpen': '15:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '995', 'restNAME': 'Лагманхана №1', 'restPRICE': '1000–1500', 'restKITCH': 'европейская, уйгурская, казахская, китайская', 'restADRES': 'пр. Рыскулова, 149', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 02:00', 'restTimeOpen': '09:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '996', 'restNAME': 'ПУШКИН', 'restPRICE': '5000–6000', 'restKITCH': 'русская, европейская, авторская, итальянская', 'restADRES': 'пр. Абая, 17, уг. ул. Валиханова', 'restINSTA': 'https://www.instagram.com/pushkin_cafe/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '997', 'restNAME': 'Geronimo', 'restPRICE': '2500–3000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Жамакаева , 175', 'restINSTA': 'https://www.instagram.com/geronimo_lap/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1000', 'restNAME': 'Салем', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, восточная, китайская', 'restADRES': 'ул. Искендерова, 34', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1001', 'restNAME': 'Роза', 'restPRICE': '3000', 'restKITCH': 'восточно-европейская', 'restADRES': 'пр. Райымбека, 548/2', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1004', 'restNAME': 'Элит', 'restPRICE': '4500–5000', 'restKITCH': 'европейская, кавказская', 'restADRES': 'мкр. 9, 35 Б', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1005', 'restNAME': 'Ким бан', 'restPRICE': '2500–3000', 'restKITCH': 'корейская', 'restADRES': 'ул. Шемякина, 185', 'restINSTA': 'https://www.instagram.com/cafe_inzhir/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1006', 'restNAME': 'Визави', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, восточная, кавказская, казахская', 'restADRES': 'ул. Тауелсиздик, 124 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1007', 'restNAME': 'Чиль Сон - Семь звезд', 'restPRICE': '2000–4000', 'restKITCH': 'восточно-европейская, корейская, восточная', 'restADRES': 'с. Бесагаш, ул. Райымбек батыра 54/2', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1008', 'restNAME': 'Sairam', 'restPRICE': '1500–3000', 'restKITCH': 'восточная', 'restADRES': 'ул. Жандосова, 27 Г', 'restINSTA': 'https://www.instagram.com/sairam_shaikhana/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1011', 'restNAME': 'Сакварели', 'restPRICE': '5000–10000', 'restKITCH': 'грузинская, европейская', 'restADRES': 'ул. Муканова, 210, уг. ул. Жамбыла', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1012', 'restNAME': 'Ti Amo', 'restPRICE': '1500–3000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Кунаева, 50', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1014', 'restNAME': 'Shipudim на Толе би', 'restPRICE': '2000–4000', 'restKITCH': 'восточная, европейская, грузинская', 'restADRES': 'ул. Толе би, 226, уг. ул. Аносова', 'restINSTA': 'https://www.instagram.com/shipudim/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1015', 'restNAME': 'Кино', 'restPRICE': '4000–7000', 'restKITCH': 'европейская, американская', 'restADRES': 'ул. Панфилова, 108', 'restINSTA': 'https://www.instagram.com/cafe_bar_kino/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1017', 'restNAME': 'SHAFRAN на Саяхате', 'restPRICE': '1500–2000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Пушкина, 2/76, уг. пр. Райымбека', 'restINSTA': 'https://www.instagram.com/shafran.kz/', 'restTIME': 'Ежедневно с 10:00 до 22:30', 'restTimeOpen': '10:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1018', 'restNAME': 'Факир', 'restPRICE': '3000', 'restKITCH': 'восточная, европейская, китайская', 'restADRES': 'ул. Калдаякова, 17, уг. пр. Жибек Жолы', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1019', 'restNAME': 'Тет-а-тет', 'restPRICE': '3000–5000', 'restKITCH': 'грузинская, европейская', 'restADRES': 'уг. Геологов, 1 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1022', 'restNAME': 'МансАрда на Шокая', 'restPRICE': '2500–7000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Шокая, 37', 'restINSTA': 'https://www.instagram.com/mansarda.cafe/', 'restTIME': 'Ежедневно с 12:00 до 24:00', 'restTimeOpen': '12:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1023', 'restNAME': 'OSTROV BORNEO', 'restPRICE': '2500–5000', 'restKITCH': 'восточная, европейская, итальянская, грузинская', 'restADRES': 'ул. Сатпаева, 76', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1024', 'restNAME': 'Рубин', 'restPRICE': '2000–5000', 'restKITCH': 'кавказская', 'restADRES': 'пр. Сейфуллина, 130', 'restINSTA': 'https://www.instagram.com/cafe_rubin/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1026', 'restNAME': 'UNO kitchen & bar', 'restPRICE': '1500–2500', 'restKITCH': 'европейская, паназиатская', 'restADRES': 'ул. Рихарда Зорге, 18', 'restINSTA': 'https://www.instagram.com/uno_kitchen_bar/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1027', 'restNAME': 'Bon Appetit на Тимирязева', 'restPRICE': '1000–2000', 'restKITCH': 'азиатская, европейская', 'restADRES': 'ул. Тимирязева, 19', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1028', 'restNAME': 'Bayram', 'restPRICE': '1000–1500', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. \u200bЧувашская, 12 А', 'restINSTA': 'https://www.instagram.com/bayram_lagmanhana/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1031', 'restNAME': 'Pizza In в мкр. Жетысу', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'мкр. Жетысу 4, 9 А', 'restINSTA': 'https://www.instagram.com/pizzain.kz/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1032', 'restNAME': 'Car Pizza and Sushi на Кабанбай батыра', 'restPRICE': '1500–4000', 'restKITCH': 'итальянская, японская', 'restADRES': 'ул. Розыбакиева, 51 А', 'restINSTA': 'https://www.instagram.com/mangakz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1033', 'restNAME': 'YUFRAME BURGER на Панфилова', 'restPRICE': '1500–2500', 'restKITCH': 'американская', 'restADRES': 'ул. Панфилова, 92', 'restINSTA': 'https://www.instagram.com/yuframe_burger/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1038', 'restNAME': 'Белая ночь', 'restPRICE': '900–4000', 'restKITCH': 'восточная, европейская, кавказская', 'restADRES': 'пр. Сейфуллина, 63, уг. ул. Ровенского', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1039', 'restNAME': 'Alani Kebab на Жансугурова', 'restPRICE': '1500–3000', 'restKITCH': 'турецкая, итальянская', 'restADRES': 'ул. Жансугурова, 118/1', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 03:00', 'restTimeOpen': '09:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1040', 'restNAME': 'Пиала', 'restPRICE': '3000–5000', 'restKITCH': 'восточная, европейская', 'restADRES': 'мкр. Жулдыз - 1, 26 Г', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1042', 'restNAME': 'Грузинский двор на Джандосова', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, грузинская, азербайджанская', 'restADRES': 'ул. Джандосова, 27 Б', 'restINSTA': 'https://www.instagram.com/gruzinskiy_dvor/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1043', 'restNAME': 'Kish-Mish', 'restPRICE': '2000–5000', 'restKITCH': 'европейская, японская, корейская', 'restADRES': 'мкр. 10, 2 Д', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:30 до 02:00', 'restTimeOpen': '11:30', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1044', 'restNAME': 'Chitir Chicken Almaty', 'restPRICE': '1000–3000', 'restKITCH': 'американская', 'restADRES': 'мкр. Акбулак, ул. Хан Шатыр, 273', 'restINSTA': 'https://www.instagram.com/magnum.kz/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1045', 'restNAME': 'Lik Beer', 'restPRICE': '5000–8000', 'restKITCH': 'авторская, европейская', 'restADRES': 'ул. Бухар Жырау, 27/5', 'restINSTA': 'https://www.instagram.com/likbeer/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1047', 'restNAME': 'KurdЮk', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Гоголя, 166, уг. ул. Муканова', 'restINSTA': 'https://www.instagram.com/kurdyuk_almaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1049', 'restNAME': 'Fresh Timeв ТРЦ ADK', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'ул. Сатпаева, 90, ТРЦ ADK, 2 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1050', 'restNAME': 'Аннён', 'restPRICE': '2500–4000', 'restKITCH': 'корейская, европейская', 'restADRES': 'ул. Розыбакиева, 1', 'restINSTA': 'https://www.instagram.com/kafe_annen/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1052', 'restNAME': 'Ориент', 'restPRICE': '4000–6000', 'restKITCH': 'турецкая', 'restADRES': 'ул. Маметова, 67 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1053', 'restNAME': 'Manavi', 'restPRICE': '2000–4000', 'restKITCH': 'грузинская, европейская, восточная', 'restADRES': 'ул. Акан Серы 113, уг. ул. Жумабаева', 'restINSTA': 'https://www.instagram.com/manavi_cafe/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1054', 'restNAME': 'Riksos', 'restPRICE': '3000–4500', 'restKITCH': 'восточная, грузинская, европейская', 'restADRES': 'ул. Бекмаханова, 37 А, уг. ул. Харьковская', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1055', 'restNAME': 'Pizza house', 'restPRICE': '1500–2000', 'restKITCH': 'американская, японская, итальянская', 'restADRES': 'ул. Майлина, 84', 'restINSTA': 'https://www.instagram.com/pizza_house_almaty/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1056', 'restNAME': 'Мизам в мкр. Жетысу', 'restPRICE': '1500–3000', 'restKITCH': 'узбекская', 'restADRES': 'мкр. Жетысу 3, 1/3', 'restINSTA': 'https://www.instagram.com/mizam.almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1057', 'restNAME': 'Наяда', 'restPRICE': '3000–5000', 'restKITCH': 'еврейская, восточная', 'restADRES': 'ул. Осипенко, 5 А', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1058', 'restNAME': 'Уч-Кудук', 'restPRICE': '4000–7000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Магистральная, 13', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1061', 'restNAME': 'Dato', 'restPRICE': '3000–5000', 'restKITCH': 'грузинская, европейская, восточная', 'restADRES': 'ул. Кунаева, 64', 'restINSTA': 'https://www.instagram.com/dato_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1062', 'restNAME': 'MARINA SPA', 'restPRICE': '1000–1200', 'restKITCH': 'европейская, казахская', 'restADRES': 'ул. Логовая, 17/1', 'restINSTA': 'https://www.instagram.com/marina_spa_almaty/', 'restTIME': 'Ежедневно с 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1063', 'restNAME': 'Алые паруса в MOSKVA', 'restPRICE': '1500–3000', 'restKITCH': 'японская, паназиатская', 'restADRES': 'мкр. 8, 37/1, ТРЦ Moskva Metropolitan, 2 этаж', 'restINSTA': 'https://www.instagram.com/alyeparusaa/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1065', 'restNAME': 'Meat & beer Redley`s', 'restPRICE': '2250–3000', 'restKITCH': 'европейская', 'restADRES': 'пр. Достык, 47, уг. ул. Кабанбай батыра', 'restINSTA': 'https://www.instagram.com/redleys.almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1067', 'restNAME': 'MARZO', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Рихарда Зорге, 18/1', 'restINSTA': 'https://www.instagram.com/marzo.cafe/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1068', 'restNAME': 'Домашняя кухня', 'restPRICE': '1500–2500', 'restKITCH': 'русская', 'restADRES': 'ул. Куратова, 2', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1069', 'restNAME': 'Хачапури', 'restPRICE': '3000–4500', 'restKITCH': 'грузинская', 'restADRES': 'ул. Розыбакиева, 172', 'restINSTA': 'https://www.instagram.com/kafe_khachapuri/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1071', 'restNAME': 'Mountain House', 'restPRICE': '6000–7000', 'restKITCH': 'европейская, грузинская', 'restADRES': 'ул. Жансугурова, 319', 'restINSTA': '', 'restTIME': 'Сегодня c 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1072', 'restNAME': 'Ён Ван', 'restPRICE': '2000–3000', 'restKITCH': 'корейская, европейская', 'restADRES': 'ул. Брусиловского, 168', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1073', 'restNAME': 'Алые паруса в ADK', 'restPRICE': '1500–3000', 'restKITCH': 'японская, паназиатская', 'restADRES': 'ул. Сатпаева, 90, ТРК ADK, 2 этаж', 'restINSTA': 'https://www.instagram.com/alyeparusaa/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1074', 'restNAME': 'Теплица', 'restPRICE': '5000–10000', 'restKITCH': 'европейская, восточная, итальянская, авторская, грузинская', 'restADRES': 'ул. Курмангазы, 25', 'restINSTA': 'https://www.instagram.com/teplica_almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1075', 'restNAME': 'Koreа Sikdang', 'restPRICE': '3000–5000', 'restKITCH': 'корейская, восточная, европейская', 'restADRES': 'ул. Муканова, 158', 'restINSTA': 'https://www.instagram.com/korea_sikdang/', 'restTIME': 'Ежедневно с 10:00 до 22:30', 'restTimeOpen': '10:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1076', 'restNAME': 'Алые паруса в Dostyk Plaza', 'restPRICE': '1500–3000', 'restKITCH': 'японская, паназиатская', 'restADRES': 'мкр. Самал 2, 111, ТРЦ Dostyk Plaza,\u20093 этаж', 'restINSTA': 'https://www.instagram.com/alyeparusaa/', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1079', 'restNAME': 'Лагманхана на Розыбакиева', 'restPRICE': '1000–1500', 'restKITCH': 'восточная', 'restADRES': 'ул. Розыбакиева, 77/85, уг. ул. Сатпаева', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 21:00', 'restTimeOpen': '09:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1080', 'restNAME': 'БАО на Назарбаева', 'restPRICE': '3000–6000', 'restKITCH': 'паназиатская', 'restADRES': 'пр. Назарбаева, 77, уг. ул. Гоголя', 'restINSTA': 'https://www.instagram.com/baoalmaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1081', 'restNAME': 'Paul в ТРЦ Mega Center Alma-Ata', 'restPRICE': '3500–4000', 'restKITCH': 'французская', 'restADRES': 'ул. \u200bРозыбакиева, 263', 'restINSTA': 'https://www.instagram.com/paul_almaty/', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1083', 'restNAME': 'Сакура в ТЦ «Promenade»', 'restPRICE': '1000–2000', 'restKITCH': 'японская', 'restADRES': 'пр. Абая, 44 А, ТЦ «Promenade»', 'restINSTA': 'https://www.instagram.com/promenade_kz/', 'restTIME': 'Ежедневно с 10:00 до 21:00', 'restTimeOpen': '10:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1084', 'restNAME': 'Boohouse', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, кавказская, восточная', 'restADRES': 'пр. Сейфуллина, 402, уг. ул. Райымбека', 'restINSTA': 'https://www.instagram.com/boohouse_seifullina/', 'restTIME': 'Ежедневно с 13:30 до 04:00', 'restTimeOpen': '13:30', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1085', 'restNAME': 'Fresco cafe', 'restPRICE': '4500–5000', 'restKITCH': 'итальянская, европейская', 'restADRES': 'пр. \u200bАбылай хана, 113', 'restINSTA': 'https://www.instagram.com/fresco_almaty/', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1088', 'restNAME': 'As-Timian', 'restPRICE': '3000–7000', 'restKITCH': 'европейская, авторская', 'restADRES': 'ул. Навои, 208/4', 'restINSTA': 'https://www.instagram.com/as_timian/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1090', 'restNAME': 'Оргилай', 'restPRICE': '3000–5000', 'restKITCH': 'уйгурская, европейская', 'restADRES': 'ул. Шакарима, 12, уг. ул. Гайдара', 'restINSTA': 'https://www.instagram.com/orgilay.almaty/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1091', 'restNAME': 'ДЕЖАВЮ', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, вегетарианская, восточная', 'restADRES': 'ул. Наманганская, 1а', 'restINSTA': '', 'restTIME': 'Сегодня c 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1093', 'restNAME': 'Сара', 'restPRICE': '1000–2000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Тургут Озала, 235/3', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1094', 'restNAME': 'Ак-Булак', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Чуланова, 32', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1096', 'restNAME': 'Пельмень', 'restPRICE': '3000–10000', 'restKITCH': 'русская, казахская, восточно-европейская, итальянская, американская', 'restADRES': 'ул. Аскарова, 8 ЖК Apple Town', 'restINSTA': 'https://www.instagram.com/pelmen_cafe/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1097', 'restNAME': 'River Park', 'restPRICE': '8000–10000', 'restKITCH': 'турецкая', 'restADRES': 'ул. Бухтарминская, 1/7', 'restINSTA': 'https://www.instagram.com/river_park_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1098', 'restNAME': 'Bugs Bunny', 'restPRICE': '2500–5000', 'restKITCH': 'американская, европейская, восточная', 'restADRES': 'мкр. Айнабулак 2,  97', 'restINSTA': 'https://www.instagram.com/cafe_bugs_bunny/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1100', 'restNAME': 'NAURYZ', 'restPRICE': '2000–4000', 'restKITCH': 'европейская, китайская', 'restADRES': 'пр. Райымбека, 542', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1103', 'restNAME': 'Боз Бие', 'restPRICE': '2000–3000', 'restKITCH': 'казахская', 'restADRES': 'ул. Кожабекова, 73', 'restINSTA': 'https://www.instagram.com/boz.bie/', 'restTIME': 'Ежедневно с 07:00 до 23:00', 'restTimeOpen': '07:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1104', 'restNAME': 'Зимний сад', 'restPRICE': '6000–8000', 'restKITCH': 'европейская', 'restADRES': 'ул. Тлендиева, 100, уг. ул. Карасай батыра', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1105', 'restNAME': 'Seoul', 'restPRICE': '3000–4000', 'restKITCH': 'южно-корейская', 'restADRES': 'ул. Сатпаева, 32', 'restINSTA': 'https://www.instagram.com/seoul__almaty/', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1106', 'restNAME': '1465', 'restPRICE': '2000–3000', 'restKITCH': 'китайская, восточная', 'restADRES': 'пр. Гагарина, 135/7', 'restINSTA': 'https://www.instagram.com/1465_cafe_bar/', 'restTIME': 'Ежедневно с 11:00 до 03:00', 'restTimeOpen': '11:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1107', 'restNAME': 'Манас', 'restPRICE': '1000–3000', 'restKITCH': 'казахская, европейская', 'restADRES': 'ул. Манаса, 30 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1108', 'restNAME': 'Казан Мангал', 'restPRICE': '4500–5000', 'restKITCH': 'восточная, казахская, узбекская', 'restADRES': 'ул. Керей и Жанибек хандар, 465', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1109', 'restNAME': 'Сад', 'restPRICE': '4000–6000', 'restKITCH': 'восточная, европейская, грузинская', 'restADRES': '\u200bул. Дунентаева, 1 И', 'restINSTA': 'https://www.instagram.com/kafe_sad_/', 'restTIME': 'Ежедневно с 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1110', 'restNAME': 'Food House', 'restPRICE': '3000–10000', 'restKITCH': 'европейская, восточная, итальянская, казахская', 'restADRES': 'ул. Майлина, 1', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1111', 'restNAME': 'Atameken', 'restPRICE': '3500–5000', 'restKITCH': 'европейская, китайская, казахская', 'restADRES': 'ул. Макатаева, 139', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1113', 'restNAME': 'Excellent PIZZA на Гагарина', 'restPRICE': '2000–4000', 'restKITCH': 'европейская, японская, итальянская', 'restADRES': 'пр. Гагарина 100, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/excellentcafe/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1115', 'restNAME': 'Центр плова и шашлыка', 'restPRICE': '1200–2200', 'restKITCH': 'восточная, узбекская, турецкая', 'restADRES': 'пр. Абылай хана, 24', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1116', 'restNAME': 'Верненский', 'restPRICE': '1500–2000', 'restKITCH': 'восточно-европейская, восточная', 'restADRES': 'ул. Менделеева, 59 А', 'restINSTA': 'https://www.instagram.com/vernensky/', 'restTIME': 'Ежедневно с 09:00 до 01:00', 'restTimeOpen': '09:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1117', 'restNAME': 'Лачин', 'restPRICE': '2000–3000', 'restKITCH': 'восточно-европейская', 'restADRES': 'мкр. Айнабулак 2, 81/3', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1118', 'restNAME': 'Paul в ТЦ "ESENTAI MALL"', 'restPRICE': '4000', 'restKITCH': 'французская', 'restADRES': 'пр. Аль-Фараби, 77/8', 'restINSTA': 'https://www.instagram.com/paul_almaty/', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1120', 'restNAME': 'Rustavelli', 'restPRICE': '2000–3000', 'restKITCH': 'азербайджанская, восточная, грузинская, европейская, итальянская, кавказская, казахская, уйгурская, вегетарианская', 'restADRES': 'ул. Ауэзова, 15/5', 'restINSTA': 'https://www.instagram.com/rustaveli.almaty/', 'restTIME': 'Сегодня c 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1121', 'restNAME': 'Алые паруса в Globus', 'restPRICE': '1500–3000', 'restKITCH': 'японская, паназиатская', 'restADRES': 'пр. Абая, 109 В, ТРЦ Globus, 2 этаж', 'restINSTA': 'https://www.instagram.com/globus_trc/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1122', 'restNAME': 'Хмель', 'restPRICE': '1500–5000', 'restKITCH': 'европейская, восточная', 'restADRES': 'пр. Абылай хана, 25', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 03:00', 'restTimeOpen': '10:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1123', 'restNAME': 'Wine Cafe & Shop', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, авторская', 'restADRES': 'пр. Назарбаева, 128/104, уг. ул. Кабанбай батыра', 'restINSTA': 'https://www.instagram.com/wine_cafe_and_shop/', 'restTIME': 'Сегодня c 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1124', 'restNAME': 'Basilic на Богенбай батыра', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, европейская, азиатская', 'restADRES': 'ул. Желтоксан, 115, уг. ул. Богенбай батыра', 'restINSTA': 'https://www.instagram.com/basilic_kz/', 'restTIME': 'Сегодня c 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1125', 'restNAME': 'DATO на Кирова', 'restPRICE': '4000–6000', 'restKITCH': 'кавказская, европейская', 'restADRES': 'ул. \u200bБогенбай батыра, 74', 'restINSTA': 'https://www.instagram.com/dato_kirova_74/', 'restTIME': 'Ежедневно с 11:00 до 02:00', 'restTimeOpen': '11:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1126', 'restNAME': 'Lanzhou', 'restPRICE': '1000–2000', 'restKITCH': 'китайская', 'restADRES': 'ул. Жибек Жолы, 65 А, уг.ул. Тулебаева', 'restINSTA': 'https://www.instagram.com/lanzhou_kafe/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1127', 'restNAME': 'Астероид Б612, семейное кафе', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, восточная, итальянская, корейская', 'restADRES': 'ул. Кабанбай батыра, 89', 'restINSTA': 'https://www.instagram.com/asteroid_b612_almaty/', 'restTIME': 'Ежедневно с 09:00 до 20:30', 'restTimeOpen': '09:00', 'restTimeClose': '20:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1128', 'restNAME': 'Узбечка №1', 'restPRICE': '1000–3000', 'restKITCH': 'грузинская, узбекская, уйгурская, китайская, казахская', 'restADRES': 'мкр. Мамыр 7, 13 А', 'restINSTA': 'https://www.instagram.com/uzbechka_est_bar/', 'restTIME': 'Ежедневно с 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1129', 'restNAME': 'Manga Sushi по Абылай хана', 'restPRICE': '3000–5000', 'restKITCH': 'японская', 'restADRES': 'пр. Абылай хана, 94, уг. ул. Кабанбай батыра', 'restINSTA': 'https://www.instagram.com/mangakz/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1131', 'restNAME': 'PizzaRio', 'restPRICE': '1500–3000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Московская, 17', 'restINSTA': 'https://www.instagram.com/pizzarioalmaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1133', 'restNAME': 'Айнур', 'restPRICE': '4500–7500', 'restKITCH': 'восточная, европейская', 'restADRES': 'мкр. 4, 12', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1134', 'restNAME': 'Korean Food Story', 'restPRICE': '1700–2000', 'restKITCH': 'корейская', 'restADRES': 'пр. \u200bАль-Фараби, 19 К2, Б', 'restINSTA': 'https://www.instagram.com/koreanfoodstory/', 'restTIME': 'Сегодня c 09:00 до 19:00', 'restTimeOpen': '09:00', 'restTimeClose': '19:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1135', 'restNAME': 'Masisso kz', 'restPRICE': '3500–5000', 'restKITCH': 'европейская, корейская, паназиатская', 'restADRES': 'пр. Сейфуллина, 183 А', 'restINSTA': 'https://www.instagram.com/masisso_express/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1137', 'restNAME': 'Nedelka по Желтоксан', 'restPRICE': '1500–2500', 'restKITCH': 'европейская, итальянская', 'restADRES': 'пр. Желтоксан, 103', 'restINSTA': 'https://www.instagram.com/cafenedelka/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1138', 'restNAME': 'Lagman Project', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, китайская', 'restADRES': 'ул. Жандосова, 15', 'restINSTA': 'https://www.instagram.com/lagman.project/', 'restTIME': 'Сегодня c 11:00 до 21:00', 'restTimeOpen': '11:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1141', 'restNAME': 'Piramida', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, восточно-европейская', 'restADRES': 'Илийский тракт, 18', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1142', 'restNAME': 'Тумар,кафе на Жамбыла', 'restPRICE': '1500–5000', 'restKITCH': 'европейская, китайская, итальянская, восточная', 'restADRES': 'ул. Жамбыла, 198 А', 'restINSTA': 'https://www.instagram.com/tumar_chaihana/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1144', 'restNAME': 'Алматы Түнi', 'restPRICE': '900–2500', 'restKITCH': 'восточная, европейская, казахская, русская, узбекская, уйгурская', 'restADRES': 'ул. Лебедева, 4, уг. ул. Жандосова', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1145', 'restNAME': 'Sumakh', 'restPRICE': '2500–5000', 'restKITCH': 'восточная, кавказская, европейская', 'restADRES': 'ул. Суюнбая, 485', 'restINSTA': 'https://www.instagram.com/cafe_sumakh/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1147', 'restNAME': 'Eldoro на Пушкина', 'restPRICE': '2000–3000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Пушкина, 44, уг. ул. Гоголя', 'restINSTA': 'https://www.instagram.com/almaty_eldoro/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1148', 'restNAME': 'Shipudim на Ауэзова', 'restPRICE': '2000–3000', 'restKITCH': 'восточно-европейская, грузинская', 'restADRES': 'ул. Ауэзова, 56, уг. ул. Жамбыла', 'restINSTA': 'https://www.instagram.com/shipudim/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1149', 'restNAME': 'Малибу', 'restPRICE': '5000–8000', 'restKITCH': 'европейская, кавказская, казахская', 'restADRES': 'мкр. Хан Тенгри, 149 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1150', 'restNAME': 'Cipollino', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'пр. Жибек жолы, 66, 2 этаж, уг. ул. Кунаева', 'restINSTA': 'https://www.instagram.com/cipollino_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1153', 'restNAME': 'Лаффа', 'restPRICE': '2000–4000', 'restKITCH': 'восточная, европейская, узбекская, азиатская, китайская', 'restADRES': 'ул. Акан Серы, 28/1', 'restINSTA': 'https://www.instagram.com/cafe_laffa/', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1154', 'restNAME': 'Тамада', 'restPRICE': '6500–8000', 'restKITCH': 'грузинская, европейская, кавказская, казахская, восточная', 'restADRES': 'пр. Гагарина, 6, уг. ул. Толе би', 'restINSTA': 'https://www.instagram.com/cafe_tamada/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1155', 'restNAME': 'Monroe', 'restPRICE': '5000–10000', 'restKITCH': 'европейская', 'restADRES': 'ул. Толе би, 19, уг. ул. Калдаякова', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1158', 'restNAME': "Zheka's Doner House в мкр. Жетысу", 'restPRICE': '1500–3000', 'restKITCH': 'турецкая, итальянская', 'restADRES': 'мкр. Жетысу, 54/1', 'restINSTA': 'https://www.instagram.com/zhekas_doner_house/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1160', 'restNAME': 'Айсун', 'restPRICE': '1500–3000', 'restKITCH': 'восточно-европейская, китайская, казахская, кавказская', 'restADRES': 'ул. Жангельдина, 150 (уг. ул. Мусоргского)', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1161', 'restNAME': 'Керван Донер', 'restPRICE': '800–1500', 'restKITCH': '', 'restADRES': 'пр. Абая, 47, уг. ул. Абылай хана', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1162', 'restNAME': 'Robusto', 'restPRICE': '3000–5000', 'restKITCH': 'европейская', 'restADRES': 'пр. Аль-Фараби, 17, БЦ «Нурлы Тау», блок 4 Б', 'restINSTA': 'https://www.instagram.com/robustoalmaty/', 'restTIME': 'Ежедневно с 16:00 до 22:00', 'restTimeOpen': '16:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1163', 'restNAME': 'Park Avenue', 'restPRICE': '3500–5000', 'restKITCH': 'восточная, европейская, корейская, японская', 'restADRES': 'ул. Радостовца, 72 А, уг. ул. Джамбула', 'restINSTA': 'https://www.instagram.com/park_avenue.kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1164', 'restNAME': 'Mr.Donerci & Burger', 'restPRICE': '1000–3000', 'restKITCH': 'турецкая', 'restADRES': 'пр. Абая, 105, уг. ул. Ауезова', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1165', 'restNAME': 'Сауле', 'restPRICE': '3000–5000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Дулати, 65', 'restINSTA': 'https://www.instagram.com/cafesaule_almaty/', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1166', 'restNAME': 'Пацацина', 'restPRICE': '1500–2000', 'restKITCH': 'грузинская', 'restADRES': 'пр. Достык, 42', 'restINSTA': 'https://www.instagram.com/patsatsina/', 'restTIME': 'Ежедневно с 11:00 до 21:30', 'restTimeOpen': '11:00', 'restTimeClose': '21:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1167', 'restNAME': 'Суши-Маки', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, японская', 'restADRES': 'мкр. 10, 3 В', 'restINSTA': 'https://www.instagram.com/sushi_maki_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1170', 'restNAME': 'Марс', 'restPRICE': '3000–5000', 'restKITCH': 'восточная, грузинская, европейская', 'restADRES': 'ул. Розыбакиева, 135', 'restINSTA': 'https://www.instagram.com/kafemars/', 'restTIME': 'Ежедневно с 10:00 до 02:00', 'restTimeOpen': '10:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1172', 'restNAME': 'Ходжа', 'restPRICE': '1500–2000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Луганского, 54/4', 'restINSTA': 'https://www.instagram.com/hodzha54/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1174', 'restNAME': 'АкДана', 'restPRICE': '4000–5000', 'restKITCH': 'восточная, европейская, казахская, узбекская', 'restADRES': 'пр. Абылай хана, 81', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 17:00', 'restTimeOpen': '08:00', 'restTimeClose': '17:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1175', 'restNAME': "McDonald's® «Алатау»", 'restPRICE': '1500–2000', 'restKITCH': 'американская', 'restADRES': 'ул. Толе би, 41, уг. ул. Кунаева', 'restINSTA': 'https://www.instagram.com/mcdonalds.kaz/', 'restTIME': 'Ежедневно с 08:00 до 22:45', 'restTimeOpen': '08:00', 'restTimeClose': '22:45', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1176', 'restNAME': 'BAYSAN', 'restPRICE': '2000–5000', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Тургут Озала, 249 А', 'restINSTA': 'https://www.instagram.com/baysankz/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1177', 'restNAME': 'Shipudim в мкр. 4', 'restPRICE': '2000–5000', 'restKITCH': 'восточная, европейская, кавказская, русская, грузинская', 'restADRES': 'мкр. 4, 3 Б, ул. Алтынсарина, уг. ул. Куанышбаева', 'restINSTA': 'https://www.instagram.com/shipudim/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1178', 'restNAME': 'Paradise на Рыскулбекова', 'restPRICE': '1500–3000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Рыскулбекова, 18 А', 'restINSTA': '', 'restTIME': 'Сегодня c 11:00 до 21:00', 'restTimeOpen': '11:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1179', 'restNAME': 'Жайсан', 'restPRICE': '1000–1500', 'restKITCH': 'дунганская', 'restADRES': 'ул. Гоголя, 151, уг. ул. Байтурсынова', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1180', 'restNAME': 'Восточный квартал', 'restPRICE': '3500–5000', 'restKITCH': 'корейская, японская, восточная, европейская', 'restADRES': 'ул. Толе би, 174, уг. ул. Ауэзова', 'restINSTA': 'https://www.instagram.com/vkalmaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1181', 'restNAME': 'Mr. Burger в ТРЦ Mart', 'restPRICE': '1500–3000', 'restKITCH': '', 'restADRES': 'ул. Рихарда Зорге, 18', 'restINSTA': 'https://www.instagram.com/mr.burger.kz/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1182', 'restNAME': 'Zheka\'s Doner House в ТРЦ "Asia Park"', 'restPRICE': '1500–3000', 'restKITCH': 'турецкая, итальянская', 'restADRES': 'пр. Райымбека, 514 А', 'restINSTA': 'https://www.instagram.com/zhekas_doner_house/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1184', 'restNAME': 'Шашлычок на Пастера', 'restPRICE': '2500–3500', 'restKITCH': 'кавказская', 'restADRES': 'ул. Макатаева, 29', 'restINSTA': 'https://www.instagram.com/smilealmaty/', 'restTIME': 'Сегодня c 10:30 до 24:00', 'restTimeOpen': '10:30', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1185', 'restNAME': 'Малина Mix', 'restPRICE': '5000–6000', 'restKITCH': 'европейская, авторская, азиатская, итальянская, паназиатская, японская', 'restADRES': 'ул. Габдуллина, 72, уг. ул. Байзакова', 'restINSTA': 'https://www.instagram.com/cafemalinamix/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1186', 'restNAME': 'Мансарда на Жукова', 'restPRICE': '2000–2500', 'restKITCH': 'восточно-европейская, итальянская, казахская, китайская', 'restADRES': 'ул. Жукова, 145', 'restINSTA': 'https://www.instagram.com/mansarda.gg/', 'restTIME': 'Ежедневно с 10:00 до 22:30', 'restTimeOpen': '10:00', 'restTimeClose': '22:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1188', 'restNAME': 'Tutti Frutti', 'restPRICE': '1200–1700', 'restKITCH': '', 'restADRES': 'ул. Розыбакиева, 263, ТРЦ «Мега»', 'restINSTA': 'https://www.instagram.com/tuttifrutti_kazakhstan/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1190', 'restNAME': 'Burger Station кафе быстрого питания', 'restPRICE': '1500–3000', 'restKITCH': 'американская', 'restADRES': 'мкр. 5, 161 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1191', 'restNAME': 'Тарым на Тургут Озала', 'restPRICE': '2000–4000', 'restKITCH': 'восточная, европейская, кавказская', 'restADRES': 'ул. Тургут Озала, 107, уг. ул. Карасай батыра', 'restINSTA': 'https://www.instagram.com/tarimcafe.kz/', 'restTIME': 'Ежедневно с 09:30 до 22:00', 'restTimeOpen': '09:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1192', 'restNAME': 'Белес', 'restPRICE': '2000–5000', 'restKITCH': 'итальянская', 'restADRES': 'мкр. Айнабулак 2, 71', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1193', 'restNAME': 'Луна', 'restPRICE': '1000–2000', 'restKITCH': 'европейская', 'restADRES': 'ул. Фёдорова, 13', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 01:00', 'restTimeOpen': '11:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1195', 'restNAME': 'Pizza Italiano в ТРЦ «Asia Park»', 'restPRICE': '1500–3000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Райымбека, 514 А, уг. ул. Саина, ТРЦ «Asia Park»', 'restINSTA': 'https://www.instagram.com/pizza_italiano.kz/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1196', 'restNAME': 'Mr. Burger в ТРЦ «Молл Апорт»', 'restPRICE': '1500–3000', 'restKITCH': '', 'restADRES': 'Ташкентский тракт, 17 К', 'restINSTA': 'https://www.instagram.com/mr.burger.kz/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1197', 'restNAME': 'Pizza Italiano в ТРЦ «Mart»', 'restPRICE': '1500–3000', 'restKITCH': 'итальянская', 'restADRES': 'ул. Рихарда Зорге, 18, в здании ТРЦ «Mart»', 'restINSTA': 'https://www.instagram.com/pizza_italiano.kz/', 'restTIME': 'Сегодня c 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1200', 'restNAME': 'Best Burgers Quality в ТЦ «Цум»', 'restPRICE': '1500–3000', 'restKITCH': 'американская', 'restADRES': 'пр. Абылай хана, 62', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 21:00', 'restTimeOpen': '10:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1206', 'restNAME': 'Трактир на Жарокова', 'restPRICE': '4000–5000', 'restKITCH': 'восточно-европейская, казахская, кавказская, грузинская', 'restADRES': 'ул. Жарокова, 259', 'restINSTA': 'https://www.instagram.com/tvoy_traktir_na_zharokova/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1211', 'restNAME': 'Центр плова', 'restPRICE': '3000–5000', 'restKITCH': 'восточно-европейская', 'restADRES': 'пр. Достык, 304', 'restINSTA': 'https://www.instagram.com/center_plova_almaty/', 'restTIME': 'Ежедневно с 12:00 до 23:00', 'restTimeOpen': '12:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1213', 'restNAME': 'Mr. Burger в ТРК Asia Park', 'restPRICE': '1500–2000', 'restKITCH': '', 'restADRES': 'пр. Райымбека, 514 А', 'restINSTA': 'https://www.instagram.com/mr.burger.kz/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1214', 'restNAME': 'Павлин Мавлин', 'restPRICE': '3000', 'restKITCH': 'фьюжн-кухня', 'restADRES': 'ул. \u200bХоджанова, 239/2 \u200b', 'restINSTA': 'https://www.instagram.com/pavlin_mavlin_almaty/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1215', 'restNAME': 'BASTAU', 'restPRICE': '2500–4000', 'restKITCH': 'восточно-европейская', 'restADRES': 'ул. Шагабутдинова, 109 А', 'restINSTA': 'https://www.instagram.com/bastau_almaty/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1216', 'restNAME': 'Нескучный сад', 'restPRICE': '5000–6000', 'restKITCH': 'европейская, корейская, восточная', 'restADRES': 'ул. Ауэзова, 84, уг. ул. Сатпаева', 'restINSTA': 'https://www.instagram.com/ne_sad/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1217', 'restNAME': 'Чингу', 'restPRICE': '3000–6000', 'restKITCH': 'восточная, европейская, корейская', 'restADRES': 'ул. Майбороды, 26', 'restINSTA': 'https://www.instagram.com/chingukafe/', 'restTIME': 'Ежедневно с 11:00 до 23:00', 'restTimeOpen': '11:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1221', 'restNAME': 'Мармарис на Куанышбаева', 'restPRICE': '2000–4000', 'restKITCH': 'турецкая, европейская', 'restADRES': 'ул. Куанышбаева, 49 Б, уг. пр. Алтынсарина', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1223', 'restNAME': 'Benedict', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Гоголя, 87', 'restINSTA': 'https://www.instagram.com/benedict_almaty/', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1225', 'restNAME': 'Batyroff Burger', 'restPRICE': '3500–4000', 'restKITCH': 'американская', 'restADRES': 'ул. Панфилова 113, уг. ул. Гоголя', 'restINSTA': 'https://www.instagram.com/zhekas_doner_house/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1226', 'restNAME': 'Foodzilla', 'restPRICE': '900–1500', 'restKITCH': 'американская, турецкая', 'restADRES': 'ул. Байтурсынова, 17', 'restINSTA': 'https://www.instagram.com/foodzilla.almaty/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1229', 'restNAME': 'Маннам по ул. Гёте', 'restPRICE': '3000–6000', 'restKITCH': 'европейская, корейская', 'restADRES': 'ул. Гёте, 239, уг. ул. Хмельницкого', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:00 до 24:00', 'restTimeOpen': '11:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1233', 'restNAME': 'Korean street food на Тимирязева', 'restPRICE': '1500–2000', 'restKITCH': 'корейская', 'restADRES': 'ул. Тимирязева, 67, уг. ул. Манаса', 'restINSTA': 'https://www.instagram.com/korean_street_food/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1237', 'restNAME': 'Tutto Bene в ТРК Mega Center Alma-Ata 2', 'restPRICE': '400–1000', 'restKITCH': '', 'restADRES': 'ул. Розыбакиева, 263, ТРК Mega Center Alma-Ata 2, 2 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1239', 'restNAME': 'Best Burgers Quality в ТРЦ "Mega"', 'restPRICE': '1500–3000', 'restKITCH': 'американская', 'restADRES': 'ул. Розыбакиева, 247 А', 'restINSTA': 'https://www.instagram.com/mega_center/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1242', 'restNAME': 'LOOK', 'restPRICE': '2000–4000', 'restKITCH': 'восточная', 'restADRES': 'Первомайские пруды', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1243', 'restNAME': 'altyn', 'restPRICE': '1500–2000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Розыбакиева, 166', 'restINSTA': 'https://www.instagram.com/altyn_rozybakieva/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1244', 'restNAME': 'Bahandi burger, сеть кафе быстрого питания', 'restPRICE': '800–1200', 'restKITCH': '', 'restADRES': 'ул. Жансугурова, 258', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1245', 'restNAME': 'Salsabil', 'restPRICE': '2500–4000', 'restKITCH': 'восточно-европейская, казахская, китайская', 'restADRES': 'ул. Розыбакиева, 49', 'restINSTA': 'https://www.instagram.com/salsabil_aspandiyar/', 'restTIME': 'Ежедневно с 09:30 до 22:00', 'restTimeOpen': '09:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1246', 'restNAME': 'Бостан', 'restPRICE': '1000–2000', 'restKITCH': 'восточная, европейская, уйгурская', 'restADRES': 'ул. Бокейханова, 444', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1251', 'restNAME': 'SOLOVEI', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'мкр \u200b2, 49 Б', 'restINSTA': 'https://www.instagram.com/bar_solovey/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1253', 'restNAME': 'Эмиль по Дуйсенова', 'restPRICE': '2500–6000', 'restKITCH': 'восточная, грузинская, европейская, кавказская', 'restADRES': 'ул. Дуйсенова, 33, (бывш. ул. Болотникова), уг. ул. Гайдара', 'restINSTA': 'https://www.instagram.com/kafe_emil/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1255', 'restNAME': 'Гульсарай 5', 'restPRICE': '1000–2500', 'restKITCH': 'европейская, казахская, китайская', 'restADRES': 'пр. \u200bРайымбека, 509/1', 'restINSTA': 'https://www.instagram.com/cafe_gilsarai/', 'restTIME': 'Ежедневно с 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1256', 'restNAME': 'JumpinGoat Coffee', 'restPRICE': '2500–4000', 'restKITCH': 'американская', 'restADRES': 'пр. Абая, 35/37', 'restINSTA': 'https://www.instagram.com/jumpingoat.coffee/', 'restTIME': 'Ежедневно с 09:00 до 21:00', 'restTimeOpen': '09:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1257', 'restNAME': 'FLASK COFFEE & CHICKEN STAR', 'restPRICE': '1000–5000', 'restKITCH': 'южно-корейская', 'restADRES': 'ул. Курмангазы, 54', 'restINSTA': 'https://www.instagram.com/chickenstar_space/', 'restTIME': 'Ежедневно с 11:00 до 22:00', 'restTimeOpen': '11:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1259', 'restNAME': 'Violet', 'restPRICE': '1500–3000', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Шашкина, 5В, уг.ул. Попова', 'restINSTA': 'https://www.instagram.com/violet_autospa_almaty/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1260', 'restNAME': 'Tea & Coffee Garden', 'restPRICE': '1000–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Желтоксан, 132, уг. ул. Карасай батыра', 'restINSTA': 'https://www.instagram.com/teacoffee_garden/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1262', 'restNAME': 'Bon Bon', 'restPRICE': '4000–6000', 'restKITCH': 'европейская', 'restADRES': 'пр. Абылай хана, 123, уг. ул. Джамбула', 'restINSTA': 'https://www.instagram.com/bonbon.almaty/', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1263', 'restNAME': 'COFFEEROOM & TRATTORIA', 'restPRICE': '5000–7000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Назарбаева, 220', 'restINSTA': 'https://www.instagram.com/palladium_family/', 'restTIME': 'Сегодня c 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1264', 'restNAME': 'Хлеб и пирог', 'restPRICE': '500–800', 'restKITCH': '', 'restADRES': 'ул. Навои, 310, уг. ул. Биржанова', 'restINSTA': 'https://www.instagram.com/hleb_pirog.kz/', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1265', 'restNAME': "Gloria Jean's Coffees по пр. Абылай хана", 'restPRICE': '3000–4000', 'restKITCH': 'итальянская', 'restADRES': 'пр. Абылай хана, 113', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1266', 'restNAME': 'New Bisquit', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Шевченко, 18, уг. пр. Достык', 'restINSTA': 'https://www.instagram.com/newbisquit/', 'restTIME': 'Сегодня c 09:00 до 24:00', 'restTimeOpen': '09:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1267', 'restNAME': "Traveler's Coffee на Назарбаева", 'restPRICE': '1500–3000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 244', 'restINSTA': 'https://www.instagram.com/travelers.almaty/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1268', 'restNAME': 'Double Coffee', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'Наурызбай Батыра, 94 уг. ул. Толе Би', 'restINSTA': 'https://www.instagram.com/doublecoffee_almaty/', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1269', 'restNAME': 'Traveler’s Coffee на Розыбакиева', 'restPRICE': '3000–3500', 'restKITCH': 'европейская', 'restADRES': 'ул. Розыбакиева, 247, ЖК «Вавилон»', 'restINSTA': 'https://www.instagram.com/travelers.almaty/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1270', 'restNAME': 'Traveler`s Coffee на Курмангазы', 'restPRICE': '3000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Курмангазы, 43, уг. ул. Панфилова', 'restINSTA': 'https://www.instagram.com/travelers.almaty/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1272', 'restNAME': 'Local Coffee and Pizza', 'restPRICE': '5000–7000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Валиханова, 170, ТЦ, Colibri', 'restINSTA': 'https://www.instagram.com/local.almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1274', 'restNAME': 'Traveler’s Coffee на Манаса', 'restPRICE': '3000–3500', 'restKITCH': 'европейская', 'restADRES': 'пр. Абая, 109/6, «ЖК Легенда»', 'restINSTA': 'https://www.instagram.com/travelers.almaty/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1275', 'restNAME': "Traveler's Coffee по Желтоксан", 'restPRICE': '1500–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Желтоксан, 137, уг. ул. Шевченко', 'restINSTA': 'https://www.instagram.com/travelers.almaty/', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1277', 'restNAME': 'Dolcetto', 'restPRICE': '5000–7500', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Кунаева, 114', 'restINSTA': 'https://www.instagram.com/dolcetto.almaty/', 'restTIME': 'Сегодня c 10:00 до 01:00', 'restTimeOpen': '10:00', 'restTimeClose': '01:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1278', 'restNAME': 'Coffee Inn на Абая', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, японская', 'restADRES': 'ул. Байтурсынова, 81', 'restINSTA': 'https://www.instagram.com/coffee_inn/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1279', 'restNAME': 'Белый Кит', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Ауэзова, 69, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/belyikitalmaty/', 'restTIME': 'Сегодня c 08:15 до 22:00', 'restTimeOpen': '08:15', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1280', 'restNAME': 'Coffeeoke', 'restPRICE': '4000–6000', 'restKITCH': 'европейская, японская', 'restADRES': 'ул. Желтоксан, 148', 'restINSTA': 'https://www.instagram.com/coffeeoke/', 'restTIME': 'Сегодня c 12:00 до 04:00', 'restTimeOpen': '12:00', 'restTimeClose': '04:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1281', 'restNAME': 'Paco coffee & pastry', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'ул. Желтоксан, 75', 'restINSTA': 'https://www.instagram.com/paco_almaty/', 'restTIME': 'Сегодня c 08:30 до 20:00', 'restTimeOpen': '08:30', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1282', 'restNAME': 'Cafeteria', 'restPRICE': '2000–4000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Байсеитовой, 32, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/cafeteria_almaty/', 'restTIME': 'Ежедневно с 09:00 до 23:00', 'restTimeOpen': '09:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1284', 'restNAME': 'Coffeedelia на Кабанбай батыра', 'restPRICE': '3000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Кабанбай батыра, 79, уг. ул. Тулебаева', 'restINSTA': 'https://www.instagram.com/coffeedelia/', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1285', 'restNAME': 'Coffeetime', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, итальянская', 'restADRES': 'ул. Ауезова, 106, уг. ул. Жандосова', 'restINSTA': 'https://www.instagram.com/coffeetime_almaty/', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1286', 'restNAME': 'Дени Coffee', 'restPRICE': '1500–3000', 'restKITCH': 'восточно-европейская', 'restADRES': 'пр. Жибек Жолы, 106', 'restINSTA': 'https://www.instagram.com/irishcoffee_kz/', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1288', 'restNAME': 'Zhan Coffee', 'restPRICE': '500–800', 'restKITCH': 'европейская', 'restADRES': 'ул. Тажибаева, 184', 'restINSTA': 'https://www.instagram.com/zhancoffee/', 'restTIME': 'Сегодня c 08:30 до 18:00', 'restTimeOpen': '08:30', 'restTimeClose': '18:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1289', 'restNAME': 'The Sweet Lab', 'restPRICE': '2500–5000', 'restKITCH': '', 'restADRES': 'ул. Кабанбай батыра, 77', 'restINSTA': 'https://www.instagram.com/the_sweetlab/', 'restTIME': 'Ежедневно с 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1291', 'restNAME': 'Milk & Honey', 'restPRICE': '4000–5000', 'restKITCH': 'европейская', 'restADRES': 'пр. Абая, 109/6', 'restINSTA': 'https://www.instagram.com/milkandhoney_almaty/', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1293', 'restNAME': 'Big Apple coffee shop', 'restPRICE': '3000–5000', 'restKITCH': 'американская, европейская, авторская', 'restADRES': 'пр. Абылай хана, 145, уг. ул. Курмангазы', 'restINSTA': 'https://www.instagram.com/big_apple_coffee/', 'restTIME': 'Ежедневно с 07:30 до 22:00', 'restTimeOpen': '07:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1294', 'restNAME': 'Deni coffee', 'restPRICE': '1100', 'restKITCH': '', 'restADRES': 'ул. Жибек Жолы, 106', 'restINSTA': 'https://www.instagram.com/irishcoffee_kz/', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1295', 'restNAME': 'Coffee Original на Ауэзова', 'restPRICE': '1500–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Ауэзова, 165', 'restINSTA': 'https://www.instagram.com/coffee.original/', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1297', 'restNAME': 'Starbucks в ТРЦ Mega Almaty', 'restPRICE': '3000–5000', 'restKITCH': '', 'restADRES': 'ул. Розыбакиева, 263, ТРЦ Mega Almaty, 1 этаж', 'restINSTA': 'https://www.instagram.com/mega_center/', 'restTIME': 'Сегодня c 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1300', 'restNAME': 'Vanilla', 'restPRICE': '1000–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Кунаева, 130, уг. ул. Жамбыла', 'restINSTA': 'https://www.instagram.com/vanilla_coffeeshop/', 'restTIME': 'Ежедневно с 07:30 до 23:00', 'restTimeOpen': '07:30', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1301', 'restNAME': 'Cipollino', 'restPRICE': '2000–5000', 'restKITCH': 'европейская, итальянская, японская', 'restADRES': 'пр. Жибек жолы, 66', 'restINSTA': 'https://www.instagram.com/cipollino_kz/', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1303', 'restNAME': 'Tutti Frutti', 'restPRICE': '1200–1700', 'restKITCH': '', 'restADRES': 'ул. Розыбакиева, 263', 'restINSTA': 'https://www.instagram.com/tuttifrutti_kazakhstan/', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1304', 'restNAME': 'Dream Island', 'restPRICE': '1000–2000', 'restKITCH': '', 'restADRES': 'мкр. Жетысу 1, ул. Улугбека, уг. ул. Момышулы', 'restINSTA': 'https://www.instagram.com/dreamisland_gymbox/', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1305', 'restNAME': 'Marrone Rosso на Шымбулаке', 'restPRICE': '1500–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Горная, 640 А', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 17:30', 'restTimeOpen': '10:00', 'restTimeClose': '17:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1306', 'restNAME': 'Bona Coffee', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, американская, вегетарианская', 'restADRES': 'пр. Достык, 40, уг. ул. Кабанбай батыра', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1307', 'restNAME': 'Solo Cat Cafe', 'restPRICE': '1500–3000', 'restKITCH': '', 'restADRES': 'ул. Казыбек би, 85', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 21:00', 'restTimeOpen': '10:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1308', 'restNAME': 'Хлеб из тандыра на Назарбаева', 'restPRICE': '500–800', 'restKITCH': '', 'restADRES': 'ул. Фурманова, 165', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1309', 'restNAME': 'Starbucks Coffee на ул. Макатаева', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'ул. Макатаева, 127/1', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1310', 'restNAME': 'Sweet Cheese', 'restPRICE': '2000–5000', 'restKITCH': '', 'restADRES': 'мкр. Мирас, 128', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1313', 'restNAME': 'Marrone Rosso в ТРК Mega Center Alma-Ata 2', 'restPRICE': '2000–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Розыбакиева, 263', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1314', 'restNAME': 'Кандирия', 'restPRICE': '1000–3000', 'restKITCH': '', 'restADRES': 'мкр. Самал 2, ул. Мендикулова, 84', 'restINSTA': '', 'restTIME': 'Ежедневно с 12:00 до 22:00', 'restTimeOpen': '12:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1315', 'restNAME': 'Starbucks Coffee на мкр. Самал 2', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'мкр. Самал 2, 111', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1316', 'restNAME': 'Starbucks Coffee на пр. Абая', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'пр. Абая, 109 В', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1317', 'restNAME': 'Bueno Coffee', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'ул. Кабдолова, 1', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 20:00', 'restTimeOpen': '10:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1318', 'restNAME': 'Coffee Boom', 'restPRICE': '5000–8000', 'restKITCH': 'европейская, итальянская, грузинская, азиатская', 'restADRES': 'мкр. Самал 2, 111', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1320', 'restNAME': 'GAMEOVERCOFFEE', 'restPRICE': '750–800', 'restKITCH': 'европейская', 'restADRES': 'мкр. 8, 37/1', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1321', 'restNAME': 'Costa Coffee МФК VILLA', 'restPRICE': '1500–5000', 'restKITCH': 'американская, европейская', 'restADRES': 'пр. Аль-Фараби, 140, А/3', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1322', 'restNAME': 'Bowler', 'restPRICE': '1500–2500', 'restKITCH': 'голландская', 'restADRES': 'ул. Кабанбай батыра, 65', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1323', 'restNAME': 'Madison', 'restPRICE': '1000–1500', 'restKITCH': 'американская', 'restADRES': 'ул. Шевченко, 90', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1325', 'restNAME': 'Coffee Original в ТЦ Silk Way', 'restPRICE': '700–1500', 'restKITCH': '', 'restADRES': 'ул. Толе би, 71', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1326', 'restNAME': 'Kaffestoria', 'restPRICE': '1000–1500', 'restKITCH': 'европейская', 'restADRES': 'пр. Абая, 52, К 2', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 19:00', 'restTimeOpen': '08:00', 'restTimeClose': '19:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1328', 'restNAME': 'Angel-in-us Coffee на ул. Кабанбай батыра', 'restPRICE': '2000–2500', 'restKITCH': 'европейская', 'restADRES': 'ул. Кабанбай батыра, 85', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1329', 'restNAME': 'Double A Coffee на  Панфилова', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'ул. Панфилова, 84', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1330', 'restNAME': 'Starbucks в ТРЦ Mega Park', 'restPRICE': '3000–5000', 'restKITCH': '', 'restADRES': 'пр. Сейфуллина, 483, уг. ул. Макатаева, 127, ТРЦ Mega Park', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1331', 'restNAME': 'Starbucks Coffee на ул. Кунаева', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'ул. Кунаева, 77, 1 этаж', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1332', 'restNAME': 'Luwak coffee', 'restPRICE': '600–1500', 'restKITCH': '', 'restADRES': 'ул. Байтурсынова, 61', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1334', 'restNAME': 'Double A Coffee на Толе би', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'ул. Толе би, 65', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1335', 'restNAME': 'Coffee Corner', 'restPRICE': '1000–2000', 'restKITCH': 'европейская', 'restADRES': 'пр. Сейфуллина, 500', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 20:00', 'restTimeOpen': '09:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1336', 'restNAME': 'Caffe Pascucci', 'restPRICE': '1500–2000', 'restKITCH': '', 'restADRES': '\u200bул. Жандосова, 6', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1337', 'restNAME': 'Daily coffee', 'restPRICE': '3000–5000', 'restKITCH': 'европейская, японская, паназиатская', 'restADRES': 'пр. Абылай хана, 147', 'restINSTA': '', 'restTIME': 'Сегодня c 08:30 до 23:00', 'restTimeOpen': '08:30', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1338', 'restNAME': 'Sweet`s Kekc', 'restPRICE': '1000–2000', 'restKITCH': 'европейская', 'restADRES': 'ул. Рыскулбекова, 28/6', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1339', 'restNAME': 'Три шефа', 'restPRICE': '1000–2000', 'restKITCH': 'европейская', 'restADRES': 'ул. Маркова, 43', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1340', 'restNAME': 'Coffee Original в ТЦ Car City', 'restPRICE': '700–1500', 'restKITCH': '', 'restADRES': 'мкр. Баянаул, 57 А/1', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 18:00', 'restTimeOpen': '09:00', 'restTimeClose': '18:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1343', 'restNAME': 'Coffee Original в ТЦ «Пассаж»', 'restPRICE': '700–1500', 'restKITCH': '', 'restADRES': 'пр. Жибек Жолы, 70', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 21:00', 'restTimeOpen': '10:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1344', 'restNAME': 'Ristoro coffee club', 'restPRICE': '3000–5000', 'restKITCH': 'итальянская, европейская', 'restADRES': 'ул. \u200bТоле би, 273/5', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1345', 'restNAME': 'Starbucks в БЦ Esentai Tower', 'restPRICE': '3000–5000', 'restKITCH': '', 'restADRES': 'пр. Аль-Фараби, 77/7', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1346', 'restNAME': 'Mocco-Co', 'restPRICE': '2500–4000', 'restKITCH': 'европейская', 'restADRES': 'пр. Жибек Жолы, 66', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1347', 'restNAME': 'STABLE COFFEE', 'restPRICE': '2000–3000', 'restKITCH': 'европейская, японская', 'restADRES': 'ул. Тимирязева, 42\\12', 'restINSTA': '', 'restTIME': 'Сегодня c 12:00 до 02:00', 'restTimeOpen': '12:00', 'restTimeClose': '02:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1348', 'restNAME': 'Aroma', 'restPRICE': '3200–5000', 'restKITCH': 'европейская', 'restADRES': 'пр. Абылай хана, 113, уг. ул. Карасай батыра', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1350', 'restNAME': 'Браунис', 'restPRICE': '2500–3500', 'restKITCH': 'европейская', 'restADRES': 'ул. Рыскулбекова, 19/44', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 21:00', 'restTimeOpen': '10:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1352', 'restNAME': 'Starbucks в ТРЦ Globus', 'restPRICE': '3000–5000', 'restKITCH': '', 'restADRES': 'пр. Абая, 109 В, ТРЦ Globus, 1 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 22:00', 'restTimeOpen': '10:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1353', 'restNAME': 'Seventy Coffee', 'restPRICE': '1500–3000', 'restKITCH': 'европейская', 'restADRES': 'пр. Абая, 115', 'restINSTA': '', 'restTIME': 'Ежедневно с 07:55 до 22:00', 'restTimeOpen': '07:55', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1354', 'restNAME': 'Social Coffee', 'restPRICE': '3500–4000', 'restKITCH': 'итальянская, европейская, паназиатская', 'restADRES': 'ул. Сатпаева, 10', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 03:00', 'restTimeOpen': '09:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1355', 'restNAME': 'Costa Coffee в ТРЦ Mega Alma-Ata', 'restPRICE': '1300–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Розыбакиева, 247 А, ТРЦ Mega Alma-Ata, 2 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 20:00', 'restTimeOpen': '09:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1356', 'restNAME': 'Costa Coffee Аэропорт Алматы', 'restPRICE': '1500–5000', 'restKITCH': 'американская, европейская', 'restADRES': 'ул. Майлина, 2, Аэропорт, 2-ой этаж', 'restINSTA': '', 'restTIME': 'Круглосуточно', 'restTimeOpen': '00:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1357', 'restNAME': 'Coffee Original на Назарбаева', 'restPRICE': '800–2000', 'restKITCH': '', 'restADRES': 'пр. Назарбаева, 107', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1358', 'restNAME': 'Marrone Rosso', 'restPRICE': '2000–3000', 'restKITCH': 'европейская', 'restADRES': 'пр. Назарбаева, 149, уг. ул. Джамбула', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1361', 'restNAME': 'Double A Coffee на Абая', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'пр. Абая, 15', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1362', 'restNAME': 'Starbucks Coffee на ул. Тимирязева', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'ул. Тимирязева, 26, 1 этаж', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 19:00', 'restTimeOpen': '08:00', 'restTimeClose': '19:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1363', 'restNAME': 'CoffeeTOP Espresso bar', 'restPRICE': '1000–2000', 'restKITCH': '', 'restADRES': 'пр. Абая, 27 А', 'restINSTA': '', 'restTIME': 'Сегодня c 07:30 до 21:00', 'restTimeOpen': '07:30', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1364', 'restNAME': 'McCafe', 'restPRICE': '1000–3000', 'restKITCH': '', 'restADRES': 'ул. Толе би, 41', 'restINSTA': '', 'restTIME': 'Ежедневно с 07:00 до 22:00', 'restTimeOpen': '07:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1365', 'restNAME': 'LAKOMKA на Сейфуллина', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, итальянская, японская', 'restADRES': 'пр. Сейфуллина, 129, уг. ул. Дулатова', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1366', 'restNAME': 'UMAMI', 'restPRICE': '1000–1500', 'restKITCH': 'авторская', 'restADRES': 'ул. Байсеитовой, 3, уг. ул. Жамбыла', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 20:00', 'restTimeOpen': '09:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1367', 'restNAME': 'Coffee Owl', 'restPRICE': '3500–5000', 'restKITCH': 'европейская', 'restADRES': 'мкр. Самал 2, 43', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1369', 'restNAME': 'Starbucks Coffee на пр. Абылай хана', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'пр. Абылай хана , 62', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1370', 'restNAME': 'Coffee Original на Райымбека', 'restPRICE': '700–1500', 'restKITCH': '', 'restADRES': 'пр. Райымбека, 516', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1371', 'restNAME': 'Starbucks Coffee на ул. Розыбакиева', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'ул. Розыбакиева, 263', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1372', 'restNAME': 'Coffee Original в ТЦ City Center', 'restPRICE': '800–1500', 'restKITCH': '', 'restADRES': 'ул. Толе би, 136', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1373', 'restNAME': 'YummY Cafe', 'restPRICE': '2000–2500', 'restKITCH': 'европейская', 'restADRES': 'ул. Байзакова, 280, уг. ул. Сатпаева, БЦ Almaty Towers, 1-ый этаж', 'restINSTA': '', 'restTIME': 'Сегодня c 12:00 до 03:00', 'restTimeOpen': '12:00', 'restTimeClose': '03:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1374', 'restNAME': 'Petit chocolate & coffee', 'restPRICE': '1000–5000', 'restKITCH': '', 'restADRES': 'ул. Кабанбай батыра, 89', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1375', 'restNAME': 'Costa Coffee в ТРЦ DOSTYK PLAZA', 'restPRICE': '1500–5000', 'restKITCH': '', 'restADRES': 'мкр Самал 2, 111, ТРЦ Dostyk Plaza, 1-ый этаж', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1376', 'restNAME': 'Coffee Original по Аль-Фараби', 'restPRICE': '700–1500', 'restKITCH': '', 'restADRES': 'пр. Аль-Фараби, 19 Б', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 18:00', 'restTimeOpen': '08:00', 'restTimeClose': '18:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1379', 'restNAME': 'Coffee MAN', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'ул. Акан Серы, 11', 'restINSTA': '', 'restTIME': 'Ежедневно с 07:45 до 21:00', 'restTimeOpen': '07:45', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1380', 'restNAME': 'Хлеб из тандыра на Гоголя', 'restPRICE': '500–800', 'restKITCH': '', 'restADRES': 'ул. Гоголя,  140, уг. ул. Муратбаева', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1381', 'restNAME': 'Coffee Original на Панфилова', 'restPRICE': '1500–2000', 'restKITCH': '', 'restADRES': 'ул. Панфилова, 80', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 23:00', 'restTimeOpen': '10:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1382', 'restNAME': 'Costa Coffee в БЦ «Кен Дала»', 'restPRICE': '1500–5000', 'restKITCH': 'европейская, американская', 'restADRES': 'пр. Достык, 38, БЦ «Кен Дала», 1-ый этаж', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 17:00', 'restTimeOpen': '08:00', 'restTimeClose': '17:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1383', 'restNAME': 'Starbucks Coffee на пр. Аль-Фараби', 'restPRICE': '1500–2500', 'restKITCH': '', 'restADRES': 'пр. Аль-Фараби, 77/7', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1384', 'restNAME': 'Avenue кофе', 'restPRICE': '2000', 'restKITCH': '', 'restADRES': 'ул. Заманбека Батталханова, 7 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1385', 'restNAME': 'La Tartine на Розыбакиева', 'restPRICE': '1500–3000', 'restKITCH': 'французская', 'restADRES': 'ул. Розыбакиева, 263, ТРЦ MEGA Alma-Ata, 2 эт.', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1386', 'restNAME': 'La Tartine на Достык', 'restPRICE': '3500–5000', 'restKITCH': 'французская', 'restADRES': 'мкр. Самал 2, 111, ТРЦ Dostyk Plaza, 1 эт.', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 23:00', 'restTimeOpen': '08:00', 'restTimeClose': '23:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1387', 'restNAME': 'La Tartine на Калинина', 'restPRICE': '1500–3000', 'restKITCH': 'французская', 'restADRES': 'ул. Кабанбай батыра, 89, уг. ул. Желтоксан', 'restINSTA': '', 'restTIME': 'Сегодня c 07:30 до 22:00', 'restTimeOpen': '07:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1388', 'restNAME': 'Coffee Original на Сатпаева', 'restPRICE': '150–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Сатпаева, 5 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1390', 'restNAME': 'Big Apple coffee shop', 'restPRICE': '1500–2000', 'restKITCH': 'европейская', 'restADRES': 'пр. Аль-Фараби, 36', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 19:00', 'restTimeOpen': '08:00', 'restTimeClose': '19:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1391', 'restNAME': 'Coffee Place', 'restPRICE': '750–1500', 'restKITCH': '', 'restADRES': 'ул. Богенбай батыра, 142, БЦ «Кайсар Тауерс», 3 этаж', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 18:00', 'restTimeOpen': '10:00', 'restTimeClose': '18:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1393', 'restNAME': 'Kristi Coffee на Манаса', 'restPRICE': '500–1200', 'restKITCH': '', 'restADRES': 'ул. Манаса, 63', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1394', 'restNAME': 'LAKOMKA по Абылай хана', 'restPRICE': '1500–3000', 'restKITCH': 'европейская, итальянская, японская', 'restADRES': 'пр. Абылай хана, 131', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 21:00', 'restTimeOpen': '08:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1395', 'restNAME': 'Coffee Boom', 'restPRICE': '5000–8000', 'restKITCH': 'европейская, грузинская, итальянская, азиатская', 'restADRES': 'пр. Сейфулина, 617', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1401', 'restNAME': 'Кафе Плюс', 'restPRICE': '1500–2000', 'restKITCH': 'азиатская', 'restADRES': 'ул. Желтоксан, 144', 'restINSTA': '', 'restTIME': 'Ежедневно с 07:00 до 22:00', 'restTimeOpen': '07:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1402', 'restNAME': 'HOLDER coffee', 'restPRICE': '700–1500', 'restKITCH': '', 'restADRES': 'Пр. Абая 21', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1403', 'restNAME': 'Il Gusto', 'restPRICE': '2000–4000', 'restKITCH': 'европейская, итальянская, восточная, американская', 'restADRES': 'ул. Розыбакиева, 247 А, 2 этаж, ТРК Mega Center Alma-Ata', 'restINSTA': '', 'restTIME': 'Ежедневно с 10:00 до 24:00', 'restTimeOpen': '10:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1404', 'restNAME': 'Keremet Coffee на Кунаева', 'restPRICE': '800–1200', 'restKITCH': 'американская', 'restADRES': 'ул. Кунаева, 30', 'restINSTA': '', 'restTIME': 'Сегодня c 10:00 до 20:00', 'restTimeOpen': '10:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1411', 'restNAME': 'Ugolok coffee', 'restPRICE': '1000–2500', 'restKITCH': 'восточная, европейская', 'restADRES': 'ул. Казыбек би, 117', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 20:00', 'restTimeOpen': '08:00', 'restTimeClose': '20:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1412', 'restNAME': 'Coffee Boom', 'restPRICE': '5000–8000', 'restKITCH': 'европейская, итальянская, грузинская, азиатская', 'restADRES': 'пр. Аль-Фараби, 140 А', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1416', 'restNAME': 'Kings Coffee', 'restPRICE': '600–1000', 'restKITCH': '', 'restADRES': 'ул Суюнбая, 2 корпус 8', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 21:00', 'restTimeOpen': '09:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1418', 'restNAME': 'VIP', 'restPRICE': '3000–5000', 'restKITCH': 'европейская', 'restADRES': 'ул. Масанчи, 23', 'restINSTA': '', 'restTIME': 'Ежедневно с 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1420', 'restNAME': 'Starbucks Coffee на пр. Достык', 'restPRICE': '2100–5000', 'restKITCH': '', 'restADRES': 'пр. Достык, 104/1', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 22:00', 'restTimeOpen': '08:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1421', 'restNAME': "Gloria Jean's Coffees в ТЦ « Рамстор»", 'restPRICE': '2900–5000', 'restKITCH': '', 'restADRES': 'ул. Фурманова, 226, ТЦ «Рамстор», 1 этаж', 'restINSTA': '', 'restTIME': 'Ежедневно с 09:00 до 21:00', 'restTimeOpen': '09:00', 'restTimeClose': '21:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1423', 'restNAME': 'Old School Coffee', 'restPRICE': '2000–4000', 'restKITCH': '', 'restADRES': 'ул. Тимирязева, 15Б', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 19:30', 'restTimeOpen': '08:00', 'restTimeClose': '19:30', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1426', 'restNAME': 'Green Fox Coffee Bar', 'restPRICE': '2500–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Жарокова, 230', 'restINSTA': '', 'restTIME': 'Сегодня c 09:00 до 22:00', 'restTimeOpen': '09:00', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1427', 'restNAME': 'TEADOT', 'restPRICE': '1000–1500', 'restKITCH': '', 'restADRES': 'пр. Абылай хана, 122', 'restINSTA': '', 'restTIME': 'Ежедневно с 11:30 до 22:00', 'restTimeOpen': '11:30', 'restTimeClose': '22:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1430', 'restNAME': 'UNIQUE COFFEE', 'restPRICE': '2000–3000', 'restKITCH': 'европейская', 'restADRES': 'ул. Тимирязева, 46', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 24:00', 'restTimeOpen': '08:00', 'restTimeClose': '24:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
{'id': '1434', 'restNAME': 'Keremet Coffee на Толе би', 'restPRICE': '800–1200', 'restKITCH': 'европейская, восточная', 'restADRES': 'ул. Толе би, 286/4', 'restINSTA': '', 'restTIME': 'Сегодня c 08:00 до 19:00', 'restTimeOpen': '08:00', 'restTimeClose': '19:00', 'rest2GIS': '#', 'restIMG': 'damdiLOGO'},
]

//ссылка на логотип дамди https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png

let allRESTARANS_backup = allRESTARANS;


//Функция распределения по районам
let SectorAUE = [];
let SectorALM = [];
let SectorBOS = [];
let SectorTUR = [];
let SectorJET = [];
let SectorMED = [];
let SectorNAU = [];
let SectorALA = [];
let SectorILI = [];

let restID = 0;

allRESTARANS_allTIME = allRESTARANS;

function createSectorAUE(){
    let allRESTARANS_length = allRESTARANS_allTIME.length;

    console.log(allRESTARANS_allTIME)
    while(restID<allRESTARANS_length){
        let restNOW = allRESTARANS_allTIME[restID];
        //console.log(restNOW)
        if (restNOW.restSector == "Ауэзовский"){
            //console.log(restNOW)
            SectorAUE.push(restNOW)
            //console.log(SectorAUE)
        }
        else if (restNOW.restSector == "Алмалинский"){
            SectorALM.push(restNOW)
            //console.log(SectorALM)
        }
        else if (restNOW.restSector == "Бостандыкский"){
            SectorBOS.push(restNOW)
            //console.log(SectorALM)
        }
        else if (restNOW.restSector == "Турксибский"){
            SectorTUR.push(restNOW)
            //console.log(SectorALM)
        }
        else if (restNOW.restSector == "Жетысуский"){
            SectorJET.push(restNOW)
            //console.log(SectorALM)
        }
        else if (restNOW.restSector == "Медеуский"){
            SectorMED.push(restNOW)
            //console.log(SectorALM)
        }
        else if (restNOW.restSector == "Наурызбайский"){
            SectorNAU.push(restNOW)
            //console.log(SectorNAU)
        }
        else if (restNOW.restSector == "Алатауский"){
            SectorALA.push(restNOW)
            //console.log(SectorALM)
        }
        else if (restNOW.restSector == "Илийский"){
            SectorILI.push(restNOW)
            //console.log(SectorALM)
        }


        restID += 1;
    }
}


//Вызов функции распределения
createSectorAUE();

let SectorValue = "all";

function changeSector(){
    let form = document.forms.SectorForm;

    SectorValue = form.sector_s.value;

    console.log(SectorValue)
    
    showNextREST()
    
    //фукнция прокрутки наверх при смене района
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
}

//Проверяем клик по чекбокс

//let OpenValue = "openOff";
//console.log(OpenValue)

function check_OpenValue(){
    
    if(OpenValue == "openOff"){
        console.log(OpenValue)
        showNextREST()

        let OpenValue = "openOn";
    }
    else if (OpenValue == "openOn"){
        console.log(OpenValue)

        showNextREST()
        let OpenValue = "openOff";
    }
}

//запуск по кнопке в зависимости от выбранного района

function showNextREST(){
    console.log(SectorValue)
    if (SectorValue == "all"){
        showNextREST_allSectors()
    }
    else if (SectorValue == "AUE"){
        showNextREST_SectorAUE()
    }
    else if (SectorValue == "ALM"){
        showNextREST_SectorALM()
    }
    else if (SectorValue == "BOS"){
        showNextREST_SectorBOS()
    }
    else if (SectorValue == "TUR"){
        showNextREST_SectorTUR()
    }
    else if (SectorValue == "JET"){
        showNextREST_SectorJET()
    }
    else if (SectorValue == "MED"){
        showNextREST_SectorMED()
    }
    else if (SectorValue == "NAU"){
        showNextREST_SectorNAU()
    }
    else if (SectorValue == "ALA"){
        showNextREST_SectorALA()
    }
    else if (SectorValue == "ILI"){
        showNextREST_SectorILI()
    }
}


let last_all_rest = [];

console.log('allRESTARANS connected')

//функция случайного результата
function getRandomElement(arr_rgd) {
    let randIndex_rgd = Math.floor(Math.random() * arr_rgd.length);
    return arr_rgd[randIndex_rgd];
}

//Первое отображение

function first_rest(){
    let randomELEMENT = getRandomElement(allRESTARANS);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)

    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    //console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    //console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    //console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    //console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    //console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    //console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    //console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    //console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';
    
    let all_cafe_length = document.getElementById('all_cafe_lengh');
    let allRESTARANS_length = allRESTARANS.length;
    //console.log(allRESTARANS_length)
    all_cafe_length.textContent = "Всего заведений в базе: " + allRESTARANS_length;
}

window.onload = first_rest;



//Запуск по кнопке
//Все кафе

function showNextREST_allSectors(){
    let randomELEMENT = getRandomElement(allRESTARANS);
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['rest2GIS'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorAUE

function showNextREST_SectorAUE(){
    let randomELEMENT = getRandomElement(SectorAUE);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorALM

function showNextREST_SectorALM(){
    let randomELEMENT = getRandomElement(SectorALM);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorBOS

function showNextREST_SectorBOS(){
    let randomELEMENT = getRandomElement(SectorBOS);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorTUR

function showNextREST_SectorTUR(){
    let randomELEMENT = getRandomElement(SectorTUR);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorJET

function showNextREST_SectorJET(){
    let randomELEMENT = getRandomElement(SectorJET);

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorMED

function showNextREST_SectorMED(){
    let randomELEMENT = getRandomElement(SectorMED);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorNAU

function showNextREST_SectorNAU(){
    let randomELEMENT = getRandomElement(SectorNAU);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorALA

function showNextREST_SectorALA(){
    let randomELEMENT = getRandomElement(SectorALA);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};

//SectorILI

function showNextREST_SectorILI(){
    let randomELEMENT = getRandomElement(SectorILI);

    let new_rest_sector = randomELEMENT['restSector'];
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT['restNAME'];
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT['restPRICE'];
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT['restKITCH'];
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT['restTIME'];
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT['restADRES'];
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;
    

    /*let all_text_info = document.getElementById('all_text_info');
    let new_rest_price = randomELEMENT.restPRICE;
    let new_rest_kitch = randomELEMENT.restKITCH;
    let new_rest_time = randomELEMENT.restTIME;
    let new_rest_adress = randomELEMENT.restADRES;
    let new_all_text_info = new_rest_price + "\n\n" + new_rest_kitch + "\n\n" + new_rest_time + "\n\n" + 'Адрес: ' + new_rest_adress;
    all_text_info.textContent = new_all_text_info;*/

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT['restINSTA'];
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT['rest2GIS'];
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT['restIMG'];
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = 'url(' + new_rest_img + ')';

    let last_rest_title = rest_title.textContent;
    let last_rest_img = rest_img.style.backgroundImage;
    /*let last_all_text_info = all_text_info.textContent;*/
    let last_rest_price = rest_price.textContent;
    let last_rest_kitch = rest_kitch.textContent;
    let last_rest_time = rest_time.textContent;
    let last_rest_adress = rest_adress.textContent;
    let last_button_INSTA_link = button_INSTA_link.href;
    let last_button_2GIS_link = button_2GIS_link.href;
    let last_rest = {restNAME: last_rest_title, restIMG: last_rest_img, restINSTA: last_button_INSTA_link, rest2GIS: last_button_2GIS_link, restPRICE: last_rest_price, restKITCH: last_rest_kitch, restTIME: last_rest_time, restADRES: last_rest_adress};
    last_all_rest.push(last_rest)

    console.log(last_all_rest)
};





//Кнопка назад

function BackButton(){

    let last_rest_id = last_all_rest.length;
    console.log(last_rest_id)
    
    let last_rest = last_all_rest[last_rest_id - 2];
    console.log(last_rest)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = last_rest.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    /*
    let all_text_info = document.getElementById('all_text_info');
    let new_all_text_info = last_rest.restTextInfo;
    console.log(new_all_text_info)
    all_text_info.textContent = new_all_text_info;
    */

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = last_rest.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = last_rest.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = last_rest.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = last_rest.restADRES;
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = last_rest.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;
    
    //let rest_img_link = document.querySelector('.rest_img_link');
    //rest_img_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = last_rest.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = last_rest.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = new_rest_img;
    
    let popup_img = document.getElementById('popup_img');
    popup_img.style.backgroundImage = new_rest_img;

    last_all_rest.pop();
};


//показ времени
function showTime(){
    
/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time(){
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());
        var testTIME = 3;

        return hours
    }

    /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
    document.getElementById('timeNow').innerHTML = date_time();
};

setInterval(function () {
    showTime();
    showOpenClose();
}, 1000)


//Функция собирает список открытых

let timeID = 0; //считает айди кафе из общего списка
let openedRest = []; //собирается список открытых кафе

function showOpenClose(){ //запускает сбор открытых кафе

    /*let current_date_time_block = document.getElementById('timeNow');
    let timeNow = current_date_time_block.textContent;
    console.log(timeNow)*/
    
    let allRESTARANS_length = allRESTARANS.length; //переменная количества кафе в общем списке

    while(timeID<allRESTARANS_length){ //пока не перечисленны все кафе из списка продолжай

        let restNOW = allRESTARANS[timeID]; //выбираем кафе из общего списка по текущему id 
        let restNowTimeOpen = Number(restNOW.restTimeOpen.substr(0,2)); //отрываем от времени открытия минуты
        //console.log(restNOW.restNAME)
        //console.log(restNowTimeOpen)

        let restNowTimeClose = Number(restNOW.restTimeClose.substr(0,2)); //отрываем от времени закрытия минуты
        //console.log(restNowTimeClose)

        let current_date_time_block = document.getElementById('timeNow'); //стучимся в текущее время
        let timeNow = Number(current_date_time_block.textContent); //переменная равна текущему времени
        //console.log(timeNow)

        //console.log(timeNow >= restNowTimeOpen) //время сейчас больше или равно времени открытия
        //console.log(restNowTimeClose >= timeNow) //время сейчас меньше времени закрытия - почему False?

        if (timeNow >= restNowTimeOpen && timeNow < restNowTimeClose){ 

            //console.log(restNowTimeOpen + " time open in IF")
            //console.log(restNowTimeClose + " time close in IF")
            //console.log(timeNow + " time now in IF")
        //если время открытия меньше или равно времени сейчас и время закрытия больше или равно времени сейчас 

            openedRest.push(restNOW)
            //console.log(restNOW.restNAME + ' добавлен в список')
        }
        timeID += 1;
        //console.log(openedRest)
    }
}


//Переключатель списков - вкл - открытые, выкл - все
function changeOpen(){
    let openText = document.getElementById('openText');
    openTextContent = openText.textContent;
    //console.log(openTextContent)

    if(openTextContent == "Показать открытые"){
        let openText = document.getElementById('openText');
        //console.log('Показываются только открытые')

        openText.textContent = "Показать все";
        
        allRESTARANS_allTIME = openedRest;
        //console.log(allRESTARANS_allTIME)
        //console.log("показаны только открытые рестораны")

        restID = 0;

        createSectorAUE(restID = 0); 

        showNextREST(allRESTARANS = allRESTARANS_allTIME);
    
        //фукнция прокрутки наверх при смене района
        window.scroll({
        top: 0,
        behavior: 'smooth'
        });
    }
    else {
        let openText = document.getElementById('openText');
        //console.log("Показываются все")

        openText.textContent = "Показать открытые";

        allRESTARANS_allTIME = allRESTARANS_backup;

        //console.log(allRESTARANS_allTIME)
        //console.log(" показаны все ресторана")

        restID = 0;

        createSectorAUE(restID = 0); 

        showNextREST(allRESTARANS = allRESTARANS_allTIME);
    
        //фукнция прокрутки наверх при смене района
        window.scroll({
        top: 0,
        behavior: 'smooth'
        });
    }
}



function popupClose() {
    let popup_box = document.getElementById('popup_box');

    popup_box.style.zIndex = 0;
    popup_box.style.opacity = 0;
}

function popupShow(){
    let popup_box = document.getElementById('popup_box');

    popup_box.style.zIndex = 100;
    popup_box.style.opacity = 1;
}