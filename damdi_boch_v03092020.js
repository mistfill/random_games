console.log('Start')

let allRESTARANS = [{id: 1, restNAME: "Gold", restIMG: "https://thumb.tildacdn.com/tild3032-3861-4935-a332-383566353361/-/format/webp/gold.jpg", restPRICE: "Средний чек: 1500-3500тг", restKITCH: "Кухни: паназиатская, американская, европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 02:00", restTimeOpen: "11:00", restTimeClose: "02:00", restADRES: "Мкр. Жетысу 2 дом 11", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/cafegold_kz/", rest2GIS: "https://go.2gis.com/qo6gme"},
{id: 2, restNAME: "BubbleGum", restIMG: "https://thumb.tildacdn.com/tild3338-6461-4335-b665-316133333730/-/format/webp/BubbleGum.jpg", restPRICE: "Средний чек: 4000–7000тг", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ПерекуCity Mixx 3 этаж, ул. Шевченко, 99", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/bubblegum_cafe/", rest2GIS: "https://go.2gis.com/t8fxh"},
{id: 3, restNAME: "Чачапури", restIMG: "https://thumb.tildacdn.com/tild3633-3234-4532-b166-303337363730/-/format/webp/photo.jpeg", restPRICE: "Средний чек: 3500–5000тг", restKITCH: "Кухни: европейская, грузинская, восточная, кавказская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "Богенбай батыра уг. ул.Кастеева", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/chachapuri_almaty/", rest2GIS: "https://go.2gis.com/dp13r"},
{id: 4, restNAME: "BAYSAN", restIMG: "https://static.tildacdn.com/tild6330-3534-4631-a439-396434336138/photo_2020-08-20_142.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 09:00-23:00", restTimeOpen: "09:00", restTimeClose: "23:00", restADRES: "ул. Тургут Озала, 249 А", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/baysankz/", rest2GIS: "https://go.2gis.com/bvbypc"},
{id: 5, restNAME: "Малибу", restIMG: "https://static.tildacdn.com/tild6236-6432-4934-b932-366330313735/photo_2020-08-20_142.jpeg", restPRICE: "Средний чек: 5000–8000 тенге", restKITCH: "Кухни: европейская, кавказская, казахская", restTIME: "Время работы: 12:00-22:00", restTimeOpen: "12:00", restTimeClose: "22:00", restADRES: "мкр. Хан Тенгри, 149 А", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/kafe__malibu/", rest2GIS: "https://go.2gis.com/hgxij"},
{id: 6, restNAME: "Хомяк", restIMG: "https://static.tildacdn.com/tild3662-3830-4534-a533-373438663531/photo_2020-08-20_143.jpeg", restPRICE: "Средний чек: 3000–7000 тенге", restKITCH: "Кухни: европейская, итальянская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "бульвар Бухар Жырау, 27/5", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/cafehoma.almaty/", rest2GIS: "https://go.2gis.com/cd0wn"},
{id: 7, restNAME: "Мариям", restIMG: "https://static.tildacdn.com/tild3766-3561-4637-a163-613633356261/BKWGOWMYiJE.jpg", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: восточная, европейская, казахская", restTIME: "Уточняйте время работы по телефону: +7(707)350-50-31", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "ул. Ауэзова, 3 Г", restSector:"Алмалинский", restINSTA: "https://vk.com/kafe_bar_mariyam", rest2GIS: "https://go.2gis.com/vkmk5"},
{id: 8, restNAME: "Форт Верный", restIMG: "https://static.tildacdn.com/tild3662-3737-4464-b035-336266353938/__2020-08-20__144539.png", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Восточная, европейская, русская, японская, китайская, казахская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Толе би, 179 А / 22", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/fort_vernyi/", rest2GIS: "https://go.2gis.com/b8y472"},
{id: 9, restNAME: "ZAFFERANO", restIMG: "https://static.tildacdn.com/tild6336-3736-4365-a162-333737373130/photo_2020-08-20_145.jpeg", restPRICE: "Средний чек: 3000–6000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская", restTIME: "Время работы: 10:00 до 02:00", restTimeOpen: "10:00", restTimeClose: "02:00", restADRES: "ул. Ислама Каримова 2, (бывш. Гайдара)", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/zafferano2019/", rest2GIS: "https://go.2gis.com/yzdz0"},
{id: 10, restNAME: "Veranda", restIMG: "https://static.tildacdn.com/tild6234-3034-4232-a535-333635303466/__2020-08-20__145707.png", restPRICE: "Средний чек: 3000–6000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская, казахская", restTIME: "Время работы: 10:00 до 02:00", restTimeOpen: "10:00", restTimeClose: "02:00", restADRES: "ул. Акан серi, 75", restSector:"Турксибский", restINSTA: "https://www.instagram.com/simfonia__holl/", rest2GIS: "https://go.2gis.com/6no0b"},
{id: 11, restNAME: "Qarlygash", restIMG: "https://static.tildacdn.com/tild3362-3535-4739-a239-333037366135/photo_2020-08-20_150.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, казахская", restTIME: "Время работы: 12:00 до 22:00", restTimeOpen: "12:00", restTimeClose: "22:00", restADRES: "пр. Назарбаева, 145", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/qarlygash_cafe/", rest2GIS: "https://go.2gis.com/jhesm"},
{id: 12, restNAME: "China", restIMG: "https://static.tildacdn.com/tild3062-6632-4535-b930-393835653335/photo_2020-08-20_150.jpeg", restPRICE: "Средний чек: 3000–7000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 11:00 до 22:00", restTimeOpen: "11:00", restTimeClose: "22:00", restADRES: "пр. Абая, 89", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/chinacafe_kz/", rest2GIS: "https://go.2gis.com/59ehd"},
{id: 13, restNAME: "Gardizi", restIMG: "https://static.tildacdn.com/tild3830-3334-4934-b063-333461326338/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, грузинская", restTIME: "Время работы: 12:00 до 01:00", restTimeOpen: "12:00", restTimeClose: "01:00", restADRES: "мкр. Кокжиек, 53/1", restSector:"Жетысуский", restINSTA: "https://www.instagram.com/gardizi.kz/", rest2GIS: "https://go.2gis.com/fk3om"},
{id: 14, restNAME: "Ходжа", restIMG: "https://static.tildacdn.com/tild3038-3935-4233-b635-336166333134/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restADRES: "ул. Луганского, 54/4", restSector:"Медеуский", restINSTA: "https://www.instagram.com/hodzha54/", rest2GIS: "https://go.2gis.com/igenh"},
{id: 15, restNAME: "Думан", restIMG: "https://static.tildacdn.com/tild6238-6432-4839-b236-353433643232/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы уточняйте по телефону +7(727)238-46-79", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "мкр. Жетысу 2, 9 А", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/restaurantduman/", rest2GIS: "https://go.2gis.com/az4w3"},
{id: 16, restNAME: "Улы Тау", restIMG: "https://static.tildacdn.com/tild6135-3531-4666-b761-616339326135/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 4000–10000 тенге", restKITCH: "Кухни: восточная, европейская, кавказская, казахская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Дулати, 15", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/uly_tau_restaurant/", rest2GIS: "https://go.2gis.com/ld6tvr"},
{id: 17, restNAME: "Огни Алатау", restIMG: "https://static.tildacdn.com/tild3331-3831-4965-a662-613838613962/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, казахская, корейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "мкр. Калкаман 2, ул. Ашимова 239", restSector:"Наурызбайский", restINSTA: "https://www.instagram.com/restoran_ogni_alatau/", rest2GIS: "https://go.2gis.com/k92la"},
{id: 18, restNAME: "Марс", restIMG: "https://static.tildacdn.com/tild6136-6262-4237-b132-643163663462/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: восточная, грузинская, европейская", restTIME: "Время работы: 10:00 до 02:00", restTimeOpen: "10:00", restTimeClose: "02:00", restADRES: "ул. Розыбакиева, 135", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/kafemars/", rest2GIS: "https://go.2gis.com/p3a8s4"},
{id: 19, restNAME: "АкДана", restIMG: "https://static.tildacdn.com/tild3039-3463-4231-a239-396231306330/photo_2020-08-20_153.jpeg", restPRICE: "Средний чек: 4000–5000 тенге", restKITCH: "Кухни: восточная, европейская, казахская, узбекская", restTIME: "Время работы: 08:00 до 21:00", restADRES: "пр. Абылай хана 81", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/akdana.cafe/", rest2GIS: "https://go.2gis.com/rnfvy"},
{id: 20, restNAME: "ПЯТНИЦА", restIMG: "https://static.tildacdn.com/tild3531-3431-4639-b265-306338646430/photo_2020-08-20_153.jpeg", restPRICE: "Средний чек: 6000–8000 тенге", restKITCH: "Кухни: грузинская, европейская, итальянская, японская", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restADRES: "пр. Гагарина, 92", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/pyatnicacafe.kz/", rest2GIS: "https://go.2gis.com/9virdc"},
{id: 21, restNAME: "Orient Park Atakent", restIMG: "https://static.tildacdn.com/tild6630-3336-4565-a538-613137663932/photo_2020-08-21_144.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная, китайская, европейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Тимирязева, 42, к 5", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/orient_park_atakent/", rest2GIS: "https://go.2gis.com/ra5qi"},
{id: 22, restNAME: "Темир Тау", restIMG: "https://static.tildacdn.com/tild6630-3336-4565-a538-613137663932/photo_2020-08-21_144.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: восточная, европейская, казахская", restTIME: "Время работы уточняйте по телефону +7(707)878-68-52", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "пр. Гагарина, 236 Б", restSector:"Бостандыкский", restINSTA: "", rest2GIS: "https://go.2gis.com/xs0ft"},
{id: 23, restNAME: "Grand Osteria", restIMG: "https://static.tildacdn.com/tild3663-3138-4363-a636-636631393263/photo_2020-08-21_152.jpeg", restPRICE: " ", restKITCH: "Кухни: европейская", restTIME: "Время работы уточняйте по телефону +7(775)972-22-39", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "мкр. Аксай 4, 18 А", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/grand.osteria.karaoke/", rest2GIS: "https://go.2gis.com/sxnju"},
{id: 24, restNAME: "Resident City Hotel", restIMG: "https://static.tildacdn.com/tild3665-3734-4364-a638-653535393333/photo_2020-08-21_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: восточная, казахская", restTIME: "Время работы уточняйте по телефону +7(727)339-22-99", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "ул. Желтоксан, 23", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/resident_city_hotel/", rest2GIS: "https://go.2gis.com/ibj1h"},
{id: 25, restNAME: "Night Star", restIMG: "https://static.tildacdn.com/tild3037-6533-4461-a362-636563616266/photo_2020-08-21_154.jpeg", restPRICE: "Средний чек: 4000–6000 тенге", restKITCH: "Кухни: кавказская, грузинская, европейская, казахская", restTIME: "Время работы: 10:30 до 23:00", restTimeOpen: "10:30", restTimeClose: "23:00", restADRES: "ул. Шагабутдинова, 129", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/nightstar_cafe/", rest2GIS: "https://go.2gis.com/dqz0f"},
{id: 26, restNAME: "Малина Mix", restIMG: "https://static.tildacdn.com/tild3962-3337-4337-b336-653365666238/photo_2020-08-21_154.jpeg", restPRICE: "Средний чек: 5000–6000 тенге", restKITCH: "Европейская, азиатская, итальянская, паназиатская, японская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Габдуллина, 72", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/cafemalinamix/", rest2GIS: "https://go.2gis.com/croc6"},
{id: 27, restNAME: "ПУШКИН", restIMG: "https://static.tildacdn.com/tild6230-6363-4664-b965-323131653466/photo_2020-08-21_155.jpeg", restPRICE: "Средний чек: 5000–6000 тенге", restKITCH: "Кухни: русская, европейская, авторская, итальянская", restTIME: "Время работы: 11:00 до 22:00", restTimeOpen: "11:00", restTimeClose: "22:00", restADRES: "пр. Абая, 17", restSector:"Медеуский", restINSTA: "https://www.instagram.com/pushkin_cafe/", rest2GIS: "https://go.2gis.com/v2s1i"},
{id: 28, restNAME: "Алатау по Байзакова", restIMG: "https://static.tildacdn.com/tild3331-3565-4537-b634-306462626234/photo_2020-08-21_155.jpeg", restPRICE: "Средний чек: 6000–10000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Байзакова", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/alatau_ajk/", rest2GIS: "https://go.2gis.com/6ccl4"},
{id: 29, restNAME: "Тамада", restIMG: "https://static.tildacdn.com/tild6432-6463-4031-b931-613162376263/photo_2020-08-21_162.jpeg", restPRICE: "Средний чек: 6500–8000 тенге", restKITCH: "Кухни: грузинская, европейская, кавказская, казахская, восточная", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restADRES: "пр. Гагарина, 6", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/cafe_tamada/", rest2GIS: "https://go.2gis.com/uufcw"},
{id: 30, restNAME: "Лето", restIMG: "https://static.tildacdn.com/tild6463-6564-4261-b332-336464613065/photo_2020-08-21_162.jpeg", restPRICE: "Средний чек: 4000–6000 тенге", restKITCH: "Кухни: европейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "5 мкр, 21 Г", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/letovalmaty/", rest2GIS: "https://go.2gis.com/p8zz3"},
{id: 41, restNAME: "Gold", restIMG: "https://thumb.tildacdn.com/tild3032-3861-4935-a332-383566353361/-/format/webp/gold.jpg", restPRICE: "Средний чек: 1500-3500 тенге", restKITCH: "Кухни: паназиатская, американская, европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 02:00", restTimeOpen: "11:00", restTimeClose: "02:00", restADRES: "Мкр. Жетысу 2 дом 11", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/cafegold_kz/", rest2GIS: "https://go.2gis.com/qo6gme"},
{id: 42, restNAME: "Чиль сон", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, корейская", restTIME: "Время работы: 11:00 до 00:00", restTimeOpen: "11:00", restTimeClose: "00:00", restADRES: "ул. Болтирик-шешен, 7", restSector:"Жетысуский", restINSTA: "", rest2GIS: "https://go.2gis.com/u5rlkj"},
{id: 43, restNAME: "Тумар", restIMG: "https://static.tildacdn.com/tild3063-6437-4435-b162-346364663830/photo_2020-08-27_212.jpeg", restPRICE: "Средний чек: 1500–5000 тенге", restKITCH: "Кухни: европейская, китайская, итальянская, восточная", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Жамбыла, 198 А", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/tumar_chaihana/", rest2GIS: "https://go.2gis.com/efna2i"},
{id: 44, restNAME: "Atakent Park Hotel", restIMG: "https://static.tildacdn.com/tild3962-3733-4634-a232-323339643361/photo_2020-08-27_213.jpeg", restPRICE: "Средний чек: 3000–10000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы уточняйте по телефону +7(727)355-42-42", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "ул. Тимирязева, 42", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/atakent_park_hotel/", rest2GIS: "https://go.2gis.com/cpp6r"},
{id: 45, restNAME: "Белый журавль", restIMG: "https://static.tildacdn.com/tild3465-3862-4731-b336-373936666635/photo_2020-08-27_214.jpeg", restPRICE: "Средний чек: 3500–5000 тенге", restKITCH: "Кухни: европейская, корейская, восточная", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Сулейменова, 2 А", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/belyi_zhuravl/", rest2GIS: "https://go.2gis.com/bz7xjp"},
{id: 46, restNAME: "Место встречи", restIMG: "https://static.tildacdn.com/tild6336-6636-4166-b838-616436333833/photo_2020-08-27_215.jpeg", restPRICE: "Средний чек: 3500–6000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 10:00 до 01:00", restTimeOpen: "10:00", restTimeClose: "01:00", restADRES: "ул. Жансугурова, 271", restSector:"Турксибский", restINSTA: "https://www.instagram.com/mesto_vstrechii/", rest2GIS: "https://go.2gis.com/1ahqnd"},
{id: 47, restNAME: "Алина", restIMG: "https://static.tildacdn.com/tild6264-6430-4064-b434-323836343335/photo_2020-08-27_215.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Панфилова, 154", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/cafe.alina/", rest2GIS: "https://go.2gis.com/nfp9a7"},
{id: 48, restNAME: "Аслан", restIMG: "https://static.tildacdn.com/tild3837-3265-4037-b263-623865613033/__2020-08-27__215810.png", restPRICE: "Средний чек: 3000–4000 тенге", restKITCH: "Кухни: европейская, казахская, кавказская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Ашимова, 162", restSector:"Наурызбайский", restINSTA: "", rest2GIS: "https://go.2gis.com/5g4o6"},
{id: 49, restNAME: "Буржуй", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы уточняйте по телефону +7(727)250-74-76", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "пр. Сейфуллина, 577", restSector:"Алмалинский", restINSTA: "", rest2GIS: "https://go.2gis.com/yd9w6n"},
{id: 50, restNAME: "Dato", restIMG: "https://static.tildacdn.com/tild6436-6330-4133-a430-633638616662/photo_2020-08-27_220.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: грузинская, европейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Кунаева, 64", restSector:"Медеуский", restINSTA: "https://www.instagram.com/dato_almaty/", rest2GIS: "https://go.2gis.com/7fwfg"},
{id: 51, restNAME: "Боз Бие", restIMG: "https://static.tildacdn.com/tild6439-3939-4738-a130-613962653332/photo_2020-08-27_221.jpeg", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: казахская", restTIME: "Время работы: 07:00 до 23:00", restTimeOpen: "07:00", restTimeClose: "23:00", restADRES: "ул. Кожабекова, 73", restSector:"Коксай", restINSTA: "https://www.instagram.com/boz.bie/", rest2GIS: "https://go.2gis.com/7ediv4"},
{id: 52, restNAME: "TMIN", restIMG: "https://static.tildacdn.com/tild6164-3834-4565-a261-366433363565/photo_2020-08-27_221.jpeg", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: европейская, узбекская", restTIME: "Время работы: 11:00 до 22:00", restTimeOpen: "11:00", restTimeClose: "22:00", restADRES: "пр. Абая, 89", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/tmin_almaty/", rest2GIS: "https://go.2gis.com/j2dt2"},
{id: 53, restNAME: "Карлыгаш", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, казахская", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restADRES: "Алатау, 59/60", restSector:"Бостандыкский", restINSTA: "", rest2GIS: "https://go.2gis.com/l5rq7"},
{id: 54, restNAME: "Бульон", restIMG: "https://static.tildacdn.com/tild6631-3162-4333-b665-323063616230/photo_2020-08-28_105.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Ратушного, 78 Б", restSector:"Жетысуский", restINSTA: "https://www.instagram.com/bulyon.almaty/", rest2GIS: "https://go.2gis.com/kji6i"},
{id: 55, restNAME: "AS karaoke bar", restIMG: "https://static.tildacdn.com/tild6564-3934-4132-a230-623866656437/photo_2020-08-28_154.jpeg", restPRICE: "Средний чек: 5000–10000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 05:00", restTimeOpen: "11:00", restTimeClose: "05:00", restADRES: "мкр. Аксай 1А, 28Б", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/askaraokekafebar/", rest2GIS: "https://go.2gis.com/2brgh"},
{id: 56, restNAME: "МансАрда", restIMG: "https://static.tildacdn.com/tild3137-3336-4566-b262-366462396430/photo_2020-08-28_155.jpeg", restPRICE: "Средний чек: 2500–7000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 12:00 до 00:00", restTimeOpen: "12:00", restTimeClose: "00:00", restADRES: "ул. Шокая, 37", restSector:"Медеуский", restINSTA: "https://www.instagram.com/mansarda.cafe/", rest2GIS: "https://go.2gis.com/4et33"},
{id: 57, restNAME: "Alua`s Lagman house", restIMG: "https://static.tildacdn.com/tild3365-3033-4462-b932-623337663764/__2020-08-28__164323.png", restPRICE: "Средний чек: 2000–4000 тенге", restKITCH: "Кухни: европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restADRES: "ул. Ырысты, 36/1", restSector:"Алатауский", restINSTA: "https://www.instagram.com/aluas_lagman_house/", rest2GIS: "https://go.2gis.com/cwogd"},
{id: 58, restNAME: "Гастро Бар", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 08:00 до 01:00", restTimeOpen: "08:00", restTimeClose: "01:00", restADRES: "пр. Назарбаева, 187 Б", restSector:"Бостандыкский", restINSTA: "", rest2GIS: "https://go.2gis.com/k8h80"},
{id: 59, restNAME: "Алые паруса", restIMG: "https://static.tildacdn.com/tild6138-3934-4735-a366-303235633539/photo_2020-08-28_165.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: японская, паназиатская", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restADRES: "мкр. Самал 2, 111, ТРЦ Dostyk Plaza", restSector:"Медеуский", restINSTA: "https://www.instagram.com/alyeparusaa/", rest2GIS: "https://go.2gis.com/8lg7j"},
{id: 60, restNAME: "Bon Appetit", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1000–2000 тенге", restKITCH: "Кухни: азиатская, европейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Тимирязева, 19", restSector:"Бостандыкский", restINSTA: "", rest2GIS: "https://go.2gis.com/thlq1"},
{id: 61, restNAME: "На бугорке", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 08:00 до 00:00", restTimeOpen: "08:00", restTimeClose: "00:00", restADRES: "пр. Суюнбая, 379", restSector:"Турксибский", restINSTA: "", rest2GIS: "https://go.2gis.com/91jmop"},
{id: 62, restNAME: "Dim Sum", restIMG: "https://thumb.tildacdn.com/tild3466-3239-4261-b631-313530393139/-/format/webp/photo_2020-08-28_222.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "пр. Аль-Фараби, 77/8", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/dimsum_official/", rest2GIS: "https://go.2gis.com/ilxd7"},
{id: 63, restNAME: "Бухара", restIMG: "https://thumb.tildacdn.com/tild3863-3138-4631-b330-366435366633/-/format/webp/photo_2020-08-28_223.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restADRES: "ул. Шевченко, 165", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/buhara_cafe/", rest2GIS: "https://go.2gis.com/pnbv9"},
{id: 64, restNAME: "ПЛОВХАНА", restIMG: "https://thumb.tildacdn.com/tild3036-3033-4736-a335-386237613036/-/format/webp/photo_2020-08-28_223.jpeg", restPRICE: "Средний чек: 500–1500 тенге", restKITCH: "Кухни: узбекская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Рихарда Зорге, 18/1", restSector:"Турксибский", restINSTA: "https://www.instagram.com/plovhana/", rest2GIS: "https://go.2gis.com/armi6"},
{id: 65, restNAME: "Потенциал", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточная, казахская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Карасай батыра, 193 Б", restSector:"Алмалинский", restINSTA: "", rest2GIS: "https://go.2gis.com/abfrn"},
{id: 66, restNAME: "Уч-Кудук", restIMG: "https://thumb.tildacdn.com/tild3561-6266-4561-a662-316538336164/-/format/webp/photo_2020-08-28_231.jpeg", restPRICE: "Средний чек: 4000–7000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Магистральная, 13", restSector:"Алатауский", restINSTA: "https://www.instagram.com/ychkuduk/", rest2GIS: "https://go.2gis.com/hbenh"},
{id: 67, restNAME: "Хуторок" , restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png" , restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: " Кухни: европейская, восточная", restTIME: "Время работы уточняйте по телефону +7(700)313-65-59" , restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "пр. Сейфуллина, 291", restSector:"Жетысуский", restINSTA: " " , rest2GIS: "https://go.2gis.com/f9jcw"},
{id: 68, restNAME: "Ас-Казан", restIMG: "https://thumb.tildacdn.com/tild3134-6439-4538-b262-336531623261/-/format/webp/photo_2020-08-28_232.jpeg", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: восточная, европейская, китайская", restTIME: "Время работы:  08:00 до 22:00", restTimeOpen: "08:00", restTimeClose: "22:00", restADRES: "ул. Гоголя, 13", restSector:"Медеуский", restINSTA: "https://www.instagram.com/askazan.kz/", rest2GIS: "https://go.2gis.com/c7pro"},
{id: 69, restNAME: "Amazon", restIMG: "https://thumb.tildacdn.com/tild3462-3332-4566-b764-353332646330/-/format/webp/photo_2020-08-28_233.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, итальянская, грузинская, казахская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Жангельдина, 212 А", restSector:"Жетысуский", restINSTA: "https://www.instagram.com/amazon_kafe/", rest2GIS: "https://go.2gis.com/1d5vv"},
{id: 70, restNAME: "Сырмак", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточно-европейская, китайская", restTIME: "Время работы: 08:00 до 00:00", restTimeOpen: "08:00", restTimeClose: "00:00", restADRES: "ул. Макатаева, 47", restSector:"Медеуский", restINSTA: "", rest2GIS: "https://go.2gis.com/mrr4k"},
{id: 71, restNAME: "Султан Курган", restIMG: "https://thumb.tildacdn.com/tild3431-3866-4439-a162-623362383337/-/format/webp/photo_2020-08-28_233.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: европейская, казахская, китайская", restTIME: "Время работы уточняйте по телефону +7(707)633-11-59", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "ул. Жансугурова, 438/1", restSector:"Жетысуский", restINSTA: "https://www.instagram.com/abay_halalfood/", rest2GIS: "https://go.2gis.com/mqyew"},
{id: 72, restNAME: "Лагман Town", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "мкр. Достык, ул. Есенова, 42", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/lagman_town/", rest2GIS: "https://go.2gis.com/44d8u"},
{id: 73, restNAME: "Нинигори", restIMG: "https://thumb.tildacdn.com/tild6435-3962-4136-b165-313030306237/-/format/webp/photo_2020-08-28_234.jpeg", restPRICE: "Средний чек: 2500–7000 тенге", restKITCH: "Кухни: европейская, грузинская, восточная", restTIME: "Время работы: 11:00 до 03:00", restTimeOpen: "11:00", restTimeClose: "03:00", restADRES: "ул. Жансугурова, 395", restSector:"Турксибский", restINSTA: "https://www.instagram.com/kafe_ninigori/", rest2GIS: "https://go.2gis.com/uqigs"},
{id: 74, restNAME: "Irgeli", restIMG: "https://thumb.tildacdn.com/tild6230-6630-4637-b063-643637326661/-/format/webp/photo_2020-08-28_234.jpeg", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: европейская, итальянская, китайская", restTIME: "Время работы: 08:00 до 01:00", restADRES: "ул. Исагулова, 166, с. Иргели", restSector:"Карасайский", restINSTA: "https://www.instagram.com/irgely_kafe/", rest2GIS: "https://go.2gis.com/1jhky"},
{id: 75, restNAME: "Lanzhou", restIMG: "https://thumb.tildacdn.com/tild3430-6666-4339-b737-663639383562/-/format/webp/photo_2020-08-28_235.jpeg", restPRICE: "Средний чек: 1000–2000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restADRES: "ул. Жибек Жолы, 65 А", restSector:"Медеуский", restINSTA: "https://www.instagram.com/lanzhou_kafe/", rest2GIS: "https://go.2gis.com/pu39c"},
{id: 76, restNAME: "Кино", restIMG: "https://thumb.tildacdn.com/tild3632-3162-4333-b535-323632643631/-/format/webp/photo_2020-08-28_235.jpeg", restPRICE: "Средний чек: 4000–7000 тенге", restKITCH: "Кухни: европейская, американская", restTIME: "Время работы: 09:00 до 22:00", restTimeOpen: "09:00", restTimeClose: "22:00", restADRES: "ул. Панфилова, 108", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/cafe_bar_kino/", rest2GIS: "https://go.2gis.com/agb9d"},
{id: 77, restNAME: "Korean Food Story", restIMG: "https://thumb.tildacdn.com/tild3762-3236-4261-b965-383936383165/-/format/webp/photo_2020-08-28_235.jpeg", restPRICE: "Средний чек: 1700–2000 тенге", restKITCH: "Кухни: корейская", restTIME: "Время работы: 09:00 до 19:00", restTimeOpen: "09:00", restTimeClose: "19:00", restADRES: "пр. Аль-Фараби, 19 К2, Б", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/koreanfoodstory/", rest2GIS: "https://go.2gis.com/ssq3q"},
{id: 78, restNAME: "Chad Cafe", restIMG: "https://thumb.tildacdn.com/tild3661-3839-4739-b966-633664653663/-/format/webp/photo_2020-08-28_235.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: авторская, паназиатская, тайская", restTIME: "Время работы: 08:30 до 22:00", restTimeOpen: "08:30", restTimeClose: "22:00", restADRES: "ул. Гоголя, 13", restSector:"Медеуский", restINSTA: "https://www.instagram.com/chad.cafe/", rest2GIS: "https://go.2gis.com/5715o"},
{id: 79, restNAME: "Мармарис", restIMG: "https://thumb.tildacdn.com/tild3937-3932-4330-b234-656666316336/-/format/webp/photo_2020-08-29_000.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: турецкая, европейская", restTIME: "Время работы: 09:00 до 23:00", restTimeOpen: "09:00", restTimeClose: "23:00", restADRES: "ул. Ауэзова, 175", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/marmariskz/", rest2GIS: "https://go.2gis.com/teqz5k"},
{id: 80, restNAME: "Ginger Sushi Cafe", restIMG: "https://thumb.tildacdn.com/tild3233-6539-4336-a231-303563343162/-/format/webp/photo_2020-08-29_000.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restADRES: "ул. Жандарбекова, 128", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/ginger_sushi_/", rest2GIS: "https://go.2gis.com/dttn4"},
{id: 81, restNAME: "Мизам", restIMG: "https://thumb.tildacdn.com/tild3737-6265-4566-a235-386465666463/-/format/webp/photo_2020-08-29_124.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: узбекская", restTIME: "Время работы: 09:00 до 23:00", restTimeOpen: "09:00", restTimeClose: "23:00", restADRES: "мкр. Жетысу 3, 1/3", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/mizam.almaty/", rest2GIS: "https://go.2gis.com/26kug"},
{id: 82, restNAME: "Pinseria Esentai City", restIMG: "https://thumb.tildacdn.com/tild6466-3730-4837-b135-623139353230/-/format/webp/photo_2020-08-29_124.jpeg", restPRICE: "Средний чек: 6000–10000 тенге", restKITCH: "Кухни: итальянская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "пр. Аль-Фараби, 116/21", restSector:"Медеуский", restINSTA: "https://www.instagram.com/parmigiano_group/", rest2GIS: "https://go.2gis.com/3i2ja"},
{id: 83, restNAME: "Чичек Мангал", restIMG: "https://thumb.tildacdn.com/tild6466-3730-4837-b135-623139353230/-/format/webp/photo_2020-08-29_124.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: тцрецкая", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restADRES: "ул. Кунаева 64", restSector:"Медеуский", restINSTA: "https://www.instagram.com/cicek_mangal/", rest2GIS: "https://go.2gis.com/6vwrx"},
{id: 84, restNAME: "LaDoni", restIMG: "https://thumb.tildacdn.com/tild6234-6563-4264-a666-633165333233/-/format/webp/photo_2020-08-29_130.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, итальянская", restTIME: "Время работы: 13:00 до 00:00", restTimeOpen: "13:00", restTimeClose: "00:00", restADRES: "мкр. Мамыр 1, 29/6", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/ladoni_almaty/", rest2GIS: "https://go.2gis.com/yr07i"},
{id: 85, restNAME: "Рамазан", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: европейская, китайская, уйгурская, восточная, дунганская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Жангельдина, 194", restSector:"Жетысуский", restINSTA: "", rest2GIS: "https://go.2gis.com/u131b"},
{id: 86, restNAME: "Korean street food", restIMG: "https://thumb.tildacdn.com/tild6364-3132-4532-a538-313062316230/-/format/webp/photo_2020-08-29_131.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: корейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "ул. Абая, 89", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/korean_street_food/", rest2GIS: "https://go.2gis.com/z2cyc"},
{id: 87, restNAME: "SHAFRAN", restIMG: "https://thumb.tildacdn.com/tild6463-6661-4966-a635-343835356239/-/format/webp/photo_2020-08-29_131.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 08:00 до 20:00", restTimeOpen: "08:00", restTimeClose: "20:00", restADRES: "ул. Пушкина, 2/76", restSector:"Медеуский", restINSTA: "https://www.instagram.com/shafran.kz/", rest2GIS: "https://go.2gis.com/clk8a"},
{id: 88, restNAME: "Достар", restIMG: "https://thumb.tildacdn.com/tild3034-3935-4635-a264-343763383366/-/format/webp/photo_2020-08-29_132.jpeg", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 09:00 до 00:00", restTimeOpen: "09:00", restTimeClose: "00:00", restADRES: "ул. Жубанова, 3 А", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/dostar_kafeci/", rest2GIS: "https://go.2gis.com/s5uxkf"},
{id: 89, restNAME: "Rodem", restIMG: "https://thumb.tildacdn.com/tild3062-3039-4362-b036-346530386332/-/format/webp/photo_2020-08-29_132.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: корейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "пр. Абылай хана, 64", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/rodem_korean_kafe/", rest2GIS: "https://go.2gis.com/r99yk"},
{id: 90, restNAME: "Atameken", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3500–5000 тенге", restKITCH: "Кухни: европейская, китайская, казахская", restTIME: "Время работы: 11:00 до 00:00", restTimeOpen: "11:00", restTimeClose: "00:00", restADRES: "ул. Макатаева, 139", restSector:"Алмалинский", restINSTA: "", rest2GIS: "https://go.2gis.com/n8lv0"},
{id: 91, restNAME: "Халал палау", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1500–2500 тенге", restKITCH: "Кухни: узбекская, восточная", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "мкр. Мамыр, ул. Керентау, 1", restSector:"Ауэзовский", restINSTA: "", rest2GIS: "https://go.2gis.com/dcs30"},
{id: 92, restNAME: "LOVE SMOKE", restIMG: "https://thumb.tildacdn.com/tild6135-6262-4030-a461-653865663837/-/format/webp/photo_2020-08-29_133.jpeg", restPRICE: "Средний чек: 4000–5000 тенге", restKITCH: "Кухни: европейская", restTIME: "Время работы: 15:00 до 03:00", restTimeOpen: "15:00", restTimeClose: "03:00", restADRES: "мкр. Самал 2, 55", restSector:"Медеуский", restINSTA: "https://www.instagram.com/love_smoke_almaty/", rest2GIS: "https://go.2gis.com/w3gne"},
{id: 93, restNAME: "Ciao Pizza", restIMG: "https://thumb.tildacdn.com/tild6430-6239-4738-b930-663865383337/-/format/webp/photo_2020-08-29_133.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: итальянская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "мкр. 10, 3В", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/mammamia_kz/", rest2GIS: "https://go.2gis.com/4pjkw"},
{id: 94, restNAME: "Элит", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 4500–5000 тенге", restKITCH: "Кухни: европейская, кавказская", restTIME: "Время работы: 10:00 до 01:00", restTimeOpen: "10:00", restTimeClose: "01:00", restADRES: "мкр. 9, 35 Б", restSector:"Ауэзовский", restINSTA: "", rest2GIS: "https://go.2gis.com/xvmymy"},
{id: 95, restNAME: "Wine Cafe & Shop", restIMG: "https://thumb.tildacdn.com/tild3665-6236-4433-a538-353165396261/-/format/webp/photo_2020-08-29_134.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: европейская, авторская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "пр. Назарбаева, 128/104", restSector:"Медеуский", restINSTA: "https://www.instagram.com/wine_cafe_and_shop/", rest2GIS: "https://go.2gis.com/zkskvn"},
{id: 96, restNAME: "Зимний сад", restIMG: "https://thumb.tildacdn.com/tild3037-3839-4864-b331-313938363162/-/format/webp/photo_2020-08-29_134.jpeg", restPRICE: "Средний чек: 6000–8000 тенге", restKITCH: "Кухни: европейская", restTIME: "Время работы: 12:00 до 23:00", restTimeOpen: "12:00", restTimeClose: "23:00", restADRES: "ул. Тлендиева, 100", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/zimniy_sad/", rest2GIS: "https://go.2gis.com/cday39"},
{id: 97, restNAME: "Лачин Халал", restIMG: "https://thumb.tildacdn.com/tild3832-3038-4261-b237-306636313136/-/format/webp/photo_2020-08-29_134.jpeg", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 09:00 до 22:00", restTimeOpen: "09:00", restTimeClose: "22:00", restADRES: "мкр. Айнабулак 2, 81/3", restSector:"Жетысуский", restINSTA: "https://www.instagram.com/cafelachin/", rest2GIS: "https://go.2gis.com/9ayj3"},
{id: 98, restNAME: "AFIYET", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3000–8000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restADRES: "мкр. Саялы, 34", restSector:"Алатауский", restINSTA: "", rest2GIS: "https://go.2gis.com/u59tid"},
{id: 99, restNAME: "HOGO CENTR", restIMG: "https://thumb.tildacdn.com/tild6635-6636-4337-a562-363335396235/-/format/webp/photo_2020-08-29_134.jpeg", restPRICE: "Средний чек: 3000–3500 тенге", restKITCH: "Кухни: дунганская, европейская, китайская", restTIME: "Время работы: 11:00 до 22:00", restTimeOpen: "11:00", restTimeClose: "22:00", restADRES: "ул. Жансугурова, 258", restSector:"Жетысуский", restINSTA: "https://www.instagram.com/shaolin_hogo/", rest2GIS: "https://go.2gis.com/w0pxox"},
{id: 100, restNAME: "Lagman Project", restIMG: "https://thumb.tildacdn.com/tild6463-3733-4964-b232-303031323232/-/format/webp/photo_2020-08-29_135.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: европейская, китайская", restTIME: "Время работы: 11:00 до 21:00", restTimeOpen: "11:00", restTimeClose: "21:00", restADRES: "ул. Жандосова, 15", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/lagman.project/", rest2GIS: "https://go.2gis.com/c9pl1p"},
{id: 101, restNAME: "Полярис", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3500–5000 тенге", restKITCH: "Кухни: европейская, грузинская", restTIME: "Время работы: 11:00 до 05:00", restTimeOpen: "11:00", restTimeClose: "05:00", restADRES: "мкр. 6, 11 А", restSector:"Ауэзовский", restINSTA: "", rest2GIS: "https://go.2gis.com/sf1vv"},
{id: 102, restNAME: "LOOK", restIMG: "https://thumb.tildacdn.com/tild3864-6161-4437-b365-656231666663/-/format/webp/photo_2020-08-30_142.jpeg", restPRICE: "Средний чек: 2000–4000 тенге", restKITCH: "Кухни: восточная", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "Первомайские пруды", restSector:"Илийский", restINSTA: "https://www.instagram.com/pervomaiskie_prudy/", rest2GIS: "https://go.2gis.com/zxemw2"},
{id: 103, restNAME: "Камелот", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: американская, европейская, мексиканская", restTIME: "Время работы: 12:00 до 01:00", restTimeOpen: "12:00", restTimeClose: "01:00", restADRES: "бул. Бухар Жырау, 37", restSector:"Талгарский", restINSTA: "", rest2GIS: "https://go.2gis.com/0a992u"},
{id: 104, restNAME: "Гамарджоба", restIMG: "https://thumb.tildacdn.com/tild3061-6539-4237-a665-363434343832/-/format/webp/photo_2020-08-30_143.jpeg", restPRICE: "Средний чек: 4000–7000 тенге", restKITCH: "Кухни: грузинская, европейская, восточная", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restADRES: "мкр. Айнабулак 1, 6 А", restSector:"Жетысуский", restINSTA: "https://www.instagram.com/kafe_gamardzhoba/", rest2GIS: "https://go.2gis.com/qir2l"},
{id: 105, restNAME: "Саперави", restIMG: "https://thumb.tildacdn.com/tild3539-6235-4362-a634-663132643265/-/format/webp/photo_2020-08-30_143.jpeg", restPRICE: "Средний чек: 2000–4000 тенге", restKITCH: "Кухни: европейская, восточная, грузинская", restTIME: "Время работы: 10:00 до 01:00", restTimeOpen: "10:00", restTimeClose: "01:00", restADRES: "ул. Тургут Озала, 112", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/cafe_saperavi_1/", rest2GIS: "https://go.2gis.com/167c5"},
{id: 106, restNAME: "Ак-Булак", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Чуланова, 32", restSector:"Алатауский", restINSTA: "https://www.instagram.com/aqbulaq_almaty/", rest2GIS: "https://go.2gis.com/q5r7y"},
{id: 107, restNAME: "Хмель", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1500–5000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 03:00", restTimeOpen: "10:00", restTimeClose: "03:00", restADRES: "пр. Абылай хана, 25", restSector:"Жетысуский", restINSTA: "", rest2GIS: "https://go.2gis.com/kyir1"},
{id: 108, restNAME: "Краснодарский парень", restIMG: "https://thumb.tildacdn.com/tild6262-3239-4366-a132-346533396163/-/format/webp/photo_2020-08-30_145.jpeg", restPRICE: "Средний чек: 2000–3500 тенге", restKITCH: "Кухни: американская", restTIME: "Время работы: 12:00 до 23:00 ", restTimeOpen: "12:00", restTimeClose: "23:00", restADRES: "пр. Абая, 12", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/krdparen_almaty/", rest2GIS: "https://go.2gis.com/vrafe"},
{id: 109, restNAME: "Три казана", restIMG: "https://thumb.tildacdn.com/tild6266-3432-4833-a662-383936316639/-/format/webp/photo_2020-08-30_185.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00",  restADRES: "Сейфуллина, 617", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/3kazana.kz/", rest2GIS: "https://go.2gis.com/0hrwb"},
{id: 110, restNAME: "Анна-Мария", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 4000–6500 тенге", restKITCH: "Кухни: европейская, казахская, итальянская", restTIME: "Время работы: 08:30 до 17:00", restTimeOpen: "08:30", restTimeClose: "17:00", restADRES: "пр. Достык, 31", restSector:"Медеуский", restINSTA: "", rest2GIS: "https://go.2gis.com/26iiww"},
{id: 111, restNAME: "Расул", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 09:00 до 23:00", restTimeOpen: "09:00", restTimeClose: "23:00", restADRES: "ул. Чурина, 29 А", restSector:"Алатауский", restINSTA: "", rest2GIS: "https://go.2gis.com/iykyem"},
{id: 112, restNAME: "1465", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: китайская, восточная", restTIME: "Время работы: 12:00 до 03:00", restTimeOpen: "12:00", restTimeClose: "03:00", restADRES: "пр. Гагарина, 135/7", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/1465_cafe_bar/", rest2GIS: "https://go.2gis.com/552rho"},
{id: 113, restNAME: "Safran", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1200–4000 тенге", restKITCH: "Кухни: грузинская, казахская, европейская", restTIME: "Время работы: 10:00 до 01:00", restTimeOpen: "10:00", restTimeClose: "01:00", restADRES: "ул. Баянаульская, 30", restSector:"Жетысуский", restINSTA: "", rest2GIS: "https://go.2gis.com/4z2gpr"},
{id: 114, restNAME: "Shafran", restIMG: "https://thumb.tildacdn.com/tild3134-6164-4832-b666-346463626533/-/format/webp/photo_2020-08-30_192.jpeg", restPRICE: "Средний чек: 2000–3500 тенге", restKITCH: "Кухни: восточно-европейская, грузинская", restTIME: "Время работы: 11:00 до 22:00", restTimeOpen: "11:00", restTimeClose: "22:00", restADRES: "ул. Акан Серы, 51/86", restSector:"Турксибский", restINSTA: "https://www.instagram.com/cafe__shafran/", rest2GIS: "https://go.2gis.com/h21sc3"},
{id: 115, restNAME: "EDA", restIMG: "https://thumb.tildacdn.com/tild3530-3733-4665-b061-656634396265/-/format/webp/photo_2020-08-30_193.jpeg", restPRICE: "Средний чек: 3500–5000 тенге", restKITCH: "Кухни: европейская, паназиатская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Абылай хана, 94", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/eda_cafe_by_nadrov/", rest2GIS: "https://go.2gis.com/rusj63"},
{id: 116, restNAME: "Korean street food", restIMG: "https://thumb.tildacdn.com/tild6534-6166-4862-b161-316130636233/-/format/webp/photo_2020-08-30_193.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: корейская", restTIME: "Время работы: 10:00 до 21:00", restTimeOpen: "10:00", restTimeClose: "21:00", restADRES: "ул. Чайковского, 22", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/korean_street_food/", rest2GIS: "https://go.2gis.com/e8pii"},
{id: 117, restNAME: "Sairam", restIMG: "https://thumb.tildacdn.com/tild6664-3862-4966-b230-333162373732/-/format/webp/photo_2020-08-30_194.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: восточная", restTIME: "Время работы: круглосуточно", restTimeOpen: "00:00", restTimeClose: "00:00", restADRES: "ул. Байтурсынова, 65", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/sairam_shaikhana_baityrsunova/", rest2GIS: "https://go.2gis.com/7lz5y"},
{id: 118, restNAME: "Айнур", restIMG: "https://thumb.tildacdn.com/tild3463-3863-4132-b332-333837656433/-/format/webp/photo_2020-08-30_194.jpeg", restPRICE: "Средний чек: 4500–7500 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restADRES: "мкр. 4, 12", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/cafeainur/", rest2GIS: "https://go.2gis.com/htjpt"},
{id: 119, restNAME: "Govinda’s", restIMG: "https://thumb.tildacdn.com/tild6230-6234-4231-a636-363164653662/-/format/webp/photo_2020-09-01_144.jpeg", restPRICE: "Средний чек: 1500–5000 тенге", restKITCH: "Кухни: вегетарианская", restTIME: "Время работы: 12:00 до 20:00", restTimeOpen: "12:00", restTimeClose: "20:00", restADRES: "пр. Абылай хана, 39", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/govindas_almaty/", rest2GIS: "https://go.2gis.com/h3r2lo"},
{id: 120, restNAME: "Shanyrak", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1200–3000 тенге", restKITCH: "Кухни: европейская, китайская, восточная", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restADRES: "ул. Актанберды жырау, 53", restSector:"Наурызбайский", restINSTA: "", rest2GIS: "https://go.2gis.com/fntedp"},
{id: 121, restNAME: "Imereti", restIMG: "https://thumb.tildacdn.com/tild3437-3531-4230-a465-643736643134/-/format/webp/photo_2020-09-01_151.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: грузинская, казахская, восточная, европейская", restTIME: "Время работы: 11:00 до 02:00", restTimeOpen: "11:00", restTimeClose: "02:00", restADRES: "ул. Акан Серы, 44", restSector:"Турксибский", restINSTA: "https://www.instagram.com/kafe_imereti_almaty/", rest2GIS: "https://go.2gis.com/2p94e"},
{id: 122, restNAME: "Lik Beer", restIMG: "https://thumb.tildacdn.com/tild3532-3763-4430-b263-396633623436/-/format/webp/photo_2020-09-01_152.jpeg", restPRICE: "Средний чек: 5000–8000 тенге", restKITCH: "Кухни: авторская, европейская", restTIME: "Время работы: 12:00 до 23:00", restTimeOpen: "12:00", restTimeClose: "23:00", restADRES: "ул. Бухар Жырау, 27/5", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/likbeer/", rest2GIS: "https://go.2gis.com/6sl7j"},
{id: 123, restNAME: "Ваниль", restIMG: "https://thumb.tildacdn.com/tild3838-3731-4439-a337-663835313266/-/format/webp/photo_2020-09-01_152.jpeg", restPRICE: "Средний чек: 2500–3000 тенге", restKITCH: "Кухни: американская", restTIME: "Время работы: 12:00 до 03:00", restTimeOpen: "12:00", restTimeClose: "03:00", restADRES: "ул. Сагадата Нурмагамбетова 204", restSector:"Медеуский", restINSTA: "https://www.instagram.com/antikafe_kz/", rest2GIS: "https://go.2gis.com/x0skx"},
{id: 124, restNAME: "Senseasia", restIMG: "https://thumb.tildacdn.com/tild6162-3034-4731-b363-386233626530/-/format/webp/photo_2020-09-01_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: грузинская, европейская", restTIME: "Время работы: 12:00 до 02:00", restTimeOpen: "12:00", restTimeClose: "02:00", restADRES: "пр. Сейфуллина, 136 А", restSector:"Турксибский", restINSTA: "https://www.instagram.com/senseasia.kz/", rest2GIS: "https://go.2gis.com/l11kr"},
{id: 125, restNAME: "Пацацина", restIMG: "https://thumb.tildacdn.com/tild3661-6536-4539-b162-663030323839/-/format/webp/photo_2020-09-01_153.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: грузинская", restTIME: "Время работы: 11:00 до 22:00", restTimeOpen: "11:00", restTimeClose: "22:00", restADRES: "пр. Достык, 42", restSector:"Медеуский", restINSTA: "https://www.instagram.com/patsatsina/", rest2GIS: "https://go.2gis.com/crs82"},
{id: 126, restNAME: "Маида", restIMG: "https://thumb.tildacdn.com/tild6134-3731-4238-b034-623966333065/-/format/webp/photo_2020-09-01_153.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточная, европейская, корейская, уйгурская, казахская", restTIME: "Время работы: 08:00 до 00:00", restTimeOpen: "08:00", restTimeClose: "00:00", restADRES: "ул. Фурката, 67 А", restSector:"Ауэзовский", restINSTA: "https://www.instagram.com/maida_almaty/", rest2GIS: "https://go.2gis.com/rlj8o"},
{id: 127, restNAME: "Manavi", restIMG: "https://thumb.tildacdn.com/tild6632-6435-4537-b132-323665666565/-/format/webp/photo_2020-09-01_154.jpeg", restPRICE: "Средний чек: 2000–4000 тенге", restKITCH: "Кухни: грузинская, европейская, восточная", restTIME: "Время работы: 11:00 до 02:00", restTimeOpen: "11:00", restTimeClose: "02:00", restADRES: "ул. Ахан Серы 113", restSector:"Турксибский", restINSTA: "https://www.instagram.com/manavi_cafe/", rest2GIS: "https://go.2gis.com/m5h027"},
{id: 128, restNAME: "Kunjut", restIMG: "https://thumb.tildacdn.com/tild3363-6462-4566-a362-303435353366/-/format/webp/photo_2020-09-01_154.jpeg", restPRICE: "Средний чек: 3000–4000 тенге", restKITCH: "Кухни: европейская, паназиатская, восточная, грузинская", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restADRES: "ул. Макатаева, 126", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/kunjut_cafe/", rest2GIS: "https://go.2gis.com/hpyf2"},
{id: 129, restNAME: "Афина", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3500–5000 тенге", restKITCH: "Кухни: европейская, грузинская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "ул. Вольная, 2 А", restSector:"Жетысуский", restINSTA: "", rest2GIS: "https://go.2gis.com/tdijme"},
{id: 130, restNAME: "Сочи", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 2000–4000 тенге", restKITCH: "Кухни: восточная, европейская, кавказская", restTIME: "Время работы: 10:00 до 01:00", restTimeOpen: "10:00", restTimeClose: "01:00", restADRES: "ул. Каирбекова, 6", restSector:"Медеуский", restINSTA: "", rest2GIS: "https://go.2gis.com/9x1gd"},
{id: 131, restNAME: "Kim Chi", restIMG: "https://thumb.tildacdn.com/tild3533-6236-4134-b633-343633386633/-/format/webp/photo_2020-09-01_155.jpeg", restPRICE: "Средний чек: 2000–4000 тенге", restKITCH: "Кухни: корейская, японская", restTIME: "Время работы: 12:00 до 00:00", restTimeOpen: "12:00", restTimeClose: "00:00", restADRES: "мкр. Орбита 2, 6", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/kimchi.almaty/", rest2GIS: "https://go.2gis.com/f4kof"},
{id: 132, restNAME: "MADAMIN", restIMG: "https://thumb.tildacdn.com/tild3961-6364-4334-b039-336234623136/-/format/webp/photo_2020-09-01_160.jpeg", restPRICE: "Средний чек: 2500–3000 тенге", restKITCH: "Кухни: итальянская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "пр. Гагарина, 287/2", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/madamin_halal/", rest2GIS: "https://go.2gis.com/suxupq"},
{id: 133, restNAME: "Султан", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3000–6000 тенге", restKITCH: "Кухни: узбекская, восточно-европейская", restTIME: "Время работы: 10:00 до 01:00", restTimeOpen: "10:00", restTimeClose: "01:00", restADRES: "ул. Универсиадная, 6/1", restSector:"Алатауский", restINSTA: "", rest2GIS: "https://go.2gis.com/ib09j"},
{id: 134, restNAME: "Лагманхана №1", restIMG: "https://thumb.tildacdn.com/tild3165-6430-4565-a335-313839366365/-/format/webp/photo_2020-09-01_160.jpeg", restPRICE: "Средний чек: 1000–1500 тенге", restKITCH: "Кухни: европейская, уйгурская, казахская, китайская", restTIME: "Время работы: 09:00 до 02:00", restTimeOpen: "09:00", restTimeClose: "02:00", restADRES: "пр. Рыскулова, 149", restSector:"Алатауский", restINSTA: "https://www.instagram.com/lagmanhana1/", rest2GIS: "https://go.2gis.com/yathp"},
{id: 135, restNAME: "Unison", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3000–10000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 09:00 до 00:00", restTimeOpen: "09:00", restTimeClose: "00:00", restADRES: "пр. Райымбека, 496 А", restSector:"Ауэзовский", restINSTA: "", rest2GIS: "https://go.2gis.com/45mjd"},


{id: 200, restNAME: "Ziyafet Steak House", restIMG: "https://thumb.tildacdn.com/tild6235-3839-4138-b333-613732633635/-/resize/560x/-/format/webp/photo_2020-08-30_14-.jpg", restPRICE: "Средний чек: 10000–15000 тенге", restKITCH: "Кухни: европейская, авторская, турецкая", restTIME: "Время работы: 10:30 до 23:00", restTimeOpen: "10:30", restTimeClose: "23:00", restADRES: "пр. Желтоксан, 172", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/ziyafetsteakhouse/", rest2GIS: "https://go.2gis.com/mduh1"},
{id: 201, restNAME: "Renion park", restIMG: "https://thumb.tildacdn.com/tild3336-3339-4563-b434-316139303738/-/resize/560x/-/format/webp/photo_2020-08-30_14-.jpg", restPRICE: "Средний чек: 3500–10000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 09:00 до 22:00", restTimeOpen: "09:00", restTimeClose: "22:00", restADRES: "ул. Кунаева, 66", restSector:"Медеуский", restINSTA: "https://www.instagram.com/restaurant_renionpark/", rest2GIS: "https://go.2gis.com/m1l2ua"},
{id: 202, restNAME: "Tirol на Арбате", restIMG: "https://thumb.tildacdn.com/tild6130-3937-4563-b231-356330356566/-/resize/560x/-/format/webp/tirolterrace_1155459.jpg", restPRICE: "Средний чек: 5000–10000 тенге", restKITCH: "Кухни: европейская, тирольская", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restADRES: "пр. Жибек Жолы, 98", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/tirolterrace/", rest2GIS: "https://go.2gis.com/6fgic"},
{id: 203, restNAME: "Алаша", restIMG: "https://thumb.tildacdn.com/tild6166-3761-4839-a665-656434643962/-/resize/560x/-/format/webp/alashaalmaty_1102075.jpg", restPRICE: "Средний чек: 8000–15000 тенге", restKITCH: "Кухни: узбекская, восточно-европейская", restTIME: "Время работы: 12:00 до 23:00", restTimeOpen: "12:00", restTimeClose: "23:00", restADRES: "ул. Оспанова, 20", restSector:"Медеуский", restINSTA: "https://www.instagram.com/alasha.almaty/", rest2GIS: "https://go.2gis.com/vsy15"},
{id: 204, restNAME: "Little Brazil", restIMG: "https://thumb.tildacdn.com/tild3836-6637-4038-b766-626431653337/-/resize/560x/-/format/webp/littlebrazil_almaty_.jpg", restPRICE: "Средний чек: 15000 тенге", restKITCH: "Кухни: бразильская, европейская", restTIME: "Время работы: 12:00 до 02:00", restTimeOpen: "12:00", restTimeClose: "02:00", restADRES: "пр. Аль-Фараби, 140 А/4", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/Littlebrazil_almaty/", rest2GIS: "https://go.2gis.com/e5ifl"},
{id: 205, restNAME: "Якорь", restIMG: "https://thumb.tildacdn.com/tild3134-6233-4530-b331-333032633336/-/resize/560x/-/format/webp/restoran_yakor1_1688.jpg", restPRICE: "Средний чек: 5000–10000 тенге", restKITCH: "Кухни: европейская, итальянская, казахская", restTIME: "Время работы: 09:30 до 00:00", restTimeOpen: "09:30", restTimeClose: "00:00", restADRES: "ул. Толе би, 72", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/restoran_yakor1/", rest2GIS: "https://go.2gis.com/laaw7n"},
{id: 206, restNAME: "Sancak", restIMG: "https://thumb.tildacdn.com/tild3030-3132-4530-b465-613964616434/-/resize/560x/-/format/webp/restaurant_sancak_al.jpg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: турецкая", restTIME: "Время работы: 09:00 до 00:00", restTimeOpen: "09:00", restTimeClose: "00:00", restADRES: "Барибаева, 14", restSector:"Медеуский", restINSTA: "https://www.instagram.com/restaurant_sancak_almaty/", rest2GIS: "https://go.2gis.com/akbnr"},
{id: 207, restNAME: "Мараканда", restIMG: "https://thumb.tildacdn.com/tild6137-3735-4561-b731-343130373435/-/resize/560x/-/format/webp/marakandakz_10671289.jpg", restPRICE: "Средний чек: 5000–10000 тенге", restKITCH: "Кухни: казахская, узбекская, уйгурская, европейская, восточная", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "Муканова, 189", restSector:"Алмалинский", restINSTA: "https://www.instagram.com/marakandakz/", rest2GIS: "https://go.2gis.com/qgdht"},
{id: 208, restNAME: "Versailles | Версаль", restIMG: "https://thumb.tildacdn.com/tild3933-6238-4165-b465-323535306566/-/resize/560x/-/format/webp/versailles_restauran.jpg", restPRICE: "Средний чек: 4000–6000 тенге", restKITCH: "Кухни: восточная, европейская, кавказская", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restADRES: "Тимирязева, 32в", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/versailles_restaurant.kz/", rest2GIS: "https://go.2gis.com/2melht"},
{id: 209, restNAME: "Форт Горный", restIMG: "https://thumb.tildacdn.com/tild6337-3230-4732-b766-663032356239/-/resize/560x/-/format/webp/fort_vernyi_11582092.jpg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: европейская, корейская", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restADRES: "Хан-Тенгри микрорайон, 197", restSector:"Бостандыкский", restINSTA: "https://www.instagram.com/fort_vernyi/", rest2GIS: "https://go.2gis.com/nmsbp"},
{id: 210, restNAME: "Dolcetto", restIMG: "https://thumb.tildacdn.com/tild3766-6239-4937-b131-373030333632/-/resize/560x/-/format/webp/dolcettoalmaty_11812.jpg", restPRICE: "Средний чек: 5000–7500 тенге", restKITCH: "Кухни: итальянская, европейская ", restTIME: "Время работы: 10:00 до 01:00", restTimeOpen: "10:00", restTimeClose: "01:00", restADRES: "Кунаева, 114", restSector:"Медеуский", restINSTA: "https://www.instagram.com/dolcetto.almaty/", rest2GIS: "https://go.2gis.com/1x5eb"},

{id: 300, restNAME: "Эрмитаж", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: грузинская, европейская", restADRES: "ул. Жансугурова, 251", restSector:"Турксибский", rest2GIS: "https://go.2gis.com/9cn52", restINSTA: "https://www.instagram.com/cafe_hermitage.almaty/", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restIMG: "https://thumb.tildacdn.com/tild3331-6266-4462-b539-346231383134/-/format/webp/photo_2020-09-01_212.jpeg"},
{id: 301, restNAME: "Жайсан", restPRICE: "Средний чек: 1000 тенге", restKITCH: "Кухни: дунганская", restADRES: "ул. Гоголя, 151", restSector:"Алмалинский", rest2GIS: "https://go.2gis.com/979ni", restINSTA: "", restTIME: "Время работы: 09:00 до 22:00", restTimeOpen: "09:00", restTimeClose: "22:00", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png"},
{id: 302, restNAME: "Алые паруса", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: японская, паназиатская", restADRES: "пр. Сейфуллина, 617", restSector:"Бостандыкский", rest2GIS: "https://go.2gis.com/y71n3", restINSTA: "https://www.instagram.com/alyeparusaa/", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restIMG: "https://thumb.tildacdn.com/tild3837-6362-4637-b330-333139653764/-/format/webp/photo_2020-09-02_165.jpeg"},
{id: 303, restNAME: "Alberto", restPRICE: "Средний чек: 3000–4000 тенге", restKITCH: "Кухни: восточная, европейская", restADRES: "ул. Гоголя, 144", restSector:"Алмалинский", rest2GIS: "https://go.2gis.com/l5lk2m", restINSTA: "https://www.instagram.com/albertokz/", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restIMG: "https://thumb.tildacdn.com/tild6162-6537-4537-b435-353163316262/-/resize/560x/-/format/webp/photo_2020-09-03_150.jpeg"},
{id: 304, restNAME: "Pizza Grill", restPRICE: "Средний чек: 600–2000 тенге", restKITCH: "Кухни: европейская, итальянская", restADRES: "пр. Абая, 141/112", restSector:"Алмалинский", rest2GIS: "https://go.2gis.com/obc8o", restINSTA: "https://www.instagram.com/pizzagrill.kz/", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restIMG: "https://thumb.tildacdn.com/tild3461-3864-4631-b766-663031613139/-/format/webp/photo_2020-09-03_150.jpeg"},
{id: 305, restNAME: "Факир", restPRICE: "Средний чек: 3000 тенге", restKITCH: "Кухни: восточная, европейская, китайская", restADRES: "ул. Калдаякова, 17", restSector:"Медеуский", rest2GIS: "https://go.2gis.com/6ivhn8", restINSTA: "https://www.instagram.com/fakir_almaty/", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png"},
{id: 306, restNAME: "Кабачок Горыныч", restPRICE: "Средний чек: 3500–7000 тенге", restKITCH: "Кухни: европейская, русская", restADRES: "пр. Гагарина, 298 А", restSector:"Бостандыкский", rest2GIS: "https://go.2gis.com/i018g", restINSTA: "https://www.instagram.com/kabachok_gorinich_official/", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restIMG: "https://thumb.tildacdn.com/tild6237-6166-4434-a161-333136633037/-/format/webp/photo_2020-09-03_151.jpeg"},
{id: 307, restNAME: "Tushuri", restPRICE: "Средний чек: 3000–4500 тенге", restKITCH: "Кухни: грузинская, европейская", restADRES: "ул. Жансугурова, 327", restSector:"Турксибский", rest2GIS: "https://go.2gis.com/idr1g", restINSTA: "https://www.instagram.com/cafe_tushuri_almaty/", restTIME: "Время работы: 10:00 до 02:00", restTimeOpen: "10:00", restTimeClose: "02:00", restIMG: "https://thumb.tildacdn.com/tild3733-3163-4362-b634-336231633435/-/resize/560x/-/format/webp/photo_2020-09-03_160.jpeg"},
{id: 308, restNAME: "Иверия", restPRICE: "Средний чек: 3000–6000 тенге", restKITCH: "Кухни: грузинская, европейская, восточная", restADRES: "пр. Райымбека, 357", restSector:"Алатауский", rest2GIS: "https://go.2gis.com/ah33b", restINSTA: "", restTIME: "Время работы: 10:00 до 02:00", restTimeOpen: "10:00", restTimeClose: "02:00", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png"},
{id: 309, restNAME: "Riksos", restPRICE: "Средний чек: 3000–4500 тенге", restKITCH: "Кухни: восточная, грузинская, европейская", restADRES: "ул. Бекмаханова, 37 А", restSector:"Турксибский", rest2GIS: "https://go.2gis.com/qnkr8", restINSTA: "", restTIME: "Время работы: 10:00 до 23:00", restTimeOpen: "10:00", restTimeClose: "23:00", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png"},
{id: 310, restNAME: "Ориент", restPRICE: "Средний чек: 4000–6000 тенге", restKITCH: "Кухни: турецкая", restADRES: "ул. Маметова, 67 А", restSector:"Алмалинский", rest2GIS: "https://go.2gis.com/j8724", restINSTA: "https://www.instagram.com/restaurant_orient/", restTIME: "Время работы: 09:00 до 00:00", restTimeOpen: "09:00", restTimeClose: "00:00", restIMG: "https://thumb.tildacdn.com/tild6162-3862-4933-b631-326134383539/-/format/webp/photo_2020-09-03_161.jpeg"},
{id: 311, restNAME: "Оргилай", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: уйгурская, европейская", restADRES: "ул. Шакарима, 12", restSector:"Алмалинский", rest2GIS: "https://go.2gis.com/77ks7", restINSTA: "https://www.instagram.com/orgilay.almaty/", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restIMG: "https://thumb.tildacdn.com/tild3634-3332-4463-a462-373832616133/-/format/webp/photo_2020-09-03_161.jpeg"},
{id: 312, restNAME: "ЁН Ван", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: корейская, европейская", restADRES: "ул. Брусиловского, 168", restSector:"Алмалинский", rest2GIS: "https://go.2gis.com/izj3d", restINSTA: "", restTIME: "Время работы: 10:00 до 00:00", restTimeOpen: "10:00", restTimeClose: "00:00", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png"},
{id: 313, restNAME: "Контур", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская", restADRES: "мкр. Аксай 2, 16 А", restSector:"Ауэзовский", rest2GIS: "https://go.2gis.com/v0a4h", restINSTA: "https://www.instagram.com/kafekontur/", restTIME: "Время работы: 12:00 до 23:00", restTimeOpen: "12:00", restTimeClose: "23:00", restIMG: "https://thumb.tildacdn.com/tild3061-3436-4463-a639-373366616332/-/format/webp/photo_2020-09-03_215.jpeg"},
{id: 314, restNAME: "Хачапури Хинкальевич", restPRICE: "Средний чек: 3000–4000 тенге", restKITCH: "Кухни: грузинская", restADRES: "ул. Кабанбай батыра, 68/51", restSector:"Медеуский", rest2GIS: "https://go.2gis.com/87791s", restINSTA: "https://www.instagram.com/hachapuri_hinkalevich/", restTIME: "Время работы: 12:00 до 22:00", restTimeOpen: "12:00", restTimeClose: "22:00", restIMG: "https://thumb.tildacdn.com/tild6236-6463-4136-b430-376366646532/-/format/webp/photo_2020-09-03_220.jpeg"},
{id: 315, restNAME: "Арагви", restPRICE: "Средний чек: 4000–7000 тенге", restKITCH: "Кухни: грузинская, европейская, кавказская, казахская", restADRES: "пр. Райымбека, 309", restSector:"Алатауский", rest2GIS: "https://go.2gis.com/g9met", restINSTA: "https://www.instagram.com/cafe_aragvi_/", restTIME: "Время работы: 10:00 до 02:00", restTimeOpen: "10:00", restTimeClose: "02:00", restIMG: "https://thumb.tildacdn.com/tild6233-3435-4437-a562-643962356564/-/format/webp/photo_2020-09-03_220.jpeg"},
{id: 316, restNAME: "Feast", restPRICE: "Средний чек: 1200–2000 тенге", restKITCH: "Кухни: европейская, восточная", restADRES: "пр. Республики, 13", restSector:"Бостандыкский", rest2GIS: "https://go.2gis.com/l45dj", restINSTA: "https://www.instagram.com/cafefeast/", restTIME: "Время работы: 08:30 до 17:00", restTimeOpen: "08:30", restTimeClose: "17:00", restIMG: "https://thumb.tildacdn.com/tild6663-6230-4339-b761-656330663735/-/format/webp/photo_2020-09-03_220.jpeg"},
{id: 317, restNAME: "Кахети", restPRICE: "Средний чек: 2500–5000 тенге", restKITCH: "Кухни: грузинская, европейская", restADRES: "ул. Кудерина, 29", restSector:"Бостандыкский", rest2GIS: "https://go.2gis.com/h8f6u", restINSTA: "https://www.instagram.com/cafe_kaheti_almaty/", restTIME: "Время работы: 11:00 до 23:00", restTimeOpen: "11:00", restTimeClose: "23:00", restIMG: "https://thumb.tildacdn.com/tild6439-6134-4564-a339-636331393334/-/format/webp/photo_2020-09-03_221.jpeg"},
{id: 318, restNAME: "Лагман Хан", restPRICE: "Средний чек: 800–1500 тенге", restKITCH: "Кухни: восточная, китайская, восточно-европейская, итальянская, японская", restADRES: "ул. Макатаева, 73/60", restSector:"Алмалинский", rest2GIS: "https://go.2gis.com/t47bt", restINSTA: "https://www.instagram.com/lagman_khan/", restTIME: "Время работы: 09:00 до 00:00", restTimeOpen: "09:00", restTimeClose: "00:00", restIMG: "https://thumb.tildacdn.com/tild6436-3364-4066-a466-626238656531/-/format/webp/photo_2020-09-03_221.jpeg"},
{id: 319, restNAME: "ANDALUS", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: восточная", restADRES: "ул. Толе би, 285 В/2", restSector:"Ауэзовский", rest2GIS: "https://go.2gis.com/swvdur", restINSTA: "https://www.instagram.com/andalus_chaihana/", restTIME: "Время работы: 10:00 до 20:00", restTimeOpen: "10:00", restTimeClose: "20:00", restIMG: "https://thumb.tildacdn.com/tild3331-6133-4232-a435-316163336463/-/format/webp/photo_2020-09-03_221.jpeg"},
{id: 320, restNAME: "Пельмень", restPRICE: "Средний чек: 3000–10000 тенге", restKITCH: "Кухни: русская, казахская, восточно-европейская, итальянская, американская", restADRES: "ул. Аскарова, 8 ЖК Apple Town", restSector:"Ауэзовский", rest2GIS: "https://go.2gis.com/6udwo", restINSTA: "https://www.instagram.com/pelmen_cafe/", restTIME: "Время работы: 09:00 до 23:00", restTimeOpen: "09:00", restTimeClose: "23:00", restIMG: "https://thumb.tildacdn.com/tild3562-6639-4965-b763-373837373833/-/format/webp/photo_2020-09-03_221.jpeg"},
{id: 321, restNAME: "Bugs Bunny", restPRICE: "Средний чек: 2500–5000 тенге", restKITCH: "Кухни: американская, европейская, восточная", restADRES: "мкр. Айнабулак 2, 97", restSector:"Жетысуский", rest2GIS: "https://go.2gis.com/a4t1x7", restINSTA: "https://www.instagram.com/cafe_bugs_bunny/", restTIME: "Время работы: 10:00 до 22:00", restTimeOpen: "10:00", restTimeClose: "22:00", restIMG: "https://thumb.tildacdn.com/tild3862-3362-4365-b763-626632346165/-/format/webp/photo_2020-09-03_222.jpeg"},

]

//ссылка на логотип дамди https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png




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


/*allRESTARANS.forEach((element) => {
    if (allRESTARANS.restSector == "Ауэзовский"){
        console.log(element)
        SectorAUE.push(element);
    }
})*/

let restID = 0;

function createSectorAUE(){
    let allRESTARANS_length = allRESTARANS.length;
    while(restID<allRESTARANS_length){
        let restNOW = allRESTARANS[restID];
        /*console.log(restNOW)*/
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


//Читаем форму - TO DO
//make SectorValue

/*function setSectorValue(){

    const form = document.forms.SectorForm; 

    console.log(form)
    let SectorSelector;

    /*
    getSectorValue();
    newSectorValue();

    form.oninput = () => {
        getSectorValue();
        newSectorValue();
    }

    function getSectorValue(){
        SectorSelector = form.sector_s.value;
    }

    function newSectorValue(){
        let SectorValue = SectorSelector;
    }
}

setSectorValue();*/

let SectorValue = "all";

function changeSector(){
    let form = document.forms.SectorForm;

    SectorValue = form.sector_s.value;

    console.log(SectorValue)
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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)

    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    //console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    //console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    //console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    //console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
    //console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;

    let button_INSTA_link = document.getElementById('rest_insta_text');
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    //console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    //console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    //console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
    
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
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let new_rest_sector = randomELEMENT.restSector;
    console.log(new_rest_sector)
    
    let rest_title = document.getElementById('rest_name');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price_text');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch_text');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time_text');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adres_text');
    let new_rest_adress = randomELEMENT.restADRES;
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
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";

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

    let button_2GIS_link = document.getElementById('rest_adres_text');
    let new_button_2GIS_link = last_rest.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = last_rest.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = new_rest_img;

    last_all_rest.pop();
};
