# Vuex

用处：用于解决大型SPA（单页Web应用）中重复利用造成组件多次调用 引发的崩溃


## 核心概念
```js
state: {//相当于vue组件中的data  专门用于存放数据的
name:"张三",
},
getters: {//生成方法 返回data中的数据
    getName(state){
        //state 必须要的参数
        return state.name  //也可以添加修饰
    }
},
mutations: {//修改state的数据
    setName(state,payload){
        /*
        payload：组件传过来的值
        */
       return state.name = payload.name
    }
},
actions: {//异步修改数据
    setNames(context,name){
        //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
        return new promies(resolve=>{
            setTimeout(()=>{
                context.commit("steName",{name})
                resolve()
            },1000)
        })
    }

},
modules: {//分割成模块
    a: moduleA,
    b: moduleB
}

```
```js
import { mapState ,mapGetters,mapMutations,mapActions}from 'vuex';
```
### state(原生读)

```js
this.$store.state.name 
    //获取state中的数据 张三

 ...mapState(['name'])
    //使用es2015中的解构 调取state中的name数据
 ...mapState({aliasName:'name'})   
    //也可以使用别名

```
### getters(修饰读)

```js
this.$store.getters.getName
    //通过调用getName方法 获取名称 
    
 ...mapGetters([getName]),
    //通过后解构赋值  也可以使用别名
```

### mutations(同步改)
> 这里说一条重要原则：Mutations里面的函数必须是同步操作

```js
// 错误示范
this.$store.state.XXX = XXX;

this.$store.commit('setName', {666});
    //官方建议传递的参数为一个对象
...mapMutations(['setNumberIsWhat']),
    //解构 也可以取别名

使用常量替代 Mutation 事件类型
export const SOME_MUTATION = 'SOME_MUTATION'
    //另一个文件中的
import { SOME_MUTATION } from './mutation-types'
    //导入 
[SOME_MUTATION] (state) {}
//后期就算再怎们变换事件名称也只需要改变mutaion-types中的名称
```



### actions(异步改)

```js
 await this.$store.dispatch('setNum');

 ...mapActions(['setNum']),  
    //同上一样
```


 
### Vuex中的组合式Api

```js
import { useStore } from 'vuex'
const store = useStore()
this.$store === useStore()
    //useStore 是等于 $stoe 的

computed(() => store.state.count),
    //在 computed 函数中访问 state
computed(() => store.getters.count),
    //在 computed 函数中访问 getters

increment: () => store.commit('increment'),
    // 使用 mutation
      
asyncIncrement: () => store.dispatch('asyncIncrement')
    // 使用 action
```









