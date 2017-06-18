## 实现增删改查的功能
- 在以往 是通过路径区分 
- 通过动词区分 /user?id=1   
- get,put,delete,post,如果指定某一个传递参数即可

> 在正规的restful风格中是要求返回值的

- get要求返回查询的结果 如果是查询一组要求必须是数组
- put要求返回修改的结果
- delete要求返回空对象
- post返回的增加这一项

> 返回永远都是最新的数据

## 初始化项目
```
yarn init -y
yarn add jquery bootstrap mime
```

