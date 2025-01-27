# 数据类型

**`JavaScript`** 中的数据类型分为基本数据类型和引用数据类型

## 1. 基本类型（Primitive Types）

> 注: 基本数据类型也可以叫原始数据类型

在 ES2020 标准下的 JavaScript 一共有以下 7 种基本类型：

- **`Undefined`**：表示未定义的值，变量声明但未赋值时为 `undefined`。
- **`Null`**：表示“无”或“空”的值，表示意图明确的无值。
- **`Boolean`**：只有两个值：`true` 和 `false`，用于表示逻辑值。
- **`Number`**：包括整数和浮点数，所有数字都被视为 `Number` 类型。
- **`BigInt`**：用于表示大于 `2^53 - 1` 的整数，支持任意精度。
- **`String`**：表示字符串文本，由一系列字符组成。
- **`Symbol`**：表示唯一的值，常用于对象属性的键。

:::tip 基本类型总结

- 基本类型仅保存原始值，不存在属性和方法
- 变量中的基本类型存储在 栈内存 中
- 保存基本类型的变量是 按值 (by value) 访问 的，操作的就是存储在变量中的实际值
- 复制基本类型时会创建该值的第二个副本 (独立使用，互不干扰)

:::

:::tip 为什么原始值不存在属性和方法，但 'hello world'.toString() 可以正确执行

为了方便操作原始值 ECMAScript 提供了 3 种特殊的引用类型：Boolean Number String，每当用到某个原始值的方法或属性时，但当你调用一个方法时，JavaScript 会执行一个“装箱”操作。

:::

```js
// 举个 🌰
const str = "hello world";
str.toString();
str.length;

/**
 * 装箱操作的过程：
 * 1. JavaScript 会临时创建一个对应的对象包装器（如 String 对象）。
 * 2. 调用方法：这个临时对象会有相应的属性和方法
 * 3. 调用结束后，临时对象会被销毁，原始值仍然保持不变
 */
const str = "hello world";
new String(str).toString();
new String(str).length;
```

## 2. 引用数据类型（Reference Types）

引用数据类型是可变的，常见的引用类型如下：

- **`Object`** 对象
- **`Array`** 数组
- **`Function`** 函数
- **`Date`** 日期与时间
- **`RegExp`** 正则表达式
- **`Set`** 类似于数组但成员的值都是唯一的 ([ES6 引入](https://es6.ruanyifeng.com/#docs/set-map#Set))
- **`WeakSet`** ([ES6 引入](https://es6.ruanyifeng.com/#docs/set-map#WeakSet))
- **`Map`** 类似于对象也是键值对的集合 ([ES6 引入](https://es6.ruanyifeng.com/#docs/set-map#Map))
- **`WeakMap`** ([ES6 引入](https://es6.ruanyifeng.com/#docs/set-map#WeakMap))

::: tip 引用类型总结

- 因为 `JavaScript` 不允许直接访问内存位置(不能直接操作对象所在的内存空间)，所以引用类型在 **栈内存** 中存储的是地址(内存指针)，而引用类型中的数据(方法或属性)是存储在 **堆内存** 中
- 保存引用类型的变量是 **按引用 (by reference) 访问** ，实际上操作的是对该对象的引用而非实际的对象本身
- 复制引用类型时只会复制内存指针

:::

::: tip 栈内存和堆内存

- **栈内存**
  - 存储基本数据类型和堆内存地址
  - 是连续的内存空间
- **堆内存**
  - 存储引用数据类型和闭包中的变量
  - 不是连续的内存空间
- 了解更多请点击 [JS 中的栈内存和堆内存](https://github.com/chenqf/frontEndBlog/issues/9)

:::

## 类型判断

常见的五种判断方式

- **`typeof`**
- **`instanceof`**
- **`constructor`**
- **`Array.isArray()`**
- **`Object.prototype.toString`**

### typeof

- 除 **`null`** 外的基本类型都能准确判断

<<< @/Basics/js/code/typeof.js#primitive

::: tip 为什么 typeof null === 'object'
在 `JavaScript` 最初的实现中，`JavaScript` 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 `0`。由于 `null` 代表的是空指针（大多数平台下值为 `0x00`），因此`null` 的类型标签是 `0`，`typeof null` 也因此返回 `"object"` —— [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)
:::

- 除 **`function`** 外的引用类型均返回 `object`

<<< @/Basics/js/code/typeof.js#object{3}

### instanceof

[`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 用于检测构造函数的 `prototype` 属性是否存在于实例对象的原型链上

<<< @/Basics/js/code/instanceof.js

::: tip instanceof 总结

- `instanceof` 不能判断基本类型，对于引用类型只能判断原型链上的从属关系
- `instanceof` 并不完全可靠，因为构造函数的 `prototype` 属性可能会被修改
  - 修改原型的方法
    - 使用 `ES6` 提供的 [`Reflect.setPrototypeOf()`](https://es6.ruanyifeng.com/?search=%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B&x=0&y=0#docs/reflect#Reflect-setPrototypeOfobj-newProto) 方法
    - 借助于非标准的 `__proto__` 伪属性

:::

### constructor

实例对象可以通过 [`constructor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 属性去访问它的构造函数

<<< @/Basics/js/code/constructor.js

::: tip constructor 总结

- `constructor` 可以判断除 `undefined` 和 `null` 外的所有基本类型和引用类型(`undefined` 和 `null` 不存在构造函数)
- `constructor` 并不完全可靠，因为构造函数的 `prototype` 属性可能会被修改，从而造成 `constructor` 属性指向不准确

:::

### Array.isArray()

[`Array.isArray()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) 用于判断一个值是否是数组 (`Array`)

<<< @/Basics/js/code/isArray.js

### Object.prototype.toString

- 每个对象都有一个 [`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用，默认情况下 `toString()` 方法被每个 `Object` 对象继承。如果此方法在自定义对象中未被覆盖 `toString()` 返回 `"[object type]"` 其中 `type` 是对象的类型
- 为了每个对象都能通过 `Object.prototype.toString()` 来检测，需要以 `Function.prototype.call()` 或者 `Function.prototype.apply()` 的形式来调用

<<< @/Basics/js/code/toString.js

`toString` 方法的在 [`ECMAScript 5`](https://es5.github.io/#x15.2.4.2) 下的大致执行过程

1. 如果 `this` 是 `undefined` 返回 `[object Undefined]`
2. 如果 `this` 是 `null` 返回 `[object Null]`
3. 让 `O` 成为 `ToObject(this)` 的结果
4. 让 `class` 成为 `O` 的内部属性 `[[Class]]` 的值
5. 返回由 **`"[object "`** **`class`** **`"]"`** 三个部分组成的字符串

::: warning 注意点

不同 `ECMAScript` 版本对 `toString` 方法的规范都有所不同

[Object.prototype.toString 方法的原理](https://juejin.cn/post/6972878737582850062#heading-27)

:::
