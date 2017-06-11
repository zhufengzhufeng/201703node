//如何使用模块
//1.三种模块 内置模块 node中写好的
//2.第三方模块 需要安装的
//3.文件模块 ./ ../ 相对路径引用
let result = require('./4.arg');
//1.如果require一个对象的返回值不是exports对象,最终拿到的是 module.exports
console.log(result);

/*
(function(exports,require,module)){
    this = module.exports;
    module.exports = exports = {}
    exports = {name:1}
    return module.exports;
}()



*/