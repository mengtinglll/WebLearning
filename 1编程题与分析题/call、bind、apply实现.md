call()、apply()、bind() 都是用来改变某个函数运行时的上下文，即改变函数体内部this指向<br>
第一个参数：都是 this 的指向对象<br>
第二个参数：<br>
- call的参数是直接放进去的，第二第三第四...用逗号隔开
- apply的第二个参数是放在一个数组中（适用于参数个数不确定）
- bind()和call一致，但返回的是一个新的函数

apply和call，作用完全一样，只是接受参数的方法有区别
### 自封装call方法
```js
Function.prototype.call = function(ctx,...args) {
  const context = ctx || global;//获取新的上下文，即内部this
  const hash = new Date().getTime();
  context[hash] = this;//将原来的this保存，this即调用call方法的函数
  const result = context[hash](...args)//把参数传入调用函数
  delete context[hash];
  return result;
}
```

### 自封装一个apply

 - 首先要先原型上即 Function.prototype上编程
 - 需要拿到函数的引用， 在这里是 this
 - 让 传入对象.fn = this
 - 执行 传入对象.fn(传入参数)
 - 返回执行结果

```js
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window //window是在浏览器环境，node环境就是global
  context.fn = this
  let result
  // 处理参数和 call 有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
```
```js
// ES6方法,和call基本相同
Function.prototype.apply = function(ctx,arr) {
  const context = ctx || global;
  const hash = new Date().getTime();
  context[hash] = this;
  const result = context[hash](...arr);
  delete context[hash];
  return result;
}
```

### 自封装bind方法

 - 因为bind的使用方法是 某函数.bind(某对象，...剩余参数)
   - 所以需要在Function.prototype 上进行编程
 - 将传递的参数中的某对象和剩余参数使用apply的方式在一个回调函数中执行即可
 - 要在第一层获取到被绑定函数的this，因为要拿到那个函数用apply

```js
/**
 * 简单版本 
 */
Function.prototype.myBind = (that, ...args) => {
  const funcThis = this;
  return function(..._args) {
    return funcThis.apply(that, args.concat(_args));
  }
}
```
```js
//ES6实现
// rest为bind里放的参数，args为原函数放的参数
Function.prototype.bind = function(ctx,...rest) {
    if (typeof this !== "function") {
        throw new TypeError('invalid invoked');
    }
    const self = this;//保存原函数
    return function F(...args) {
      if (this instanceof F) {
          return new self(...rest,...args);
      }
      return self.apply(ctx,rest.concat(args));
    }
  
}
```


