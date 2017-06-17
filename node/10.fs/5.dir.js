const fs = require('fs');
// /的问题 mac是正杠，创建的是时候会做处理
//fs.mkdirSync('a\\b\\c\\e\\f');
//写创建文件夹的时候 需要保证要创建的目录的父级必须存在
//a     0,1
//a/b   0,2
//a/b/c 0,3
function makep(p) {
    let dirArrs = p.split('/');
    for(let i = 0; i<dirArrs.length;i++){
        //先判断要创建的路径是否存在
        let path = dirArrs.slice(0,i+1).join('/');
        //存在返回true 不存在返回false
        if(!fs.existsSync(path))
            fs.mkdirSync(path);
    }
}
makep('g/b/c/e/f');
fs.exists('g',function (flag) {console.log(flag);}); //递归创建
//先创建第一层，创建这个方法 提取出来,每次创建成功后 在调用此函数，实现异步递归创建
