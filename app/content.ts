export type Language = 'zh' | 'en';
export type BilingualText = Record<Language, string>;

export type PublicationLink = {
  label: BilingualText;
  href: string;
};

export type Publication = {
  year: string;
  featured: boolean;
  title: BilingualText;
  authors: string;
  venue: BilingualText;
  links: PublicationLink[];
};

export type TimelineItem = {
  period: string;
  title: BilingualText;
  institution: BilingualText;
  detail?: BilingualText;
};

export const academicContent = {
  isSample: false,
  profile: {
    name: { zh: '刘崇', en: 'Chong Liu' },
    role: { zh: 'Chong Liu · 英文名 John', en: 'English name · John' },
    affiliation: null as BilingualText | null,
    statement: {
      zh: '关注知识如何成立、科学如何解释、语言如何指称，以及因果关系与意识如何塑造我们对世界的理解。',
      en: 'Exploring how knowledge is grounded, how science explains, how language refers, and how causation and consciousness shape our understanding of the world.',
    },
    bio: {
      zh: '刘崇的研究兴趣涵盖认识论、科学哲学、语言哲学、因果关系与意识，关注这些领域之间相互连接的基础问题。',
      en: 'Chong Liu’s interests span epistemology, philosophy of science, philosophy of language, causation, and consciousness, with attention to the foundational questions connecting these fields.',
    },
    email: 'chong.liu.phil@outlook.com',
    cvHref: '',
    externalLinks: [
      { label: 'ORCID', href: 'https://orcid.org/0009-0009-8116-1255' },
    ],
  },
  researchAreas: [
    {
      number: '01',
      title: { zh: '认识论', en: 'Epistemology' },
      description: {
        zh: '关注知识、证成与理性信念的条件，以及认识主体如何形成并修正对世界的理解。',
        en: 'Questions about knowledge, justification, and rational belief—and how epistemic agents form and revise their understanding of the world.',
      },
      keywords: { zh: '知识 · 证成 · 理性', en: 'Knowledge · Justification · Rationality' },
    },
    {
      number: '02',
      title: { zh: '科学哲学', en: 'Philosophy of Science' },
      description: {
        zh: '探讨科学解释、理论选择与方法论，以及科学实践如何支持我们对世界的可靠认识。',
        en: 'Scientific explanation, theory choice, and methodology—and how scientific practice supports reliable understanding of the world.',
      },
      keywords: { zh: '解释 · 理论 · 方法', en: 'Explanation · Theory · Method' },
    },
    {
      number: '03',
      title: { zh: '语言哲学', en: 'Philosophy of Language' },
      description: {
        zh: '研究意义、指称与语境，并考察语言、思想和现实之间的关系。',
        en: 'Meaning, reference, and context, with particular attention to the relations among language, thought, and reality.',
      },
      keywords: { zh: '意义 · 指称 · 语境', en: 'Meaning · Reference · Context' },
    },
    {
      number: '04',
      title: { zh: '因果关系', en: 'Causation' },
      description: {
        zh: '关注因果解释、规律与反事实之间的关系，以及因果概念在科学与日常推理中的作用。',
        en: 'Causal explanation, laws, and counterfactuals—and the role causal concepts play in scientific and everyday reasoning.',
      },
      keywords: { zh: '解释 · 规律 · 反事实', en: 'Explanation · Laws · Counterfactuals' },
    },
    {
      number: '05',
      title: { zh: '意识', en: 'Consciousness' },
      description: {
        zh: '探讨主观经验的性质、意识与世界的关系，以及第一人称体验带来的哲学问题。',
        en: 'The nature of subjective experience, the relation between consciousness and the world, and the philosophical problems raised by first-person experience.',
      },
      keywords: { zh: '经验 · 心灵 · 世界', en: 'Experience · Mind · World' },
    },
  ],
  publications: [] as Publication[],
  experience: [] as TimelineItem[],
  education: [] as TimelineItem[],
  honors: [] as Array<{ year: string; title: BilingualText }>,
};

export const interfaceCopy = {
  zh: {
    sample: '哲学研究 · 内容持续更新',
    wordmark: '刘崇',
    nav: [
      { label: '研究', href: '#research' },
      { label: '论文', href: '#publications' },
      { label: '联系', href: '#contact' },
    ],
    switchLanguage: 'Switch to English',
    switchLabel: 'EN',
    scroll: '向下浏览',
    researchEyebrow: '研究方向',
    researchTitle: '以问题为起点，以证据为方法',
    publicationsEyebrow: '代表性论文',
    publicationsTitle: '论文与研究成果',
    publicationsIntro: '代表性论文将在收到完整书目信息后添加。',
    publicationsPending: '论文资料待补充',
    featured: '代表作',
    experienceEyebrow: '学术经历',
    experienceTitle: '研究、教学与合作',
    educationEyebrow: '教育与荣誉',
    educationTitle: '训练与认可',
    educationLabel: '教育背景',
    honorsLabel: '荣誉与服务',
    contactEyebrow: '联系',
    contactTitle: '让新的问题从一次交流开始',
    contactBody: '欢迎就认识论、科学哲学、语言哲学、因果关系与意识等问题进行交流。',
    checklist: ['中英文姓名与学术身份', '80–120 字个人简介', '3–6 篇代表性论文', '公开邮箱与学术主页链接'],
    cv: '下载简历',
    footer: '刘崇 · Chong Liu',
    updated: '哲学研究',
  },
  en: {
    sample: 'Philosophy · Research in progress',
    wordmark: 'Chong Liu',
    nav: [
      { label: 'Research', href: '#research' },
      { label: 'Publications', href: '#publications' },
      { label: 'Contact', href: '#contact' },
    ],
    switchLanguage: '切换至中文',
    switchLabel: '中',
    scroll: 'Scroll to explore',
    researchEyebrow: 'Research agenda',
    researchTitle: 'Questions first. Evidence always.',
    publicationsEyebrow: 'Selected publications',
    publicationsTitle: 'Publications and research',
    publicationsIntro: 'Selected publications will be added once complete bibliographic details are available.',
    publicationsPending: 'Publication details forthcoming',
    featured: 'Selected',
    experienceEyebrow: 'Academic experience',
    experienceTitle: 'Research, teaching, and collaboration',
    educationEyebrow: 'Education & honors',
    educationTitle: 'Training and recognition',
    educationLabel: 'Education',
    honorsLabel: 'Honors & service',
    contactEyebrow: 'Contact',
    contactTitle: 'Let the next question begin with a conversation.',
    contactBody: 'Questions and correspondence concerning epistemology, philosophy of science, philosophy of language, causation, and consciousness are welcome.',
    checklist: ['Name and academic title in both languages', 'An 80–120 word biography', 'Three to six selected publications', 'A public email and academic profile links'],
    cv: 'Download CV',
    footer: 'Chong Liu · 刘崇',
    updated: 'Philosophy',
  },
} as const;
