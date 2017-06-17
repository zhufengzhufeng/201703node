//node中拥有专门处理路径的方法 a/b/c  a\b\c
let path = require('path');
//__dirname,__filename 绝对路径

//1.解析绝对路径的方法
console.log(path.resolve('a','b'));
//__dirname当前文件的目录
console.log(path.join(__dirname,'a','b'));

//console.log(__dirname,__filename);
//(function(exports,require,module,__dirname,__filename){
// })();
