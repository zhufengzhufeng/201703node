//fs 模块 核心模块
let fs = require('fs'); //require 同步
let school = {};
//1.两个同时读取=> 同步结果 （以最慢的为准）
fs.readFile('./age.txt','utf8',function (err,data) {
    //err代表的是错误
    console.log(data);
});
fs.readFile('./name.txt','utf8',function (err,data) {
    //err代表的是错误
    console.log(data);
});
console.log(school);
/*
let school = {};
let age = fs.readFileSync('./age.txt','utf8');
let name = fs.readFileSync('./name.txt','utf8');
school.name = name;
school.age = age;
console.log(school);*/
