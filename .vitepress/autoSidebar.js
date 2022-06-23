const fs = require("fs");
const path = require("path");
const menus = require("./menu.json");
const { markdownDir } = require("../package.json");

const docsDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(docsDir, markdownDir);
const getDir = (dirPath) => fs.readdirSync(dirPath, { withFileTypes: true });

const sidebar = Object.fromEntries(
    menus
        .filter(({ activeMatch }) => {
            if (!activeMatch) return false;
            const menuDir = path.join(mdDir, activeMatch);
            const isDir = fs.existsSync(menuDir);
            return isDir;
        })
        .map(({ activeMatch }) => {
            const plink = activeMatch.replace(/\//g, "");
            const menuDir = path.join(mdDir, activeMatch);
            const menuChildDirs = getDir(menuDir).filter((file) =>
                file.isDirectory()
            );
            const menuSidebar = menuChildDirs.map(({ name }) => {
                const menuChildDir = path.join(menuDir, name);
                const menuChildDirName = name;
                const menuChildFiles = getDir(menuChildDir)
                    .filter((file) => !file.isDirectory())
                    .map(({ name }) => name.replace(/.md/, ""))
                    .map((name) => ({
                        text: name,
                        link: `/${plink}/${menuChildDirName}/${name}`,
                    }));
                return {
                    text: name,
                    collapsible: true,
                    collapsed: true,
                    items: menuChildFiles,
                };
            });
            return [activeMatch, menuSidebar];
        })
);

module.exports = sidebar;
