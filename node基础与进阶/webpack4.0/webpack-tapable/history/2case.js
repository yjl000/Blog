class SyncBailHook { // 钩子是保险同步的（是否需要往下执行）
  constructor(args) { // args => ['name']
    this.tasks = [];
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    let ret; // 当前函数的返回值
    let index = 0; // 当前要先执行第一个
    do {
      ret = this.tasks[index++](...args)
    } while (ret === undefined && index < this.tasks.length);
  }
}

let hook = new SyncBailHook(['name']);
hook.tap('react', function (name) {
  console.log('react', name);
  // return '停止向下学习' // 非undefined的返回值会阻止往下执行
});
hook.tap('node', function (name) {
  console.log('node', name);
})

hook.call('kenyang')