# 组合式Api

用处：解决组件选项(`data,watch`)代码量过多

注意：不要再`Setup`中使用`this`
## Setup 选项
`Setup(props,context)`

- 参数：

    `props`:如字面意思一样 值得注意的是`props`被解构后会失去prop的响应性 如果需要使用的话 请使用 `toRefs` 函数来完成此操作

    `context`：是一个普通的js对象  此对象中包含了其他可能在setup中出现的值`attrs slots emit expose` expose(option)可以将此option 暴露给父组件

```js
导入的方法
const {provide,inject,ref,reactive,toRefs,readonly} = `vue`
readonly:是将通过ref 或reactive定义好的数据进行拷贝后变为仅可读的数据，不可进行修改，即无响应
//可导入的方法还有生命周期函数
推荐一种写法：只有我们明确知道要转换的对象内部的字段名称我们才使用reactive，否则就一律使用ref，从而降低在语法选择上的心智负担
```

### Setup 选项中的变量
```js
    - reactive 函数 :接收一个普通的对象传入，把对象数据转化为响应式对象并返回
    - ref 函数 :接受一个简单类型或者复杂类型的传入并返回一个响应式且可变的 ref 对象
    - toRefs 函数:使用 toRefs函数 可以保证该对象展开的每个属性都是响应式的
    - computed:根据现有响应式数据经过一定的计算得到全新的数据
    - watch(counter,callback{},option{}) 侦听器 :基于响应式数据的变化执行回调逻辑，和vue2中的watch的功能完全一致
        immediate:true 为true时 运行时就会执行一遍
        depp:true 开启deep
        为了避免depp模式的出错 state.info.age 可以直接监听对象中的元素
```