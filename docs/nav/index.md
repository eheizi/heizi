---
pageClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import {ref} from 'vue'
import { NAV_DATA } from './data'
import { useMainStore } from "../.vitepress/theme/stores/use-main-store";
const state = useMainStore();

const navDataNew = ref(
    [
        {
        title:'最近使用',
        items:state.$state.navHistory,
    }
    ]
)

state.$subscribe((o, state) => {
    navDataNew.value[0].items = state.navHistory
})
</script>
<style src="./index.less"></style>

# 前端导航

::: tip
该导航借鉴了茂茂物语：<https://github.com/maomao1996/vitepress-nav-template>
:::

<MNavLinks v-if="navDataNew[0].items.length > 0" v-for="{title, items,index} in navDataNew" :title="title" :items="items" />

<MNavLinks v-for="{title, items,index} in NAV_DATA" :title="title" :items="items" />

<br />
