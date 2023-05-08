# tapable

## 同步（sync）

* 1、SyncHook
* 2、SyncBailHook
* 3、SyncWaterfallHook
* 4、SyncLoopHook

## 异步（async） - 串行（Series）

* 1、AsyncSeriesHook
* 2、AsyncSeriesBailHook
* 3、AsyncSeriesWaterfallHook

## 异步（async） - 并行（Parallel）

* 1、AsyncParallelHook
* 2、AsyncParallelBailHook

## 执行模式

* 1、Basic：执行每一个事件函数，不关心函数的返回值
* 2、Bail：执行每一个事件函数，遇到第一个结果 result !== undefined 则返回，不再继续执行
* 3、Waterfall：如果前一个事件函数的结果 result !== undefined,则 result 会作为后一个事件函数的第一个参数
* 4、Loop：不停的循环执行事件函数，直到所有函数结果 result === undefined