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
const googleAnalyticsId = `G-EJT2Y1E7NJ`;
const googleAnalytics = [
    [
        "script",
        {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
        },
    ],
    [
        "script",
        {},
        `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${googleAnalyticsId}');`,
    ],
];

export default {
    base: `/vitepress-simple-theme/`,
    lang: "en-US",
    title: "VitePress Simple Theme",
    description:
        "Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir: mdDir,
    lastUpdated: true,
    head: [...googleAnalytics],
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
    plugins: [
        [
            "sitemap",
            {
                hostname:
                    "https://minseok0917.github.io/vitepress-simple-theme/",
            },
        ],
    ],
};
