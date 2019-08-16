### Undefined和Null

#### Undefined类型

Undefined类型只有一个值，就是undefined，比如前面提到的一种定义方式：

```javascript
// code/typeofDemo1.html

var test;
console.log(typeof test); // undefined
```

很明显，就是用var声明了一个变量，但是没有对这个变量进行初始化，那这个变量的值就会是undefined。

有一种情况需要注意，那就是，**未初始化的变量**和**未定义的变量**。看下面的demo

```javascript
// code/undefinedDemo.html 

var msg; // 已声明为初始化的变量
    // var test // 未定义的变量

 console.log(typeof msg); // undefined
 console.log(typeof test);// undefined
 console.log(msg);  // undefined
 console.log(test); // Uncaught ReferenceError: test is not defined
```

在这个demo中可以看到，已定义但是未初始化的变量不管是直接使用，还是用typeof判断，值都是**undefined**，而未定义就使用的变量会在浏览器中报错，但是用过typeof判断是却还是undefined。这个原因是设计之初，作者考虑到的是，一般typeof用于if语句判断，当判断一个未定义的变量时，取其undefined值比直接报错更合理。但是在我们日常看法中，最好对定义的变量进行初始化，emmmm...，要说为什么，就是因为这是一种良好的开发习惯，毕竟，我们工作都是团队开发。

#### Null

Null类型也是只有一个值，就是null，从逻辑的角度来看，null值表示一个空对象指针，意思就是，在栈区有一个指针指向堆区的位置，但是指向堆区的地址是空的。这也是用typeof判断null值是返回的是"object"的原因。比如之前提到的：

```javascript
var obj = null;
console.log(typeof obj); // object
```

#### Undefined与Null

接下来我们看看Undefined和Null的区别，首先还是先看代码：

```javascript
// code/undefined&null.html

console.log(null == undefined); // true
console.log(null === undefined); // false
```

(ΩДΩ)，看这代码的意思，null和undefined，值是一样的，只是类型不一样？？就跟 ‘0’和0一样？的确，“==”操作符会转换操作数，而且undefined值是派生自null值的，所以进行“==”比较时是true，但是他们也是属于不同的数据类型，所以用“===”操作符比较返回的是false。

但是要注意的是，虽然undefined和null有这样的关系，但是用途是完全不一样的。之前说过，undefined是定义变量但是未初始化时产生的，我们不建议对定义的变量不初始化，就是尽量不要让变量值为undefined。但是null 却不一样，如果我们要定义一个object类型的变量，但是我们还无法确定它的属性，这个时候最好用null来初始化。这也是设计null的作用，也有助于区别null和undefined。