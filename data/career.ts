export interface CareerStage {
  id: string;
  period: string;
  company: string;
  formalTitle: string;
  practicalRoles: string[];
  overview: string;
  responsibilities: string[];
  achievements?: string[];
  tools: string[];
  domains: string[];
  domainKey: 'transformation' | 'product' | 'platform' | 'operations' | 'finance' | 'foundation';
}

export interface CareerContent {
  sectionTitle: string;
  sectionSubtitle: string;
  labelPracticalRoles: string;
  labelOverview: string;
  labelResponsibilities: string;
  labelAchievements: string;
  labelTools: string;
  labelDomains: string;
  stages: CareerStage[];
}

export const careerDataRu: CareerContent = {
  sectionTitle: 'Карьерный путь',
  sectionSubtitle: 'Эволюция от финансового анализа — через операции и платформы — к продуктовому управлению и цифровой трансформации',
  labelPracticalRoles: 'Практические роли',
  labelOverview: 'Обзор',
  labelResponsibilities: 'Ответственность',
  labelAchievements: 'Результаты',
  labelTools: 'Инструменты и технологии',
  labelDomains: 'Домены',
  stages: [
    {
      id: 'sibur',
      period: '2026 — н.в.',
      company: 'СИБУР',
      formalTitle: 'Руководитель цифровой трансформации',
      practicalRoles: [
        'Product Lead',
        'Process Improvement Lead',
        'AI Lead',
      ],
      overview:
        'Руковожу проектами по автоматизации и улучшению ключевых ИТ-процессов: закупки, инфраструктурное обеспечение, анализ и проектирование, проектное управление и эволюция операционной модели.',
      responsibilities: [
        'Управление проектами по трансформации ключевых ИТ-процессов',
        'Внедрение и развитие Jira и Confluence',
        'Запуск Task & Process Mining',
        'SAP-based внутренние цифровые решения',
        'KPI-дашборды и инструменты прозрачности',
        'AI Инициативы операционной эффективности',
      ],
      tools: ['Jira', 'Confluence', 'Task & Process Mining', 'AI Tools', 'AI-powered analytics', 'SAP Ecosystem', 'FineBI', 'Workflow Automation'],
      domains: ['Трансформация', 'Операции', 'Цифровизация', 'Процессный дизайн', 'Governance', 'Аналитика'],
      domainKey: 'transformation',
    },
    {
      id: 'beeline-cloud',
      period: '2024 — 2025',
      company: 'Beeline Cloud',
      formalTitle: 'Product Lead: облачная платформа',
      practicalRoles: [
        'Product Lead',
        'Platform Strategist',
        'P&L Owner',
        'Customer Journey Lead',
      ],
      overview:
        'Развитие облачной платформы по направлениям IaaS, PaaS, SaaS и безопасности — стратегия, метрики, self-service и финансовая логика.',
      responsibilities: [
        'Развитие облачной платформы',
        'Продуктовая стратегия',
        'Продуктовые метрики и аналитика',
        'P&L-модели и финансовая отчётность',
        'Onboarding и customer journey',
        'Эволюция self-service портала',
        'Кросс-функциональная координация',
      ],
      achievements: [
        'Участие в росте платформы с годовой выручкой >$60M',
        'Внедрение продуктовых метрик',
        'Развитие self-service направления',
      ],
      tools: ['QlikSense', 'Product Metrics', 'P&L', 'CJM', 'IaaS', 'PaaS', 'SaaS', 'Security'],
      domains: ['Продукт', 'Облако', 'Платформы', 'P&L', 'Self-Service', 'Customer Journey'],
      domainKey: 'product',
    },
    {
      id: 'beeline-platform',
      period: '2021 — 2024',
      company: 'Билайн',
      formalTitle: 'Product Manager: внутренняя инженерная платформа',
      practicalRoles: [
        'Product Manager',
        'Internal Platform Lead',
        'Developer Experience Lead',
        'Engineering Enablement Lead',
      ],
      overview:
        'Создание и развитие внутренней инженерной платформы для продуктовых команд и инженеров — интеграция инструментов, инфраструктуры и продуктовых данных в единый опыт.',
      responsibilities: [
        'Развитие внутренней платформы',
        'Self-service workflows для инженеров',
        'Интеграция инженерных инструментов',
        'Маркетплейс платформенных сервисов',
        'Управление средами',
        'Централизованный каталог активов',
        'Метрики инженерных процессов',
      ],
      achievements: [
        '100+ продуктовых команд',
        '2 500+ MAU',
        '40+ интегрированных инструментов',
        '1 268 управляемых сред',
      ],
      tools: ['Miro', 'Figma', 'Git', 'Jenkins', 'Harbor', 'CI/CD', 'APIs', 'Zabbix'],
      domains: ['Продукт', 'Платформы', 'Developer Experience', 'Engineering Enablement', 'Self-Service', 'Инфраструктура'],
      domainKey: 'platform',
    },
    {
      id: 'beeline-ops',
      period: '2019 — 2021',
      company: 'Билайн',
      formalTitle: 'Руководитель операционного контроля ИТ',
      practicalRoles: [
        'IT Operations Lead',
        'Governance Lead',
        'Resource Planning Lead',
        'Delivery Framework Lead',
      ],
      overview:
        'Проектирование и внедрение механизмов governance, планирования и операционного управления ИТ — SOX-контроли, бюджетирование, ресурсное планирование и delivery frameworks.',
      responsibilities: [
        'SOX-комплаенс и внутренние контроли',
        'Управление трудозатратами и мониторинг загрузки',
        'Ресурсное планирование',
        'ИТ-бюджетирование и финансовое планирование',
        'Управление изменениями',
        'Delivery framework на базе Jira',
        'Governance модель для подрядчиков',
      ],
      tools: ['Jira', 'Budgeting', 'Resource Planning', 'SOX Controls', 'Vendor Management'],
      domains: ['Операции', 'Governance', 'Финансы', 'Delivery', 'Планирование', 'Контроли'],
      domainKey: 'operations',
    },
    {
      id: 'beeline-finance',
      period: '2017 — 2019',
      company: 'Билайн',
      formalTitle: 'Старший финансовый аналитик',
      practicalRoles: [
        'Financial Analyst',
        'Investment Analysis Lead',
        'IT Finance Partner',
      ],
      overview:
        'Поддержка ключевых решений в ИТ и телеком-инфраструктуре через финансовое планирование, бизнес-кейсы, инвестиционную приоритизацию и прозрачность затрат.',
      responsibilities: [
        'ROI-модели и бизнес-кейсы',
        'Анализ CAPEX / OPEX',
        'Бюджетирование и контроль затрат',
        'Дашборды эффективности',
        'Инвестиционная приоритизация',
      ],
      tools: ['Financial Modeling', 'ROI', 'Business Case', 'CAPEX', 'OPEX', 'Dashboards'],
      domains: ['Финансы', 'Инвестиции', 'Аналитика', 'Планирование', 'Technology Economics'],
      domainKey: 'finance',
    },
    {
      id: 'early-career',
      period: '2009 — 2017',
      company: 'Huawei / NEC / Tele2',
      formalTitle: 'Финансовый и коммерческий аналитик',
      practicalRoles: [
        'Contract Support',
        'Procurement Analyst',
        'Telecom Finance',
        'Commercial Analytics',
      ],
      overview:
        'Фундаментальный этап карьеры: контрактная поддержка, закупки, финансовый анализ проектов и коммерческая аналитика в телеком-индустрии.',
      responsibilities: [
        'Финансовый анализ проектов',
        'Контрактная поддержка',
        'Закупки и коммерческая аналитика',
        'Работа с телеком-инфраструктурой',
      ],
      tools: ['Financial Analysis', 'Contracts', 'Procurement', 'Telecom Infrastructure'],
      domains: ['Финансы', 'Телеком', 'Контракты', 'Закупки', 'Аналитика'],
      domainKey: 'foundation',
    },
  ],
};

export const careerDataEn: CareerContent = {
  sectionTitle: 'Career Journey',
  sectionSubtitle: 'Evolution from financial analysis — through operations and platforms — to product management and digital transformation',
  labelPracticalRoles: 'Practical Roles',
  labelOverview: 'Overview',
  labelResponsibilities: 'Responsibilities',
  labelAchievements: 'Achievements',
  labelTools: 'Tools & Technologies',
  labelDomains: 'Domains',
  stages: [
    {
      id: 'sibur',
      period: '2026 — Present',
      company: 'SIBUR',
      formalTitle: 'Digital Transformation Lead',
      practicalRoles: [
        'Product Lead',
        'Process Improvement Lead',
        'AI Platform Lead',
      ],
      overview:
        'Leading initiatives focused on automating and improving key IT processes, including procurement, infrastructure management, analysis and design, project management, and the evolution of the operational model.',
      responsibilities: [
        'Managing projects focused on transforming key IT processes',
        'Implementation and development of Jira and Confluence',
        'Launch of Task & Process Mining',
        'SAP-based internal digital solutions',
        'KPI dashboards and transparency tools',
        'AI-driven operational efficiency initiatives',
      ],
      tools: ['Jira', 'Confluence', 'Task & Process Mining', 'AI Tools', 'AI-powered analytics', 'SAP Ecosystem', 'FineBI', 'Workflow Automation'],
      domains: ['Transformation', 'Operations', 'Digitalization', 'Process Design', 'Governance', 'Analytics'],
      domainKey: 'transformation',
    },
    {
      id: 'beeline-cloud',
      period: '2024 — 2025',
      company: 'Beeline Cloud',
      formalTitle: 'Product Lead: Cloud Platform',
      practicalRoles: [
        'Product Lead',
        'Platform Strategist',
        'P&L Owner',
        'Customer Journey Lead',
      ],
      overview:
        'Driving development and growth of a cloud platform across IaaS, PaaS, SaaS and security services, including strategy, metrics, self-service and financial logic.',
      responsibilities: [
        'Cloud platform development',
        'Product strategy',
        'Product metrics and analytics',
        'P&L models and financial reporting',
        'Onboarding and customer journey',
        'Self-service portal evolution',
        'Cross-functional coordination',
      ],
      achievements: [
        'Part of cloud platform growth with annual revenue above $60M',
        'Introduced product metrics framework',
        'Advanced self-service direction',
      ],
      tools: ['QlikSense', 'Product Metrics', 'P&L', 'CJM', 'IaaS', 'PaaS', 'SaaS', 'Security'],
      domains: ['Product', 'Cloud', 'Platforms', 'P&L', 'Self-Service', 'Customer Journey'],
      domainKey: 'product',
    },
    {
      id: 'beeline-platform',
      period: '2021 — 2024',
      company: 'Beeline',
      formalTitle: 'Product Manager: Internal Engineering Platform',
      practicalRoles: [
        'Product Manager',
        'Internal Platform Lead',
        'Developer Experience Lead',
        'Engineering Enablement Lead',
      ],
      overview:
        'Building and evolving an internal engineering platform for product teams and engineers, integrating tools, infrastructure and product data into a single experience.',
      responsibilities: [
        'Internal platform development',
        'Self-service workflows for engineers',
        'Engineering tool integration',
        'Platform service marketplace',
        'Environment management',
        'Centralized asset catalog',
        'Engineering workflow metrics',
      ],
      achievements: [
        '100+ product teams served',
        '2,500+ monthly active users',
        '40+ integrated tools',
        '1,268 managed environments',
      ],
      tools: ['Miro', 'Figma', 'Git', 'Jenkins', 'Harbor', 'CI/CD', 'APIs', 'Zabbix'],
      domains: ['Product', 'Platforms', 'Developer Experience', 'Engineering Enablement', 'Self-Service', 'Infrastructure'],
      domainKey: 'platform',
    },
    {
      id: 'beeline-ops',
      period: '2019 — 2021',
      company: 'Beeline',
      formalTitle: 'Lead of IT Operations',
      practicalRoles: [
        'IT Operations Lead',
        'Governance Lead',
        'Resource Planning Lead',
        'Delivery Framework Lead',
      ],
      overview:
        'Designing and implementing governance, planning and operating mechanisms for IT operations, including SOX controls, budgeting, resource planning and delivery frameworks.',
      responsibilities: [
        'SOX compliance and internal controls',
        'Workload management and monitoring',
        'Resource planning',
        'IT budgeting and financial planning',
        'Change governance',
        'Jira-based delivery framework',
        'Vendor governance model',
      ],
      tools: ['Jira', 'Budgeting', 'Resource Planning', 'SOX Controls', 'Vendor Management'],
      domains: ['Operations', 'Governance', 'Finance', 'Delivery', 'Planning', 'Controls'],
      domainKey: 'operations',
    },
    {
      id: 'beeline-finance',
      period: '2017 — 2019',
      company: 'Beeline',
      formalTitle: 'Senior Financial Analyst',
      practicalRoles: [
        'Financial Analyst',
        'Investment Analysis Lead',
        'IT Finance Partner',
      ],
      overview:
        'Supporting major IT and telecom infrastructure decisions through financial planning, business cases, investment prioritization and cost transparency.',
      responsibilities: [
        'ROI models and business cases',
        'CAPEX / OPEX analysis',
        'Budgeting and cost control',
        'Performance dashboards',
        'Investment prioritization',
      ],
      tools: ['Financial Modeling', 'ROI', 'Business Case', 'CAPEX', 'OPEX', 'Dashboards'],
      domains: ['Finance', 'Investments', 'Analytics', 'Planning', 'Technology Economics'],
      domainKey: 'finance',
    },
    {
      id: 'early-career',
      period: '2009 — 2017',
      company: 'Huawei / NEC / Tele2',
      formalTitle: 'Financial & Commercial Analyst',
      practicalRoles: [
        'Contract Support',
        'Procurement Analyst',
        'Telecom Finance',
        'Commercial Analytics',
      ],
      overview:
        'Foundation stage: contract support, procurement, project financial analysis and commercial analytics in the telecom industry.',
      responsibilities: [
        'Project financial analysis',
        'Contract support',
        'Procurement and commercial analytics',
        'Telecom infrastructure work',
      ],
      tools: ['Financial Analysis', 'Contracts', 'Procurement', 'Telecom Infrastructure'],
      domains: ['Finance', 'Telecom', 'Contracts', 'Procurement', 'Analytics'],
      domainKey: 'foundation',
    },
  ],
};


export const domainConfig: Record<string, { color: string; bg: string; border: string; dot: string; glow: string }> = {
  transformation: {
    color: 'text-[#B07AE6]',
    bg: 'bg-[rgba(176,122,230,0.1)]',
    border: 'border-[rgba(176,122,230,0.2)]',
    dot: 'bg-[#B07AE6]',
    glow: 'shadow-[0_0_12px_rgba(176,122,230,0.2)]',
  },
  product: {
    color: 'text-[#00D4AA]',
    bg: 'bg-[rgba(0,212,170,0.1)]',
    border: 'border-[rgba(0,212,170,0.2)]',
    dot: 'bg-[#00D4AA]',
    glow: 'shadow-[0_0_12px_rgba(0,212,170,0.2)]',
  },
  platform: {
    color: 'text-[#5BA4E6]',
    bg: 'bg-[rgba(91,164,230,0.1)]',
    border: 'border-[rgba(91,164,230,0.2)]',
    dot: 'bg-[#5BA4E6]',
    glow: 'shadow-[0_0_12px_rgba(91,164,230,0.2)]',
  },
  operations: {
    color: 'text-[#7B8AB5]',
    bg: 'bg-[rgba(123,138,181,0.1)]',
    border: 'border-[rgba(123,138,181,0.2)]',
    dot: 'bg-[#7B8AB5]',
    glow: 'shadow-[0_0_12px_rgba(123,138,181,0.2)]',
  },
  finance: {
    color: 'text-[#D4A855]',
    bg: 'bg-[rgba(212,168,85,0.1)]',
    border: 'border-[rgba(212,168,85,0.2)]',
    dot: 'bg-[#D4A855]',
    glow: 'shadow-[0_0_12px_rgba(212,168,85,0.2)]',
  },
  foundation: {
    color: 'text-[#7B8494]',
    bg: 'bg-[rgba(123,132,148,0.1)]',
    border: 'border-[rgba(123,132,148,0.2)]',
    dot: 'bg-[#7B8494]',
    glow: 'shadow-[0_0_12px_rgba(123,132,148,0.2)]',
  },
};
