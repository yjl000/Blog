class ASyncParralleHook { // 钩子是保险同步的（是否需要往下执行）
  constructor(args) { // args => ['name']
    this.tasks = [];
  }
  tapAsync(name, task) {
    this.tasks.push(task)
  }
  callAsync(...args) {
    let finalCallback = args.pop(); // 拿出最终的函数
    let index = 0;
    let done = () => { // Promise.all
      index++;
      if (index == this.tasks.length) {
        finalCallback();
      }
    }
    this.tasks.forEach(task => {
      task(...args, done)
    })
  }
}

let hook = new ASyncParralleHook(['name']);
let total = 0;
hook.tapAsync('react', function (name, cb) {
  setTimeout(() => {
    console.log('react', name);
    cb()
  }, 1000)
  
});
hook.tapAsync('node', function (name, cb) {
  setTimeout(() => {
    console.log('node', name);
    cb();
  }, 1000)
});


hook.callAsync('kenyang', function () {
  console.log('end')
})