import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "导航", link: "/nav/index" },
  {
    text: "基础知识",
    items: [
      {
        text: "JavaScript 理论基础",
        link: "/Basics/js/type",
      },
      { text: "HTML 理论基础", link: "/Basics/html" },
      {
        text: "CSS 理论基础",
        link: "/Basics/css/",
      },

      {
        text: "ES6 常用知识",
        link: "/Basics/es6",
      },
    ],
  },
  { text: "小游戏", link: "/games/index" },
  {
    text: "workflow",
    items: [
      {
        text: "编程规范",
        link: "/workflow/index",
      },
      {
        text: "常用工具/方法",
        items: [
          {
            text: "工具库整理",
            link: "/workflow/utils/tool",
          },
          {
            text: "常用正则整理",
            link: "/workflow/utils/regular",
          },
          {
            text: "常用代码片段",
            link: "/workflow/utils/code",
          },
        ],
      },
      {
        text: "常用库的使用与配置",
        items: [
          {
            text: "Day.js",
            link: "/workflow/package/day",
          },
        ],
      },
    ],
  },
  { text: "值得记录", link: "/life/index" },
  {
    text: "笔记",
    items: [
      {
        text: "日常笔记",
        link: "/note/index",
      },
      {
        text: "遇到的坑",
        items: [
          {
            text: "js",
            link: "/pit/js",
          },
          {
            text: "css",
            link: "/pit/css",
          },
          {
            text: "微信小程序",
            link: "/pit/wechat",
          },
          {
            text: "服务器",
            link: "pit/server",
          },
        ],
      },
    ],
  },
  {
    text: "提效工具",
    items: [
      {
        text: "软件推荐与配置",
        items: [
          {
            text: "多平台软件",
            link: "/efficiency/software/cross-platform",
          },
          {
            text: "Windows 平台",
            link: "/efficiency/software/windows",
          },
          {
            text: "浏览器设置与扩展",
            link: "/efficiency/software/google-extend",
          },
          {
            text: "Visual Studio Code 配置",
            link: "/efficiency/software/vscode",
          },
        ],
      },
      {
        text: "在线工具",
        link: "/efficiency/online-tools",
      },
      {
        text: "书签脚本",
        link: "/efficiency/bookmark-scripts",
      },
    ],
  },
  { text: "关于", link: "/about/index" },
];
