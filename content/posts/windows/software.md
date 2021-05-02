---
title: "Software"
date: 2021-04-19T17:28:21+08:00
draft: false
tags: ["windows"]
categories: ["windows"]
lightgallery: true
---
## 常用软件
>[githubClash](https://github.com/Fndroid/clash_for_windows_pkg),设置自动更新订阅    
> [蓝奏云Clash](https://clearstack.lanzous.com/icd96oppxvi)

>[Chrome](https://www.google.com/intl/zh-CN/chrome/)

>Bandizip,防火墙设置拦截更新程序,`U盘安装`

>Potplayer 无边框设置,`U盘安装`

>[腾讯桌面管理软件](https://guanjia.qq.com/product/zmzl/)  
>[Coodesker](https://github.com/coodesker/coodesker-desktop/releases)

>[OBS](https://obsproject.com/) 
>Gif动图录制软件 `U盘安装`

>[uTools](https://u.tools/)
内部安装everything

>XMind ZEN `u盘安装`

>[百度网盘](https://pan.baidu.com/download#pan)

>[IDM](https://clearstack.lanzous.com/ijbryoppzze)   
>[Motrix](https://github.com/agalwood/Motrix/releases)

>[Typora](https://typora.io/)   
>[Obsidian](https://obsidian.md/)   Obsidian Nord主题  
>[Notion](https://www.notion.so/)   
>[picgo](https://github.com/Molunerfinn/PicGo/releases)

>[Capslock+](https://capslox.com/capslock-plus/)

>IObit Uninstaller Portable `U盘安装`

>[Snipaste](https://zh.snipaste.com/)

>[BookxNote pro](http://www.bookxnote.com/)

>[vscode](https://code.visualstudio.com/)      
>Nord Operator Theme  
>c:/user/.vscode下更改`theme.json文件`fontstyle为“”，去除斜体样式     
>[sublimeText3](https://www.sublimetext.com/3)   
>idea   
>[git](https://git-scm.com/)

>Vmware workstation `U盘安装`

>Termius `U盘安装`




## 开发环境
>go

>java jdk1.8

>c/c++  MinGW/Clang

>python3
>you-get

>git

>MySQL

>Redis

>node npm

>[hugo](https://github.com/gohugoio/hugo/releases)

>[Fira Code字体](https://github.com/tonsky/FiraCode/releases)


>字体配置
```json
 "editor.fontFamily": "Fira Code",

 "editor.fontLigatures": false, //不开启连字

 "editor.fontSize": 15,

 "editor.fontWeight": "normal",
```

>[Noto Serif字体](https://www.google.com/get/noto/#serif-lgc)

>[Mactype](https://mactype.net/)


## 网络问题
谷歌浏览器无法上网时的3种解决方案
>1.更改dns为阿里的223.5.5.5   

>2.cmd执行以下命令   
```bash
netsh winsock reset  :: 重置winsock目录
netsh int ip reset  :: 重置tcp/ip各组件到初始状态
ipconfig /release  :: DHCP客户端手工释放动态IP地址
ipconfig /renew  :: DHCP客户端手工向服务器刷新请求
ipconfig /flushdns  :: 清除本地DNS缓存
```

>3.设置-->网络和Internet-->状态-->网络重置

谷歌浏览器重定向到www.google.com.hk 的解决方案   
> 安装浏览器扩展`URLRedirector`   

>添加用户规则
![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210501214358.png)

>或者在广告拦截插件`uBlock Origin`中加入   
>||google.com.hk$script
![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210501220148.png)
