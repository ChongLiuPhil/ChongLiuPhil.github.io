# AI Agent 协作约定

> 本文件是本仓库 AI 协作规则的中文规范版本；`AGENTS.md` 是英文同步镜像。

## 1. 仓库角色

这是 **公开学术主页** 的源码仓库。任何提交到这里的文件、文本、链接和 Git 历史都应视为公开信息。

私人研究资料、未发表论证、私人笔记、同行评议材料、密钥、令牌或仅用于内部协调的信息不得暂存于本仓库。

## 2. 开始工作前

按顺序读取：

1. `AHICP_MANIFEST.yaml`
2. `AHICP_CONTEXT_INTERFACE.yaml`
3. `HARC_SITE_MANIFEST.yaml`
4. 本文件
5. `docs/COLLABORATION_PROTOCOL.zh-CN.md`
6. `README.zh-CN.md`
7. 与任务直接相关的代码或内容文件

如果任务涉及从私人研究库向主页增加项目或成果，还应读取私人 `academic-vault` 中对应的最新授权/公开元数据。私人仓库中的“存在”不等于允许公开。

## 3. 内容真值源

- 公开学术内容：`app/content.ts`
- 页面结构：`app/page.tsx`
- SEO / structured metadata：`app/layout.tsx`，其中可派生信息应尽量来自 `app/content.ts`
- 样式：`app/globals.css`
- 内容语义校验：`scripts/validate-content.mjs`
- 部署：`.github/workflows/deploy-pages.yml`

不要在 README、Issue、PR 描述或聊天摘要中维护第二份网站内容真值源。

## 4. Repository freshness

GitHub 最新 repository revision 高于聊天记忆、会话摘录和旧 summary。

在高影响操作或写入以下文件前，应重新读取当前 branch 的最新 revision：

- `app/content.ts`
- `app/page.tsx`
- `app/layout.tsx`
- `HARC_SITE_MANIFEST.yaml`
- 部署与验证 workflow

写入后，旧的会话副本立即视为 **stale**。如果后续判断仍依赖被修改文件，应重新读取最新 repository 状态。发现 revision 冲突时停止传播，并按 `REVISION-CONFLICT` 处理，而不是覆盖较新的改动。

## 5. 双语规则

本网站采用中英配对内容模型。对公开可见的实质内容：

- 中文和英文必须在同一工作轮次中同步修改；
- 不得以“之后再翻译”为完成状态；
- 如果无法可靠给出其中一种语言，应保留变更并明确标记待人类确认，而不是静默发布不对称版本；
- 保持稳定 `id`，避免仅因排序或措辞调整改变标识符。

文档层面，中文 `*.zh-CN.md` 是规范基准，英文对应文件是同步镜像。

## 6. 发布边界

从私人项目同步到主页时：

1. 确认用户明确要求公开/更新；
2. 只读取完成任务所需的私人材料；
3. 优先使用项目的 `website.yaml` 或 Academic Vault 中的公开元数据；
4. 在私人 Academic Vault 中保留 source revision、批准范围和发布 provenance；
5. 公共 PR 不应泄露未获批准的私人 repository 名称、路径或内部记录；
6. 如公开范围含糊，采用更窄的披露；
7. 不复制研究草稿全文、未发表论证或私人工作记录，除非用户明确要求且适合公开；
8. 最终只把经过筛选的公开表达写入本仓库。

## 7. 修改策略

- 小型文字修正可直接提交；
- 涉及内容模型、导航、部署、依赖、公开边界或多文件结构的改动应使用 feature branch + PR；
- 不要为了“顺手整理”改动与当前目标无关的页面、措辞或结构；
- 删除/重命名已有公开内容前先检查外部链接与稳定 ID 影响。

## 8. 验证

结构性或公开内容修改完成前至少运行等价检查：

```bash
npm ci
npm run check
```

`npm run check` 应覆盖 lint、公开内容语义校验和生产构建。部署工作流成功不自动证明内容判断或公开范围正确。

## 9. 与 HARC 的关系

本仓库采用 HARC 的关键协作原则，但不复制完整研究项目治理结构。主页是 **派生的公开展示层**，不是研究长期记忆本身。

当前采用的 HARC 上游版本与 revision 记录在 `HARC_SITE_MANIFEST.yaml`。HARC 未来升级不会自动改变本仓库规则；必须先审阅，再决定是否采用。

长期研究 Working Memory、论证框架、未公开证据和私人任务计划应留在对应私人项目或 `academic-vault`。


## 10. Current Stack

AHICP 是当前协议入口；`HARC_SITE_MANIFEST.yaml` 继续作为兼容与项目原生 public-site governance 接口。PPF 映射既有 GitHub Pages 生产生命周期。采用 Stack 不新增公开内容，不授权私人研究材料进入主页，也不启动 Cloudflare cutover。
