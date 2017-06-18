let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');//专门用来处理路径
let users = [
    {username:'zfpx',password:'zfpx',id:1},
    {username:'hello',password:'world',id:2},
];
http.createServer(function (req,res) {

    //let pathname = req.url; //req.url 他是包括查询参数
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else if(pathname === '/user'){
        //对用户的增删改查
        //req.method //全部大写 GET PUT DELETE POST
        let method = req.method; //根据方法的不同做不同的处理
        let id = query.id; // localhost:3000?id=1
        res.setHeader('Content-Type','application/json;charset=utf-8');
        if(method === 'GET'){
            res.end(JSON.stringify(users));
        }else if(method === 'POST'){

        }else if(method === 'PUT'){

        }else if(method === 'DELETE'){

        }
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
