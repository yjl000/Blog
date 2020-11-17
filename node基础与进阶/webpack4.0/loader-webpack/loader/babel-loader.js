let babel = require('@babel/core')
let loaderUtils = require('loader-utils')
function loader(source) { // this loaderContent
    console.log(this.resourcePath)
    let options = loaderUtils.getOptions(this);
    let cb = this.async();
    babel.transform(source, {
        ...options,
        sourceMap: true,
        filename: this.resourcePath.split('/').pop()
    }, function (err, result) {
        cb(err, result.code, result.map); // 异步
    })
}

module.exports = loader;