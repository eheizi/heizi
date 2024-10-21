---
# 提供三种布局，doc、page和home https://vitepress.dev/reference/default-theme-layout
layout: home
home: true
pageClass: m-home-layout
# https://vitepress.dev/reference/default-theme-home-page
title: 鑫
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true
hero:
  name: 黑子的博客
  text: Xin 的成长之路
  tagline: Stay foolish, Stay hungry.
  image:
    src: ./.vitepress/blog-logo-bg.png
    alt: 背景图
  actions:
    - theme: brand
      text: 前端导航
      link: /nav/index
    - theme: alt
      text: 值得记录
      link: /life/index
features:
  - icon: 💻
    title: Web前端开发
    details: 正经前端开发工程师，写页面如丝般顺滑，偶尔也碰一碰后端，虽然只是懂“一丢丢”。
    link: /about/index
    linkText: 关于
  - icon: 🎮
    title: 小游戏
    details: 休闲时间的终极救星，简单又有趣的小项目，适合摸鱼、打发时间、顺便验证一下我高超的开发技术！
    link: /games/index
    linkText: 小游戏
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /workflow/index
    linkText: 常用工具库
  - icon: 🎇
    title: 值得记录
    details: 虽然我的生活可能不总是波澜壮阔，但也有些小火花，值得我在这里留下“伟大”的足迹！
    link: /life/index
    linkText: 记录
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /efficiency/index
    linkText: 提效工具
  - icon: ✈️
    title: 我有一个梦想...
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
---

<script setup>
import MFriends from './home/MFriends.vue'
</script>

<ClientOnly>
  <MFriends/> 
</ClientOnly>

<style>
  /*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}
.m-home-layout .image-src{
  border-radius: 50%;
}
.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
