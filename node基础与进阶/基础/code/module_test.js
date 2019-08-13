// 要输出的方法

// 方法1
function test1() {
    console.log('this is test1!');
}

// 方法2
function test2(name) {
    console.log("my name is " + name);
}

// 输出模块
module.exports = {
    test1: test1,
    test2: test2
};

