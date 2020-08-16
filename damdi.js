/* 
Что будет в списке ресторанов:

1. Порядковый номер - id
2. Название ресторана - restNAME
3. Картинка из ресторана - restIMG
4. Средний чек - restPRICE
5. Описание кухни - restKITCH
6. Время работы - restTIME
7. Адрес - restADRES
8. Ссылка на Instagram - restINSTA
9. Ссылка на 2ГИС - rest2GIS

Пример:

{id: 1, restNAME: "Gold", restIMG: "gold.jpg", restPRICE: "Средний чек: 1500-3500тг", restKITCH: "Кухни: паназиатская, американская, европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "Мкр. Жетысу 2 дом 11", restINSTA: "https://www.instagram.com/cafegold_kz/", rest2GIS: "https://go.2gis.com/qo6gme"}
*/

console.log('Start')

let allRESTARANS = [{id: 1, restNAME: "Gold", restIMG: "https://thumb.tildacdn.com/tild3032-3861-4935-a332-383566353361/-/format/webp/gold.jpg", restPRICE: "Средний чек: 1500-3500тг", restKITCH: "Кухни: паназиатская, американская, европейская, восточная, китайская", restTIME: "Время работы: 11:00 до 02:00", restADRES: "Мкр. Жетысу 2 дом 11", restINSTA: "https://www.instagram.com/cafegold_kz/", rest2GIS: "https://go.2gis.com/qo6gme"},
{id: 2, restNAME: "BubbleGum", restIMG: "https://thumb.tildacdn.com/tild3338-6461-4335-b665-316133333730/-/format/webp/BubbleGum.jpg", restPRICE: "Средний чек: 4000–7000тг", restKITCH: "Кухни: европейская, восточная", restTIME: "Время работы: 10:00 до 22:00", restADRES: "ПерекуCity Mixx 3 этаж, ул. Шевченко, 99, уг. ул. Байтурсынова", restINSTA: "https://www.instagram.com/bubblegum_cafe/", rest2GIS: "https://go.2gis.com/t8fxh"},
{id: 3, restNAME: "Чачапури", restIMG: "https://thumb.tildacdn.com/tild3633-3234-4532-b166-303337363730/-/format/webp/photo.jpeg", restPRICE: "Средний чек: 3500–5000тг", restKITCH: "Кухни: европейская, грузинская, восточная, кавказская", restTIME: "Время работы: 11:00 до 22:00", restADRES: "Богенбай батыра уг. ул.Кастеева", restINSTA: "https://www.instagram.com/chachapuri_almaty/", rest2GIS: "https://go.2gis.com/dp13r"},
]

console.log('allRESTARANS connected')

//функция случайного результата
function getRandomElement(arr_rgd) {
    let randIndex_rgd = Math.floor(Math.random() * arr_rgd.length);
    return arr_rgd[randIndex_rgd];
}



function showNextREST(){
    let randomELEMENT = getRandomElement(allRESTARANS);
    
    let rest_title = document.getElementById('rest_title');
    let new_rest_title = randomELEMENT.restNAME;
    console.log(new_rest_title)
    rest_title.textContent = new_rest_title;

    let rest_price = document.getElementById('rest_price');
    let new_rest_price = randomELEMENT.restPRICE;
    console.log(new_rest_price)
    rest_price.textContent = new_rest_price;

    let rest_kitch = document.getElementById('rest_kitch');
    let new_rest_kitch = randomELEMENT.restKITCH;
    console.log(new_rest_kitch)
    rest_kitch.textContent = new_rest_kitch;

    let rest_time = document.getElementById('rest_time');
    let new_rest_time = randomELEMENT.restTIME;
    console.log(new_rest_time)
    rest_time.textContent = new_rest_time;

    let rest_adress = document.getElementById('rest_adress');
    let new_rest_adress = randomELEMENT.restADRES;
    console.log(new_rest_adress)
    rest_adress.textContent = new_rest_adress;

    let button_INSTA_link = document.getElementById('button_INSTA_link');
    let new_button_INSTA_link = randomELEMENT.restINSTA;
    console.log(new_button_INSTA_link)
    button_INSTA_link.href = new_button_INSTA_link;

    let button_2GIS_link = document.getElementById('button_2GIS_link');
    let new_button_2GIS_link = randomELEMENT.rest2GIS;
    console.log(new_button_2GIS_link)
    button_2GIS_link.href = new_button_2GIS_link;

    let rest_img = document.querySelector('.rest_img');
    let new_rest_img = randomELEMENT.restIMG;
    console.log(new_rest_img)
    rest_img.style.backgroundImage = "url(" + new_rest_img + ")";
};