<template>
    <div class="NotFound-container">
        <h1 class="title">PAGE NOT FOUND</h1>
        <a :href="homePath">GO HOME</a>
    </div>
</template>
<script setup>
import { useData } from "vitepress";
import { computed } from "vue";

const data = useData();
const homePath = computed(() => data.site.value.base);
</script>
