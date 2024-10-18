# css 理论知识点

> 记录一些理论知识（八股文）

## 简述一下什么是盒模型？

> 盒模型分为两种：`W3C` 标准盒模型和 `IE` 盒模型,其区别只有一个：计算盒子实际大小（即总宽度/总高度）的方式不一样
> 以宽度来举 🌰

- `W3C`标准盒模型
  - 盒子实际宽 = `width` + `padding` + `border`
  - 其中 `width` 只包含 `content`（即内容区域的宽度）
  - 通过 `box-sizing`: `content-box`; 来设置为 W3C 标准盒模型
- IE 盒模型
  - 盒子实际宽 = `width`
  - 其中 `width` = `content` + `border` + `padding`
  - 通过 `box-sizing`: `border-box`; 来设置为 IE 盒模型

## 说一下 BFC（Block Formatting Context） 吧

> 先了解一些前置知识：格式化上下文（Formatting Context）

:::tip 前置知识：格式化上下文(FC)
是 `CSS` 中的一个基础概念，定义了一个元素及其子元素如何在页面中进行布局和渲染。
换句话说，**格式化上下文是一个元素形成的独立环境，其中的布局规则影响到这个环境内的所有子元素，而不受外部元素影响。**

有两种主要的格式化上下文:

- 块级格式化上下文（Block Formatting Context, BFC）
- 行内格式化上下文（Inline Formatting Context, IFC） 在 **`IFC`** 中元素会沿着基线对齐并按从左到右的顺序排列
- 表格单元格格式化上下文（Table Cell Formatting Context,TCFC）在 **`TCFC`** 中表格的列宽会根据单元格的内容自动调整，而不会出现列宽不一致的情况
- 弹性盒子格式化上下文（Flexbox Formatting Context,FFC）在 **`FFC`** 中弹性盒子元素可以按照自己的尺寸和顺序进行排列。
- 网格格式化上下文（Grid Formatting Context,GFC）在 **`GFC`** 中网格元素可以按照网格的行和列进行排列
  :::

> **相关资料**
>
> - [Introduction to formatting contexts 格式化上下文简介 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)

### BFC 的特点

- **`BFC`** 内部的元素会按块级盒子的标准垂直排列（不会出现元素重叠）
- **同一个 `BFC` 中两个相邻 `Box` 的垂直边距 `margin` 会发生重叠**，在不同的 **`BFC`** 中则不会发生重叠
- 防止外边距折叠，特别是在垂直方向上的 margin 合并。
- **`BFC`** 可以包含浮动的子元素，防止浮动元素溢出。
- 在 **`BFC`** 之间，浮动元素和普通元素互不干扰。
  - 形成了 **`BFC`** 的区域不会与浮动元素区域重叠
  - 计算 **`BFC`** 的高度时，浮动元素也会参与计算

### BFC 怎么创建

- 文档的根元素（**`html`**）
- 浮动元素：**`float`** 不为 **`none`**
- **`绝对定位元素：position`** 为 **`absolute`** 或 **`fixed`**
- **`display`** 值为如下属性
  - **`inline-block`** 行内块元素
  - **`flow-root`** 块级元素盒
  - **`table`** 该行为类似于 **`<table>`** 元素
  - **`table-cell`** 该行为类似于 **`<td>`** 元素
  - **`table-caption`** 该行为类似于 **`<caption>`**
  - **`table-row`** 该行为类似于**` <tr`**> 元素
  - **`table-row-group`** 该行为类似于 **`<tbody>`** 元素
  - **`table-header-group`** 该行为类似于 **`<thead>`** 元素
  - **`table-footer-group`** 该行为类似于 **`<tfoot>`** 元素
  - **`inline-table`** 内联表格
- **`display`** 值为 **`flex`** **`inline-flex`** **`grid`** **`inline-grid`** 的直接子元素，且它们本身都不是 **`flex、grid、`** **`table`** 容器
- **`contain`** 值为 **`layout`**、**`content`** 或 **`paint`** 的元素
- **`overflow`** 不为 **`visible`** 和 **`clip`** 的块元素
- 多列容器：**`column-count`** 或 **`column-width`** 值不为 **`auto`**
- **`column-span`** 值为 **`all`**

### BFC 应用场景

> 解决了什么问题

- 浮动元素高度塌陷
- 阻止元素被浮动元素覆盖
- 防止 margin 重叠（塌陷）
- 自适应布局

## 你是怎么理解层叠上下文以及层叠顺序的？

> 层叠上下文是 CSS 中的一个重要概念，涉及到元素在 z 轴上的排列和层级关系，决定哪些元素会覆盖其他元素。

### 触发层叠上下文

- **`position`** 属性为 **`absolute`** | **`relative`** ，并且 **`z-index`** 值不是 **`auto`** 或者 **`position`** 属性为 **`fixed`**（固定定位）或 **`sticky`**（粘滞定位）
- **`display`** 属性为 **`flex`** 或 **`grid`** ，并且 **`z-index`** 值不是 **`auto。`**
- **`opacity`** 值小于 1。
- 以下任意属性值不为 **`none`** 的元素：
  - **`transform`**
  - **`filter`**
  - **`backdrop-filter`**
  - **`perspective`**
  - **`clip-path`**
  - **`mask `**/ **`mask-image`** / **`mask-border`**
- **`contain`** 属性为 **`paint、layout`** 或 **`content。`** -**` mix-blend-mode`** 属性值不为 **`normal`** 的元素
- **`isolation`** 属性值为 **`isolate`** 的元素

### 层叠顺序

在一个层叠上下文中，元素的堆叠顺序遵循以下规则：

- 背景和边框：背景和边框会在堆叠顺序的底部。
- 负 z-index 元素：具有负 z-index 的元素会被放置在当前上下文的底部。
- 非定位元素：没有 position 属性或 z-index 值的元素按文档流的顺序进行堆叠。
- 定位元素：具有 position 和 z-index 的元素按 z-index 值进行堆叠，值越大的元素越在上面。

![层叠顺序](./image/2016-01-09_211116.png)

> 参考：
>
> [深入理解 CSS 中的层叠上下文和层叠顺序](http://www.zhangxinxu.com/wordpress/?p=5115)
>
> [层叠上下文 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)

## specificity(权重)

在 CSS 中，权重（specificity）的表示遵循一个四位数的公式 (a, b, c, d)，其中各部分代表不同类型的选择器：

- a：行内样式，例如 `style="color: red;"`（权重最高）。 1,0,0,0
- b：ID 选择器的数量，例如 #header。 0,1,0,0
- c：类选择器、伪类选择器、属性选择器的数量。例如：`.box、：hover、[type="text"]` 0,0,1,0
- d：元素选择器`div`和伪元素选择器`::before`的数量。0,0,0,1

> 补充问题:
>
> 100 个 class 选择器和 id 选择器那个比较高 回答：id 选择器
>
> 属性选择器和类选择器哪个权重较高 回答：相同
>
> 通配符选择器和元素选择器哪个权重教高 回答：元素选择器
>
> 权重规则：
> 通配符选择器 (\*) 的权重是 0, 0, 0, 0。
> 元素选择器（如 div）的权重是 0, 0, 0, 1。

## '+' 与 '~' 选择器有什么不同

> `+` 选择器只会选择紧邻(之后第一个)的元素，而 `~` 选择器会选择所有紧邻的元素，包括之后的元素。

## 水平垂直居中

1. flex:

```CSS
{
  display: flex;
  justify-content:center;
  align-items:center;
}

```

2.  grid:
    `place-items: center`
3.  absolute/translate:

```css
 {
  position: absolute;
  left/top: 50%;
  transform: translate(50%);
}
```

4.display:table-cell

```css
 {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```

## flex:1 代表什么？

[`flex`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 是一个 `CSS` 简写属性，用于设置 `Flex` 项目如何增大或缩小以适应其 `Flex` 容器中可用的空间

::: tip `flex` 是 `flex-grow` `flex-shrink` `flex-basis` 属性的简写

- [flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow) 用于**设置 `flex` 项目的增长系数**
  - 负值无效
  - 初始值为 `0`
  - 省略时默认值为 `1`
- [flex-shrink](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 用于**设置 `flex` 项目的收缩系数**（仅在默认 `width/height` 之和大于容器时生效）
  - 负值无效
  - 初始值为 `1`
  - 省略时默认值为 `1`
- [flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 用于**设置 `flex` 项目在主轴方向上的初始大小**
  - 初始值为 `auto`
  - 省略时默认值为 `0`

:::

### `flex` 缩写语法规则

### 单值语法规则

```css{17,18}
/* 全局属性值 */
/* 初始值 */
flex: initial; => flex: 0 1 auto
/* 从其父级继承 (flex 属性不可被继承，将设置为初始值) */
flex: inherit; => flex: 0 1 auto
/* 是关键字 initial 和 inherit 的组合(当属性可继承时为 inherit 不可继承时为 initial) */
flex: unset; => flex: 0 1 auto


/* 关键字值 */
/* 根据自身的宽度与高度来确定尺寸 弹性 */
flex: auto; => flex: 1 1 auto
/* 根据自身宽高来设置尺寸 非弹性 */
flex: none; => flex: 0 0 auto


/* 无单位数: flex-grow（标题答案）*/
flex: 1; => 1 1 0
flex: 0; => 0 1 0


/* 一个有效的 width/height 值: flex-basis */
flex: 10px; => 1 1 10px
flex: 20em; => 1 1 20em
flex: min-content; => 1 1 min-content
```

### 双值语法规则

1. **第一个值必须为一个无单位数**
2. 第二个值必须为以下之一
   1. **无单位数**：当作 `flex-shrink` 值
   2. **有效的 `width/height` 值**：当作 `flex-basis` 值

```css
/* 无单位数: flex-grow | flex-shrink */
flex: 2 2; => 2 2 0

/* 有效的 width/height 值: flex-grow | flex-basis */
flex: 2 30px; => 2 1 30px
```

### 三值语法规则

1. **第一个值必须为一个无单位数**，当作 `flex-grow` 值
2. **第二个值必须为一个无单位数**，当作 `flex-shrink` 值
3. **第三个值必须为一个有效的 `width/height` 值**，当作 `flex-basis` 值

```css
flex: 2 2 10%;
```

[`Flex` 语法和计算规则](https://github.com/maomao1996/daily-notes/issues/23)

## 左侧固定、右侧自适应

- flex:

```css
//左侧元素
.container {
  .left {
    flex-basis: 200px;
  }
  .main {
    flex-grow: 1;
    flex-shrink: 0;
  }
}
```

- grid:

```css
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
}
```

## `link` 和 `@import` 加载样式的区别

[`<link>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 是一个 `HTML` 标签，其规定了当前文档与外部资源的关系

[`@import`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import) 是一个 `CSS` 语法规则，用于从其他样式表导入样式规则

::: tip `link` 和 `@import` 加载样式的区别

- 从属关系
  - `<link>` 是一个 `HTML` 标签，只能出现在 `<head>` 标签中
  - `@import` 是一个 `CSS` 语法规则，只能在 `<style>` 标签和 `CSS` 文件中使用
- 应用范围
  - `<link>` 标签用于链接各种类型的外部资源（这里只举三个 🌰）
    - 加载 `CSS`：`<link rel="stylesheet" href="/index.css" />`
    - 加载网站图标（`favicon`）：`<link rel="icon" href="favicon.ico" />`
    - `DNS` 预解析：`<link rel="dns-prefetch" href="https://notes.fe-mm.com">`
  - `@import` 只能用于引入 `CSS`
- 加载顺序
  - `<link>` 会在浏览器加载页面时同时加载（多个 `<link>` 会并行加载）
  - `@import` 会在浏览器解析到 `CSS` 中的 `@import` 时再加载（多个 `@import` 会串行加载）
- `DOM` 可控性
  - `<link>` 可以通过 `JavaScript` 操作 `DOM` 进行插入
  - `@import` 没有 `DOM` 接口，无法通过 `JavaScript` 操作

:::

## 三栏均分布局

- flex:

```css
//左侧元素
.container {
  div {
    flex: 1;
    //or
    flex-basis: calc(100% / 3);
  }
}
```

- grid:

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

## CSS 变量 它解决了什么问题？

```css
:root {
  --bgcolor: #aaa;
  --color: #000;
}
```

- css 变量减少样式重复定义，比如同一个颜色值要在多个地方重复使用
- 在 css 中使用 `var(--color)`、在 js 中使用`--color`

## CSS 配置暗黑模式

最简单来讲，可通过媒体查询 @media (prefers-color-scheme: dark) 与 CSS 变量实现。

```css
@media (prefers-color-scheme: dark) {
  :root {
  }
}
```

## 圣杯布局以及双飞翼布局你了解吗？

- 三栏布局，中间一栏最先加载和渲染（内容最重要，这就是为什么还需要了解这种布局的原因）。
- 两侧内容固定，中间内容随着宽度自适应。
- 一般用于 PC 网页。
- 使用 float 布局。
- 两侧使用 margin 负值，以便和中间内容横向重叠。
- 防止中间内容被两侧覆盖，圣杯布局用 padding ，双飞翼布局用 margin 。

### 圣杯布局

```html
<style>
  #container {
    padding-left: 200px;
    padding-right: 150px;
    overflow: auto;
  }
  #container p {
    float: left;
  }
  .center {
    width: 100%;
    background-color: lightcoral;
  }
  .left {
    width: 200px;
    position: relative;
    left: -200px;
    margin-left: -100%;
    background-color: lightcyan;
  }
  .right {
    width: 150px;
    margin-right: -150px;
    background-color: lightgreen;
  }
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
<div id="container" class="clearfix">
  <p class="center">我是中间</p>
  <p class="left">我是左边</p>
  <p class="right">我是右边</p>
</div>
```

### 双飞翼布局

```html
<style>
  .float {
    float: left;
  }
  #main {
    width: 100%;
    height: 200px;
    background-color: lightpink;
  }
  #main-wrap {
    margin: 0 190px 0 190px;
  }
  #left {
    width: 190px;
    height: 200px;
    background-color: lightsalmon;
    margin-left: -100%;
  }
  #right {
    width: 190px;
    height: 200px;
    background-color: lightskyblue;
    margin-left: -190px;
  }
</style>
<div id="main" class="float">
  <div id="main-wrap">main</div>
</div>
<div id="left" class="float">left</div>
<div id="right" class="float">right</div>
```
