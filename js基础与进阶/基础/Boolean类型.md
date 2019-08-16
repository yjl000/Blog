### Boolean类型

Boolean类型是js中用的最多的一种类型，因为只要涉及逻辑，就需要进行判断，而要进行判断，就要使用Boolean值来判断。Boolean类型有两个值：**true**和**false**。很多时候，我们都认为数值的1和0对应Boolean的true和false，但是并不是这样。来看下面的表格：

| 数据类型  | 转化为true值           | 转换为false值  |
| --------- | ---------------------- | -------------- |
| Boolean   |                        | false          |
| String    | 任何非空字符串         | “”（空字符串） |
|           | 任何非零数值（无穷大） | 0和NAN         |
| Object    | 任何对象               | null           |
| Undefined | /                      | undefined      |

从上面的这个表格可以看到，并不是数值的0和1就对应Boolean的true和false，另外，我们用控制语句时也需要注意一些细节，如下：

```javas
// code/boolean.html

var msg = "hello world!";
var num = -2;
var obj = {};
var test = null;

if (msg) {
    console.log('String is true'); // String is true
}

if (num) {
    console.log('除了0和NAN,其他数值都是true'); // 除了0和NAN,其他数值都是true
}

if (obj) {
    console.log('空对象？！'); // 空对象？！
}

if (test) { // 没有进入到这里
    console.log('false!')
}
```

这里主要看obj和test，如果要通过一个对象是否有属性来进行不同的逻辑运行，那就不能简单的用if(obj){}来判断，因为就算obj没有任何属性和方法，也会是true值。如果非要进行这种逻辑判断，可以用Object.keys()来判断，如下：

```javascript
// code/boolean.html

var obj = {};
if (Object.keys(obj).length === 0) {
    console.log('object的判断方法之一'); // object的判断方法之一
}
```





