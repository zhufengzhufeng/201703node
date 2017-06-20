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
/**
 *
 * @param data 要写入的数据
 * @param callback 写入成功后的回调
 */
function write(data,callback) {
  fs.writeFile('./book.json',JSON.stringify(data),callback)
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
       setTimeout(function () {
         read(function (data) {//data代表所有数据
           res.end(JSON.stringify(data));
         });
       },1000)
        break;
      case 'POST':
        //发送过来的请求体默认就是对象格式{}
        var str = '';
        req.on('data',function (data) {
          str+=data;
        });
        req.on('end',function () {
          var book = JSON.parse(str);
          read(function (books) { //读取所有的书 获取最后一项的id 累加
            book.id = books.length>0?books[books.length-1].id+1:1;
            books.push(book);//将新书放回去
            write(books,function () {
              res.end(JSON.stringify(book));
            })
          });
        });
        break;
      case 'DELETE':
        break;
      case 'PUT':
        break;
    }

  }


}).listen(3000);
