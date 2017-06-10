## 路由 （ 前端路由 && 不刷新页面）
通过路径的变化 显示不同的内容

- hash值 #
- 浏览器自带的 history

```
window.history.go(-1)
window.history.back(-1)
h5 window.history.pushState({},null,'/aaa');路径可以存在也可以不存在
```

> 如果想使用history.pushState 是需要后台支持的（页面不存在刷新会导致404）,开发时采用hash的方式，上线可以改成pushState


## https://zhufengzhufeng.github.io/vue-todo/6.todo.html

