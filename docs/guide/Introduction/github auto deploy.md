---
title: Github Pages
description: 세리가라
createBy: 2022-01-21
---

1.  `.github/workflows/main.yml`
2.  main.yml

```

language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vitepress/dist
  github_token: $GITHUB_TOKEN
  keep_history: true
  on:
    branch: main
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
