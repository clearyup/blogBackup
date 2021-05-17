---
title: "Vim"
date: 2021-05-14T22:08:48+08:00
draft: false
tags: ["vim"]
categories: ["Linux"]
lightgallery: true
---
# vim宏的使用
使用vim的宏可以对单个文件或多个文件进行批量处理，这里记录使用宏的一个样例
>我需要更改Annotations文件夹下的1426个xml中的path标签将其中的路径改为自己的，手动更改1426次是不敢想的事情，这里使用vim宏进行处理

- 首先使用next打开这1426个xml文件
```bash
 vim next *.xml
```

- :bn进入下一个文件，:bp进入上一个文件,这里执行进入下一个文件
```bash
:bn
```

- 开始录制宏,normal模式按下`q`再按`z`,就开始录制一个名字为`z`的宏
- 搜索path标签所在行,执行
```bash
/path
```
- 回车跳转到匹配的第一个path,不想匹配第一个path可以在normal模式下使用n跳转下一个path,使用N跳转上一个path

- 删除当前行,normal模式下执行
```bash
cc
```
- 在当前行输入你要替换的内容

```xml
<path>C:\Users\y2010\Desktop\Annotations</path>
```
- 保存
```bash
:w
```
- 跳转到下一个文件
```bash
bn
```
- 结束宏的录制,按下`q`
接下来执行刚录制的宏,normal模式输入`1426@z`,就会执行1426次刚录制的宏,完成目录变更的操作,优雅的处理方式!