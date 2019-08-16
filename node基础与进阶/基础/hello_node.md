#### Hello Node

学任何语言，最开始的第一个程序，都是hello world!

node的安装就不必说了，去官网按照自己的系统下载安装就行，现在的node都是默认自带npm的。

安装完成之后，用命令行执行node -v 可以出现版本就是安装成功了，如下图：

![1565661280604](https://github.com/yjl000/Blog/blob/master/node基础与进阶/基础/image/1565661280604.png)

之后，命令行中输入node,便可以在命令行中输入js了。

![1565661601751](https://github.com/yjl000/Blog/blob/master/node基础与进阶/基础/image/1565661601751.png)

在我个人看来，在这里，node起到了一个浏览器js引擎的角色，也就是JavaScript解释器。简单来说，js的运行时离不开浏览器的，但是node的出现，使得js可以移植到浏览器之外，这便有了很多骚操作，所以，js可以写接口，可以操作本地文件，甚至可以撸一个操作系统（咳咳，未来啥都有可能）。

![img](https://github.com/yjl000/Blog/blob/master/node基础与进阶/基础/image/703CAFF71EFC1E9ABB7975CD37BCAF44.gif)

node命令行既然可以运行js语句，当然也可以运行js文件了（废话）。新建一个first.js文件，里面输入代码：

``console.log('Hello world');``

命令行进入文件所在目录，执行命令：

```javascript
node first.js
```



就会出现js代码运行的结果。

![1565664123448](https://github.com/yjl000/Blog/blob/master/node基础与进阶/基础/image/1565664123448.png)

