- [请求](#请求)
  - [前端进行网络请求的关注点](#前端进行网络请求的关注点)
  - [网络请求方式](#网络请求方式)
- [Ajax](#ajax)
  - [创建一个简单的Ajax](#创建一个简单的ajax)
  - [httpRequest.readyState的值](#httprequestreadystate的值)
  - [访问服务端返回的数据](#访问服务端返回的数据)
  - [GET 注意事项](#get-注意事项)
  - [POST 请求](#post-请求)
  - [异常处理](#异常处理)
  - [Ajax与cookie （跨域）](#ajax与cookie-跨域)
  - [Ajax的优缺点](#ajax的优缺点)
- [通讯](#通讯)
  - [前后端如何通信](#前后端如何通信)
  - [前端如何实现即时通讯？](#前端如何实现即时通讯)
    - [短轮询](#短轮询)
    - [comet服务器推](#comet服务器推)
    - [SSE服务端推送事件](#sse服务端推送事件)
    - [Websocket](#websocket)
    - [Web Worker](#web-worker)
    - [Service workers](#service-workers)
  - [websocket](#websocket-1)
  
## 请求
### 前端进行网络请求的关注点
1. 传入基本参数（url，请求方式）
2. 请求参数，请求参数类型
3. 设置请求头
4. 获取响应的方式
5. 获取响应头、响应状态、响应结果
6. 异常处理
7. 携带cookie设置
8. 跨域请求
   
### 网络请求方式
1. form表单、ifream、刷新页面
2. Ajax
3. jQuery
4. fetch
5. axios、request等众多开源库


## Ajax

[Ajax | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX)

AJAX是异步的JavaScript和XML（Asynchronous JavaScript And XML）。简单点说，就是使用 XMLHttpRequest 对象与服务器通信。 它可以使用JSON，XML，HTML和text文本等格式发送和接收数据。<br>
AJAX特点是“异步”，可以在`不重新刷新页面`的情况下与服务器通信，交换数据，或更新页面。<br>
X代表XML，但实际上JSON的使用比XML更普遍

### 创建一个简单的Ajax

 - 创建 XMLHttpRequest 对象
```js
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

 - 绑定onreadystatechange 事件
```js
httpRequest.onreadystatechange = function(){
    // Process the server response here.
};
```

 - 向服务器发送请求
```js
// 三个参数：方法，url，是否异步请求
httpRequest.open('GET', 'http://www.example.org/some.file', true);
// 设置请求头
xhr.setRequestHeader(header, value);
httpRequest.send();
```

完整的例子
```js
function ajax(url, cb) {
  let xhr;
  if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      cb(xhr.responseText);
    } 
  }
  xhr.open('GET', url, true);
  xhr.send();
}
```

### httpRequest.readyState的值

 - 0 (未初始化) or (请求还未初始化)
 - 1 (正在加载) or (已建立服务器链接)
 - 2 (加载成功) or (请求已接受)
 - 3 (交互) or (正在处理请求)
 - 4 (完成) or (请求已完成并且响应已准备好)


### 访问服务端返回的数据

 - httpRequest.responseText
   - 服务器以文本字符的形式返回
 - httpRequest.responseXML 
   - 以 XMLDocument 对象方式返回，之后就可以使用JavaScript来处理


### GET 注意事项

 -  如果不设置响应头 `Cache-Control: no-cache` 浏览器将会把响应缓存下来而且再也不无法重新提交请求。你也可以添加一个总是不同的 GET 参数，比如时间戳或者随机数 (详情见 [bypassing the cache](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache))


### POST 请求
POST请求则需要设置`RequestHeader`告诉后台传递内容的编码方式以及在send方法里传入对应的值
```js
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type": "application/x-www-form-urlencoded");
xhr.send("key1=value1&key2=value2");
``` 


### 异常处理
```js
xhr.onerror = callback;   //失败
xhr.ontimeout = callback;  //超时
``` 
### Ajax与cookie （跨域）
 - ajax会自动带上同源的cookie，不会带上不同源的cookie
 - 可以通过前端设置withCredentials为true， 后端设置Header的方式让ajax自动带上不同源的cookie，但是这个属性对同源请求没有任何影响。会被自动忽略。

[withCredentials | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials)

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);
```

### Ajax的优缺点
优点：<br>
1. 页面无刷新
2. 异步通信，不打断，响应快
3. 按需取数据，减少冗余，减轻服务器负担
4. 基于标准化技术，广泛支持
  
缺点：<br>
1. 对浏览器后退机制的破坏，不能后退取消前一次操作
2. 安全问题
3. 对搜索引擎的支持比较若
4. 违背url和资源定位的初衷（同url下不同内容）
   

## 通讯
### 前后端如何通信
 - Ajax
 - WebSocket
 - CORS

###  前端如何实现即时通讯？
#### 短轮询
每个一段时间就发一个请求；兼容，实现简单；延迟，消耗请求资源，影响性能。
#### comet服务器推
- 基于AJAX的长轮询
   - 相当于pull，服务端阻塞请求直到有数据返回(或超时)，客户端收到响应后又再次发出请求建立连接；同时，期间若有新数据，服务端保存至下次发送。
   - 优点：兼容，消耗小
   - 缺点：消耗服务器资源，数据无序
- 基于Iframe及htmlfile的流方式（长连接）：嵌入隐藏帧SRC为对长连接的请求；兼容，即时；消耗服务器资源；
#### SSE服务端推送事件
- 服务端向客户端声明，发送流数据，客户端不会关闭连接。相当于一个大文件的下载
- 基于HTTP，相对简单；
- 效率不如websocket，非严格双工，客户端新请求需新连接
#### Websocket
- 基于TCP的独立协议
- 双向通信，性能好，低延迟
- 复杂度高，必须引入成熟的库，否则无法兼容低版本浏览器
#### Web Worker
帮助实现多线程，允许主线程创建worker线程，将部分任务分配给后者
#### Service workers
本质上充当web应用程序与浏览器之间的代理服务器


### websocket
在单个 TCP 连接上进行全双工通讯的协议。在 WebSocket API 中，浏览器和服务器只需要完成一次握手（使用HTTP），两者之间就直接可以创建**持久性**的连接，并进行**双向**数据传输。<br>
`let ws = new WebSocket("wss://example.com:80/some/path");`

 - Socket.onopen	连接建立时触发
 - Socket.onmessage	客户端接收服务端数据时触发
 - Socket.onerror	通信发生错误时触发
 - Socket.onclose	连接关闭时触发
