import DefaultTheme from "vitepress/theme";
import { createPinia } from "pinia";
import "./style/index.less";
import MNavLinks from "./components/MNavLinks.vue";
import { useMainStore } from "./stores/use-main-store";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    const pinia = createPinia();
    pinia.use(piniaPluginPersistedstate);
    app.use(pinia);
    app.provide("mainStore", useMainStore());
    app.component("MNavLinks", MNavLinks);
  },
};
