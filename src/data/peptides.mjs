// Peptide library — 17 entries. Copy is taken from the website copy document.
// labelKey: rx | cosmetic | other | experimental

export const labels = {
  rx: {
    key: 'rx',
    filter: 'Prescription medicines',
    name: 'Prescription medicine',
    definition:
      'A specific product has an approved indication in a named jurisdiction. That approval does not extend to every formulation, dose, or advertised use of the molecule.',
  },
  cosmetic: {
    key: 'cosmetic',
    filter: 'Cosmetic context',
    name: 'Cosmetic context',
    definition:
      'A topical ingredient is being discussed in a cosmetic setting. This is not approval to treat disease or evidence supporting injection.',
  },
  other: {
    key: 'other',
    filter: 'Other clinical context',
    name: 'Other clinical context',
    definition:
      'The history or setting needs explanation. Read the profile rather than assuming a current product is approved for your concern.',
  },
  experimental: {
    key: 'experimental',
    filter: 'Experimental research',
    name: 'Experimental research',
    definition:
      'The wellness goal discussed is not established. A mechanism, animal result, small study, or testimonial cannot settle effectiveness and safety for you.',
  },
};

export const topics = {
  weight: 'Weight',
  energy: 'Energy',
  sleep: 'Sleep',
  focus: 'Focus',
  recovery: 'Recovery',
  digestion: 'Digestion',
  skin: 'Skin',
  hair: 'Hair',
  sexual: 'Sexual wellbeing',
};

const S = (slug, label) => ({ label, href: `/symptoms/${slug}/` });
const concern = {
  weight: S('weight-appetite', 'Weight and appetite'),
  energy: S('low-energy', 'Low energy'),
  sleep: S('sleep', 'Disrupted sleep'),
  brain: S('brain-fog', 'Brain fog and focus'),
  recovery: S('recovery', 'Recovery and discomfort'),
  digestion: S('digestion', 'Digestive concerns'),
  skin: S('skin', 'Skin changes'),
  hair: S('hair', 'Hair thinning'),
  sexual: S('sexual-wellbeing', 'Sexual wellbeing'),
};

export const peptides = [
  {
    slug: 'aod-9604',
    name: 'AOD-9604',
    aliases: [],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Weight claims',
    topics: ['weight'],
    lead: 'Understand the claims around “targeted fat loss.”',
    body: [
      'AOD-9604 is discussed in weight-management marketing. Femalin does not present it as an established treatment for abdominal fat or as an equivalent to approved weight-management medicines. Review the evidence limits before drawing conclusions. [2,4]',
    ],
    concerns: [concern.weight],
  },
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    aliases: [],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Recovery and digestion claims',
    topics: ['recovery', 'digestion'],
    lead: 'Look closely at recovery and gut-health claims.',
    body: [
      'BPC-157 is an experimental peptide discussed for these goals. Findings from laboratory or animal research do not establish patient benefits, and important human safety questions remain. Femalin presents it as research information. [3,4]',
    ],
    concerns: [concern.recovery, concern.digestion],
  },
  {
    slug: 'bremelanotide',
    name: 'Bremelanotide',
    aliases: ['PT-141'],
    aka: 'Bremelanotide / PT-141',
    labelKey: 'rx',
    labelText: 'Prescription medicine — US',
    related: 'A specific low-desire diagnosis',
    topics: ['sexual'],
    lead: 'Bremelanotide and a specific low-desire diagnosis',
    jurisdiction: 'United States (FDA-approved branded product: Vyleesi)',
    body: [
      'Vyleesi is FDA-approved for acquired, generalized hypoactive sexual desire disorder in certain premenopausal women. The diagnosis includes distress and excludes low desire due to another medical or psychiatric condition, relationship problems, or medication effects. It is not indicated for postmenopausal women or to enhance sexual performance. [9]',
      'Nausea, flushing, headache, and skin darkening can occur. It is contraindicated in uncontrolled hypertension or known cardiovascular disease. An online “PT-141” vial is not automatically the approved medicine. Review the full label with a clinician. [9]',
    ],
    official: { label: 'Vyleesi prescribing information (DailyMed)', source: 9 },
    links: [
      { label: 'Explore sexual wellbeing', href: '/symptoms/sexual-wellbeing/', primary: true },
      { label: 'Understand evidence and safety', href: '/evidence-safety/' },
      { label: 'Return to the peptide list', href: '/peptides/' },
    ],
  },
  {
    slug: 'cjc-1295',
    name: 'CJC-1295',
    aliases: [],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Growth-hormone and body-composition claims',
    topics: ['recovery'],
    lead: 'A research topic, not a general wellness prescription.',
    body: [
      'CJC-1295 appears in growth-hormone and body-composition discussions. These claims should not be treated as established benefits for healthy women. The proposed product, route, safety, and regulatory context all matter. [2,4]',
    ],
    concerns: [concern.recovery],
  },
  {
    slug: 'dsip',
    name: 'DSIP',
    aliases: ['emideltide'],
    aka: 'DSIP / emideltide',
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Sleep claims',
    topics: ['sleep'],
    lead: 'A sleep-related name is not proof of better sleep.',
    body: [
      'DSIP is discussed in sleep research, but Femalin does not present it as a proven insomnia treatment. A sleep concern deserves assessment, including possible midlife contributors. [2,4]',
    ],
    concerns: [concern.sleep],
  },
  {
    slug: 'epitalon',
    name: 'Epitalon',
    aliases: ['Epithalon'],
    aka: 'Epitalon / Epithalon',
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Sleep and longevity claims',
    topics: ['sleep'],
    lead: 'Read longevity claims with care.',
    body: [
      'Epitalon appears in online discussions about ageing and sleep. Its popularity does not establish that it extends human life or reliably improves sleep. Read the research context and uncertainties before accepting those claims. [2,3]',
    ],
    concerns: [concern.sleep],
  },
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    aliases: ['copper tripeptide-1', 'copper peptide'],
    aka: 'GHK-Cu / copper tripeptide-1',
    labelKey: 'cosmetic',
    labelText: 'Cosmetic context; route matters',
    related: 'Skin and hair-product claims',
    topics: ['skin', 'hair'],
    lead: 'GHK-Cu in skincare and research',
    contextNote:
      'Topical cosmetic context. Injectable use requires a separate safety and regulatory assessment.',
    body: [
      'GHK-Cu, also called copper tripeptide-1, appears in topical cosmetic products. Small studies have examined particular formulations in specific skin settings. These studies do not establish that every product reverses skin ageing, regrows hair, or produces the same results. [11]',
      'The route matters. Evidence about a topical cosmetic does not establish that injecting the ingredient is safe or effective. The FDA identifies specific concerns and limited human safety data for injectable GHK-Cu. [4]',
    ],
    question:
      'What evidence exists for this exact product and my concern, and how does it compare with established skincare or hair-loss options?',
    links: [
      { label: 'Explore skin changes', href: '/symptoms/skin/', primary: true },
      { label: 'Explore hair thinning', href: '/symptoms/hair/' },
      { label: 'Return to the peptide list', href: '/peptides/' },
    ],
  },
  {
    slug: 'ipamorelin',
    name: 'Ipamorelin',
    aliases: [],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Growth-hormone and recovery claims',
    topics: ['recovery'],
    lead: 'Understand the gap between signalling and outcomes.',
    body: [
      'Ipamorelin is discussed in growth-hormone research and wellness marketing. An effect on a biological pathway does not establish safe, meaningful improvements in recovery or body composition for women. [2,4]',
    ],
    concerns: [concern.recovery],
  },
  {
    slug: 'kisspeptin-10',
    name: 'Kisspeptin-10',
    aliases: ['kisspeptin 10'],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Reproductive signalling',
    topics: ['sexual'],
    lead: 'Reproductive signalling deserves careful interpretation.',
    body: [
      'Kisspeptin research includes studies of sexual processing and reproductive hormones. A small trial using kisspeptin-54 in premenopausal women does not validate commercial kisspeptin-10 products or establish treatment of menopause, infertility, or low desire. Different forms are not interchangeable. [12]',
    ],
    concerns: [concern.sexual],
  },
  {
    slug: 'kpv',
    name: 'KPV',
    aliases: [],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Digestion and inflammation claims',
    topics: ['digestion'],
    lead: 'Explore the evidence behind gut-health interest.',
    body: [
      'KPV appears in discussions of inflammation and digestive health. Femalin does not present it as an established treatment for digestive symptoms. The cause of ongoing symptoms should guide a clinical conversation. [2,4]',
    ],
    concerns: [concern.digestion],
  },
  {
    slug: 'mots-c',
    name: 'MOTS-c',
    aliases: ['MOTS c'],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Energy and metabolism claims',
    topics: ['energy', 'weight'],
    lead: 'Metabolism research needs context.',
    body: [
      'MOTS-c attracts interest around energy and metabolic signalling. That interest does not establish treatment for unexplained fatigue or justify “exercise in a vial” claims. Understand the limitations before interpreting marketing promises. [2,4]',
    ],
    concerns: [concern.energy, concern.weight],
  },
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    aliases: ['Wegovy'],
    labelKey: 'rx',
    labelText: 'Prescription medicine',
    related: 'Specific metabolic and weight indications',
    topics: ['weight'],
    lead: 'Semaglutide and the weight-management conversation',
    jurisdiction: 'United States (prescribing information for Wegovy)',
    body: [
      'Semaglutide is a GLP-1 receptor agonist. Specific approved products are used for particular conditions; the name alone does not tell you the indication or formulation. Wegovy has approved weight-management uses for eligible patients. [7]',
      'Treatment requires an assessment and ongoing monitoring. Gastrointestinal effects are common. Important risks include pancreatitis and gallbladder problems. The US label includes a boxed warning about thyroid C-cell tumours and contraindicates use with a personal or family history of medullary thyroid carcinoma or MEN2. Discuss pregnancy plans, medicines, and the full product information with your prescriber. [7]',
    ],
    official: { label: 'Wegovy prescribing information (DailyMed)', source: 7 },
    question:
      'Which approved product, if any, fits my health needs—and how will we assess progress and side effects?',
    links: [
      { label: 'Explore weight and appetite', href: '/symptoms/weight-appetite/', primary: true },
      { label: 'Read about tirzepatide', href: '/peptides/tirzepatide/' },
      { label: 'Return to the peptide list', href: '/peptides/' },
    ],
  },
  {
    slug: 'semax',
    name: 'Semax',
    aliases: [],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Focus and cognitive claims',
    topics: ['focus'],
    lead: 'Separate cognitive research from brain-fog promises.',
    body: [
      'Semax appears in discussions of focus and cognition. Femalin does not describe it as a proven treatment for everyday concentration problems or menopausal brain fog. Regulatory and clinical contexts differ between countries. [2,4]',
    ],
    concerns: [concern.brain],
  },
  {
    slug: 'sermorelin',
    name: 'Sermorelin',
    aliases: ['Geref'],
    labelKey: 'other',
    labelText: 'Other clinical context',
    related: 'Historical drug use and modern wellness claims',
    topics: ['energy'],
    lead: 'Sermorelin beyond the wellness headlines',
    contextNote:
      'Historical clinical drug context; current product and jurisdiction require verification.',
    body: [
      'Sermorelin has a history of US drug approvals as Geref. Those approvals were withdrawn after the products were discontinued; the FDA later determined that the discontinuation was not for safety or effectiveness reasons. That history does not mean a present-day compounded formulation is FDA-approved. [10]',
      'Modern advertising often makes much broader claims about energy, body composition, sleep, and ageing. Historical drug use does not establish those outcomes for healthy women. Ask a qualified clinician to explain the evidence for the proposed use and the legal status of the exact product.',
    ],
    question:
      'What diagnosis are we treating, what evidence supports the proposed use, and what are the risks and monitoring requirements?',
    links: [
      { label: 'Explore low energy', href: '/symptoms/low-energy/', primary: true },
      { label: 'Read evidence and safety', href: '/evidence-safety/' },
      { label: 'Return to the peptide list', href: '/peptides/' },
    ],
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    aliases: [],
    labelKey: 'experimental',
    labelText: 'Experimental research',
    related: 'Tissue-repair claims',
    topics: ['recovery'],
    lead: 'Understand which compound was actually studied.',
    body: [
      'TB-500 marketing often draws on broader thymosin beta-4 research. A fragment or commercial product cannot inherit evidence from a different molecule. Femalin does not present TB-500 as an established injury treatment. [3,4]',
    ],
    concerns: [concern.recovery],
  },
  {
    slug: 'thymosin-alpha-1',
    name: 'Thymosin alpha-1',
    aliases: ['TA-1', 'TA1'],
    aka: 'Thymosin alpha-1 / TA-1',
    labelKey: 'experimental',
    labelText: 'Research in this wellness context',
    related: 'Immune-related claims',
    topics: [],
    lead: 'Clinical research is specific to its setting.',
    body: [
      'Thymosin alpha-1 has been studied in immune-related contexts. This does not establish a general “immune reset,” prevention of ordinary illness, or a healthy-ageing treatment. Any clinical use requires its own jurisdiction and indication review. [2,4]',
    ],
    // The brief sends this profile to the basics article rather than a symptom page.
    concerns: [],
    relatedReading: { label: 'Read peptide basics', href: '/learn/peptide-basics/' },
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    aliases: ['Zepbound', 'Mounjaro'],
    labelKey: 'rx',
    labelText: 'Prescription medicine',
    related: 'Specific metabolic and weight indications',
    topics: ['weight'],
    lead: 'Tirzepatide and metabolic health',
    jurisdiction: 'United States (prescribing information for Zepbound)',
    body: [
      'Tirzepatide acts on GIP and GLP-1 receptors. Certain branded products have approved uses for eligible patients, including weight management; suitability depends on the product label and individual assessment. [8]',
      'Common side effects include gastrointestinal symptoms. The US Zepbound label includes a thyroid C-cell tumour boxed warning and contraindications involving medullary thyroid carcinoma or MEN2. Other important risks include pancreatitis and gallbladder problems. Tirzepatide can affect oral hormonal contraceptive effectiveness: the US label advises a non-oral method or added barrier protection for four weeks after starting and after each dose increase. Review pregnancy plans and full prescribing information. [8]',
    ],
    official: { label: 'Zepbound prescribing information (DailyMed)', source: 8 },
    links: [
      { label: 'Explore weight and appetite', href: '/symptoms/weight-appetite/', primary: true },
      { label: 'Read about semaglutide', href: '/peptides/semaglutide/' },
      { label: 'Return to the peptide list', href: '/peptides/' },
    ],
  },
];

export const bySlug = Object.fromEntries(peptides.map((p) => [p.slug, p]));
