console.log('Start')

let allRESTARANS = [{id: 1, restNAME: "Gold", restIMG: "https://thumb.tildacdn.com/tild3032-3861-4935-a332-383566353361/-/format/webp/gold.jpg", restPRICE: "Средний чек: 1500-3500тг", restKITCH: "Кухни: паназиатская, американская, европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "Мкр. Жетысу 2 дом 11", restINSTA: "https://www.instagram.com/cafegold_kz/", rest2GIS: "https://go.2gis.com/qo6gme"},
{id: 2, restNAME: "BubbleGum", restIMG: "https://thumb.tildacdn.com/tild3338-6461-4335-b665-316133333730/-/format/webp/BubbleGum.jpg", restPRICE: "Средний чек: 4000–7000тг", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ПерекуCity Mixx 3 этаж, ул. Шевченко, 99", restINSTA: "https://www.instagram.com/bubblegum_cafe/", rest2GIS: "https://go.2gis.com/t8fxh"},
{id: 3, restNAME: "Чачапури", restIMG: "https://thumb.tildacdn.com/tild3633-3234-4532-b166-303337363730/-/format/webp/photo.jpeg", restPRICE: "Средний чек: 3500–5000тг", restKITCH: "Кухни: европейская, грузинская, восточная, кавказская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "Богенбай батыра уг. ул.Кастеева", restINSTA: "https://www.instagram.com/chachapuri_almaty/", rest2GIS: "https://go.2gis.com/dp13r"},
{id: 4, restNAME: "BAYSAN", restIMG: "https://static.tildacdn.com/tild6330-3534-4631-a439-396434336138/photo_2020-08-20_142.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 09:00-23:00", restADRES: "ул. Тургут Озала, 249 А", restINSTA: "https://www.instagram.com/baysankz/", rest2GIS: "https://go.2gis.com/bvbypc"},
{id: 5, restNAME: "Малибу", restIMG: "https://static.tildacdn.com/tild6236-6432-4934-b932-366330313735/photo_2020-08-20_142.jpeg", restPRICE: "Средний чек: 5000–8000 тенге", restKITCH: "Кухни: европейская, кавказская, казахская", restTIME: "Время работы: 12:00-22:00", restADRES: "мкр. Хан Тенгри, 149 А", restINSTA: "https://www.instagram.com/kafe__malibu/", rest2GIS: "https://go.2gis.com/hgxij"},
{id: 6, restNAME: "Хомяк", restIMG: "https://static.tildacdn.com/tild3662-3830-4534-a533-373438663531/photo_2020-08-20_143.jpeg", restPRICE: "Средний чек: 3000–7000 тенге", restKITCH: "Кухни: европейская, итальянская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "бульвар Бухар Жырау, 27/5", restINSTA: "https://www.instagram.com/cafehoma.almaty/", rest2GIS: "https://go.2gis.com/cd0wn"},
{id: 7, restNAME: "Мариям", restIMG: "https://static.tildacdn.com/tild3766-3561-4637-a163-613633356261/BKWGOWMYiJE.jpg", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: восточная, европейская, казахская", restTIME: "Уточняйте время работы по телефону: +7(707)350-50-31", restADRES: "ул. Ауэзова, 3 Г", restINSTA: "https://vk.com/kafe_bar_mariyam", rest2GIS: "https://go.2gis.com/vkmk5"},
{id: 8, restNAME: "Форт Верный", restIMG: "https://static.tildacdn.com/tild3662-3737-4464-b035-336266353938/__2020-08-20__144539.png", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная, европейская, русская, японская, китайская, казахская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Толе би, 179 А / 22, уг. ул. Ауэзова", restINSTA: "https://www.instagram.com/fort_vernyi/", rest2GIS: "https://go.2gis.com/b8y472"},
{id: 9, restNAME: "ZAFFERANO", restIMG: "https://static.tildacdn.com/tild6336-3736-4365-a162-333737373130/photo_2020-08-20_145.jpeg", restPRICE: "Средний чек: 3000–6000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "ул. Ислама Каримова 2, (бывш. Гайдара)", restINSTA: "https://www.instagram.com/zafferano2019/", rest2GIS: "https://go.2gis.com/yzdz0"},
{id: 10, restNAME: "Veranda", restIMG: "https://static.tildacdn.com/tild6234-3034-4232-a535-333635303466/__2020-08-20__145707.png", restPRICE: "Средний чек: 3000–6000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская, казахская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "ул. Акан серi, 75", restINSTA: "https://www.instagram.com/simfonia__holl/", rest2GIS: "https://go.2gis.com/6no0b"},
{id: 11, restNAME: "Qarlygash", restIMG: "https://static.tildacdn.com/tild3362-3535-4739-a239-333037366135/photo_2020-08-20_150.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, казахская", restTIME: "Время работы: 12:00 до 22:00", restADRES: "пр. Назарбаева, 145", restINSTA: "https://www.instagram.com/qarlygash_cafe/", rest2GIS: "https://go.2gis.com/jhesm"},
{id: 12, restNAME: "China", restIMG: "https://static.tildacdn.com/tild3062-6632-4535-b930-393835653335/photo_2020-08-20_150.jpeg", restPRICE: "Средний чек: 3000–7000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "пр. Абая, 89", restINSTA: "https://www.instagram.com/chinacafe_kz/", rest2GIS: "https://go.2gis.com/59ehd"},
{id: 13, restNAME: "Gardizi", restIMG: "https://static.tildacdn.com/tild3830-3334-4934-b063-333461326338/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, грузинская", restTIME: "Время работы: 12:00 до 01:00", restADRES: "мкр. Кокжиек, 53/1", restINSTA: "https://www.instagram.com/gardizi.kz/", rest2GIS: "https://go.2gis.com/fk3om"},
{id: 14, restNAME: "Ходжа", restIMG: "https://static.tildacdn.com/tild3038-3935-4233-b635-336166333134/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 10:00 до 24:00", restADRES: "ул. Луганского, 54/4", restINSTA: "https://www.instagram.com/hodzha54/", rest2GIS: "https://go.2gis.com/igenh"},
{id: 15, restNAME: "Думан", restIMG: "https://static.tildacdn.com/tild6238-6432-4839-b236-353433643232/photo_2020-08-20_151.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы уточняйте по телефону +7(727)238-46-79", restADRES: "мкр. Жетысу 2, 9 А", restINSTA: "https://www.instagram.com/restaurantduman/", rest2GIS: "https://go.2gis.com/az4w3"},
{id: 16, restNAME: "Улы Тау", restIMG: "https://static.tildacdn.com/tild6135-3531-4666-b761-616339326135/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 4000–10000 тенге", restKITCH: "Кухни: восточная, европейская, кавказская, казахская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Дулати, 15", restINSTA: "https://www.instagram.com/uly_tau_restaurant/", rest2GIS: "https://go.2gis.com/ld6tvr"},
{id: 17, restNAME: "Огни Алатау", restIMG: "https://static.tildacdn.com/tild3331-3831-4965-a662-613838613962/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, казахская, корейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "мкр. Калкаман 2, ул. Ашимова 239", restINSTA: "https://www.instagram.com/restoran_ogni_alatau/", rest2GIS: "https://go.2gis.com/k92la"},
{id: 18, restNAME: "Марс", restIMG: "https://static.tildacdn.com/tild6136-6262-4237-b132-643163663462/photo_2020-08-20_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: восточная, грузинская, европейская", restTIME: "Время работы: 10:00 до 02:00", restADRES: "ул. Розыбакиева, 135", restINSTA: "https://www.instagram.com/kafemars/", rest2GIS: "https://go.2gis.com/p3a8s4"},
{id: 19, restNAME: "АкДана", restIMG: "https://static.tildacdn.com/tild3039-3463-4231-a239-396231306330/photo_2020-08-20_153.jpeg", restPRICE: "Средний чек: 4000–5000 тенге", restKITCH: "Кухни: восточная, европейская, казахская, узбекская", restTIME: "Время работы: 08:00 до 21:00", restADRES: "пр. Абылай хана 81", restINSTA: "https://www.instagram.com/akdana.cafe/", rest2GIS: "https://go.2gis.com/rnfvy"},
{id: 20, restNAME: "ПЯТНИЦА", restIMG: "https://static.tildacdn.com/tild3531-3431-4639-b265-306338646430/photo_2020-08-20_153.jpeg", restPRICE: "Средний чек: 6000–8000 тенге", restKITCH: "Кухни: грузинская, европейская, итальянская, японская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "пр. Гагарина, 92", restINSTA: "https://www.instagram.com/pyatnicacafe.kz/", rest2GIS: "https://go.2gis.com/9virdc"},
{id: 21, restNAME: "Orient Park Atakent", restIMG: "https://static.tildacdn.com/tild6630-3336-4565-a538-613137663932/photo_2020-08-21_144.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: восточная, китайская, европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Тимирязева, 42, к 5", restINSTA: "https://www.instagram.com/orient_park_atakent/", rest2GIS: "https://go.2gis.com/ra5qi"},
{id: 22, restNAME: "Темир Тау", restIMG: "https://static.tildacdn.com/tild6630-3336-4565-a538-613137663932/photo_2020-08-21_144.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: восточная, европейская, казахская", restTIME: "Время работы уточняйте по телефону +7(707)878-68-52", restADRES: "пр. Гагарина, 236 Б", restINSTA: "", rest2GIS: "https://go.2gis.com/xs0ft"},
{id: 23, restNAME: "Grand Osteria", restIMG: "https://static.tildacdn.com/tild3663-3138-4363-a636-636631393263/photo_2020-08-21_152.jpeg", restPRICE: " ", restKITCH: "Кухни: европейская", restTIME: "Время работы уточняйте по телефону +7(775)972-22-39", restADRES: "мкр. Аксай 4, 18 А", restINSTA: "https://www.instagram.com/grand.osteria.karaoke/", rest2GIS: "https://go.2gis.com/sxnju"},
{id: 24, restNAME: "Resident City Hotel", restIMG: "https://static.tildacdn.com/tild3665-3734-4364-a638-653535393333/photo_2020-08-21_152.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: восточная, казахская", restTIME: "Время работы уточняйте по телефону +7(727)339-22-99", restADRES: "ул. Желтоксан, 23", restINSTA: "https://www.instagram.com/resident_city_hotel/", rest2GIS: "https://go.2gis.com/ibj1h"},
{id: 25, restNAME: "Night Star", restIMG: "https://static.tildacdn.com/tild3037-6533-4461-a362-636563616266/photo_2020-08-21_154.jpeg", restPRICE: "Средний чек: 4000–6000 тенге", restKITCH: "Кухни: кавказская, грузинская, европейская, казахская", restTIME: "Время работы: 10:30 до 23:00", restADRES: "ул. Шагабутдинова, 129", restINSTA: "https://www.instagram.com/nightstar_cafe/", rest2GIS: "https://go.2gis.com/dqz0f"},
{id: 26, restNAME: "Малина Mix", restIMG: "https://static.tildacdn.com/tild3962-3337-4337-b336-653365666238/photo_2020-08-21_154.jpeg", restPRICE: "Средний чек: 5000–6000 тенге", restKITCH: "Кухни: европейская, авторская, азиатская, итальянская, паназиатская, японская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Габдуллина, 72", restINSTA: "https://www.instagram.com/cafemalinamix/", rest2GIS: "https://go.2gis.com/croc6"},
{id: 27, restNAME: "ПУШКИН", restIMG: "https://static.tildacdn.com/tild6230-6363-4664-b965-323131653466/photo_2020-08-21_155.jpeg", restPRICE: "Средний чек: 5000–6000 тенге", restKITCH: "Кухни: русская, европейская, авторская, итальянская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "пр. Абая, 17", restINSTA: "https://www.instagram.com/pushkin_cafe/", rest2GIS: "https://go.2gis.com/v2s1i"},
{id: 28, restNAME: "Алатау по Байзакова", restIMG: "https://static.tildacdn.com/tild3331-3565-4537-b634-306462626234/photo_2020-08-21_155.jpeg", restPRICE: "Средний чек: 6000–10000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Байзакова", restINSTA: "https://www.instagram.com/alatau_ajk/", rest2GIS: "https://go.2gis.com/6ccl4"},
{id: 29, restNAME: "Тамада", restIMG: "https://static.tildacdn.com/tild6432-6463-4031-b931-613162376263/photo_2020-08-21_162.jpeg", restPRICE: "Средний чек: 6500–8000 тенге", restKITCH: "Кухни: грузинская, европейская, кавказская, казахская, восточная", restTIME: "Время работы: 11:00 до 23:00", restADRES: "пр. Гагарина, 6", restINSTA: "https://www.instagram.com/cafe_tamada/", rest2GIS: "https://go.2gis.com/uufcw"},
{id: 30, restNAME: "Лето", restIMG: "https://static.tildacdn.com/tild6463-6564-4261-b332-336464613065/photo_2020-08-21_162.jpeg", restPRICE: "Средний чек: 4000–6000 тенге", restKITCH: "Кухни: европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "5 мкр, 21 Г", restINSTA: "https://www.instagram.com/letovalmaty/", rest2GIS: "https://go.2gis.com/p8zz3"},
{id: 41, restNAME: "Gold", restIMG: "https://thumb.tildacdn.com/tild3032-3861-4935-a332-383566353361/-/format/webp/gold.jpg", restPRICE: "Средний чек: 1500-3500 тенге", restKITCH: "Кухни: паназиатская, американская, европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "Мкр. Жетысу 2 дом 11", restINSTA: "https://www.instagram.com/cafegold_kz/", rest2GIS: "https://go.2gis.com/qo6gme"},
{id: 42, restNAME: "Чиль сон", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, корейская", restTIME: "Время работы: 11:00 до 00:00", restADRES: "ул. Болтирик-шешен, 7", restINSTA: "", rest2GIS: "https://go.2gis.com/u5rlkj"},
{id: 43, restNAME: "Тумар", restIMG: "https://static.tildacdn.com/tild3063-6437-4435-b162-346364663830/photo_2020-08-27_212.jpeg", restPRICE: "Средний чек: 1500–5000 тенге", restKITCH: "Кухни: европейская, китайская, итальянская, восточная", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ул. Жамбыла, 198 А", restINSTA: "https://www.instagram.com/tumar_chaihana/", rest2GIS: "https://go.2gis.com/efna2i"},
{id: 44, restNAME: "Atakent Park Hotel", restIMG: "https://static.tildacdn.com/tild3962-3733-4634-a232-323339643361/photo_2020-08-27_213.jpeg", restPRICE: "Средний чек: 3000–10000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы уточняйте по телефону +7(727)355-42-42", restADRES: "ул. Тимирязева, 42", restINSTA: "https://www.instagram.com/atakent_park_hotel/", rest2GIS: "https://go.2gis.com/cpp6r"},
{id: 45, restNAME: "Белый журавль", restIMG: "https://static.tildacdn.com/tild3465-3862-4731-b336-373936666635/photo_2020-08-27_214.jpeg", restPRICE: "Средний чек: 3500–5000 тенге", restKITCH: "Кухни: европейская, корейская, восточная", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Сулейменова, 2 А", restINSTA: "https://www.instagram.com/belyi_zhuravl/", rest2GIS: "https://go.2gis.com/bz7xjp"},
{id: 46, restNAME: "Место встречи", restIMG: "https://static.tildacdn.com/tild6336-6636-4166-b838-616436333833/photo_2020-08-27_215.jpeg", restPRICE: "Средний чек: 3500–6000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 10:00 до 01:00", restADRES: "ул. Жансугурова, 271", restINSTA: "https://www.instagram.com/mesto_vstrechii/", rest2GIS: "https://go.2gis.com/1ahqnd"},
{id: 47, restNAME: "Алина", restIMG: "https://static.tildacdn.com/tild6264-6430-4064-b434-323836343335/photo_2020-08-27_215.jpeg", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: европейская, восточная, кавказская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Панфилова, 154", restINSTA: "https://www.instagram.com/cafe.alina/", rest2GIS: "https://go.2gis.com/nfp9a7"},
{id: 48, restNAME: "Аслан", restIMG: "https://static.tildacdn.com/tild3837-3265-4037-b263-623865613033/__2020-08-27__215810.png", restPRICE: "Средний чек: 3000–4000 тенге", restKITCH: "Кухни: европейская, казахская, кавказская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Ашимова, 162", restINSTA: "", rest2GIS: "https://go.2gis.com/5g4o6"},
{id: 49, restNAME: "Буржуй", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы уточняйте по телефону +7(727)250-74-76", restADRES: "пр. Сейфуллина, 577", restINSTA: "", rest2GIS: "https://go.2gis.com/yd9w6n"},
{id: 50, restNAME: "Dato", restIMG: "https://static.tildacdn.com/tild6436-6330-4133-a430-633638616662/photo_2020-08-27_220.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "Кухни: грузинская, европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Кунаева, 64", restINSTA: "https://www.instagram.com/dato_almaty/", rest2GIS: "https://go.2gis.com/7fwfg"},
{id: 51, restNAME: "Боз Бие", restIMG: "https://static.tildacdn.com/tild6439-3939-4738-a130-613962653332/photo_2020-08-27_221.jpeg", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: казахская", restTIME: "Время работы: 7:00 до 23:00", restADRES: "ул. Кожабекова, 73", restINSTA: "https://www.instagram.com/boz.bie/", rest2GIS: "https://go.2gis.com/7ediv4"},
{id: 52, restNAME: "TMIN", restIMG: "https://static.tildacdn.com/tild6164-3834-4565-a261-366433363565/photo_2020-08-27_221.jpeg", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: европейская, узбекская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "пр. Абая, 89", restINSTA: "https://www.instagram.com/tmin_almaty/", rest2GIS: "https://go.2gis.com/j2dt2"},
{id: 53, restNAME: "Карлыгаш", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, казахская", restTIME: "Время работы: 10:00 до 00:00", restADRES: "Алатау, 59/60", restINSTA: "", rest2GIS: "https://go.2gis.com/l5rq7"},
{id: 54, restNAME: "Бульон", restIMG: "https://static.tildacdn.com/tild6631-3162-4333-b665-323063616230/photo_2020-08-28_105.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ул. Ратушного, 78 Б", restINSTA: "https://www.instagram.com/bulyon.almaty/", rest2GIS: "https://go.2gis.com/kji6i"},
{id: 55, restNAME: "AS karaoke bar", restIMG: "https://static.tildacdn.com/tild6564-3934-4132-a230-623866656437/photo_2020-08-28_154.jpeg", restPRICE: "Средний чек: 5000–10000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 05:00", restADRES: "мкр. Аксай 1А, 28Б", restINSTA: "https://www.instagram.com/askaraokekafebar/", rest2GIS: "https://go.2gis.com/2brgh"},
{id: 56, restNAME: "МансАрда", restIMG: "https://static.tildacdn.com/tild3137-3336-4566-b262-366462396430/photo_2020-08-28_155.jpeg", restPRICE: "Средний чек: 2500–7000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 12:00 до 00:00", restADRES: "ул. Шокая, 37", restINSTA: "https://www.instagram.com/mansarda.cafe/", rest2GIS: "https://go.2gis.com/4et33"},
{id: 57, restNAME: "Alua`s Lagman house", restIMG: "https://static.tildacdn.com/tild3365-3033-4462-b932-623337663764/__2020-08-28__164323.png", restPRICE: "Средний чек: 2000–4000 тенге", restKITCH: "Кухни: европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "ул. Ырысты, 36/1", restINSTA: "https://www.instagram.com/aluas_lagman_house/", rest2GIS: "https://go.2gis.com/cwogd"},
{id: 58, restNAME: "Гастро Бар", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 5000–7000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 08:00 до 01:00", restADRES: "пр. Назарбаева, 187 Б", restINSTA: "", rest2GIS: "https://go.2gis.com/k8h80"},
{id: 59, restNAME: "Алые паруса", restIMG: "https://static.tildacdn.com/tild6138-3934-4735-a366-303235633539/photo_2020-08-28_165.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: японская, паназиатская", restTIME: "Время работы: 10:00 до 00:00", restADRES: "мкр. Самал 2, 111, ТРЦ Dostyk Plaza", restINSTA: "https://www.instagram.com/alyeparusaa/", rest2GIS: "https://go.2gis.com/8lg7j"},
{id: 60, restNAME: "Bon Appetit", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1000–2000 тенге", restKITCH: "Кухни: азиатская, европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "ул. Тимирязева, 19", restINSTA: "", rest2GIS: "https://go.2gis.com/thlq1"},
{id: 61, restNAME: "На бугорке", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 08:00 до 00:00", restADRES: "пр. Суюнбая, 379", restINSTA: "", rest2GIS: "https://go.2gis.com/91jmop"},
{id: 62, restNAME: "Dim Sum", restIMG: "https://thumb.tildacdn.com/tild3466-3239-4261-b631-313530393139/-/format/webp/photo_2020-08-28_222.jpeg", restPRICE: "Средний чек: 2000–5000 тенге", restKITCH: "", restTIME: "Время работы: 10:00 до 22:00", restADRES: "пр. Аль-Фараби, 77/8", restINSTA: "https://www.instagram.com/dimsum_official/", rest2GIS: "https://go.2gis.com/ilxd7"},
{id: 63, restNAME: "Бухара", restIMG: "https://thumb.tildacdn.com/tild3863-3138-4631-b330-366435366633/-/format/webp/photo_2020-08-28_223.jpeg", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточная, европейская", restTIME: "Время работы: 10:00 до 00:00", restADRES: "ул. Шевченко, 165", restINSTA: "https://www.instagram.com/buhara_cafe/", rest2GIS: "https://go.2gis.com/pnbv9"},
{id: 64, restNAME: "ПЛОВХАНА", restIMG: "https://thumb.tildacdn.com/tild3036-3033-4736-a335-386237613036/-/format/webp/photo_2020-08-28_223.jpeg", restPRICE: "Средний чек: 500–1500 тенге", restKITCH: "Кухни: узбекская", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ул. Рихарда Зорге, 18/1", restINSTA: "https://www.instagram.com/plovhana/", rest2GIS: "https://go.2gis.com/armi6"},
{id: 65, restNAME: "Потенциал", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточная, казахская", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ул. Карасай батыра, 193 Б", restINSTA: "", rest2GIS: "https://go.2gis.com/abfrn"},
{id: 66, restNAME: "Уч-Кудук", restIMG: "https://thumb.tildacdn.com/tild3561-6266-4561-a662-316538336164/-/format/webp/photo_2020-08-28_231.jpeg", restPRICE: "Средний чек: 4000–7000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ул. Магистральная, 13", restINSTA: "https://www.instagram.com/ychkuduk/", rest2GIS: "https://go.2gis.com/hbenh"},
{id: 67, restNAME: "Хуторок" , restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png" , restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: " Кухни: европейская, восточная", restTIME: "Время работы уточняйте по телефону +7(700)313-65-59" , restADRES: "Адрес: пр. Сейфуллина, 291", restINSTA: " " , rest2GIS: "https://go.2gis.com/f9jcw"},
{id: 68, restNAME: "Ас-Казан", restIMG: "https://thumb.tildacdn.com/tild3134-6439-4538-b262-336531623261/-/format/webp/photo_2020-08-28_232.jpeg", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: восточная, европейская, китайская", restTIME: "Время работы:  08:00 до 22:00", restADRES: "Адрес: ул. Гоголя, 13", restINSTA: "https://www.instagram.com/askazan.kz/", rest2GIS: "https://go.2gis.com/c7pro"},
{id: 69, restNAME: "Amazon", restIMG: "https://thumb.tildacdn.com/tild3462-3332-4566-b764-353332646330/-/format/webp/photo_2020-08-28_233.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, итальянская, грузинская, казахская", restTIME: "Время работы: 10:00 до 22:00", restADRES: "Адрес: ул. Жангельдина, 212 А", restINSTA: "https://www.instagram.com/amazon_kafe/", rest2GIS: "https://go.2gis.com/1d5vv"},
{id: 70, restNAME: "Сырмак", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1500–3000 тенге", restKITCH: "Кухни: восточно-европейская, китайская", restTIME: "Время работы: 08:00 до 00:00", restADRES: "Адрес: ул. Макатаева, 47, уг. ул. Есенова", restINSTA: "", rest2GIS: "https://go.2gis.com/mrr4k"},
{id: 71, restNAME: "Султан Курган", restIMG: "https://thumb.tildacdn.com/tild3431-3866-4439-a162-623362383337/-/format/webp/photo_2020-08-28_233.jpeg", restPRICE: "Средний чек: 1500–2000 тенге", restKITCH: "Кухни: европейская, казахская, китайская", restTIME: "Время работы уточняйте по телефону +7(707)633-11-59", restADRES: "Адрес: ул. Жансугурова, 438/1", restINSTA: "https://www.instagram.com/abay_halalfood/", rest2GIS: "https://go.2gis.com/mqyew"},
{id: 72, restNAME: "Лагман Town", restIMG: "https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png", restPRICE: "Средний чек: 1000–3000 тенге", restKITCH: "Кухни: восточно-европейская", restTIME: "Время работы: 10:00 до 23:00", restADRES: "Адрес: мкр. Достык, ул. Есенова, 42", restINSTA: "https://www.instagram.com/lagman_town/", rest2GIS: "https://go.2gis.com/44d8u"},
{id: 73, restNAME: "Нинигори", restIMG: "https://thumb.tildacdn.com/tild6435-3962-4136-b165-313030306237/-/format/webp/photo_2020-08-28_234.jpeg", restPRICE: "Средний чек: 2500–7000 тенге", restKITCH: "Кухни: европейская, грузинская, восточная", restTIME: "Время работы: 11:00 до 03:00", restADRES: "Адрес: ул. Жансугурова, 395", restINSTA: "https://www.instagram.com/kafe_ninigori/", rest2GIS: "https://go.2gis.com/uqigs"},
{id: 74, restNAME: "Irgeli", restIMG: "https://thumb.tildacdn.com/tild6230-6630-4637-b063-643637326661/-/format/webp/photo_2020-08-28_234.jpeg", restPRICE: "Средний чек: 2000–3000 тенге", restKITCH: "Кухни: европейская, итальянская, китайская", restTIME: "Время работы: 08:00 до 01:00", restADRES: "Адрес: ул. ​Исагулова, 166, с. Иргели", restINSTA: "https://www.instagram.com/irgely_kafe/", rest2GIS: "https://go.2gis.com/1jhky"},
{id: 75, restNAME: "Lanzhou", restIMG: "https://thumb.tildacdn.com/tild3430-6666-4339-b737-663639383562/-/format/webp/photo_2020-08-28_235.jpeg", restPRICE: "Средний чек: 1000–2000 тенге", restKITCH: "Кухни: китайская", restTIME: "Время работы: 11:00 до 23:00", restADRES: "Адрес: ул. Жибек Жолы, 65 А", restINSTA: "https://www.instagram.com/lanzhou_kafe/", rest2GIS: "https://go.2gis.com/pu39c"},
{id: 76, restNAME: "Кино", restIMG: "https://thumb.tildacdn.com/tild3632-3162-4333-b535-323632643631/-/format/webp/photo_2020-08-28_235.jpeg", restPRICE: "Средний чек: 4000–7000 тенге", restKITCH: "Кухни: европейская, американская", restTIME: "Время работы: 09:00 до 22:00", restADRES: "Адрес: ул. Панфилова, 108", restINSTA: "https://www.instagram.com/cafe_bar_kino/", rest2GIS: "https://go.2gis.com/agb9d"},
{id: 77, restNAME: "Korean Food Story", restIMG: "https://thumb.tildacdn.com/tild3762-3236-4261-b965-383936383165/-/format/webp/photo_2020-08-28_235.jpeg", restPRICE: "Средний чек: 1700–2000 тенге", restKITCH: "Кухни: корейская", restTIME: "Время работы: 09:00 до 19:00", restADRES: "Адрес: пр. ​Аль-Фараби, 19 К2, Б", restINSTA: "https://www.instagram.com/koreanfoodstory/", rest2GIS: "https://go.2gis.com/ssq3q"},
{id: 78, restNAME: "Chad Cafe", restIMG: "https://thumb.tildacdn.com/tild3661-3839-4739-b966-633664653663/-/format/webp/photo_2020-08-28_235.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: авторская, паназиатская, тайская", restTIME: "Время работы: 08:30 до 22:00", restADRES: "Адрес: ул. Гоголя, 13", restINSTA: "https://www.instagram.com/chad.cafe/", rest2GIS: "https://go.2gis.com/5715o"},
{id: 79, restNAME: "Мармарис", restIMG: "https://thumb.tildacdn.com/tild3937-3932-4330-b234-656666316336/-/format/webp/photo_2020-08-29_000.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: турецкая, европейская", restTIME: "Время работы: 09:00 до 23:00", restADRES: "Адрес: ул. Ауэзова, 175", restINSTA: "https://www.instagram.com/marmariskz/", rest2GIS: "https://go.2gis.com/teqz5k"},
{id: 80, restNAME: "Ginger Sushi Cafe", restIMG: "https://thumb.tildacdn.com/tild3233-6539-4336-a231-303563343162/-/format/webp/photo_2020-08-29_000.jpeg", restPRICE: "Средний чек: 3000–5000 тенге", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 00:00", restADRES: "Адрес: ул.​ Жандарбекова, 128", restINSTA: "https://www.instagram.com/ginger_sushi_/", rest2GIS: "https://go.2gis.com/dttn4"},

]

//ссылка на логотип дамди https://static.tildacdn.com/tild3563-6138-4939-b961-633134393931/__2020-08-27__220707.png

let last_all_rest = []

console.log('allRESTARANS connected')

//функция случайного результата
function getRandomElement(arr_rgd) {
    let randIndex_rgd = Math.floor(Math.random() * arr_rgd.length);
    return arr_rgd[randIndex_rgd];
}

function first_rest(){
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
}

window.onload = first_rest;

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
