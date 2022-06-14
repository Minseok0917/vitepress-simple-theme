const path = require("path");
const menu = require("./menu.json");
const sidebar = require("./autoSidebar");
const { markdownDir, repository } = require("../package.json");

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
    base: `/${repository}/`,
    title: "VitePress Simple Theme",
    description:
        "Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir: mdDir,
    lastUpdated: true,
    themeConfig: {
        // logo: "http://t1.daumcdn.net/liveboard/petzzi/f3582f7c08454fcbb54533997269b819.JPG",
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
