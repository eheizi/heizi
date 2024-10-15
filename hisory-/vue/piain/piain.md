# Piain(全局状态管理器)
Pinia.js 有如下特点：

完整的 ts 的支持；
足够轻量，压缩后的体积只有1kb左右;
去除 mutations，只有 state，getters，actions；
actions 支持同步和异步；
代码扁平化没有模块嵌套，只有 store 的概念，store 之间可以自由使用，每一个store都是独立的
无需手动添加 store，store 一旦创建便会自动添加；
支持Vue3 和 Vue2

## Pinia Api 使用

```js
import {defineStore ,storeToRefs } from 'piain'
/**
 * defineStore(Names)它需要一个唯一的名称，作为第一个参数传递
 * storeToRefs(NoRef)解决 结构之后数据不是响应问题
 * 
 */
export const useTestStore = defineStore('Names',{
    state:()=>{

    },
    //类似于computed，可以帮我们去修饰我们的值
    getters:{
        //使用箭头函数不能使用this this指向已经改变指向undefined 修改值请用state 主要作用类似于computed 数据修饰并且有缓存
    },
    //可以操作以补和同步提交state
    actions:{

    }
})
```


## template 下的api
```js
imoprt {useTestStore} from './store'
const test = useTestStore()
test.$patch({
    //可以修改多个值 类似修改对象一样
    current:200,
       age:300

})
test.state({
    //通过将store的属性设置为新对象来替换store的整个状态缺点是必须修改整个对象的所有属性
})
test.$reset()//重置state所有值返回初始状态
test.$subscribe((args,state)=>{
//只要有state 的变化就会走这个函数

},{
    // 如果你的组件卸载之后还想继续调用
    
  detached:true
})
test.$onAction(args=>{
    //只要有actions被调用就会走这个函数

})
```



