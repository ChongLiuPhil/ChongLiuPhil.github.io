# 学术主页协作协议

本文件把 HARC 的核心协作原则适配到个人学术主页。目标不是把主页变成完整研究仓库，而是让不同 AI Agent 或编辑工具能够在不依赖旧聊天记录的情况下安全续接维护。

## 架构

```text
private research repositories
        +
academic-vault (private coordination / publication decisions)
        |
        | explicit publication intent
        v
ChongLiuPhil.github.io (public presentation layer)
        |
        v
GitHub Pages
```

## 三类修改

### CONTENT
公开学术信息本身发生变化，例如研究方向、项目、论文、教育资源、个人简介。

主要真值源：`app/content.ts`。

### FORM
页面结构、视觉样式、导航和展示行为发生变化。

主要文件：`app/page.tsx`、`app/globals.css`。

### PROTOCOL
协作方式、发布边界、验证要求或 Agent 行为发生变化。

主要文件：`HARC_SITE_MANIFEST.yaml`、`AGENTS.zh-CN.md` 和本文件。

一项任务可以同时属于多类。

## 人类授权

AI 可以整理、翻译、提取和实现，但以下事情不能靠 AI 推断完成：

- 把私人研究项目变成公开项目；
- 把未公开论证写入主页；
- 把一个普通项目提升为“代表作”；
- 改变作者对研究方向的实质性自我描述；
- 把私人履历或联系方式公开。

这些都需要明确的人类意图。

## 持久状态

主页不保存完整 HARC Working Memory，因为该仓库公开。

需要长期保留但不应公开的：

- 网站待办；
- 尚未决定是否发布的项目；
- 私人项目状态；
- 公开范围讨论；
- 未公开履历信息；

应保存在 `academic-vault` 或相应私人项目中。

本仓库只保存理解、维护和验证公开网站所必需的公共协作信息。

## 完成标准

一次实质性修改至少满足：

1. 公私边界已检查；
2. 中文和英文已同步；
3. 稳定 ID 没有无意改变；
4. 相关页面行为与链接已检查；
5. `npm run check` 通过；
6. 高影响修改经过 branch / PR 审阅；
7. 如果任务来自私人项目，只发布了明确允许公开的内容。

## HARC 上游版本

本仓库参考：
`ChongLiuPhil/Human-AI-Research-Collaboration-Protocol`

不自动继承该仓库未来所有规则。若 HARC 上游有实质升级，应先审阅其影响，再决定是否更新本网站的协作层。
