/*let fn = function (a, b) {
 return function (c) {
 return a+b+c
 }
 };*/
//如果参数仅仅有一个 ()可以省略
//2.如果有大括号必须写return ,没有大括号就不需要return
//let fn = (a, b) => c => a + b + c; //高阶函数 超过1个箭头的 都叫高阶函数

let obj  = {
    a:function () {
        setTimeout(()=>{ //哪里有this指向问题 就改哪里
            console.log(this);
        },100)
    }
};
obj.a();
