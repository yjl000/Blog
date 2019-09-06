const fs = require('fs');
fs.readFile("demo.txt", 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

const data = 'hello, world!';
fs.writeFile('write.txt', data, (err) => {
    if (err) {
        throw err;
    }
    console.log('写入文件成功！');
})

/*
fs.open("node基础与进阶/基础/code/demo.txt", 'r', (err, fd) => {
    if (err) {
        throw err;
    }
    console.log('打开文件成功！');
    fs.close(fd, (err) => {
        if (err) {
            throw err;
        }
        console.log('文件成功关闭！')
    })
})
*/

fs.stat('demo.txt', function(err, stats){
    if (err) {
        console.log(err)
    } else {
        // 是否是对象块
        console.log(stats.isBlockDevice());
        // 是否是文件夹
        console.log(stats.isDirectory());
        // 是否是文件
        console.log(stats.isFile());
        if (stats.isFile()) {
            console.log(stats.dev); // 3091812596
            // 获取文件大小
            console.log(stats.size); // 24
        }
    }
})