let http = require('http');
let fs = require('fs');//操作文件
http.createServer(function (req,res) {
    /*fs.readFile('./index.html',function (err,data) {
        res.end(data);
    });*/
    res.setHeader('Content-Type','text/html;charset=utf-8');
    //将内容打开读取，不停的调用res.write res.end
    fs.createReadStream('./index.html').pipe(res);
}).listen(8080);//address in use 端口被占用，第一换端口，第二关掉以前端口号