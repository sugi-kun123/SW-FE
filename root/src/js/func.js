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
                $thum = '';
            if (data[i].image) {
                $thum = data[i].image.thumbnail.contentUrl;
            } else if (data[i].provider) {
                $thum = data[i].provider[0].image.thumbnail.contentUrl;
            }
            if (data[i].category = 'undefined') {
                $category = '';
            }
            let li = '<li id="news-' + i + '" class="news-li FnArticle">' +
                '<p class="news-thum"><img src="' + $thum + '" /></p>' +
                '<div>' +
                '<p class="news-name">' + $name + '</p>' +
                '<p class="news-cat">' + $category + '</p>' +
                '</div>' +
                '<div style="display: none;">' +
                '<p class="news-url">' + $url + '</p>' +
                '<p class="news-desc">' + $desc + '</p>' +
                '</div>' +
                '</li>';
            $('#news-wrap').append(li);
        }
        // モーダル
        let $article = document.getElementsByClassName('FnArticle');
        for (let j = 0; j < $article.length; j++) {
            $article[j].onclick = function () {
                let $category = data[j].category;
                if (data[j].category = 'undefined') {
                    $category = '-';
                }
                let $cnt = '<h2 class="modal-title">' + data[j].name + '</h2>' +
                    '<p class="modal-category">category : ' + $category + '</p>' +
                    '<p class="modal-description">' + data[j].description + '...</p>' +
                    '<a class="modal-link" href="' + data[j].url + '" target="_blank">記事ページへ</a>';
                $('#modal-content').append($cnt);
                $('.popup').addClass('show').fadeIn();
            }
        }
        $('#close').on('click', function () {
            $('.popup').hide();
            $('#modal-content').empty();
        });
    });
})
