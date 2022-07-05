// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import NotFound from "./NotFound.vue";
import "../css/common.css";
export default {
    ...DefaultTheme,
    Layout,
    NotFound,

    // this is a Vue 3 functional component

    enhanceApp({ app, router, siteData }) {
        console.log(siteData, app);
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
    },
};
