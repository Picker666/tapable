const { SyncLoopHook } = require('tapable');

const hook = new SyncLoopHook(['name', 'age']);

let count1 = 0;
let count2 = 0;
let count3 = 0;

hook.tap('fn1', (name,age) => {
  console.log('fn1 --- name,age: ', name,age);
  if (++count1 === 1) {
    count1 = 0;

    return undefined;
  }

  return true;
})

hook.tap('fn2', (name, age) => {
  console.log('fn2 --- name,age: ', name, age);
  if (++count2 === 2) {
    count2 = 0;

    return undefined;
  }

  return true;
})

hook.tap('fn3', (name,age) => {
  console.log('fn3 --- name,age: ', name, age);
  // if (++count3 === 3) {
  //   count3 = 0;

  //   return undefined;
  // }

  // return true;
})

hook.call('Picker', 18);

// 如果有一个hook的返回结果不为 undefined 整个监听都会从头循环执行