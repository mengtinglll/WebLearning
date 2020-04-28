- [VDOM是什么？为什么会存在VDOM？](#vdom是什么为什么会存在vdom)
- [为什么DOM操作慢？ 因为属性太多了](#为什么dom操作慢-因为属性太多了)
- [vdom如何应用，核心API是什么](#vdom如何应用核心api是什么)
- [diff算法](#diff算法)
  - [同层比对](#同层比对)
  - [key值的使用](#key值的使用)
  - [合并操作](#合并操作)


### VDOM是什么？为什么会存在VDOM？
虚拟DOM，即用JS对象来描述DOM树结构，Diff算法则是找旧VDOM与新的VDOM的最小差异，然后再把差异渲染出来

- 提高开发效率 ，开发者关注业务逻辑而非DOM操作
- 提升性能
   - 直接操作DOM是非常耗费性能的
   - Diff算法和批处理策略
- 浏览器、跨平台兼容性
   - 自己的事件机制，自己模拟了事件冒泡和捕获的过程



![DOM](../img/domtree.png)
![vdom](../img/vdon.png)

描述一个DOM节点
 - tag 标签名
 - attrs DOM属性键值对
 - childen DOM字节点数组 或 文本内容

[如何理解虚拟 DOM?-zhihu](https://www.zhihu.com/question/29504639?sort=created)


### 为什么DOM操作慢？ 因为属性太多了
![domattr](../img/domattr.png)


### vdom如何应用，核心API是什么
 - 创建虚拟节点
   - h('标签名', {...属性...}, [...子元素...])
   - h('标签名', {...属性...}, '文本内容')
 - 将VNode添加到一个DOM元素内
   - patch(DOM_obj, vnode);
 - 用一个新的vnode来和旧的vnode进行比较，得出新旧dom的差异
 - patch(vnode, newVnode)



###  diff算法
对比Vdom树差异的算法
[React 的 diff 算法](https://segmentfault.com/a/1190000000606216)

#### 同层比对
新旧状态的比对时采用同层比对，当发现某节点不一致了直接替换该节点的子树。而不管它的子树是不是真的改动了。

#### key值的使用
在列表循环的时候React会要求每一个列表项有一个**独一无二**，**稳定的key值**，它的目的是为了当状态改变时新旧状态的每一个列表项能够对应起来，方便比对。

Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。
 Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系

#### 合并操作
调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制