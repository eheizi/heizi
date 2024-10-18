
**1. vue-loader是什么？使用它的用途有哪些？**
```js
loader是一个转换器 
解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理

```

**2. v-show和v-if指令的共同点和不同点?**

```
v-show：元素已渲染 利用display：none 隐藏起来了
v-if：直接跳过 不渲染 

```
**3. 如何让CSS只在当前组件中起作用?**
```
在style中添加 scoped

```
**4. 请简述vue的生命周期有哪些以及你对vue生命周期的理解？**
```
beforeCreate    在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用。
Created         在实例创建完成后被立即同步调用
beforeMount     在实例挂载之前后被调用
Mounted         在实例挂载完成后被调用
beforeUpdate    在修改之前调用
updated         修改组件时调用
activated       被 keep-alive 缓存的组件激活时调用。
deactivated     被 keep-alive 缓存的组件失活时调用。
beforeUnmount   在卸载组件实例之前调用
unmounted       卸载组件实例后调用
errorCapturedrented 在捕获一个来自后代组件的错误时被调用
renderTracked   跟踪虚拟 DOM 重新渲染时调用
renderTriggered 当虚拟 DOM 重新渲染被触发时调用


```

**5. 请简述Vue的双向数据绑定原理是什么？**
```
vue2的
通过Object.defineProperty()属性的setter，getter，在数据变动时

      发布消息给订阅者，触发相应的监听回调。来完成双向绑定。
vue3
proxy 代理

```

**6. 请简述mvvm框架是什么？它和其它框架（jquery）的区别是什么？哪些场景适合？**
```
请简述mvvm框架是什么？

M:model(模型)是后端传递的数据。
V:view(视图)是所看到的页面。
VM:viewmodel(视图模型)mvvm模式的核心，它是连接view和model的桥梁。
它有两个数据传递方向：

一是将模型转化成视图，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。

二是将视图转化成模型，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。

优点：
- 低耦性：视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变
- 可重用性：你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑
- 独立开发：开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码
- 可测试：界面素来是比较难于测试的，而现在测试可以针对ViewModel来写


mvvm更加注重业务的逻辑和数据的开发
jquery有许多dom操作


```
**7. `<keep-alive></keep-alive>`的作用是什么?**
```
被keep-alive包围的组件不会被销毁

```
**8. 在Vue中如何使用插件例如 iview？**
```
使用import 导入iview 并use iview

```

**9. 请简述vuex由哪几个部分组成，他们之间有什么关系？**

```
state:{}    相当于vue组件中的data
getters:{}  返回data中的数据
mutations:{}修改state的数据
actions:{}  异步修改数据
modules:{}  模块化
```
**10. 使用vue开发项目时，如何处理跨域请求？**
```
使用webpack 中的代理服务器
devServer

```

**11. 你所了解的vue的ui框架有哪些，请列出5个以上的ui框架名称？**
```
element
iview       
TDesing     腾讯
ant Desing  阿里
ArcoDesign  字节
naiva UI    仅支持v3 使用typescript编写

```
**12. 请简述webpack loader选项的作用是什么？**
```
loader是一个转换器 可以让webpack处理非js的文件
比如css-loader style-loader

```

**13. 请简述webpack的作用，以及它是如何工作的？**
```
1、webpack的由来是因为以前的浏览器不支持es6的语法从而衍生出许多种类的插件而webpack的作用就是将这些插件整合在一起并转换为静态文件

webpack的五个核心概念
entry       入口
output      输出
loader      转换器(翻译官)
plugins     插件plugins可以用于执行范围更广的任务
mode 模式指示webpack使用相应模式的配置

DefinePlugin中prosess.env.NODE_ENV
development 生产模式
production  开发模式 默认开发模式

2、初始化流程、编译构建流程、输出流程
初始化流程：从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数

编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理

输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统




```
**14. vue的事件修饰符的作用是什么,能否自定义修饰符?**
```
修饰符处理了许多dom事件的细节从而让我们不需要花费时间处理这些事情
可以自定义修饰符 @keydom directive

```

**15. 全局组件和局部组件有何区别，什么情况下使用全局组件和局部组件？**
```
- 全局组件 可以在任何一个vue文件中使用
- 局部组件只有注册了才能使用
- 组件被多次调用可以使用全局组件


```
**16. 路由切换时需要动画效果，可使用什么组件完成该动画效果?**
```
可以使用vue-router中transition组件

```
**17. 请列出Vue的路由有哪些模式，有什么区别？**
```
有三种模式 hash、 history三种模式
hash    不会包含在http请求当中,并且hash不会重新加载⻚⾯
history 如果前端的url和后端发起请求的url不⼀致的话,会 报404错误,所以使⽤history模块的话我们需要和后端进⾏配合.

vue-router 中v5的变化
"history": createWebHistory()
"hash": createWebHashHistory()
"abstract": createMemoryHistory()

```


**19. 请列出vue中插槽有哪几种。简述它们的作用？**
```
主要分为三种 匿名插槽 具名插槽 作用域插槽

匿名插槽：匿名插槽只能有一个 组件中的内容会替代插槽中的内容

具名插槽：为slot设置名字的插槽就称为具名插槽，一个封装组件中可以有多个具名插槽

作用域插槽：可以使用props 传递数据

```
**20. Vue.directive() 的作用是什么，用来解决什么问题？**
```
Vue.directive() 可以自定义指令 
用于解决重复功能并且官方没有提供的指令

```

**21. Vue组件的通信方式**
```js
父子通信：父-》子 props 子-》父 $emit $on
兄弟组件通信
跨级组件通信

```
