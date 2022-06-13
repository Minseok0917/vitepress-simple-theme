<template>
    <main class="main markdown-container">
        <div class="info">
            <p class="createBy">{{ createBy }}</p>
            <h1 class="title">{{ frontmatter.title }}</h1>
        </div>
        <Content class="vp-doc" />
    </main>
</template>
<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import dayjs from "dayjs";

const { frontmatter } = useData();
console.log(frontmatter.value.title);
const createBy = computed(() =>
    dayjs(frontmatter.value.createBy).format(`DD MMM YYYY`)
);
</script>
