# React与Vue区别

- 模式
   - React严格上只针对(MVC的)view层,Vue则是MVVM模式
   - Vue本质是MVVM框架，(vm对象的属性发生改变的时候，对应的视图部分会相对应更新)
   - React是前端组件化框架，由后端组件化发展而来；
 - 数据绑定
   - vue model双向的
   - react是单向的
 - 模板
   - vue H5模板（扩展html）
   - react FB自己创造的新语法JSX（在JS中写HTML）
 - 渲染过程虚拟DOM
   - vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.
   - React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制

- 扩展
  - 都有支持native的方案，react native和weex
  - 小程序框架，Taro和WEPY，MpVue
 - api
   - vue 多，计算属性，watch 这种神器
   - react 少，更多功能留给社区，比如写个函数还有bind以下
 - 应用
   - vue 适合面向用户的，复杂度稍低一些的
   - react 复杂的
 - 测试
   - react 函数式编程利于测试
- 上手
   - vue - easy 官方做了很多,CSS script
   - react ，上手偏难，  

### Vue 和 React区别
改变数据方式不同，Vue 修改状态相比来说要简单许多，React 需要使用 setState 来改变状态，并且使用这个 API 也有一些坑点。
 Vue 的底层使用了依赖追踪，页面更新渲染已经是最优的了，但是 React 还是需要用户手动去优化这方面的问题。

React 需要使用 JSX，Vue 使用了模板语法

### 相同点
1. 都支持服务器端渲染

2. 都有Virtual DOM,组件化开发,通过props参数进行父子组件数据的传递,都实现webComponent规范

3. 数据驱动视图

4. 都有支持native的方案,React的React native,Vue的weex

5. 都有管理状态，React有redux,Vue有自己的Vuex（自适应vue，量身定做）