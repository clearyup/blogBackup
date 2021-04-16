---
title: "Hugo"
date: 2021-04-16T21:32:43+08:00
draft: false
tags: ["hugo"]
categories: ["hugo"]
lightgallery: true
---



# 使用hugo搭建静态博客网站

首先,这里介绍一下传统的网站搭建,你需要的是

* 一台服务器(一般是阿里云之类的云服务器,Linux系统)
* 一个开源的网站框架或者模板(你也可以选择自己开发网站前后端)
* 一个网站域名(域名国内需要备案,用域名可以访问网站,或者不用域名直接服务器公网ip访问网站)

你通过对云服务器进行端口,防火墙,ssh等一些配置,安装数据库,tomcat等软件后,将开源网站框架部署到云服务器上,域名可选或不选,这里你通过云服务器的公网ip就可以访问到网站,有域名将域名指向网站,添加dns解析就可以通过域名访问网站.

但是问题有以下几个

* 云服务器需要进行一系列繁琐的安全配置,常用端口可能需要经常更换,因为公网服务器一直在被世界各地的人攻击
* 服务器需要一直续费,不然到期后网站挂掉
* 图片,js等静态资源加载慢(服务器配置好忽略)
* cdn服务不好部署

# 另一种选择 hugo

hugo是一个基于go语言的框架,拥有最快速的静态网页生成速度,这里我们用它来搭建博客网站,使用github pages作为网站的托管,部署到vercel进行网站页面更新以及cdn加速,文章图片使用picgo+github仓库+jsdelivr组合图床,使用开源的utterances作为评论模块,使用algolia作为网站内部搜索引擎

这样做的好处

* 之后你可以专注写本地markdown文章,然后使用hugo生成html静态网页,通过git推送到github仓库
* 无需花时间在服务器上,无需续费网站一直存在,用户名.github.io永久域名访问网站
* vercel帮你完成网页更新以及cdn网站加速
* 静态资源加速访问,图片在github仓库通过jsdelivr加速访问
* 写的博客直接发给别人也不需要打包图片,图片是超链接
* 拥有评论和搜索功能

基本上满足了我对于博客网站所有的需求,这里挂一张本网站在谷歌网页分析的评分,满分!

![image-20210416220534186](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210416220541.png)

# 配置步骤

## 第一步

创建github pages仓库,到github新建一个public仓库,仓库名为**你的用户名.github.io**,例如我的GitHub用户名为clearyup,那我的仓库名为clearyup.github.io

## 第二步

[hugoGitHub仓库](https://github.com/gohugoio/hugo)在下载hugo 0.81.extended版本,将解压后的bin目录加载到系统path路径,cmd检验hugo是否安装成功

![image-20210416221237155](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210416221237.png)

![image-20210416221331657](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210416221332.png)



