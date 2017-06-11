## npm node package manager
- 管理所有第三方模块 ， 有npm 安装node买一送一
## npm可以安装模块
## npm可以安装第三方模块
- 全局安装后会在全局命令行下,提供一个命令
- 全局安装 -g (他只能在命令行下使用)
```
npm install http-server -g
```

> 全局安装不会配置到环境变量中，由于npm已经在环境变量中了，相当于在npm下有一个快捷方式连接真是的文件



### nrm
```
npm install nrm -g (nrm可以帮助我们切换安装的源头 淘宝 中国源)
```
- 列出所有源
```
nrm ls
```
- 使用源
```
nrm use taobao
```

### http-server
- 启动一个服务，观看页面
```
http-server -p 3000
```
- 本地安装 (在当前项目下使用)
初始化一个package.json不会导致安装到上一层级
```
npm init
```
### package.json 可以记录安装过哪些东西
```
npm install jquery --save 项目依赖
npm install babel-core --save-dev 开发依赖
npm uninstall jquery -save 卸载
npm uninstall babel-core --save-dev 卸载
```
### 查看版本号
```
npm info 包名（多个模块组成一个包）
```
### 安装某个版本
```
npm install jquery@2.2.0 --save
```

### 安装所有依赖
```
npm install 
```


> 默认安装时会在当前目录查找node_modules文件，如果没有则向上找，上面有就会安装到上一层，如果没有则安装到当前文件夹下
