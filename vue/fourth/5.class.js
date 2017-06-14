function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    console.log(this.name);
};
//静态方法，只能通过类调用
Person.add = function (a,b) {
    return a+b;
};
function People(name,age) { //name是来自于父类的 age来自自己的
    Person.call(this,name);
    this.age = age;
}
People.prototype = Object.create(Person.prototype); //这里会更改People.prototype.constructor,我们需要重新指定一下
People.prototype.constructor = People;
let people = new People('zfpx',8);
