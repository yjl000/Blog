function loader(source) { // loader的参数就是要被解析的源码
  console.log('loader3')
  return source
}
module.exports = loader