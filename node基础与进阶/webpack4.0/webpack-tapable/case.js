class ASyncParralleHook { // 钩子是保险同步的（是否需要往下执行）
  constructor(args) { // args => ['name']
    this.tasks = [];
  }
  tapPromise(name, task) {
    this.tasks.push(task)
  }
  promise(...args) {
    let tasks = this.tasks.map(task => task(...args));
    return Promise.all(tasks);
  }
}

let hook = new ASyncParralleHook(['name']);
let total = 0;
hook.tapPromise('react', function (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('react', name);
      resolve()
    }, 1000)
  })
 
  
});
hook.tapPromise('node', function (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('node', name);
      resolve()
    }, 1000)
  })
});


hook.promise('kenyang').then(function () {
  console.log('end')
})

// AsyncParralleBailHook() 带保险的异步并发钩子