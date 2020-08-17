class AsyncSeriesWaterfallHook {
  constructor(args) {
    this.tasks = [];
  }
  tapAsync(name, task) {
    this.tasks.push(task)
  }
  callAsync(...args) { // reduct源码
    let index = 0;
    let finalCallback = args.pop();
    let next = (err, data) => {
      let task = this.tasks[index];
      if (!task) return finalCallback();
      if (index === 0) { // 执行的是第一个
        task(...args, next);
      } else {
        if (err !== null) {
          return finalCallback();
        }
        task(data, next);
      }
      index++;
    }

    next();
  }
}

let hook = new AsyncSeriesWaterfallHook(['name']);
let total = 0;
hook.tapAsync('react', function (name, cb) {
    setTimeout(() => {
      console.log('react', name);
      cb('error', 'result')
    }, 1000)
  
});
hook.tapAsync('node', function (data, cb) {
    setTimeout(() => {
      console.log('node', data);
      cb()
    }, 1000)
});


hook.callAsync('kenyang', function () {
  console.log('end')
})

// AsyncParralleBailHook() 带保险的异步并发钩子