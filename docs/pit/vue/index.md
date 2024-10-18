# package.json: No license field

描述：在使用 element-pro 的途中 vscode 报错

解决方法：
1、在 package.json 里 `eslintConfig` 模块中添加一个

```js
"eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    },
    "rules": {
      "vue/no-v-model-argument":"off" //在这里添加
    }
  },
```

2、 在 settings.json 中添加

```js

"vetur.validation.template": false //true 为开启


{
    "vetur.completion.scaffoldSnippetSources": {
        "workspace": "💼",
        "user": "🗒️",
        "vetur": "✌"
    },
    "vetur.validation.template": false
}
```

> 我这里使用的是第二种方法

3、打开 管理>设置>用户>扩展>vetur>validation tamplate 选项关闭掉

# this.element.insertAdjacentHTML("beforeend","<div></div>") 添加进入了容器中但是没有 style 样式

解决方案：值得注意的是 当 css style 样式设置了 scoped 的话 div 是获取不到样式的

解决方案：需要在 style 样式中添加:deep(div) 值得注意的是这两种(/deep/ 、>>>)方法被删除了
