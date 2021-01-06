let loaderUtils = require('loader-utils')
// file-loader 需要返回一个路径
function loader(source) {
    // interpolateName 需要Buffer格式，所以loader需要转为二进制
    let filename = loaderUtils.interpolateName(this, '[hash].[ext]',{content: source})
    this.emitFile(filename, source); // 发射文件
    return `module.exports="${filename}"`
}
loader.raw = true; // 转为二进制
module.exports = loader