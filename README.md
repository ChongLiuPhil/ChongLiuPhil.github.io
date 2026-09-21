# Chong Liu — Academic Homepage

[English](README.md) | [中文](README.zh-CN.md)

The source for [chongliuphil.github.io](https://chongliuphil.github.io), a bilingual academic homepage for philosophical research spanning epistemology, causation and scientific explanation, language and reference, consciousness, AI and epistemic agency, formal reasoning, and research methodology. The public-work section lists only already-public projects; unpublished research is represented only at the level of broad fields and research questions.

## AI / current Stack collaboration entry point

This repository uses a lightweight HARC-compatible collaboration layer. Before substantive edits, a new AI agent or automated editor should read:

1. `AHICP_MANIFEST.yaml`
2. `AHICP_CONTEXT_INTERFACE.yaml`
3. `HARC_SITE_MANIFEST.yaml`
4. `AGENTS.zh-CN.md`
5. `docs/COLLABORATION_PROTOCOL.zh-CN.md`
6. this README
7. source/content files directly relevant to the task

The homepage is a **public presentation layer**, not private research memory. When synchronizing from private projects or `academic-vault`, explicit publication intent is required and only curated public expressions should be written here.

## Local preview and verification

```bash
npm install
npm run dev
```

Before structural work is complete, run:

```bash
npm ci
npm run check
```

`npm run check` runs lint, semantic validation of public academic content, and a production build. The semantic validator checks stable IDs, bilingual fields, navigation parity, research-area numbering, and public links.

## Publishing

The `main` branch is built and deployed automatically with GitHub Actions. Pull requests run verification without deployment; only non-PR builds from `main` proceed to GitHub Pages deployment.

## Bilingual content model

All editable academic content lives in `app/content.ts`. Each translatable block keeps English and Chinese together:

```ts
statement: {
  en: 'Exploring how knowledge is grounded...',
  zh: '关注知识如何成立……',
}
```

Research areas, publications, and timeline entries use stable `id` values so future edits can target a bilingual block without relying on position.

**Substantive public-facing changes must update `en` and `zh` in the same work cycle.** “Translate later” is not treated as complete; if one language needs human confirmation, keep the change pending rather than silently publishing asymmetric content.

The page offers three presentation modes: `English`, `中文`, and `Both`. On a visitor's first visit, the site uses the browser's preferred language: Chinese when the preferred language begins with `zh`, and English otherwise. If browser-language detection is unavailable or ambiguous, English is the fallback. A visitor's explicit choice is saved locally and takes precedence on later visits.

For publications, set `originalLanguage` to `en` or `zh`. Bibliographic titles and venues remain in their original language in single-language modes, while `Both` can expose the paired translation for review.
