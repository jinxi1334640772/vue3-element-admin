let events = require('events') //引入events模块
let eventEmitter = new events.EventEmitter() //创建events实例

methodsOne =  (qq,ww)=>{ //监听器函数
    console.log(qq,ww,'111');
} 
methodsTwo = (qq,ww)=>{
    console.log(qq,ww,'2222')
}
eventEmitter.on('zhangjinxi',methodsOne) //为事件绑定监听器
eventEmitter.on('zhangjinxi',methodsTwo)

// eventEmitter.emit('zhangjinxi','这是参数1','这是参数2'); //触发事件，可以传入若干个参数，参数会传入绑定的事件监听器，可以同时为一个事件绑定很多个监听器，当事件触发时，监听器以此执行
// eventEmitter.removeListener('zhangjinxi',methodsOne) //移除事件的的某个监听器，两个参数必选
// eventEmitter.on('eventA',()=>{console.log('eventA事件已经执行了')})
// eventEmitter.once('zhangjixni') //只会触发一次事件
// eventEmitter.removeAllListeners(['zhangjinxi'])//移除一些事件的所有监听器，监听器放在一个数组里
// eventEmitter.setMaxListeners(number)//默认一个事件最多有十个监听器，这个方法可以设置监听器的最大个数
let count = eventEmitter.listeners('zhangjinxi') //返回某事件的监听器数组
//  eventEmitter.listenerCount('zhangjinxi') //返回某个事件监听器的个数
console.log(count,'2222222')


//大多数时候不需要创建eventEmitter实例，因为支持事件响应的核心模块，fs,http....,都是eventEmitter的实例，都有各自内定的事件
//此事件机制有些像观察者模式，（注册事件，事件监听器观察事件是否触发，如果发现事件被触发，做出响应）。