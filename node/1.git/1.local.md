## git的使用方式 
- 命令行 
- 图形化界面 sourceTree

## 初始化 git管理的范围
- cd (change directory 改变目录)
- pwd (print working directory 打印当前工作目录)

## 配置当前用户信息
- 可以用户名采用 github账号和邮箱，没有配置过 不能使用commit(only write one)
```
git config --global user.name 'zhufengzhufeng'
git config --global user.email '894918097@qq.com'
git config --list 查看配置列表
``` 

## mkdir创建目录
```
mkdir xxx
```

## 初始化git
```
git init
```
## 如果初始化错误 需要删除一下.git
```
rm -rf .git
```

## 查看目录中的文件
```
ls -a
```

## touch 
创建文件,默认空文件
```
touch index.txt
```

## cat
查看文件中内容
```
cat index.html
```

## vi
```
vi index.txt
i 插入模式
esc + :wq 保存并退出
q! 强制退出
```

## 创建文件后 查看文件状态
```
git status
```

## git commit 
- 提交到历史区
```
git commit -m 'xxxx'
```

## git diff
比较git的三个区的不同
```
git diff  git的不同 工作区和暂存区
git diff master 工作区和历史区
git diff -cached 暂存区和历史区
```

## 暂存区回滚工作区
- 将暂存区和工作区变得一致
```
git checkout 文件名
```

## 回滚版本
- 历史区 工作区 暂存区 全部一致
```
git reflog
git reset --hard 版本id
```

## 当我们提交到暂存区,移除暂存区
- 在暂存区中将这个文件，移除掉暂存区
```
git reset HEAD index.txt 将这个文件回到上一次暂存区中
```

## 分支
- 查看分支
```
git branch
```
- 新增分支
```
git branch 分支名
```
- 切换分支
```
git checkout 分支名
```
- 删除分支
```
git branch -D dev
```

## 创建并切换分支
```
git checkout -b dev
```
> 默认创建的分支 和创建之前的分支是一模一样的

## 分支提交后
- 提交到某个分支上，这个文件就归属于提交的分支，一般情况下，开发项目，都会有一个主分支，在这个主分支上拉取自己的小分支进行开发。如果发生错误不会影响主分支，
- 合并分支,必须在打分支上合并小分支
```
git merge dev
git branch -D dev
```

## 合并分支


## 可以联合提交
- 只限提交过的文件
```
git commit -a -m'ugligy'
```

## 解决冲突
去掉 >>>>>  ====== <<<<<保留最终的结果即可

- 在次提交




