## 浏览器事件循环VSNode事件循环

这个话题应该已经很多人讨论了，浏览器的V8引擎，浏览器的内核机制。总感觉网上说的很复杂，要了解这个事件循环，就要把浏览器内核，V8引擎都要搞清楚一样，虽然底层原理就是如此，但是有很多时候，我们只想了解**事件循环**这个东西。比如面试的时候，不太可能从浏览器内核说起，emmm，我自己遇到过，说的越多，越乱，面试官越不满意。

我在这里，就简单的说一下自己的看法，不涉及浏览器内核啥的。我们只要知道js是单线程，同一时间只能处理‘一件事’（进栈和出栈）这个前提就可以了。

### 事件循环

事实胜于雄辩，先上代码（面试的时候，有条件（一张纸一支笔就行）最好是自己写出简单的代码，对着代码讲，逻辑就清晰很多了）：

```javas
console.log('main start > ');

new Promise((resolve, reject) => {
    console.log('micro1 strat >');
    resolve();
}).then(() => {
    console.log('micro1 end >');
});

setTimeout(() => {
    console.log('macro1 start > macro end')
}, 0)

// main > micro1 start > micro1 end > macro1 statr > macro1 end
```

这是最简单的情况，不管是node还是浏览器，结果都是一样的，再看第二种情况：

```javascript
console.log('main start > ');

setTimeout(() => {
    console.log('macro1 start > ');
    Promise.resolve().then(() => {
        console.log('micro1 >');
    });
    Promise.resolve().then(() => {
        console.log('micro2 >');
    })
    console.log('macro1 end >');
}, 0)

setTimeout(() => {
    console.log('macro2 start > ');
    Promise.resolve().then(() => {
        console.log('micro3 >');
    });
    Promise.resolve().then(() => {
        console.log('micro4 >');
    })
    console.log('macro2 end >');
}, 0)

// 浏览器：main start > macro1 start > macro1 end > micro1 > micro2 > macro2 start > macro2 end > micro3 > micro4>
// node: main start > macro1 start > macro1 end > macro2 start > macro2 end > micro1 > micro2 > micro3 > micro4 >
```

可以看到，这里的输出就不太一样了。

先看看浏览器的。

1. 首先执行的是\<script>这个主的**宏任务（macro Task），**所以先入栈（stack）。打印了‘main start >’。
2. 执行主的宏任务时，遇到另外两个宏任务——setTimeout。我们这里就命名为macro1和macro2。将他们放入宏任务队列(macro queue)。
3. macro1出队之后立刻进栈执行，打印‘macro1 start > ’。
4. macro1遇到两个**微任务（micro Task）**,将micro1和micro2放入微任务队列。继续执行自己的任务，打印‘macro1 end >’。**到这里，网上很多资料都说，这个宏任务已经执行完了，我个人认为不然，在浏览器里，宏任务把自己执行完一遍之后，应该还会去遍历自己放到队列的任务，不管是宏任务还是微任务，遍历执行之后，这个宏任务才算完**。所以下面我就按自己的想法说了
5. macro1遍历自己放到队列的任务，即micro1，micro2。打印‘micro1 > micro2 >’。
6. macro1执行完毕，出栈，macro2入栈，再重复步骤4,5,6。
7. \<script>宏任务完毕。

这也是我们常看到的，js里的同步是一个任务从上到下，没有遇到其他任务（异步）的时候，顺序执行。而异步就是在一个任务中遇到了其他任务，就将遇到的任务放到队列中，等执行完自己的同步代码之后再去变量自己放入队列的任务。

而node是有点不一样的，它的事件循环是**按阶段**的，我们来具体看看：

1. 首先执行的也是\<script>这个主的宏任务，打印‘main start >’。
2. 主宏任务遇到两个宏任务macro1和macro2，将他们放入timer阶段队列。
3. 主任务同步代码执行完毕，遍历自己的事件阶段队列。
4. timer阶段队列有两个宏任务，先执行第一个macro1，打印'macro1 start >'。
5. 执行macro1的时候遇到两个微任务micro1和micro2，将他们放入微任务队列。
6. 继续执行macro1，打印‘macro1 end’。
7. 继续执行timer阶段（node中完成一个阶段再进入下一个阶段）。
8. 执行macro2，打印‘macro2 start’。
9. 遇到两个微任务micro3和micro4，将他们放入微任务队列。
10. 继续执行macro2，打印‘macro2 end’。
11. timer阶段执行完毕，继续下一阶段，执行微任务——micro1、micro2、micro3、micro4，依次打印‘micro1 > micro2 > micro3 > micro4’。

这就是node的事件循环，是**分阶段的**，这就是与浏览器的不同之处。我的node版本是10.13.0。听说node12版本的事件循环和浏览器的一样，也是先执行完一个宏任务里面所有的微任务再执行下一个宏任务，待有稳定版本之后在验证。

接着，就可以按这个步骤分析开始时那个最简单的例子了。

附录：node官网的6个阶段图片：

![3592443-f9186849ae10d9cc](E:\bolg\Blog\进阶笔记\images\3592443-f9186849ae10d9cc.png)



各个阶段的作用如下：

timers:该阶段执行定时器的回调,如setTimeout() 和 setInterval()。

I/O callbacks:该阶段执行除了close事件，定时器和setImmediate()的回调外的所有回调

idle, prepare:内部使用

poll:等待新的I/O事件，node在一些特殊情况下会阻塞在这里

check: setImmediate()的回调会在这个阶段执行

close callbacks: 例如socket.on('close', ...)这种close事件的回调