const path = require("path");
const menu = require("./menu.json");
const sidebar = require("./autoSidebar");
const { markdownDir } = require("../package.json");

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@": "/",
        "@custom-theme": "/custom-theme",
        "@theme-default": "/theme-default",
        "@css": "/css",
    }).map(([key, value]) => [key, path.join(__dirname, value)])
);

const docsDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(docsDir, markdownDir);

export default {
    base: `/vitepress-simple-theme/`,
    lang: "en-US",
    title: "VitePress Simple Theme",
    description:
        "Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir: mdDir,
    lastUpdated: true,
    themeConfig: {
        nav: menu,
        sidebar,
    },
    vite: {
        server: {
            host: true,
        },
        resolve: {
            alias: resolveAlias,
        },
    },
};
