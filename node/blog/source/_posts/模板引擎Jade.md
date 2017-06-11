---
title: Jade
---

## 1.Jade介绍
Jade 是一个高性能的模板引擎，它深受 Html 影响，它是用 JavaScript 实现的，并且可以供 Node 使用。
## 2.安装jade
### 2.1 全局安装
```
$ npm install jade -g
```
### 2.2 本地使用
```
$ npm install jade
```
## 3.使用jade
```
var jade = require('jade');
var fs = require('fs');
var result = jade.renderFile('./1.jade',{pretty:true});
fs.writeFile('./1.html',result,function () {
   console.log('输出成功');
});
```

### 3.1 根据缩进，实现标签嵌套
```html
doctype
html
    head
        style
    body
        div
        script
```

### 3.2 增加class和id
- 同emmet可以使用标签后加.或者#实现标签增加class或id
```
div#aa.bb
```

### 3.3 可以使用()增加属性
```
doctype
html
    head
        style(src="bootstrap.css")
    body
        div(class="bb",id="aa")
        script(src="angular.js")
```

> 多个属性采用逗号分割

### 3.4 class和style特殊的写法
- class可支持数组,style可支持json
```
div(class=["aa","bb"],style={background:"red"})
```


## 4.标签中内容
### 4.1 可以使用 | 指定为标签中包裹的内容
```
div
    |hello
    |my name is jw
``` 
### 4.2 用点原样输出结果
```
div.
    hello
    my name is jw
``` 

## 5.变量
- 声明变量可以使用-来声明
```
- var a = 100
  div= a / div #{a}
```

> 可以通过#{} 或者=号来取对应的值

## 6.语句
### 6.1 case语句
```
- var my = '我很帅'
        case my
            when '我很帅'
                p 我很帅
            when '我很丑'
                - break
            default
                p 长得一般
```

> 通过break可以跳出循环

### 6.2 if语句
``` 
- var flag = 'middle';
if flag=='first'
    div first
else if flag=='middle'
    div middle
else
    div last
```

### 6.3 each循环
``` 
ul
    each val,index in ['香蕉','苹果','橘子']
        li #{val} #{index}
```

### 6.4 while循环
```
- var n = 0;
ul
  while n < 4
    li= n++
```


## 7.引入其他文件
- 可以使用include将其他文件引入
```
script
    include 1.js
```