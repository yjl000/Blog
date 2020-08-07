class ASyncSeriesHook {
  constructor(args) {
    this.tasks = [];
  }
  tapPromise(name, task) {
    this.tasks.push(task)
  }
  promise(...args) { // reduct源码
    let [first, ...other] = this.tasks;
    return other.reduce((p, n) => {
      return p.then(() => n(...args))
    }, first(...args));

  }
}

let hook = new ASyncSeriesHook(['name']);
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