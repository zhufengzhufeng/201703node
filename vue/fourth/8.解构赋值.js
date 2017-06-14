//同样的结构可以解构
//对象解构
let obj = {name:'zfpx',age:8};
let {name:name2,age} = obj;
console.log(name2,age);
//数组解构
let arr = [1,2];
let [a1,a2,a3] = arr;
console.log(a1,a2,a3);
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log([...arr1,...arr2]);
let obj1 = {name:1};
let obj2 = {age:2};
console.log({...obj1,...obj2}); //这个在node中是不识别的 es7语法是可以的