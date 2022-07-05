<template>
    <main class="main markdown-container">
        <div class="info">
            <p class="createBy" v-if="frontmatter.createBy">{{ createBy }}</p>
            <h1 class="title">{{ frontmatter.title }}</h1>
            <div class="img-box" v-if="frontmatter.image">
                <img :src="frontmatter.image" alt="image" />
            </div>
        </div>
        <Content class="vp-doc" />
    </main>
</template>
<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import moment from "moment";

const data = useData();
console.log(data);
const { frontmatter } = useData();
const createBy = computed(() =>
    moment(frontmatter.value.createBy).format(`DD MMM YYYY`)
);
</script>
