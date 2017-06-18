let http = require('http');
let fs = require('fs');
let mime = require('mime');
http.createServer(function (req,res) {
    let pathname = req.url;
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }
    else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
                fs.createReadStream(pathname.slice(1)).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('NOT FOUND');
            }
        })
    }
}).listen(8080);
