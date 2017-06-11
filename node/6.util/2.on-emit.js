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
            item.call(this,...ary);//拓展运算符 将数组展开 [a,b,c,d] => a,b,c,d
            //item.apply(this,ary);
        });
    }
};
Girl.prototype.removeListener = function (eventName,callback) { //{失恋:[cry,die]}
    // 错误的let a = this._events[eventName]; //let a = [cry,die] a=[cry]
    if(this._events[eventName]){
        //filter是数组中es5的方法
        this._events[eventName] = this._events[eventName].filter((item)=>{ //返回false 表示删除这一项，返回true，将这一项放到新数组中
            return item!==callback
        });
    }
};
//取消绑定 removeListener
let girl = new Girl();
function cry(xxx,aaa) {console.log('哭',xxx,aaa,this);}
function die(xxx,aaa) {console.log('死了',xxx,aaa);}
girl.on('失恋',cry);
girl.on('失恋',die);
girl.removeListener('失恋',die);
girl.emit('失恋','xxx','aaa');


/* es6语法
let a = 'b';
let obj = {[a]:1};
console.log(obj);*/
