# CSS提示性能的方法有哪些？

### 一，前言

作为页面渲染的内容展示的重要环节，CSS影响着用户对整个网站的第一体验。因此，在整个产品研发过程中，CSS性能优化同样需要贯穿全场.

### 二，实现方式

1. 内联首屏关键CSS:

   再打开一个页面时，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联CSS首屏关键的代码能够使浏览器在下载完HTML后就能立即渲染。

   而如果是外部css代码，在解析html结构过程中遇到外部cs

   s文件，才会开始下载css代码，在渲染。

   所以，css内联首屏关键css能够使渲染时间提前。

   **注意**：但是较大的css代码并不适合内联，初始会拥塞窗口，而其余代码则采用外部引用方法

2. 异步加载CSS

   在css文件请求，下载，解析完成之前，css会阻塞渲染，浏览器将不会渲染任何已处理的内容。

   前面加载内联代码后，后面的外部引用Ccs则完全没必要阻塞浏览器渲染。这时候就可以采用异步加载的方案，主要有如下：

   - 使用js将link标签茶道head标签最后

     ```
     // 创建link标签
     const myCSS = document.createElement("link");
     myCSS.rel = "stylesheet";
     myCSS.href = "mystyles.css";
     document.head.insertBefore(myCSS,document.head.chidNodes[document.head.childNodes,length - 1].nextSibling); 
     ```

     

   - 设置link标签media属性为noxis,浏览器会认为当前样式不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完成后，将media的值设为screen或all，从而让浏览器开始解析CSS

     ``<link rel="stylesheet" href='' media="noxis" onload="this.media='all'">``

   - 通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet

     ``<link rel="alternate stylesheet" href="mystyles.css" onload="this.rel='stylesheet'">``

3. 资源压缩

   利用webpack，gulp，roullup等模块化工具，将CSS代码进行压缩，使文件变小，大大降低了浏览器的加载时间

4. 合理使用选择器

   CSS匹配的规则是从右往左开始匹配，例如`#markdown .content h3`匹配规则如下：

   - 先找到h3标签元素
   - 然后去除祖先不是.content的元素
   - 最后去除祖先不是#markdown的元素

   如果嵌套的层级更多，页面中的元素更多，那么匹配所要花费的时间代价自然更高。

   所以我们再编写选择器的时候，可以遵循以下规则：

   1. 不要嵌套使用过于复杂的选择器，最好不超过三层以上
   2. 使用id选择器就没有必要再进行嵌套
   3. 通配符和属性选择器效率最低，避免使用

5. 减少使用昂贵的属性
   再页面发生重绘的时候，如box-shadow / border-radius / filter / 透明度 / :nth-child等，会降低浏览器的渲染性能

##### 其他

- 减少回流操作，以减少不必要的重绘
- 了解哪些属性可以继承而来，避免对这些属性重复编写
- css Sprite,合成所以的icon图片，用宽高加上 background-position的背景方式显现出我们要的icon图从，减少了Http请求
- 把小的icon图片转成Base64编码
- css3动画或者过度就尽量使用transform和opacity来实现动画，不要使用left和top属性



### 总结

可以从css选择器，属性特性，减少http请求这三方面考虑，同时注意CSS代码的加载顺序。

