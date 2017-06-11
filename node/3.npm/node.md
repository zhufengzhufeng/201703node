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
- 本地安装 (在当前项目下使用)