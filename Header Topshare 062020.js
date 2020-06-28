let allNews = [];

let takeNews = new XMLHttpRequest();

takeNews.open('GET', 'https://topshare.news/rss-feed-172569344805.xml');

takeNews.send();

takeNews.onload = function(){
    if (takeNews.status != 200) {
        console.log('Ошибка соединения ' + takeNews.status);
        return
    } 
    else {
        let news_resp = takeNews.responseXML;

        let news_id = 0;
        let all_news_id = [];

        while(news_id < 50){
            all_news_id.push(news_id);
            news_id += 1;
        }

        all_news_id.forEach(ids => {
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

            allNews.push(newsBox)
            }
            catch{
                imgNews = 'https://static.tildacdn.com/tild3861-3162-4737-b130-646566633639/pattern_11.png';
                //console.log('изображения нет')
                newsBox.push(titleNews, linkNews, category1News, imgNews);
                //console.log(newsBox)

                allNews.push(newsBox)
            }
        });
    }

    console.log(allNews)

    let topboxid = 1;

    allNews.forEach(news => {

        let cat = news[2];
        
        if(cat == "Шапка Главная" && topboxid<5){

            try{
                let changedNewsD = document.getElementById('desktop_news_title' + topboxid); //стучимся в титл новостей
                changedNewsD.textContent = news[0];

                let changedImgD = document.getElementById('desktop_news_img' + topboxid); //стучимся в картинки новостей
                let ImgNewsD = news[3];
                changedImgD.style.backgroundImage = 'url(' + ImgNewsD + ')';

                let changedLinkD = document.querySelector('.desktop_url' + topboxid);
                //console.log(news[1])
                changedLinkD.href = news[1];

                let changedNews = document.getElementById('mobile_new_title' + topboxid); //стучимся в титл новостей
                changedNews.textContent = news[0];

                let changedImg = document.getElementById('mobile_new_img' + topboxid); //стучимся в картинки новостей
                let ImgNews = news[3];
                changedImg.style.backgroundImage = 'url(' + ImgNews + ')';

                let changedLink = document.querySelector('.mobile_url' + topboxid);
                //console.log(news[1])
                changedLink.href = news[1];

                topboxid += 1;
            }
            finally{
                return
            }
        }
        else {
            return
        }

    })
}
