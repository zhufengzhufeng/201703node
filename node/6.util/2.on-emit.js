function Girl() {
    this._events = {}
}
//绑定事件 订阅 是一种一对多的关系 {失恋:[cry]}
Girl.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){  //已经有了
        this._events[eventName].push(callback)//{失恋:[cry,die]}
    }else{//当前一对多的关系中没有这个数组
        this._events[eventName] = [callback]; //{失恋:[cry]}
    }
};
//发射事件 发布
Girl.prototype.emit =function (eventName,...ary) { //剩余运算符，将其他参数转化成数组
    //let arr = Array.prototype.slice.call(arguments,1);
    //es6中将类数组转化成数组
    //Array.from(arguments).slice(1);
    if(this._events[eventName]){
        this._events[eventName].forEach((item)=>{//箭头函数中没有this指向，当前this指向上一级的this
            item.call(this,...ary);
            //item.apply(this,ary);
        })
    }
};
let girl = new Girl();
function cry(xxx,aaa) {console.log('哭',xxx,aaa,this);}
function die(xxx,aaa) {console.log('死了',xxx,aaa);}
girl.on('失恋',cry);
girl.on('失恋',die);
girl.emit('失恋','xxx','aaa');


/* es6语法
let a = 'b';
let obj = {[a]:1};
console.log(obj);*/
