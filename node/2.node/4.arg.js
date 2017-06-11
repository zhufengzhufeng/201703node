//exports require module __filename __dirname
//模块化 (避免污染全局变量，团队协作不会产生冲突)
//单例模式var obj201703node = {a} 名字无法避免冲突,调用时命名过长
//闭包 seajs CMD 就近依赖  requirejs AMD 依赖前置

//common js规范 定义了如何使用模块 如何定义模块 如何导出模块
//1)如何定义模块 在node文件中每个js就是一个模块，为了每个模块之间没有关系 所以在代码执行时外层套了一个闭包，闭包中的形参也是全局对象
console.log(exports===this);//在这个闭包中将this指向改变成了exports对象

var dialog = {a:1};
/*module.exports = dialog;
exports.dialog = dialog;
module.exports.dialog = dialog;*/
//exports = dialog ×