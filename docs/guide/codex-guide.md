# Codex 安装、配置与运行手册

本手册面向第一次接触 Codex 的同学，目标是让你在 10-20 分钟内完成安装并跑通一次完整流程。

## 1. Codex 是什么

Codex 是一个 AI 编程助手工作环境，可以在本地项目中完成：

- 代码阅读与重构
- Bug 排查与修复
- 文档编写与维护
- 自动化脚本与工程化任务

## 2. 环境准备

在安装 Codex 前，请先确认：

- 已安装 Git（用于代码仓库操作）
- 已安装 Node.js（建议 18+）
- 有可用的 OpenAI API Key

你可以用以下命令检查：

```bash
git --version
node -v
```

## 3. 安装 Codex

> 说明：Codex 可能有 CLI 和桌面端两种形态，你可以按团队使用习惯选择。

### 3.1 方式 A：使用 npm 全局安装（CLI）

```bash
npm install -g <codex-cli-package-name>
```

安装后验证：

```bash
codex --version
```

### 3.2 方式 B：桌面端安装

1. 下载并安装 Codex Desktop。
2. 首次启动后，选择本地工作目录（Workspace）。
3. 在设置页完成 API 凭据绑定。

## 4. 配置 Codex

## 4.1 配置 API Key（推荐环境变量）

### Windows PowerShell（当前会话）

```powershell
$env:OPENAI_API_KEY="你的_api_key"
```

### macOS / Linux（当前会话）

```bash
export OPENAI_API_KEY="你的_api_key"
```

如果要持久化，请写入 shell 配置文件（如 `.bashrc`、`.zshrc`）。

## 4.2 常见配置项

根据团队规范，你可能还会配置：

- 默认模型（如通用模型、推理模型）
- 推理强度（reasoning effort）
- 默认工作目录（workspace）
- 输出语言（中文/英文）

## 5. 运行与基本使用

## 5.1 在项目目录启动

```bash
cd your-project
codex
```

## 5.2 常见使用流程

1. 先让 Codex 熟悉项目：

```text
熟悉一下这个项目
```

2. 提具体任务：

```text
帮我定位登录模块的状态管理问题并修复
```

3. 让 Codex 验证结果：

```text
跑一下测试并告诉我失败原因
```

4. 最后让它总结变更：

```text
总结一下你改了哪些文件，风险点是什么
```

## 6. 推荐工作习惯

- 给明确目标：功能、范围、约束条件一次说清
- 让它“先读后改”：先梳理上下文，再动代码
- 每次改动后都做验证：构建、测试、关键路径回归
- 大改动分步骤进行：避免一次改太多难以回滚

## 7. 常见问题排查

## 7.1 命令不可用

现象：`codex` 或 `npm` 无法执行。  
处理：检查 PATH、终端权限、PowerShell 执行策略。

## 7.2 API Key 无效

现象：请求认证失败。  
处理：确认 Key 是否有效、是否有多余空格、环境变量是否生效。

## 7.3 依赖安装失败

现象：`npm install` 超时或报网络错误。  
处理：检查网络代理设置，必要时切换 npm registry。

## 7.4 构建通过但页面异常

处理：检查路由 `base`、静态资源路径和部署目录是否一致。

## 8. 团队协作建议

- 把高频提示词沉淀为模板（例如“修复 bug 模板”）
- 在 PR 描述中附上 Codex 改动摘要
- 关键模块开启 Code Review，不直接跳过人工确认

## 9. 快速检查清单

- [ ] 已安装并能执行 `codex --version`
- [ ] 已配置 `OPENAI_API_KEY`
- [ ] 能在项目目录启动 Codex
- [ ] 能完成一次“读代码 -> 改代码 -> 验证”的闭环

完成以上四项后，你就可以把 Codex 稳定纳入日常开发流程。
