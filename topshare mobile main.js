let news_info = new XMLHttpRequest();

news_info.open('GET', 'https://topshare.news/rss-feed-172569344805.xml');

news_info.send();

let all_news = [];

news_info.onload = function(){
    if (news_info.status != 200) {
        console.log('Ошибка' + news_info.status);
        return
    } 
    else {
        let news_resp = news_info.responseXML;
        console.log(news_resp)
        console.log(typeof news_resp)

        let news_id = 0;
        let all_news_id = [];

        while(news_id < 100){
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
        
    }
    console.log(all_news)

    let oneNewsId = 1;

    let newsBox1 = 1;
    let lifeBox = 1;
    let videoBox = 1;

    let newsBoxLenght = 10;
    let otherBoxLenght = 6;

    all_news.forEach(news => {
        console.log(news)
        console.log(oneNewsId)

        let cat = news[2];

        if(cat == "Новости Главная" && newsBox1<11){
            console.log(cat)
            //меняем название
            let changedNews = document.getElementById('title_game_news' + newsBox1); //стучим в Титл новости
            changedNews.textContent = news[0]; //Титл новости равен Титлу из RSS

            //меняем изображение
            let changedImg = document.getElementById('img_game' + newsBox1 + '_mob');
            let ImgNew = news[3];
            changedImg.style.backgroundImage = 'url(' + ImgNew + ')';

            //меняем ссылку
            let changedLink = document.querySelector('.link_news' + newsBox1 + '_mob');
            changedLink.href = news[1];
            newsBox1 +=1;
        }
        else if(cat == "Топ Главная" && lifeBox<6){
            console.log(cat)
            //меняем название
            let changedNews = document.getElementById('title_life' + lifeBox); //стучим в Титл новости
            changedNews.textContent = news[0]; //Титл новости равен Титлу из RSS

            //меняем изображение
            let changedImg = document.getElementById('img_life' + lifeBox + '_mob');
            let ImgNew = news[3];
            changedImg.style.backgroundImage = 'url(' + ImgNew + ')';

            //меняем ссылку
            let changedLink = document.querySelector('.link_life' + lifeBox + '_mob');
            changedLink.href = news[1];
            lifeBox +=1;
        }
        else if(cat == "Видео Главная" && videoBox<6){
            console.log(cat)
            //меняем название
            let changedNews = document.getElementById('title_video' + videoBox); //стучим в Титл новости
            changedNews.textContent = news[0]; //Титл новости равен Титлу из RSS

            //меняем изображение
            let changedImg = document.getElementById('img_video' + videoBox + '_mob');
            let ImgNew = news[3];
            changedImg.style.backgroundImage = 'url(' + ImgNew + ')';

            //меняем ссылку
            let changedLink = document.querySelector('.link_video' + videoBox + '_mob');
            changedLink.href = news[1];
            videoBox +=1;
        }
        else if(cat == "Видео Страница" && videoBox<6){
            console.log(cat)
            //меняем название
            let changedNews = document.getElementById('title_video' + videoBox); //стучим в Титл новости
            changedNews.textContent = news[0]; //Титл новости равен Титлу из RSS

            //меняем изображение
            let changedImg = document.getElementById('img_video' + videoBox + '_mob');
            let ImgNew = news[3];
            changedImg.style.backgroundImage = 'url(' + ImgNew + ')';

            //меняем ссылку
            let changedLink = document.querySelector('.link_video' + videoBox + '_mob');
            changedLink.href = news[1];
            videoBox +=1;
        }

        oneNewsId +=1;
    });
    
}



