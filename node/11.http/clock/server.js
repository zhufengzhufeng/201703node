let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
http.createServer(function (req,res) {
    let {query,pathname} =  url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }

    else if(pathname === '/clock'){
        let timer = new Date();
        res.end(JSON.stringify({timer:timer.toLocaleString()}));
    }
    else{ //主要作用就是处理静态文件
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end();
            }
        });
    }
}).listen(3000); //拿去服务端时间，接口，前后端要定义一个 都知道的接口 /clock