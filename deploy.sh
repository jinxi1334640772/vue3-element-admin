#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建生成静态文件dist目录
npm run build

# 进入生成的文件夹
cd dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll
# 初始化为一个git仓库
git init
# 提交一个commit
git add -A
git commit -m 'deploy'
# 把当前分支重命名为master
git branch -M master
# 把当前本地master分支代码，强制推送到远程deploy分支
git push -f "https://github.com/jinxi1334640772/vue3-element-admin.git" master:deploy
# 返回上一个目录
cd -
# 控制台输出信息
echo 强制推送远程deploy分支成功
