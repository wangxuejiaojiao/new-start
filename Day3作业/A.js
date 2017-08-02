/**
 * Created by dllo on 17/8/2.
 */
//1.先创建服务
    //2.创建需要访问的文件
    // 3.读取文件
    //4.获取url,根据url的pathname,进行文件读取
    //5.引入url模块,进行request.url解析
    //6.判断路径是否正确,正确200,错误404
    //7.拼接绝对路径 _dirname pathname
    //8.读取,response.end


var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
// fs.readFile('./img.jpg', 'binary', function (err, data) {
//     console.log(err);
//     })

var server = http.createServer(function (request,response) {
    var urlObj = url.parse(request.url);
    console.log(urlObj);
    var pathname = urlObj.pathname;
    if(pathname==='/img.jpg'){
        var finalPath = path.join(__dirname,pathname);
        fs.readFile(finalPath, 'binary', function (err, data) {
             // response.write(data,'binary');
            response.end(data,'binary');
        })
    }else{
        response.statusCode =404;
        response.end('未知');
    }

})
server.listen(3000,function () {
    console.log('服务器运行在http://localhost:8080');
})