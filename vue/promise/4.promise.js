function Promise(fn) {
    fn(()=>{
        this.resolve();
    },()=>{
        this.reject();
    })
}
Promise.prototype.resolve = function () {
    this._success();
}
Promise.prototype.reject = function () {
    this._error();
}
Promise.prototype.then = function (success,error) {
    this._success = success;
    this._error = error
}
function flip_coin() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve()
            }else{
                reject()
            }
        })
    });
}
flip_coin().then(()=>{console.log('正面');},()=>{console.log('反面');});