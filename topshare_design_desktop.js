
function hide_body_download(){
    let obl_body_download = document.getElementById('obl_body_download');
    
    let 

    //body_download.style.opacity = 0;
    obl_body_download.style.zIndex = 0;
    obl_body_download.style.height = '1vh';
    obl_body_download.style.width = '1vw';
    
    obl_body_download.style.top = '-9999px';
    obl_body_download.style.left = '-9999px';
    
    console.log('Убиралка работает')
    console.log('Делаем 1 пиксель')
}
    setTimeout(hide_body_download, 2000);
console.log('Убиралка подключилась')

let news_info = new XMLHttpRequest();

news_info.open('GET', 'https://topshare.news/rss-feed-172569344805.xml');

news_info.send();

let all_news = [];

let LifeLinks =[];

let SomeImgDesktop = [];

let LifeTitle1;
let LifeTitle2;
let LifeTitle3;
let LifeTitle4;
let LifeTitle5;

news_info.onload = function(){
    if (news_info.status != 200) {
        console.log('Ошибка' + news_info.status);
        return
    } 
    else {
        let news_resp = news_info.responseXML;
        //console.log(news_resp)
        //console.log(typeof news_resp)

        let news_id = 0;
        let all_news_id = [];

        while(news_id < 150){
            all_news_id.push(news_id);
            news_id += 1;
        }
        //console.log(all_news_id)

        all_news_id.forEach(ids => {
            //console.log('Новость ' + (ids+1))

            let newsBox = [];

            let newsInfo1 = news_resp.getElementsByTagName('channel')[0];

            let newsInfo2 = newsInfo1.getElementsByTagName('item')[ids];
            //console.log(newsInfo2)

            let titleNews = newsInfo2.getElementsByTagName('title')[0].textContent;
            //console.log(titleNews)

            let linkNews = newsInfo2.getElementsByTagName('link')[0].textContent;
            //console.log(linkNews)

            let category1News = newsInfo2.getElementsByTagName('category')[0].textContent;
            //console.log(category1News)

            let contentInfo = newsInfo2.getElementsByTagName('turbo:content')[0].innerHTML;

            let parser = new DOMParser();
            let contentInfoValue = parser.parseFromString(contentInfo, 'text/html');
            
            try{
            let imgNews = contentInfoValue.querySelectorAll('img')[0].src;
            //console.log(imgNews)

            newsBox.push(titleNews, linkNews, category1News, imgNews);
            //console.log(newsBox)

            all_news.push(newsBox)
            }
            catch{
                imgNews = 'https://static.tildacdn.com/tild3861-3162-4737-b130-646566633639/pattern_11.png';
                //console.log('изображения нет')
                newsBox.push(titleNews, linkNews, category1News, imgNews);
                //console.log(newsBox)

                all_news.push(newsBox)
            }

        });
        
    };

    //console.log(all_news)

    let oneNewsId = 1;


    let newsBox1 = 1;
    let lifeBox = 1;
    let videoBox = 1;
    let relBox = 1;

    all_news.forEach(news => {

        let cat = news[2];
        
        if(cat == "Новости Главная" && newsBox1<6){
            let changedNews = document.getElementById('title_news_but_desktop' + newsBox1); //стучимся в титл новостей
            changedNews.textContent = news[0];

            let changedImg = document.getElementById('img_news_desktop' + newsBox1); //стучимся в картинки новостей
            let ImgNews = news[3];
            changedImg.style.backgroundImage = 'url(' + ImgNews + ')';

            let changedLink = document.querySelector('.news_link_desktop' + newsBox1);
            console.log(news[1])
            changedLink.href = news[1];

            newsBox1 += 1;
        }
        else if(cat == "Топ Главная" && lifeBox<6){
            let NewLifeTitle = document.querySelector('.life_title_news_desktop' + lifeBox);
            NewLifeTitle.textContent = news[0];

            let NewLifeImg = document.getElementById('life_box_desktop' + lifeBox);
            NewLifeImg.style.backgroundImage = 'url(' + news[3];

            LifeLinks.push(news[1]);
            //console.log(LifeLinks)

            SomeImgDesktop.push(news[3]);
            //console.log(SomeImgDesktop)

            let life_but_desktop = document.querySelector('.life_but_desktop');
            life_but_desktop.href = LifeLinks[0];

            lifeBox += 1;
        }
        else if(cat == "Видео Главная" && videoBox<2){
            let video_box_desktop = document.getElementById('video_box_desktop');
            video_box_desktop.style.backgroundImage = 'url(' + news[3] + ')';

            let title_video_news_desktop = document.querySelector('.title_video_news_desktop');
            title_video_news_desktop.textContent = news[0];

            let video_but_desktop = document.querySelector('.video_but_desktop');
            video_but_desktop.href = news[1];

            videoBox += 1;
        }
        else if(cat == "Видео Страница" && videoBox<2){
            let video_box_desktop = document.getElementById('video_box_desktop');
            video_box_desktop.style.backgroundImage = 'url(' + news[3] + ')';

            let title_video_news_desktop = document.querySelector('.title_video_news_desktop');
            title_video_news_desktop.textContent = news[0];

            let video_but_desktop = document.querySelector('.video_but_desktop');
            video_but_desktop.href = news[1];

            videoBox += 1;
        }
        else if(cat == "Релизы" && relBox<4){
            let img_relise_desktop = document.getElementById('img_relise_desktop' + relBox);
            img_relise_desktop.style.backgroundImage = 'url(' + news[3] + ')';

            let relise_title_but_desktop = document.querySelector('.relise_title_but_desktop' + relBox);
            relise_title_but_desktop.textContent = news[0];

            relBox += 1;
        }
    })
    return LifeLinks, SomeImgDesktop;
}

//console.log(LifeLinks)
//console.log(SomeImgDesktop)

let LifeDesktop1 = document.getElementById('life_box_desktop1');//первый слайд
LifeZ1 = 1;
let LifeDesktop2 = document.getElementById('life_box_desktop2');//второй слайд
LifeZ2 = 0;
let LifeDesktop3 = document.getElementById('life_box_desktop3');//третий слайд
LifeZ3 = 0;
let LifeDesktop4 = document.getElementById('life_box_desktop4');//четвертый слайд
LifeZ4 = 0;
let LifeDesktop5 = document.getElementById('life_box_desktop5');//пятый слайд
LifeZ5 = 0;
//console.log('Подключили кнопки')




function nextLifeDesktop(){//листать вперед
    //console.log(SomeImgDesktop[0])

    let LifeDesktop1 = document.getElementById('life_box_desktop1');//первый слайд
    let LifeDesktop2 = document.getElementById('life_box_desktop2');//второй слайд
    let LifeDesktop3 = document.getElementById('life_box_desktop3');//третий слайд
    let LifeDesktop4 = document.getElementById('life_box_desktop4');//четвертый слайд
    let LifeDesktop5 = document.getElementById('life_box_desktop5');//пятый слайд

    let LifeT = document.querySelector('.life_title_news_desktop');
    let LifeT1 = document.querySelector('.life_title_news_desktop1');
    let LifeT2 = document.querySelector('.life_title_news_desktop2');
    let LifeT3 = document.querySelector('.life_title_news_desktop3');
    let LifeT4 = document.querySelector('.life_title_news_desktop4');
    let LifeT5 = document.querySelector('.life_title_news_desktop5');

    let life_but_desktop = document.querySelector('.life_but_desktop');


    if(LifeZ1 > 0){
        console.log('Life1 сверху')
        LifeDesktop1.style.backgroundImage = LifeDesktop2.style.backgroundImage;

        LifeT.textContent = LifeT1.textContent;//Сохраняем первый заг
        LifeT1.textContent = LifeT2.textContent;

        life_but_desktop.href = LifeLinks[1];
        //console.log(LifeLinks[1])

        LifeZ1 = 0;
        LifeZ2 = 1;

        //console.log('Второ блок индекс = ' + LifeDesktop2.style.zIndex)
    }
    else if(LifeZ2 > 0){
        console.log('Life2 сверху')
        LifeDesktop1.style.backgroundImage = LifeDesktop3.style.backgroundImage;

        LifeT1.textContent = LifeT3.textContent;

        life_but_desktop.href = LifeLinks[2];
        //console.log(LifeLinks[2])

        LifeZ2 = 0;
        LifeZ3 = 1;

        //console.log('Третий блок индекс = ' + LifeDesktop3.style.zIndex)
    }
    else if(LifeZ3 > 0){
        console.log('Life3 сверху')
        LifeDesktop1.style.backgroundImage = LifeDesktop4.style.backgroundImage;

        LifeT1.textContent = LifeT4.textContent;

        life_but_desktop.href = LifeLinks[3];
        //console.log(LifeLinks[3])

        LifeZ3 = 0;
        LifeZ4 = 1;

        //console.log('Четвертый блок индекс = ' + LifeDesktop4.style.zIndex)
    }
    else if(LifeZ4 > 0){
        console.log('Life4 сверху')
        LifeDesktop1.style.backgroundImage = LifeDesktop5.style.backgroundImage;

        LifeT1.textContent = LifeT5.textContent;

        life_but_desktop.href = LifeLinks[4];
        //console.log(LifeLinks[4])

        LifeZ4 = 0;
        LifeZ5 = 1;

        //console.log('Пятый блок индекс = ' + LifeDesktop5.style.zIndex)
    }
    else if(LifeZ5 > 0){
        console.log('Life5 сверху')
        LifeDesktop1.style.backgroundImage = 'url(' + SomeImgDesktop[0] + ')';

        LifeT1.textContent = LifeT.textContent;

        life_but_desktop.href = LifeLinks[0];
        //console.log(LifeLinks[5])

        LifeZ5 = 0;
        LifeZ1 = 1;

        //console.log('Первый блок индекс = ' + LifeDesktop1.style.zIndex)
    }
}

function preLifeDesktop(){ //обратный порядок
    let LifeDesktop1 = document.getElementById('life_box_desktop1');//первый слайд
    let LifeDesktop2 = document.getElementById('life_box_desktop2');//второй слайд
    let LifeDesktop3 = document.getElementById('life_box_desktop3');//третий слайд
    let LifeDesktop4 = document.getElementById('life_box_desktop4');//четвертый слайд
    let LifeDesktop5 = document.getElementById('life_box_desktop5');//пятый слайд

    let LifeT = document.querySelector('.life_title_news_desktop');
    let LifeT1 = document.querySelector('.life_title_news_desktop1');
    let LifeT2 = document.querySelector('.life_title_news_desktop2');
    let LifeT3 = document.querySelector('.life_title_news_desktop3');
    let LifeT4 = document.querySelector('.life_title_news_desktop4');
    let LifeT5 = document.querySelector('.life_title_news_desktop5');

    if(LifeZ1 > 0){
        //console.log('Life1 сверху')
        LifeDesktop1.style.backgroundImage = LifeDesktop5.style.backgroundImage;

        LifeT.textContent = LifeT1.textContent;//Сохраняем первый заг
        LifeT1.textContent = LifeT5.textContent;

        life_but_desktop.href = LifeLinks[4];

        LifeZ1 = 0;
        LifeZ5 = 1;

        //console.log('Второ блок индекс = ' + LifeDesktop2.style.zIndex)
    }
    else if(LifeZ5 > 0){
        //console.log('Life5 сверху')
        LifeDesktop1.style.backgroundImage = LifeDesktop4.style.backgroundImage;

        LifeT1.textContent = LifeT4.textContent;

        life_but_desktop.href = LifeLinks[3];

        LifeZ5 = 0;
        LifeZ4 = 1;

        //console.log('Первый блок индекс = ' + LifeDesktop1.style.zIndex)
    }
    else if(LifeZ4 > 0){
        console.log('Life4 сверху')
        LifeDesktop1.style.backgroundImage = LifeDesktop3.style.backgroundImage;

        LifeT1.textContent = LifeT3.textContent;

        life_but_desktop.href = LifeLinks[2];

        LifeZ4 = 0;
        LifeZ3 = 1;

        //console.log('Пятый блок индекс = ' + LifeDesktop5.style.zIndex)
    }
    else if(LifeZ3 > 0){
        //console.log('Life3 сверху')
        LifeDesktop1.style.backgroundImage = LifeDesktop2.style.backgroundImage;

        LifeT1.textContent = LifeT2.textContent;

        life_but_desktop.href = LifeLinks[1];

        LifeZ3 = 0;
        LifeZ2 = 1;

        //console.log('Четвертый блок индекс = ' + LifeDesktop4.style.zIndex)
    }
    else if(LifeZ2 > 0){
        //console.log('Life2 сверху')
        LifeDesktop1.style.backgroundImage = 'url(' + SomeImgDesktop[0] + ')';

        LifeT1.textContent = LifeT.textContent;

        life_but_desktop.href = LifeLinks[0];

        LifeZ2 = 0;
        LifeZ1 = 1;

        //console.log('Третий блок индекс = ' + LifeDesktop3.style.zIndex)
    }
}

setInterval(() => {
    //console.log("Смена обложек запущена")
    nextLifeDesktop();
}, 4000);
