setTimeout(function () {
    console.log('ok');
},2000);
setImmediate(function () {
    console.log('setImmediate');
});
process.nextTick(function () {
    console.log('nextTick');
});
//nextTick代表的是当前队列的底部，nextTick>setImmediate>setTimeout