# 命令行执行失败则终止部署
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# 生成静态页面(渲染草稿)
hugo -D 

# 到public 仓库
cd public

git add .

# 根据日期commit
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
    msg="$*"
fi
git commit -m "$msg"

# Push 
git push -f origin master

 #sleep 1 m