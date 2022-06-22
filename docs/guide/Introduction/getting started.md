---
title: Getting Started
description: vitepress-simple-theme Getting Started
---

## 🐧 Create Folder

```cmd
mkdir vitepress-theme
```

## 🐦 Move Folder

```cmd
cd ./vitepress-theme
```

## 🦉 Create Package.json

```cmd
npm init -y
```

## 🦚 NPM Install

```cmd
npm install vitepress vitepress-simple-theme
```

## 🦩 Set Package.json

```json
{
    "name": "vitepress-theme",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "vitepress dev",
        "build": "vitepress build"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "vitepress": "^1.0.0-alpha.4",
        "vitepress-simeple-theme": "^0.3.2"
    }
}
```

## 🦜 Directory Structure

::: tip Directory Structure

-   📁 node_modules/
-   📁 .vitepress/
    -   📁 theme/
        -   📒 index.js
    -   📒 config.js
-   📁docs/
    -   📁 guide/
        -   📗 `Hello.md`
    -   `📗 index.md`
-   📙 packge-lock.json
-   📙 packge.json

:::

## 🦢 Set Config.js

```js
// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "Hello Friend",
    description:
        "Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir: mdDir,
    themeConfig: {
        nav: [
            {
                text: "guide",
                link: "/guide/hello",
                activeMatch: "/guide/",
            },
        ],
        sidebar: {
            "/guide/": [
                {
                    text: " WELCOME ",
                    items: [
                        {
                            text: "· Hello Friend",
                            link: "/guide/hello",
                        },
                    ],
                },
            ],
            "/": [
                {
                    text: "GUIDE",
                    items: [
                        {
                            text: " · Hello",
                            link: "/guide/hello",
                        },
                    ],
                },
            ],
        },
    },
};
```

## 🦅 Set Index.js

```js
// // .vitepress/theme/index.js
import Theme from "vitepress-simple-theme";
export default Theme;
```

## 🦃 Set Home Markdown

```md
---
title: "WELCOME FRIEND"
image: https://images.unsplash.com/photo-1526716173434-a1b560f2065d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
---
```

## 🐓 Set Hello Markdown
