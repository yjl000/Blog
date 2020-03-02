# Grid的简单介绍以及使用

Grid是一种网格布局，主要用于一些瀑布流的布局，是flex的加强版。一般情况下，用flex就可以满足大部分的布局，而且目前的Grid兼容性也有待提高，但是有时候为了面试（装b），了解一下还是有必要的。

Grid分为两部分，一部分是**容器**，一部分是**项目**，先看容器的属性：

### 一、容器属性

如下代码

```html
<div id="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
  </div>
```

上述代码中，container是容器，9个item是项目。先对容器进行网格定义：

```css
#container{
    display: grid;
}
```

这样，就定义了一个网格布局。

##### 1、定义行X列

```css
grid-template-colums: 50px 50px 50px;
grid-template-rows: 50px 50px 50px;
```

这些代码就生成了3X3的单元格，每个单元格宽高是50px,给每个单元格设置颜色，可以看到效果

![1582702361043](https://github.com/yjl000/Blog/blob/master/css实践/Grid实践/image/1582702361043.png)

当然，如果是很多行，很多列，宽高也是一样的情况下，一个个写就很耗时，这是还有另外一种写法：

```css
grid-template-columns: repeat(5, 50px);
grid-template-rows: repeat(5, 50px);
```

repeat函数接受两个参数，第一个是重复几次，第二个是每次设置的长度，第二个参数也可以是百分比，但是要注意的是，使用百分比时，要设置容器对应的长度。

除此之外，还有一种写法：

```css
grid-template-columns: 50px 2fr 1fr;
```

这种写法，表示第2列的宽度是第三列的2倍，如果容器的总宽度是200px，那第一列的单元格是50px，第二列的是100px，第三列的是50px,如图：

![1582702934474](https://github.com/yjl000/Blog/blob/master/css%E5%AE%9E%E8%B7%B5/Grid%E5%AE%9E%E8%B7%B5/image/1582702934474.png)

除此之外，对，还有写法：

```css
grid-template-columns: [c1] 50px [c2] 50px [c3] 50px;
grid-template-rows: [r1] 50px [r2] 50px [r3] 50px;
```

这种写法，定义了每一条网格线的名字。

```css
grid-template-columns: 100px auto 50px;
```

这种写法，第一列和第三列宽度固定，中间列浏览器自动设置（一般是占用容器剩余的宽度）

```css
grid-template-columns: 1fr 1fr minmax(20px, 1fr);
```

这种写法，第三列的宽度最小是20px，最大是一倍。

##### 2.设置行/列间距

```css
column-gap: 20px;
row-gap: 20px;
```

容器中设置行间距和列间距分别为20px，20px。也可以简写如下：

```css
gap: 10px 10px; /*第一个是行间距， 第二个是列间距*/
```

如图所示：

![1582706679767](https://github.com/yjl000/Blog/blob/master/css实践/Grid实践/image/1582706679767.png)

##### 3.设置单元格对应的区域

```css
grid-template-areas: 'a b c'
                     'd e f'
                     'g h i';
```

这个属性，将单元格划分成对应的区域，后面容器中的项目想放到对应的区域，只需要根据属性设置放到对应区域就行，如：

```css
.item-1 {
      background-color: #ef342a;
      grid-area: e;
    }

```

效果如下：

![1582707303198](https://github.com/yjl000/Blog/blob/master/css实践/Grid实践/image/1582707303198.png)

项目1的单元格被放到了e区域。

##### 4.设置项目的排列顺序：grid-auto-flow

1   2   3

4   5   6

7   8   9

这种排列方式叫按行排列，代码如下：

```css
grid-auto-flow: row;
```

也是默认的排列方式，也可以设置成按列排序：

```css
grid-auto-flow: column;
```

效果就是:
1  4  7

2  5  8

3  6  9

除此之外，还有row dense/ column dense，效果的话，可以设置在浏览器看看。

##### 5.设置项目内容的对齐方式

以项目（item-1）的位置为标准，可以设置项目中的内容（1）在项目的位置，属性为：

**justify-items(水平位置)、align-items（垂直位置）、place-items(水平和垂直位置合并的简写)**，对应的值有四个：**start | end | center | stretch**，效果和flex的一样，分别是左边对齐、右边对齐、中间对齐、铺满空间

##### 6.设置项目的对齐方式

以容器的位置为标准，可以设置容器中的项目在容器的位置，属性为：

**justify-content(水平位置)、align-content（垂直位置）、place-content(水平和垂直位置合并的简写)**，对应的值有四个：**start | end | center | stretch**，效果和flex的一样，分别是左边对齐、右边对齐、中间对齐、铺满空间，还有三个值：

**space-around**(项目与项目间隔相等，与容器边框的间隔是与项目间隔的一半) 

 **space-between** (项目与项目间隔相等，与容器边框的间隔没有间隔)

 **space-evenly**(项目与项目间隔相等，与容器边框的间隔是与项目相等)

如下代码：

```css
justify-content: center;
align-content: end;
```

效果如下：

![1582709133035](https://github.com/yjl000/Blog/blob/master/css实践/Grid实践/image/1582709133035.png)

红色边框就是容器的区域。

到这里，容器的属性已经介绍的差不多了，还有一些其他的属性，用的不是很多，也不细讲，感兴趣的可以找官方文档看看。

### 二、项目属性

其实，容器属性已经很多了，也可以满足大部分情况下的页面布局，而项目属性，则是针对单个项目进行设置，所以这里就简单的介绍三个常用的项目属性：

##### 1.项目的跨度

啥叫项目的跨度呢？就比如上面的项目1，有时候，可能项目1需要占用4个单元格，这个时候，它的跨度就是水平方向跨两个，垂直方向也跨两个。跨度对应的属性值如下：

```css
/* 
      grid-column-start  左边框所在的垂直网格线
      grid-colum-end  右边框所在的垂直网格线
      grid-row-start 上边框所在的垂直网格线
      grid-row-end   下边框所在的垂直网格线
     */
```

正常的效果是这样的

![1582702361043](https://github.com/yjl000/Blog/blob/master/css实践/Grid实践/image/1582702361043.png)

现在让项目1横竖跨度两个单元格，即占用四个单元格，代码如下：

```css
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1; 
grid-row-end: 3;
     
```

效果如下：

![1582710283522](https://github.com/yjl000/Blog/blob/master/css实践/Grid实践/image/1582710283522.png)

这里的开始和结束，都是根据网格线来判断的：

![1582710404622](https://github.com/yjl000/Blog/blob/master/css实践/Grid实践/image/1582710404622.png)

还有简化的写法：

```css
grid-column: 1 / 3; /*表示从第1根网格线开始，第三根结束*/
= grid-column-start: span 3;
= grid-column-end: span 3
```

上面的三行代码效果是一样的，取其中一种写法便可。

##### 2.指定项目存放的区域（跟容器的属性第3点中的设置容器区域grid-template-areas一起使用）

##### 3.项目内容的对齐方式

在前面，可以集体设置项目内容的对齐方式，而这个属性，则是**设置单个项目的内容的对齐方式**

```css
justify-self 水平方向
align-self 垂直方向
place-self
```

他们的值和容器属性中的justify-items、align-items、place-items的值一样有四个：

```css
start | end | center | stretch
```

