/* 1.
let result = require('./calc');
console.log(result.calc["+"](1,2));*/
let result = require('./calc');
console.log(result["+"](1,2));

console.log(require.cache);
//如果一个模块多次使用 这个模块会被缓存 require.cache 代表的是缓存的模块

