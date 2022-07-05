---
title: Github Pages
description: vitepress-simple-theme Github Pages Auto Deploy
---

![시발](/images/b.jpg)

1.  `.github/workflows/main.yml`
2.  main.yml

```
name: Build and Deploy
on: [push]
jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@main
            - run: node -v
            - name: Vuepress deploy
              uses: jenkey2011/vuepress-deploy@1.6.1
              env:
                  ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
                  BUILD_SCRIPT: yarn && yarn build
                  TARGET_BRANCH: gh-pages
                  BUILD_DIR: .vitepress/dist
```

3.  [github developer setting](https://github.com/settings/tokens/new)
4.  New personal access token
    1. NOTE : vitepress-simple-theme-token
    2. Expiration : No expiration
    3. Select scopes : workflow checked
    4. `Generate token` Button Click
5.  `lightgreen backgroun` key copy : `ghp_????????????????????????????????????`
6.  deploy repository move
    1. `Settings` Tab click
    2. `Secrets` Menu Click
        1. `Actions` SubMenu Click
7.  `New repository secret` Button Click
8.  New Secret
    1. Name : ACCESS_TOKEN
    2. Value : `ghp_????????????????????????????????????`
