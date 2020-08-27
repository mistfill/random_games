
let menu_a = 1;

function plusClick(){
    /*console.log(menu_a)*/
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
}

console.log('test start')
