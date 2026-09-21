# START HERE — 学术主页

[English](START_HERE.md) | [中文](START_HERE.zh-CN.md)

这是公开学术主页的零上下文接管入口。本仓库中的任何内容都应视为公开信息。

## 最小读取顺序

1. `AHICP_MANIFEST.yaml`
2. `AHICP_CONTEXT_INTERFACE.yaml`
3. `HARC_SITE_MANIFEST.yaml`
4. `AGENTS.zh-CN.md`
5. `docs/COLLABORATION_PROTOCOL.zh-CN.md`
6. `README.zh-CN.md`
7. 与任务相关的公开内容/页面/部署文件

## 权威

- 公开学术内容：`app/content.ts`
- 页面：`app/page.tsx`
- SEO / structured metadata：`app/layout.tsx`
- 样式：`app/globals.css`
- 语义验证：`scripts/validate-content.mjs`
- 部署：`.github/workflows/deploy-pages.yml`

## 发布边界

这是已获授权的 public presentation layer；当前生产 provider 是 GitHub Pages，网址为 `https://chongliuphil.github.io/`。Cloudflare 只是 planned target。

从私人项目新增或更新公开内容时，必须先取得明确 publication intent，并只使用经过批准的 public metadata。不要把 Academic Vault 的私人 Working Memory、内部路径、未发表论证或未批准材料复制到本仓库。
