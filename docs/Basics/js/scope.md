# 作用域(scope)

作用域是指程序中变量和函数的可访问范围，即它们能在代码的哪些部分被访问或使用。

> JS 作用域可以分为两大类：全局作用域 、局部作用域

:::tip 作用域类型

- 全局作用域：全局定义的变量和函数，整个程序都可以访问。
- 块级作用域(**`ES6`** 增加)：块级作用域允许在代码块 **`{ }`** 内创建作用域，通常使用 **`let`** 或 **`const`** 声明变量。
- 函数作用域：函数作用域意味着一个函数内部声明的变量只能在该函数内访问。
- 词法作用域(闭包)：意味着变量的作用范围在代码书写时就已确定，而不是在运行时决定。换句话说，函数会“记住”它在定义时所处的环境，并在执行时使用该环境。

:::

## 全局作用域

直接编写在 **`script`** 标签之中的 **`JS`** 代码，都是全局作用域；在浏览器环境中，全局作用域中的变量会自动添加到 **`window`** 对象中（即 **`window.myGlobalVariable`**）

- 使用注意：全局变量很容易引发命名冲突，应尽量避免在大型程序中滥用全局变量。
- 在全局作用域中所有创建的变量函数都会作为 **`window`** 对象的方法保存。
- 在任何一个地方都可以使用，全局变量只有在浏览器关闭的时候才会销毁，比较占用内存资源

```js
var myGlobalVariable = "I am global";
console.log(myGlobalVariable); // I am global

function myFunction() {
  console.log(myGlobalVariable); // I am global
}

myFunction();

window.myGlobalVariable; // I am global

window.myFunction(); // I am global
```

## 局部作用域

在函数内部就是局部作用域，这个代码的名字只在函数的内部起作用,调用函数时创建函数作用域，函数执行完毕之后，函数作用域销毁；每调用一次函数就会创建一个新的函数作用域，它们之间是相互独立的。

- 在局部作用域下声明的变量叫做局部变量
- 局部变量只能在函数内部使用，在局部作用域中可以访问到全局变量。
- 只能在函数内部使用，当其所在代码块被执行时，会被初始化；当代码块执行完毕就会销毁，因此更节省节约内存空间；

## 不同作用域下的变量

### 块级作用域

- 块级作用域确保变量只在该块内有效，而不会污染外部作用域。
- 使用 **`let`** 和 **`const`** 关键字在代码块 **`{}`** 内声明的变量，如在 **`if、for`** 循环、函数内部等。
- 仅在代码块内可见，块之外无法访问，避免变量泄漏。
- 变量在块执行完毕后销毁，优化了内存使用。

```js
{
  //块级作用域
}
if (true) {
}
for (let i = 0; i < 10; i++) {}
```

### 函数作用域

- 只在函数内部可见，函数外无法访问，保证了变量在函数外部的隐私性。
- 函数执行结束后，函数作用域中的变量会被销毁（除非变量被闭包引用）。
- 在函数内部 **`var`** 声明的变量就是局部变量；
- 函数的形参实际上就是局部变量；

```js
function myFunction() {
  var test = "I am local";
  console.log(test); // I am local
}
console.log(test); // 报错 undefined
```

### 词法作用域

```js
function outer() {
  var outerVar = "outer";

  function inner() {
    console.log(outerVar); // 输出 "outer"
  }

  return inner;
}

const myInner = outer();
myInner(); // 输出 "outer"，因为 inner 记住了定义时的作用域
```

# 作用域链（Scope Chain）

作用域链是指在查找变量时按照作用域的层级结构逐层向上查找的机制。每当 `JavaScript` 引擎在某个作用域中查找变量时，如果该作用域没有找到变量，它会向上一级作用域查找，直到找到变量或到达全局作用域。

这种查找机制形成了一个链条，称为“作用域链”。作用域链帮助代码管理不同作用域间的变量可见性，也确保了函数可以访问定义时的外部作用域中的变量。

```js
let globalVar = "global"; // 全局变量

function outer() {
  let outerVar = "outer"; // 外部函数的局部变量

  function inner() {
    let innerVar = "inner"; // 内部函数的局部变量
    console.log(globalVar); // 输出 "global"
    console.log(outerVar); // 输出 "outer"
    console.log(innerVar); // 输出 "inner"
  }

  inner();
}

outer();
```

在 `inner` 函数中，JavaScript 引擎会沿着作用域链查找变量：

1. 先查找 `innerVar`（在 `inner` 的局部作用域中找到）。
2. 再查找 `outerVar`（在 `outer` 的局部作用域中找到）。
3. 最后查找 `globalVar`（在全局作用域中找到）。

- **作用域**决定了变量和函数的可访问性范围。
- **作用域链**是逐层查找变量的机制，确保函数在执行时能够访问到定义时的外部变量。
