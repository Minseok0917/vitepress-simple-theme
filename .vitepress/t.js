const fs = require("fs");
const path = require("path");
const grayMatterFromFile = require("gray-matter-from-file").default;
const getTree = (dirPath) => fs.readdirSync(dirPath, { withFileTypes: true });

async function selectTree(dirPath = docsDir) {
    return await Promise.all(
        getTree(dirPath).map(async (item) => {
            const itemName = item.name;
            const itemPath = path.resolve(dirPath, itemName);
            const isDir = item.isDirectory();
            if (isDir) {
                const tree = await selectTree(itemPath);
                return {
                    type: "directory",
                    name: itemName,
                    children: tree,
                };
            } else {
                const markdownFrontmatter = await grayMatterFromFile(itemPath);
                return {
                    type: "file",
                    name: itemName,
                    meta: markdownFrontmatter,
                };
            }
        })
    );
}

module.exports = selectTree;
