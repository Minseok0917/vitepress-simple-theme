import selectTree from "./t";

const path = require("path");
const menu = require("./menu.json");
const sidebar = require("./autoSidebar");
const t = require("./t");
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

export default async () => {
    const tt = await selectTree(path.resolve(__dirname, "../docs"));
    return {
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
            tt,
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
};
