---
title: "imageai"
date: 2021-05-03T09:02:48+08:00
draft: false
tags: ["imageai"]
categories: ["python"]
lightgallery: true
---
# ImageAi   
image是一个python库，用于图像预测，对象检测，视频对象检测和视频对象跟踪
## 运行ImageAi
### winsdows所需环境
-   **Python** 3.7.6 , [Download Python](https://www.python.org/downloads/release/python-376//)
    
-   **pip** , [Download PyPi](https://pypi.python.org/pypi/pip/) 
    ```bash
	python -m pip install --upgrade pip
	```
	
-   **Tensorflow** 2.4.0-CPU
    ```bash
    pip install tensorflow==2.4.0
    ```

or **Tensorflow-GPU** if you have a `NVIDIA GPU` with `CUDA` and `cuDNN` installed

```bash
pip install tensorflow-gpu==2.4.0
```



-   **Other Dependencies**
    ```bash
    pip install keras==2.4.3 numpy==1.19.3 pillow==7.0.0 scipy==1.4.1 h5py==2.10.0 matplotlib==3.3.2 opencv-python keras-resnet==0.2.0
    ```
-   **ImageAI**
    ```bash
    pip install imageai --upgrade
    ```

github仓库地址
```
https://github.com/OlafenwaMoses/ImageAI
```

### colab环境
ImageAI
```bash
!pip install imageai
```

下面的训练模型和训练图片也可以手动上传或关联google云盘   
yolo-tiny.h5
```bash
!wget https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/yolo-tiny.h5
```

testImage

```bash
!wget https://github.com/OlafenwaMoses/ImageAI/raw/master/data-images/image2.jpg
```
### 运行
- vscode中运行,确保有`Python`扩展和`TabNine`扩展,并且选择了Python3.7解释器
没选的control+shift+p然后输入Python找到Select Interpreter回车勾选Python3.7解释器回车

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210503105956.png)
![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210503110404.png)

- 新建一个文件夹imageai 鼠标右键`git bash here`执行
```bash
git init
git clone https://github.com/OlafenwaMoses/ImageAI.git
```

- 新建一个文件夹test,鼠标右键用vscode打开

#### 图像预测
图像预测可以预测图片中的内容，目前支持4种算法用来进行图像预测`MobileNetV2`, `ResNet50`, `InceptionV3` and `DenseNet121`,
- 下载训练模型移到test这个文件夹   
[Download ResNet50 Model](https://github.com/OlafenwaMoses/ImageAI/releases/download/essentials-v5/resnet50_imagenet_tf.2.0.h5/)   
- 从imageai仓库文件中选取训练图片移到test文件夹
- 新建firstPrediction.py文件,copy以下代码

```python
from imageai.Prediction import ImagePrediction
import os

# 获得当前路径
execution_path = os.getcwd()

prediction = ImagePrediction()
# 加载AsResNet50模型
prediction.setModelTypeAsResNet50()
prediction.setModelPath(os.path.join(execution_path, "resnet50_imagenet_tf.2.0.h5"))

# 加载模型
prediction.loadModel()

# 返回预测结果
predictions, probabilities = prediction.predictImage(os.path.join(execution_path, "10.jpg"), result_count=5)
for eachPrediction, eachProbability in zip(predictions, probabilities):
    print(eachPrediction , " : " , eachProbability)

```

- vscode控制台 执行
```bash
python firstPrediction.py
```
- 图片

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210503112414.jpg)
- 训练结果
```txt
dog  :  38.412582874298096  :  [328, 0, 480, 412]
--------------------------------
dog  :  75.83869695663452  :  [125, 95, 304, 367]
--------------------------------
bear  :  45.05716562271118  :  [332, 47, 476, 422]
--------------------------------
dog  :  88.30552697181702  :  [493, 97, 647, 444]
--------------------------------
```
可以看到还是有一点误差,多了一个bear,模型将第二只狗识别成了熊和狗因此输出了四个
#### 目标检测
目标预测可以框出图片中的目标，并识别出来，目前支持`RetinaNet`, `YOLOv3` and `TinyYOLOv3`三种算法

- 新建firstDetection.py文件 copy以下代码

```python
from imageai.Detection import ObjectDetection
import os

execution_path = os.getcwd()

detector = ObjectDetection()
detector.setModelTypeAsYOLOv3()
detector.setModelPath( os.path.join(execution_path , "yolo.h5"))

detector.loadModel()
detections = detector.detectObjectsFromImage(input_image=os.path.join(execution_path , "10.jpg"), output_image_path=os.path.join(execution_path , "New11.jpg"), minimum_percentage_probability=30)

for eachObject in detections:
    print(eachObject["name"] , " : ", eachObject["percentage_probability"], " : ", eachObject["box_points"] )
    print("--------------------------------")
```
- vscode控制台 执行
```bash
python firstDetection.py
```
- 图片

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210503112414.jpg)
- 训练结果   

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210503215253.jpg)   

```txt
dog  :  98.87264966964722  :  [116, 103, 311, 373]
--------------------------------
dog  :  99.15174841880798  :  [338, 69, 488, 409]
--------------------------------
dog  :  98.93686175346375  :  [503, 154, 638, 386]
--------------------------------
```

