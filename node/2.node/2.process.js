//获取环境变量
//1. 区分本地开发环境 和线上开发环境
//设置环境变量 set NODE_ENV=developement 设置环境变量
// set a=b  key=value的形式
console.log(process.env);
let url ='';
if(process.env.a === "b"){
    url =  'http://localhost:8080';
    console.log('开发环境 ');
}else{
    url = 'http://www.baidu.com';
    console.log('线上环境');
}
//console setTimeout setImmediate setInterval process Buffer
//异步
//全局对象