class ASyncSeriesHook { // 钩子是保险同步的（是否需要往下执行）
  constructor(args) { // args => ['name']
    this.tasks = [];
  }
  tapAsync(name, task) {
    this.tasks.push(task)
  }
  callAsync(...args) {
    let finalCallBack = args.pop();
    let index = 0;
    let next = () => {
      if (this.tasks.length === index) {
        return finalCallBack()
      }
      let task = this.tasks[index++];
      task(...args, next)
    }
    next();
  }
}

let hook = new ASyncSeriesHook(['name']);
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
    cb()
  }, 1000)
});


hook.callAsync('kenyang', function () {
  console.log('end')
})

// AsyncParralleBailHook() 带保险的异步并发钩子