//使用第三方模块,第三方模块直接引用名字即可
let result = require('jw-pack-handsome');
//会自动去当前node_modules下查找同名的文件，找到package.json 执行对应main文件，如果自己家没有会自动向上查找，找到根目录位置
// console.log(result);
console.log(module.paths);
//一般第三方模块全部安装在当前目录,
// 如果是文件模块可以自动添加js后缀 require('./a')
