//全局对象 能在页面中直接使用的就是全局对象
//console / setTimeout / setInterval

//在node中可以直接使用的都叫全局对象
//在服务端 都挂在global上
//1.this ,在文件中直接使用当前的this不是global
//2.自己声明的变量 不会挂载在global上,如果没有var变量会声明在global上
console.log(global);
//process 进程
//Buffer 缓存区 内存
//clearImmediate: [Function], 清除立即
//clearInterval: [Function],
//clearTimeout: [Function],
//setImmediate: [Function],
//setInterval: [Function],
//setTimeout: [Function],
//console: [Getter]

//1） console log dir warn info error (time timeEnd计算时差)
//编辑器 vscode
console.time('first');
for (let i = 0; i < 10; i++) {
}
console.timeEnd('first');

//2) setTimeout 异步的,这里的this指向的都是自己
function fn(who,food) {
    console.log('eat'+who,food);
}
//setTimeout(fn,1000,'人','橘子'); //setTimeout可以传递参数 从第二个参数开始
// 事件环 是基于事件驱动的  服务员的第二个小本
setImmediate(function () {
    console.log('setImmediate');
});//setImmediate立即 是异步方法

setTimeout(function () {
    console.log('timeout');
});
//setImmediate,setTimeout顺序是不确定的 setImmediate第二个小本上
