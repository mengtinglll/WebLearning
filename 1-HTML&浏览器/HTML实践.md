- [Doctype 作用？标准模式与兼容模式各有什么区别?](#doctype-%e4%bd%9c%e7%94%a8%e6%a0%87%e5%87%86%e6%a8%a1%e5%bc%8f%e4%b8%8e%e5%85%bc%e5%ae%b9%e6%a8%a1%e5%bc%8f%e5%90%84%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)
- [Doctype文档解析类型](#doctype%e6%96%87%e6%a1%a3%e8%a7%a3%e6%9e%90%e7%b1%bb%e5%9e%8b)
- [HTML5 的 form 如何关闭自动补全功能？](#html5-%e7%9a%84-form-%e5%a6%82%e4%bd%95%e5%85%b3%e9%97%ad%e8%87%aa%e5%8a%a8%e8%a1%a5%e5%85%a8%e5%8a%9f%e8%83%bd)
- [iframe 有那些缺点？](#iframe-%e6%9c%89%e9%82%a3%e4%ba%9b%e7%bc%ba%e7%82%b9)
- [Label 的作用是什么？是怎么用的？](#label-%e7%9a%84%e4%bd%9c%e7%94%a8%e6%98%af%e4%bb%80%e4%b9%88%e6%98%af%e6%80%8e%e4%b9%88%e7%94%a8%e7%9a%84)
- [页面可见性（Page Visibility API） 可以有哪些用途？](#%e9%a1%b5%e9%9d%a2%e5%8f%af%e8%a7%81%e6%80%a7page-visibility-api-%e5%8f%af%e4%bb%a5%e6%9c%89%e5%93%aa%e4%ba%9b%e7%94%a8%e9%80%94)
- [如何在页面上实现一个圆形的可点击区域？](#%e5%a6%82%e4%bd%95%e5%9c%a8%e9%a1%b5%e9%9d%a2%e4%b8%8a%e5%ae%9e%e7%8e%b0%e4%b8%80%e4%b8%aa%e5%9c%86%e5%bd%a2%e7%9a%84%e5%8f%af%e7%82%b9%e5%87%bb%e5%8c%ba%e5%9f%9f)
- [实现不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。](#%e5%ae%9e%e7%8e%b0%e4%b8%8d%e4%bd%bf%e7%94%a8-border-%e7%94%bb%e5%87%ba-1px-%e9%ab%98%e7%9a%84%e7%ba%bf%e5%9c%a8%e4%b8%8d%e5%90%8c%e6%b5%8f%e8%a7%88%e5%99%a8%e7%9a%84%e6%a0%87%e5%87%86%e6%a8%a1%e5%bc%8f%e4%b8%8e%e6%80%aa%e5%bc%82%e6%a8%a1%e5%bc%8f%e4%b8%8b%e9%83%bd%e8%83%bd%e4%bf%9d%e6%8c%81%e4%b8%80%e8%87%b4%e7%9a%84%e6%95%88%e6%9e%9c)
- [其他文件链接](#%e5%85%b6%e4%bb%96%e6%96%87%e4%bb%b6%e9%93%be%e6%8e%a5)
- [厂商定制](#%e5%8e%82%e5%95%86%e5%ae%9a%e5%88%b6)

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



### 其他文件链接

 - CSS 文件：<link rel="stylesheet" type="text/css" href="style.css">
 - JavaScript 文件：<script src=“script.js"></script>

但是为了让页面的样子更早的让用户看到，一般把JS文件放到body的底部

### 厂商定制

同样分享页面到QQ的聊天窗口，有些页面直接就是一个链接，但是有些页面有标题，图片，还有文字介绍。为什么区别这么明显呢？其实就是看有没有设置下面这三个内容
```html
<meta itemprop="name" content="这是分享的标题"/>
<meta itemprop="image" content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png" />
<meta name="description" itemprop="description" content="这是要分享的内容" />
```



