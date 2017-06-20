// 后台只提供接口，前端只调用接口
let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');
function read(callback) {
  fs.readFile('./book.json','utf8',function (err,data) {
    data = data.length===0?[]:JSON.parse(data);
    callback(data);
  });
}
http.createServer(function (req,res) {
  let {pathname,query} = url.parse(req.url,true);
  if(pathname === '/api/slider'){
    return res.end(JSON.stringify(sliders));
  }
  if(pathname === '/api/hot'){
      read(function (data) { //data表示读到的结果
          var books = data.reverse().slice(0,6);
          setTimeout(function () {
            res.end(JSON.stringify(books));
          },1000);
      });
      return;
  }
  // 图书的增删改查
  if(pathname === '/api/book'){
    switch (req.method){
      case 'GET':
        read(function (data) {//data代表所有数据
            res.end(JSON.stringify(data));
        });
        break;
      case 'POST':
        break;
      case 'DELETE':
        break;
      case 'PUT':
        break;
    }

  }


}).listen(3000);
