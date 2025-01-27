---
description: "记录开发中的一些常用正则"
---

# 常用正则

> 记录开发中的一些常用正则，使用时建议根据实际需求进行修改
>
> 由于格式化会在前面添加分号，故采用变量形式

## 基础

**正则表达式应当符合实际需求即可，无需过于追求完美**。有时候过于追求准确性可能反而破坏实际需求。例如，手机号、邮箱、URL 的正则，很多人试图编写完美的表达式，结果过于严格，反而引发了问题，从而影响了用户的正常使用

[JS 正则表达式完整教程](https://juejin.cn/post/6844903501034684430)

::: warning 使用 `RegExp` 构造函数的注意点

在将字符串传递给 `RegExp` 构造函数时，需要**注意转义字符**。例如，以下是等价的：

```js
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

// 通过调用 toString() 方法，可以查看正则表达式的字符串表示
re1.toString(); // /\w+/
re2.toString(); // /\w+/
```

1. **优先使用字面量语法创建正则表达式（更简洁、更易读）**
2. **需要动态创建正则表达式时，使用 `RegExp` 构造函数**

:::

## 验证相关

### 是否是金额（精确到分）

```js
const MONEY_PATTERN = /^(0|([1-9]\d*))(\.\d{1,2})?$/;
```

> 更严格

```js
const MONEY_PATTERN =
  /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/;
```

### 是否是手机号

```js
const MOBILE_PATTERN = /^1\d{10}$/;
```

```js
const MOBILE_PATTERN = /^1[3-9]\d{9}$/;
```

### 是否是邮箱号

```js
const EMAIL_PATTERN = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
```

> 更严格的邮箱正则 —— [参考 MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/email#%E5%9F%BA%E6%9C%AC%E9%AA%8C%E8%AF%81)

```js
const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

### 是否是 QQ 号

```js
const QQ_NUMBER_PATTERN = /^[1-9]{1}\d{4,11}$/;
```

### 是否是链接地址

```js
const URL_PATTERN =
  /^(https|http):\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
```

### 是否是身份证号码

```js
const ID_CARD_NUMBER_PATTERN =
  /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
```

### 是否是 16 进制颜色

```js
const HEX_COLOR_PATTERN = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
```

## 格式相关

### 344 格式手机号

**从左到右匹配**：

```js
const pattern = /(^\d{3}|\d{4}\B)/g;
```

> 举 🌰

```js
"15512341234".replace(/(^\d{3}|\d{4}\B)/g, "$1 ");
```

**从右到左匹配**：

```js
const pattern = /\B(?=(\d{4})+\b)/g;
```

> 举 🌰 ：

```js
"15512341234".replace(/\B(?=(\d{4})+\b)/g, " ");
```

### 隐藏手机号中间 4 位

```js
const pattern = /(\d{3})\d{4}(\d{4})/;
```

> 举 🌰 ：

```js
"15512341234".replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
```

### 数字千分位格式化

```js
const pattern = /(\d)(?=(\d{3})+\.)/g;
```

> 举 🌰 ：

```js
"5201314.1314".replace(/(\d)(?=(\d{3})+\.)/g, "$1,"); // '5,201,314.1314'
```

**保留两位小数**：

```js
const pattern = /(\d)(?=(\d{3})+\.)/g;
```

> 举 🌰 ：

```js
(5201314.1314).toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ","); // '5,201,314.13'
```
