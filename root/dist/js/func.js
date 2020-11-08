$(function () {
    // $('.fnContinue').on('click', function () {
    //     let date = $(this).find('.date').text(),
    //         genre = $(this).find('.genre').text(),
    //         img = $(this).find('img').attr('src'),
    //         title = $(this).find('.title').text(),
    //         txt = $(this).find('.txt').text();
    //     console.log(date);
    //     console.log(genre);
    //     console.log(img);
    //     console.log(title);
    //     console.log(txt);
    //     location.href = "article.html?title=" + encodeURIComponent(title);

    // })
    // let queryStr = window.location.search;
    // if (queryStr) {
    //     queryStr = queryStr.substring(1);
    //     let parameters = queryStr.split('&');
    //     for (let i = 0; i < parameters.length; i++) {
    //         let element = parameters[i].split('='),
    //             paramValue = decodeURIComponent(element[1]);
    //         document.getElementById("title").innerText = paramValue;

    //     }
    // }

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "b0db3aa7dcmshbbfd7e2ab5b146ep19e116jsn4c8326ca6cf5"
        }
    }
    $.ajax(settings).done(function (response) {
        let data = [];
        data = response.value;
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let $name = data[i].name,
                $url = data[i].url,
                $desc = data[i].description,
                $category = data[i].category,
                $thum = data[i].image.thumbnail.contentUrl;
            let li = '<li>' +
                '<p><img src="' + $thum + '" /></p>' +
                '<div>' +
                '<p>' + $name + '</p>' +
                '<p>' + $category + '</p>' +
                '</div>' +
                '</li>';
            $('#news-wrap').prepend(li);
        }
    });
})
