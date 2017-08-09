/**
 * Created by dllo on 17/8/8.
 */
var cheerio = require('cheerio');
var request = require('request');
var url = 'https://www.douban.com/';
var download = require('./download');
var webpage = require('webpage');


var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
}
request.get(options, function (error, response, body) {
    // console.log(request.)
    // console.log(body)
    var $ = cheerio.load(body);
    var hot_picture = [];
    //豆瓣热门图片

    $("body>div:nth-child(3) .wrapper .main .mod .albums>ul>li .pic>a>img").each(function (index, element) {
        //console.log(element);
        var picture = $(element).attr('data-origin');
        // console.log($(element).attr('href'))
        hot_picture.push(picture);
        download(picture, 'myDouban', 'hot' + index + 'jpg');

    })
    // console.log(hot_picture)
    var hot_text = []
    $(".wrapper>.main>.mod>.notes>ul>li>a").each(function (index, element) {
        //console.log(element);
        var text = $(element).text();
        // console.log($(element).attr('href'))
        hot_text.push(text);
        // download(picture,'myDouban','hot'+index+'jpg');

    })
    //console.log(hot_text)
    var time_picture = [];
    $("#anony-time>.wrapper>.main>ul>li>a>img").each(function (index,element) {
       var pictures = $(element).attr('src');
       time_picture.push(pictures);
       download(pictures,'myDouban','time'+index+'jpg');
    })
    // console.log(time_picture)
    var time_text =[];
    $("#anony-time>.wrapper>.main>ul>li>.title").each(function (index,element) {
        var texts = $(element).text();
        time_text.push(texts);
    })
    // console.log(time_text)

    var movie_pic = [];
    $("#anony-movie>.wrapper>.main>.movie-list list>ul>li>a>img").each(function (index,element) {
        var filmpic = $(element).attr('src');
        movie_pic.push(filmpic);
        download(filmpic,'myDouban','movie'+index+'jpg');
    })
    console.log(movie_pic);
})


