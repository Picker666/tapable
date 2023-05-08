const { AsyncParallelHook } = require('tapable');

const hook = new AsyncParallelHook(['name', 'age']);

// 对应异步钩子的使用，添加监听事件会存在三种方式：tap,tapAsync,tapPromise

// hook.tap('fn1', (name,age) => {
//   console.log('fn1 --- name,age: ', name,age);
// })

// hook.tap('fn2', (name, age) => {
//   console.log('fn2 --- name,age: ', name, age);
// })

// hook.callAsync('Picker', 18, (...rest) => {
//   console.log('AsyncParallelHook have done ...');
// });

// =================================================================
// hook.tapAsync('fn1', (name,age,callback) => {
//   setTimeout(() => {
//     console.log('fn1 --- name,age: ', name,age);
//     callback();
//   },2000)
// })

// hook.tapAsync('fn2', (name, age, callback) => {
//   setTimeout(() => {
//     console.log('fn2 --- name,age: ', name, age);
//     callback();
//   }, 1000)
// })

// hook.callAsync('Picker', 18, (...rest) => {
//   console.log('AsyncParallelHook have done ...');
// });

//================================================

hook.tapPromise('fn1', (name,age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn1 --- name,age: ', name,age);
      resolve();
    }, 2000)
  })
})

hook.tapPromise('fn2', (name, age, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn2 --- name,age: ', name,age);
      resolve();
    }, 1000)
  })
})

hook.promise('Picker', 18).then((...rest) => {
  console.log('AsyncParallelHook have done ...');
});
