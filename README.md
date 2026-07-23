# AIcellTW93.github.io

一个零依赖的静态设计作品集，可直接部署到 GitHub Pages。

## 发布

仓库必须命名为 `AIcellTW93.github.io`，推送到 `main` 分支后，GitHub 会自动发布到：

`https://AIcellTW93.github.io`

首次发布后，进入仓库 **Settings → Pages**，确认来源为 **Deploy from a branch / main / root**。

## 改成自己的内容

发布前请在以下位置替换占位内容：

1. `index.html`：`YOUR NAME`、所在地、简介与 `hello@example.com`。
2. `script.js`：`projects` 数组里的项目名称、类型和年份。
3. `style.css`：每件作品的默认抽象封面样式位于 `.art--…`；如果要使用真实设计稿，把图片放到 `assets/`，再在 `script.js` 中扩展图片地址即可。

这个首版不依赖构建工具、CMS 或服务器；上传作品集只需提交静态文件。
