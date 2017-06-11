//util是一个node提供的工具模块，不需要安装,使用和第三方模块相同
//继承 判断类型
let util = require('util');
//1.原生js中的继承
function Parent() {
    this.drink = '喝酒';
}
Parent.prototype.eat = '吃饭';
function Child() {

}
//一.儿子继承父亲
//1.既要私有 也要公有 不能穿参数
//Child.prototype = new Parent();
//2.既要私有 Parent.call(this); 在儿子类中调用父类，改变执行的this指向
//3.子类继承父类公有属性 Object.create()
function create(parentPrototype) {
    function Fn() {}
    Fn.prototype = parentPrototype;//将当前父类的原型 赋予给Fn这个函数
    return new Fn();
}
//Child.prototype = create(Parent.prototype);

//4. 子类继承父类公有属性
// Child.prototype.__proto__ = Parent.prototype;

//5.es6常用继承 只继承公有属性  extends Class
//Object.setPrototypeOf(Child.prototype,Parent.prototype);

//6.node继承 继承公有属性
util.inherits(Child,Parent);
let child = new Child();
console.log(child.eat);

//二. 判断数据类型
// 1.typeof不能比较对象数据类型
// 2.instanceof 不能去分实例
// 3.constructor 看当前实例的构造函数
// Object.prototype.toString.call()
// console.log(Object.prototype.toString.call(undefined));

//可以检测数据类型
util.isArray([]);
util.isFunction(function () {});
//util 和 events 发布订阅模式