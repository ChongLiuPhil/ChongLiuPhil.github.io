# AI Agent Collaboration Contract

> This file is the synchronized English mirror of `AGENTS.zh-CN.md`. The Chinese file is normative for repository collaboration rules.

## 1. Repository role

This repository contains the source for the **public academic homepage**. Anything committed here, including text, links, files, and Git history, must be treated as public information.

Private research material, unpublished arguments, private notes, peer-review material, credentials, tokens, or internal coordination data must not be staged here.

## 2. Before working

Read, in order:

1. `HARC_SITE_MANIFEST.yaml`
2. this file / the Chinese canonical contract
3. `docs/COLLABORATION_PROTOCOL.zh-CN.md`
4. `README.zh-CN.md`
5. files directly relevant to the task

If the task publishes material from a private research repository, also read the latest authorization/public metadata in the private `academic-vault`. Existence in a private repository is not publication permission.

## 3. Sources of truth

- public academic content: `app/content.ts`
- presentation: `app/page.tsx`
- SEO / structured metadata: `app/layout.tsx`, with derivable information sourced from `app/content.ts` where practical
- styling: `app/globals.css`
- semantic content validation: `scripts/validate-content.mjs`
- deployment: `.github/workflows/deploy-pages.yml`

Do not maintain a second authoritative copy of site content in README files, Issues, PR descriptions, or chat summaries.

## 4. Repository freshness

Latest GitHub repository state outranks chat memory, session excerpts, and old summaries.

Before high-impact actions or writes to `app/content.ts`, `app/page.tsx`, `app/layout.tsx`, `HARC_SITE_MANIFEST.yaml`, or deployment/validation workflows, fresh-read the current branch revision.

After a repository write, old session copies of touched files are immediately **stale**. Re-read current repository state before relying on them again. If revisions conflict, stop propagation and treat the state as `REVISION-CONFLICT` rather than overwriting newer work.

## 5. Bilingual rule

Substantive public-facing content is maintained as paired Chinese/English data.

- update both languages in the same work cycle;
- do not treat “translate later” as complete;
- if one language cannot be produced reliably, leave the change pending for human confirmation rather than silently publishing asymmetric content;
- preserve stable `id` values unless an intentional migration requires changing them.

For repository documentation, Chinese `*.zh-CN.md` is canonical and the English counterpart is a synchronized mirror.

## 6. Publication boundary

When synchronizing from private projects:

1. confirm explicit intent to publish/update;
2. retrieve only the private material needed for the task;
3. prefer `website.yaml` or approved public metadata in Academic Vault;
4. preserve source revision, approval scope, and publication provenance in the private Academic Vault;
5. do not expose unapproved private repository names, paths, or internal records in public PRs;
6. when scope is ambiguous, disclose less;
7. do not copy draft manuscripts, unpublished arguments, or private work logs unless explicitly requested and suitable for publication;
8. write only curated public expressions into this repository.

## 7. Change strategy

- small copy fixes may be committed directly;
- content-model, navigation, deployment, dependency, publication-boundary, or multi-file structural changes should use a feature branch and PR;
- avoid unrelated cleanup;
- before deleting or renaming public content, check stable IDs and external-link implications.

## 8. Verification

Before structural or public-content work is complete, run the equivalent of:

```bash
npm ci
npm run check
```

`npm run check` should include lint, semantic public-content validation, and a production build. A successful deployment does not by itself validate publication judgment or disclosure scope.

## 9. Relationship to HARC

This repository adopts the HARC principles needed for a public website without copying the full research-governance stack. The homepage is a **derived public presentation layer**, not the durable memory of the research itself.

The reviewed upstream HARC version and revision are pinned in `HARC_SITE_MANIFEST.yaml`. Future HARC changes are not inherited automatically; review them before adoption.

Long-term Working Memory, argument frameworks, unpublished evidence, and private task plans belong in the relevant private repositories or `academic-vault`.
