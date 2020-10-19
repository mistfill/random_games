
let menu_a = 1;

bbh_id = 0;

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
