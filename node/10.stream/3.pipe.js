//流的方式 来写拷贝
//读64 写16
function pipe(source,target) {
    //1.需要有两个流 可读流rs和可写流ws
    //2.监听数据到来事件 rs.on('data')
    //3.去写 ws.write(data)返回一个boolean类型
    //4.如果写不下返回的值是false rs.pause();
    //5.当全部写入后，调用ws.on('drain');在drain方法中恢复读取 rs.resume();
    //6.读取完毕后，rs.on('end');调用ws.end();
}
pipe('1.txt','2.txt');