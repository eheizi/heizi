# 5 大核心概念

[尚硅谷网址](https://yk2012.github.io/sgg_webpack5/)
`D:\vs_code\笔记\webpack-app` 例子在该目录中

```js
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin"); //Eslint 插件
const HtmlWebpackPlugin = require("html-webpack-plugin"); //模板插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //压缩css
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); //压缩图片大小
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};
```

### entry(入口)

```js
module.export = {
  //指定Webpack 从哪个文件开始打包文件
  entry: "./src/main.js",
};
```

### output(输出)

> 默认 Webpack 会将文件打包输出到 dist 目录下，我们查看 dist 目录下文件情况就好了
> 指定 Webpack 输出到哪里去并为其命名

```js
moduel.export = {
  output: {
    path: path.resolve(__dirname, "dist/static"), //输出的文件路径|文件夹
    filename: "static/js/[name].js", //入口文件打包输出资源命名方式
    chunkFilename: "static/js/[name].chucnk.js", //chunk的命名方式
    assetModuleFimename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
    clean: true, //自动清空上次 打包目录文件 Webpack5将clean-webpack-plugin插件内置到的功能
  },
};
```

### loader(加载器)

Webpack 本身只能处理 js、json 等资源，其他资源需要借助于 loader Webpack 才能解析

```js

module.export = {
    module: {
        rules: [
            oneof: [//顾名思义就是只能匹配上一个 loader, 剩下的就不匹配了

                {
                    test: "/\.css$/",//用来匹配规则的
                    use: getStyleLoaders(),//执行顺序是从右往左 从下往上
                    loader: "",//执行单个loader 一般都是用use的
                },
                {
                    test: "/\.(jpe?g|png|PNG|gif|webp)$/",//"asset" 相当于url-loader
                    use: "asset",//Webpack4处理图片文件都是用 url-loader file-loader wb5直接内置了
                    parser: {
                        dataUrlCondition: {
                            maxSize: 10 * 1024//小于10kb的图片会转成base64处理 优点：减少请求数量 缺点：体积变得更大，
                        }
                    },
                    // generator: {
                    // 在assetModuleFilename:中命名
                    //     // 将图片文件输出到 static/imgs 目录中
                    //     // 将图片文件命名 [hash:8][ext][query]
                    //     // [hash:8]: hash值取8位
                    //     // [ext]: 使用之前的文件扩展名
                    //     // [query]: 添加之前的query参数
                    //     filename: "static/imgs/[hash:8][ext][query]",
                    // }
                },
                {
                    test: "/\.(ttf|woff2?|map4|map3|avi)$/",
                    type: "asset/resource",//"asset/resource" 相当于file-loader
                    // generator: {
                    // 在assetModuleFilename:中命名
                    //     filename: "static/media/[hash:8][ext][query]",
                    // }
                },
                {
                    test: "/.\js$/",
                    exclude: "/node_modules"//排除node_modules代码不编译
                    include:path.resolve(__dirname,"/src")//只编译src目录下面的代码
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true, // 开启babel编译缓存
                        cacheCompression: false, // 缓存文件不要压缩
                         plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                    },
                }
            ]
        ]
    }
}
```

### plugins(插件)

扩展 Webpack 的功能

```js
module.export = {
  plugins: [
    new EslintWebpackPlugin({
      //在项目根目录新建 `.eslintignore` 忽略文件
      //检查src目录下的代码规范
      context: path.resolve(__dirname, "src"),
      exclude: "node_modules", //不检查node_modules
      cache: true, // 开启缓存
      // 缓存目录
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      ),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "public/index.html"),
    }),
    //提取css成单独文件
    new MiniCssExtractPlugin({
      //定义名称
      filename: "static/css/[name].css",
      //chunck的名称
      chucnkFilename: "static/css/[name].chunk.css",
    }),
    new CssMinimizerPlugin(), //压缩css 默认生产模式已经开启了：html 压缩和 js 压缩
  ],
  optimization: {
    minimize: [
      // 压缩图片
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    "preset-default",
                    "prefixIds",
                    {
                      name: "sortAttrs",
                      params: {
                        xmlnsOrder: "alphabetical",
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
      // 我们需要安装两个文件到 node_modules 中才能解决, 文件可以从课件中找到：
      // jpegtran.exe
      // optipng.exe
    ],
  },
};
```

### devserver

```js
     // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot:true, //开启HMR功能(只用于开发环境) HotModuleReplacement（HMR/热模块替换）：在程序运行中，替换、添加或删除模块，而无需重新加载整个页面。

  },

// 并且当你使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。

// 开发时我们只关心代码能运行，有效果即可，至于代码被编译成什么样子，我们并不需要知道。
```

### mode(模式)

设置其模式
开发模式 ：development cheap-module-source-map
生产模式 ：production source-map

## webpack 开发项目流程

- 安装项目依赖:

```js
npm install webpack webpack-cli --save-dev
```

- 运行 webpack

```js
//开发模式
npx webpack ./src/main.js --mode=development
//生产模式
npx webpack ./src/main.js --mode=production

// npx webpack: 是用来运行本地安装 Webpack 包的。

// ./src/main.js: 指定 Webpack 从 main.js 文件开始打包，不但会打包 main.js，还会将其依赖也一起打包进来。

// --mode=xxx：指定模式（环境）
```

文件会默认输出到 dist 文件夹中
这个时候就看 webpack.config.js 文件了

安装 eslit

```js
npm i eslint-webpack-plugin eslint -D
```

安装 babel

```js
npm i babel-loader @babel/core @babel/preset-env -D
```

```js
/**
 * 下载的包
 * loader：style-loader css-loader less less-loader
 * postcss-loader postcss postcss-preset-env //用户处理css兼容 在packjson当中添加
 * {
  // 其他省略
  意思：所有浏览器的最后两个版本 并兼容市面上百分之九十九的浏览器
  "browserslist": ["last 2 version", "> 1%", "not dead"] 控制兼容性
    }
 */


thead 开启多个cpu 进行打包
需要注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销
const TerserPlugin = require("terser-webpack-plugin");
const os = require("os");
// cpu核数
const threads = os.cpus().length;

use: [
        {
        loader: "thread-loader", // 开启多进程
        options: {
            workers: threads, // 数量
        },
        },
        {
        loader: "babel-loader",
        options: {
            cacheDirectory: true, // 开启babel编译缓存
        },
        },
    ],


    new eslintwebpackplugin({
    threads
    })

 optimization: {
    minimize: true,
    minimizer: [
      // css压缩也可以写到optimization.minimizer里面，效果一样的
      new CssMinimizerPlugin(),
      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
      new TerserPlugin({
        parallel: threads // 开启多进程
      })
    ],
  },
```

**_4、优化代码运行性能_**

> code split(代码分割配置)

```js
  // eslint会对动态导入语法报错，需要修改eslint配置文件
  // webpackChunkName: "math"：这是webpack动态导入模块命名的方式
  // "math"将来就会作为[name]的值显示。
 import(/* webpackChunkName: "math" */ "./js/math.js")
 optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: "all", // 对所有模块都进行分割
      // 以下是默认值
      // minSize: 20000, // 分割代码最小的大小
      // minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
      // minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
      // maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
      // maxInitialRequests: 30, // 入口js文件最大并行请求数量
      // enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
      // cacheGroups: { // 组，哪些模块要打包到一个组
      //   defaultVendors: { // 组名
      //     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
      //     priority: -10, // 权重（越大越高）
      //     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
      //   },
      //   default: { // 其他没有写的配置会使用上面的默认值
      //     minChunks: 2, // 这里的minChunks权重更大
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
      // 修改配置
      cacheGroups: {
        // 组，哪些模块要打包到一个组
        // defaultVendors: { // 组名
        //   test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
        //   priority: -10, // 权重（越大越高）
        //   reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
        // },
        default: {
          // 其他没有写的配置会使用上面的默认值
          minSize: 0, // 我们定义的文件体积太小了，所以要改打包的最小文件体积
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
```

> Preload 或 Prefetch
> 我们想在浏览器空闲时间，加载后续需要使用的资源。我们就需要用上 Preload 或 Prefetch 技术
> Preload：告诉浏览器立即加载资源。
> Prefetch：告诉浏览器在空闲时才开始加载资源。

它们的问题：兼容性较差。
我们可以去 Can I Use 网站查询 API 的兼容性问题。
Preload 相对于 Prefetch 兼容性好一点。

```shell
npm i @vue/preload-webpack-plugin -D
```

```js
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
new PreloadWebpackPlugin({
      rel: "preload", // preload兼容性更好
      as: "script",
      // rel: 'prefetch' // prefetch兼容性更差
    }),
```

> Network cache
> 它们都会生成一个唯一的 hash 值。

fullhash（webpack4 是 hash）
每次修改任何一个文件，所有文件名的 hash 至都将改变。所以一旦修改了任何一个文件，整个项目的文件缓存都将失效。

chunkhash
根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值。我们 js 和 css 是同一个引入，会共享一个 hash 值。

contenthash
根据文件内容生成 hash 值，只有文件内容变化了，hash 值才会变化。所有文件 hash 值是独享且不同的

```js
// [contenthash:8]使用contenthash，取8位长度
    filename: "static/js/[name].[contenthash:8].js", // 入口文件打包输出资源命名方式
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js", // 动态导入输出资源命名方式

// 提取runtime文件
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`, // runtime文件命名规则
    },
```

> Core-js
> 用于处理兼容性问题
> core-js 是专门用来做 ES6 以及以上 API 的 polyfill。
> polyfill 翻译过来叫做垫片/补丁。就是用社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性

```js
//-----bable.config.js
module.exports = {
  // 智能预设：能够编译ES6语法
  presets: [
    [
      "@babel/preset-env",
      // 按需加载core-js的polyfill
      { useBuiltIns: "usage", corejs: { version: "3", proposals: true } },
    ],
  ],
};
```

> PWA
> 渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。

其中最重要的是，在 离线(offline) 时应用程序能够继续运行功能。

内部通过 Service Workers 技术实现的

```shell
npm i workbox-webpack-plugin -D
```

```js
const WorkboxPlugin = require("workbox-webpack-plugin");

new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),

//--------main.js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
```

提升开发体验
使用 Source Map 让开发或上线时代码报错能有更加准确的错误提示。
提升 webpack 提升打包构建速度
使用 HotModuleReplacement 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。
使用 OneOf 让资源文件一旦被某个 loader 处理了，就不会继续遍历了，打包速度更快。
使用 Include/Exclude 排除或只检测某些文件，处理的文件更少，速度更快。
使用 Cache 对 eslint 和 babel 处理的结果进行缓存，让第二次打包速度更快。
使用 Thead 多进程处理 eslint 和 babel 任务，速度更快。（需要注意的是，进程启动通信都有开销的，要在比较多代码处理时使用才有效果）
减少代码体积
使用 Tree Shaking 剔除了没有使用的多余代码，让代码体积更小。
使用 @babel/plugin-transform-runtime 插件对 babel 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，从而体积更小。
使用 Image Minimizer 对项目中图片进行压缩，体积更小，请求速度更快。（需要注意的是，如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。）
优化代码运行性能
使用 Code Split 对代码进行分割成多个 js 文件，从而使单个文件体积更小，并行加载 js 速度更快。并通过 import 动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。
使用 Preload / Prefetch 对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。
使用 Network Cache 能对输出资源文件进行更好的命名，将来好做缓存，从而用户体验更好。
使用 Core-js 对 js 进行兼容性处理，让我们代码能运行在低版本浏览器。
使用 PWA 能让代码离线也能访问，从而提升用户体验。
