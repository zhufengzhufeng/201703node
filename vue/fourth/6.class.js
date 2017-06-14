class Person {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    static add(a,b){
        return a+b;
    }
}
//用extends 会继承父类的公有属性和私有属性
class People extends Person{
    constructor(name,age){
        super(name);//es6要求继承中必须调用super,super中的this是people的实例
        this.age = age;
    }
}
let people = new People('zfpx',8);
console.log(People.add(1,2));
