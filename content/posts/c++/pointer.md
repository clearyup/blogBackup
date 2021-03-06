---
title: "c++指针"
date: 2021-07-24T15:41:25+08:00
draft: false
tags: ["pointer"]
categories: ["c++"]
lightgallery: true
---

# 指针和变量
> 变量实际就是内存中分配出来的一块存储空间,变量类型确定了分配多少字节以及空间里存放什么类型的数据,然后就可以存放对应类型数据,之后变量名就绑定了数据,形成一种`映射`,输出变量名等于输出数据
 
> 这种映射是由编译器实现的,实际上变量名也有物理上的地址,编译器通过这个地址找到这个地址对应的空间存放的数据   

>变量理解为一个容器

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210724185357.png)
>指针也是一个变量,只不过它存储的不是数据,而是数据的地址,准确来说是变量在内存中的首地址,要理解指针要理解内存   

>指针可以理解为一个箱子,箱子有自己的地址	`&p`,里面又放其他数据的地址`p`,通过地址可以取到对应的值`*p`

![a](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210724160304.png)

# 初始化以及使用
>指针变量同普通变量一样，使用之前不仅要定义说明，而且必须赋予具体的值。未经赋值的指针变量不能使用，否则将造成系统混乱，甚至死机。指针变量的赋值只能赋予地址，决不能赋予任何其它数据，否则将引起错误   
- `&`是取地址运算符,可以获得变量地址
- `*`是解引用运算符,以存取的变量地址(在内存中分配的存储空间的首地址)为开头,根据指针所指的变量类型确定取多少字节(因此必要时可以 `DataType*` 给指针指定类型),最后读取数据   


以下有两种初始化方式
- 使用a的地址来初始化指针变量,这里把`int *`看作是指针变量类型,本质还是`p=&a`
```c++
 int a;  
 int *p=&a;   
```
- 赋值语句初始化,这里不能`*p=a`,类型不匹配,`*`在这里不是类型是解引用
```c++
 int a;  
 int *p;  
 p=&a;
```

错误的初始化方式
```c++
//类型不匹配,int类型和int*类型,指针需要地址赋值
 int a;  
 int *p=a;
 
 
//类型不匹配
 int a;  
 int *p;  
 p=a;
 
//*p是int类型,&a是int *类型,不能赋值
 int a;  
 int *p;  
 *p=&a;
```

# 多级指针
>多级指针本质还是变量,存放的不再是地址,而是另一个指针的地址
```c++
//表示 *p指针 p 只能存放int ***类型地址
int **** p;

int a;
int *pa = &a;
int **ppa = &pa;
int ***pppa = &ppa;

```

# 指针与数组
>数组是连续的存储空间,数组名是首元素地址,某种程度上可以作为指针,但是类型是数组,和指针不一样,通过对数组首地址的偏移量来访问数组元素

多维数组存储时还是线性的,不是一个面
>int arr[n][m]   
>访问arr[a][b]
>计算方式: arr+(m*a+b)


![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210724194542.png)
 
# void指针
>通用指针,可以用来存放任何数据类型的引用,但是不能对void指针解引用

```cpp
int num
void *pv = (void*)&num
*pv = 4;//错误
```

# 指向不同值时的地址
>`*p`指向不同值的时候,`p`存放的地址不同,但是指针的地址`&p`不会变

# 指针传递,引用传递,值传递
## 值传递

形参是实参的拷贝，改变形参的值并不会影响外部实参的值。从被调用函数的角度来说，值传递是单向的（实参->形参），参数的值只能传入,不能传出,当函数内部需要修改参数，并且不希望这个改变影响调用者时，采用值传递
```cpp
#include <iostream>
using namespace std;
int sum(int x)
{
    x += 8;
    return x;
}
int main()
{
    int a = 10;

    int k = sum(a);
    cout << "sum=" << k << endl;
    cout << "a=" << a;
	return 0;
}


```
>sum=18  
>a=10
## 指针传递 

形参为指向实参地址的指针，当对形参的指向操作时，就相当于对实参本身进行的操作

## 引用传递 

形参相当于是实参的“别名”，对形参的操作其实就是对实参的操作

在引用传递过程中，被调函数的形式参数虽然也作为局部变量在栈中开辟了内存空间，但是这时存放的是由主调函数放进来的实参变量的地址

被调函数对形参的任何操作都被处理成间接寻址，即通过栈中存放的地址访问主调函数中的实参变量。正因为如此，被调函数对形参做的任何操作都影响了主调函数中的实参变量

## 指针传值和引用传值区别
>程序在编译时分别将指针和引用添加到符号表上，符号表上记录的是变量名及变量所对应地址。指针变量在符号表上对应的地址值为指针变量的地址值，而引用在符号表上对应的地址值为引用对象的地址值。符号表生成后就不会再改，因此指针可以改变其指向的对象（指针变量中的值可以改），而引用对象则不能修改   


`相同点：`

- 都是地址的概念；

指针指向一块内存，它的内容是所指内存的地址；而引用则是某块内存的别名。

`不同点：`

- 指针是一个实体，而引用仅是个别名；

- 引用只能在定义时被初始化一次，之后不可变；指针可变；引用“从一而终”，指针可以“见异思迁”；

- 引用没有const，指针有const，const的指针不可变

- 引用不能为空，指针可以为空；

- `sizeof 引用`得到的是所指向的变量(对象)的大小，而`sizeof 指针`得到的是指针本身的大小；

- 指针和引用的自增(++)运算意义不一样；

- 引用是类型安全的，而指针不是 (引用比指针多了类型检查