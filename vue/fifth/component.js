/*export let str = '我很帅';
export let str1 = '我很丑';*/
//导出这个变量 会把这个变量封装到对象中
// {str:'我很帅',str1:'我很丑'}

/*let str = '我很帅';
let str1 = '你很丑';

export {str,str1}*/
//--------------- 默认导出引用时可以使用任意名字
let obj = {};
export default obj;