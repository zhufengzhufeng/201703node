//fs fileSystem 读文件和写文件 node自带的模块
let fs = require('fs');
// 工作中开发，不会用同步
//1.读取的文件必须存在
//2.读出的内容 默认是utf8格式
//3.文件会被读取到内存中，不能读取比内存大的文件
/*  同步可以try catch
let name = fs.readFileSync('./name.txt','utf8');
let age = fs.readFileSync('./age.txt','utf8');
let school = {name,age};
console.log(school);*/

let EventEmitter = require('events');
let e = new EventEmitter; //事件触发器
let school = {};
//异步怎么处理 数据和错误,error-first
fs.readFile('./name.txt','utf8',function (err,data) {
    if(err)console.log(err);
    school.name = data;
    e.emit('输出');//发布
});
fs.readFile('./age.txt','utf8',function (err,data) {
    if(err)console.log(err);
    school.age = data;
    e.emit('输出');
});
e.on('输出',function () { //订阅 {'输出':[func]}
    console.log(Object.keys(school)); //将对象转化成数组
    if(Object.keys(school).length === 2)
    console.log(school); //发布订阅 把输出的功能作为发布 ，当name和age读完后发布事件
});
//Promise resolve reject  then