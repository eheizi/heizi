import { defineConfig } from "vitepress";
import { head, nav, sidebar } from "./configs/index";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: "../dist",
  title: "鑫",
  description: "欢迎来到我的博客",
  lang: "zh-CN",
  head,
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["**/README.md", "**/TODO.md"],
  themeConfig: {
    logo: "https://notes.fe-mm.com/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "目录",
    },
    footer: {
      message: "如有转载或 CV 的请标注本站原文地址",
      copyright: "Copyright © 2024-present HEIZI 赣ICP备2024038133号-2",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    search: {
      provider: "local",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    socialLinks: [{ icon: "github", link: "https://github.com/eheizi" }],
  },
});
