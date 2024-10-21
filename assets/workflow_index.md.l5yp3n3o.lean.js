import{_ as i,l as a,ac as t,k as n}from"./chunks/framework.CrgDeNu1.js";const g=JSON.parse('{"title":"编程规范","description":"黑子的编程规范（命名规范与项目结构、Git 提交规范、Prettier 配置等）","frontmatter":{"description":"黑子的编程规范（命名规范与项目结构、Git 提交规范、Prettier 配置等）"},"headers":[],"relativePath":"workflow/index.md","filePath":"workflow/index.md","lastUpdated":1729244301000}'),l={name:"workflow/index.md"};function e(h,s,k,p,d,r){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="编程规范" tabindex="-1">编程规范 <a class="header-anchor" href="#编程规范" aria-label="Permalink to &quot;编程规范&quot;">​</a></h1><blockquote><p>记录自己所总结和遵守的编程规范（即个人风格指南）</p></blockquote><h2 id="命名规范与项目结构" tabindex="-1">命名规范与项目结构 <a class="header-anchor" href="#命名规范与项目结构" aria-label="Permalink to &quot;命名规范与项目结构&quot;">​</a></h2><h3 id="命名规范" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范" aria-label="Permalink to &quot;命名规范&quot;">​</a></h3><p>命名规范是编程规范中最重要的一部分，它直接影响到代码的可读性和可维护性</p><div class="tip custom-block"><p class="custom-block-title">常用的命名形式</p><ul><li><code>camelCase</code> 小驼峰式命名法（首字母小写）</li><li><code>PascalCase</code> 大驼峰式命名法（首字母大写）</li><li><code>snake_case</code> 下划线命名法</li><li><code>kebab-case</code> 短横线命名法</li><li><code>UPPER_CASE</code> 大写命名法</li></ul></div><h3 id="文件命名规范" tabindex="-1">文件命名规范 <a class="header-anchor" href="#文件命名规范" aria-label="Permalink to &quot;文件命名规范&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>除组件命名外，均使用短横线命名法</p></div><ul><li>项目名称使用短横线命名法。🌰 <code>mm-notes</code></li><li><code>html / css / md / js / ts / jsx / tsx</code> 文件使用短横线命名法</li><li><code>React / Vue</code> 组件文件使用大写驼峰式命名法。🌰 <code>Dialog.vue</code> / <code>Dialog.tsx</code></li><li>静态资源文件使用短横线命名法。🌰 <code>logo-white.png</code></li></ul><h3 id="代码命名规范" tabindex="-1">代码命名规范 <a class="header-anchor" href="#代码命名规范" aria-label="Permalink to &quot;代码命名规范&quot;">​</a></h3><h4 id="javascript-命名规范" tabindex="-1"><code>JavaScript</code> 命名规范 <a class="header-anchor" href="#javascript-命名规范" aria-label="Permalink to &quot;\`JavaScript\` 命名规范&quot;">​</a></h4><ul><li>常量使用大写命名法。🌰 <code>const MAX_COUNT = 2000</code><ul><li>正则常量命名使用后缀 <code>_RE</code>。🌰 <code>const PHONE_RE = /^1[3-9]\\d{9}$/</code></li></ul></li><li>变量使用小驼峰式命名法。🌰 <code>const maxCount = 1996</code></li><li><code>class</code> 类名使用大驼峰式命名法。🌰 <code>class User {}</code></li><li>构造函数使用大驼峰式命名法。🌰 <code>function User() {}</code></li><li>函数使用小驼峰式命名法。🌰 <code>function getUserInfo() {}</code></li><li>对象 <code>key</code> 使用小驼峰式命名法。🌰 <code>const user = { userName: &#39;heizi&#39; }</code></li><li>路由 <code>path</code> 使用短横线命名法。🌰 <code>path: &#39;/user-info&#39;</code></li></ul><h4 id="css-命名规范" tabindex="-1"><code>CSS</code> 命名规范 <a class="header-anchor" href="#css-命名规范" aria-label="Permalink to &quot;\`CSS\` 命名规范&quot;">​</a></h4><ul><li>类名使用短横线命名法。🌰 <code>.user-info</code></li><li><code>ID</code> 使用小驼峰式命名法。🌰 <code>#userInfo</code></li><li>自定义变量使用短横线命名法。🌰 <code>--main-color: #fff</code></li></ul><h3 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h3><blockquote><p>约定优于配置</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vscode</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           # VSCode 配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                            # 网站资源文件（favicon.ico index.html 等）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           # 脚本相关</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apis</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          # api 接口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assets</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 静态资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> components</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 全局组件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 项目配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> constants</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 常量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hooks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 通用 hooks</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> layout</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 页面整体布局</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           # 第三方或无业务依赖代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> locales</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # i18n</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pages</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 页面相关文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Home</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 大驼峰规范 =&gt; 组件即是一个构造函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> components</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 页面相关的子组件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.module.scss</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 根据应用的 CSS Scope 方案命名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.tsx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # index 作为默认路径，视为根节点</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> App.tsx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # 页面入口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> router</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 页面路由</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> store</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 状态管理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> styles</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 全局/基础样式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> types</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # TypeScript 类型声明</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utils</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 工具函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.tsx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 应用启动入口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 当前项目的文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 项目信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsconfig.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # TypeScript 配置文件</span></span></code></pre></div><h2 id="git-提交规范" tabindex="-1"><code>Git</code> 提交规范 <a class="header-anchor" href="#git-提交规范" aria-label="Permalink to &quot;\`Git\` 提交规范&quot;">​</a></h2><blockquote><p><code>git commit message</code> 的格式</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scope</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">footer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ul><li><code>type</code>（必填）：<code>commit</code> 的类型</li><li><code>scope</code>（选填）：<code>commit</code> 的影响范围</li><li><code>subject</code>（必填）：<code>commit</code> 信息的简短描述（50 字以内）</li><li><code>body</code>（选填）：<code>commit</code> 信息的具体描述</li><li><code>footer</code>（选填）：重大变化（<code>Breaking Change</code>）和需要关闭的<code>Issue</code></li></ul><p><strong>正则校验规则</strong>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 基于 vue 项目中的 verify-commit-msg.js 修改</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * https://github.com/vuejs/vue/blob/main/scripts/verify-commit-msg.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> commitRE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">((revert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">wip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">draft): )</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(feat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">fix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">docs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">refactor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">perf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">types</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">build</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ci</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">chore)(</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\)</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,50}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h4 id="commit-常用的-type" tabindex="-1"><code>commit</code> 常用的 <code>type</code> <a class="header-anchor" href="#commit-常用的-type" aria-label="Permalink to &quot;\`commit\` 常用的 \`type\`&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:center;">type</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:center;"><em>feat</em></td><td style="text-align:left;">新功能</td></tr><tr><td style="text-align:center;"><em>fix</em></td><td style="text-align:left;">修复 bug</td></tr><tr><td style="text-align:center;"><em>docs</em></td><td style="text-align:left;">文档类改动</td></tr><tr><td style="text-align:center;"><em>style</em></td><td style="text-align:left;">代码格式改动，同理适用于业务样式调整</td></tr><tr><td style="text-align:center;"><em>refactor</em></td><td style="text-align:left;">重构（即不是新增功能，也不是修复 bug）</td></tr><tr><td style="text-align:center;"><em>perf</em></td><td style="text-align:left;">性能优化相关</td></tr><tr><td style="text-align:center;"><em>types</em></td><td style="text-align:left;"><code>TypeScript</code> 类型相关的改动</td></tr><tr><td style="text-align:center;"><em>test</em></td><td style="text-align:left;">单元测试、e2e 测试</td></tr><tr><td style="text-align:center;"><em>build</em></td><td style="text-align:left;">构建工具或者依赖项的改动</td></tr><tr><td style="text-align:center;"><em>ci</em></td><td style="text-align:left;">修改项目持续集成流程</td></tr><tr><td style="text-align:center;"><em>chore</em></td><td style="text-align:left;">其他类型的提交</td></tr><tr><td style="text-align:center;"><em>revert</em></td><td style="text-align:left;">恢复或还原相关提交</td></tr><tr><td style="text-align:center;"><em>wip</em> | <em>draft</em></td><td style="text-align:left;">托管平台对应的草稿标识</td></tr></tbody></table><ul><li><a href="https://github.com/conventional-commits/conventionalcommits.org" target="_blank" rel="noreferrer">Conventional Commits | GitHub</a></li><li><a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noreferrer">Angular convention | Github</a></li></ul><h2 id="prettier" tabindex="-1"><code>Prettier</code> <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;\`Prettier\`&quot;">​</a></h2><blockquote><p>使用 <a href="https://prettier.io" target="_blank" rel="noreferrer">Prettier</a> 对代码进行格式化，从而实现一致的编码风格</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 每行代码的最佳长度，超出该长度则格式化</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  printWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 一个缩进使用 2 个空格</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tabWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 缩进使用空格</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  useTabs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 语句末尾不添加分号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  semi: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 仅在必需时为对象的 key 添加引号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  quoteProps: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;as-needed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 使用单引号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  singleQuote: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在 jsx 中使用双引号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  jsxSingleQuote: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 不添加尾随逗号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  trailingComma: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;es5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在对象花括号内的两旁添加空格 =&gt; { foo: bar }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bracketSpacing: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // HTML元素（包括 JSX 等）具有多个属性时，将结束标签右尖括号 ＞ 另起一行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bracketSameLine: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 箭头函数仅有一个参数时，参数也添加括号 (x) =&gt; x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  arrowParens: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 每个文件格式化的范围是文件的全部内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rangeStart: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rangeEnd: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Infinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 对所有文件进行格式化，而不是只对在开头含有特定注释（@prettier 或 @format）的文件进行格式化</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  requirePragma: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 格式化的同时自动插入 @format 的特殊注释（表示该文件已被格式化）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  insertPragma: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 对 Markdown 文本换行不进行任何操作，保持原样</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  proseWrap: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preserve&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 对 HTML 全局空白不敏感</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  htmlWhitespaceSensitivity: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 不对 vue 中的 script 及 style 标签进行缩进</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vueIndentScriptAndStyle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 换行符使用 lf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  endOfLine: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 自动格式化嵌入的代码内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  embeddedLanguageFormatting: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;auto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 不强制 html vue jsx 中的属性（具有多个时）单独占一行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  singleAttributePerLine: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ul><li><a href="/efficiency/software/vscode#推荐配置">VSCode 配置 Prettier 插件</a></li><li><a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noreferrer">Options | Prettier</a></li></ul>`,30)]))}const c=i(l,[["render",e]]);export{g as __pageData,c as default};
