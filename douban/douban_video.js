/**
 * Created by dllo on 17/8/9.
 */
var page = webpage.create();
phantom.outputEncoding = 'utf-8';
var fs = require('fs');

//视频
page.onConsoleMessage = function (msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg);
};
page.open('http://pianke.me',function (status) {
    if(status === 'success'){
        console.log('加载成功');
        page.includeJs("https:11//unpkg.com/jquery@3.2.1/dist/jquery.js", function () {
            setTimeout(function () {
                var arr = page.evaluate(function () {
                    var am_arr = [];
                    $("#anony-video>.wrapper>.main>.video-banzui>li>.video-cover>a").each(function (index,element) {
                        var video=$(element).css('background-image').replace('url(','').replace(')','');
                        arr.push(b);
                    });
                    return am_arr;
                })
                fs.write('./myDouban', m_arr);
                //console.log(m);
                phantom.exit(0)
            },5000)

        })

    }else {
        console.log('加载失败');
        phantom.exit(0);
    }
})