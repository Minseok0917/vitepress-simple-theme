<script setup>
import { provide } from "vue";
import {
    useSidebar,
    useCloseSidebarOnEscape,
} from "../theme-default/composables/sidebar";
import VPSkipLink from "../theme-default/components/VPSkipLink.vue";
import VPBackdrop from "../theme-default/components/VPBackdrop.vue";
import VPNav from "../theme-default/components/VPNav.vue";
import VPLocalNav from "../theme-default/components/VPLocalNav.vue";
import VPSidebar from "../theme-default/components/VPSidebar.vue";
import VPContent from "../theme-default/components/VPContent.vue";
import VPFooter from "../theme-default/components/VPFooter.vue";

const {
    isOpen: isSidebarOpen,
    open: openSidebar,
    close: closeSidebar,
} = useSidebar();

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);

provide("close-sidebar", closeSidebar);
</script>

<template>
    <div class="Layout">
        <VPSkipLink />
        <VPBackdrop
            class="backdrop"
            :show="isSidebarOpen"
            @click="closeSidebar"
        />
        <VPNav />
        <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
        <VPSidebar :open="isSidebarOpen" />

        <VPContent>
            <template #home-hero-before
                ><slot name="home-hero-before"
            /></template>
            <template #home-hero-after
                ><slot name="home-hero-after"
            /></template>
            <template #home-features-before
                ><slot name="home-features-before"
            /></template>
            <template #home-features-after
                ><slot name="home-features-after"
            /></template>

            <template #aside-top><slot name="aside-top" /></template>
            <template #aside-bottom><slot name="aside-bottom" /></template>
            <template #aside-outline-before
                ><slot name="aside-outline-before"
            /></template>
            <template #aside-outline-after
                ><slot name="aside-outline-after"
            /></template>
            <template #aside-ads-before
                ><slot name="aside-ads-before"
            /></template>
            <template #aside-ads-after
                ><slot name="aside-ads-after"
            /></template>
        </VPContent>

        <VPFooter />
    </div>
</template>

<style scoped>
.Layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
