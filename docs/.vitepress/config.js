const path = require("path");
const menu = require("./menu.json");
const sidebar = require("./autoSidebar");
const { title, description, markdownDir } = require("../../package.json");

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@": "/",
        "@custom-theme": "/custom-theme",
        "@theme-default": "/theme-default",
        "@css": "/css",
    }).map(([key, value]) => [key, path.join(__dirname, value)])
);

console.log(resolveAlias);
const docsDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(docsDir, markdownDir);

const a = {
    "/guide/": [
        {
            text: "info",
            collapsible: true,
            collapsed: true,
            items: [
                { text: "a", link: "/guide/info/a" },
                { text: "b", link: "/guide/info/b" },
            ],
        },
    ],
    sidebar1: [
        {
            text: "guide",
            items: [
                { text: "a", link: "/guide/info/a" },
                { text: "b", link: "/guide/info/b" },
            ],
        },
    ],
};

export default {
    title,
    description,
    srcDir: mdDir,
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

function sidebarGuide() {
    return [
        {
            text: "Guide",
            collapsible: true,
            collapsed: true,
            items: [
                {
                    text: "A",
                    link: "guide/a",
                },
                {
                    text: "B",
                    link: "guide/b",
                },
            ],
        },
    ];
}
