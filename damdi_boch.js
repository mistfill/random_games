console.log('Start')

let allRESTARANS = [{id: 1, restNAME: "Gold", restIMG: "https://thumb.tildacdn.com/tild3032-3861-4935-a332-383566353361/-/format/webp/gold.jpg", restPRICE: "Средний чек: 1500-3500тг", restKITCH: "Кухни: паназиатская, американская, европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "Мкр. Жетысу 2 дом 11", restINSTA: "https://www.instagram.com/cafegold_kz/", rest2GIS: "https://go.2gis.com/qo6gme"},
{id: 2, restNAME: "BubbleGum", restIMG: "https://thumb.tildacdn.com/tild3338-6461-4335-b665-316133333730/-/format/webp/BubbleGum.jpg", restPRICE: "Средний чек: 4000–7000тг", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ПерекуCity Mixx 3 этаж, ул. Шевченко, 99, уг. ул. Байтурсынова", restINSTA: "https://www.instagram.com/bubblegum_cafe/", rest2GIS: "https://go.2gis.com/t8fxh"},
{id: 3, restNAME: "Чачапури", restIMG: "https://thumb.tildacdn.com/tild3633-3234-4532-b166-303337363730/-/format/webp/photo.jpeg", restPRICE: "Средний чек: 3500–5000тг", restKITCH: "Кухни: европейская, грузинская, восточная, кавказская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "Богенбай батыра уг. ул.Кастеева", restINSTA: "https://www.instagram.com/chachapuri_almaty/", rest2GIS: "https://go.2gis.com/dp13r"},
{id: 4, restNAME: "BAYSAN", restIMG: "https://static.tildacdn.com/tild6330-3534-4631-a439-396434336138/photo_2020-08-20_142.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 09:00-23:00", restADRES: "ул. Тургут Озала, 249 А", restINSTA: "https://www.instagram.com/baysankz/", rest2GIS: "https://go.2gis.com/bvbypc"},
{id: 5, restNAME: "Малибу", restIMG: "https://static.tildacdn.com/tild6236-6432-4934-b932-366330313735/photo_2020-08-20_142.jpeg", restPRICE: "Средний чек: 5000–8000 тенге", restKITCH: "Кухни: европейская, кавказская, казахская", restTIME: "Время работы: 12:00-22:00", restADRES: "мкр. Хан Тенгри, 149 А", restINSTA: "https://www.instagram.com/kafe__malibu/", rest2GIS: "https://go.2gis.com/hgxij"},
{id: 6, restNAME: "Хомяк", restIMG: "https://static.tildacdn.com/tild3662-3830-4534-a533-373438663531/photo_2020-08-20_143.jpeg", restPRICE: "Средний чек: 3000–7000 тенге", restKITCH: "Кухни: европейская, итальянская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "бульвар Бухар Жырау, 27/5", restINSTA: "https://www.instagram.com/cafehoma.almaty/", rest2GIS: "https://go.2gis.com/cd0wn"},
{id: 7, restNAME: "Мариям", restIMG: "https://static.tildacdn.com/tild3766-3561-4637-a163-613633356261/BKWGOWMYiJE.jpg", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: восточная, европейская, казахская", restTIME: "Уточняйте время работы по телефону: +7(707)350-50-31", restADRES: "ул. Ауэзова, 3 Г", restINSTA: "https://vk.com/kafe_bar_mariyam", rest2GIS: "https://go.2gis.com/vkmk5"},
{id: 8, restNAME: "Форт Верный", restIMG: "https://static.tildacdn.com/tild3662-3737-4464-b035-336266353938/__2020-08-20__144539.png", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная, европейская, русская, японская, китайская, казахская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Толе би, 179 А / 22, уг. ул. Ауэзова", restINSTA: "https://www.instagram.com/fort_vernyi/", rest2GIS: "https://go.2gis.com/b8y472"},
{id: 9, restNAME: "ZAFFERANO", restIMG: "https://static.tildacdn.com/tild6336-3736-4365-a162-333737373130/photo_2020-08-20_145.jpeg", restPRICE: "Средний чек: 3000–6000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "ул. Ислама Каримова 2, (бывш. Гайдара), уг. пр. Райымбека", restINSTA: "https://www.instagram.com/zafferano2019/", rest2GIS: "https://go.2gis.com/yzdz0"},
{id: 10, restNAME: "Veranda", restIMG: "https://static.tildacdn.com/tild6234-3034-4232-a535-333635303466/__2020-08-20__145707.png", restPRICE: "Средний чек: 3000–6000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская, казахская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "ул. Акан серi, 75", restINSTA: "https://www.instagram.com/simfonia__holl/", rest2GIS: "https://go.2gis.com/6no0b"},
{id: 11, restNAME: "Qarlygash", restIMG: "https://static.tildacdn.com/tild3362-3535-4739-a239-333037366135/photo_2020-08-20_150.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, казахская", restTIME: "Время работы: 12:00 до 22:00", restADRES: "пр. Назарбаева, 145", restINSTA: "https://www.instagram.com/qarlygash_cafe/", rest2GIS: "https://go.2gis.com/jhesm"},
{id: 12, restNAME: "China", restIMG: "https://static.tildacdn.com/tild3062-6632-4535-b930-393835653335/photo_2020-08-20_150.jpeg", restPRICE: "Средний чек: 3000–7000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "пр. Абая, 89", restINSTA: "https://www.instagram.com/chinacafe_kz/", rest2GIS: "https://go.2gis.com/59ehd"},
{id: 13, restNAME: "Gardizi", restIMG: "https://static.tildacdn.com/tild3830-3334-4934-b063-333461326338/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, грузинская", restTIME: "Время работы: 12:00 до 01:00", restADRES: "мкр. Кокжиек, 53/1", restINSTA: "https://www.instagram.com/gardizi.kz/", rest2GIS: "https://go.2gis.com/fk3om"},
{id: 14, restNAME: "Ходжа", restIMG: "https://static.tildacdn.com/tild3038-3935-4233-b635-336166333134/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 10:00 до 24:00", restADRES: "ул. Луганского, 54/4", restINSTA: "https://www.instagram.com/hodzha54/", rest2GIS: "https://go.2gis.com/igenh"},
{id: 15, restNAME: "Думан", restIMG: "https://static.tildacdn.com/tild6238-6432-4839-b236-353433643232/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы уточняйте по телефону +7(727)238-46-79", restADRES: "мкр. Жетысу 2, 9 А", restINSTA: "https://www.instagram.com/restaurantduman/", rest2GIS: "https://go.2gis.com/az4w3"},
{id: 16, restNAME: "Улы Тау", restIMG: "https://static.tildacdn.com/tild6135-3531-4666-b761-616339326135/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 4000–10000 тенге", restKITCH: "Кухни: восточная, европейская, кавказская, казахская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Дулати, 15", restINSTA: "https://www.instagram.com/uly_tau_restaurant/", rest2GIS: "https://go.2gis.com/ld6tvr"},
{id: 17, restNAME: "Огни Алатау", restIMG: "https://static.tildacdn.com/tild3331-3831-4965-a662-613838613962/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, казахская, корейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "мкр. Калкаман 2, ул. Ашимова 239, уг. ул. Шаляпина", restINSTA: "https://www.instagram.com/restoran_ogni_alatau/", rest2GIS: "https://go.2gis.com/k92la"},
{id: 18, restNAME: "Марс", restIMG: "https://static.tildacdn.com/tild6136-6262-4237-b132-643163663462/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: восточная, грузинская, европейская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "ул. Розыбакиева, 135", restINSTA: "https://www.instagram.com/kafemars/", rest2GIS: "https://go.2gis.com/p3a8s4"},
{id: 19, restNAME: "АкДана", restIMG: "https://static.tildacdn.com/tild3039-3463-4231-a239-396231306330/photo_2020-08-20_153.jpeg", restPRICE: "Средний чек: 4000–5000 тенге", restKITCH: "Кухни: восточная, европейская, казахская, узбекская", restTIME: "Время работы: 08:00 до 21:00", restADRES: "пр. Абылай хана 81", restINSTA: "https://www.instagram.com/akdana.cafe/", rest2GIS: "https://go.2gis.com/rnfvy"},
{id: 20, restNAME: "ПЯТНИЦА", restIMG: "https://static.tildacdn.com/tild3531-3431-4639-b265-306338646430/photo_2020-08-20_153.jpeg", restPRICE: "Средний чек: 6000–8000 тенге", restKITCH: "Кухни: грузинская, европейская, итальянская, японская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "пр. Гагарина, 92, уг. ул. Курмангазы", restINSTA: "https://www.instagram.com/pyatnicacafe.kz/", rest2GIS: "https://go.2gis.com/9virdc"},
{id: 21, restNAME: "Orient Park Atakent", restIMG: "https://static.tildacdn.com/tild6630-3336-4565-a538-613137663932/photo_2020-08-21_144.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная, китайская, европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Тимирязева, 42, к 5, уг. ул. Ауэзова", restINSTA: "https://www.instagram.com/orient_park_atakent/", rest2GIS: "https://go.2gis.com/ra5qi"},
{id: 22, restNAME: "Темир Тау", restIMG: "https://static.tildacdn.com/tild6630-3336-4565-a538-613137663932/photo_2020-08-21_144.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: восточная, европейская, казахская", restTIME: "Время работы уточняйте по телефону +7(707)878-68-52", restADRES: "пр. Гагарина, 236 Б, уг. ул. Березовского", restINSTA: "", rest2GIS: "https://go.2gis.com/xs0ft"},
{id: 23, restNAME: "Grand Osteria", restIMG: "https://static.tildacdn.com/tild3663-3138-4363-a636-636631393263/photo_2020-08-21_152.jpeg", restPRICE: " ", restKITCH: "Кухни: европейская", restTIME: "Время работы уточняйте по телефону +7(775)972-22-39", restADRES: "мкр. Аксай 4, 18 А", restINSTA: "https://www.instagram.com/grand.osteria.karaoke/", rest2GIS: "https://go.2gis.com/sxnju"},
{id: 24, restNAME: "Resident City Hotel", restIMG: "https://static.tildacdn.com/tild3665-3734-4364-a638-653535393333/photo_2020-08-21_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: восточная, казахская", restTIME: "Время работы уточняйте по телефону +7(727)339-22-99", restADRES: "ул. Желтоксан, 23", restINSTA: "https://www.instagram.com/resident_city_hotel/", rest2GIS: "https://go.2gis.com/ibj1h"},
{id: 25, restNAME: "Night Star", restIMG: "https://static.tildacdn.com/tild3037-6533-4461-a362-636563616266/photo_2020-08-21_154.jpeg", restPRICE: "Средний чек: 4000–6000 тенге", restKITCH: "Кухни: кавказская, грузинская, европейская, казахская", restTIME: "Время работы: 10:30 до 23:00", restADRES: "ул. Шагабутдинова, 129, уг. ул. Джамбула", restINSTA: "https://www.instagram.com/nightstar_cafe/", rest2GIS: "https://go.2gis.com/dqz0f"},
{id: 26, restNAME: "Малина Mix", restIMG: "https://static.tildacdn.com/tild3962-3337-4337-b336-653365666238/photo_2020-08-21_154.jpeg", restPRICE: "Средний чек: 5000–6000 тенге", restKITCH: "Кухни: европейская, авторская, азиатская, итальянская, паназиатская, японская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Габдуллина, 72, уг. ул. Байзакова", restINSTA: "https://www.instagram.com/cafemalinamix/", rest2GIS: "https://go.2gis.com/croc6"},
{id: 27, restNAME: "ПУШКИН", restIMG: "https://static.tildacdn.com/tild6230-6363-4664-b965-323131653466/photo_2020-08-21_155.jpeg", restPRICE: "Средний чек: 5000–6000 тенге", restKITCH: "Кухни: русская, европейская, авторская, итальянская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "пр. Абая, 17, уг. ул. Валиханова", restINSTA: "https://www.instagram.com/pushkin_cafe/", rest2GIS: "https://go.2gis.com/v2s1i"},
{id: 28, restNAME: "Алатау по Байзакова", restIMG: "https://static.tildacdn.com/tild3331-3565-4537-b634-306462626234/photo_2020-08-21_155.jpeg", restPRICE: "Средний чек: 6000–10000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Байзакова, 134, уг. ул Толе би", restINSTA: "https://www.instagram.com/alatau_ajk/", rest2GIS: "https://go.2gis.com/6ccl4"},
{id: 29, restNAME: "Тамада", restIMG: "https://static.tildacdn.com/tild6432-6463-4031-b931-613162376263/photo_2020-08-21_162.jpeg", restPRICE: "Средний чек: 6500–8000 тенге", restKITCH: "Кухни: грузинская, европейская, кавказская, казахская, восточная", restTIME: "Время работы: 11:00 до 23:00", restADRES: "пр. Гагарина, 6, уг. ул. Толе би", restINSTA: "https://www.instagram.com/cafe_tamada/", rest2GIS: "https://go.2gis.com/uufcw"},
{id: 30, restNAME: "Лето", restIMG: "https://static.tildacdn.com/tild6463-6564-4261-b332-336464613065/photo_2020-08-21_162.jpeg", restPRICE: "Средний чек: 4000–6000 тенге", restKITCH: "Кухни: европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "5 мкр, 21 Г", restINSTA: "https://www.instagram.com/letovalmaty/", rest2GIS: "https://go.2gis.com/p8zz3"},
{id: 41, restNAME: "Gold", restIMG: "https://thumb.tildacdn.com/tild3032-3861-4935-a332-383566353361/-/format/webp/gold.jpg", restPRICE: "Средний чек: 1500-3500тг", restKITCH: "Кухни: паназиатская, американская, европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "Мкр. Жетысу 2 дом 11", restINSTA: "https://www.instagram.com/cafegold_kz/", rest2GIS: "https://go.2gis.com/qo6gme"},
{id: 42, restNAME: "Сакварели", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 5000–10000тг", restKITCH: "Кухни: грузинская, европейская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "ул. Муканова, 210, уг. ул. Жамбыла", restINSTA: "https://instagram.com/sacvareli", rest2GIS: "https://go.2gis.com/peb0b"},
{id: 43, restNAME: "Восточный двор", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 1500–3000тг", restKITCH: "Кухни: восточно-европейская, грузинская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "Мкр. Баянаул, 35", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/qcg2u"},
{id: 44, restNAME: "Султан", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–6000тг", restKITCH: "Кухни: узбекская, восточно-европейская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "ул. Универсиадная, 6/1", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/4v4bc"},
{id: 45, restNAME: "Shipudim на Толе би", restIMG: "В гугле", restPRICE: "Средний чек: 1000–3000тг", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "ул. Толе би, 226, уг. ул. Аносова", restINSTA: "https://www.instagram.com/shipudim/", rest2GIS: "https://go.2gis.com/rbhrr"},
{id: 46, restNAME: "Shipudim на Желтоксан", restIMG: "В гугле", restPRICE: "Средний чек: 2000–3500тг", restKITCH: "Кухни: восточная, европейская, грузинская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "пр. Желтоксан, 81, уг. ул. Гоголя", restINSTA: "https://www.instagram.com/shipudim/", rest2GIS: "https://go.2gis.com/clg8u"},
{id: 47, restNAME: "Тандем", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 2000–5000тг", restKITCH: "Кухни: восточная, европейская, китайская", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ул. Жансугурова, 79", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/6tdn3"},
{id: 48, restNAME: "Alina", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–7000тг", restKITCH: "Кухни: восточная, европейская, кавказская, казахская", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ул. Панфилова, 154, уг. ул. Курмангазы", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/6fyz4"},
{id: 49, restNAME: "Shafran на Акан Серы", restIMG: "В гугле", restPRICE: "Средний чек: 2000–3500тг", restKITCH: "Кухни: восточно-европейская, грузинская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "ул. Акан Серы, 51/86", restINSTA: "https://www.instagram.com/cafe__shafran/", rest2GIS: "https://go.2gis.com/im4g2"},
{id: 50, restNAME: "MANTOVARKA", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 2000–3000тг", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "ул. Досмухамедова, 2, уг. ул. Макатаева", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "ОТСУТСТВУЕТ. Такого адреса нет, а те что совпадают показывают другие рестораны"},
{id: 51, restNAME: "Bon Appetit на Тимирязева", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 1000–2000тг", restKITCH: "Кухни: азиатская, европейская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "ул. Тимирязева, 19", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/ht8pp"},
{id: 52, restNAME: "McDonald's® «Алатау»", restIMG: "ОТСУТСТВУЕТ (я не уверен можно ли брать тупо любую пикчу мака с инета", restPRICE: "Средний чек: 1500–2000тг", restKITCH: "Кухни: американская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "ул. Толе би, 41, уг. ул. Кунаева", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/77xtg"},
{id: 53, restNAME: "Маида", restIMG: "В гугле", restPRICE: "Средний чек: 1500–3000тг", restKITCH: "Кухни: восточная, европейская, корейская, уйгурская, казахская", restTIME: "Время работы: 08:00 до 00:00", restADRES: "ул. Фурката, 67 А", restINSTA: "https://www.instagram.com/maida_almaty/", rest2GIS: "https://go.2gis.com/aflp3"},
{id: 54, restNAME: "Хачапури Хинкальевич", restIMG: "В гугле", restPRICE: "Средний чек: 3000–4000тг", restKITCH: "Кухни: грузинская", restTIME: "Время работы: 12:00 до 22:00", restADRES: "ул. Кабанбай батыра, 68/51, уг. ул. Зенкова", restINSTA: "https://www.instagram.com/hachapuri_hinkalevich/", rest2GIS: "https://go.2gis.com/u86t2"},
{id: 55, restNAME: "Kim Chi", restIMG: "В гугле", restPRICE: "Средний чек: 2000–4000тг", restKITCH: "Кухни: корейская, японская", restTIME: "Время работы: 12:00 до 22:00", restADRES: "мкр. Орбита 2, 6", restINSTA: "https://www.instagram.com/kimchi.almaty/", rest2GIS: "https://go.2gis.com/2i9sn"},
{id: 56, restNAME: "Senseasia", restIMG: "В гугле", restPRICE: "Средний чек: 3000–5000тг", restKITCH: "Кухни: грузинская, европейская", restTIME: "Время работы: 12:00 до 02:00", restADRES: "пр. Сейфуллина, 136 А, уг. ул. Варшавская", restINSTA: "https://www.instagram.com/senseasia.kz/", rest2GIS: "https://go.2gis.com/7irgni"},
{id: 57, restNAME: "Monroe", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 5000–10000тг", restKITCH: "Кухни: европейская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "пр. Сейфуллина, 136 А, уг. ул. Варшавская", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/8gp6z"},
{id: 58, restNAME: "Место встречи", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3500–6000тг", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Жансугурова, 271, уг. ул. Артиллерийская", restINSTA: "https://instagram.com/mesto.vstrechi", rest2GIS: "https://go.2gis.com/56qi2r"},
{id: 59, restNAME: "Manga Sushi по Абылай хана", restIMG: "В гугле", restPRICE: "Средний чек: 3000–5000тг", restKITCH: "Кухни: японская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "пр. Абылай хана, 94, уг. ул. Кабанбай батыра", restINSTA: "https://www.instagram.com/mangakz/", rest2GIS: "https://go.2gis.com/x0n1g"},
{id: 60, restNAME: "Малина Mix", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 5000–6000тг", restKITCH: "Кухни: европейская, авторская, азиатская, итальянская, паназиатская, японская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Габдуллина, 72, уг. ул. Байзакова", restINSTA: "https://www.instagram.com/cafemalinamixmail.ru/", rest2GIS: "https://go.2gis.com/36z06"},
{id: 61, restNAME: "Кабачок Горыныч", restIMG: "В гугле", restPRICE: "Средний чек: 3500–7000тг", restKITCH: "Кухни: европейская, русская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "пр. Гагарина, 298 А", restINSTA: "https://www.instagram.com/kabachok_gorinich_official/", rest2GIS: "https://go.2gis.com/7273m"},
{id: 62, restNAME: "Imereti", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 2000–5000тг", restKITCH: "Кухни: грузинская, казахская, восточная, европейская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "ул. ​Акан Серы, 44", restINSTA: "ОТСУТСВТУЕТ", rest2GIS: "https://go.2gis.com/ruw3uf"},
{id: 63, restNAME: "Pinseria Esentai City", restIMG: "В гугле", restPRICE: "Средний чек: 6000–10000тг", restKITCH: "Кухни: итальянская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "пр. Аль-Фараби, 116/21", restINSTA: "https://www.instagram.com/parmigiano_group/", rest2GIS: "https://go.2gis.com/71s1p"},
{id: 64, restNAME: "Govinda’s", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 1500–5000тг", restKITCH: "Кухни: вегетарианская", restTIME: "Время работы: 12:00 до 20:00", restADRES: "пр. Абылай хана, 39", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/pew1x"},
{id: 65, restNAME: "Geronimo", restIMG: "В гугле", restPRICE: "Средний чек: 2500–3000тг", restKITCH: "Кухни: итальянская", restTIME: "Время работы: 18:00 до 23:00", restADRES: "ул. Жамакаева , 175", restINSTA: "https://instagram.com/geronimo_lap", rest2GIS: "https://go.2gis.com/qy6op5"},
{id: 66, restNAME: "KurdЮk", restIMG: "В гугле", restPRICE: "Средний чек: 1500–3000тг", restKITCH: "Кухни: европейская, итальянская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Гоголя, 166, уг. ул. Муканова", restINSTA: "https://www.instagram.com/kurdyuk_almaty/", rest2GIS: "https://go.2gis.com/f2rvk"},
{id: 67, restNAME: "Аксакал", restIMG: "В гугле", restPRICE: "Средний чек: 1500–3000тг", restKITCH: "Кухни: восточная, европейская, китайская", restTIME: "Время работы: 10:00 до 00:00", restADRES: "ул. Каирбекова, 47", restINSTA: "https://instagram.com/aksakal.kz", rest2GIS: "https://go.2gis.com/moqbg"},
{id: 68, restNAME: "Достар на Жубанова", restIMG: "В гугле", restPRICE: "Средний чек: 1000–3000тг", restKITCH: "Кухни: китайская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Жубанова, 3 А", restINSTA: "https://instagram.com/dostar_kafeci", rest2GIS: "https://go.2gis.com/pqpoa"},
{id: 69, restNAME: "Кристалл", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 700–2000тг", restKITCH: "Кухни: китайская", restTIME: "Время работы: 10:00 до 03:00", restADRES: "пр. Райымбека, 279/1, уг. ул. Розыбакиева", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/a57o7"},
{id: 70, restNAME: "Carafe", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–4500тг", restKITCH: "Кухни: восточная, европейская, грузинская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "пр. Суюнбая, 220/2", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/6y0h64"},
{id: 71, restNAME: "Тет-а-тет", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–5000тг", restKITCH: "Кухни: грузинская, европейская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "уг. Геологов, 1 А", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/lkhz1"},
{id: 72, restNAME: "Лагманхана №1", restIMG: "В гугле", restPRICE: "Средний чек: 1000–1500тг", restKITCH: "Кухни: европейская, уйгурская, казахская, китайская", restTIME: "Время работы: 09:00 до 02:00", restADRES: "пр. Рыскулова, 149", restINSTA: "https://www.instagram.com/lagmanhana1/", rest2GIS: "https://go.2gis.com/2jk0f"},
{id: 73, restNAME: "Руставели", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 1500–3000тг", restKITCH: "Кухни: восточно-европейская, кавказская", restTIME: "Время работы: 10:00 до 01:00", restADRES: "ул. Ауэзова, 15/5, уг. ул. Богенбай батыра", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/knlkpd"},
{id: 74, restNAME: "Кухня", restIMG: "В гугле", restPRICE: "Средний чек: 1000–2000тг", restKITCH: "Кухни: европейская, азиатская", restTIME: "Время работы: 09:00 до 00:00", restADRES: "ул. ​Сатпаева, 90/21", restINSTA: "https://instagram.com/kuhnya_food_kz", rest2GIS: "https://go.2gis.com/k7k3i"},
{id: 75, restNAME: "Эрмитаж", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 5000–7000тг", restKITCH: "Кухни: грузинская, европейская", restTIME: "Время работы: 11:30 до 02:30", restADRES: "ул. Жансугурова, 251", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/zwsg6z"},
{id: 76, restNAME: "Зимний сад", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 6000–8000тг", restKITCH: "Кухни: европейская", restTIME: "Время работы: 12:00 до 01:00", restADRES: "ул. Тлендиева, 100, уг. ул. Карасай батыра", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/3igxu"},
{id: 77, restNAME: "Grand Cafe Delicat`L", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 5000–7000тг", restKITCH: "Кухни: европейская, фьюжн-кухня, итальянская, русская", restTIME: "Время работы: 08:00 до 01:00", restADRES: "ул. Панфилова, 114", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/ho31v"},
{id: 78, restNAME: "Kunjut", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–4000тг", restKITCH: "Кухни: европейская, паназиатская, восточная, грузинская", restTIME: "Время работы: 10:00 до 01:00", restADRES: "ул. Макатаева, 126", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/y8nvw"},
{id: 79, restNAME: "Визави", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–5000тг", restKITCH: "Кухни: европейская, восточная, кавказская, казахская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "ул. Тауелсиздик, 124 А", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/x49hw"},
{id: 80, restNAME: "Лагман Town", restIMG: "В гугле", restPRICE: "Средний чек: 1000–3000тг", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "мкр. Достык, ул. Есенова, 42, уг. ул. Яссауи", restINSTA: "https://instagram.com/lagman_town", rest2GIS: "https://go.2gis.com/sp5z7u"},
{id: 81, restNAME: "Веселидзе", restIMG: "В гугле", restPRICE: "Средний чек: 4000–8000тг", restKITCH: "Кухни: грузинская, европейская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "ул. Шевченко, 155 Б", restINSTA: "https://instagram.com/veselidze_kafe", rest2GIS: "https://go.2gis.com/1d1lh"},
{id: 82, restNAME: "Nedelka по Абая", restIMG: "В гугле", restPRICE: "Средний чек: 2000–5000тг", restKITCH: "Кухни: европейская", restTIME: "Время работы: 09:00 до 00:00", restADRES: "пр. Абая, 19, уг. ул. Валиханова", restINSTA: "https://instagram.com/cafenedelka", rest2GIS: "https://go.2gis.com/51okj"},
{id: 83, restNAME: "В Тандыре", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–5000тг", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 10:00 до 00:00", restADRES: "ул. Жетысуская, 24 А", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/krreiv"},
{id: 84, restNAME: "The Best", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 1500–5000тг", restKITCH: "Кухни: европейская, корейская, грузинская, восточная", restTIME: "Время работы: 10:00 до 00:00", restADRES: "ул. Розыбакиева, 92, уг. ул. Шевченко", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/ais3x"},
{id: 85, restNAME: "The Best", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 1500–5000тг", restKITCH: "Кухни: европейская, корейская, грузинская, восточная", restTIME: "Время работы: 10:00 до 00:00", restADRES: "ул. Розыбакиева, 92, уг. ул. Шевченко", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/ais3x"},
{id: 86, restNAME: "Ас-Казан на Муканова", restIMG: "В гугле", restPRICE: "Средний чек: 1500–5000тг", restKITCH: "Кухни: восточная, европейская, китайская", restTIME: "Время работы: 08:00 до 22:00", restADRES: "ул. Муканова, 138", restINSTA: "https://instagram.com/askazan.kz", rest2GIS: "https://go.2gis.com/j75bpp"},
{id: 87, restNAME: "Грузинский двор на Джандосова", restIMG: "В гугле", restPRICE: "Средний чек: 3000–5000тг", restKITCH: "Кухни: европейская, грузинская, азербайджанская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "ул. Джандосова, 27 Б", restINSTA: "https://instagram.com/gruzinskiy_dvor", rest2GIS: "https://go.2gis.com/b7om6"},
{id: 88, restNAME: "Ляззат", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 750–3000тг", restKITCH: "Кухни: уйгурская", restTIME: "Время работы: 10:00 до 22:00", restADRES: "мкр. Алмагуль, ул.Жарокова, 3 А, уг. ул. Водозаборной", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/m0lfb"},
{id: 89, restNAME: "Лагманхана на Розыбакиева", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 1000–1500тг", restKITCH: "Кухни: восточная", restTIME: "Время работы: 08:00 до 21:00", restADRES: "ул. Розыбакиева, 77/85, уг. ул. Сатпаева", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/uheuy"},
{id: 90, restNAME: "Пиала", restIMG: "ОТСУСТУЕТ", restPRICE: "Средний чек: 3000–5000тг", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 11:00 до 00:00", restADRES: "мкр. Жулдыз - 1, 26 Г", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/pal0ru"},
{id: 91, restNAME: "Bon Appetit на Тимирязева", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 1000–2000тг", restKITCH: "Кухни: азиатская, европейская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "ул. Тимирязева, 19", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/hslim"},
{id: 92, restNAME: "Лето", restIMG: "В гугле", restPRICE: "Средний чек: 4000–6000тг", restKITCH: "Кухни: европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "5 мкр, 21 Г", restINSTA: "https://instagram.com/letovalmaty", rest2GIS: "https://go.2gis.com/4vswqc"},
{id: 93, restNAME: "БАО на Назарбаева", restIMG: "В гугле", restPRICE: "Средний чек: 3000–6000тг", restKITCH: "Кухни: паназиатская", restTIME: "Время работы: 12:00 до 00:00", restADRES: "пр. Назарбаева, 77, уг. ул. Гоголя", restINSTA: "https://instagram.com/baoalmaty", rest2GIS: "https://go.2gis.com/d564p"},
{id: 94, restNAME: "Алые паруса в ТРЦ Grand Park", restIMG: "В гугле", restPRICE: "Средний чек: 1500–3000тг", restKITCH: "Кухни: японская", restTIME: "Время работы: 10:00 до 00:00", restADRES: "ул. Кабдолова, 1, в здании ТРЦ "Grand Park"", restINSTA: "https://instagram.com/alyeparusaa", rest2GIS: "https://go.2gis.com/vm8bs"},
{id: 95, restNAME: "Буханка", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 2000–5000тг", restKITCH: "Кухни: грузинская, европейская, кавказская", restTIME: "Время работы: 12:00 до 02:00", restADRES: "ул. Толе би, 200в", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/cumkv"},
{id: 96, restNAME: "Traders", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–10000тг", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "ул. Тимирязева, 42", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/62ona"},
{id: 97, restNAME: "Камелот", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 3000–5000тг", restKITCH: "Кухни: американская, европейская, мексиканская", restTIME: "Время работы: 11:00 до 00:00", restADRES: "бул. Бухар Жырау, 37", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/9pf105"},
{id: 98, restNAME: "Ас-Казан VIP на Барибаева", restIMG: "В гугле", restPRICE: "Средний чек: 1500–5000тг", restKITCH: "Кухни: восточная, европейская, китайская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Барибаева, 33", restINSTA: "https://instagram.com/askazan.kz", rest2GIS: "https://go.2gis.com/xb9eb"},
{id: 99, restNAME: "Шагала", restIMG: "ОТСУТСТВУЕТ", restPRICE: "Средний чек: 5000–10000тг", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "ул. Толе би, 184 А, уг. ул. Жарокова", restINSTA: "ОТСУТСТВУЕТ", rest2GIS: "https://go.2gis.com/sfqko"},
{id: 100, restNAME: "Шашлычок на Пастера", restIMG: "В гугле", restPRICE: "Средний чек: 2500–3500тг", restKITCH: "Кухни: кавказская", restTIME: "Время работы: 10:30 до 00:00", restADRES: "ул. Макатаева, 29", restINSTA: "https://www.instagram.com/smilealmaty/", rest2GIS: "https://go.2gis.com/2eusy"},
]

let last_all_rest = []

console.log('allRESTARANS connected')

//функция случайного результата
function getRandomElement(arr_rgd) {
    let randIndex_rgd = Math.floor(Math.random() * arr_rgd.length);
    return arr_rgd[randIndex_rgd];
}

function showNextREST(){
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
