let fs = require('fs');
function read(filename,callback) {
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,'utf8',function (err,data) {
            if(err){
                console.log(err);
            }else{
                console.log(data);
                resolve(data)
            }
        });
    });
}
function processErrorHandler(err) {
    //console.log(err);
}
process.on('unhandledRejection', processErrorHandler);

//1. async 要和 await 连用 async 是用来修饰函数的 只有在 async中才可以 使用await
let result =async function () {
    try{ //可以使用try catch捕获异常
        let name =  await read('./a.txt'); //await紧跟着的必须是promise对象，可以像写同步方法一样来写异步
        let age = await read('./b.txt');
    }catch (e){console.log(e);
    }
    let school = {name,age};
    console.log(school);
};
result();


//只有promise对象才有then方法
// read('./age.txt').then((data)=>{console.log(data);},(err)=>{});
//all方法是Promise自带的方法，参数是promise执行的列表，当所有promise全部完成，会调用then中的成功的回调，如果有一个失败 调用then中的失败的回调，会把所有的结果放到数组中，返回的结果是数组
                                                        //data=['我很帅',8]
                                                        //[b,a] = ['我很帅',888]
/*Promise.all([read('./name.txt'),read('./age.txt')]).then(([a,b])=>{//data是数组类型按照请求的数据放入对应的结果
    let school = {name:a,age:b};
    console.log(school);
},(err)=>{
    console.log(err);
});*/
//async await es7 基于promise的