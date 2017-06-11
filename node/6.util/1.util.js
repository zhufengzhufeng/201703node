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
//儿子继承父亲
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
Object.setPrototypeOf(Child.prototype,Parent.prototype);
let child = new Child();
console.log(child.drink);