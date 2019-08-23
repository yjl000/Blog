### fs模块

fs模块是node内置的读写文件的模块，引入此模块的话和之前的一样：

```javascript
const fs = require('fs');
```

就可以直接使用了。所有文件操作系统都具有同步和异步的形式。一般情况下，读写文件时都会涉及到IO操作，这个操作时比较耗时的，所以一般情况下我们都用异步的方法。不管是koa2还是express，都是使用异步方法来处理IO操作的，所以我们只讲fs的异步方法。

我们先用代码看看：

```javascript
// node基础与进阶/基础/code/fs.js

const fs = require('fs');
fs.readFile("demo.txt", 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data); // 这是要操作的文件
})
```

这里打印出来的信息和txt文件的是一样的。证明读取文件时成功。一般readFile()有三个参数，第一个就是路径，这里需要注意的是，这个路径并不是我们熟知的相对路径，这里需要注意。其次第二个参数，是编码格式，如果不写这个的话，就会返回原始的buffer文件。buffer内容看另外一篇文章。第三个参数就是回调函数了，在回调函数里面，有两个参数，err和data。如果获取文件内容成功，那err就是null，data就是文件的内容，反之亦然。

出来读取文件，当然还有写入内容——**fs.writeFile()**

#### fs.writeFile()

先看代码：

```javascript
// node基础与进阶/基础/code/fs.js

const data = 'hello, world!';
fs.writeFile('write.txt', data, (err) => {
    if (err) {
        throw err;
    }
    console.log('写入文件成功！');
})
```

运行代码，会发现，node会先查找有没有这个write.txt这个文件，如果没有就创建，如果有，就**替换**掉里面的内容。没错，是替换。writeFile会把文件的内容都替换掉，如果要在后面添加，就要用**fs.open()**，并且第二个参数用'a'，表示append到内容后面。

