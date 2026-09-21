# Current AHICP / Inquiry Publishing Stack Adoption — 学术主页

本仓库采用 current AHICP 作为公开展示层的当前协作协议入口，同时保留既有 HARC site governance 与公开内容权威结构。

## Stack v2 revisions

- AHICP template: `02d0b3c02ca23073c760b6e0f761a468e0235a1c`; project adopted: `ed5a60b1016497472072db108072ace59bcdb65d`
- PPF template: `9a6005de85f032095e36eea03fda317e73126538`; project adopted: `e660b48fb216c28c8faa1f0fe2d0816401e1de2c`
- Vault template: `592c6e2e938f995b7b3e7df07a72f7f1e2c50c5a`; project adopted: `79d64b12275a5cc7c09236b144bf4213fa7afc5e`
- Starter source revision: `05857086e240cbd269eae91af8419ea0921c01fa`

## Functional mapping

| Stack role | 本项目权威 |
| --- | --- |
| Public content | `app/content.ts` |
| Presentation | `app/page.tsx` + `app/globals.css` |
| SEO / structured metadata | `app/layout.tsx` |
| Public-content validation | `scripts/validate-content.mjs` |
| Collaboration/public boundary | `HARC_SITE_MANIFEST.yaml` + `AGENTS.zh-CN.md` + collaboration protocol |
| Current deployment | `.github/workflows/deploy-pages.yml` |
| Public metadata | `website.yaml` |

不创建研究型 Content Core、Form Core、Framework Status、Argument Map 或私人 Working Memory。主页是派生 public presentation layer。

## Publication actual state

- repository: public
- `website.yaml publish=true`
- provider: GitHub Pages
- production URL: `https://chongliuphil.github.io/`
- automatic deploy: main push
- PR behavior: build/verify only, no deploy
- Cloudflare Workers: planned target only, not active

采用 Stack 不新增公开内容，也不授权任何私人项目材料进入主页。新的私人项目公开内容仍必须经过项目本地 public metadata / Academic Vault publication authorization。
