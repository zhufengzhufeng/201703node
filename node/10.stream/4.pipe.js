//流的方式 来写拷贝
//读64 写16
let fs = require('fs');
function pipe(source,target) {
   let rs = fs.createReadStream(source);
   let ws = fs.createWriteStream(target);
   rs.pipe(ws);//pipe可以连接可读流和可写流,会自动调用可写流的write方法和end方法
   //pipe是异步的 可读流-> 可写流
}
pipe('1.txt','2.txt'); //可以防止淹没可用内存