# runtoo 手记

个人博客，地址是 [https://runtoo12345.github.io](https://runtoo12345.github.io)。

站点是静态的，由 Jekyll 生成。GitHub Pages 已经从 `main` 分支的根目录发布，推送之后会自动构建，不需要另加打包流程，也不要改 Pages 的发布来源。

不要在仓库里放 `.nojekyll`，否则模板不会被编译。也不要删掉 `_config.yml` 里的 `theme: null`，否则会套上 GitHub Pages 的默认主题。

## 写一篇新文章

在 `_posts/` 新建一个 Markdown 文件。文件名决定日期和网址：

```text
YYYY-MM-DD-短标题.md
```

短标题用小写英文或拼音，单词之间用连字符。它会出现在链接里，例如：

`_posts/2026-11-20-guan-nian.md` → `/posts/2026/11/20/guan-nian/`

文件内容：

```markdown
---
title: 文章标题
date: 2026-11-20 21:00:00 +0800
categories:
  - 投资
excerpt: 一两句话。会出现在首页和文章列表。
---

正文从这里开始。

<!-- more -->

想让摘要停在这里，就加上面这一行。如果写了 excerpt，以 excerpt 为准。
```

- 分类建议用 `投资`、`成长`、`海外`。列表里显示第一个。
- 配图放在 `assets/images/`，正文里这样引用：`![说明](/assets/images/photo.jpg)`
- 还没写完、不想公开的文章放进 `_drafts/`，文件名不用加日期。
- 也可以把文章留在 `_posts/`，加上 `published: false`，线上不会出现。
- 时区在 `_config.yml` 的 `timezone`，默认是东八区。日期晚于构建时间的文章不会公开。站点只在推送时重新构建，把日期写成未来不会自动等到那天再发。

现在列表里的「即将更新」是占位，不是正式文章。不需要它时，删掉 `_posts/2026-11-13-ji-jiang-geng-xin.md`。

改完推到 `main`。GitHub Pages 一般一两分钟内会重新构建，刷新 [https://runtoo12345.github.io](https://runtoo12345.github.io) 即可。浏览器如果还是旧页面，强制刷新一次。

## 本地预览

需要 Ruby 和 Bundler。

```bash
bundle install
bundle exec jekyll serve
```

打开 `http://127.0.0.1:4000`。加上 `--drafts` 可以顺便预览 `_drafts/` 里的草稿。

本地预览用的是 `github-pages` gem，和线上是同一套 Jekyll。真正发布时，GitHub 不读取 `Gemfile`，用的是 Pages 自己的版本。

## 改站上的字

| 想改的内容 | 文件 |
| --- | --- |
| 站名、简介、时区、网址 | `_config.yml` |
| 首页 | `index.html` |
| 关于页 | `about.html` |
| 导航 | `_includes/header.html` |
| 页脚和免责声明 | `_includes/footer.html` |
| 文章页样子 | `_layouts/post.html` |
| 样式 | `assets/css/style.css` |

页脚这句话不要随便拿掉：内容仅作个人记录与分享，不构成投资建议。

## 页面

- `/` 首页
- `/articles/` 文章列表
- `/about/` 关于
- `/posts/年/月/日/短标题/` 单篇文章
- `/feed.xml` 订阅
