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