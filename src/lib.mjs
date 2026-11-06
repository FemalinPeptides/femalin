import { sources } from './data/sources.mjs';
import { peptides } from './data/peptides.mjs';

export const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/* ---------- Citations ----------
   Copy contains markers such as [4–9], [2,4], [7]. They become superscript links to the
   page’s Sources list; `ctx.cites` collects every source that is actually cited. */
const CITE_RE = /\[(\d+(?:\s*[–-]\s*\d+)?(?:\s*,\s*\d+(?:\s*[–-]\s*\d+)?)*)\]/g;

function renderCite(group, ctx) {
  const parts = group.split(',').map((p) => p.trim());
  const out = parts.map((p) => {
    const range = p.split(/[–-]/).map((n) => Number(n.trim()));
    if (range.length === 2) {
      for (let n = range[0]; n <= range[1]; n++) ctx.cites.add(n);
      return `<a href="#src-${range[0]}">${range[0]}</a>–<a href="#src-${range[1]}">${range[1]}</a>`;
    }
    ctx.cites.add(range[0]);
    return `<a href="#src-${range[0]}">${range[0]}</a>`;
  });
  return `<sup class="cite"><span aria-hidden="true">[</span>${out.join('<span aria-hidden="true">, </span>')}<span aria-hidden="true">]</span><span class="sr-only"> (sources)</span></sup>`;
}

/** Escape text and turn [n] markers into source links. */
export function rich(text, ctx) {
  return esc(text).replace(CITE_RE, (_, g) => renderCite(g, ctx));
}

/* ---------- Auto-linking peptide names in short “Relevant reading” strings ---------- */
const LINKABLE = [
  ['Bremelanotide / PT-141', 'bremelanotide'],
  ['Kisspeptin-10', 'kisspeptin-10'],
  ['AOD-9604', 'aod-9604'],
  ['MOTS-c', 'mots-c'],
  ['BPC-157', 'bpc-157'],
  ['TB-500', 'tb-500'],
  ['GHK-Cu', 'ghk-cu'],
  ['Semaglutide', 'semaglutide'],
  ['tirzepatide', 'tirzepatide'],
  ['sermorelin', 'sermorelin'],
  ['Semax', 'semax'],
  ['KPV', 'kpv'],
  ['DSIP', 'dsip'],
  ['Epitalon', 'epitalon'],
];
const LINK_RE = new RegExp(
  `(?<![\\w-])(${LINKABLE.map(([n]) => n.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')).join('|')})(?![\\w-])`,
  'gi'
);
const LINK_LOOKUP = Object.fromEntries(LINKABLE.map(([n, s]) => [n.toLowerCase(), s]));

/** Returns { html, slugs } — html has the first mention of each peptide linked to its profile. */
export function linkPeptides(text, ctx) {
  const seen = new Set();
  const html = rich(text, ctx).replace(LINK_RE, (m) => {
    const slug = LINK_LOOKUP[m.toLowerCase()];
    if (!slug) return m;
    seen.add(slug);
    return `<a href="/peptides/${slug}/">${m}</a>`;
  });
  return { html, slugs: [...seen] };
}

/* ---------- Sources list for a page ---------- */
export function sourcesSection(ctx, extra = []) {
  const ids = [...new Set([...ctx.cites, ...extra])].sort((a, b) => a - b);
  if (!ids.length) return '';
  const items = ids
    .map((id) => {
      const s = sources[id];
      return `<li id="src-${id}" value="${id}"><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}<span class="sr-only"> (opens in a new tab)</span></a><span class="src-note">${esc(s.note)}</span></li>`;
    })
    .join('');
  return `<section class="sources" aria-labelledby="sources-h">
  <div class="wrap wrap--narrow">
    <h2 id="sources-h" class="h-small">Sources</h2>
    <ol class="sources__list">${items}</ol>
    <p class="sources__foot">Sources accessed November 5, 2026. Links open in a new tab; this site stays open behind them.</p>
  </div>
</section>`;
}

/* ---------- Icons ---------- */
const ICONS = {
  weight: '<path d="M6 7h12l1.6 11a1.2 1.2 0 0 1-1.2 1.4H5.6A1.2 1.2 0 0 1 4.4 18L6 7z"/><path d="M9 12.5a3 3 0 0 1 6 0"/><path d="M12 12.5l1.5-1.8"/><path d="M9 4h6"/>',
  energy: '<path d="M13 3 5.5 13.5H11L10 21l8-10.5h-5.5L13 3z"/>',
  sleep: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
  focus: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  recovery: '<path d="M20 11a8 8 0 0 0-14-4.5L4 9"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14 4.5L20 15"/><path d="M20 20v-5h-5"/>',
  digestion: '<path d="M3 8c3-3 6 3 9 0s6 3 9 0"/><path d="M3 13c3-3 6 3 9 0s6 3 9 0"/><path d="M3 18c3-3 6 3 9 0s6 3 9 0"/>',
  skin: '<path d="M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3z"/><path d="M9.5 14a2.6 2.6 0 0 0 2.2 2.4"/>',
  hair: '<path d="M7 3c-2 6 2 9 0 18"/><path d="M12 3c-2 6 2 9 0 18"/><path d="M17 3c-2 6 2 9 0 18"/>',
  heart: '<path d="M12 20s-7-4.6-7-10.2A4 4 0 0 1 12 7.4a4 4 0 0 1 7 2.4C19 15.400 12 20 12 20z"/>',
  midlife: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',
  rx: '<rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="m9.2 7.6 7.2 8.4" />',
  cosmetic: '<path d="M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3z"/>',
  other: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5z"/><path d="M4 21.5h16"/>',
  experimental: '<path d="M9 3h6"/><path d="M10 3v6l-5 9.2A2 2 0 0 0 6.800 21h10.400a2 2 0 0 0 1.800-2.800L14 9V3"/><path d="M7.500 15h9"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  back: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.200-4.200"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.500"/><circle cx="12" cy="7.800" r=".6" fill="currentColor"/>',
  external: '<path d="M14 4h6v6"/><path d="M20 4 10.500 13.500"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  check: '<path d="m5 12.500 4.500 4.500L19 7.500"/>',
  doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 16h5"/>',
};

export function icon(name, { size = 24, cls = '' } = {}) {
  const body = ICONS[name];
  if (!body) throw new Error(`Unknown icon: ${name}`);
  return `<svg class="icon ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

/* ---------- Decorative botanical artwork (deterministic) ----------
   A sprig of lilac florets on a stone arch, echoing the dried-flower and travertine
   art direction. Colours come from CSS variables so the palette stays in one place. */
function bez(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return [
    u ** 3 * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t ** 3 * p3[0],
    u ** 3 * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t ** 3 * p3[1],
  ];
}
const rnd = (n, seed = 5) => {
  const x = Math.sin(n * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

function floret(x, y, r, i) {
  const fills = ['var(--lilac)', 'var(--mauve)', 'var(--lilac)', 'var(--lilac-deep)'];
  return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${fills[i % fills.length]}" opacity="${(0.72 + rnd(i + 9) * 0.28).toFixed(2)}"/>`;
}

export function heroArt() {
  const stem = [[150, 560], [120, 400], [250, 330], [360, 120]];
  let branches = '';
  let florets = '';
  let k = 0;
  for (let i = 0; i <= 13; i++) {
    const t = 0.1 + (i / 13) * 0.88;
    const [x, y] = bez(...stem, t);
    const side = i % 2 ? 1 : -1;
    const len = 46 + rnd(i + 1) * 58 - t * 28;
    const phi = (24 + rnd(i + 3) * 32) * (Math.PI / 180);
    const ex = x + side * Math.sin(phi) * len;
    const ey = y - Math.cos(phi) * len;
    const mx = (x + ex) / 2 + side * 8;
    const my = (y + ey) / 2 - 6;
    branches += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}" fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" opacity=".75"/>`;
    const n = 4 + Math.round(rnd(i + 20) * 4);
    for (let j = 0; j < n; j++) {
      const a = rnd(i * 10 + j + 50) * Math.PI * 2;
      const d = rnd(i * 10 + j + 90) * 17;
      florets += floret(ex + Math.cos(a) * d, ey + Math.sin(a) * d, 4 + rnd(i * 10 + j) * 5, k++);
    }
  }
  const [tx, ty] = bez(...stem, 1);
  for (let j = 0; j < 9; j++) {
    const a = rnd(j + 300) * Math.PI * 2;
    const d = rnd(j + 400) * 20;
    florets += floret(tx + Math.cos(a) * d, ty + Math.sin(a) * d, 4 + rnd(j + 500) * 5, k++);
  }
  return `<svg class="hero-art" viewBox="0 0 560 640" role="presentation" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="archGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--lilac-soft)"/><stop offset="1" stop-color="var(--stone)"/></linearGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <clipPath id="archClip"><path d="M60 600V270A220 220 0 0 1 500 270V600Z"/></clipPath>
  </defs>
  <path d="M60 600V270A220 220 0 0 1 500 270V600Z" fill="url(#archGrad)"/>
  <g clip-path="url(#archClip)">
    <polygon points="330,0 470,0 250,640 110,640" fill="url(#beam)" opacity=".7"/>
    <polygon points="440,0 520,0 300,640 230,640" fill="url(#beam)" opacity=".4"/>
  </g>
  <path d="M82 600V272A198 198 0 0 1 478 272V600" fill="none" stroke="var(--lilac)" stroke-width="1.5" stroke-dasharray="1 8" stroke-linecap="round"/>
  <path d="M${stem[0]} C${stem[1]} ${stem[2]} ${stem[3]}" fill="none" stroke="var(--sage)" stroke-width="2.6" stroke-linecap="round"/>
  ${branches}${florets}
  <rect x="24" y="572" width="512" height="68" rx="12" fill="var(--stone-deep)"/>
  <rect x="24" y="572" width="512" height="14" rx="7" fill="var(--stone)"/>
  <rect x="318" y="526" width="190" height="52" rx="10" fill="var(--stone)"/>
  <rect x="318" y="526" width="190" height="10" rx="5" fill="#fff" opacity=".6"/>
</svg>`;
}

/** Slim sprig divider used above section endings. */
export function chainDivider() {
  const dots = Array.from({ length: 7 }, (_, i) => {
    const x = 24 + i * 28.7;
    const up = i % 2 ? -7 : 7;
    return `<line x1="${x}" y1="18" x2="${x}" y2="${18 + up}" stroke="var(--sage)" stroke-width="1.6" stroke-linecap="round"/><circle cx="${x}" cy="${18 + up * 1.5}" r="${i % 3 === 0 ? 5 : 4}" fill="${i % 2 ? 'var(--mauve)' : 'var(--lilac)'}"/>`;
  }).join('');
  return `<svg class="chain-divider" width="220" height="36" viewBox="0 0 220 36" aria-hidden="true" focusable="false"><path d="M10 18h200" stroke="var(--sage)" stroke-width="1.6" stroke-linecap="round"/>${dots}</svg>`;
}

export { peptides };
