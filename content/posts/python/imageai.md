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
    
-   **pip** , [Download pip](https://pypi.python.org/pypi/pip/) 
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
没选的control+shift+p然后输入Python找到Select Interpreter回车勾选Python3.7解释器后回车

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
- 从仓库文件夹imageai中选取训练图片移到test文件夹
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
predictions, probabilities = prediction.predictImage(os.path.join(execution_path, "12.jpg"), result_count=5)
for eachPrediction, eachProbability in zip(predictions, probabilities):
    print(eachPrediction , " : " , eachProbability)
    print("--------------------------------")
```

- vscode控制台 执行
```bash
python firstPrediction.py
```
- 图片

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210505191935.jpg)
- 训练结果
```txt
mountain_bike  :  59.61750149726868
--------------------------------
bicycle-built-for-two  :  20.329207181930542
--------------------------------
jinrikisha  :  6.335373967885971
--------------------------------
crash_helmet  :  1.6147501766681671
--------------------------------
tricycle  :  0.8636814542114735
--------------------------------
```
可以看到识别出了最主要的山地自行车和两个骑自行车的人，但还识别出了三个概率比较小的黄包车,安全帽,三轮车
#### 目标检测
目标预测可以框出图片中的目标，并识别出来，目前支持`RetinaNet`, `YOLOv3` and `TinyYOLOv3`三种深度学习算法
- 下载模型文件移入test文件夹
[YOLOv3 Model - yolo.h5](https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/yolo.h5/)   
- 从仓库文件夹imageai选取训练图片移入test文件夹
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

在目标检测源代码的基础上,增加一个参数就可以将识别出来的对象从原图分割出来保存到新的文件夹，增加的代码在这一行 的`extract_detected_objects=True`

```python
detections, objects_path = detector.detectObjectsFromImage(input_image=os.path.join(execution_path , "10.jpg"), output_image_path=os.path.join(execution_path , "new10.jpg"), minimum_percentage_probability=30,  extract_detected_objects=True)
```

重新运行的结果:

![image-20210505194514741](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/image-20210505194514741.png)

#### 视频检测
ImageAI可以提供方便的视频检测跟踪和视频分析功能,目前支持三种深度学习算法`RetinaNet`,`YOLOv3`,`TinyYOLOv3`
- 下载模型文件移入test文件夹
[TinyYOLOv3 Model - yolo-tiny.h5](https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/yolo.h5/)
- 从仓库文件夹imageai选取训练视频traffic.mp4移入test文件夹
- 新建firstVedioDetection.py文件 copy以下代码

```python
from imageai.Detection import VideoObjectDetection
import os

execution_path = os.getcwd()

detector = VideoObjectDetection()
detector.setModelTypeAsTinyYOLOv3()
detector.setModelPath( os.path.join(execution_path , "yolo-tiny.h5"))
detector.loadModel()

# frames_per_second保存的视频每秒帧数,视频检测秒数
video_path = detector.detectObjectsFromVideo(input_file_path=os.path.join(execution_path, "traffic.mp4"),
                                output_file_path=os.path.join(execution_path, "traffic_detected_all")
                                , frames_per_second=20, log_progress=True,detection_timeout=2)

```

这里的视频检测代码是输出2s的视频,每秒20帧,因为使用电脑的cpu跑的,如果你安装好了`cuda`和`cuDNN`和`GPU`版本的Tensorflow库你可以设置更多的输出时长和视频帧率   

>以下是在colab用GPU跑的每秒30帧的10s输出视频结果,`8G的GPU`一共用将近`20分钟`,设置参数时可以做个参考

![image-20210505200643955](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/image-20210505200643955.png)

执行代码:
```bash
python firstVidioDetection.py
```

原视频片段:   

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/traffic.gif)

识别后:   

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/all.gif)

修改代码,只识别摩托车自行车和人

```python
from imageai.Detection import VideoObjectDetection
import os

execution_path = os.getcwd()

detector = VideoObjectDetection()
detector.setModelTypeAsTinyYOLOv3()
detector.setModelPath( os.path.join(execution_path , "yolo-tiny.h5"))
detector.loadModel()

custom_objects = detector.CustomObjects(person=True, bicycle=True, motorcycle=True)

video_path = detector.detectCustomObjectsFromVideo(
                custom_objects=custom_objects,
                input_file_path=os.path.join(execution_path, "traffic.mp4"),
                output_file_path=os.path.join(execution_path, "traffic_detected_cycle"),
                frames_per_second=20, log_progress=True,detection_timeout=2)
                
                

```

修改后的运行结果:   

![](https://cdn.jsdelivr.net/gh/clearyup/picgo/img/20210505204915.gif)