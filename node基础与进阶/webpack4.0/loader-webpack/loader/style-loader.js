
let loaderUtils = require('loader-utils')
function loader(source) {
    // 在style-loader中导出一个脚本
    let str = `
        let style = document.createElement('style');
        style.innerHTML = ${JSON.stringify(source)};
        document.head.appendChild(style);
    `
    return str
}
// 在style-loader上写pitch,不执行上面的代码
// style-loader less-loader!css-loader!./indexless
/*
D:\study\Blog\node基础与进阶\webpack4.0\loader-webpack\loader\css-loader.js!D:\study\Blog\node基础与进阶
\webpack4.0\loader-webpack\loader\less-loader.js!D:\study\Blog\node基础与进阶\webpack4.0\loader-webpack\src\index.less
*/
// 这里返回的就是css-loader处理的结果
loader.pitch = function (remainRequest) { // 剩余的请求
    let str = `
    let style = document.createElement('style');
    style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainRequest)});
    document.head.appendChild(style);
`
    return str
}

module.exports = loader