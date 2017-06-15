//这个语法 不能再浏览器中使用，webpack可以将commonjs规范转化成识别的
/*
let str = require('./component');
console.log(str);*/
import str from './component.js';
import './index.css';
import './style.less';
// import src from './1.jpg';
let a = ()=> str;
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log([...arr1,...arr2]);
let obj1 = {name:1};
let obj2 = {age:2};
console.log({...obj1,...obj2});
let oImg = document.createElement('img');
let oImg1 = document.createElement('img');
let oImg2 = document.createElement('img');
// oImg.src = src; //在js中引用路径如果是字符串 默认不会将图片导出
oImg1.src = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
oImg2.src = './1.jpg';
//在js中引用路径如果是字符串 默认不会将图片导出
// document.body.appendChild(oImg);
document.body.appendChild(oImg1);


//我喜欢 前端清一色 import export  服务端 exports module.exports
//js文件用import export (css/img 用require)


//vue-cli 就是基于webpack搭建的项目
//npm install vue-cli -g 安装后全局命令行下 有个vue的命令
//simple / webpack