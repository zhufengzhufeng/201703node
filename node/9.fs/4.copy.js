// source  target ,通过读和写
const fs = require('fs');
//先将source的内容读取到内存中，再将内存中的数据写到目标文件中
function copySync(source,target) { //readFileSync,writeFileSync
    let result = fs.readFileSync(source);
    fs.writeFileSync(target,result);
}
//copySync('age.txt','age1.txt');
function copy(source,target,cb) { //readFile  writeFile
    fs.readFile(source,function (err,data) {
       if(err){
           cb(err);// 如果读取出错调用callback提示错误
       }else{
           fs.writeFile(target,data,cb);//如果写入成功调用callback
       }
    });
}
copy('age.txt','age1.txt',function (err) {
    if(err)console.log(err);
    console.log('写入成功');
});
//cb promise
