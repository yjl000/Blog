// import $ from 'jquery'; // 内联loader的写法
// require("expose-loader?$!jquery");
console.log($)
console.log(window.$); // undefined

// expose-loader 暴露全局的loader 内联的loader
// pre 前面执行的loader normal 普通的loader 后置的loader postloader

// let str = require('./a.js');
// let name = 'ken';
// setTimeout(() => {
//   name = 'yang';
//   console.log(name);
// }, 3000)
// console.log(str + '************')
// class A {
//   a = 1;
// }
// let a = new A();
// console.log(a.a)
// require('./index.css')
// require('./index.less')