### Number、String、Object类型

这三个类型放在一起，并不是说不重要（只是自己懒），而是这两个类型感觉不知道咋说，Number无非就是整型和浮点型，然后又分为二进制、八进制、十进制、十六进制。这些都是大学的玩意（现在都忘了）。String类型的话要注意的就是js中单引号和双引号包起来的字符串是一样的。而Object类型，因为后面会有重点介绍，所以这里只是简单的提一下，所以，就放在一起了（还是因为自己懒）。

#### Number

我们前面也提到，js是一门类型比较松散的语言，比如数值类型中浮点型的写法

```javascript
var float = .1
```

也是可以的，但是不推荐这种写法，毕竟我们不差那写一个0的时间。

除此之外，对于1.，1.0这种数值，js会转换为整数，因为浮点数所需要的内存空间是整数的两倍。

还有一点要注意，就是浮点数的精度问题，看下面的代码：

```javascript
console.log(0.1 + 0.2 == 0.3); // false
```

没错，0.1+0.2 不等于0.3，这就是精度产生的问题，实际上是等于0.30000000000000004。当然，这不是js的问题，是IEEE754制定标准的问题。所以在平时开发中，就不要使用

```javascript
if (a + b == 0.3) {}
```

这种判断了。

##### NaN（Not a Number）

NaN叫做不是数值的数值，它是一种特殊的数值。emmm。。。。就是这么拗口。用红宝书里面的话来说，就是这个数值用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）。怎么产生这个数值呢，就是对数值进行非法运算的时候，比如

```javascript
var num = 'blue' * 5; // NaN
```

NaN有两个特点，一个是任何涉及NaN的操作得到的还是NaN；第二个，NaN不等于任何数，包括它自己：

```javascript
console.log(NaN == NaN); // false
```

就是这么任性。那怎么判断一个值是不是NaN呢，js提供了一个方法：**isNaN()**，这个方法会将参数转换为数值，如果转换失败，这个方法就会认定为非数值，就会返回true。如下：

```javascript
// code/number.html

var obj = {};
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false
console.log(isNaN('red')); // true
console.log(isNaN(false)); // false
console.log(isNaN(obj)); // true
```

由此可见，isNaN的方法如果不能转换为数值，就会认为是NaN。

#### 数值转换

js中有三个方法可以将非数值转成字符：Number()、parseInt()、和parseFloat()。Number()的规则太多，直接截图如下图（截图至红宝书）：

![1565948727581](https://github.com/yjl000/Blog/blob/master/js基础与进阶/基础/image/1565948727581.png)

我们上点代码比较好：

```javascript
    // code/number.html

    var obj = {};
    console.log(Number("Hi")); // NaN
    console.log(Number(10)); // 10
    console.log(Number("10")); // 10
    console.log(Number('')); // 0
    console.log(Number(0001)); // 1
    console.log(Number("0xa")); // 10
    console.log(Number(true)); // 1
    console.log(Number(false)); // 0
    console.log(Number(obj)); // NaN
```

接下来是**parseInt**，这个比较重要。它的功能和Number差不多，但是它有第二个参数，这个参数的作用就是可以设置进制。如下：

```javascript
// code/number.html

console.log(parseInt("0xAF", 16)); // 175
console.log(parseInt("AF", 16)); // 175
console.log(parseInt("AF")); // NaN
console.log(parseInt("10", 2)); // 2
console.log(parseInt("10", 8)); // 8
console.log(parseInt("10", 10)); // 10
console.log(parseInt("10", 16)); // 16
```

parseInt()在日常开发中用的最多，为养成良好的习惯，我们最好加上第二个参数。

parseInt与Number的区别如下：

```javascript
// code/number.html

console.log(Number("1a")); // NaN
console.log(parseInt("1a")); // 1
console.log(Number("")); // 0
console.log(parseInt("")); // NaN
```

对于parseFloat()，与parseInt()类似，但是也只有一个参数，主要用于将非数值转为浮点型数值，但是对于整型，就算使用parseFloat()，也还是整型。

#### String类型

String类型用于表示由零个或多个16位的Unicode字符组成的字符序列，也叫字符串。这里主要注意的是字符串中的一些转义字符，如下图：

![1565951262798](https://github.com/yjl000/Blog/blob/master/js基础与进阶/基础/image/1565951262798.png)

既然有非数值转数值，那么当然也有非字符串转字符串了，使用比较多的方法是**toString()**。我们同样通过代码来看这个方法的作用：

```javascript
// code/number.html

var num = 10, flag = true, test = null, und = undefined;
console.log(num.toString()); // '10'
console.log(flag.toString()); // 'true'
console.log(num.toString(2)); // '1010'
console.log(num.toString(8)); // '12'
console.log(num.toString(10)); // '10'
console.log(num.toString(16)); // 'a'
console.log(test.toString()); // Cannot read property 'toString' of null
console.log(und.toString()); // Cannot read property 'toString' of null
```

是的，toString()可以传参数，也表示进制。对于null和undefined，要转成字符串，就要使用**String()**这个函数了：

```javascript
// code/number.html

console.log(String(test)); // 'null'
console.log(String(und)); // 'undefined'
```

String()可以将如何类型转为字符串。调用String()时，会先判断这个值是否有toString()方法，有的话直接调用toString()。如果没有这个方法，也就是null和undefined了，就返回‘null’，‘undefined’。

#### Object类型

这个类型比较复杂，这里贴出其属性和方法，其他的部分后面会有详细介绍

![1565952626487](https://github.com/yjl000/Blog/blob/master/js基础与进阶/基础/image/1565952626487.png)

