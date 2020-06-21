
function hide_body_download(){
    let body_download = document.getElementById('body_download');

    body_download.style.opacity = 0;
    body_download.style.zIndex = 0;
    
    console.log('Убиралка работает')
}
    setTimeout(hide_body_download, 2000);
console.log('Убиралка подключилась')

(async () => {
    let {games_baza} = await import('https://mistfill.github.io/random_games/random_baze3.js'); 
    return games_baza;
    console.log(game_baza)})();


    //доступ кнопке next
    let button_next_rgd = document.querySelector('.button_next_rgd');
    //доступ к тексту игры на заднике
    let text_game_rgd = document.querySelector('.text_game_rgd');
    //доступ к картинке задника - старый блок
    let servise_box_img_rgd = document.querySelector('.servise_box_img_rgd');
    //доступ к картинке задника - новый блок
    let main_box_img_rgd = document.querySelector('.main_box_img_rgd');
    
    //доступ к боксу левой игры
    let left_game_box_rgd = document.querySelector('.left_game_box_rgd');
    //доступ к названию левой игры
    let left_game_title_rgd = document.querySelector('.left_game_title_rgd');
    //доступ изображению левой игры - старый блок
    let left_game_img_rgd = document.querySelector('.left_game_img_rgd');
    //доступ к ссылке левой игры
    let left_game_url_rgd = document.querySelector('.left_game_url_rgd');
    //переменная текста левой игры
    let left_text_rgd = 'п';
    
    //доступ к боксу центр игры
    let center_game_box_rgd = document.querySelector('.center_game_box_rgd');
    //доступ к титлу центр игры
    let center_game_title_rgd = document.querySelector('.center_game_title_rgd');
    //доступ к изображению центр игры - старый блок
    let center_game_img_rgd = document.querySelector('.center_game_img_rgd');
    //доступ к ссылке центр игры
    let center_game_url_rgd = document.querySelector('.center_game_url_rgd');
    //переменная текста центральной игры
    let center_text_rgd = 'п';
    
    //доступ к боксу правой игры
    let right_game_box_rgd = document.querySelector('.right_game_box_rgd');
    //доступ к титлу правой игры
    let right_game_title_rgd = document.querySelector('.right_game_title_rgd');
    //доступ к изображению правой игры - старый блок
    let right_game_img_rgd = document.querySelector('.right_game_img_rgd');
    //доступ к ссылке правой игры 
    let right_game_url_rgd = document.querySelector('.right_game_url_rgd');
    //переменная текста правой игры
    let right_text_rgd = 'п';
    
    //функция случайного результата
    function getRandomElement(arr_rgd) {
        let randIndex_rgd = Math.floor(Math.random() * arr_rgd.length);
        return arr_rgd[randIndex_rgd];
    }

    //переменная рандома - левая игра
    let randomElement_left2 = getRandomElement(games_baza);
    //переменная рандома - центр игра
    let randomElement_center2 = getRandomElement(games_baza);
    //переменная рандома - правая игра
    let randomElement_right2 = getRandomElement(games_baza);


    //переменная 2 блока левой игры равна случайной картинке из базы
    let left2_game_box_rgd_img = randomElement_left2.g_img;
    //переменная 2 блока левой игры равная титлу из базы
    let left2_game_box_rgd_title = randomElement_left2.g_name;
    //переменная 2 блока левой игры равная информацие из базы
    let left2_text_rgd = randomElement_left2.g_text;
    //переменная доступа к титлу 2 блока левой игры 
    let left2_game_title_rgd = document.querySelector('.left2_game_title_rgd');
    //переменная ссылки левой игры 2 блока
    let left2_game_url = '0';

    let left_game_new_url = randomElement_left2.g_url;
    console.log(left_game_new_url)

    //переменная 2 блока центр игры - картинка из базы
    let center2_game_box_rgd_img = randomElement_center2.g_img;
    //переменная 2 блока центр игры - титл
    let center2_game_box_rgd_title = randomElement_center2.g_name;
    //переменная 2 блока центр игры - текст
    let center2_text_rgd = randomElement_center2.g_text;
    //переменная доступа к титлу 2 блока центр игры
    let center2_game_title_rgd = document.querySelector('.center2_game_title_rgd');
    //переменная ссылки центральной игры 2 блока
    let center2_game_url = '0';

    let center_game_new_url = randomElement_center2.g_url;
    console.log(center_game_new_url)

    //переменная 2 блока правой игры - картинка
    let right2_game_box_rgd_img = randomElement_right2.g_img;
    //переменная 2 блока правой игры - титл
    let right2_game_box_rgd_title = randomElement_right2.g_name;
    //переменная 2 блока правой игры - текст
    let right2_text_rgd = randomElement_right2.g_text;
    //переменная доступа к титлу 2 блока правой игры
    let right2_game_title_rgd = document.querySelector('.right2_game_title_rgd');
    //переменная ссылки правой игры 2 блока
    let right2_game_url = '0';

    let right_game_new_url = randomElement_right2.g_url;
    console.log(right_game_new_url)


    //мобильная версия
    
    let button_mob = document.querySelector('.button_mob');
    
    let title_game_mob = document.querySelector('.title_game_mob');
    
    let img_game_mob = document.querySelector('.img_game_mob');
    
    let info_mob = document.querySelector('.info_mob');

    let url_game_mob = document.querySelector('.url_game_mob');

    let img_game2_mob = document.querySelector('.img_game2_mob');

    let title_game2_mob = document.querySelector('.title_game2_mob');

    let back_mob_text = document.querySelector('.back_mob_text');

        //переменная рандома - левая игра
    let randomElement_mob = getRandomElement(games_baza);

  //переменная 2 блока левой игры равна случайной картинке из базы
  let img_game2_mob_new = randomElement_mob.g_img;
  //переменная 2 блока левой игры равная титлу из базы
  let title_game2_mob_new = randomElement_mob.g_name;
  //переменная 2 блока левой игры равная информацие из базы
  let text_game2_mob_new = randomElement_mob.g_text;
  //переменная ссылки левой игры 2 блока
  let url_game2_mob_new = randomElement_mob.g_url;



    //Цикл 1 - загрузка страницы
    //если окно загрузилось делай это
    function left2_game_box_rgd_onload() {
        //меняй картинку 2 блока левой игры на картинку из базы
        document.getElementById('left2_game_box_rgd').style.backgroundImage = 'url(' + left2_game_box_rgd_img + ')';
        //меняй титл левой игры 2 блока на значение из базы
        left2_game_title_rgd.textContent = left2_game_box_rgd_title;

        //меняем картинку 2 блока центр игры
        document.getElementById('center2_game_box_rgd').style.backgroundImage = 'url(' + center2_game_box_rgd_img + ')';
        //меняем титл 2 блока центр игры
        center2_game_title_rgd.textContent = center2_game_box_rgd_title;

        //меняем картинку 2 блока правой игры
        document.getElementById('right2_game_box_rgd').style.backgroundImage = 'url(' + right2_game_box_rgd_img + ')';
        //меняем титл 2 блока правой игры 
        right2_game_title_rgd.textContent = right2_game_box_rgd_title;

        //добавляем в спрятаннцый текст новую инфу
        let back_game_text = document.querySelector('.back_game_text');

        //невидимый текст равен тексту центральной игры блока 2
        back_game_text.textContent = center2_text_rgd;
        console.log(back_game_text.textContent)

        //меняй картинку 2 блока левой игры на картинку из базы
        document.getElementById('img_game2_mob').style.backgroundImage = 'url(' + img_game2_mob_new + ')';
        //меняй титл левой игры 2 блока на значение из базы
        title_game2_mob.textContent = title_game2_mob_new;

        //добавляем в спрятаннцый текст новую инфу
        let back_mob_text = document.querySelector('.back_mob_text');

        //невидимый текст равен тексту центральной игры блока 2
        back_mob_text.textContent = text_game2_mob_new;
        console.log(back_mob_text.textContent)

        
    }
    
    //если окно загрузилось - запускай функцию
    window.onload = left2_game_box_rgd_onload;

    let f_h = 0;
    console.log('f_h = ' + f_h)

    //Цикл 2 - смена блоков
    //доступ к левому блоку 1 ряда
    let left_game1 = document.getElementById('left_game_box_rgd');
    let left_game1_top = window.getComputedStyle(left_game1).top;
    console.log('top 1 = ' + left_game1_top)
    //доступ к левому блоку 2 ряда
    let left_game2 = document.getElementById('left2_game_box_rgd');
    let left_game2_top = window.getComputedStyle(left_game2).top;
    console.log('top 2 = ' + left_game2_top)


    //Если блок 1 ряда наверху, left_game1_top = 91px
    function random_g() {
       
        //доступ к левому блоку 1 ряда
        let left_game1 = document.getElementById('left_game_box_rgd');
        let left_game1_z = window.getComputedStyle(left_game1).zIndex;
        console.log('top 1 = ' + left_game1_z)
        //доступ к левому блоку 2 ряда
        let left_game2 = document.getElementById('left2_game_box_rgd');
        let left_game2_z = window.getComputedStyle(left_game2).zIndex;
        console.log('top 2 = ' + left_game2_z)

        if (left_game2_z == '0') {
        
        function block1_games() {
            
            console.log('блок 1 сверху')

            let randomElement_rgd = getRandomElement(games_baza);
    
            //опускает левый блок 1 ряда вниз
            document.getElementById('left_game_box_rgd').style.zIndex = '0';
            //прячет левый блок 1 ряда
            document.getElementById('left_game_box_rgd').style.opacity = '0';
            //поднимает левый блок 2 ряда
            document.getElementById('left2_game_box_rgd').style.zIndex = '1';
            //показывает левый блок 2 ряда
            document.getElementById('left2_game_box_rgd').style.opacity = '1';
            //ссылка 2 блока = новой переменной
            left2_game_url = left_game_new_url;

        setTimeout( function left_game_body(){
            //новый титл левого блока 1 ряда
            left_game_title_rgd.textContent = randomElement_rgd.g_name;
            //новая картинка левого блока 1 ряда
            left_game_box_rgd.style.backgroundImage = 'url(' + randomElement_rgd.g_img + ')';
            //новый текст левого блока 1 ряда
            left_text_rgd = randomElement_rgd.g_text;

            //актуальная ссылка
            left_game_url_rgd.href = left2_game_url + '?agent=823594';

            left_game_new_url = randomElement_rgd.g_url;}, 500);

            let randomElement_rgd2 = getRandomElement(games_baza);
    
            //опускае центр блок 1 ряда
            document.getElementById('center_game_box_rgd').style.zIndex = '0';
            //прячет центр блок 1 ряда
            document.getElementById('center_game_box_rgd').style.opacity = '0';
            //поднимает центр блок 2 ряда
            document.getElementById('center2_game_box_rgd').style.zIndex = '1';
            //показывает центр блок 2 ряда
            document.getElementById('center2_game_box_rgd').style.opacity = '1';
            //меняем ссылку блока 2 на новую переменную
            center2_game_url = center_game_new_url;

            setTimeout( function center_game_time() {

            //видимый текст = тексту невидимого блока
            text_game_rgd.textContent = back_game_text.textContent;
        
            //новый титл центр блока 1 ряда
            center_game_title_rgd.textContent = randomElement_rgd2.g_name;
            //новая картинка центр блока 1 ряда
            center_game_box_rgd.style.backgroundImage = 'url(' + randomElement_rgd2.g_img + ')';
            //новый текст центр блока 1 ряда
            center_text_rgd = randomElement_rgd2.g_text;

            //актуальная ссылка
            center_game_url_rgd.href = center2_game_url + '?agent=823594';

            center_game_new_url = randomElement_rgd2.g_url;
        
            //текст задника = текст центр блока 2 ряда
            back_game_text.textContent = center_text_rgd;
            //картинка задника = картинка центр блока 2 ряда
            main_box_img_rgd.style.backgroundImage = 'url(' + center2_game_box_rgd_img + ')';}, 500);

            let randomElement_rgd3 = getRandomElement(games_baza);
    
            //опускает правый блок 1 ряда
            document.getElementById('right_game_box_rgd').style.zIndex = '0';
            //прячет правый блок 1 ряда
            document.getElementById('right_game_box_rgd').style.opacity = '0';
            //поднимает правый блок 2 ряда
            document.getElementById('right2_game_box_rgd').style.zIndex = '1';
            //показывает правый блок 2 ряда
            document.getElementById('right2_game_box_rgd').style.opacity = '1';
            //меняем ссылку 2 блока на новую перменную
            right2_game_url = right_game_new_url;
        
            setTimeout( function right_game_time() {

            //новый титл правого блока 1 ряда
            right_game_title_rgd.textContent = randomElement_rgd3.g_name;
            //новая картинка правого блока 1 ряда
            right_game_box_rgd.style.backgroundImage = 'url(' + randomElement_rgd3.g_img + ')';
            //новый текст правого блока 1 ряда
            right_text_rgd = randomElement_rgd3.g_text;

            //новая ссылка правого блока 1 ряда
            right_game_url_rgd.href = right2_game_url + '?agent=823594';

            right_game_new_url = randomElement_rgd3.g_url;}, 500);}

            block1_games();

    } else if (left_game1_z == '0') {

        function block2_games() {

        console.log('блок 2 сверху')

            let randomElement_rgd = getRandomElement(games_baza);

            //опускает левый блок 2 ряда вниз
            document.getElementById('left2_game_box_rgd').style.zIndex = '0';
            //прячет левый блок 2 ряда
            document.getElementById('left2_game_box_rgd').style.opacity = '0';
            //поднимает левый блок 1 ряда
            document.getElementById('left_game_box_rgd').style.zIndex = '1';
            //показывает левый блок 1 ряда
            document.getElementById('left_game_box_rgd').style.opacity = '1';
            //ссылка 1 блока равная новой переменной 
            left_game_url = left_game_new_url;

            setTimeout( function left2_game_time() {

            //новый титл левого блока 2 ряда
            left2_game_title_rgd.textContent = randomElement_rgd.g_name;
            //новая картинка левого блока 2 ряда
            left2_game_box_rgd.style.backgroundImage = 'url(' + randomElement_rgd.g_img + ')';
            //новый текст левого блока 2 ряда
            left2_text_rgd = randomElement_rgd.g_text;

            //актуальная ссылка
            left_game_url_rgd.href = left_game_url + '?agent=823594';

            left_game_new_url = randomElement_rgd.g_url;}, 500);


           let randomElement_rgd2 = getRandomElement(games_baza);
    
            //опускае центр блок 2 ряда
            document.getElementById('center2_game_box_rgd').style.zIndex = '0';
            //прячет центр блок 2 ряда
            document.getElementById('center2_game_box_rgd').style.opacity = '0';
            //поднимает центр блок 1 ряда
            document.getElementById('center_game_box_rgd').style.zIndex = '1';
            //показывает центр блок 1 ряда
            document.getElementById('center_game_box_rgd').style.opacity = '1';
            //меняем ссылку 1 блока на новую переменную
            center_game_url = center_game_new_url;

            setTimeout( function center2_game_time() {

            //видимый текст = тексту невидимого блока
            text_game_rgd.textContent = back_game_text.textContent;
        
            //новый титл центр блока 2 ряда
            center2_game_title_rgd.textContent = randomElement_rgd2.g_name;
            //новая картинка центр блока 2 ряда
            center2_game_box_rgd.style.backgroundImage = 'url(' + randomElement_rgd2.g_img + ')';
            //новый текст центр блока 2 ряда
            center2_text_rgd = randomElement_rgd2.g_text;

            //актуальная ссылка
            center_game_url_rgd.href = center_game_url + '?agent=823594';

            center_game_new_url = randomElement_rgd2.g_url;
        
            //текст задника = текст центр блока 2 ряда
            back_game_text.textContent = center2_text_rgd;
            //картинка задника = картинка центр блока 2 ряда
            main_box_img_rgd.style.backgroundImage = 'url(' + center2_game_box_rgd_img + ')';}, 500);


            let randomElement_rgd3 = getRandomElement(games_baza);
    
            //опускает правый блок 2 ряда
            document.getElementById('right2_game_box_rgd').style.zIndex = '0';
            //прячет правый блок 2 ряда
            document.getElementById('right2_game_box_rgd').style.opacity = '0';
            //поднимает правый блок 2 ряда
            document.getElementById('right_game_box_rgd').style.zIndex = '1';
            //показывает правый блок 2 ряда
            document.getElementById('right_game_box_rgd').style.opacity = '1';
            //меняем ссылку 1 блока на новую переменную
            right_game_url = right_game_new_url;

            setTimeout( function right2_game_time() {
        
            //новый титл правого блока 1 ряда
            right2_game_title_rgd.textContent = randomElement_rgd3.g_name;
            //новая картинка правого блока 1 ряда
            right2_game_box_rgd.style.backgroundImage = 'url(' + randomElement_rgd3.g_img + ')';
            //новый текст правого блока 1 ряда
            right2_text_rgd = randomElement_rgd3.g_text;

            //актуальная ссылка
            right_game_url_rgd.href = right_game_url + '?agent=823594';

            right_game_new_url = randomElement_rgd3.g_url;}, 500);

        }

        block2_games();
        
    } else {
        console.log('Ошибка общего алгоритма')
    };

    return f_h = 1;
}

    

    button_next_rgd.addEventListener('click', function() {
        console.log('Сработала общая функция');
        random_g();
        console.log('Теперь f_h = ' + f_h)
    })

    

    function MouseOnLeftGame() {
        if (f_h == 1){
        let left_game_box = document.getElementById('left_game_box_rgd');
        let left_game_box_url = window.getComputedStyle(left_game_box).backgroundImage;
        document.getElementById('main_box_img_rgd').style.backgroundImage = left_game_box_url;
        document.getElementById('text_game_rgd').textContent = left_text_rgd;
    } else {
        console.log('Ошибка функции ховера')
    }
    }
    
    
    function MouseOnCenterGame() {
        if (f_h == 1){
        let center_game_box = document.getElementById('center_game_box_rgd');
        let center_game_box_url = window.getComputedStyle(center_game_box).backgroundImage;
        document.getElementById('main_box_img_rgd').style.backgroundImage = center_game_box_url;
        document.getElementById('text_game_rgd').textContent = center_text_rgd;
        } else {
            console.log('Ошибка функции ховера')
        }
    }
    
    function MouseOnRightGame () {
        if (f_h == 1){
        let right_game_box = document.getElementById('right_game_box_rgd');
        let right_game_box_url = window.getComputedStyle(right_game_box).backgroundImage;
        document.getElementById('main_box_img_rgd').style.backgroundImage = right_game_box_url;
        document.getElementById('text_game_rgd').textContent = right_text_rgd; 
    } else {
        console.log('Ошибка функции ховера')
    }
    }

    function MouseOnLeft2Game() {
        if (f_h == 1){
        let left2_game_box = document.getElementById('left2_game_box_rgd');
        let left2_game_box_url = window.getComputedStyle(left2_game_box).backgroundImage;
        document.getElementById('main_box_img_rgd').style.backgroundImage = left2_game_box_url;
        document.getElementById('text_game_rgd').textContent = left2_text_rgd;
    } else {
        console.log('Ошибка функции ховера')
    }
    }

    function MouseOnCenter2Game() {
        if (f_h == 1){
        let center2_game_box = document.getElementById('center2_game_box_rgd');
        let center2_game_box_url = window.getComputedStyle(center2_game_box).backgroundImage;
        document.getElementById('main_box_img_rgd').style.backgroundImage = center2_game_box_url;
        document.getElementById('text_game_rgd').textContent = center2_text_rgd;
    } else {
        console.log('Ошибка функции ховера')
    }
    
    }

    function MouseOnRight2Game () {
        if (f_h == 1){
        let right2_game_box = document.getElementById('right2_game_box_rgd');
        let right2_game_box_url = window.getComputedStyle(right2_game_box).backgroundImage;
        document.getElementById('main_box_img_rgd').style.backgroundImage = right2_game_box_url;
        document.getElementById('text_game_rgd').textContent = right2_text_rgd; 
    } else {
        console.log('Ошибка функции ховера')
    }
    }



    //Цикл 2 - смена блоков

    function random_g_mob() {
    //доступ к топу блока 1 ряда
    let img_game_mob = document.getElementById('img_game_mob');
    let img_game_mob_z = window.getComputedStyle(img_game_mob).zIndex;
    console.log('top 1 = ' + img_game_mob_z)
    //доступ к топу блока 2 ряда
    let img_game2_mob = document.getElementById('img_game2_mob');
    let img_game2_mob_z = window.getComputedStyle(img_game2_mob).zIndex;
    console.log('top 2 = ' + img_game2_mob_z)

    if (img_game2_mob_z == '0') {

        function block1_mob(){

        console.log('блок 1 сверху')

        let randomElement_mob = getRandomElement(games_baza);

        document.getElementById('img_game_mob').style.zIndex = '0';
            //прячет правый блок 1 ряда
        document.getElementById('img_game_mob').style.opacity = '0';
            //поднимает правый блок 2 ряда
        document.getElementById('img_game2_mob').style.zIndex = '1';
            //показывает правый блок 2 ряда
        document.getElementById('img_game2_mob').style.opacity = '1';
        url_game_mob.href = url_game2_mob_new + '?agent=823594';

        setTimeout ( function first_game_time() {

        img_game_mob.style.backgroundImage = 'url(' + randomElement_mob.g_img + ')';
        title_game_mob.textContent = randomElement_mob.g_name;
        url_game2_mob_new = randomElement_mob.g_url;
        info_mob.textContent = back_mob_text.textContent;
        back_mob_text.textContent = randomElement_mob.g_text;}, 500);

        }
        block1_mob();

    } else if (img_game_mob_z == '0') {

        function block2_mob(){

        console.log('блок 2 сверху')

        let randomElement_mob = getRandomElement(games_baza);

        document.getElementById('img_game2_mob').style.zIndex = '0';
            //прячет правый блок 1 ряда
        document.getElementById('img_game2_mob').style.opacity = '0';
            //поднимает правый блок 2 ряда
        document.getElementById('img_game_mob').style.zIndex = '1';
            //показывает правый блок 2 ряда
        document.getElementById('img_game_mob').style.opacity = '1';
        url_game_mob.href = url_game2_mob_new + '?agent=823594';

        setTimeout( function second_game_time() {

        img_game2_mob.style.backgroundImage = 'url(' + randomElement_mob.g_img + ')';
        title_game2_mob.textContent = randomElement_mob.g_name;
        url_game2_mob_new = randomElement_mob.g_url;
        info_mob.textContent = back_mob_text.textContent;
        back_mob_text.textContent = randomElement_mob.g_text;}, 500);
        }

        block2_mob();
        
    }else {
        console.log('Ошибка общего мобильного алгоритма')
    }

    return f_h_m = 1;
}

button_mob.addEventListener('click', function() {
    console.log('Сработала общая мобильная функция');
    random_g_mob();
    console.log('Теперь f_h_m = ' + f_h_m)
})
