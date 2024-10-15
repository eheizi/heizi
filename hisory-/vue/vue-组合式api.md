# vue 组合式api
> 在vue中 有两种写法 一种是 选项式 另一种是 组合式非 

## 在组件模板中使用响应式状态
> 要在组件模板中使用响应式状态，需要在 setup() 函数中定义并返回 
```js
setup(){
    const count = ref(0)
    return {
        count
    }
}
//> <script setup> 场景下使用ts下  那么为了开启 props 的类型推导，必须使用 defineComponent()
export default defineComponent
```


## 组合式
> 只需要在script中声明 setup `<script setup>`
```js
import { ref,reactive ,nextTick，computed，watch ,watchEffect,watchPostEffect,watchSyncEffect,useAttrs ,provide ,inject,readonly,defineAsyncComponent,useClassModule} from "vue";

/**
 * 
 * reactive({}) 只适用于对象 (包括数组和内置类型，如 Map 和 Set)。
 * ref(any) 则可以接受任何值类型。ref 会返回一个包裹对象，并在 .value 属性下暴露内部值。
 * nextTick(()=>{}:function)若要等待一个状态改变后的 DOM 更新完成 你可以使用 nextTick() 这个全局 API
 * computed(function) ：计算属性
 * watch(监听源,回调函数(newVal,oldVal),options?:{immediate:true ,deep:true})：监听属性  watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。immediate:true //是否立即调用一次 deep:true //是否开启深度监听
 * 
 * watchEffect:立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。
 * watchPostEffect ：watchEffect() 使用 flush: 'post' 选项时的别名。
 * watchSyncEffect:watchEffect() 使用 flush: 'sync' 选项时的别名。
 * defineProps：声明接口 相当于选项式中的 props,
 * defineEmits: 声明事件处理函数 相当于emits，
 * useAttrs：使用 useAttrs() API 来访问一个组件的所有透传 attribute：
 * provide( 注入名:  'message',  值: hello!):要为组件后代提供数据，需要使用到 provide
 * inject(注入名,默认值?如果没有这个注入名则使用默认值):要注入上层组件提供的数据，需使用 inject 函数
 * readonly(Proxy):接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理
 * defineAsyncComponent(()=>{}):接受一个异步组件
 * useClassModule(接收Css的module值)
 */
defineAsyncComponent(()=>imoprt(...))
// 需要使用Suspense组件 #default :组件加载完成之后的显示 #fallback:加载前的显示



//工具api
import { isRef,unref,toRef,toRefs,isProxy,isReactive,isReadonly,} from 'vue'

/**
 * 
 * isRef ：检查某个值是否为 ref。
 * unref:如果参数是 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val 计算的一个语法糖。
 * toRef(obj,"name"):基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。
 * toRefs(ref|reactive):将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。
 * isProxy：检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理。
 * isReactive:检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。
 * isReadonly:检查一个对象是否是由 readonly() 或 shallowReadonly() 创建的代理。
 */

    //进阶api
    import { shallowRef,triggerRef, customRef,shallowReactive,toRaw,markRaw，effectScope，getCurrentScope,onScopeDispose} from 'vue'
/**
 * shallowRef(any):ref() 的浅层作用形式。
 * triggerRef(ref|reactive):强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。
 * customRef(track, trigger)=>{}:创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。
 * shallowReactive({}):reactive() 的浅层作用形式，只会改变值不会改变视图
 * shallowReadonly:readonly() 的浅层作用形式
 * toRaw:根据一个 Vue 创建的代理返回其原始对象。
 * markRaw：将一个对象标记为不可被转为代理。返回该对象本身。vue给对象添加了一个属性__v_skip:true
 * effectScope：创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。对于该 API 的使用细节，请查阅对应的 RFC。
 * getCurrentScope：如果有的话，返回当前活跃的 effect 作用域。
 * onScopeDispose:在当前活跃的 effect 作用域上注册一个处理回调函数。当相关的 effect 作用域停止时会调用这个回调函数。
 */

    //生命周期钩子
/**
 *  onMounted()：注册一个回调函数，在组件挂载完成后执行。
    onUpdated()：注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。
    onUnmounted()：注册一个回调函数，在组件实例被卸载之后调用。
    onBeforeMount()：注册一个钩子，在组件被挂载之前被调用。
    onBeforeUpdate()：注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
    onBeforeUnmount()：注册一个钩子，在组件实例被卸载之前调用。
    onErrorCaptured()：注册一个钩子，在捕获了后代组件传递的错误时调用。
    onRenderTracked()：注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用。这个钩子仅在开发模式下可用
    onRenderTriggered()：注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。这个钩子仅在开发模式下可用
    onActivated()：注册一个回调函数，若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用。

这个钩子在服务器端渲染期间不会被调用。
    onDeactivated()：注册一个回调函数，若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用。

这个钩子在服务器端渲染期间不会被调用。
    onServerPrefetch()：注册一个异步函数，在组件实例在服务器上被渲染之前调用。这个钩子仅会在服务端渲染中执行，可以用于执行一些仅存在于服务端的数据抓取过程。
 */

/*
reactive() API 有两条限制：
1、仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的 原始类型 无效。
2、因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失：
*/
const reactive = reactive({})


/*
    1、ref() 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。
    2、当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 .value。下面是之前的计数器例子，需要注意的是只有当嵌套在一个深层响应式对象中内时才会发生ref解包，当其作为浅层响应式对象中时 时不会发生解包的
    3、当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包。
    4、使用响应式语法糖 $ref("nihao") 可以不需要使用.value来访问数据
    5、
*/
const anys = ref("nihao")

/*
immediate：在侦听器创建时立即触发回调。第一次调用时旧值是 undefined。
deep：如果源是对象，强制深度遍历，以便在深层级变更时触发回调。参考深层侦听器。
flush：调整回调函数的刷新时机。参考回调的刷新时机及 watchEffect()。
onTrack / onTrigger：调试侦听器的依赖。参考调试侦听器。

*/
watch(source, callback, {
  flush: 'post'
})

/*
如果想在侦听器回调中能访问被 Vue 更新之后的DOM，你需要指明 flush: 'post' 选项：
注意 如果创建了异步的watchEffect他不会主动关闭 需要手动关闭 
两个回调函数的对象
onTrack 将在响应属性或引用作为依赖项被跟踪时被调用。
onTrigger 将在侦听器回调被依赖项的变更触发时被调用。
*/


const unwatch = watchEffect(callback, {
  flush: 'post'
})
unwatch()
//后置刷新的 watchEffect() 有个更方便的别名 watchPostEffect()：
watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})


/*
    为了通过组合式 API 获得该模板引用，我们需要声明一个同名的 ref：并且为null
    只可以在组件挂载后unmountend才能访问模板引用
*/
const input = ref(null)

/*
defineProps:是一个仅 <script setup> 中可用的编译宏命令，并不需要显式地导入。
defineEmits:来声明需要抛出的事件：
*/
const props = defineProps([title])
witeDefaults(defineProps([title]),{
  //用于设置传递过来的默认值
  title:"我是默认值"
})
{{props.title}}
const emit = defineEmits(['enlarge-text'])
emit('enlarge-text')
```


## 响应性语法糖
> 响应性语法糖是组合式 API 特有的功能，且必须通过构建步骤使用。响应性语法糖目前是一个实验性功能，默认是禁用的，需要显式选择使用
```shell
// vite.config.js
export default {
  plugins: [
    vue({
      reactivityTransform: true
    })
  ]
}
```

```js
/*
当启用响应性语法糖时，这些宏函数都是全局可用的、无需手动导入。但如果你想让它更明显，你也可以选择从 vue/macros 中引入它们：
ref -> $ref
computed -> $computed
shallowRef -> $shallowRef
customRef -> $customRef
toRef -> $toRef
*/
//通过 $() 解构
const { x, y } = $(useMouse())
```


### 内置组件
> KeepAlive
```js
/**
 * keep-alive:缓存组件 
 * 值得注意的是 在vue3.2.34 或以上的版本中使用 <script setup> 的单文件组件会自动根据·文件名·生成对应的 name 选项  注意是文件名称不是你设置的组件名称
 * include(string|Regex|[]):只缓存include中有的
 * exclude(string|Regex|[]):除exclude中的都缓存
 * max(number):缓存最大的数量
 * 
*/
<keep-alive include="" exclude="" max="">
<component :is="组件名称"></component>
</keep-alive>
```

> transition(动画组件) transition-group(过度列表)
```js
/*
#过渡 class
在进入/离开的过渡中，会有 6 个 class 切换。

v-enter-from：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter-from 被移除)，在过渡/动画完成之后移除。

v-leave-from：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

v-leave-to：离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被移除)，在过渡/动画完成之后移除。

2.自定义过渡 class 类名
trasnsition props

enter-from-class
enter-active-class
enter-to-class
leave-from-class
leave-active-class
leave-to-class

3.八个生命周期
@before-enter="beforeEnter" //对应enter-from
  @enter="enter"//对应enter-active
  @after-enter="afterEnter"//对应enter-to
  @enter-cancelled="enterCancelled"//显示过度打断
  @before-leave="beforeLeave"//对应leave-from
  @leave="leave"//对应enter-active
  @after-leave="afterLeave"//对应leave-to
  @leave-cancelled="leaveCancelled"//离开过度打断
appear:通过这个属性可以设置初始节点过度 就是页面加载完成就开始动画 对应三个状态

appear-active-class=""
appear-from-class=""
appear-to-class=""
appear
*/
<transition name="v">
</transition>

```




### 指令
> v-model
```js
1.默认值的改变
v-model 其实是一个语法糖 通过props 和 emit组合而成的
prop：value -> modelValue；
事件：input -> update:modelValue；
v-bind 的 .sync 修饰符和组件的 model 选项已移除
新增 支持多个v-model
新增 支持自定义 修饰符
```

> directive
```js
/**
 * 钩子函数
 * created 元素初始化的时候
beforeMount 指令绑定到元素后调用 只调用一次
mounted 元素插入父级dom调用
beforeUpdate 元素被更新之前调用
update 这个周期方法被移除 改用updated
beforeUnmount 在元素被移除前调用
unmounted 指令被移除后调用 只调用一次



第一个 el  当前绑定的DOM 元素

第二个 binding

instance：使用指令的组件实例。
value：传递给指令的值。例如，在 v-my-directive="1 + 1" 中，该值为 2。
oldValue：先前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否有更改都可用。
arg：传递给指令的参数(如果有的话)。例如在 v-my-directive:foo 中，arg 为 "foo"。
modifiers：包含修饰符(如果有的话) 的对象。例如在 v-my-directive.foo.bar 中，修饰符对象为 {foo: true，bar: true}。
dir：一个对象，在注册指令时作为参数传递。例如，在以下指令中


第三个 当前元素的虚拟DOM 也就是Vnode

第四个 prevNode 上一个虚拟节点，仅在 beforeUpdate 和 updated 钩子中可用 

 */
```




### 全局属性
```js
//由于Vue3 没有Prototype 属性 使用 app.config.globalProperties 代替 然后去定义变量和函数
app.config.globalProperties

:slotted(.a){
  //插槽选择器

}
:global(){
  //全局选择器
}
```


