let EventEmitter = require('events'); //核心模块
let util = require('util');
function Girl() {}
util.inherits(Girl,EventEmitter);
let girl = new Girl();
function cry(xxx) {
    console.log('哭',xxx);
}
//once removeListener emit on
girl.once('失恋',cry);
girl.removeListener('失恋',cry);
girl.emit('失恋',1);
girl.emit('失恋',1);
girl.emit('失恋',1);
girl.emit('失恋',1);
