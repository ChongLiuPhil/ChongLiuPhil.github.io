# Chong Liu — Academic Homepage

<!-- bilingual-home-intro -->
> **English:** The source repository for Chong Liu’s bilingual academic website, presenting a philosophy profile, research agenda, publications, and contact information in English and Chinese.
>
> **中文：** 刘崇双语学术网站的源代码仓库，以中英文呈现哲学研究简介、研究方向、论文成果与联系方式。
<!-- /bilingual-home-intro -->

The source for [chongliuphil.github.io](https://chongliuphil.github.io), a bilingual academic homepage focused on epistemology, philosophy of science, philosophy of language, causation, and consciousness.

## Local preview

```bash
npm install
npm run dev
```

## Publishing

Push the `main` branch to the `ChongLiuPhil/ChongLiuPhil.github.io` repository. The included GitHub Actions workflow builds and publishes the static site automatically.

## Bilingual content model

All editable academic content lives in `app/content.ts`. Each translatable block keeps its English and Chinese text together:

```ts
statement: {
  en: 'Exploring how knowledge is grounded...',
  zh: '关注知识如何成立……',
}
```

Research areas, publications, and timeline entries use stable `id` values so that a future instruction can target one bilingual block without relying on its position. When editing a block, update both `en` and `zh` whenever possible to prevent content drift.

The page offers three presentation modes: `English`, `中文`, and `Both`. English is the default; the visitor's last choice is saved on their device. `Both` stacks the paired passages vertically rather than placing them in columns.

For publications, set `originalLanguage` to `en` or `zh`. Bibliographic titles and venues remain in their original language in single-language modes, while `Both` can expose the paired translation for review.
