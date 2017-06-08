//1.promise是Promise的实例
//2.resolve,reject都是函数类型
//3.当new Promise是 内部的函数会立刻执行
//4.实例上就会增加一个then方法
let fs = require('fs');
let promise = new Promise((resolve,reject)=>{
    console.log('hello');
    fs.readFile('./name.txt','utf8',function (err,data) {
        if(err)reject(err);
        resolve(data)
    });
});
//5.永久不能实现的值
promise.then((data)=>{console.log(data);},(err)=>{console.log('失败');})
console.log('world');
/*//写一个函数 抛硬币  正 （成功）  反(失败)
function flip_coin() {
    return new Promise((resolve,reject)=>{
       if(Math.random()>0.5){
           resolve()
       }else{
           reject()
       }
    });
}
flip_coin().then(()=>{console.log('正面');},()=>{console.log('反面');});*/

//封装ajax
function ajax({url='',method='GET',dataType="text",async=true,data=""}) { //es6赋予默认值
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(method,url,async);
        xhr.responseType = dataType; //设置响应的返回类型
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.response);
            }
        };
        xhr.ontimeout = function (e) {
            reject(e);
        };
        xhr.send(data);
    })
}
ajax({url:"/user"}).then((data)=>{console.log(data)},(e)=>{console.log(e);});