import menu from "./menu.json";
const path = require("path");

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@": "/",
    }).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

export default {
    title: "VitePress",
    description: "Just playing around.",
    srcDir: path.resolve(__dirname, "../markdown"),
    themeConfig: {
        nav: menu,
        sidebar: {
            "/guide/": sidebarGuide(),
        },
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
                    link: "a",
                },
                {
                    text: "B",
                    link: "b",
                },
            ],
        },
    ];
}
