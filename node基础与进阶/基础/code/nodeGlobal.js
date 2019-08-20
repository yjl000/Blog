// console.log('current js file is: ' + __filename); // current js file is: e:\bolg\Blog\node基础与进阶\基础\code\nodeGlobal.js

// console.log('current js dir is: ' + __dirname); // current js dir is: e:\bolg\Blog\node基础与进阶\基础\code

process.nextTick(function () {
    console.log('这里是下一轮循环事件');
})

console.log('这是第一轮循环事件');

// 这是第一轮循环事件

// 这里是下一轮循环事件