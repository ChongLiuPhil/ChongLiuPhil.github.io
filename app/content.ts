export type Language = 'zh' | 'en';
export type BilingualText = Record<Language, string>;

export type PublicationLink = {
  label: BilingualText;
  href: string;
};

export type Publication = {
  id: string;
  originalLanguage?: Language;
  year: string;
  featured: boolean;
  title: BilingualText;
  authors: string;
  venue: BilingualText;
  links: PublicationLink[];
};

export type TimelineItem = {
  id: string;
  period: string;
  title: BilingualText;
  institution: BilingualText;
  detail?: BilingualText;
};

export const academicContent = {
  schemaVersion: 1,
  isSample: false,
  profile: {
    name: { zh: '刘崇', en: 'Chong Liu' },
    role: { zh: '哲学', en: 'Philosophy' },
    affiliation: null as BilingualText | null,
    statement: {
      zh: '关注知识如何成立、科学如何解释、语言如何指称，以及因果关系与意识如何塑造我们对世界的理解。',
      en: 'Exploring how knowledge is grounded, how science explains, how language refers, and how causation and consciousness shape our understanding of the world.',
    },
    bio: {
      zh: '刘崇的研究兴趣涵盖认识论、科学哲学、语言哲学、因果关系与意识，关注这些领域之间相互连接的基础问题。',
      en: 'Chong Liu’s interests span epistemology, philosophy of science, philosophy of language, causation, and consciousness, with attention to the foundational questions connecting these fields.',
    },
    researchOverview: {
      zh: '我的研究以一组彼此关联的问题为线索：信念在什么条件下构成知识，解释何以具有科学性，语言与概念如何触及世界，因果结构如何支撑解释，以及主观经验与第三人称描述之间具有何种关系。我尤其关注这些问题交汇之处，因为知识、解释、指称、因果与意识并非彼此孤立，而是共同塑造我们如何理解现实。',
      en: 'My research is organized around a connected set of questions: under what conditions belief amounts to knowledge; what makes an explanation scientific; how language and concepts reach the world; how causal structure supports explanation; and how subjective experience relates to third-person description. I am especially interested in where these questions intersect, because knowledge, explanation, reference, causation, and consciousness jointly shape how reality becomes intelligible to us.',
    },
    epigraph: {
      zh: '桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。',
      en: 'With cassia oars and magnolia sweeps, I strike the lucent void and trace the streaming light. Far-reaching are my thoughts; I gaze toward the one I long for at the edge of the sky.',
    },
    epigraphSource: {
      zh: '苏轼《前赤壁赋》',
      en: 'Su Shi · Former Ode on the Red Cliffs',
    },
    email: 'chong.liu.phil@outlook.com',
    cvHref: '',
    externalLinks: [
      { label: 'ORCID', href: 'https://orcid.org/0009-0009-8116-1255' },
    ],
  },
  researchAreas: [
    {
      id: 'epistemology',
      number: '01',
      title: { zh: '认识论', en: 'Epistemology' },
      description: {
        zh: '关注知识、证成与理性信念的条件，以及认识主体如何形成并修正对世界的理解。',
        en: 'Questions about knowledge, justification, and rational belief—and how epistemic agents form and revise their understanding of the world.',
      },
      keywords: { zh: '知识 · 证成 · 理性', en: 'Knowledge · Justification · Rationality' },
    },
    {
      id: 'philosophy-of-science',
      number: '02',
      title: { zh: '科学哲学', en: 'Philosophy of Science' },
      description: {
        zh: '探讨科学解释、理论选择与方法论，以及科学实践如何支持我们对世界的可靠认识。',
        en: 'Scientific explanation, theory choice, and methodology—and how scientific practice supports reliable understanding of the world.',
      },
      keywords: { zh: '解释 · 理论 · 方法', en: 'Explanation · Theory · Method' },
    },
    {
      id: 'philosophy-of-language',
      number: '03',
      title: { zh: '语言哲学', en: 'Philosophy of Language' },
      description: {
        zh: '研究意义、指称与语境，并考察语言、思想和现实之间的关系。',
        en: 'Meaning, reference, and context, with particular attention to the relations among language, thought, and reality.',
      },
      keywords: { zh: '意义 · 指称 · 语境', en: 'Meaning · Reference · Context' },
    },
    {
      id: 'causation',
      number: '04',
      title: { zh: '因果关系', en: 'Causation' },
      description: {
        zh: '关注因果解释、规律与反事实之间的关系，以及因果概念在科学与日常推理中的作用。',
        en: 'Causal explanation, laws, and counterfactuals—and the role causal concepts play in scientific and everyday reasoning.',
      },
      keywords: { zh: '解释 · 规律 · 反事实', en: 'Explanation · Laws · Counterfactuals' },
    },
    {
      id: 'consciousness',
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
    sample: '哲学 · 求真',
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
    publicationsPending: '稍后添加论文',
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
    sample: 'Philosophy · In pursuit of truth',
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
    publicationsPending: 'Publications will be added later',
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
