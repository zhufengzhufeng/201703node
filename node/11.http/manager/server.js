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
        //req是一个可读流对象，on('data') on('end')
        res.setHeader('Content-Type','application/json;charset=utf-8');
        if(method === 'GET'){
            res.end(JSON.stringify(users));
        }else if(method === 'POST'){
            //增加一个id 将body中的数据 添加到数组里
            //返回最新的数据，前端获取数据，调用bindhtml实现增加功能
            let body = ''; //目前客户端发过来的数据是 a=b&c=d
            req.on('data',function (data) { //上来先读一下内容，如果没有数据
                body+=data;
            });
            req.on('end',function () { //如果没有数据会直接调用end ，如果传递了数据转换成对象，没传递就是空对象
                let obj = {};
                body.replace(/([^=&]+)=([^=&]+)/g, function () {
                    obj[arguments[1]] = arguments[2]
                });
                body = obj;
               //逻辑要在获取请求体中 操作数据
                body.id =users.length>0?users[users.length-1].id+1:1;
                users.push(body);
                res.end(JSON.stringify(users));
            });

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
