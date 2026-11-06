// Symptom finder — 10 concerns. Copy is taken from the website copy document.
// `icon` keys map to the inline SVG icons in templates.mjs.

export const symptomIntro = {
  heading: 'Find your symptoms, find your peptides.',
  body: 'Start with what you are noticing. We will show you relevant peptide information, the strength of the evidence, and questions worth bringing to a healthcare professional. Sometimes the most useful next step is a different kind of care.',
  note: 'These connections are reading suggestions, not a diagnosis, prescription, or confirmation that a peptide treats your symptoms.',
  bottom: 'Your concern is not listed? You can still explore the complete peptide library or contact Femalin with a general question.',
};

export const symptoms = [
  {
    slug: 'weight-appetite',
    icon: 'weight',
    group: 'Weight, Energy, Sleep and Focus',
    concern: 'Weight and appetite',
    card: 'Weight changes or persistent hunger? Understand the prescription options and the limits of fat-loss claims.',
    heading: 'Understand the options behind weight and appetite changes.',
    body: [
      'Weight concerns deserve a thoughtful conversation. Certain prescription peptide medicines have approved weight-management uses for eligible patients. Their benefits, risks, and suitability depend on the specific medicine and your medical history. They are not interchangeable with experimental compounds promoted for “stubborn fat.” [7,8]',
    ],
    reading: 'Semaglutide and tirzepatide. For context on unestablished claims, see AOD-9604 and MOTS-c in the research section.',
    ask: [
      'Am I eligible for an approved treatment?',
      'How will we monitor tolerability, nutrition, and progress?',
      'What matters for my other medicines or pregnancy plans?',
    ],
    ctas: [
      { label: 'Compare semaglutide and tirzepatide', href: '/learn/weight-management-options/', primary: true },
      { label: 'Explore another concern', href: '/symptoms/' },
    ],
  },
  {
    slug: 'low-energy',
    icon: 'energy',
    group: 'Weight, Energy, Sleep and Focus',
    concern: 'Low energy',
    card: 'Feeling drained? Start with the context behind energy and metabolism claims.',
    heading: 'Start with why you feel tired.',
    body: [
      'Ongoing fatigue deserves an assessment rather than an automatic peptide recommendation. Femalin’s energy-related profiles explain why compounds attract interest and where the evidence remains uncertain. Research interest does not establish a treatment for unexplained fatigue.',
    ],
    reading: 'MOTS-c and sermorelin—context only, not established treatments for general fatigue.',
    ask: [
      'What should we assess before considering a treatment?',
      'Could my sleep, medicines, nutrition, or another health issue be contributing?',
    ],
    ctas: [
      { label: 'Read about MOTS-c', href: '/peptides/mots-c/', primary: true },
      { label: 'Explore another concern', href: '/symptoms/' },
    ],
  },
  {
    slug: 'sleep',
    icon: 'sleep',
    group: 'Weight, Energy, Sleep and Focus',
    concern: 'Disrupted sleep',
    card: 'Trouble settling or staying asleep? Separate sleep research from proven treatments.',
    heading: 'Better sleep starts with understanding the disruption.',
    body: [
      'Sleep can change during the menopausal transition. A review of your symptoms and sleep patterns can help identify useful options. DSIP and Epitalon are discussed online for sleep, but this is not the same as an established insomnia treatment. [4,13]',
    ],
    reading: 'DSIP and Epitalon, both clearly labelled as experimental for these goals.',
    ctas: [
      { label: 'Read the sleep research overview', href: '/learn/sleep-research/', primary: true },
      { label: 'Explore midlife changes', href: '/symptoms/midlife/' },
    ],
  },
  {
    slug: 'brain-fog',
    icon: 'focus',
    group: 'Weight, Energy, Sleep and Focus',
    concern: 'Brain fog and focus',
    card: 'Feeling less mentally sharp? Explore the questions behind cognitive peptide claims.',
    heading: 'Give changes in clarity the attention they deserve.',
    body: [
      'Trouble concentrating is a reason to ask questions. Semax appears in cognitive peptide discussions, but it should not be presented as a proven solution for everyday brain fog or menopausal cognitive concerns. [2,4]',
    ],
    reading: 'Semax. Start with an assessment of the change you are experiencing rather than a self-selected compound.',
    ctas: [
      { label: 'Understand Semax', href: '/peptides/semax/', primary: true },
      { label: 'Explore another concern', href: '/symptoms/' },
    ],
  },
  {
    slug: 'recovery',
    icon: 'recovery',
    group: 'Recovery, Digestion, Skin and Hair',
    concern: 'Recovery and discomfort',
    card: 'Lingering soreness or slower recovery? Look at the research before the promises.',
    heading: 'Know what recovery claims are built on.',
    body: [
      'BPC-157 and TB-500 feature in many online recovery conversations. Experimental findings do not establish that these products safely heal an injury in people. Persistent pain or a change in function deserves a proper assessment. [3,4]',
    ],
    reading: 'BPC-157 and TB-500; research information only, with no purchase or treatment-match button.',
    ask: [
      'What is causing the discomfort?',
      'What rehabilitation or established treatment options fit my situation?',
    ],
    ctas: [
      { label: 'Read about BPC-157', href: '/peptides/bpc-157/', primary: true },
      { label: 'Read about TB-500', href: '/peptides/tb-500/' },
      { label: 'Explore another concern', href: '/symptoms/' },
    ],
  },
  {
    slug: 'digestion',
    icon: 'digestion',
    group: 'Recovery, Digestion, Skin and Hair',
    concern: 'Digestive concerns',
    card: 'Bloating or ongoing gut symptoms? Understand why the cause matters.',
    heading: 'Understand the symptom before choosing the solution.',
    body: [
      'Gut-health marketing can make very different problems sound alike. BPC-157 and KPV attract interest in this area, but they should not be presented as established treatments for unexplained digestive symptoms. Understanding the cause gives you a more useful starting point. [2,4]',
    ],
    reading: 'KPV and BPC-157, with clear limits on what can be concluded.',
    ctas: [
      { label: 'Read about KPV', href: '/peptides/kpv/', primary: true },
      { label: 'Explore another concern', href: '/symptoms/' },
    ],
  },
  {
    slug: 'skin',
    icon: 'skin',
    group: 'Recovery, Digestion, Skin and Hair',
    concern: 'Skin changes',
    card: 'Changes in texture or firmness? Learn what topical copper peptides can and cannot tell you.',
    heading: 'A closer look at peptides in skincare.',
    body: [
      'Topical copper peptides appear in skincare products and have been studied in specific settings. Results depend on the formulation and use studied; evidence for one product does not validate every serum. Topical cosmetic use also does not establish the safety of injectable GHK-Cu. [4,11]',
    ],
    reading: 'GHK-Cu, with topical and injectable contexts kept separate.',
    ctas: [
      { label: 'Explore GHK-Cu', href: '/peptides/ghk-cu/', primary: true },
      { label: 'Explore another concern', href: '/symptoms/' },
    ],
  },
  {
    slug: 'hair',
    icon: 'hair',
    group: 'Recovery, Digestion, Skin and Hair',
    concern: 'Hair thinning',
    card: 'Noticing changes in fullness? Explore the evidence and the importance of assessment.',
    heading: 'Start with the cause of the change.',
    body: [
      'Changes in hair fullness deserve a careful assessment. Copper peptides appear in hair-product discussions, but Femalin does not present GHK-Cu as a proven treatment for female hair loss. Learn what a product claim does—and does not—establish. [3]',
    ],
    reading: 'GHK-Cu for context on cosmetic claims. Discuss established hair-loss options with a qualified healthcare professional.',
    ctas: [
      { label: 'Read about GHK-Cu', href: '/peptides/ghk-cu/', primary: true },
      { label: 'Explore another concern', href: '/symptoms/' },
    ],
  },
  {
    slug: 'sexual-wellbeing',
    icon: 'heart',
    group: 'Intimacy and Midlife',
    concern: 'Low sexual desire',
    card: 'Less interest in intimacy? Understand the difference between desire, discomfort, and a specific diagnosis.',
    heading: 'Make room for an honest conversation about desire.',
    body: [
      'Changes in sexual interest can be personal and difficult to explain. Desire, pain during sex, and vaginal dryness are different concerns and may call for different approaches. Understanding what has changed matters more than choosing a compound first. [9,14]',
      'In the United States, branded bremelanotide is approved for a specific diagnosis in certain premenopausal women. It is not a general libido enhancer and is not indicated for postmenopausal women. Kisspeptin-10 remains an experimental topic rather than an established alternative. [9,12]',
    ],
    reading: 'Bremelanotide / PT-141; Kisspeptin-10 in the research section.',
    ask: [
      'Does my concern involve desire, discomfort, or both?',
      'Could medication or another health issue be relevant?',
      'Which evidence-based options fit my life stage?',
    ],
    ctas: [
      { label: 'Read about bremelanotide', href: '/peptides/bremelanotide/', primary: true },
      { label: 'Explore midlife changes', href: '/symptoms/midlife/' },
      { label: 'Explore another concern', href: '/symptoms/' },
    ],
  },
  {
    slug: 'midlife',
    icon: 'midlife',
    group: 'Intimacy and Midlife',
    concern: 'Midlife changes',
    card: 'Several things changing at once? Begin with the broader perimenopause and menopause picture.',
    heading: 'Several changes deserve one thoughtful conversation.',
    body: [
      'The menopausal transition can affect sleep, temperature regulation, sexual comfort, and concentration. Changes in weight and body composition can also occur around this stage of life. A broader assessment helps you discuss the concerns together. [13]',
      'Peptide research is one part of a much larger health conversation. Femalin does not present peptides as a way to reverse menopause, restore fertility, or replace individualized menopause care.',
    ],
    reading: 'Weight-management medicines where clinically appropriate; topical GHK-Cu for skincare context. Neither is a general treatment for menopause.',
    ask: [
      'Which of my symptoms may be related?',
      'What established hormonal or nonhormonal options should we discuss?',
      'What else needs assessment?',
    ],
    ctas: [
      { label: 'Explore weight and appetite', href: '/symptoms/weight-appetite/', primary: true },
      { label: 'Explore sleep', href: '/symptoms/sleep/' },
      { label: 'Explore sexual wellbeing', href: '/symptoms/sexual-wellbeing/' },
    ],
  },
];

export const symptomBySlug = Object.fromEntries(symptoms.map((s) => [s.slug, s]));
