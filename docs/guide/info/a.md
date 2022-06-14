---
title: Guide
description: 세리가라
createBy: 2022-01-21
---

# Lorem ipsum dolor sit amet consectetur, adipisicing elit.

## Nemo minus vitae, modi beatae sequi a voluptatem unde ratione amet dolor quis quod consequatur nulla accusamus quisquam exercitationem, quos quibusdam itaque!

### Nemo minus vitae, modi beatae sequi a voluptatem unde ratione amet dolor quis quod consequatur

#### Nemo minus vitae, modi beatae sequi a voluptatem unde ratione amet dolor quis quod consequatur

##### Nemo minus vitae, modi beatae sequi a voluptatem unde ratione amet dolor quis quod consequatur

###### Nemo minus vitae, modi beatae sequi a voluptatem unde ratione amet dolor quis quod consequatur

`dadasd` ~~213113~~ **dasdsa**

[Guide](http://localhost:3000/guide/info/a.html)

![Image](https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg)

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptatibus neque debitis esse! Id, nisi commodi pariatur distinctio impedit maxime! Voluptatem, aliquid dolores. Atque minus voluptatum provident explicabo sint temporibus.

| Tables   |      Are      |  Cool |
| -------- | :-----------: | ----: |
| col 1 is | left-aligned  | $1600 |
| col 2 is |   centered    |   $12 |
| col 3 is | right-aligned |    $1 |

## Nemo minus vitae, modi beatae sequi a voluptatem unde ratione amet dolor quis quod consequatur nulla accusamus quisquam exercitationem, quos quibusdam itaque!

> dsadsadsaasd
>
> > dsadaskasdsdaasdas
> >
> > > dasdsajk;asdjkldsajklsdajlk

-   dsa
    -   dsadsadsaasd
-   dasdsadsa

```js
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

const docsDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(docsDir, markdownDir);

export default {
    title: "민석의 블로그",
    description: "공유용 마크다운 블로그입니다. 많이 사용해주세요 😊",
    srcDir: mdDir,
    themeConfig: {
        logo: "http://t1.daumcdn.net/liveboard/petzzi/f3582f7c08454fcbb54533997269b819.JPG",
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
```
