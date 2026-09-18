import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import * as ts from 'typescript';

const root = process.cwd();
const sourcePath = path.join(root, 'app', 'content.ts');
const source = fs.readFileSync(sourcePath, 'utf8');

const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
  fileName: sourcePath,
});

const moduleRecord = { exports: {} };
const sandbox = {
  exports: moduleRecord.exports,
  module: moduleRecord,
};
vm.runInNewContext(outputText, sandbox, { filename: sourcePath });

const { academicContent, interfaceCopy } = moduleRecord.exports;
const errors = [];

function error(message) {
  errors.push(message);
}

function assertNonEmptyString(value, location) {
  if (typeof value !== 'string' || value.trim() === '') {
    error(`${location} must be a non-empty string`);
  }
}

function validateBilingual(value, location) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return;

  const hasZh = Object.prototype.hasOwnProperty.call(value, 'zh');
  const hasEn = Object.prototype.hasOwnProperty.call(value, 'en');
  const stringLikePair = typeof value.zh === 'string' || typeof value.en === 'string';

  if ((hasZh || hasEn) && stringLikePair) {
    assertNonEmptyString(value.zh, `${location}.zh`);
    assertNonEmptyString(value.en, `${location}.en`);
  }

  for (const [key, child] of Object.entries(value)) {
    if (child && typeof child === 'object') {
      validateBilingual(child, `${location}.${key}`);
    }
  }
}

function validateUrl(href, location, { allowRelative = false } = {}) {
  if (allowRelative && typeof href === 'string' && href.startsWith('/')) return;
  try {
    const url = new URL(href);
    if (!['https:', 'http:'].includes(url.protocol)) {
      error(`${location} must use http or https`);
    }
  } catch {
    error(`${location} is not a valid URL: ${String(href)}`);
  }
}

function validateLinks(links, location) {
  for (const [index, link] of (links ?? []).entries()) {
    validateUrl(link.href, `${location}[${index}].href`);
  }
}

if (!academicContent || !interfaceCopy) {
  error('app/content.ts must export academicContent and interfaceCopy');
} else {
  if (academicContent.schemaVersion !== 1) {
    error('academicContent.schemaVersion must remain 1 until an intentional migration is performed');
  }

  const idCollections = [
    ['researchAreas', academicContent.researchAreas],
    ['publications', academicContent.publications],
    ['publicEducationProjects', academicContent.publicEducationProjects],
    ['experience', academicContent.experience],
    ['education', academicContent.education],
  ];

  const seenIds = new Map();
  for (const [section, items] of idCollections) {
    for (const [index, item] of (items ?? []).entries()) {
      assertNonEmptyString(item.id, `academicContent.${section}[${index}].id`);
      if (typeof item.id === 'string' && !/^[a-z0-9][a-z0-9-]*$/.test(item.id)) {
        error(`academicContent.${section}[${index}].id must be a stable kebab-case identifier`);
      }
      if (seenIds.has(item.id)) {
        error(`duplicate public id "${item.id}" in ${section}; first seen in ${seenIds.get(item.id)}`);
      } else {
        seenIds.set(item.id, section);
      }
    }
  }

  const seenNumbers = new Set();
  for (const [index, area] of academicContent.researchAreas.entries()) {
    assertNonEmptyString(area.number, `academicContent.researchAreas[${index}].number`);
    if (seenNumbers.has(area.number)) {
      error(`duplicate research-area number "${area.number}"`);
    }
    seenNumbers.add(area.number);
  }

  validateBilingual(academicContent, 'academicContent');
  validateBilingual(interfaceCopy, 'interfaceCopy');

  const navEn = interfaceCopy.en?.nav ?? [];
  const navZh = interfaceCopy.zh?.nav ?? [];
  if (navEn.length !== navZh.length) {
    error('English and Chinese navigation must have the same number of items');
  }
  for (let index = 0; index < Math.max(navEn.length, navZh.length); index += 1) {
    const en = navEn[index];
    const zh = navZh[index];
    if (!en || !zh) continue;
    assertNonEmptyString(en.label, `interfaceCopy.en.nav[${index}].label`);
    assertNonEmptyString(zh.label, `interfaceCopy.zh.nav[${index}].label`);
    if (en.href !== zh.href) {
      error(`navigation href mismatch at index ${index}: ${en.href} vs ${zh.href}`);
    }
  }

  const checklistEn = interfaceCopy.en?.checklist ?? [];
  const checklistZh = interfaceCopy.zh?.checklist ?? [];
  if (checklistEn.length !== checklistZh.length) {
    error('English and Chinese checklist arrays must have the same number of items');
  }

  validateLinks(academicContent.profile.externalLinks, 'academicContent.profile.externalLinks');
  if (academicContent.profile.cvHref) {
    validateUrl(academicContent.profile.cvHref, 'academicContent.profile.cvHref', { allowRelative: true });
  }
  for (const [index, publication] of academicContent.publications.entries()) {
    validateLinks(publication.links, `academicContent.publications[${index}].links`);
  }
  for (const [index, project] of academicContent.publicEducationProjects.entries()) {
    validateLinks(project.links, `academicContent.publicEducationProjects[${index}].links`);
  }

  if (academicContent.profile.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(academicContent.profile.email)) {
    error('academicContent.profile.email is not a valid email address');
  }
}

if (errors.length > 0) {
  console.error('Content validation failed:');
  for (const message of errors) console.error(`- ${message}`);
  process.exit(1);
}

console.log('Content validation passed.');
console.log('Checked stable IDs, bilingual parity, navigation parity, research numbering, links, and profile email.');
