- [HTTP](#http)
    - [HTTP 协议的特点](#http-协议的特点)
    - [请求报文](#请求报文)
    - [响应报文](#响应报文)
    - [头部](#头部)
      - [通用头](#通用头)
      - [请求头](#请求头)
      - [响应头](#响应头)
      - [实体头（请求体）](#实体头请求体)
    - [HTTP 方法](#http-方法)
    - [Post 和 Get 的区别](#post-和-get-的区别)
    - [副作用和幂等的概念。](#副作用和幂等的概念)
    - [常见状态码](#常见状态码)
      - [1XX 指示信息](#1xx-指示信息)
      - [2XX 成功](#2xx-成功)
      - [3XX 重定向](#3xx-重定向)
      - [4XX 客户端错误](#4xx-客户端错误)
      - [5XX 服务器错误](#5xx-服务器错误)
      - [同样是重定向307，303，302的区别？](#同样是重定向307303302的区别)
# HTTP

HTTP是Hyper Text Transfer Protocol（超文本传输协议）的缩写。它是一个应用层协议，由请求和响应构成，是一个标准的客户端服务器模型。HTTP是一个无状态的协议。

### HTTP 协议的特点

- 无连接
  - 限制每次连接只处理一个请求
- 无状态
  - 协议对于事务处理没有记忆能力。
- 简单快速
  - 客户向服务器请求服务时，只需传送请求方法和路径。
- 灵活
  - HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。


### 请求报文
![request](/img/请求体.png)
 - 请求行:用空格分隔。例如，GET /index.html HTTP/1.1。
   - 请求类型(get post)
   - 要访问的资源
   - HTTP协议版本号
 - 请求头
   - 用来说明服务器要使用的附加信息（一些键值对）
   - 例如：User-Agent、 Accept、Content-Type、Connection
 - 空行
   - 分割请求头与请求体
 - 请求体
   - 可以添加任意的其他数据


### 响应报文
 - 状态行：由协议版本、状态码、状态码的原因短语组成，例如HTTP/1.1 200 OK
   - 状态码
   - 状态消息 
   - HTTP协议版本号
 - 响应头
   - 说明客户端要使用的一些附加信息
   - 如：Content-Type、charset、响应的时间
 - 响应体
   - 返回给客户端的文本信息 

### 头部
#### 通用头
- Cache-Control  控制缓存 ✨`no-cache/max-age:`
- Connection 连接管理、逐条首部 ✨
- Transfor-Encoding 报文主体的传输编码格式 ✨
- Date 创建报文的日期
#### 请求头
- 【要求相关】
- Accept 客户端或者代理能够处理的媒体类型 ✨`image/webp,image/apng,image/*,*/*;q=0.8`
- Accept-Encoding 优先可处理的编码格式`gzip, deflate, br`
- Accept-Language 优先可处理的自然语言`zh-CN,zh;q=0.9`
- Accept-Charset 优先可以处理的字符集
- 【缓存相关】
- Cache-Control  控制缓存 ✨
    - private 默认为private  响应只能够作为私有的缓存，不能再用户间共享
    - public 响应会被缓存，并且在多用户间共享。正常情况, 如果要求HTTP认证,响应会自动设置为 private.
    - no-cache  响应不会被缓存,而是实时向服务器端请求资源
    - max-age=10 设置缓存最大的有效时间，但是这个参数定义的是时间大小（比如：60）而不是确定的时间点。单位是[秒 seconds]。
    - no-store 在任何条件下，响应都不会被缓存，并且不会被写入到客户端的磁盘里，这也是基于安全考虑的某些敏感的响应才会使用这个。
- If-Match/If-None-Match 比较实体标记（ETage） ✨
- If-Modified-Since 比较资源更新时间（Last-Modified）✨
- 【其他】
- Connection `keep-alive`不会关闭tcp,`close`
- content-type 告诉服务器请求体的编码方式
- If-Rnages 资源未更新时发送实体byte的范围请求
- Range 实体的字节范围请求 ✨（用于断点续传）
- Authorization web的认证信息 ✨
- Proxy-Authorization 代理服务器要求web认证信息
- Host 请求资源所在服务器 ✨请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的。
- From 用户的邮箱地址
- User-Agent 客户端程序信息 ✨
- cookie 存储一些用户信息以便让服务器辨别用户身份的
- Referer 请求原始放的url，从哪个页面链接过来的
- Expect 期待服务器的特定行为
#### 响应头
- 【缓存相关】
- Cache-Control（对应请求中的Cache-Control）
  - 默认为private  响应只能够作为私有的缓存，不能再用户间共享
  - public 浏览器和缓存服务器都可以缓存页面信息
  - must-revalidate  对于客户机的每次请求，代理服务器必须想服务器验证缓存是否过时。
  - no-cache  浏览器和缓存服务器都不应该缓存页面信息。- max-age=10  是通知浏览器10秒之内不要烦我，自己从缓冲区中刷新。
  - no-store 请求和响应的信息都不应该被存储在对方的磁盘系统中。
- Last-Modified: Dec, 26 Dec 2015 17:30:00 GMT 所请求的对象的最后修改日期(按照 RFC 7231 中定义的“超文本传输协议日期”格式来表示)
- ETag: "737060cd8c284d8af7ad3082f209582d" 就是一个对象（比如URL）的标志值
- 【跨域相关】
- Access-Control-Allow-Origin: *   *号代表所有网站可以跨域资源共享
- Access-Control-Allow-Methods：GET,POST,PUT,DELETE  允许哪些方法来访问
- Access-Control-Allow-Credentials: true  是否允许发送cookie
- 【其他】
- Connection：keep-alive 回应客户端的Connection：keep-alive，回应tcp连接也是一个长连接，客户端可以继续使用这个tcp连接发送http请求
- Content-Type 告诉客户端，资源文件的类型，和字符编码。 `text/html;charset=UTF-8`  application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
- Content-Encoding: gzip 资源编码方式，客户端采用对应解码方式
  
#### 实体头（请求体）
针对请求报文和响应报文的实体部分使用首部
- Allow 资源可支持http请求的方法 ✨
- Content-Language 实体的资源语言
- Content-Encoding 实体的编码格式
- Content-Length 实体的大小（字节）
- Content-Type 实体媒体类型
- Content-MD5 实体报文的摘要
- Content-Location 代替资源的yri
- Content-Rnages 实体主体的位置返回
- Last-Modified 资源最后的修改资源 ✨
- Expires 实体主体的过期资源 ✨

### HTTP 方法
 - GET
   - 获取资源
 - POST
   - 传输资源
 - PUT
   - 更新资源
 - DELETE
   - 删除资源
 - HEAD
   - 获取报文首部


### Post 和 Get 的区别

 - 【场景】get用来获取数据，post用来提交数据
 - 【请求参数】
-  Post 可以通过 request body来传输比 Get 更多的数据和数据种类
 - URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的
 - Post相对Get相对安全一些，因为Get请求都包含在URL中，而且会被浏览器保存记录，Post不会。但是再抓包的情况下都是一样的。
 - GET在浏览器回退时是无害的，而POST会再次提交
 - Get请求能缓存，Post不能
 - Post 支持更多的编码类型且不对数据类型限制
 - POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)


### 副作用和幂等的概念。
- 副作用指对服务器上的资源做改变，搜索是无副作用的，注册是副作用的。<br>
- 幂等指发送 M 和 N 次请求（两者不相同且都大于 1），服务器上资源的状态一致，比如注册 10 个和 11 个帐号是不幂等的，对文章进行更改 10 次和 11 次是幂等的。<br>
- 在规范的应用场景上说，Get 多用于无副作用，幂等的场景，例如搜索关键字。Post 多用于副作用，不幂等的场景，例如注册。


### 常见状态码

#### 1XX 指示信息
表示请求已接收，继续处理

#### 2XX 成功
 - **200** OK
 - 204 No content，表示请求成功，但响应报文不含实体的主体部分
 - 205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容
 - **206** Partial Content，进行范围请求

#### 3XX 重定向
 - **301** 永久性重定向，表示资源已被分配了新的 URL，浏览器会记住
 - **302** 临时性重定向，表示资源临时被分配了新的 URL
 - 303 表示资源存在着另一个 URL，应使用 GET 方法获取资源
 - **304** 未修改，重定位到浏览器。自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。如果网页自请求者上次请求后再也没有更改过，您应将服务器配置为返回此响应（称为 If-Modified-Since HTTP 标头）。服务器可以告诉 Googlebot 自从上次抓取后网页没有变更，进而节省带宽和开销。
 - 307 临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求

#### 4XX 客户端错误
 - 400 请求报文存在语法错误
 - 401  表示发送的请求需要有通过 HTTP 认证的认证信息
 - 403 forbidden，表示对请求资源的访问被服务器拒绝
 - **404** 在服务器上没有找到请求的资源



#### 5XX 服务器错误
 - **500** 表示服务器端在执行请求时发生了错误
 - 501 表示服务器不支持当前请求所需要的某个功能
 - **503** 表明服务器暂时处于超负载或正在停机维护，无法处理请求

#### 同样是重定向307，303，302的区别？
- 302是http1.0的协议状态码
- 在http1.1版本的时候为了细化302状态码又出来了两个303和307。
- 303明确表示客户端应当采用get方法获取资源，他会把POST请求变为GET请求进行重定向。
- 307会遵照浏览器标准，不会从post变为get。
