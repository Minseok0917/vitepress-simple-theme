const path = require("path");
const fs = require("fs");
const markdownDirectoryPath = path.join(`${__dirname}/../`);
const directoryName = {
    2022: "2022년",
};
const convertDirectoryName = (title) => directoryName[title] || title;
const convertMarkdownName = (title) => markdownName[title] || title;
const getDirectorys = (directoryPath) =>
    fs.readdirSync(directoryPath, { withFileTypes: true });

function all(directoryPath, parentDirectoryPath = "") {
    let directorys = getDirectorys(directoryPath);
    if (!parentDirectoryPath) {
        directorys = directorys.filter(({ name }) => name !== ".vuepress");
    }
    return directorys
        .filter((file) => {
            const isDirectory = file.isDirectory();
            const filterMarkdown = ["README.md", "index.md"];
            const isFilterMarkdown = filterMarkdown.includes(file.name);
            if (isDirectory || !isFilterMarkdown) return file;
        })
        .map((file) => {
            const isDirectory = file.isDirectory();
            const childDirectoryPath = `${directoryPath}/${file.name}`;
            const title = file.name.replace(".md", "");
            const path = `${parentDirectoryPath}/${title}`;
            const result = {
                isDirectory,
                path,
                title,
            };
            if (isDirectory) {
                result.title = convertDirectoryName(title);
                result.children = all(childDirectoryPath, path);
            }
            return result;
        });
}

module.exports = all(markdownDirectoryPath);
