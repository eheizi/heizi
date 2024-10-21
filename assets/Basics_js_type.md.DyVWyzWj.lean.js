import{_ as i,l as a,ac as n,k as t}from"./chunks/framework.CrgDeNu1.js";const c=JSON.parse('{"title":"数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"Basics/js/type.md","filePath":"Basics/js/type.md","lastUpdated":1729244301000}'),l={name:"Basics/js/type.md"};function e(h,s,p,k,r,o){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><p><strong><code>JavaScript</code></strong> 中的数据类型分为基本数据类型和引用数据类型</p><h2 id="_1-基本类型-primitive-types" tabindex="-1">1. 基本类型（Primitive Types） <a class="header-anchor" href="#_1-基本类型-primitive-types" aria-label="Permalink to &quot;1. 基本类型（Primitive Types）&quot;">​</a></h2><blockquote><p>注: 基本数据类型也可以叫原始数据类型</p></blockquote><p>在 ES2020 标准下的 JavaScript 一共有以下 7 种基本类型：</p><ul><li><strong><code>Undefined</code></strong>：表示未定义的值，变量声明但未赋值时为 <code>undefined</code>。</li><li><strong><code>Null</code></strong>：表示“无”或“空”的值，表示意图明确的无值。</li><li><strong><code>Boolean</code></strong>：只有两个值：<code>true</code> 和 <code>false</code>，用于表示逻辑值。</li><li><strong><code>Number</code></strong>：包括整数和浮点数，所有数字都被视为 <code>Number</code> 类型。</li><li><strong><code>BigInt</code></strong>：用于表示大于 <code>2^53 - 1</code> 的整数，支持任意精度。</li><li><strong><code>String</code></strong>：表示字符串文本，由一系列字符组成。</li><li><strong><code>Symbol</code></strong>：表示唯一的值，常用于对象属性的键。</li></ul><div class="tip custom-block"><p class="custom-block-title">基本类型总结</p><ul><li>基本类型仅保存原始值，不存在属性和方法</li><li>变量中的基本类型存储在 栈内存 中</li><li>保存基本类型的变量是 按值 (by value) 访问 的，操作的就是存储在变量中的实际值</li><li>复制基本类型时会创建该值的第二个副本 (独立使用，互不干扰)</li></ul></div><div class="tip custom-block"><p class="custom-block-title">为什么原始值不存在属性和方法，但 &#39;hello world&#39;.toString() 可以正确执行</p><p>为了方便操作原始值 ECMAScript 提供了 3 种特殊的引用类型：Boolean Number String，每当用到某个原始值的方法或属性时，但当你调用一个方法时，JavaScript 会执行一个“装箱”操作。</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 举个 🌰</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 装箱操作的过程：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 1. JavaScript 会临时创建一个对应的对象包装器（如 String 对象）。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 2. 调用方法：这个临时对象会有相应的属性和方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 3. 调用结束后，临时对象会被销毁，原始值仍然保持不变</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="_2-引用数据类型-reference-types" tabindex="-1">2. 引用数据类型（Reference Types） <a class="header-anchor" href="#_2-引用数据类型-reference-types" aria-label="Permalink to &quot;2. 引用数据类型（Reference Types）&quot;">​</a></h2><p>引用数据类型是可变的，常见的引用类型如下：</p><ul><li><strong><code>Object</code></strong> 对象</li><li><strong><code>Array</code></strong> 数组</li><li><strong><code>Function</code></strong> 函数</li><li><strong><code>Date</code></strong> 日期与时间</li><li><strong><code>RegExp</code></strong> 正则表达式</li><li><strong><code>Set</code></strong> 类似于数组但成员的值都是唯一的 (<a href="https://es6.ruanyifeng.com/#docs/set-map#Set" target="_blank" rel="noreferrer">ES6 引入</a>)</li><li><strong><code>WeakSet</code></strong> (<a href="https://es6.ruanyifeng.com/#docs/set-map#WeakSet" target="_blank" rel="noreferrer">ES6 引入</a>)</li><li><strong><code>Map</code></strong> 类似于对象也是键值对的集合 (<a href="https://es6.ruanyifeng.com/#docs/set-map#Map" target="_blank" rel="noreferrer">ES6 引入</a>)</li><li><strong><code>WeakMap</code></strong> (<a href="https://es6.ruanyifeng.com/#docs/set-map#WeakMap" target="_blank" rel="noreferrer">ES6 引入</a>)</li></ul><div class="tip custom-block"><p class="custom-block-title">引用类型总结</p><ul><li>因为 <code>JavaScript</code> 不允许直接访问内存位置(不能直接操作对象所在的内存空间)，所以引用类型在 <strong>栈内存</strong> 中存储的是地址(内存指针)，而引用类型中的数据(方法或属性)是存储在 <strong>堆内存</strong> 中</li><li>保存引用类型的变量是 <strong>按引用 (by reference) 访问</strong> ，实际上操作的是对该对象的引用而非实际的对象本身</li><li>复制引用类型时只会复制内存指针</li></ul></div><div class="tip custom-block"><p class="custom-block-title">栈内存和堆内存</p><ul><li><strong>栈内存</strong><ul><li>存储基本数据类型和堆内存地址</li><li>是连续的内存空间</li></ul></li><li><strong>堆内存</strong><ul><li>存储引用数据类型和闭包中的变量</li><li>不是连续的内存空间</li></ul></li><li>了解更多请点击 <a href="https://github.com/chenqf/frontEndBlog/issues/9" target="_blank" rel="noreferrer">JS 中的栈内存和堆内存</a></li></ul></div><h2 id="类型判断" tabindex="-1">类型判断 <a class="header-anchor" href="#类型判断" aria-label="Permalink to &quot;类型判断&quot;">​</a></h2><p>常见的五种判断方式</p><ul><li><strong><code>typeof</code></strong></li><li><strong><code>instanceof</code></strong></li><li><strong><code>constructor</code></strong></li><li><strong><code>Array.isArray()</code></strong></li><li><strong><code>Object.prototype.toString</code></strong></li></ul><h3 id="typeof" tabindex="-1">typeof <a class="header-anchor" href="#typeof" aria-label="Permalink to &quot;typeof&quot;">​</a></h3><ul><li>除 <strong><code>null</code></strong> 外的基本类型都能准确判断</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // &#39;undefined&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             // &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             // &#39;boolean&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;heizi&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // &#39;string&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2021</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             // &#39;number&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;symbol&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BigInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2021</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;bigint&#39;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">为什么 typeof null === &#39;object&#39;</p><p>在 <code>JavaScript</code> 最初的实现中，<code>JavaScript</code> 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 <code>0</code>。由于 <code>null</code> 代表的是空指针（大多数平台下值为 <code>0x00</code>），因此<code>null</code> 的类型标签是 <code>0</code>，<code>typeof null</code> 也因此返回 <code>&quot;object&quot;</code> —— <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null" target="_blank" rel="noreferrer">MDN</a></p></div><ul><li>除 <strong><code>function</code></strong> 外的引用类型均返回 <code>object</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;object&#39;</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.log      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;function&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WeakSet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WeakMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;object&#39;</span></span></code></pre></div><h3 id="instanceof" tabindex="-1">instanceof <a class="header-anchor" href="#instanceof" aria-label="Permalink to &quot;instanceof&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof" target="_blank" rel="noreferrer"><code>instanceof</code></a> 用于检测构造函数的 <code>prototype</code> 属性是否存在于实例对象的原型链上</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 基本类型 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Boolean</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       // false</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;maomao&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // false</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Number</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           // false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 引用类型 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;maomao&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改原型，使 p1 不再是 Person 的实例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Reflect.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPrototypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p1, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// OR p1.__proto__ = Array.prototype</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           // true</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">instanceof 总结</p><ul><li><code>instanceof</code> 不能判断基本类型，对于引用类型只能判断原型链上的从属关系</li><li><code>instanceof</code> 并不完全可靠，因为构造函数的 <code>prototype</code> 属性可能会被修改 <ul><li>修改原型的方法 <ul><li>使用 <code>ES6</code> 提供的 <a href="https://es6.ruanyifeng.com/?search=%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B&amp;x=0&amp;y=0#docs/reflect#Reflect-setPrototypeOfobj-newProto" target="_blank" rel="noreferrer"><code>Reflect.setPrototypeOf()</code></a> 方法</li><li>借助于非标准的 <code>__proto__</code> 伪属性</li></ul></li></ul></li></ul></div><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>实例对象可以通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor" target="_blank" rel="noreferrer"><code>constructor</code></a> 属性去访问它的构造函数</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 基本类型 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Boolean            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;maomao&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2021</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Number             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Symbol           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BigInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2021</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BigInt       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 引用类型 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([]).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Array                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Person   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改原型造成 constructor 丢失</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">constructor 总结</p><ul><li><code>constructor</code> 可以判断除 <code>undefined</code> 和 <code>null</code> 外的所有基本类型和引用类型(<code>undefined</code> 和 <code>null</code> 不存在构造函数)</li><li><code>constructor</code> 并不完全可靠，因为构造函数的 <code>prototype</code> 属性可能会被修改，从而造成 <code>constructor</code> 属性指向不准确</li></ul></div><h3 id="array-isarray" tabindex="-1">Array.isArray() <a class="header-anchor" href="#array-isarray" aria-label="Permalink to &quot;Array.isArray()&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" target="_blank" rel="noreferrer"><code>Array.isArray()</code></a> 用于判断一个值是否是数组 (<code>Array</code>)</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([])   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre></div><h3 id="object-prototype-tostring" tabindex="-1">Object.prototype.toString <a class="header-anchor" href="#object-prototype-tostring" aria-label="Permalink to &quot;Object.prototype.toString&quot;">​</a></h3><ul><li>每个对象都有一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" target="_blank" rel="noreferrer"><code>toString()</code></a> 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用，默认情况下 <code>toString()</code> 方法被每个 <code>Object</code> 对象继承。如果此方法在自定义对象中未被覆盖 <code>toString()</code> 返回 <code>&quot;[object type]&quot;</code> 其中 <code>type</code> 是对象的类型</li><li>为了每个对象都能通过 <code>Object.prototype.toString()</code> 来检测，需要以 <code>Function.prototype.call()</code> 或者 <code>Function.prototype.apply()</code> 的形式来调用</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> toString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.toString</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Undefined]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Null]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Boolean]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;maomao&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object String]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2021</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Number]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Symbol]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BigInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2021</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object BigInt]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Object]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([])               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Array]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(console.log)      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Function]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Date]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object RegExp]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Set]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WeakSet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object WeakSet]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object Map]&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toString.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WeakMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;[object WeakMap]&#39;</span></span></code></pre></div><p><code>toString</code> 方法的在 <a href="https://es5.github.io/#x15.2.4.2" target="_blank" rel="noreferrer"><code>ECMAScript 5</code></a> 下的大致执行过程</p><ol><li>如果 <code>this</code> 是 <code>undefined</code> 返回 <code>[object Undefined]</code></li><li>如果 <code>this</code> 是 <code>null</code> 返回 <code>[object Null]</code></li><li>让 <code>O</code> 成为 <code>ToObject(this)</code> 的结果</li><li>让 <code>class</code> 成为 <code>O</code> 的内部属性 <code>[[Class]]</code> 的值</li><li>返回由 <strong><code>&quot;[object &quot;</code></strong> <strong><code>class</code></strong> <strong><code>&quot;]&quot;</code></strong> 三个部分组成的字符串</li></ol><div class="warning custom-block"><p class="custom-block-title">注意点</p><p>不同 <code>ECMAScript</code> 版本对 <code>toString</code> 方法的规范都有所不同</p><p><a href="https://juejin.cn/post/6972878737582850062#heading-27" target="_blank" rel="noreferrer">Object.prototype.toString 方法的原理</a></p></div>`,40)]))}const g=i(l,[["render",e]]);export{c as __pageData,g as default};
