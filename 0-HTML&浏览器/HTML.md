- [HTML、XHTML、XML有什么区别](#htmlxhtmlxml%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)
- [HTML5变化](#html5%e5%8f%98%e5%8c%96)
- [简述一下你对 HTML 语义化的理解？](#%e7%ae%80%e8%bf%b0%e4%b8%80%e4%b8%8b%e4%bd%a0%e5%af%b9-html-%e8%af%ad%e4%b9%89%e5%8c%96%e7%9a%84%e7%90%86%e8%a7%a3)
- [网页基本信息](#%e7%bd%91%e9%a1%b5%e5%9f%ba%e6%9c%ac%e4%bf%a1%e6%81%af)
- [HTML 全局属性](#html-%e5%85%a8%e5%b1%80%e5%b1%9e%e6%80%a7)
- [行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？](#%e8%a1%8c%e5%86%85%e5%85%83%e7%b4%a0%e6%9c%89%e5%93%aa%e4%ba%9b%e5%9d%97%e7%ba%a7%e5%85%83%e7%b4%a0%e6%9c%89%e5%93%aa%e4%ba%9b-%e7%a9%bavoid%e5%85%83%e7%b4%a0%e6%9c%89%e9%82%a3%e4%ba%9b)
- [页面导入样式时，使用 link 和@import 有什么区别？](#%e9%a1%b5%e9%9d%a2%e5%af%bc%e5%85%a5%e6%a0%b7%e5%bc%8f%e6%97%b6%e4%bd%bf%e7%94%a8-link-%e5%92%8cimport-%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)
- [canvas和svg的区别](#canvas%e5%92%8csvg%e7%9a%84%e5%8c%ba%e5%88%ab)
- [em 与 i 的区别](#em-%e4%b8%8e-i-%e7%9a%84%e5%8c%ba%e5%88%ab)
- [src和href的区别](#src%e5%92%8chref%e7%9a%84%e5%8c%ba%e5%88%ab)
- [img的srcset的作用是什么](#img%e7%9a%84srcset%e7%9a%84%e4%bd%9c%e7%94%a8%e6%98%af%e4%bb%80%e4%b9%88)
- [html 中 title 属性和 alt 属性的区别？](#html-%e4%b8%ad-title-%e5%b1%9e%e6%80%a7%e5%92%8c-alt-%e5%b1%9e%e6%80%a7%e7%9a%84%e5%8c%ba%e5%88%ab)
- [script标签中defer和async的区别](#script%e6%a0%87%e7%ad%be%e4%b8%addefer%e5%92%8casync%e7%9a%84%e5%8c%ba%e5%88%ab)
- [property和attribute的区别](#property%e5%92%8cattribute%e7%9a%84%e5%8c%ba%e5%88%ab)
- [title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？](#title-%e4%b8%8e-h1-%e7%9a%84%e5%8c%ba%e5%88%abb-%e4%b8%8e-strong-%e7%9a%84%e5%8c%ba%e5%88%abi-%e4%b8%8e-em-%e7%9a%84%e5%8c%ba%e5%88%ab)
- [哪些元素可以自闭合？](#%e5%93%aa%e4%ba%9b%e5%85%83%e7%b4%a0%e5%8f%af%e4%bb%a5%e8%87%aa%e9%97%ad%e5%90%88)
- [HTML和DOM的关系](#html%e5%92%8cdom%e7%9a%84%e5%85%b3%e7%b3%bb)
- [form 作用](#form-%e4%bd%9c%e7%94%a8)
- [另外还有一些关于 title 属性的知识：](#%e5%8f%a6%e5%a4%96%e8%bf%98%e6%9c%89%e4%b8%80%e4%ba%9b%e5%85%b3%e4%ba%8e-title-%e5%b1%9e%e6%80%a7%e7%9a%84%e7%9f%a5%e8%af%86)
- [head 元素](#head-%e5%85%83%e7%b4%a0)
  
### HTML、XHTML、XML有什么区别
- HTML(超文本标记语言)
- XML(可扩展标记语言)：要求严苛，主要用于存储数据和结构，被JSON取代
- XHTML(可扩展超文本标记语言):更加规范

### HTML5变化
 - [新的语义化元素](http://www.w3school.com.cn/html/html5_new_elements.asp)
   - header footer nav main article  section
   - 删除了一些纯样式的标签 big、center、dir、s[删除线]、u[下划线文本]
 - [表单增强](http://caibaojian.com/html5/form.html)
   - calendar、date、time、email、url、search
 - 删除了对可用性产生负面影响的元素：frame，frameset，noframes；
 - 文件类型声明（<!DOCTYPE>）仅有一型：<!DOCTYPE HTML>
 - 新的解析顺序：不再基于SGML。
 - 新API
   - 离线 （applicationCache ）
   - 音视频 （audio, vidio）
   - 图形 （canvans）
   - 实时通信（websoket）
   - 本地存储（localStorage, indexDB）
   - 设备能力（地图定位，手机摇一摇）
 - 如何区分 HTML5： DOCTYPE 声明\新增的结构元素\功能元素


### 简述一下你对 HTML 语义化的理解？

 - 用正确的标签做正确的事情。
 - html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
 - 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
 - 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO搜索引擎优化;
 - 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
 
 
### 网页基本信息
一个网页，首先得有个标题，就跟人有名字一样。除此之外，还可以根据实际需要补充一些基本信息。
 - 文档标题（浏览器标签中显示的文本）：<title>深入了解 head 元素</title>
 - 编码格式：<meta charset="utf-8"> 如果你的页面出现乱码，那一般就是编码格式不对
 - 视窗设置：<meta name="viewport" content="width=device-width, initial-scale=1.0">
 - 搜索引擎优化相关内容： <meta name="description" content=“帮助你深层次了解HTML文档结构”>
 - IE浏览器版本渲染设置：<meta http-equiv="X-UA-Compatible" content="ie=edge">
   

   
### HTML 全局属性
全局属性是所有HTML元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用。

[全局属性 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)



### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

定义：CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display 值，如 div 的 display 默认值为“block”，则为“块级”元素；span 默认 display 属性值为“inline”，是“行内”元素。

- 行内元素有：a b span img input select strong（强调的语气）
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
- 空元素：
  - 常见: br hr img input link meta
  - 不常见: area base col command embed keygen param source track wbr

不同浏览器（版本）、HTML4（5）、CSS2 等实际略有差异
参考: http://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements



### 页面导入样式时，使用 link 和@import 有什么区别？

- link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS, 定义 rel 连接属性等作用；而@import 是 CSS 提供的，只能用于加载 CSS;
- 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载;
- import 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题;
- link 支持使用 js 控制 DOM 去改变样式，而@import 不支持;


### canvas和svg的区别
canvas是html5提供的新元素<canvas\>，而svg存在的历史要比canvas久远，已经有十几年了。svg并不是html5专有的标签，最初svg是用xml技术（超文本扩展语言，可以自定义标签或属性）描述二维图形的语言。在H5中看似canvas与svg很像，但是，他们有巨大的差别。

首先，从它们的功能上来讲，canvas可以看做是一个画布。，其绘制出来的图形为**标量图**，因此，可以在canvas中引入jpg或png这类格式的图片，在实际开发中，大型的网络**游戏**都是用canvas画布做出来的，并且canvas的技术现在已经相当的成熟。另外，我们喜欢用canvas来做一些统计用的图表，如柱状图曲线图或饼状图等。
而svg，所绘制的图形为**矢量图**，所以其用法上受到了限制。因为只能绘制矢量图，所以svg中不能引入普通的图片，因为矢量图的不会失真的效果，在项目中我们会用来**做小图标**。但是由于其本质为矢量图，可以被无限放大而不会失真，这很适合被用来做地图，而百度地图就是用svg技术做出来的。

另外从技术发面来讲canvas里面绘制的图形不能被引擎抓取，如我们要让canvas里面的一个图片跟随鼠标事件: canvas.onmouseover=function(){}。
而svg里面的图形可以被引擎抓取，支持事件的绑定。另外canvas中我们绘制图形通常是通过javascript来实现，svg更多的是通过标签来来实现，如在svg中绘制正矩形形就要用<rect>，这里我们不能用属性style="width:XXX;height:XXX;"来定义。



### em 与 i 的区别
 - 效果都是斜体
 - em 是语义化标签，表强调
 - i 是样式标签， 表斜体



### src和href的区别
- src是指向外部资源的位置，如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理
- href是指向网络资源所在位置（的超链接），浏览器会并行下载资源，不会停止对当前文档的处理

### img的srcset的作用是什么
可以设计响应式图片
- srcset 定义了我们允许浏览器选择的图像集，以及每个图像的大小。
- sizes 定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。
- 类似的，<picture>元素通过包含零或多个 <source> 元素和一个 <img>元素来为不同的显示/设备场景提供图像版本。


### html 中 title 属性和 alt 属性的区别？

```html
<img src="#" alt="alt信息" />
```
当图片不输出信息的时候，会显示 alt 信息 鼠标放上去没有信息，当图片正常读取，不会出现 alt 信息。
```html
<img src="#" alt="alt信息" title="title信息" />
```
 - 当图片不输出信息的时候，会显示 alt 信息 鼠标放上去会出现 title 信息；
 - 当图片正常输出的时候，不会出现 alt 信息，鼠标放上去会出现 title 信息。
 - 除了纯装饰图片外都必须设置有意义的值，搜索引擎会分析。


### script标签中defer和async的区别
- defer：异步加载后并不会立刻执行，浏览器指示脚本在文档被解析后执行
- async：异步加载脚本，区别是脚本加载完毕后立即执行，脚本乱序，若script有先后依赖关系，则不适用



### property和attribute的区别
例如一个input标签 `<input value="3" />`
他的attribute是3
但如果使用`input.value = 4` 或 直接修改值为4，这时再去getAttribute得到的还是"3"

### title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

- title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取也有很大的影响；
- strong 是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：strong 会重读，而 b 是展示强调内容。
- i 内容展示为斜体，em 表示强调的文本；

Physical Style Elements -- 自然样式标签

b, i, u, s, pre

Semantic Style Elements -- 语义样式标签

strong, em, ins, del, code

应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。



### 哪些元素可以自闭合？
 - 表单元素 input
 - img
 - br,  hr
 - meta, link



### HTML和DOM的关系
 - HTML只是一个字符串
 - DOM由HTML解析而来
 - JS可以维护DOM



### form 作用
 - 直接提交表单
 - 使用submit / reset按钮
 - 便于浏览器保存表单
 - 第三方库可以整体取值
 - 第三方库可以进行表单验证



### 另外还有一些关于 title 属性的知识：

- title 属性可以用在除了 base，basefont，head，html，meta，param，script 和 title 之外的所有标签。
- title 属性的功能是提示。额外的说明信息和非本质的信息请使用 title 属性。title 属性值可以比 alt 属性值设置的更长。
- title 属性有一个很好的用途，即为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的。



### head 元素
head子元素大概分为三类，分别是：
 - 描述网页基本信息的
 - 指向渲染网页需要其他文件链接的
 - 各大厂商根据自己需要定制的


