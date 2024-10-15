## JavaScript复习题

**1、知道闭包吗 闭包是什么？**
```js
闭包是指有权访问另一个函数作用域中变量的函数---《JavaScript高级程序设计》
使函数在当前词法作用域外执行---《你不知道的JavaScript》

当函数可以记住并访问所在词法作用域时，就产生了闭包。
闭包的用途：
    - 能够访问当前词法作用域并且阻止其被回收
    - 私有化变量(其他作用域不能调用)
    - 模拟块级作用域
    - 创建模块
缺点：
    - 会导致变量一直保存在内存中 容易导致内存泄漏
```

**2、什么是作用域，作用域分为几种**
```js
作用域就是能够存储变量当中的值，并且能对变量进行修改或访问
js中作用域有：全局作用域，块作用域(ES6新增的 let)，函数作用域
块作用域：{}、if for 语句中的{} 也属于块作用域

```

**3、什么是执行上下文，作用域链是什么**
```js
当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。
因此，在当前作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量，或抵达最外层的作用域（也就是全局作用域）为止。

```

**4、原型，原型链**
```js
原型：对象中固有的 `__proto__` 属性,该属性指向prototype原型属性
原型链：当我们访问一个对象的时候，如果这个对象内部不存在这个属性那么就会到他的原型去寻找，如果他的原型也找不到就会到原型的原型去找
这就是原型链的概念


```

**5、防抖，节流**
```js
防抖：用于 按钮点击 输入框输入 用于性能优化
例子：
const btn = document.getElementByID("btn")
function btnclck() {
    console.log("点击")
}
function btnclick(run,time){
    let cleartim = null
    return function(...arg){
        clearTimeout(cleartim)
        cleartim = setTimeout(() => {
            run.apply(this,arg)
        }, time);
    }
}
btn.addEventList("click",btnclick(oneclick,2000))


节流：节流就是在一段时间内不断操作 而在你规定的时间内只执行一次的一种提高性能的方法
例子：鼠标滑轮事件
function scrolls(){
    console.log("我在滑动")
}
function throttle(run,time){
    let t1 = 0
    return function(...arg){
        let t2 = new Date() 
        if(t2-t1>time){
            run.apply(this,arg)
            t1=t2
        }
    }
}
document.addEventList("scroll",throttle(scrolls()))


```
**6、深浅拷贝**
```js
const obj2 ={
        sets:"我不好",
        ages:"60",
        arr1:[1,2,3,4],
        obj1:{
            age:0,
            sex:true,
        }
    }

浅拷贝：const obj3 = Object.assign({},obj2)//合并对象并生成一个新的对象
        //修改obj3.sets   obj2是不会修改的
        //但是 修改obj3.arr1[0] obj2.arr[0]也是会修改的
        //一定要理解 栈区和堆区的概念 
    
深拷贝：
    function deepObj(obj){
        //当obj为空或类型不为object 直接跳转
        if(!obj || typeof obj !=="object" ) return ;
        
        const arr = Array.isArray(obj)?[]:{};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                //三则运算 如果当前值为object 的话则调用自身
            arr[key] = typeof obj[key] ==="object"? deepObj(obj[key]):obj[key]
                
            }
        }
        return arr
    }

```

**7、Proxy是什么 与object.defineProperty有什么区别**
```js
Proxy：这个词的意愿是代理的意思 也就是它可以帮助我们代理某一些操作
new Proxy(target{},handle{})
target：表示要拦截的目标对象
handle：用来定制拦截对象行为

捕获器中可以使用的方法：get()、set()、has、defineProperty()、getOwnPropertyDescriptor()、deleteProperty() 、ownKeys()、getPrototypeOf()、setPrototypeOf()、isExtensible()、preventExtensions()、construct()、apply()

get既读取，就是当读取时被捕获到
get(targetObj, propoty, receiver)
targetObj   被代理的对象
propoty      (key)的值
receiver 是代理对象proxy

set即设置，就是我们在设置对象属性的时候会捕获到。
set()方法接收三个参数(目标对象,设置的属性,设置的值,proxy对象)

has即在查找的时候会被捕获
has()捕获器接收两个参数，第一个参数是目标对象，第二个参数是引用的目标对象上字符串的属性。
在我们删除属性的时候detete()捕获器会被触发

has即在删除的时候会被捕获
deleteProperty


与object.defineProperty不同的点
1、Object.definedProperty的作用是劫持一个对象的属性，劫持属性的getter和setter方法，在对象的属性发生变化时进行特定的操作。而 Proxy劫持的是整个对象。
2、Proxy会返回一个代理对象，我们只需要操作新对象即可，而Object.defineProperty只能遍历对象属性直接修改。
3、Object.definedProperty不支持数组，更准确的说是不支持数组的各种API，因为如果仅仅考虑arry[i] = value 这种情况，是可以劫持 的，但是这种劫持意义不大。而Proxy可以支持数组的各种API。
4、尽管Object.defineProperty有诸多缺陷，但是其兼容性要好于Proxy。
```

**8、能不能说一说浏览器的本地存储？各自优劣如何？**
```js
/*浏览器的本地储存分为Cookie，webstoreage和indexeddb
其中webStoreage又分为localstorage和sessionstoreage

共同点：都是保存在浏览器端、且同源的
不同点：
1、cookie数据始终在同源的http请求中携带(即使不需要)，既cookie在浏览器和服务器之间传递，cookie还有path(路径)的概念，可以限制cookie只属于某个路径下
localstoreage和sessionStoreage不会自动把数据发送给服务器，仅在本地保存
2、存储大小不一致
cookie只能存储4k，sessionStoreage和localstoreage可以保存5M
3、存储事件不一致
sessionStoreage：仅在窗口未关闭(浏览器关闭)之前存在
localStoreage：始终有效 窗口关闭浏览器关闭也一直保存，本地存储因此用作持续数据
cookie：只在设置cookie过期时间之前有效，即使浏览器或窗口关闭
4、作用域不同
sessionStoreage：不在不同的浏览器窗口共享 即使是在一个页面
localStreage:在所有同源窗口中都是共享的，也就是说只要浏览器不关闭数据仍然存在
cookie：也是在所有同源窗口中都是共享的，也就是说只要浏览器不关闭，数据仍然存在
*/
```

**9、跨域**
```js
/**
 * 出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定
 * 当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域
 * 解决思路：安全的：jsonp发送，服务器代理 不安全的：Access-Control-Allow-Origin（CORS）
 * 
 */
```




