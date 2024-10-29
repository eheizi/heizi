# 微信小程序

> 遇到的坑

## 构建失败

1、重新打开项目，清除所有缓存，再开始编译

2、未生成 package.json 文件，且未安装依赖

3、配置问题

```json
//----tsconfig.json
    "typeRoots": ["./typings"],
    "baseUrl": ".",
    "types": ["miniprogram-api-typings"],
    "paths": {
      "@vant/weapp/*": ["/miniprogram/node_modules/@vant/weapp/dist/*"]//   /miniprogram/node_modules 这里路径，需要修改为对应的目录路径
    },
    "lib": ["ES6"]
//-------project.config.json
// 查看这个文件有没有这些配置
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram"
      }
    ],
```

## tabBar 全局变量无效

解决方案：使用组件元素

- Component is not found in path "custom-tab-bar/index" 自定义导航报错

解决方案：将目录放到 miniprogram 下并且名称必须为 index

## 使用 scroll-view 模块横向滚动 flex 失效，以及元素全部凑在一起

解决方案：横向滚动需打开 enable-flex 以兼容 WebView，如 <scroll-view scroll-x enable-flex style="flex-direction: row;"/>

！！！并且`scroll-view`中的 view 元素内部不能为空或者设置`min-width:xxrpx;min-height:xxxrpx` 元素

## 导入 echarts 报错 文件“c:/Users/Administrator/WeChatProjects/miniprogram-7/miniprogram/components/ec-canvas/echarts.js”不是模块

解决方案

## 在“string[]”上没有“includes”属性。是否需要更改目标库? 请尝试将 `lib` 编译器选项更改为 es2016 或更高版本。

解决方案：

修改`tsconfig.json`文件

## 将 echarts 编写为组件后，在 tab 下的图表不显示，经排查发现是因为绑定元素的问题，

解决方案：

1、 将所属图表的 tab 元素默认设置为第一个

2、 给所属图表的 tab 元素设置 wx:if 判断 `userinfo.wxml` 页面中有例子

```ts
"lib": ["es2016"]
```

## navigator 组件跳转失败

- 问题详情：

```html
<navigator url="/miniprogram/pages/edit-books/admin/admin">
  <!-- 点击跳转失败 --></navigator
>
```

- 解决方案

> 使用`/pages/edit-books/admin/admin` 链接

## van-picker 不能显示对象数组

- 问题详情：

在使用 van-picker 过程中使用的一直是类型数组以为不能使用对象数组

- 解决方案

```ts
//ts
//这里有个问题 columns 的值一定要是columns 不然实现不了
    columns: [
      { id: '1', name: '选项1' },
      { id: '2', name: '选项2' },
      { id: '3', name: '选项3' }
    ],
//模板
//注意如果想显示name的话value-key赢为name
value-key="name" columns="{{ columns }}"
```
