let xhr = new XMLHttpRequest();
// 跨域，配置代理http-proxy
xhr.open('GET', '/user', true);
xhr.onload = function(){
  console.log(xhr.response);
}

xhr.send();

// console.log('index111111');

// class Log{
//   constructor() {
//     console.log('error');
//   }
// }
// let log = new Log();