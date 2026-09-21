# START HERE — Academic Homepage

[English](START_HERE.md) | [中文](START_HERE.zh-CN.md)

This is the zero-context entry for the public academic homepage. Anything committed here is public.

## Minimum read order

1. `AHICP_MANIFEST.yaml`
2. `AHICP_CONTEXT_INTERFACE.yaml`
3. `HARC_SITE_MANIFEST.yaml`
4. `AGENTS.zh-CN.md`
5. `docs/COLLABORATION_PROTOCOL.zh-CN.md`
6. `README.md`
7. task-relevant public content, presentation, or deployment files

## Authority

- public academic content: `app/content.ts`
- presentation: `app/page.tsx`
- SEO / structured metadata: `app/layout.tsx`
- styles: `app/globals.css`
- semantic validation: `scripts/validate-content.mjs`
- deployment: `.github/workflows/deploy-pages.yml`

## Publication boundary

This is an already-authorized public presentation layer. Current production is GitHub Pages at `https://chongliuphil.github.io/`; Cloudflare is only a planned target.

New or changed material sourced from private projects still requires explicit publication intent and approved public metadata. Do not copy private Vault Working Memory, internal paths, unpublished arguments, or unapproved material into this repository.
