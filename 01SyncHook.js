const { SyncHook } = require('tapable');

const hook = new SyncHook(['name', 'age']);

hook.tap('fn1', (name,age) => {
  console.log('fn1 --- name,age: ', name,age);
})

hook.tap('fn2', (name,age) => {
  console.log('fn2 --- name,age: ', name,age);
})

hook.call('Picker', 18);