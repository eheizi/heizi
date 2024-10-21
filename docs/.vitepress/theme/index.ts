import DefaultTheme from "vitepress/theme";
import { createPinia } from "pinia";
import "./style/index.less";
import MNavLinks from "./components/MNavLinks.vue";
import { useMainStore } from "./stores/use-main-store";
import { watch } from "vue";
import { basename } from "node:path";
let homePageStyle: HTMLStyleElement | undefined;
export default {
  extends: DefaultTheme,
  outDir: "../dist",
  base: "/heizi/",
  enhanceApp({ app, router }) {
    const pinia = createPinia();
    console.log(typeof window);
    if (typeof window !== "undefined") {
      // 使用插件...
      import("pinia-plugin-persistedstate").then(({ createPersistedState }) => {
        pinia.use(createPersistedState());
      });

      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === "/"),
        { immediate: true }
      );
    }

    app.use(pinia);
    app.provide("mainStore", useMainStore());
    app.component("MNavLinks", MNavLinks);
  },
};
if (typeof window !== "undefined") {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome")) {
    document.documentElement.classList.add("browser-chrome");
  } else if (browser.includes("firefox")) {
    document.documentElement.classList.add("browser-firefox");
  } else if (browser.includes("safari")) {
    document.documentElement.classList.add("browser-safari");
  }
}
// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
