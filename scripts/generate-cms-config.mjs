// scripts/generate-cms-config.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const branch = process.env.CF_PAGES_BRANCH || 'blog'; // local dev fallback
const template = readFileSync('config.template.yml', 'utf-8');
const output = template.replace('__CMS_BRANCH__', branch);

mkdirSync('public/admin', { recursive: true });
writeFileSync('public/admin/config.yml', output);

console.log(`✔ Generated public/admin/config.yml with branch: ${branch}`);