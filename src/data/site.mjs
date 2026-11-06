// Site-wide configuration. Edit these values, then run `npm run build`.

export const site = {
  name: 'Femalin Peptides',
  shortName: 'Femalin',
  tagline: 'Peptide science. A woman’s perspective.',
  preparedDate: 'November 5, 2026',

  // Public URL of the live site (no trailing slash). Leave empty until known.
  // When set, canonical tags, Open Graph URLs and sitemap.xml are generated.
  siteUrl: '',

  // CONTACT FORM — the form posts JSON to this URL (Formspree, Getform, Netlify
  // function, your own API, etc.). While empty, the form shows the error state
  // and never a false "sent" message, as the content brief requires.
  formEndpoint: '',

  // PRIVACY NOTICE — the contact form consent text must link to a completed notice.
  // Leave empty until the notice exists; the consent text is then shown without a link.
  privacyUrl: '',

  // MEDICAL REVIEW — only fill in after a qualified reviewer has actually reviewed
  // the content. Example: { date: 'December 1, 2026', reviewer: 'Name, credentials' }
  review: null,
};

export const nav = [
  { label: 'Symptoms', href: '/symptoms/' },
  { label: 'List of peptides', href: '/peptides/' },
  { label: 'How to explore', href: '/how-to-explore/' },
  { label: 'Evidence and safety', href: '/evidence-safety/' },
  { label: 'About Femalin', href: '/about/' },
];

export const footerLinks = [
  { label: 'Explore symptoms', href: '/symptoms/' },
  { label: 'List of peptides', href: '/peptides/' },
  { label: 'Learning centre', href: '/learn/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Evidence and safety', href: '/evidence-safety/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerDisclaimer =
  'Website content is for education and does not replace individualized medical advice. Library inclusion does not establish treatment suitability or availability through Femalin. Approval and availability depend on the specific product and jurisdiction.';

export const heroDisclaimer =
  'Educational information. Personal treatment decisions belong with a qualified healthcare professional.';
