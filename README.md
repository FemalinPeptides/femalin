# Femalin Peptides — website

A fast, accessible, dependency-free static site (41 pages) built from the *Femalin Peptides Website Copy* document.
No framework, no runtime dependencies, fonts self-hosted. Output is plain HTML/CSS/JS in `dist/`.

## Run it

```bash
npm start          # builds, then previews at http://localhost:4173
npm run build      # rebuild dist/ only
```

Requires Node 18+. Open the site through the preview server (links are root-relative, e.g. `/symptoms/`), not by double-clicking a file.

## Deploy

Upload the contents of `dist/` to any static host at the **site root** (Netlify, Cloudflare Pages, Vercel, GitHub Pages with a custom domain, S3/CloudFront, etc.). `404.html` is picked up automatically by most hosts.

## Before launch — settings in `src/data/site.mjs`

| Setting | What it does |
|---|---|
| `formEndpoint` | URL the contact form posts JSON to (Formspree, Getform, a serverless function…). **While empty, the form shows the error message and never a false “sent” message**, as the brief requires. |
| `privacyUrl` | Link for the consent checkbox. The consent text mentions a privacy notice; publish one before launch. |
| `review` | `{ date, reviewer }` — fill in only after a qualified reviewer has actually reviewed the content. Until then pages say "Content prepared November 5, 2026." |
| `siteUrl` | Your live domain. Enables canonical tags, Open Graph URLs and `sitemap.xml`. |

Privacy, terms and accessibility pages are deliberately **not** linked in the footer; the brief says to add them only when the real content exists (each must link to Home and Contact).

## Where the content lives

```
src/data/pages.mjs      homepage, evidence, FAQs, learning articles, contact, about, 404 copy
src/data/symptoms.mjs   the 10 symptom pages
src/data/peptides.mjs   the 17 peptide profiles, evidence labels, aliases, filter tags
src/data/sources.mjs    the 15 sources (numbers match the [n] citations)
src/data/site.mjs       settings, navigation, footer
src/templates.mjs       page templates      src/lib.mjs  helpers (citations, auto-linking, icons, art)
src/assets/css|js|img   styles, scripts, logo, favicons, fonts
```

Edit the copy in `src/data`, run `npm run build`. Citations written as `[4–9]` or `[2,4]` become links to a per-page Sources list automatically. Add a peptide by adding an entry to `peptides.mjs`; the directory, search, aliases and profile page follow.

## Built to the brief

- Two entrances on the homepage (symptoms / peptide list) with a working search that hands off to the directory.
- Directory: alias-aware search (PT-141, emideltide, Epithalon, copper tripeptide-1, TA-1…), evidence-context and concern filters, filter state kept in the URL and restored when returning from a profile, "no results" and "no established option" states.
- Four evidence labels used consistently (icon + text, never colour alone); experimental profiles carry the prominent "Experimental for the wellness goals discussed here" banner.
- Every page ends with a next action and an alternative path; self-links are swapped for Contact.
- Breadcrumbs on symptom and profile pages; `/evidence-safety/#labels` anchor exists.
- Accessibility: skip link, visible focus, landmarks, one H1 per page, keyboard menu, 4.5:1+ contrast; axe (WCAG 2.2 AA + best practice) reports no violations on the audited pages.
- `/unavailable/` (the "option not available here" state) exists but is not linked or indexed, ready for when needed.

## Notes

- Internal notes in the brief (editorial notes, implementation notes, "facts to confirm") are not published on the site.
- Sources 1–3 in the brief are commercial reference sites used for structure. They are cited on pages as the brief specifies; consider replacing them with primary sources before launch.
- No product, price, cart or consultation calls to action are included, matching the education-only launch model.
- Logo: `src/assets/img/logo.png` is the supplied logo, background removed only; the artwork is unchanged. Favicons are cut from its "F" mark.
