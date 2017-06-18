//流的方式 来写拷贝
//读64 写16
let fs = require('fs');
function pipe(source,target) {
    //1.需要有两个流 可读流rs和可写流ws
    let rs = fs.createReadStream(source,{highWaterMark:2});
    let ws = fs.createWriteStream(target,{highWaterMark:1});
    //2.监听数据到来事件 rs.on('data')
    rs.on('data',function (data) {
        //3.去写 ws.write(data)返回一个boolean类型
       if(!ws.write(data)){
           //4.如果写不下返回的值是false rs.pause();
           rs.pause();
       }
    });
    //5.当全部写入后，调用ws.on('drain');在drain方法中恢复读取 rs.resume();
    ws.on('drain',function () {
        console.log('干了');
        rs.resume();
    });
    //6.读取完毕后，rs.on('end');调用ws.end();
    rs.on('end',function () {
        ws.end();
    })
}
pipe('1.txt','2.txt'); //可以防止淹没可用内存