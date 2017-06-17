let fs = require('fs');
function read(filename,callback) {
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,'utf8',function (err,data) {
            if(err)reject(err);
            resolve(data)
        });
    })
}
//只有promise对象才有then方法
// read('./age.txt').then((data)=>{console.log(data);},(err)=>{});
//all方法是Promise自带的方法，参数是promise执行的列表，当所有promise全部完成，会调用then中的成功的回调，如果有一个失败 调用then中的失败的回调，会把所有的结果放到数组中，返回的结果是数组
                                                        //data=['我很帅',8]
                                                        //[name,age] = ['我很帅',8]
Promise.all([read('./name.txt'),read('./age1.txt')]).then(([name,age])=>{//data是数组类型按照请求的数据放入对应的结果
    let school = {name,age}
    console.log(school);
},(err)=>{
    console.log(err);
});
//async await es7 基于promise的