function loader(source) { // loader的参数就是要被解析的源码
  console.log('loader1')
  return source
}
module.exports = loader