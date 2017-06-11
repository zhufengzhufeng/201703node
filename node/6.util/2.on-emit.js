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
Girl.prototype.emit =function (eventName) {
    if(this._events[eventName]){
        this._events[eventName].forEach(function (item) {
            item();
        })
    }
};
let girl = new Girl();
function cry() {console.log('哭');}
function die() {console.log('死了');}
girl.on('失恋',cry);
girl.on('失恋',die);
girl.emit('失恋');