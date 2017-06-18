//node提供一个http模块 来实现http服务
let http = require('http');
let listener = function (req,res) {//监听函数，请求到来时会执行此函数，
    console.log('welcome');
    //res响应 是基于流的 而且是一个可写流
    //res.write();//要求是字符串或者buffer
    res.end('hello world'); //调用end后会将所有内容写到页面中
};
//使用端口号 建议3000以上 最大65535
let port = 8080;
http.createServer(listener).listen(port,function () {
    //服务创建成功执行此回调函数
    console.log('server start '+port);
});