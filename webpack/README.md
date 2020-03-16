### webpack简介

`webpack`是一个前端模块化打包工具，最开始它只能打包JS文件，但是随着webpack的发展，他还能打包如CSS、图片等文件。主要由入口，出口，loader，plugins四个部分。

### [模块化](模块化.md)

### [安装](安装.md)

### [webpack基本配置文件](webpack配置文件.md)

### [Loader](loader.md)

### [package-lock.json](./package-lock.json.md)
###loader和plugin和
对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss转换为A.css，单纯的文件转换过程。例如css-loader、file-loader

plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，类似生命周期函数，执行广泛的任务。例如：clean-webpack-plugin在打包时先清空dist文件夹
