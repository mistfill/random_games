
let menu_a = 1;

/*function plusClick(){
    /*console.log(menu_a)
    let one = document.getElementById('one');
    let oneClass = one.className;
    
    if (oneClass == 'one') {
        one.className = 'test1'
    } 
    else {
        one.className = 'one';
    }

    let two = document.getElementById('two');
    let twoClass = two.className;

    if (twoClass == 'two') {
        two.className = 'test2'
    } 
    else {
        two.className = 'two';
    }

    let menu_box = document.getElementById('menu_box');
    let menu_towns = document.getElementById('menu_towns');

    if (menu_a == 1) {
        menu_box.style.height = '150px';
        menu_a = 2;
        menu_towns.style.display = 'unset';
    }
    else {
        menu_box.style.height = '75px'
        menu_a = 1;
        menu_towns.style.display = 'none';
    }
}*/

bbh_id = 0;

/*function showCitys() {
    let big_button_hide = document.getElementById('big_button_hide');
    let city_box = document.getElementById('city_box');

    if (bbh_id == 0){
        big_button_hide.style.opacity = 1;
        big_button_hide.style.cursor = 'pointer';
        city_box.style.top = '60vh';
        city_box.style.display = 'flex';
    }
}

function hideCitys(){
    let big_button_hide = document.getElementById('big_button_hide');
    big_button_hide.style.opacity = 0;
    big_button_hide.style.cursor = 'unset';

    let city_box = document.getElementById('city_box');
    city_box.style.top = '120vh';
    city_box.style.display = 'none';
}*/

function showCitys(){
    let start = Date.now();

    let top_id = 120;

    let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;
      
        if (timePassed >= 300) {
          clearInterval(timer); // закончить анимацию через 1 секунду
          return;
        }
      
        top_id -= 4.5;

        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(top_id);
      
    }, 20);

    function draw(top_id) {
        let city_box = document.getElementById('city_box');

        console.log(top_id)

        city_box.style.display = 'flex';
        city_box.style.height = '60vh';
        city_box.style.top = top_id + 'vh';
    }

    let big_button_hide = document.getElementById('big_button_hide');
    big_button_hide.style.opacity = 1;
    big_button_hide.style.cursor = 'pointer';
}


function hideCitys(){
    let start = Date.now();

    let top_id = 60;

    let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;
      
        if (timePassed >= 300) {
          clearInterval(timer); // закончить анимацию через 1 секунду
          return;
        }
      
        top_id += 4.5;

        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(top_id);
      
    }, 10);

    function draw(top_id) {
        let city_box = document.getElementById('city_box');

        console.log(top_id)

        //city_box.style.display = 'none';
        city_box.style.height = '60vh';
        city_box.style.top = top_id + 'vh';

        let big_button_hide = document.getElementById('big_button_hide');
        big_button_hide.style.opacity = 0;
        big_button_hide.style.cursor = 'unset';
    }
}