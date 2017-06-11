## 搭建博客
```
npm install hexo-cli -g 安装全局命令hexo
hexo init 文件夹的名字 
cd blog
npm install
hexo server
```
## 发布到github上(在当前项目下安装)
```
npm install hexo-deployer-git --save
```
## 创建仓库
- 用户名.github.io

## 配置发布命令
```
deploy:
  type: git
  repo: https://zuyuan:xy19921004@github.com/zuyuan/zuyuan.github.io.git
  branch: master
```
## hexo g生成html √
## hexo d发布项目 √

> 每次更新,需要重新生成和发布,操作git时永远在根路径下执行