//上一个的输出 是下一个的输入
let fs = require('fs'); //回调地狱
fs.readFile('./name.txt','utf8',function (err,data) {
    fs.readFile(data,'utf8',function (err,data) {
        console.log(data);
    })
});