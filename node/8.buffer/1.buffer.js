//Buffer 是global上的属性 可以直接使用，表示的是内存，展现给我们的是16进制
console.log(Buffer);

//0-9 abcdef
// 二进制
//进制转换 一个汉字有几个字节组成，在utf8中 一个汉字由三个字节组成
//一个字节由8个位组成 ，每个位里面由二进制组成 1
let sum = 0;
for(let i = 1;i<=8;i++){
    sum +=1*Math.pow(2,i-1);
}
console.log(sum); //每个字节最大255-> 转化成16进制 ，buffer每个字节最大是多少？ ff
console.log(15*16+15);//  ff 在buffer中每一个字节最大是 0xff
//buffer的创建方式 有固定的三种方式
//1.通过大小来创建
var buffer = new Buffer(100); //两个字节,内容是随机的，但是我们并不关心，将内容读到内存中，我们会将buffer转化成字符串
buffer.fill(0); //手动清理内存
console.log(buffer.toString());
//2.数组创建，每一项不能瞎写 这种创建方式比较少用
var ary = [0x17,18,19]; //16进制中的17是多少？
var buffer = new Buffer(ary);
console.log(buffer[0]); //如果直接取buffer中的某一项取出的是10进制10进制
//3.将字符串做为参数
var buffer = new Buffer('珠峰');
console.log(buffer.length); //buffer的长度是字节的长度
//字符串具有不变性  数组里可以通过索引更改 slice截取 克隆 浅拷贝(拷贝的是内存地址)/深拷贝(如果改了数组的某一项的引用里的内容，不会导致克隆的结果发生变化);
var arr = [1,2,3];
var ary = [arr,4,5,function () {}];
/*var newArr = ary.slice(0); //浅拷贝，拷贝的是内存地址
arr[0] = 100;
console.log(newArr);*/
//实现深拷贝
var newArr = JSON.parse(JSON.stringify(ary));// 如果数组中包含函数怎么办？
arr[0] = 100;
console.log(newArr);
// Object.create Object.assign
var buffer = new Buffer([1,2,3,4,5]);
var newBuffer = buffer.slice(0,1); //就相当于二维数组
newBuffer[0] = 6;
console.log(buffer);
// copy,concat
var buffer = new Buffer(12);
var buf1 = new Buffer('珠峰培');
var buf2 = new Buffer('训哈哈');
//targetBuffer目标buffer, targetStart(目标的开始), sourceStart(源的开始), sourceEnd源的结束
buf1.copy(buffer,0); //偏移量
buf2.copy(buffer,buf1.length);
console.log(buffer.toString());

//拼接buffer
Buffer.myConcat = function (list,totalLength) {
    //1.如果不传递总长 默认全部拼接,要计算出总长度
    //2.如果长度传递了 则按照传递的长度来算
    //3.创建一个大buffer，最后返回的那个buffer
    //4.循环列表 将列表的每一项，拷贝到大buffer上
    //5.如果传递过长，截取到有效长度 slice
    //6.返回的结果是buffer
};
console.log(Buffer.myConcat([buf1,buf2,buf2],100000).toString());


/*
let str = '珠峰培训';
str[0] = 'z';
console.log(str);
*/
