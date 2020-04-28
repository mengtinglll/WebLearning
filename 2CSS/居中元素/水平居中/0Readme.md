1. 行内元素
   - 元素display: inline / inline-block 元素，
   - 父元素设置 text-align: center;
2. margin
   -  父元素上设置 text-align: center;<br />
   -  居中元素上margin 为 auto。
3. 绝对定位
   - 元素固定宽度
   
    ```
        //父
        position: relative;
        //一半
        width: 500px;
        position: absolute;
        left: 50%;
        margin-left: -250px;
    ```
4. 相对定位
    - 元素固定宽度
     ```
      width: 500px;
      position: relative;
      left: 50%;
      margin-left: -250px;
    ```