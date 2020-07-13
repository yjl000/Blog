let str = require('./a.js');
let name = 'ken';
setTimeout(() => {
  name = 'yang';
  console.log(name);
}, 3000)
console.log(str + '************')
class A {
  a = 1;
}
let a = new A();
console.log(a.a)
require('./index.css')
require('./index.less')