let fs = require('fs');
//1.文件不存在读取会报错
//2.默认读取的格式是 buffer
//3.返回的不是读取到的结果是一个可读流对象
//4.highWaterMark 默认一次读取多少64k
let rs = fs.createReadStream('./1.txt',{highWaterMark:2});
//非流动模式，默认不会有数据到来 -> 流动模式
//事件监听data后 ，数据会不停的触发，直到读完为止
let arr = [];
rs.on('data',function (data) { //on是events库中的方法
    arr.push(data);
    console.log(data);
    rs.pause();// 暂停data事件的触发
    setTimeout(()=>rs.resume(),2000);//resume是恢复data事件触发
});//node会不停的调用 rs.emit('data',xxxx);不停的将数据发射过来
rs.on('end',function () {
    console.log(Buffer.concat(arr).toString());
    //console.log(str); //拼成一个完整的buffer.toString();
});//node会调用rs.emit('end')；读取完毕触发此事件
rs.on('error',function (err) { //监控错误
    console.log(err);
});
