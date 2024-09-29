<script setup lang="ts">
import { computed, ref } from 'vue'
import { slugify } from '@mdit-vue/shared'
import MNavLink from './MNavLink.vue'
import type { NavLink } from '../types'

const props = defineProps<{
    title: string
    items: NavLink[]
}>()

const formatTitle = computed(() => {
    return slugify(props.title)
})
</script>

<template>
    <h2 v-if="title" :id="formatTitle" tabindex="-1">
        {{ title }}
        <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
    </h2>
    <div class="m-nav-links">
        <MNavLink v-for="{ icon, title, desc, link, badge } in items" :key="link" :icon="icon" :title="title"
            :desc="desc" :link="link" :badge="badge" />
    </div>
</template>

<style lang="less" scoped>
.m-nav-links {
    --m-nav-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-row-gap: var(--m-nav-gap);
    grid-column-gap: var(--m-nav-gap);
    grid-auto-flow: row dense;
    justify-content: center;
    margin-top: var(--m-nav-gap);
}

// 使用LESS的循环语法
.loop(@i: 500px, @step: 140px) when (@i <=1440px) {
    @media (min-width: @i) {
        .m-nav-links {
            grid-template-columns: repeat(auto-fill, minmax(@step, 1fr));
        }
    }

    .loop((@i + 140px), (@step + 15px));
}

.loop();

@media (min-width: 960px) {
    .m-nav-links {
        --m-nav-gap: 20px;
    }
}
</style>