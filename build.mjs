// Static site generator: node build.mjs  ->  dist/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './src/data/site.mjs';
import { peptides } from './src/data/peptides.mjs';
import { symptoms } from './src/data/symptoms.mjs';
import { articles } from './src/data/pages.mjs';
import * as T from './src/templates.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const pages = [
  T.homePage(),
  T.symptomsIndexPage(),
  ...symptoms.map(T.symptomPage),
  T.peptidesIndexPage(),
  ...peptides.map(T.profilePage),
  T.evidencePage(),
  T.howToPage(),
  T.aboutPage(),
  T.contactPage(),
  T.faqPage(),
  T.learnIndexPage(),
  ...articles.map(T.articlePage),
  T.unavailablePage(),
  T.notFoundPage(),
];

for (const p of pages) {
  const file = p.path.endsWith('.html')
    ? path.join(dist, p.path)
    : path.join(dist, p.path, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, p.html);
}

fs.cpSync(path.join(root, 'src/assets'), path.join(dist, 'assets'), { recursive: true });

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n${site.siteUrl ? `Sitemap: ${site.siteUrl}/sitemap.xml\n` : ''}`
);
if (site.siteUrl) {
  const urls = pages
    .filter((p) => !p.path.endsWith('.html') && p.path !== '/unavailable/')
    .map((p) => `  <url><loc>${site.siteUrl}${p.path}</loc></url>`)
    .join('\n');
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
}
console.log(`Built ${pages.length} pages -> dist/`);
