const fs = require('fs');
// /的问题 mac是正杠，创建的是时候会做处理
//fs.mkdirSync('a\\b\\c\\e\\f');
//写创建文件夹的时候 需要保证要创建的目录的父级必须存在
//a     0,1
//a/b   0,2
//a/b/c 0,3
/*function makep(p) {
    let dirArrs = p.split('/');
    for(let i = 0; i<dirArrs.length;i++){
        //先判断要创建的路径是否存在
        let path = dirArrs.slice(0,i+1).join('/');
        //存在返回true 不存在返回false
        if(!fs.existsSync(path))
            fs.mkdirSync(path);
    }
}
makep('g/b/c/e/f');*/
//fs.exists('g',function (flag) {console.log(flag);}); //递归创建
//先创建第一层，创建这个方法 提取出来,每次创建成功后 在调用此函数，实现异步递归创建
//插入排序
function makep(url,callback) {
    let dirArr = url.split('/');
    let index = 0;//这个表示可以递增
    function make(path) {
        if(index > dirArr.length-1) return callback();
        fs.exists(path,function (flag) { //判断文件是否存在
            let p = dirArr.slice(0,++index+1).join('/');//下次要创建的路径
            if(!flag){
                fs.mkdir(path,function () {
                    make(p);
                })
            }else{
                make(p);
            }
        })
    }
    make(dirArr[index]);//先保证第一级目录存在
}
makep('g/b/c/e/f',function () {});
//fs.readFile fs.writeFile fs.mkdir fs.exists
//rmdir 删除目录 unlink 删除文件  fs.stat 判断文件的状态，如果是文件夹进到文件夹中删除文件

