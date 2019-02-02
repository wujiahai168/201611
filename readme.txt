Git is a version control system.
Git is free software.

Git is a distributed version control system.
Git is free software.

Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.

正确步骤：
1. git init //初始化仓库
2. git add .(文件name) //添加文件到本地仓库
3. git commit -m "first commit" //添加文件描述信息
4. git remote add origin + 远程仓库地址 //链接远程仓库，创建主分支
   git remote add origin git@server-name:path/repo-name.git
   git remote add origin git@github.com:wujiahai168/learngit.git
5. git pull origin master // 把本地仓库的变化连接到远程仓库主分支
6. git push -u origin master //把本地仓库的文件推送到远程仓库


原因：
GitHub远程仓库中的README.md文件不在本地仓库中。
解决方案：
git pull --rebase origin master
git push -u origin master

Creating a new branch is quick.

Creating a new branch is quick and simple.


fffffffffffffffffff

修改readme.txt文件，并提交一个新的commit：

工作区是干净的，刚才的工作现场存到哪去了？用git stash list命令看看：
