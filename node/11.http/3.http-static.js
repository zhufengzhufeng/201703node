let http = require('http');
let fs = require('fs');
http.createServer(function (req,res) {
    //需要获取 请求的路径
    let pathname = req.url;
    //当直接访问http://localhost:8080时返回的是文件的首页
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }
    //发现html请求中引用了外部资源css 会在想服务器发起请求
    else if(pathname === '/index.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        fs.createReadStream('index.css').pipe(res);
    }
    else if(pathname === '/index.js'){
        res.setHeader('Content-Type','application/javascript;charset=utf-8');
        fs.createReadStream('index.js').pipe(res);
    }
    else{
        res.statusCode = 404; //告诉浏览器此文件不存在 浏览器自动会报红
        res.end('NOT FOUND');
    }
}).listen(8080);