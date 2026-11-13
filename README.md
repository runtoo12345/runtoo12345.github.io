# runtoo

空的 [Hexo](https://hexo.io/zh-cn/docs/github-pages) 博客，主题是 [hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)。站点地址是 https://runtoo12345.github.io。

仓库里只放源码。`.gitignore` 已忽略 `public/`、`node_modules/` 和 `db.json`，不要把生成结果提交上来。目前没有文章，关于页也是空的。

页面结构是首页、归档和关于。合并到 `main` 之后，到仓库 **Settings → Pages**，把 Source 从 **Deploy from a branch**（`main` / `/ (root)`）改成 **GitHub Actions**。改之前，GitHub Pages 仍从 `main` 根目录发布，而根目录已经不是可直接打开的网站。不要添加自定义域名。

## 本地预览

需要当前的 Node.js LTS（工作流里是 Node 26）。

```bash
npm install
npm run server
```

打开 http://127.0.0.1:4000 。

## 写一篇文章

```bash
npx hexo new "标题"
```

文件会出现在 `source/_posts/`。关于页是 `source/about/index.md`。
