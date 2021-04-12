---
title: "Gitproxy"
date: 2021-04-12T08:57:01+08:00
draft: false
tags: ["git"]
categories: ["git"]
lightgallery: true
---
# git设置



通过设置git代理,你clone和push的操作处理速度会由20kb/s变成7.8Mb/s,因此有代理的设置这个很有必要



## 设置代理

### 全局代理

```git
git config --global http.proxy 127.0.0.1:7890
```

这里的7890是clash的代理端口,如果你不是clash,设置你自己的代理端口

### 局部代理 在仓库内使用

```
git config --local http.proxy 127.0.0.1:7890
```



## 取消设置代理

### 取消全局代理

```
git config --global --unset http.proxy
```

### 取消局部代理

```
git config --local --unset http.proxy
```



## 设置用户名密码

hugo每次push都需要输入用户名密码,我们可以生成用户名密码信息,以后都不需要输入

### 具体代码

```
git config --global credential.helper store
```

在你的本地仓库文件夹执行这条命令,然后push一次,输入一次用户名和密码,以后都不需要了