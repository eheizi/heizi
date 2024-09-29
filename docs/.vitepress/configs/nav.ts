import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "导航", link: "/nav/index" },
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
    text: "提效工具",
    items: [
      {
        text: "软件推荐与配置",
        items: [
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
