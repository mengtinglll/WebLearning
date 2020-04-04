- [React 的工作原理](#react-的工作原理)
- [使用 React 有何优点](#使用-react-有何优点)
- [react中key的作用](#react中key的作用)
- [使用PureComponent](#使用purecomponent)
- [refs 作用](#refs-作用)
- [状态(state)和属性(props)之间有何不同](#状态state和属性props之间有何不同)
- [客户端渲染与服务端渲染](#客户端渲染与服务端渲染)
- [React 同构时页面加载流程](#react-同构时页面加载流程)
- [前端路由原理](#前端路由原理)
  - [Hash 模式](#hash-模式)
  - [History 模式](#history-模式)
  - [两种模式对比](#两种模式对比)
- [事件机制（事件合成）](#事件机制事件合成)
### React 的工作原理

React 会创建一个虚拟 DOM(virtual DOM)。当一个组件中的状态改变时，React 首先会通过 "diffing" 算法来标记虚拟 DOM 中的改变，第二步是调节(reconciliation)，会用 diff 的结果来更新 DOM。


### 使用 React 有何优点
 - JSX 的引入，使得组件的代码更加可读，也更容易看懂组件的布局，或者组件之间是如何互相引用的
 - 支持服务端渲染，可改进SEO和性能
 - 易于测试
 - React 只关注 View 层，所以可以和其它任何框架(如Backbone.js, Angular.js)一起使用


### react中key的作用
key是React中用于追踪哪些列表中元素被修改、删除或者被添加的辅助标识。在diff算法中，key用来判断该元素节点是被移动过来的还是新创建的元素，减少不必要的元素重复渲染。



### 使用PureComponent
`PureComponent`内部帮我们实现了`shouldComponentUpdate`的比较，其他和Component一样。但是在shouldComponentUpdate进行的是一个**浅比较**，看看官方文档是怎么说的。

浅比较只比较第一层的基本类型和引用类型值是否相同

如果数据结构比较复杂，那么可能会导致一些问题，要么当你知道改变的时候调用`forceUpdate`,要么使用`immutable`来包装你的state



### refs 作用
Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的API。










### 状态(state)和属性(props)之间有何不同
`State`是一种数据结构，用于组件挂载时所需的默认值。State可能会随着时间的推移而发生突变，但多数时候是作为用户事件行为的结果。

`props`是组件的配置。props由父组件传递给子组件，就子组件而言，props是不可变的。组件不能改变自身props，但是可以把其他子组件的props防止一起管理。 
props也不仅仅是数据，回调函数也可以通过props传递。



### 客户端渲染与服务端渲染
客户端渲染即普通的React项目渲染方式。
客户端渲染流程：
1. 浏览器发送请求
2. 服务器返回HTML
3. 浏览器发送bundle.js请求
4. 服务器返回bundle.js
5. 浏览器执行bundle.js中的React代码

CSR带来的问题：
1. 首屏加载时间过长
2. SEO 不友好

因为时间在往返的几次网络请求中就耽搁了，而且因为CSR返回到页面的HTML中没有内容，就只有一个root空元素，页面内容是靠js渲染出来的，爬虫在读取网页时就抓不到信息，所以SEO不友好

SSR带来的问题：
1. React代码在服务器端执行，很大的消耗了服务器的性能



### React 同构时页面加载流程
1. 服务端运行React代码渲染出HTML
2. 浏览器加载这个无交互的HTML代码
3. 浏览器接收到内容展示
4. 浏览器加载JS文件
5. JS中React代码在浏览器中重新执行








### 前端路由原理
前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新页面。目前前端使用的路由就只有两种实现方式。
 - Hash 模式
 - History 模式

#### Hash 模式

`www.test.com/#/` 就是 Hash URL，当 # 后面的哈希值发生变化时，可以通过 hashchange 事件来监听到 URL 的变化，从而进行跳转页面，并且无论哈希值如何变化，服务端接收到的 URL 请求永远是 www.test.com。
```js
window.addEventListener('hashchange', () => {
  // ... 具体逻辑
})
```

#### History 模式
History 模式是 HTML5 新推出的功能，主要使用 `history.pushState` 和 `history.replaceState` 改变 URL。

通过 History 模式改变 URL 同样不会引起页面的刷新，只会更新浏览器的历史记录。

```js
// 新增历史记录
history.pushState(stateObject, title, URL)
// 替换当前历史记录
history.replaceState(stateObject, title, URL)
```

当用户做出浏览器动作时，比如点击后退按钮时会触发 popState 事件
```js
window.addEventListener('popstate', e => {
  // e.state 就是 pushState(stateObject) 中的 stateObject
  console.log(e.state)
})
```

#### 两种模式对比
 - Hash 模式只可以更改 # 后面的内容，History 模式可以通过 API 设置任意的同源 URL
 - History 模式可以通过 API 添加任意类型的数据到历史记录中，Hash 模式只能更改哈希值，也就是字符串
 - Hash 模式无需后端配置，并且兼容性好。History 模式在用户手动输入地址或者刷新页面的时候会发起 URL 请求，后端需要配置 index.html 页面用于匹配不到静态资源的时候







### 事件机制（事件合成）
React 其实自己实现了一套事件机制，首先我们考虑一下以下代码：
```js
const Test = ({ list, handleClick }) => ({
    list.map((item, index) => (
        <span onClick={handleClick} key={index}>{index}</span>
    ))
})
```

事实当然不是，JSX 上写的事件并没有绑定在对应的真实 DOM 上，而是通过事件代理的方式，将所有的**事件都统一绑定在了`document`上**。这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。

另外冒泡到 document 上的事件也不是原生浏览器事件，而是**React自己实现的合成事件**（SyntheticEvent）。因此我们如果不想要事件冒泡的话，调用 event.stopPropagation 是无效的，而应该调用 event.preventDefault。

那么实现合成事件的目的好处有两点，分别是：
 - 合成事件首先抹平了浏览器之间的兼容问题，另外这是一个跨浏览器原生事件包装器，赋予了跨浏览器开发的能力
 - 对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象。如果你有很多的事件监听，那么就需要分配很多的事件对象，造成高额的内存分配问题。但是对于合成事件来说，有一个事件池专门来管理它们的创建和销毁，当事件需要被使用时，就会从池子中复用对象，事件回调结束后，就会销毁事件对象上的属性，从而便于下次复用事件对象。
