let fs = require('fs');
let path = require('path');
let babylon = require('babylon');
let t = require('@babel/types')
let traverse = require('@babel/traverse').default;
let generator = require('@babel/generator').default;
let ejs = require('ejs');
// babylon 主要把源码转换成ast
// @babel/traverse
// @babel/types
// @babel/generator
class Compiler {
  constructor(config) {
    // entry output
    this.config = config;
    // 需要保存入口文件的路径
    this.entryId; // './src/index.js'
    // 需要保存所有的模块依赖
    this.modules = {};
    this.entry = config.entry; // 入口路径
    // 工作路径
    this.root = process.cwd();
  }
  // 获取对应路径的源码
  getSource(modulePath){ // ./index.less
    let rules = this.config.module.rules; // 获取loader规则
    let content = fs.readFileSync(modulePath, 'utf8');
    // 遍历处理规则
    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i];
      let { test, use } = rule;
      let len = use.length - 1; // 从后面往前匹配use
      if (test.test(modulePath)) { // 正则匹配上，证明这个模块需要loader
        // loader获取对应的loader函数
        function normalLoader() {
          let loader = require(use[len--]);
          content = loader(content);
          if (len >= 0) {
            normalLoader();
          }
        }
        normalLoader();
        
      }
      
    } 
    return content;
  }
  // 解决源码
  parse(source, parentPath) { // AST解析语法书
    let ast = babylon.parse(source);
    let dependencies = []; // 依赖的数组
    traverse(ast, {
      CallExpression(p){ // a() require()
        let node = p.node; // 对应的节点
        if (node.callee.name === 'require') {
          node.callee.name = '__webpack_require__';
          let moduleName = node.arguments[0].value; // 取到就是模块的引用名字
          moduleName = moduleName + (path.extname(moduleName)?'': 'js');
          moduleName = './' + path.join(parentPath, moduleName); // './src/a.js'
          dependencies.push(moduleName);
          node.arguments = [t.stringLiteral(moduleName)];
        }
      }
    })
    let sourceCode = generator(ast).code;
    return {sourceCode, dependencies}
  }
  // 构建模块
  buildModule(modulePath, isEntry) {
    // 拿到模块的内容
    let source = this.getSource(modulePath);
    // 模块id modulePath = modulePath - root (总路径减去工作路径 = 相对路径)
    let moduleName = './' + path.relative(this.root, modulePath);
    if (isEntry) {
      this.entryId = moduleName; // 保存入口的名字
    }
    // 解析需要把source源码进行改造 返回一个依赖列表
    let {sourceCode, dependencies} = this.parse(source, path.dirname(moduleName)); // ./src
    
    // 把相对路径和模块中的内容对应起来
    this.modules[moduleName] = sourceCode;
    dependencies.forEach(dep => { // 附模块的加载， 递归加载
      this.buildModule(path.join(this.root, dep), false)
    })
  }
  emitFile() { // 发射文件
    // 用数据渲染模板
    // 拿到输出哪个目录下 输出路径
    let main = path.join(this.config.output.path, this.config.output.filename);
    // 模板的路径
    let templateStr = this.getSource(path.join(__dirname, 'main.ejs'));
    let code = ejs.render(templateStr, {entryId: this.entryId, modules:this.modules})
    this.assets = {}
    // 资源中对应的代码
    console.log(main)
    this.assets[main] = code;
    fs.writeFileSync(main, this.assets[main])
  }
  run() {
    // 执行 并且创建模块的依赖关系
    this.buildModule(path.resolve(this.root, this.entry), true);
    // 发射一个文件 打包后的路径
    this.emitFile();
  }
}

module.exports = Compiler