//可写流
let fs = require('fs');
//1.写的特点 清空 创建 写入
//2.接入的格式utf8
//3.highWaterMark:16k 每次能写16k
let ws = fs.createWriteStream('./2.txt',{highWaterMark:1}); //w
//4.用可写流来写入数据 数据格式必须是字符串或者buffer，写的过程是异步的
var flag = ws.write('1');//Invalid non-string/buffer chunk
//写入前 会返回一个boolean类型
console.log(flag);//无论true，false都会写入文件 ，标识表示 可写流中 还能不能放入更多东西。
//限制写入的速率
ws.end('xxx');//只要调用end 会把嘴合上，合上前会把没写入的内容 全部写入到文件中，关闭文件
//ws.write('在吃点');//write after end 在end后不能再写入
ws.on('drain',function () { //抽干,当可写流预计的内存和地上丢下内存都写入到文件后，触发的一个方法
    console.log('干了'); //如果调用end 可能不会触发drain方法
});

