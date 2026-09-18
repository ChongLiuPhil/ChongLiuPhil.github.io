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

export type PublicEducationProject = {
  id: string;
  year: string;
  title: BilingualText;
  description: BilingualText;
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
    alternateNames: ['刘崇', 'John'],
    role: { zh: '哲学', en: 'Philosophy' },
    affiliation: null as BilingualText | null,
    statement: {
      zh: '研究知识、因果与科学解释、语言与指称、意识，以及人工智能正在如何改变知识生产与研究实践。',
      en: 'Research on knowledge, causation and scientific explanation, language and reference, consciousness, and how AI is changing knowledge production and research practice.',
    },
    bio: {
      zh: '刘崇从事哲学研究，兴趣涵盖认识论、科学哲学、语言哲学、因果与概率、意识、数学与形式推理的哲学基础，以及人工智能与认识主体性。他也关注人—AI协作、论证结构、研究方法与可审计的知识生产。',
      en: 'Chong Liu works in philosophy, with interests spanning epistemology, philosophy of science, philosophy of language, causation and probability, consciousness, the philosophical foundations of mathematics and formal reasoning, and AI and epistemic agency. He also studies human–AI collaboration, argument structure, research methodology, and auditable knowledge production.',
    },
    researchOverview: {
      zh: '我的研究围绕一组相互连接的问题展开：知识与证成在什么条件下成立；因果、概率与解释如何进入科学推理；概念、语言与指称如何与世界建立稳定关系；主观经验与第三人称描述之间如何关联；以及当人工智能参与阅读、推理、写作、验证与知识生产时，人的研究判断、认识责任和协作方式如何发生变化。另一个持续关注的问题是：形式模型、数学推理与数字化研究工具，如何在不掩盖概念差异和证据限制的前提下帮助哲学研究。',
      en: 'My research is organized around a connected set of questions: under what conditions knowledge and justification are possible; how causation, probability, and explanation enter scientific reasoning; how concepts, language, and reference maintain stable relations to the world; how subjective experience relates to third-person description; and how human judgment, epistemic responsibility, and collaboration change when AI participates in reading, reasoning, writing, verification, and knowledge production. I also study how formal models, mathematical reasoning, and digital research tools can support philosophy without obscuring conceptual differences or evidential limits.',
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
      { label: 'GitHub', href: 'https://github.com/ChongLiuPhil' },
    ],
  },
  researchAreas: [
    {
      id: 'epistemology',
      number: '01',
      title: { zh: '认识论', en: 'Epistemology' },
      description: {
        zh: '研究知识、证成、怀疑论、认识价值与社会知识生产，以及认识主体如何在不确定性、专家系统与技术环境中形成和修正信念。',
        en: 'Knowledge, justification, skepticism, epistemic value, and social knowledge production, including how epistemic agents form and revise beliefs under uncertainty, expertise, and technological mediation.',
      },
      keywords: { zh: '知识 · 证成 · 认识价值', en: 'Knowledge · Justification · Epistemic Value' },
    },
    {
      id: 'causation-science',
      number: '02',
      title: { zh: '因果、概率与科学解释', en: 'Causation, Probability & Scientific Explanation' },
      description: {
        zh: '关注因果关系如何被识别和解释，概率、频率、反事实与结构模型如何参与科学推理，以及不同方法之间如何保持概念与证据上的清晰。',
        en: 'How causal relations are identified and explained; how probability, frequency, counterfactuals, and structural models enter scientific reasoning; and how methodological approaches can remain conceptually and evidentially clear.',
      },
      keywords: { zh: '因果 · 概率 · 解释', en: 'Causation · Probability · Explanation' },
    },
    {
      id: 'language-reference-logic',
      number: '03',
      title: { zh: '语言、指称与形式化', en: 'Language, Reference & Formalization' },
      description: {
        zh: '研究概念如何形成，意义与指称如何建立和保持，身份如何跨语境延续，以及逻辑与形式化如何忠实表达其所分析的对象与论证。',
        en: 'How concepts are formed, how meaning and reference are established and maintained, how identity persists across contexts, and how logic and formalization can remain faithful to the objects and arguments they represent.',
      },
      keywords: { zh: '概念 · 指称 · 逻辑', en: 'Concepts · Reference · Logic' },
    },
    {
      id: 'consciousness',
      number: '04',
      title: { zh: '意识', en: 'Consciousness' },
      description: {
        zh: '探讨主观经验的性质、第一人称与第三人称描述之间的关系，以及意识、心灵和世界之间的哲学联系。',
        en: 'The nature of subjective experience, the relation between first-person and third-person description, and the philosophical connections among consciousness, mind, and world.',
      },
      keywords: { zh: '经验 · 主体性 · 心灵', en: 'Experience · Subjectivity · Mind' },
    },
    {
      id: 'ai-epistemic-agency',
      number: '05',
      title: { zh: 'AI 与认识主体性', en: 'AI & Epistemic Agency' },
      description: {
        zh: '研究人工智能参与知识生产后，人的研究判断、认识主体性、责任与协作方式如何变化，以及如何评估 AI 在不同认知任务中的能力与限制。',
        en: 'How human judgment, epistemic agency, responsibility, and collaboration change when AI participates in knowledge production, and how AI capabilities and limitations should be assessed across different cognitive tasks.',
      },
      keywords: { zh: '人工智能 · 认识主体性 · 协作', en: 'AI · Epistemic Agency · Collaboration' },
    },
    {
      id: 'formal-reasoning-methods',
      number: '06',
      title: { zh: '数学、形式推理与研究方法', en: 'Mathematics, Formal Reasoning & Research Methods' },
      description: {
        zh: '关注数学与形式推理如何帮助澄清哲学问题，以及论证映射、证据追踪和可复核的数字研究工作流如何支持长期研究。',
        en: 'How mathematics and formal reasoning can clarify philosophical problems, and how argument mapping, evidence tracking, and inspectable digital workflows can support sustained research.',
      },
      keywords: { zh: '数学 · 形式推理 · 研究方法', en: 'Mathematics · Formal Reasoning · Research Methods' },
    },
  ],
  publications: [
    {
      id: 'discourse-atlas',
      year: '2026',
      featured: false,
      title: { zh: 'Discourse Atlas：复杂文本的论证结构重建', en: 'Discourse Atlas: Argument-Structure Reconstruction for Complex Texts' },
      authors: 'Chong Liu · 刘崇',
      venue: { zh: '开放研究协议与工具', en: 'Open research protocol and toolkit' },
      links: [
        { label: { zh: '在线工具', en: 'Hosted tool' }, href: 'https://chongliuphil.github.io/discourse-atlas/' },
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/ChongLiuPhil/discourse-atlas' },
      ],
    },
    {
      id: 'harc-protocol',
      year: '2026',
      featured: false,
      title: { zh: '人—AI研究协作协议', en: 'Human–AI Research Collaboration Protocol' },
      authors: 'Chong Liu · 刘崇',
      venue: { zh: '开放研究方法与协作协议', en: 'Open research-methodology and collaboration protocol' },
      links: [
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/ChongLiuPhil/Human-AI-Research-Collaboration-Protocol' },
      ],
    },
    {
      id: 'deep-inquiry-workbench',
      year: '2026',
      featured: false,
      title: { zh: 'Deep Inquiry Workbench：深度探究工作台', en: 'Deep Inquiry Workbench' },
      authors: 'Chong Liu · 刘崇',
      venue: { zh: '开放研究方法与 AI 探究工具', en: 'Open research methodology and AI inquiry toolkit' },
      links: [
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/ChongLiuPhil/deep-inquiry-workbench' },
      ],
    },
    {
      id: 'intent-commit',
      year: '2026',
      featured: false,
      title: { zh: 'Intent Commit：AI辅助反思性人类沟通协议', en: 'Intent Commit: A Protocol for AI-Mediated Reflective Human Communication' },
      authors: 'Chong Liu · 刘崇',
      venue: { zh: '开放协议与参考实现', en: 'Open protocol and reference implementation' },
      links: [
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/ChongLiuPhil/intent-commit' },
      ],
    },
  ] as Publication[],
  publicEducationProjects: [
    {
      id: 'epistemology-textbook',
      year: '2026',
      title: { zh: '《我们如何知道？——问题驱动的认识论》', en: 'How Do We Know? — A Problem-Driven Epistemology' },
      description: {
        zh: '面向学习者持续开放的认识论教材项目，属于公益性教育与知识共享工作，不作为代表性研究成果列示。',
        en: 'An openly accessible epistemology textbook project for learners. It is presented as a public-education and knowledge-sharing initiative rather than as a representative research output.',
      },
      links: [
        { label: { zh: '在线阅读', en: 'Read online' }, href: 'https://chongliuphil.github.io/epistemology-textbook/' },
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/ChongLiuPhil/epistemology-textbook' },
      ],
    },
    {
      id: 'causal-inference-reader',
      year: '2026',
      title: { zh: '《因果推理深度读本》', en: 'Causal Inference Reader' },
      description: {
        zh: '面向高年级本科生与研究生的开放自学读本，属于公益性教育与学习资源建设，不作为代表性研究成果列示。',
        en: 'An open self-study reader for advanced undergraduate and graduate learners. It is a public-education and learning-resource project rather than a representative research output.',
      },
      links: [
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/ChongLiuPhil/causal-inference-reader' },
      ],
    },
  ] as PublicEducationProject[],
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
      { label: '公开研究', href: '#publications' },
      { label: '公益教育', href: '#public-education' },
      { label: '联系', href: '#contact' },
    ],
    switchLanguage: 'Switch to English',
    switchLabel: 'EN',
    skip: '跳至正文',
    scroll: '向下浏览',
    researchEyebrow: '研究方向',
    researchTitle: '以问题为起点，考察概念、理由与解释',
    publicationsEyebrow: '公开研究',
    publicationsTitle: '公开研究项目与工具',
    publicationsIntro: '这里只列出已经公开、可以作为研究项目或研究方法工作的内容。未公开项目只在研究方向层面概括，不展示其原创论点或未发表结论。',
    publicationsPending: '公开研究项目将陆续添加',
    publicEducationEyebrow: '公益教育',
    publicEducationTitle: '开放读本与学习资源',
    publicEducationIntro: '这些项目主要服务于学习者与知识共享，不作为代表性研究成果或原创学术贡献列示。',
    featured: '代表作',
    experienceEyebrow: '学术经历',
    experienceTitle: '研究、教学与合作',
    educationEyebrow: '教育与荣誉',
    educationTitle: '训练与认可',
    educationLabel: '教育背景',
    honorsLabel: '荣誉与服务',
    contactEyebrow: '联系',
    contactTitle: '学术交流',
    contactBody: '欢迎就认识论、因果与科学解释、语言与指称、意识、AI 与认识主体性，以及研究方法等问题进行交流。',
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
      { label: 'Public Work', href: '#publications' },
      { label: 'Public Education', href: '#public-education' },
      { label: 'Contact', href: '#contact' },
    ],
    switchLanguage: '切换至中文',
    switchLabel: '中',
    skip: 'Skip to content',
    scroll: 'Scroll to explore',
    researchEyebrow: 'Research agenda',
    researchTitle: 'Starting from problems: concepts, reasons, and explanation',
    publicationsEyebrow: 'Public research',
    publicationsTitle: 'Public research projects and tools',
    publicationsIntro: 'This section lists only already-public work that belongs to research projects or research-methodology development. Unpublished projects are represented only at the level of broad fields and research questions, without exposing original arguments or unpublished conclusions.',
    publicationsPending: 'Public research projects will be added over time',
    publicEducationEyebrow: 'Public education',
    publicEducationTitle: 'Open readers and learning resources',
    publicEducationIntro: 'These projects are intended primarily for learners and public knowledge-sharing. They are not presented as representative research outputs or original scholarly contributions.',
    featured: 'Selected',
    experienceEyebrow: 'Academic experience',
    experienceTitle: 'Research, teaching, and collaboration',
    educationEyebrow: 'Education & honors',
    educationTitle: 'Training and recognition',
    educationLabel: 'Education',
    honorsLabel: 'Honors & service',
    contactEyebrow: 'Contact',
    contactTitle: 'Academic correspondence',
    contactBody: 'Questions and correspondence concerning epistemology, causation and scientific explanation, language and reference, consciousness, AI and epistemic agency, and research methodology are welcome.',
    checklist: ['Name and academic title in both languages', 'An 80–120 word biography', 'Three to six selected publications', 'A public email and academic profile links'],
    cv: 'Download CV',
    footer: 'Chong Liu · 刘崇',
    updated: 'Philosophy',
  },
} as const;
