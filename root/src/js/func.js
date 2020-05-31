$(function () {
    $('.fnContinue').on('click', function () {
        let date = $(this).find('.date').text(),
         genre = $(this).find('.genre').text(),
         img = $(this).find('img').attr('src'),
         title = $(this).find('.title').text(),
         txt = $(this).find('.txt').text();
        console.log(date);
        console.log(genre);
        console.log(img);
        console.log(title);
        console.log(txt);
        location.href = "article.html?title=" + encodeURIComponent(title);

    })
    let queryStr = window.location.search;
    if(queryStr){
        queryStr = queryStr.substring(1);
        let parameters = queryStr.split('&');
        for (let i = 0; i < parameters.length; i++) {
            let element = parameters[i].split('='),
                paramValue = decodeURIComponent(element[1]);
            document.getElementById("title").innerText = paramValue;
        }
    }
})
