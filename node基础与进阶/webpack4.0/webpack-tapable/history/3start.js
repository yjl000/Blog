let {SyncWaterfallHook} = require('tapable');
// 瀑布 ==》 后面的承接前面的（后面执行的函数可以拿到前面执行的函数的返回值）
class Lesson {
  constructor() {
    this.hooks = {
      arch: new SyncWaterfallHook(['name']),
    }
  }
  tap () { // 注册监听函数
    this.hooks.arch.tap('node', function (name) {
      console.log('node', name);
      return 'node学的还不错'
    });
    this.hooks.arch.tap('react', function (data) {
      console.log('react', data)
    })
  }
  start() {
    this.hooks.arch.call('kenyang')
  }
}

let l = new Lesson();
l.tap();
l.start(); // 启动钩子