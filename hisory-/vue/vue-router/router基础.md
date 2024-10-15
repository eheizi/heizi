# router基础

## router标签

- router-link `<router-link>`

    1. 使用router-link组件进行导航

    2. 通过 `to` 来指定链接

    3. `tag` 可以通过tag 来指定该组件将会渲染成什么元素

    4. `replace` replace不会留下history记录

    5. `active-class` 
```js
    `<router-link to="/">Go to Home</router-link>`
    //动态路由跳转 
    this.$router.push()
    //跳转到指定url路径，并想history栈中添加一个记录，点击后退会返回到上一个页面
    this.$router.replace()
    //跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面 (就是直接替换了当前页面)
    this.$router.go(n)
    //向前或者向后跳转n个页面，n可为正整数或负整数
    this.$route.path
    //获取当前路由地址
```


- router-view `<router-view>`

> 将显示与 url 对应的组件。你可以把它放在任何地方，以适应你的布局。

## router 基础知识

### 动态路由

```js
//动态路由
path:'/user/:id',
component:"user"
//可通过 $router.params.id
```

### 懒加载(异步加载)
```js
const Home = () => import(' . ./ components/Home.vue ' )
```
### 传递参数的方式

传递参数主要有两种类型：params和query

params的类型：
配置路由格式：/router/:id
传递的方式：在path后面跟上对应的值
传递后形成的路径：/router/123，/router/abc

query的类型：
配置路由格式：/router，也就是普通配置
传递的方式：对象中使用query的key作为传递方式
传递后形成的路径：/router?id= 123，/router?id=abc

###  导航守卫

- 首先，我们可以在钩子当中定义一些标题，可以利用mate来定义

- 其次，利用导航守卫修改我们的标题

- 全局守卫


```js
router.beforEach((to,from,next)=>{
    /*
    1. to 即将要进入的目标的路由对象
    2. from 当前导航即要离开的路由对象
    3. next 调用该方法后，才能进入下一个钩子
    */
})
//前置钩子 
afterEach
//后置钩子 没有next
beforresolve

```
- 路由器独享守卫

    beforeEnter

- 组件内守卫

    beforeRouteEnter
    导航进入组件时，
    beforeRouteUpdate
    该组件被复用时调用
    beforeRouteLeave
    离开组件之后


### 完整的路由导航解析流程(不包括其他生命周期)：
- 触发进入其他路由。
- 调用要离开路由的组件守卫beforeRouteLeave
- 调用局前置守卫：beforeEach
- 在重用的组件里调用 beforeRouteUpdate
- 调用路由独享守卫 beforeEnter。
- 解析异步路由组件。
- 在将要进入的路由组件中调用beforeRouteEnter
- 调用全局解析守卫 beforeResolve
- 导航被确认。
- 调用全局后置钩子的 afterEach 钩子。
- 触发DOM更新(mounted)。
- 执行beforeRouteEnter 守卫中传给 next 的回调函数

## 配置解析
```js
{
    path:"",//配置的路径名
    redirect:'',//重定向
    name:'',//给路由起的名称
    component:,//组件名称 可异步
    children:[
        {
            //子组件
        }
    ]，
    beforeEnter：(to,from,next)=>{

    }
}
```





