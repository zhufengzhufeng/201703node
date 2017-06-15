//这个语法 不能再浏览器中使用，webpack可以将commonjs规范转化成识别的
/*
let str = require('./component');
console.log(str);*/

import str from './component.js';
let a = ()=> str;
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log([...arr1,...arr2]);