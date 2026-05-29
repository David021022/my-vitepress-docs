# VitePress 使用手册

这是一份面向新成员的 VitePress 入门文档，帮助你快速理解项目结构与日常操作。

## 什么是 VitePress

VitePress 是基于 Vite 和 Vue 3 的静态文档站点生成器，适合技术文档、知识库和产品手册。

## 项目目标

- 统一维护文档内容
- 快速本地预览和迭代
- 自动部署到 GitHub Pages

## 目录结构

```text
docs/
├─ .vitepress/
│  └─ config.mts
├─ guide/
│  ├─ introduction.md
│  ├─ getting-started.md
│  └─ markdown-examples.md
├─ index.md
└─ api-examples.md
```

## 常用命令

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## 开发流程建议

1. 在 `docs/` 下新增或修改 Markdown 文件。
2. 本地执行 `npm run docs:dev` 实时预览。
3. 提交代码并合并到 `main` 分支。
4. GitHub Actions 自动构建并发布到 Pages。

## 常见问题

### 页面路径不正确

优先检查 `docs/.vitepress/config.mts` 里的 `base` 配置是否与仓库名一致。

### 构建失败

检查 Node.js 版本（建议 18+），并重新执行依赖安装：

```bash
npm ci
```
