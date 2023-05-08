const { SyncWaterfallHook } = require('tapable');

const hook = new SyncWaterfallHook(['name', 'age']);

hook.tap('fn1', (name,age) => {
  console.log('fn1 --- name,age: ', name,age);
  return `fn1 --- ${name}--${age}...`
})

hook.tap('fn2', (lastValue, age) => {
  console.log('fn2 --- name,age: ', lastValue, age);
  return `${lastValue} --- fn2 - ${age}`;
})

hook.tap('fn3', (lastValue,age) => {
  console.log('fn3 --- name,age: ', lastValue, age);
})

hook.call('Picker', 18);