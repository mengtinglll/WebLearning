1. 基于视口居中
   - 不要求原生有固定的宽高
    ``` 
      text-align: center;
      margin: 50vh auto;
      transform: translateY(-50%);
      ```
2. 绝对定位
   - 要求原生有固定的宽高
   ```
     position: absolute;
     //top一半，margin为本身宽高的一半
      top: 50%;
      left: 50%;
      margin-left: -9rem; 
      margin-top: -5rem;
    ```
    ```
     position: absolute;
     //top（一半 - 本身一半）
     top: calc(50% - 5em);
     left: calc(50% - 9em);
    ```
3. transform
   - 不要求原生有固定的宽高
   - 
    ```
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    ```
4. flex=margin
    - 不要求原生有固定的宽高
    - 父元素display: flex;
    ```
      margin: auto;
    ```
5. flex align
    - 不要求原生有固定的宽高
    - 父元素
    ```
      display: flex;
      justify-content: center;
      align-items: center;
    ```