// file-loader 默认会再内部生成一张图片到build目录下， 把生成的名字返回来
import './index.css'
import logo from './logo.png'; // 把图片引入，生成一个新的图片地址
let image = new Image();
console.log(logo);
image.src = logo;
document.body.appendChild(image)


// import $ from 'jquery'; // 内联loader的写法
// require("expose-loader?$!jquery");
// console.log($)
// console.log(window.$); // undefined

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