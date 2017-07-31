/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs');
//读取文件
// fs.readFile('作业.txt');
fs.open('作业.txt','a',function (err,data) {
    if(err){
        return console.error(err);
    }
    console.log('老师你好!老师再见')
})


//utime
fs.utimes('作业.txt',Date.now(),Date.now(),function () {
 if(error){
     console.log('成功');
 }else{
     console.error(error);
 }
})

//watchFile
var watchFile  =  fs.watchFile('作业.txt' ,{
    interval: 20
}, function(curr, prev) {
    if (Date.parse(prev.ctime) == 0) {
        console.log('文件被创建');
    } else if (Date.parse(curr.ctime) == 0) {
        console.log('文件被删除');
    } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
        console.log('文件有修改');
    }
});

//unwatchFile
fs.unwatchFile('./1.txt', watchFile);


//link
fs.link('作业.txt', '新创.txt', function (error) {
    if(!error){
         console.log("成功");
     }else {
         console.error(error);
     }
})

