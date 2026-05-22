# VitePress 使用手册

## 一、概述

1.1 什么是 VitePress？

VitePress 是一个基于 Vite 构建的静态站点生成器，专为技术文档设计。它结合了 Vue 3 的强大功能和 Markdown 的便捷性，提供极快的构建速度和优秀的开发体验。

1.2 主要特性

• ⚡ 极速的热重载

• 📖 Markdown 为中心

• 🎨 默认主题美观

• 🔧 高度可配置

• 📱 响应式设计

## 二、快速开始

2.1 环境要求

• Node.js 18.0 或更高版本

• 包管理器（npm、yarn 或 pnpm）

2.2 安装步骤

### 创建项目目录
mkdir my-docs
cd my-docs

### 初始化项目
npm init -y

### 安装 VitePress
npm install -D vitepress

### 初始化向导
npx vitepress init


2.3 项目结构

初始化后生成以下结构：

my-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts
│   ├── index.md
│   └── api-examples.md
├── package.json
└── README.md


## 三、核心配置

3.1 配置文件

创建 docs/.vitepress/config.mts：
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的文档',
  description: 'VitePress 技术文档',
  base: '/my-docs/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' }
    ]
  }
})


3.2 常用配置项

• title: 网站标题

• description: 网站描述

• base: 部署路径

• lang: 网站语言

• lastUpdated: 是否显示最后更新时间

## 四、Markdown 扩展

4.1 代码高亮

```javascript
console.log('Hello VitePress!')
```


支持行高亮：
```javascript{1,3-4}
function example() {
  console.log('第1行高亮')
  return {
    name: '第3-4行高亮'
  }
}
```


4.2 自定义容器

::: info
信息提示
:::

::: tip
技巧提示
:::

::: warning
警告提示
:::

::: danger
危险提示
:::

::: details
可折叠内容
:::


4.3 表格

| 功能 | 状态 | 说明 |
|------|------|------|
| 热重载 | ✅ | 修改后自动刷新 |
| 代码高亮 | ✅ | 支持多种语言 |
| SEO 优化 | ✅ | 自动生成 meta 标签 |


4.4 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 进行中任务


## 五、主题定制

5.1 自定义样式

创建 docs/.vitepress/theme/index.css：
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
  --vp-c-brand-dark: #535bf2;
}

.custom-container {
  border-left: 4px solid var(--vp-c-brand);
  padding: 1rem;
  margin: 1rem 0;
}


5.2 布局组件

<Badge type="info">信息</Badge>
<Badge type="tip">提示</Badge>
<Badge type="warning">警告</Badge>
<Badge type="danger">危险</Badge>


## 六、开发与构建

6.1 开发命令

### 启动开发服务器
npm run docs:dev

### 预览生产构建
npm run docs:preview

### 构建生产版本
npm run docs:build


6.2 开发服务器

<!-- • 默认地址：http://localhost:5173 -->

• 支持热重载

• 自动检测文件变化

## 七、部署指南

7.1 GitHub Pages

1. 创建 .github/workflows/deploy.yml
2. 配置 GitHub Actions
3. 启用 GitHub Pages

7.2 自定义域名

1. 添加 CNAME 文件
2. 配置 DNS 解析
3. 更新 base 配置

## 八、最佳实践

8.1 目录组织


docs/
├── guide/
│   ├── getting-started.md
│   ├── configuration.md
│   └── deployment.md
├── api/
│   ├── introduction.md
│   └── reference.md
└── faq/
    └── common-issues.md


8.2 文档规范

• 使用清晰的标题层级

• 添加代码示例

• 保持语言简洁

• 定期更新内容

• 添加相关链接

8.3 性能优化

• 压缩图片资源

• 使用懒加载

• 启用代码分割

• 配置缓存策略

## 九、故障排除

9.1 常见问题

1. 页面无法访问
   • 检查 base 配置

   • 确认文件路径

   • 查看构建日志

2. 样式不生效
   • 清除浏览器缓存

   • 检查 CSS 加载

   • 验证主题配置

3. 构建失败
   • 检查 Node.js 版本

   • 验证依赖完整性

   • 查看错误信息

9.2 调试技巧

• 使用浏览器开发者工具

• 查看控制台输出

• 检查网络请求

• 验证配置文件语法

## 十、进阶功能

10.1 多语言支持

VitePress 支持国际化配置，可创建多语言文档。

10.2 搜索功能

内置全文搜索，支持中英文混合搜索。

10.3 API 文档

自动从 TypeScript 文件生成 API 文档。

## 十一、学习资源

11.1 官方资源

• 官方文档：https://vitepress.dev/

• GitHub 仓库：https://github.com/vuejs/vitepress

• 社区讨论：https://github.com/vuejs/vitepress/discussions

11.2 社区资源

• 主题市场

• 插件生态

• 最佳实践分享

## 十二、版本更新

12.1 更新命令

# 更新 VitePress
npm update vitepress

# 查看版本
npm list vitepress


12.2 兼容性说明

• 支持 Vue 3

• 需要 Node.js 18+

• 向后兼容性良好

本文档最后更新：{{ new Date().toLocaleDateString() }}  
VitePress 版本：^1.0.0