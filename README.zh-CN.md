# 刘崇 — 学术主页

[English](README.md) | [中文](README.zh-CN.md)

这是 [chongliuphil.github.io](https://chongliuphil.github.io) 的源代码仓库。该网站是一个中英文双语学术主页，主要展示认识论、科学哲学、语言哲学、因果关系与意识等研究方向。

## 本地预览

```bash
npm install
npm run dev
```

## 发布

将 `main` 分支推送到 `ChongLiuPhil/ChongLiuPhil.github.io` 仓库。仓库内置的 GitHub Actions 工作流会自动构建并发布静态网站。

## 双语内容模型

所有可编辑的学术内容都存放在 `app/content.ts` 中。每一个可翻译内容块都把英文与中文放在一起维护：

```ts
statement: {
  en: 'Exploring how knowledge is grounded...',
  zh: '关注知识如何成立……',
}
```

研究方向、论文和时间线条目都使用稳定的 `id`，这样未来的修改指令可以直接定位到某个双语内容块，而不必依赖其所在位置。修改内容块时，应尽可能同时更新 `en` 和 `zh`，避免两个语言版本逐渐偏离。

网页提供三种显示模式：`English`、`中文` 和 `Both`。访客首次访问时，网站根据浏览器首选语言决定默认显示：首选语言以 `zh` 开头时显示中文，其余情况显示英文；如果无法可靠识别浏览器语言，则默认回退到英文。访客手动选择语言后，该选择会保存在本地，并在之后访问时优先使用。

对于论文条目，请将 `originalLanguage` 设置为 `en` 或 `zh`。在单语言模式下，书目标题和期刊/出版信息保持原始语言；在 `Both` 模式下，可以同时显示对应译文以便核对。
