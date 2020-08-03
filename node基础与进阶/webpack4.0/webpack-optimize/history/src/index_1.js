import calc from './test';
// 1、import 在生产环境下会自动去除掉没用的代码
// tree-shaking（摇晃树） 把没用到的代码 自动删除掉

// 2、scope hosting 作用域提升， 在webpack中自动省略一些可以简化的代码
console.log(calc.sum(1, 2))
