import { site, nav, footerLinks, footerDisclaimer, heroDisclaimer } from './data/site.mjs';
import { labels, topics, peptides, bySlug } from './data/peptides.mjs';
import { symptoms, symptomIntro } from './data/symptoms.mjs';
import * as P from './data/pages.mjs';
import { esc, rich, linkPeptides, sourcesSection, icon, chainDivider } from './lib.mjs';

/* =========================================================
   Shared components
   ========================================================= */

const newCtx = () => ({ cites: new Set() });
const { symptomEnding } = P;

export function btn({ label, href, primary = false, light = false, arrow = true }) {
  const cls = ['btn', primary ? 'btn--primary' : 'btn--secondary', light ? 'btn--light' : ''].join(' ').trim();
  return `<a class="${cls}" href="${esc(href)}"><span>${esc(label)}</span>${arrow ? icon('arrow', { size: 20, cls: 'btn__arrow' }) : ''}</a>`;
}

const ctaRow = (items, opts = {}) =>
  `<div class="cta-row${opts.center ? ' cta-row--center' : ''}">${items.map((i) => btn({ ...i, light: opts.light })).join('')}</div>`;

export function chip(labelKey, text) {
  const l = labels[labelKey];
  return `<span class="chip chip--${l.key}">${icon(l.key, { size: 16 })}<span>${esc(text || l.name)}</span></span>`;
}

const logoImg = (cls = '') =>
  `<img class="${cls}" src="/assets/img/logo.png" width="691" height="519" alt="Femalin Peptides">`;

function breadcrumb(trail) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${trail
    .map((t, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${esc(t.label)}</li>`
        : `<li><a href="${esc(t.href)}"${t.listLink ? ' data-list-link' : ''}>${esc(t.label)}</a></li>`
    )
    .join('')}</ol></nav>`;
}

/** “Where would you like to go next?” — self-links are swapped for Contact Femalin. */
function universalEnding(currentPath) {
  const links = P.universalEnding.links.map((l) =>
    l.href === currentPath ? { label: 'Contact Femalin', href: '/contact/' } : l
  );
  return `<section class="band band--wash ending" aria-labelledby="next-h">
  <div class="wrap wrap--narrow center">
    ${chainDivider()}
    <h2 id="next-h" class="h-section">${esc(P.universalEnding.heading)}</h2>
    <p class="lead">${esc(P.universalEnding.body)}</p>
    ${ctaRow(links.map((l, i) => ({ ...l, primary: i === 0 })), { center: true })}
  </div>
</section>`;
}

function ctaBand({ id, heading, body, ctas, deep = false }) {
  return `<section class="band ${deep ? 'band--deep' : 'band--wash'} ending" aria-labelledby="${id}">
  <div class="wrap wrap--narrow center">
    ${deep ? '' : chainDivider()}
    <h2 id="${id}" class="h-section">${esc(heading)}</h2>
    ${body ? `<p class="lead">${esc(body)}</p>` : ''}
    ${ctaRow(ctas, { center: true, light: deep })}
  </div>
</section>`;
}

/* =========================================================
   Layout
   ========================================================= */

export function layout({ path, title, description, body, noindex = false, ctx }) {
  const url = site.siteUrl ? site.siteUrl + path : '';
  const section = (nav.find((n) => path.startsWith(n.href) && n.href !== '/') || {}).href;
  const navItems = nav
    .map(
      (n) =>
        `<li><a href="${n.href}"${n.href === section ? ' aria-current="true" class="is-active"' : ''}>${esc(n.label)}</a></li>`
    )
    .join('');
  return `<!doctype html>
<html lang="en-CA" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
${url ? `<link rel="canonical" href="${esc(url)}">` : ''}
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
${url ? `<meta property="og:url" content="${esc(url)}">` : ''}
<meta name="theme-color" content="#87537F">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/fraunces-latin-soft-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/figtree-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/styles.css">
<script>document.documentElement.className='js';</script>
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>
<header class="site-header">
  <div class="wrap site-header__inner">
    <a class="brand" href="/" aria-label="Femalin Peptides — home">${logoImg('brand__logo')}</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
      <span class="nav-toggle__open">${icon('menu', { size: 24 })}</span>
      <span class="nav-toggle__close">${icon('close', { size: 24 })}</span>
      <span class="sr-only">Menu</span>
    </button>
    <div class="site-nav" id="site-nav">
      <nav aria-label="Primary"><ul>${navItems}</ul></nav>
      <a class="btn btn--primary btn--small" href="/contact/"><span>Contact Femalin</span></a>
    </div>
  </div>
</header>
<main id="main" tabindex="-1">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="site-footer__top">
      <div class="site-footer__brand">
        <a href="/" aria-label="Femalin Peptides — home">${logoImg('footer__logo')}</a>
        <p class="footer-tag">Femalin Peptides. ${esc(site.tagline)}</p>
      </div>
      <nav aria-label="Footer"><ul class="footer-links">${footerLinks
        .map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`)
        .join('')}</ul></nav>
    </div>
    <p class="site-footer__legal">${esc(footerDisclaimer)}</p>
    <p class="site-footer__copy">© 2026 ${esc(site.name)}</p>
  </div>
</footer>
<script src="/assets/js/main.js" defer></script>
${path === '/peptides/' ? '<script src="/assets/js/peptides.js" defer></script>' : ''}
${path === '/contact/' ? `<script>window.FEMALIN_CONFIG=${JSON.stringify({ formEndpoint: site.formEndpoint })};</script><script src="/assets/js/contact.js" defer></script>` : ''}
</body>
</html>`;
}

const page = (path, title, description, body, extra = {}) => ({
  path,
  html: layout({ path, title, description, body, ...extra }),
});

const reviewLine = () =>
  site.review
    ? `Last reviewed ${esc(site.review.date)} by ${esc(site.review.reviewer)}.`
    : `Content prepared ${esc(site.preparedDate)}.`;

/* =========================================================
   Pages
   ========================================================= */

export function homePage() {
  const ctx = newCtx();
  const h = P.home;
  const conc = symptoms
    .map((s) => `<li><a class="pill" href="/symptoms/${s.slug}/">${esc(s.concern)}</a></li>`)
    .join('');
  const body = `
<section class="hero">
  <div class="wrap hero__grid">
    <div class="hero__copy">
      <p class="eyebrow">${esc(h.hero.brandLine)}</p>
      <h1 class="h-display">${esc(h.hero.heading)}</h1>
      <p class="lead lead--large">${esc(h.hero.body)}</p>
      ${ctaRow([
        { label: 'Find your symptoms', href: '/symptoms/', primary: true },
        { label: 'View the peptide list', href: '/peptides/' },
      ])}
      <p class="fine">${icon('info', { size: 18 })}<span>${esc(heroDisclaimer)}</span></p>
    </div>
    <div class="hero__art hero-photo">
      <span class="hero-photo__blob" aria-hidden="true"></span>
      <figure class="hero-photo__main"><img src="/assets/img/photos/vials.webp" width="1170" height="730" fetchpriority="high" alt="Three Femalin Peptides vials labelled BPC-157, GHK-Cu and KPV on travertine stone with dried lilac"></figure>
      <figure class="hero-photo__inset"><img src="/assets/img/photos/kit-round.webp" width="520" height="520" loading="lazy" alt="Femalin vials in a pink and white storage case beside a green plant"></figure>
      <span class="hero-photo__sprig" aria-hidden="true">${chainDivider()}</span>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="paths-h">
  <div class="wrap">
    <div class="paths">
      <article class="card card--feature">
        <span class="card__icon">${icon('focus', { size: 28 })}</span>
        <h2 id="paths-h" class="h-section">${esc(h.paths.heading)}</h2>
        <p>${esc(h.paths.body)}</p>
        <ul class="pill-list" aria-label="Concerns you can explore">${conc}</ul>
        ${ctaRow([{ label: h.paths.a.cta, href: h.paths.a.href, primary: true }])}
      </article>
      <article class="card card--feature card--tint">
        <span class="card__icon">${icon('search', { size: 28 })}</span>
        <h2 class="h-section">${esc(h.paths.b.heading)}</h2>
        <p>${esc(h.paths.b.body)}</p>
        <form class="home-search" action="/peptides/" method="get" role="search">
          <label for="home-q">${esc(P.peptidesIndex.searchLabel)}</label>
          <div class="home-search__row">
            <input id="home-q" name="q" type="search" autocomplete="off" placeholder="e.g. GHK-Cu, PT-141, TA-1">
            <button class="btn btn--primary" type="submit"><span>Search</span></button>
          </div>
        </form>
        ${ctaRow([{ label: h.paths.b.cta, href: h.paths.b.href }])}
      </article>
    </div>
  </div>
</section>

<section class="band band--wash" aria-labelledby="science-h">
  <div class="wrap wrap--split">
    <div>
      <h2 id="science-h" class="h-section">${esc(h.science.heading)}</h2>
      <p class="lead">${rich(h.science.body, ctx)}</p>
      ${ctaRow([{ label: h.science.cta, href: h.science.href, primary: true }])}
    </div>
    <ul class="label-stack" aria-label="The four evidence labels">
      ${Object.values(labels)
        .map((l) => `<li>${chip(l.key)}<span>${esc(l.definition.split('. ')[0].replace(/\.$/, ''))}.</span></li>`)
        .join('')}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="questions-h">
  <div class="wrap">
    <h2 id="questions-h" class="h-section center">${esc(h.questions.heading)}</h2>
    <ul class="question-grid">
      ${h.questions.items.map((q, i) => `<li class="card"><span class="question-grid__n" aria-hidden="true">${i + 1}</span><p>${esc(q)}</p></li>`).join('')}
    </ul>
    <p class="lead center">${esc(h.questions.closing)}</p>
  </div>
</section>

${ctaBand({
  id: 'bottom-h',
  heading: h.bottom.heading,
  body: h.bottom.body,
  deep: true,
  ctas: [
    { label: 'Explore symptoms', href: '/symptoms/', primary: true },
    { label: 'Browse all peptides', href: '/peptides/' },
    { label: 'Contact Femalin', href: '/contact/' },
  ],
})}
${sourcesSection(ctx)}`;
  return page('/', P.home.title, P.home.description, body);
}

/* ---------- Symptoms ---------- */

export function symptomsIndexPage() {
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'Symptoms' }])}
    <h1 class="h-page">${esc(symptomIntro.heading)}</h1>
    <p class="lead">${esc(symptomIntro.body)}</p>
    <p class="callout">${icon('info', { size: 22 })}<span>${esc(symptomIntro.note)}</span></p>
  </div>
</section>
<section class="section section--tight" aria-label="Choose your concern">
  <div class="wrap">
    <h2 class="sr-only">Choose your concern</h2>
    <ul class="tile-grid">
      ${symptoms
        .map(
          (s) => `<li><a class="tile" href="/symptoms/${s.slug}/">
        <span class="tile__icon">${icon(s.icon, { size: 30 })}</span>
        <span class="tile__title">${esc(s.concern)}</span>
        <span class="tile__text">${esc(s.card)}</span>
        <span class="tile__go">Explore ${icon('arrow', { size: 18 })}</span>
      </a></li>`
        )
        .join('')}
    </ul>
  </div>
</section>
${ctaBand({
  id: 'sym-bottom-h',
  heading: 'Your concern is not listed?',
  body: symptomIntro.bottom.replace(/^Your concern is not listed\?\s*/, ''),
  ctas: [
    { label: 'View all peptides', href: '/peptides/', primary: true },
    { label: 'Contact Femalin', href: '/contact/' },
  ],
})}`;
  return page('/symptoms/', P.symptomsIndexMeta.title, P.symptomsIndexMeta.description, body);
}

export function symptomPage(s) {
  const ctx = newCtx();
  const reading = linkPeptides(s.reading, ctx);
  const profileChips = reading.slugs
    .map((slug) => {
      const p = bySlug[slug];
      return `<li><a class="mini-profile" href="/peptides/${p.slug}/"><strong>${esc(p.aka || p.name)}</strong>${chip(p.labelKey, p.labelText)}</a></li>`;
    })
    .join('');
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'Symptoms', href: '/symptoms/' }, { label: s.concern }])}
    <p class="eyebrow eyebrow--icon">${icon(s.icon, { size: 22 })}<span>${esc(s.concern)}</span></p>
    <h1 class="h-page">${esc(s.heading)}</h1>
    ${s.body.map((t) => `<p class="lead">${rich(t, ctx)}</p>`).join('')}
  </div>
</section>
<section class="section section--tight">
  <div class="wrap wrap--narrow stack">
    <div class="split-cards${s.ask ? '' : ' split-cards--single'}">
      <article class="card">
        <h2 class="h-small">Relevant reading</h2>
        <p>${reading.html}</p>
        ${profileChips ? `<ul class="mini-profiles">${profileChips}</ul>` : ''}
      </article>
      ${
        s.ask
          ? `<article class="card card--tint">
        <h2 class="h-small">Ask your clinician</h2>
        <ul class="check-list">${s.ask.map((q) => `<li>${icon('check', { size: 18 })}<span>${esc(q)}</span></li>`).join('')}</ul>
      </article>`
          : ''
      }
    </div>
    <p class="fine fine--block">${icon('info', { size: 18 })}<span>${esc(symptomIntro.note)}</span></p>
    ${ctaRow(s.ctas)}
  </div>
</section>
${ctaBand({ id: 'sym-end-h', heading: symptomEnding.heading, body: symptomEnding.body, ctas: symptomEnding.links.map((l, i) => ({ ...l, primary: i === 0 })) })}
${sourcesSection(ctx)}`;
  return page(
    `/symptoms/${s.slug}/`,
    `${s.concern} and Peptide Research | Femalin`,
    `${s.heading} ${s.body[0].replace(CITES, '')}`.slice(0, 300).replace(/\s+\S*$/, '…'),
    body
  );
}
const CITES = /\s*\[[\d,–\- ]+\]/g;

/* ---------- Peptide directory ---------- */

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

export function peptidesIndexPage() {
  const d = P.peptidesIndex;
  const cards = peptides
    .map((p) => {
      const names = [p.name, p.aka, ...p.aliases].filter(Boolean);
      return `<li class="pep-card" data-name="${esc(p.name)}" data-search="${esc(names.map(norm).join(' '))}" data-label="${p.labelKey}" data-topics="${p.topics.join(' ')}">
  <a class="pep-card__link" href="/peptides/${p.slug}/">
    <span class="pep-card__top"><h3 class="pep-card__name">${esc(p.aka || p.name)}</h3>${chip(p.labelKey, p.labelText)}</span>
    <span class="pep-card__related"><span class="pep-card__k">Related reading</span>${esc(p.related)}</span>
    <span class="pep-card__go">Read the profile ${icon('arrow', { size: 18 })}</span>
  </a>
</li>`;
    })
    .join('');

  const labelBtns = [
    `<button type="button" class="seg" data-label="all" aria-pressed="true">All entries</button>`,
    ...Object.values(labels).map(
      (l) => `<button type="button" class="seg" data-label="${l.key}" aria-pressed="false">${esc(l.filter)}</button>`
    ),
  ].join('');
  const topicBtns = Object.entries(topics)
    .map(([k, v]) => `<button type="button" class="pill pill--btn" data-topic="${k}" aria-pressed="false">${esc(v)}</button>`)
    .join('');

  const body = `
<section class="page-head">
  <div class="wrap">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'List of peptides' }])}
    <div class="page-head__split">
      <div>
        <h1 class="h-page">${esc(d.heading)}</h1>
        <p class="lead">${esc(d.lead)}</p>
      </div>
      <figure class="leaf-photo"><img src="/assets/img/photos/boxes.webp" width="1170" height="706" alt="Femalin Peptides boxes for GHK-Cu, BPC-157 and KPV with a KPV vial, on stone"></figure>
    </div>
  </div>
</section>

<section class="section section--tight" aria-label="Peptide library">
  <div class="wrap">
    <div class="directory-tools">
      <form class="search" role="search" onsubmit="return false">
        <label for="pep-q" class="search__label">${esc(d.searchLabel)}</label>
        <div class="search__field">${icon('search', { size: 22 })}<input id="pep-q" type="search" autocomplete="off" placeholder="e.g. PT-141, Epithalon, TA-1" spellcheck="false"></div>
      </form>
      <div class="filters" data-js-only>
        <div class="filter-group" role="group" aria-labelledby="f1">
          <span class="filter-title" id="f1">Evidence context</span>
          <div class="seg-row">${labelBtns}</div>
        </div>
        <div class="filter-group" role="group" aria-labelledby="f2">
          <span class="filter-title" id="f2">Concern</span>
          <div class="pill-row">${topicBtns}</div>
        </div>
        <button type="button" class="link-btn" id="clear-filters" hidden>Clear filters</button>
      </div>
    </div>

    <h2 class="sr-only">Peptide library, A–Z</h2>
    <p class="result-count" id="result-count" role="status" aria-live="polite">Showing all ${peptides.length} peptides, A–Z</p>

    <ul class="pep-grid" id="pep-grid">${cards}</ul>

    <div class="empty" id="empty-name" hidden>
      <h2 class="h-small">${esc(d.empty.heading)}</h2>
      <p>${esc(d.empty.body)}</p>
      <div class="cta-row">
        <button type="button" class="btn btn--primary" data-reset><span>Clear filters</span>${icon('arrow', { size: 20, cls: 'btn__arrow' })}</button>
        <a class="btn btn--secondary" href="/peptides/" data-reset><span>Browse all peptides</span>${icon('arrow', { size: 20, cls: 'btn__arrow' })}</a>
        <a class="btn btn--secondary" href="/symptoms/"><span>Explore symptoms instead</span>${icon('arrow', { size: 20, cls: 'btn__arrow' })}</a>
      </div>
    </div>
    <div class="empty" id="empty-option" hidden>
      <h2 class="h-small">${esc(d.noOption.heading)}</h2>
      <p>${esc(d.noOption.body)}</p>
      <div class="cta-row">
        <a class="btn btn--primary" href="/symptoms/"><span>Explore related concerns</span>${icon('arrow', { size: 20, cls: 'btn__arrow' })}</a>
        <a class="btn btn--secondary" href="/evidence-safety/"><span>Learn how evidence is assessed</span>${icon('arrow', { size: 20, cls: 'btn__arrow' })}</a>
        <button type="button" class="btn btn--secondary" data-reset><span>Clear filters</span></button>
      </div>
    </div>
  </div>
</section>

<section class="band band--wash" aria-labelledby="legend-h">
  <div class="wrap wrap--narrow">
    <h2 id="legend-h" class="h-small">Evidence labels</h2>
    <ul class="legend">
      <li>${chip('rx')}<span>Prescription medicine means a specific product has an approved use in a named jurisdiction.</span></li>
      <li>${chip('cosmetic')}<span>Cosmetic context is not a drug approval.</span></li>
      <li>${chip('experimental')}<span>Experimental research means effectiveness for the listed wellness goal is not established.</span></li>
      <li>${chip('other')}<span>Other clinical context requires the profile’s explanation.</span></li>
    </ul>
    <p><a class="text-link" href="/evidence-safety/#labels">Read the full label definitions ${icon('arrow', { size: 18 })}</a></p>
  </div>
</section>

${ctaBand({
  id: 'pep-bottom-h',
  heading: 'Prefer to begin with what you are experiencing?',
  body: 'Explore symptoms, or learn how to read the evidence labels.',
  ctas: [
    { label: 'Find your symptoms', href: '/symptoms/', primary: true },
    { label: 'Understand evidence and safety', href: '/evidence-safety/' },
  ],
})}`;
  return page('/peptides/', d.title, d.description, body);
}

/* ---------- Peptide profiles ---------- */

export function profilePage(p) {
  const ctx = newCtx();
  const L = labels[p.labelKey];
  const experimental = p.labelKey === 'experimental';
  const akaList = [p.aka && p.aka !== p.name ? null : null, ...p.aliases].filter(Boolean);
  const nameLine = `<p class="profile-name"><strong>${esc(p.aka || p.name)}</strong>${
    p.aliases.length && !p.aka ? ` <span>· also known as ${esc(p.aliases.join(', '))}</span>` : ''
  }</p>`;
  void akaList;

  const concerns = p.concerns || [];
  const related = [
    ...concerns.map((c) => ({ label: c.label, href: c.href })),
    ...(p.relatedReading ? [p.relatedReading] : []),
  ];

  const endingLinks = experimental
    ? [
        ...(concerns.length === 1 && !p.relatedReading
          ? [{ label: 'Explore the related concern', href: concerns[0].href, primary: true }]
          : concerns.map((c, i) => ({ label: `Explore ${c.label.toLowerCase().replace(/^low /, 'low ')}`, href: c.href, primary: i === 0 }))),
        ...(p.relatedReading ? [{ label: 'Explore the related reading', href: p.relatedReading.href, primary: true }] : []),
        { label: 'Understand the evidence', href: '/evidence-safety/' },
        { label: 'Back to all peptides', href: '/peptides/' },
      ]
    : p.links;

  const body = `
<section class="page-head page-head--profile">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'List of peptides', href: '/peptides/', listLink: true }, { label: p.aka || p.name }])}
    <div class="profile-meta">${chip(p.labelKey, p.labelText)}</div>
    <h1 class="h-page">${esc(p.lead)}</h1>
    ${nameLine}
    ${p.jurisdiction ? `<p class="jurisdiction"><span class="k">Jurisdiction referenced</span> ${esc(p.jurisdiction)}</p>` : ''}
  </div>
</section>

<section class="section section--tight">
  <div class="wrap wrap--narrow stack">
    ${
      experimental
        ? `<p class="banner banner--experimental" role="note">${icon('experimental', { size: 26 })}<strong>${esc(P.experimentalBanner)}</strong></p>`
        : ''
    }
    ${p.contextNote ? `<p class="banner" role="note">${icon(L.key, { size: 26 })}<span><strong>Context label.</strong> ${esc(p.contextNote)}</span></p>` : ''}
    <div class="prose">
      ${p.body.map((t) => `<p>${rich(t, ctx)}</p>`).join('')}
    </div>

    ${
      p.question
        ? `<aside class="card card--tint question-box"><h2 class="h-small">Question to bring</h2><p>${esc(p.question)}</p></aside>`
        : ''
    }
    ${
      p.official
        ? `<aside class="official">${icon('doc', { size: 26 })}<div><h2 class="h-small">Official product information</h2><p>Read the applicable patient and prescribing information beside this profile.</p><a class="text-link" href="${esc(
            (ctx.cites.add(p.official.source), '#src-' + p.official.source)
          )}">${esc(p.official.label)} ${icon('arrow', { size: 18 })}</a></div></aside>`
        : ''
    }

    <aside class="label-note" aria-label="What this label means">
      <h2 class="h-small">What this label means</h2>
      <p>${chip(L.key, L.name)} ${esc(L.definition)}</p>
      <p><a class="text-link" href="/evidence-safety/#labels">All four labels explained ${icon('arrow', { size: 18 })}</a></p>
    </aside>

    ${
      related.length
        ? `<div class="related"><h2 class="h-small">${related.length > 1 ? 'Related concerns' : concerns.length ? 'Related concern' : 'Related reading'}</h2><ul class="pill-list">${related
            .map((r) => `<li><a class="pill" href="${esc(r.href)}">${esc(r.label)}</a></li>`)
            .join('')}</ul></div>`
        : ''
    }

    ${experimental ? '' : ctaRow(p.links)}
    <p class="fine fine--block">${icon('info', { size: 18 })}<span>${reviewLine()} Educational information only; it does not replace individualized medical advice.</span></p>
  </div>
</section>

${
  experimental
    ? ctaBand({
        id: 'exp-end-h',
        heading: P.experimentalEnding.heading,
        body: P.experimentalEnding.body,
        ctas: endingLinks,
      })
    : universalEnding(`/peptides/${p.slug}/`)
}
${sourcesSection(ctx, p.official ? [p.official.source] : [])}`;
  return page(
    `/peptides/${p.slug}/`,
    `${p.name} Evidence and Context | Femalin`,
    `Learn about ${p.name}, the evidence for the uses discussed, important uncertainties, and related women’s health questions.`,
    body
  );
}

/* ---------- Evidence and safety ---------- */

export function evidencePage() {
  const ctx = newCtx();
  const e = P.evidence;
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'Evidence and safety' }])}
    <h1 class="h-page">${esc(e.heading)}</h1>
    <p class="lead">${rich(e.lead, ctx)}</p>
  </div>
</section>

<section class="section section--tight" id="labels" aria-labelledby="labels-h">
  <div class="wrap wrap--narrow">
    <h2 id="labels-h" class="h-section">${esc(e.labelsHeading)}</h2>
    <dl class="label-cards">
      ${Object.values(labels)
        .map((l) => `<div class="card label-card label-card--${l.key}"><dt>${chip(l.key, l.name)}</dt><dd>${esc(l.definition)}</dd></div>`)
        .join('')}
    </dl>
  </div>
</section>

<section class="section section--tight">
  <div class="wrap wrap--narrow">
    <h2 class="h-section">${esc(e.qualityHeading)}</h2>
    <div class="prose">${e.quality.map((t) => `<p>${rich(t, ctx)}</p>`).join('')}</div>
  </div>
</section>

<section class="band band--wash" aria-labelledby="clin-h">
  <div class="wrap wrap--narrow">
    <h2 id="clin-h" class="h-section">${esc(e.questionsHeading)}</h2>
    <ul class="check-list check-list--large">${e.questions.map((q) => `<li>${icon('check', { size: 20 })}<span>${esc(q)}</span></li>`).join('')}</ul>
  </div>
</section>

${ctaBand({ id: 'ev-end-h', heading: e.bottom.heading, body: e.bottom.body, ctas: e.bottom.ctas })}
${sourcesSection(ctx)}`;
  return page('/evidence-safety/', e.title, e.description, body);
}

/* ---------- About, how to explore ---------- */

export function aboutPage() {
  const a = P.about;
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'About Femalin' }])}
    <h1 class="h-page">${esc(a.heading)}</h1>
    ${a.body.map((t) => `<p class="lead">${esc(t)}</p>`).join('')}
    ${ctaRow(a.ctas)}
  </div>
</section>
<section class="section section--tight">
  <div class="wrap wrap--narrow"><figure class="about__photo"><img src="/assets/img/photos/community.webp" width="996" height="1170" loading="lazy" alt="Women chatting and laughing at a Femalin Peptides community event"></figure></div>
</section>`;
  return page('/about/', a.title, a.description, body);
}

export function howToPage() {
  const h = P.howTo;
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'How to explore' }])}
    <h1 class="h-page">${esc(h.heading)}</h1>
  </div>
</section>
<section class="section section--tight">
  <div class="wrap wrap--narrow">
    <ol class="steps">
      ${h.steps.map((s, i) => `<li class="card"><span class="steps__n" aria-hidden="true">${i + 1}</span><div><h2 class="h-small">${esc(s.title)}</h2><p>${esc(s.body)}</p></div></li>`).join('')}
    </ol>
    ${ctaRow([...h.ctas, { label: 'Contact Femalin', href: '/contact/' }])}
  </div>
</section>`;
  return page('/how-to-explore/', h.title, h.description, body);
}

/* ---------- Contact ---------- */

export function contactPage() {
  const c = P.contact;
  const consent = site.privacyUrl
    ? c.consent.replace('privacy notice', `<a href="${esc(site.privacyUrl)}">privacy notice</a>`)
    : esc(c.consent);
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'Contact Femalin' }])}
    <h1 class="h-page">${esc(c.heading)}</h1>
    <p class="lead">${esc(c.lead)}</p>
  </div>
</section>
<section class="section section--tight">
  <div class="wrap wrap--narrow">
    <div id="form-status" role="status" aria-live="polite" tabindex="-1">
      <p class="alert alert--error" id="form-error" hidden>${icon('info', { size: 22 })}<span>${esc(c.error)}</span></p>
      <div class="alert alert--success" id="form-success" hidden>
        ${icon('check', { size: 22 })}
        <div><p>${esc(c.success)}</p>${ctaRow(c.ctas)}</div>
      </div>
    </div>
    <form class="form card" id="contact-form" method="post"${site.formEndpoint ? ` action="${esc(site.formEndpoint)}"` : ''} novalidate>
      <div class="field"><label for="f-name">Name</label><input id="f-name" name="name" type="text" autocomplete="name" required></div>
      <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="field"><label for="f-country">Country or region</label><input id="f-country" name="country" type="text" autocomplete="country-name"></div>
      <div class="field"><label for="f-topic">Topic</label>
        <select id="f-topic" name="topic" required>
          <option value="" disabled selected>Choose a topic</option>
          ${c.topics.map((t) => `<option>${esc(t)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label for="f-message">Message</label><textarea id="f-message" name="message" rows="6" required></textarea></div>
      <div class="field field--hp" aria-hidden="true"><label for="f-web">Leave this field empty</label><input id="f-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
      <div class="field field--check"><input id="f-consent" name="consent" type="checkbox" required><label for="f-consent">${consent}</label></div>
      <p class="field__error" id="field-error" role="alert" hidden></p>
      <button class="btn btn--primary" type="submit" id="submit-btn"><span>${esc(c.submit)}</span>${icon('arrow', { size: 20, cls: 'btn__arrow' })}</button>
    </form>
    <div class="stack stack--after">${ctaRow(c.ctas)}</div>
  </div>
</section>`;
  return page('/contact/', c.title, c.description, body);
}

/* ---------- FAQs ---------- */

export function faqPage() {
  const ctx = newCtx();
  const f = P.faqs;
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'FAQs' }])}
    <h1 class="h-page">${esc(f.heading)}</h1>
  </div>
</section>
<section class="section section--tight">
  <div class="wrap wrap--narrow">
    <div class="faq">
      ${f.items
        .map(
          (it, i) => `<details class="faq__item" id="q${i + 1}">
        <summary><h2>${esc(it.q)}</h2><span class="faq__icon" aria-hidden="true"></span></summary>
        <div class="faq__body">${it.a.map((t) => `<p>${rich(t, ctx)}</p>`).join('')}
        <p class="faq__links">${it.links.map((l) => `<a class="text-link" href="${esc(l.href)}">${esc(l.label)} ${icon('arrow', { size: 18 })}</a>`).join('')}</p></div>
      </details>`
        )
        .join('')}
    </div>
    ${ctaRow(f.ctas)}
  </div>
</section>
${sourcesSection(ctx)}`;
  return page('/faqs/', f.title, f.description, body);
}

/* ---------- Learning centre ---------- */

export function learnIndexPage() {
  const l = P.learnIndex;
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'Learning centre' }])}
    <h1 class="h-page">${esc(l.heading)}</h1>
    <p class="lead">${esc(l.lead)}</p>
  </div>
</section>
<section class="section section--tight">
  <div class="wrap">
    <ul class="tile-grid tile-grid--three">
      ${P.articles
        .map(
          (a) => `<li><a class="tile" href="/learn/${a.slug}/">
        <span class="tile__icon">${icon('doc', { size: 30 })}</span>
        <span class="tile__title">${esc(a.heading)}</span>
        <span class="tile__text">${esc(a.short)}</span>
        <span class="tile__go">Read the guide ${icon('arrow', { size: 18 })}</span>
      </a></li>`
        )
        .join('')}
    </ul>
    ${ctaRow(l.ctas, { center: true })}
  </div>
</section>`;
  return page('/learn/', l.title, l.description, body);
}

export function articlePage(a) {
  const ctx = newCtx();
  const body = `
<section class="page-head">
  <div class="wrap wrap--narrow">
    ${breadcrumb([{ label: 'Home', href: '/' }, { label: 'Learning centre', href: '/learn/' }, { label: a.short }])}
    <p class="eyebrow">${esc(a.short)}</p>
    <h1 class="h-page">${esc(a.heading)}</h1>
  </div>
</section>
<section class="section section--tight">
  <div class="wrap wrap--narrow stack">
    <div class="prose">${a.body.map((t) => `<p>${rich(t, ctx)}</p>`).join('')}</div>
    ${ctaRow(a.ctas)}
    <p class="fine fine--block">${icon('info', { size: 18 })}<span>${reviewLine()} Educational information only.</span></p>
    <p class="back-links"><a class="text-link text-link--back" href="/learn/">${icon('back', { size: 18 })} Back to the learning centre</a> <a class="text-link" href="/peptides/">Browse the full peptide library ${icon('arrow', { size: 18 })}</a></p>
  </div>
</section>
${universalEnding(`/learn/${a.slug}/`)}
${sourcesSection(ctx)}`;
  return page(`/learn/${a.slug}/`, a.title, a.description, body);
}

/* ---------- Utility pages ---------- */

export function notFoundPage() {
  const n = P.notFound;
  const body = `
<section class="page-head page-head--center">
  <div class="wrap wrap--narrow center">
    <p class="eyebrow">404</p>
    <h1 class="h-page">${esc(n.heading)}</h1>
    <p class="lead">${esc(n.body)}</p>
    ${ctaRow(n.ctas, { center: true })}
  </div>
</section>`;
  return { path: '/404.html', html: layout({ path: '/404', title: 'Page not found │ Femalin Peptides', description: n.body, body, noindex: true }) };
}

export function unavailablePage() {
  const u = P.unavailable;
  const body = `
<section class="page-head page-head--center">
  <div class="wrap wrap--narrow center">
    <h1 class="h-page">${esc(u.heading)}</h1>
    <p class="lead">${esc(u.body)}</p>
    ${ctaRow(u.ctas, { center: true })}
  </div>
</section>`;
  return page('/unavailable/', u.title, u.body, body, { noindex: true });
}
