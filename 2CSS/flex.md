- [对flex弹性布局的理解](#%e5%af%b9flex%e5%bc%b9%e6%80%a7%e5%b8%83%e5%b1%80%e7%9a%84%e7%90%86%e8%a7%a3)
- [flex容器属性](#flex%e5%ae%b9%e5%99%a8%e5%b1%9e%e6%80%a7)
- [flex项目属性](#flex%e9%a1%b9%e7%9b%ae%e5%b1%9e%e6%80%a7)
- [flex注意事项](#flex%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a1%b9)
### 对flex弹性布局的理解
web应用有不同设备尺寸和分辨率，需要响应式界面设计

Flex弹性盒模型的优势在于只声明布局应该具有的行为，而不需要给出具体的实现方式

当布局涉及到不定宽度，分布对齐的场景时，就要优先考虑弹性盒布局

### flex容器属性
- 主轴方向flex-direction：row | row-reverse | column | column-reverse;
- 换行flex-wrap: nowrap | wrap | wrap-reverse;
- 以上两者，可简写为flex-flow
- 主轴对齐方式justify-content：flex-start | flex-end | center | space-between两端对齐 | space-around分散对齐;
- 交叉轴对齐方式align-items: stretch拉伸对齐 | flex-start | flex-end | center | baseline;
- 多根轴线对齐方式align-content: stretch | flex-start | flex-end | center | space-between | space-around;



### flex项目属性
- order: <number>; 数值越小越靠前，默认为0
- flex-grow: <number>; 默认为0，如果有剩余空间也不放大；数字越大越放大
- flex-shrink: <number>;默认为1，如果空间不足则会缩小，值为0不缩小
- flex-basis 项目自身大小比例
- 以上三者，可简写为flex：auto (1 1 auto)自动放大缩小 和 none (0 0 auto)不放大也不缩小
- 项目自身对齐 align-self: auto | flex-start | flex-end | center | baseline | stretch;



### flex注意事项
将任意元素的 display 属性设置为 flex，可将其转换为Flex容器 

设为Flex容器后，子元素的 float、clear 和 vertical-align 属性将失效

父容器可以设置子容器的排列方式，子容器也可以设置自身排列方式，以子容器设置为准
