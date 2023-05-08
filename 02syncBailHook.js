const { SyncBailHook } = require('tapable');

const hook = new SyncBailHook(['name', 'age']);

hook.tap('fn1', (name,age) => {
  console.log('fn1 --- name,age: ', name,age);
})

hook.tap('fn2', (name,age) => {
  console.log('fn2 --- name,age: ', name,age);
  return age;
})

hook.tap('fn3', (name,age) => {
  console.log('fn3 --- name,age: ', name,age);
})

hook.call('Picker', 18);