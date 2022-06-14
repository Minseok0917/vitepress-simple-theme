const path = require("path");
const menu = require("./menu.json");
const sidebar = require("./autoSidebar");
const { title, description, markdownDir } = require("../package.json");

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
    title: "VitePress Simple Theme",
    description: "공유용 마크다운 블로그입니다. 많이 사용해주세요 😊",
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
