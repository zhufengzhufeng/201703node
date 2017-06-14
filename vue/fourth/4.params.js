let urlStr = '/article/100/zf';
//            /article/([^/]+)/([^/]+)
let rules = '/article/:articleId/:name';
//1.第一步需要取出 [articleId,name]
let arr1 = [];
//2.将rules这个路径带冒号的替换成正则 匹配出新数组[100,zf];
let newRules = rules.replace(/:([^\/]+)/g,function () {
    arr1.push(arguments[1]);
    return '([^\/]+)';
});
let reg = new RegExp(newRules);
let arr2 = reg.exec(urlStr); //从第二项开始 是我们需要的 [xxx,100,zf]
//3.将两个数组 拼装成对象即可
let obj = {};
arr1.forEach((item,index)=>obj[item]=arr2[index+1]);
console.log(obj);


//=>{articleId:100,name:zf}