let fs = require('fs');
//1.写入的内容都是什么类型，写入是utf8格式
//2.如果文件不存在 则创建 有内容则清空，在写入新的内容 w
//let buffer = new Buffer('hello1');
let obj = {name:1,age:2};//如果是对象 要写入文件需要JSON.stringify
//fs.writeFileSync('./age.txt',JSON.stringify(obj));

//writeFile
fs.writeFile('./age.txt',1,function (err) {
    console.log(err);
});