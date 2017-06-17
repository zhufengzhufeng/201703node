//211
// 可以将任意进制转换成10进制 parseInt
console.log(parseInt("11111111",2));
// 任意进制 转化成任意进制 toString
console.log((211).toString(16));
//base64 是一种算法 ，可以解密
//将汉字转化成base64格式 每个汉字由三个字节组成 有24个位
//3*8 => 6*4格式，每个字节不会大于64
let n = new Buffer('珠');
console.log(n);//e7 8f a0
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
//111001 111000 111110 100000 =>转化成10进制去可见编码中取值
console.log(parseInt("111001",2));
console.log(parseInt("111000",2));
console.log(parseInt("111110",2));
console.log(parseInt("100000",2));
//57,56,62,32
//在可见编码中取值
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+= str.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]);