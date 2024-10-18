# Teleport 任意传送门

用处：Teleport 是一种能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置的技术

```js

//父组件中
+  <div id="teleport-target"></div>

//子组件中
<teleport to="#teleport-target">
    <div v-if="visible" class="toast-wrap">
      <div class="toast-msg">我是一个 Toast 文案</div>
</div>
```


to= "#teleport-target"


> 不会就看文档  很简单