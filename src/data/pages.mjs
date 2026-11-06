// Copy for the general pages. Taken from the website copy document.
// Internal notes in the brief (editorial notes, implementation notes, "facts to confirm")
// are deliberately NOT published here.

export const home = {
  title: 'Femalin Peptides │ Peptide Science for Women',
  description:
    'Explore peptide information through your symptoms or an A–Z library. Understand the evidence, limitations, and questions to discuss with a clinician.',
  hero: {
    brandLine: 'Peptide science. A woman’s perspective.',
    heading: 'Understand your options. Start with you.',
    body: 'Your questions about energy, weight, skin, sleep, and intimacy deserve clear answers. Femalin Peptides helps you explore the science through the concerns that matter to you—with a clear view of what is established, what is emerging, and what remains unknown.',
  },
  paths: {
    heading: 'Find your symptoms, find your peptides.',
    body: 'You do not need to know a peptide name to begin. Choose a concern, understand the relevant research, and prepare better questions for your healthcare professional.',
    a: {
      cta: 'Explore by symptom',
      href: '/symptoms/',
    },
    b: {
      heading: 'Already have a peptide in mind?',
      body: 'Look it up in our A–Z library. Each profile explains its context, the limits of the evidence, and where to go next.',
      cta: 'Browse the list of peptides',
      href: '/peptides/',
    },
  },
  science: {
    heading: 'A clearer view of the science',
    body: 'Some peptide medicines have approved uses. Some peptides appear in topical cosmetics. Many popular compounds remain experimental for the goals discussed online. Femalin keeps these distinctions visible, so popularity never stands in for proof. [4–9]',
    cta: 'Understand the evidence labels',
    href: '/evidence-safety/#labels',
  },
  questions: {
    heading: 'Built around the questions women ask',
    items: [
      'What changes in midlife?',
      'How does treatment fit with pregnancy plans or contraception?',
      'Is a topical product different from an injection?',
      'What should I ask before deciding?',
    ],
    closing:
      'Explore the context that helps turn a search into a more informed conversation.',
  },
  bottom: {
    heading: 'Your next step starts with a question.',
    body: 'Choose a concern, look up a peptide, or ask us about Femalin.',
  },
};

export const peptidesIndex = {
  title: 'List of Peptides │ Femalin Peptides',
  description:
    'Browse Femalin’s peptide library. Compare prescription, cosmetic, and research contexts and read clear profiles without treatment promises.',
  heading: 'List of peptides',
  lead: 'A clearer way to understand the names you hear. Browse the library, compare the evidence context, and open a profile to learn more. Inclusion in this library does not mean Femalin offers the compound or recommends its use.',
  searchLabel: 'Search a peptide name or common alias',
  bottom: {
    text: 'Prefer to begin with what you are experiencing? Explore symptoms, or learn how to read the evidence labels.',
  },
  empty: {
    heading: 'We could not find that name.',
    body: 'Try a different spelling or common alias, clear your filters, or browse the complete list.',
  },
  noOption: {
    heading: 'Your question still deserves a next step.',
    body: 'We have not identified an established peptide treatment for this concern in the evidence reviewed here. You can explore related information or prepare questions for a qualified healthcare professional.',
  },
};

export const symptomsIndexMeta = {
  title: 'Find Your Symptoms │ Femalin Peptides',
  description:
    'Explore concerns around weight, sleep, energy, skin, and intimacy. Find relevant peptide reading and understand when other care may matter.',
};

export const symptomEnding = {
  heading: 'Keep exploring at your own pace.',
  body: 'Look at another concern, browse the complete library, or read how Femalin distinguishes evidence from expectation.',
  links: [
    { label: 'Choose another symptom', href: '/symptoms/' },
    { label: 'See all peptides', href: '/peptides/' },
    { label: 'Understand the evidence', href: '/evidence-safety/' },
  ],
};

export const experimentalBanner = 'Experimental for the wellness goals discussed here';

export const experimentalEnding = {
  heading: 'You can keep learning without choosing a treatment.',
  body: 'Explore the related concern, see how evidence is assessed, or return to the complete library.',
};

export const universalEnding = {
  heading: 'Where would you like to go next?',
  body: 'Start with a concern, look up a peptide, or explore the evidence.',
  links: [
    { label: 'Find your symptoms', href: '/symptoms/' },
    { label: 'View the peptide list', href: '/peptides/' },
    { label: 'Understand the evidence', href: '/evidence-safety/' },
  ],
};

export const about = {
  title: 'About Femalin │ Femalin Peptides',
  description:
    'Femalin Peptides makes peptide information easier for women to understand, starting with the concerns you notice and the names you already know.',
  heading: 'A woman’s questions belong at the centre of the conversation.',
  body: [
    'Femalin Peptides begins with a simple idea: peptide information should be easier for women to understand. The same headline can mean something very different depending on your health history, stage of life, and the product being discussed.',
    'Our purpose is to make those differences clearer. Start with a concern, look up a name, and explore the evidence behind the conversation. You deserve to understand both the possibilities and the unanswered questions before making a health decision.',
  ],
  ctas: [
    { label: 'Explore symptoms', href: '/symptoms/', primary: true },
    { label: 'Read evidence and safety', href: '/evidence-safety/' },
    { label: 'Contact Femalin', href: '/contact/' },
  ],
};

export const howTo = {
  title: 'How to Explore │ Femalin Peptides',
  description:
    'A simple way to use Femalin: start with your question, read the context, and prepare a conversation with a qualified healthcare professional.',
  heading: 'A useful next step, wherever you begin.',
  steps: [
    { title: 'Start with your question', body: 'Choose a symptom or search a peptide name. You can switch between both paths at any time.' },
    { title: 'Read the context', body: 'Look at the evidence label, the exact use being discussed, and the important uncertainties.' },
    { title: 'Prepare a conversation', body: 'Write down what has changed, what matters to you, and what you want to ask a qualified healthcare professional.' },
  ],
  ctas: [
    { label: 'Find your symptoms', href: '/symptoms/', primary: true },
    { label: 'Browse the peptide list', href: '/peptides/' },
  ],
};

export const contact = {
  title: 'Contact Femalin │ Femalin Peptides',
  description:
    'Ask about Femalin, suggest a topic, or flag information that needs a closer look. This form is for general enquiries only.',
  heading: 'What would you like to know?',
  lead: 'Ask about Femalin, suggest a topic, or flag information that needs a closer look. This form is for general enquiries. Please do not include medical records, sensitive health details, or payment information. We cannot diagnose symptoms or provide urgent care through this form.',
  topics: ['General question', 'Content suggestion', 'Report an issue', 'Partnership enquiry'],
  consent: 'I have read the privacy notice and agree that Femalin may use these details to respond to my enquiry.',
  submit: 'Send my enquiry',
  error: 'Your message could not be sent. Your text is still here. Please try again.',
  success: 'Your enquiry has been sent. While you are here, explore a concern or look up a peptide.',
  ctas: [
    { label: 'Explore symptoms', href: '/symptoms/', primary: true },
    { label: 'Browse all peptides', href: '/peptides/' },
  ],
};

export const evidence = {
  title: 'Peptide Evidence and Safety │ Femalin',
  description:
    'Understand peptide evidence, route differences, product approval, and key questions to discuss before making a treatment decision.',
  heading: 'Understand what the evidence actually supports.',
  lead: 'Peptides are not one treatment category with one level of evidence. A medicine, a topical cosmetic, and an experimental injectable can share the word “peptide” while having very different uses and uncertainties. [4–6]',
  labelsHeading: 'Read the labels',
  qualityHeading: 'Quality and authorization',
  quality: [
    'A certificate of analysis or third-party purity result does not by itself establish that a product is safe, effective, sterile, or authorized for sale. Product identity, manufacturing controls, and regulatory oversight matter. [5]',
    'In Canada, injectable peptides are regulated as drugs. Health Canada warns against unauthorized peptide products; “research use only” wording does not remove regulatory requirements. Canadian and US rules are different. Do not read an FDA statement as authorization in Canada. [5,6]',
    'Compounding is not the same as a drug approval. Decisions about a particular compounded product require review of the relevant jurisdiction and circumstances. In Canada, compounding must not be used to bypass drug review requirements. [6]',
  ],
  questionsHeading: 'Questions to bring to your clinician',
  questions: [
    'What condition are we treating?',
    'What evidence supports this exact product and use?',
    'What are the risks, interactions, and alternatives?',
    'What monitoring is needed?',
    'How do pregnancy, breastfeeding, contraception, or other medicines affect the decision?',
  ],
  bottom: {
    heading: 'Put the context beside the question.',
    body: 'Return to a profile, explore a concern, or read the basics.',
    ctas: [
      { label: 'Browse peptide profiles', href: '/peptides/', primary: true },
      { label: 'Explore symptoms', href: '/symptoms/' },
      { label: 'Read peptide basics', href: '/learn/peptide-basics/' },
    ],
  },
};

export const faqs = {
  title: 'Frequently Asked Questions │ Femalin Peptides',
  description:
    'Answers to common questions about peptides, the symptom finder, topical and injectable GHK-Cu, pregnancy, and what Femalin does and does not offer.',
  heading: 'Frequently asked questions',
  items: [
    {
      q: 'What are peptides?',
      a: ['Peptides are short chains of amino acids. Some act as signals in the body, and some have been developed into medicines. A natural role in the body does not make every peptide product safe or effective. [5]'],
      links: [{ label: 'Read peptide basics', href: '/learn/peptide-basics/' }],
    },
    {
      q: 'Which peptide is best for women?',
      a: ['There is no single best peptide for all women. A useful answer starts with a specific concern, diagnosis where relevant, the product’s evidence, and individual risks. Explore symptoms to find relevant reading rather than an automatic treatment match.'],
      links: [{ label: 'Explore symptoms', href: '/symptoms/' }],
    },
    {
      q: 'Does the symptom finder prescribe a treatment?',
      a: ['No. It connects your concern with educational pages and useful questions. It does not diagnose, confirm eligibility, or recommend a medicine.'],
      links: [{ label: 'Find your symptoms', href: '/symptoms/' }],
    },
    {
      q: 'Can peptides treat menopause?',
      a: ['Femalin does not present peptides as a replacement for menopause care. Some specific medicines may be relevant to a separate diagnosed condition. Hot flashes, disrupted sleep, and sexual discomfort deserve their own assessment and discussion of established options. [13,14]'],
      links: [{ label: 'Explore midlife changes', href: '/symptoms/midlife/' }],
    },
    {
      q: 'Are topical and injectable GHK-Cu the same choice?',
      a: ['They involve different routes, products, and safety questions. Cosmetic use cannot establish the safety or effectiveness of an injection. [4,11]'],
      links: [{ label: 'Read about GHK-Cu', href: '/peptides/ghk-cu/' }],
    },
    {
      q: 'Can I combine peptides into a stack?',
      a: ['Combining compounds does not establish that they work better together or that the combination is safe. Femalin does not provide self-directed stacking, dosing, mixing, or injection instructions. Discuss any proposed combination with a qualified prescriber.'],
      links: [{ label: 'Understand evidence and safety', href: '/evidence-safety/' }],
    },
    {
      q: 'Are peptides suitable during pregnancy or breastfeeding?',
      a: ['Do not assume suitability. Evidence and restrictions vary by medicine, and experimental products have major gaps. Discuss pregnancy plans, breastfeeding, and contraception with your healthcare professional before considering treatment. [7–9]'],
      links: [{ label: 'Understand evidence and safety', href: '/evidence-safety/' }],
    },
    {
      q: 'Are all products in the library available through Femalin?',
      a: ['The library is educational. Inclusion is not a statement of availability or a recommendation to use a compound. Contact Femalin with questions about the company.'],
      links: [{ label: 'Browse the peptide library', href: '/peptides/' }, { label: 'Contact Femalin', href: '/contact/' }],
    },
    {
      q: 'Why do I see alternatives to peptides?',
      a: ['A useful health conversation should include the options that fit the concern. For some symptoms, assessment or an established non-peptide treatment may be the more relevant next step.'],
      links: [{ label: 'Explore symptoms', href: '/symptoms/' }],
    },
    {
      q: 'What should I do with a question not answered here?',
      a: ['Use Contact Femalin for a general company or content question. For advice about your own symptoms or treatment, speak with a qualified healthcare professional.'],
      links: [{ label: 'Contact Femalin', href: '/contact/' }],
    },
  ],
  ctas: [
    { label: 'Contact Femalin', href: '/contact/', primary: true },
    { label: 'Explore symptoms', href: '/symptoms/' },
    { label: 'Browse the peptide library', href: '/peptides/' },
  ],
};

export const learnIndex = {
  title: 'Learning Centre │ Femalin Peptides',
  description:
    'Short guides that explain the terms, evidence, and questions behind peptide conversations.',
  heading: 'Clearer answers begin here.',
  lead: 'Explore short guides that explain the terms, evidence, and questions behind peptide conversations.',
  ctas: [
    { label: 'Explore by symptom', href: '/symptoms/', primary: true },
    { label: 'Browse all peptides', href: '/peptides/' },
    { label: 'Read FAQs', href: '/faqs/' },
  ],
};

export const articles = [
  {
    slug: 'peptide-basics',
    short: 'Peptide basics',
    heading: 'What a peptide name can and cannot tell you',
    title: 'Peptide Basics │ Femalin Peptides',
    description:
      'A peptide name identifies a molecule, not an approved product or a proven use. Learn what to ask about the exact product, purpose, country, and evidence.',
    body: [
      'A peptide name identifies a molecule. It does not tell you that every product containing it is approved, that every advertised use is supported, or that it suits you. Start by asking what exact product is being discussed, for which purpose, and in which country. [4–6]',
      'Then look at the evidence. A change in a laboratory marker is different from a meaningful improvement in symptoms. A result in one population does not automatically apply to another. Knowing those differences makes a profile more useful than a list of promised benefits.',
    ],
    ctas: [
      { label: 'Read the evidence labels', href: '/evidence-safety/#labels', primary: true },
      { label: 'Look up a peptide', href: '/peptides/' },
    ],
  },
  {
    slug: 'weight-management-options',
    short: 'Weight management options',
    heading: 'Semaglutide and tirzepatide are different medicines',
    title: 'Weight Management Options │ Femalin Peptides',
    description:
      'Semaglutide and tirzepatide act differently and have product-specific indications, risks, and instructions. Read the profiles alongside the official product information.',
    body: [
      'Both appear in conversations about metabolic health, but they act differently and have product-specific indications, risks, and instructions. A clinician’s assessment matters more than a comparison headline. Eligibility and the best approach depend on your health needs. [7,8]',
      'Read the individual profiles alongside the official product information. Bring questions about expected benefits, side effects, monitoring, affordability, and how treatment fits into your longer-term care.',
    ],
    ctas: [
      { label: 'Read about semaglutide', href: '/peptides/semaglutide/', primary: true },
      { label: 'Read about tirzepatide', href: '/peptides/tirzepatide/' },
      { label: 'Return to weight and appetite', href: '/symptoms/weight-appetite/' },
    ],
  },
  {
    slug: 'sleep-research',
    short: 'Sleep research',
    heading: 'How to read peptide claims about sleep',
    title: 'Sleep Research │ Femalin Peptides',
    description:
      'Sleep-related marketing can jump from an interesting idea to a promised outcome. Learn how to ask whether a treatment has been shown to help people like you.',
    body: [
      'Sleep-related marketing can move quickly from an interesting biological idea to a promised outcome. Those are different steps. Ask whether a treatment has been shown to improve sleep in people like you, with meaningful outcomes and adequate safety monitoring.',
      'Femalin’s DSIP and Epitalon pages describe research interest without presenting either as an established insomnia treatment. If sleep has changed around midlife, discuss the wider symptom pattern with a healthcare professional. [2,13]',
    ],
    ctas: [
      { label: 'Explore sleep concerns', href: '/symptoms/sleep/', primary: true },
      { label: 'Read about DSIP', href: '/peptides/dsip/' },
      { label: 'Read about Epitalon', href: '/peptides/epitalon/' },
    ],
  },
];

export const notFound = {
  heading: 'Let us help you find your way.',
  body: 'This page may have moved, but the information you are looking for could be nearby.',
  ctas: [
    { label: 'Find your symptoms', href: '/symptoms/', primary: true },
    { label: 'Browse peptides', href: '/peptides/' },
    { label: 'Return home', href: '/' },
  ],
};

export const unavailable = {
  title: 'Not available here │ Femalin Peptides',
  heading: 'This option is not available here.',
  body: 'Availability depends on the service, location, and applicable requirements. You can keep exploring the library or contact Femalin with a general question.',
  ctas: [
    { label: 'Explore the library', href: '/peptides/', primary: true },
    { label: 'Contact Femalin', href: '/contact/' },
  ],
};
