class SyncWaterfallHook { // 钩子是保险同步的（是否需要往下执行）
  constructor(args) { // args => ['name']
    this.tasks = [];
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
   let [first, ...others] = this.tasks;
   let ret = first(...args);
   others.reduce((a,b) => {
    return b(a);
   }, ret)
  }
}

let hook = new SyncWaterfallHook(['name']);
hook.tap('react', function (name) {
  console.log('react', name);
  return 'react ok'
});
hook.tap('node', function (data) {
  console.log('node', data);
  return 'node ok'
});
hook.tap('webpack', function (data) {
  console.log('webpack', data);
})

hook.call('kenyang')