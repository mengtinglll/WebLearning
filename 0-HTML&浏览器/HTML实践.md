### Doctype 作用？标准模式与兼容模式各有什么区别?

DOCTYPE是用来声明文档类型和DTD规范的。
`<!DOCTYPE html>`声明位于HTML文档中的第一行，不是一个HTML标签，处于 html 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

标准模式的排版 和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容
HTML5不基于SGML，所以不用指定DTD

### Doctype文档解析类型
- 标准模式：页面按照 HTML 与 CSS 的定义渲染 `<!DOCTYPE html>`
- 怪异模式模式（默认）： 会模拟更旧的浏览器的行为
- 近乎标准模式（已淘汰）： 会实施了一种表单元格尺寸的怪异行为（与IE7之前的单元格布局方式一致），除此之外符合标准定义
### HTML5 的 form 如何关闭自动补全功能？

给不想要提示的 form 或某个 input 设置为 autocomplete=off。


### iframe 有那些缺点？

- iframe 会阻塞主页面的 Onload 事件；
- 搜索引擎的检索程序无法解读这种页面，不利于 SEO;
- iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通过 javascript

动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题。



### Label 的作用是什么？是怎么用的？

label 标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

```html
<label for="Name">Number:</label> <input type=“text“name="Name" id="Name"/>
<label>Date:<input type="text" name="B"/></label>
```



### 页面可见性（Page Visibility API） 可以有哪些用途？

- 通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
- 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；



### 如何在页面上实现一个圆形的可点击区域？

- map+area 或者 svg
- border-radius
- 纯 js 实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等



### 实现不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。

```html
<div style="height:1px;overflow:hidden;background:red"></div>
```



#### 其他文件链接

 - CSS 文件：<link rel="stylesheet" type="text/css" href="style.css">
 - JavaScript 文件：<script src=“script.js"></script>

但是为了让页面的样子更早的让用户看到，一般把JS文件放到body的底部

#### 厂商定制

同样分享页面到QQ的聊天窗口，有些页面直接就是一个链接，但是有些页面有标题，图片，还有文字介绍。为什么区别这么明显呢？其实就是看有没有设置下面这三个内容
```html
<meta itemprop="name" content="这是分享的标题"/>
<meta itemprop="image" content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png" />
<meta name="description" itemprop="description" content="这是要分享的内容" />
```



