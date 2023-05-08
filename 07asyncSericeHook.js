const { AsyncSeriesHook } = require('tapable');

const hook = new AsyncSeriesHook(['name', 'age']);

// 对应异步钩子的使用，添加监听事件会存在三种方式：tap,tapAsync,tapPromise


//================================================

console.time('time2');
console.time('time1')
console.time('done');
hook.tapPromise('fn1', (name,age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn1 --- name,age: ', name,age);
      console.timeEnd('time2')
      resolve();
    }, 2000)
  })
})

hook.tapPromise('fn2', (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn2 --- name,age: ', name,age);
      console.timeEnd('time1')
      resolve();
    }, 1000)
  })
})

hook.tapPromise('fn3', (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn3 --- name,age: ', name,age);
      resolve();
    }, 3000)
  })
})

hook.promise('Picker', 18).then((...rest) => {
  console.log('rest: ', rest);
  console.log('AsyncParallelHook have done ...');
  console.timeEnd('done')
});
