export type InfluenceType = 'book' | 'person' | 'event';

export interface Influence {
  id: string;
  type: InfluenceType;
  title: { ru: string; en: string };
  subtitle: { ru: string; en: string };
  period: string;
  shortDescription: { ru: string; en: string };
  fullDescription: { ru: string; en: string };
  impact: { ru: string; en: string };
  tags: string[];
  quote?: { ru: string; en: string };
  featured: boolean;
}

export interface InfluencesPageContent {
  pageTitle: string;
  pageSubtitle: string;
  backLabel: string;
  tabAll: string;
  tabBooks: string;
  tabPeople: string;
  tabEvents: string;
  labelImpact: string;
  labelPeriod: string;
  labelClose: string;
  featuredTitle: string;
}

export const influencesPageRu: InfluencesPageContent = {
  pageTitle: 'Что на меня повлияло',
  pageSubtitle: 'Книги, люди и события, которые формировали мой способ думать, принимать решения и смотреть на развитие систем, бизнеса и технологий.',
  backLabel: '\u2190 На главную',
  tabAll: 'Все',
  tabBooks: 'Литература',
  tabPeople: 'Люди',
  tabEvents: 'События',
  labelImpact: 'Почему это важно',
  labelPeriod: 'Период',
  labelClose: 'Закрыть',
  featuredTitle: 'Ключевые влияния',
};

export const influencesPageEn: InfluencesPageContent = {
  pageTitle: 'What Shaped My Thinking',
  pageSubtitle: 'Books, people and events that shaped how I think, make decisions and approach the development of systems, business and technology.',
  backLabel: '\u2190 Back to main',
  tabAll: 'All',
  tabBooks: 'Books',
  tabPeople: 'People',
  tabEvents: 'Events',
  labelImpact: 'Why it matters',
  labelPeriod: 'Period',
  labelClose: 'Close',
  featuredTitle: 'Key influences',
};

export const influences: Influence[] = [
  {
    id: 'book-1',
    type: 'book',
    title: { ru: 'Биология добра и зла', en: 'Behave: The Biology of Humans at Our Best and Worst' },
    subtitle: { ru: 'Роберт Сапольски', en: 'Robert Sapolsky' },
    period: '',
    shortDescription: { ru: 'О том, как биология и среда зачастую определяют поведение человека.', en: 'How biology and environment fundamentally shape human behavior.' },
    fullDescription: { ru: 'Автор показывает, как нейробиология, биохимия, экология и культура влияют на каждое решение. Эта книга изменила мой взгляд на мотивацию людей в командах и ограничения рационального подхода к управлению.', en: 'The author shows how neurobiology, biochemistry, environment, and culture influence every decision we make. This book reshaped how I understand human motivation in teams and the limits of purely rational management.' },
    impact: { ru: 'Сформировала понимание мотивации, поведения и ограничений рациональности.', en: 'Shaped my understanding of human behavior, motivation, and limits of rationality.' },
    tags: ['behavior', 'psychology', 'decision making'],
    featured: true,
  },
  {
    id: 'book-2',
    type: 'book',
    title: { ru: 'Николаевская Россия', en: 'Russia in 1839' },
    subtitle: { ru: 'Астольф де Кюстин', en: 'Marquis de Custine' },
    period: '',
    shortDescription: { ru: 'Взгляд на российскую государственную систему XIX века.', en: 'A European perspective on Russian political and social systems.' },
    fullDescription: { ru: 'Путевые записки французского аристократа, посетившего Россию в 1839 году. Поразительно точный анализ природы власти, бюрократии и институтов, актуальный и сегодня.', en: 'Travel notes of a French aristocrat who visited Russia in 1839. A remarkably accurate analysis of power, bureaucracy and institutions that remains relevant today.' },
    impact: { ru: 'Повлияла на понимание природы власти и институтов.', en: 'Influenced my understanding of power structures and institutions.' },
    tags: ['history', 'politics', 'systems'],
    featured: true,
  },
  {
    id: 'book-3',
    type: 'book',
    title: { ru: 'Стратегия', en: 'Strategy' },
    subtitle: { ru: 'Александр Свечин', en: 'Alexander Svechin' },
    period: '',
    shortDescription: { ru: 'Классический труд о стратегии как системе мышления.', en: 'A foundational work on strategy as a system of thinking.' },
    fullDescription: { ru: 'Свечин рассматривает стратегию не как план, а как способ мышления в условиях неопределённости. Его идеи о гибкости, адаптации и системном подходе применимы далеко за пределами военного дела.', en: 'Svechin treats strategy not as a plan, but as a way of thinking under uncertainty. His ideas on flexibility, adaptation and systemic approach apply far beyond military affairs.' },
    impact: { ru: 'Сформировала системный и гибкий подход к стратегии.', en: 'Built a flexible and systemic approach to strategy.' },
    tags: ['strategy', 'systems'],
    featured: false,
  },
  {
    id: 'book-4',
    type: 'book',
    title: { ru: 'Рассказы о ГУЛАГе', en: 'Gulag Stories' },
    subtitle: { ru: 'Георгий Демидов', en: 'Georgy Demidov' },
    period: '',
    shortDescription: { ru: 'Художественные произведения о жизни в репрессивной системе.', en: 'Stories about life inside repressive systems.' },
    fullDescription: { ru: 'Демидов — физик, прошедший лагеря, — написал одни из самых точных и человечных текстов о поведении людей в экстремальных условиях. Книга о границах человеческого духа.', en: 'Demidov — a physicist who survived the camps — wrote some of the most precise and humane texts about human behavior under extreme conditions. A book about the limits of the human spirit.' },
    impact: { ru: 'Повлияли на понимание человеческого поведения в экстремальных условиях.', en: 'Shaped my understanding of human behavior under extreme conditions.' },
    tags: ['history', 'human nature'],
    featured: false,
  },
  {
    id: 'book-5',
    type: 'book',
    title: { ru: 'Путь клиента', en: 'Mapping Experiences' },
    subtitle: { ru: 'Джим Калбах', en: 'Jim Kalbach' },
    period: '',
    shortDescription: { ru: 'Подход к построению клиентского опыта.', en: 'A practical approach to customer journey design.' },
    fullDescription: { ru: 'Калбах систематизирует подходы к визуализации и проектированию клиентского пути. Книга дала мне инструменты для работы с CJ в продуктах.', en: 'Kalbach systematizes approaches to visualizing and designing the customer journey. The book gave me practical tools for working with customer journeys in product development.' },
    impact: { ru: 'Сформировал системный взгляд на клиентский опыт.', en: 'Built a systemic view of customer experience.' },
    tags: ['product', 'customer experience'],
    featured: false,
  },
  {
    id: 'book-6',
    type: 'book',
    title: { ru: 'Искусство действия', en: 'The Art of Action' },
    subtitle: { ru: 'Стивен Бангей', en: 'Stephen Bungay' },
    period: '',
    shortDescription: { ru: 'Стратегия и исполнение в условиях неопределенности.', en: 'Strategy and execution under uncertainty.' },
    fullDescription: { ru: 'Бангей показывает, как преодолеть разрыв между стратегией и исполнением через intent-based leadership. Его подход к управлению через намерение, а не через детальные инструкции, изменил мой стиль руководства.', en: 'Bungay shows how to bridge the gap between strategy and execution through intent-based leadership. His approach to management through intent rather than detailed instructions changed my leadership style.' },
    impact: { ru: 'Повлияла на подход к управлению через intent и адаптивность.', en: 'Influenced my approach to intent-driven and adaptive management.' },
    tags: ['strategy', 'execution'],
    featured: true,
  },
  {
    id: 'book-7',
    type: 'book',
    title: { ru: 'Оценка компаний', en: 'Valuation' },
    subtitle: { ru: 'Ник Антил, Кеннет Ли', en: 'Nick Antill, Kenneth Lee' },
    period: '',
    shortDescription: { ru: 'Основы оценки бизнеса.', en: 'Fundamentals of company valuation.' },
    fullDescription: { ru: 'Практическое руководство по оценке стоимости компаний. Книга укрепила моё финансовое мышление и способность оценивать бизнес-решения через призму стоимости и возврата инвестиций.', en: 'A practical guide to company valuation. The book strengthened my financial thinking and ability to evaluate business decisions through the lens of value and return on investment.' },
    impact: { ru: 'Сформировала финансовое мышление.', en: 'Strengthened financial thinking and business valuation skills.' },
    tags: ['finance', 'business'],
    featured: false,
  },
  {
    id: 'book-8',
    type: 'book',
    title: { ru: 'Хаос', en: 'Chaos' },
    subtitle: { ru: 'Джеймс Глик', en: 'James Gleick' },
    period: '',
    shortDescription: { ru: 'Теория хаоса и сложные системы.', en: 'Chaos theory and complex systems.' },
    fullDescription: { ru: 'Глик рассказывает историю теории хаоса и показывает, как малые изменения порождают непредсказуемые последствия. Это изменило мой подход к проектированию процессов — я стал учитывать нелинейность и обратные связи.', en: 'Gleick tells the story of chaos theory and shows how small changes produce unpredictable consequences. This changed my approach to process design — I started accounting for nonlinearity and feedback loops.' },
    impact: { ru: 'Расширила понимание нелинейных систем.', en: 'Expanded understanding of non-linear systems.' },
    tags: ['systems', 'complexity'],
    featured: false,
  },
  {
    id: 'book-9',
    type: 'book',
    title: { ru: 'Предметно-ориентированное проектирование', en: 'Domain-Driven Design' },
    subtitle: { ru: 'Эрик Эванс', en: 'Eric Evans' },
    period: '',
    shortDescription: { ru: 'Подход к проектированию сложных систем.', en: 'An approach to designing complex software systems.' },
    fullDescription: { ru: 'Эванс предлагает строить архитектуру вокруг предметной области, а не технологий. Этот подход повлиял на то, как я проектирую платформы и организую взаимодействие между командами.', en: 'Evans proposes building architecture around the domain, not technology. This approach influenced how I design platforms and organize collaboration between teams.' },
    impact: { ru: 'Повлиял на архитектурное мышление и платформенные решения.', en: 'Influenced architectural thinking and platform design.' },
    tags: ['architecture', 'software'],
    featured: false,
  },
  {
    id: 'book-10',
    type: 'book',
    title: { ru: 'Думай медленно, решай быстро', en: 'Thinking, Fast and Slow' },
    subtitle: { ru: 'Даниэль Канеман', en: 'Daniel Kahneman' },
    period: '',
    shortDescription: { ru: 'О когнитивных искажениях и принятии решений.', en: 'About cognitive biases and decision-making.' },
    fullDescription: { ru: 'Канеман показал две системы мышления и объяснил, почему мы систематически ошибаемся. Эта книга изменила мой подход к принятию решений — я стал осознанно замедляться в ключевых моментах.', en: 'Kahneman revealed two systems of thinking and explained why we systematically make mistakes. This book changed my approach to decision-making — I started consciously slowing down at key moments.' },
    impact: { ru: 'Изменило подход к принятию решений.', en: 'Changed my approach to decision-making.' },
    tags: ['decision making', 'psychology'],
    featured: false,
  },
  {
    id: 'book-11',
    type: 'book',
    title: { ru: 'Юнговская карта души', en: "Jung's Map of the Soul" },
    subtitle: { ru: 'Мюррей Стайн', en: 'Murray Stein' },
    period: '',
    shortDescription: { ru: 'Введение в аналитическую психологию Юнга.', en: 'Introduction to Jungian psychology.' },
    fullDescription: { ru: 'Стайн делает сложную психологию Юнга доступной. Понимание архетипов, тени и индивидуации расширило мой взгляд на лидерство и самопознание.', en: 'Stein makes Jung\'s complex psychology accessible. Understanding archetypes, shadow and individuation expanded my view on leadership and self-knowledge.' },
    impact: { ru: 'Расширила понимание глубинной психологии.', en: 'Expanded understanding of deep psychology.' },
    tags: ['psychology'],
    featured: false,
  },
  {
    id: 'book-12',
    type: 'book',
    title: { ru: 'Основы сравнительной анатомии позвоночных', en: 'Comparative Anatomy of Vertebrates' },
    subtitle: { ru: 'Линдеман', en: 'Lindemann' },
    period: '',
    shortDescription: { ru: 'Эволюция и структура живых организмов.', en: 'Evolution and structure of living organisms.' },
    fullDescription: { ru: 'Научный труд об эволюции позвоночных. Может показаться далёким от бизнеса, но именно биология научила меня видеть эволюцию систем, адаптацию и структурные паттерны в любых организациях.', en: 'A scientific work on vertebrate evolution. It may seem far from business, but biology taught me to see system evolution, adaptation and structural patterns in any organization.' },
    impact: { ru: 'Усилила системное мышление через биологию.', en: 'Strengthened systems thinking through biology.' },
    tags: ['biology', 'systems'],
    featured: false,
  },
  {
    id: 'book-13',
    type: 'book',
    title: { ru: 'Мобилизованная нация', en: 'The Mobilized Nation' },
    subtitle: { ru: 'Николас Старгард', en: 'Nicholas Stargardt' },
    period: '',
    shortDescription: { ru: 'Общество в условиях войны.', en: 'Society under conditions of war.' },
    fullDescription: { ru: 'Старгард исследует, как война трансформирует общество изнутри. Книга о том, как экстремальные условия меняют институты, поведение и мышление целых наций.', en: 'Stargardt explores how war transforms society from within. A book about how extreme conditions change institutions, behavior and thinking of entire nations.' },
    impact: { ru: 'Повлияла на понимание трансформации общества.', en: 'Influenced understanding of societal transformation.' },
    tags: ['history', 'society'],
    featured: false,
  },
  {
    id: 'book-14',
    type: 'book',
    title: { ru: 'Прощание с иллюзиями', en: 'Parting with Illusions' },
    subtitle: { ru: 'Владимир Познер', en: 'Vladimir Pozner' },
    period: '',
    shortDescription: { ru: 'Личный взгляд на идеологию и реальность.', en: 'A personal view on ideology and reality.' },
    fullDescription: { ru: 'Познер рассказывает о жизни между двумя системами и о том, как освобождаться от идеологических шаблонов. Книга развивает критическое мышление и способность видеть за нарративами реальность.', en: 'Pozner talks about life between two systems and how to free yourself from ideological templates. The book develops critical thinking and the ability to see reality behind narratives.' },
    impact: { ru: 'Развила критическое мышление.', en: 'Developed critical thinking.' },
    tags: ['thinking', 'history'],
    featured: false,
  },
  {
    id: 'person-1',
    type: 'person',
    title: { ru: 'Наставник в операционном управлении', en: 'Operational Management Mentor' },
    subtitle: { ru: 'Руководитель, научивший управлять через прозрачность', en: 'A leader who taught management through transparency' },
    period: '2013\u20132017',
    shortDescription: { ru: 'Человек, который показал, что governance — это не контроль, а прозрачность.', en: 'The person who showed that governance is not control, but transparency.' },
    fullDescription: { ru: 'В период работы в операционном управлении ИТ мой руководитель показал принципиально другой подход к governance. Не контроль ради контроля, а создание прозрачности, которая ускоряет принятие решений.', en: 'During my time in IT operations management, my leader showed a fundamentally different approach to governance. Not control for control\'s sake, but creating transparency that accelerates decision-making.' },
    impact: { ru: 'Сформировал мой принцип: прозрачность ускоряет управление.', en: 'Shaped my principle: transparency accelerates management.' },
    tags: ['governance', 'transparency', 'leadership'],
    featured: true,
  },
  {
    id: 'person-2',
    type: 'person',
    title: { ru: 'Продуктовый лидер', en: 'Product Leader' },
    subtitle: { ru: 'Руководитель, научивший думать продуктом', en: 'A leader who taught thinking in product terms' },
    period: '2021\u20132024',
    shortDescription: { ru: 'Человек, который показал разницу между проектным и продуктовым мышлением.', en: 'The person who showed the difference between project and product thinking.' },
    fullDescription: { ru: 'Работая над платформами, я наблюдал подход, где каждое решение проверялось через метрики, customer journey и экономику продукта. Не «сделать фичу», а «решить проблему пользователя и измерить эффект».', en: 'Working on platforms, I observed an approach where every decision was validated through metrics, customer journey and product economics. Not "build a feature", but "solve a user problem and measure the effect".' },
    impact: { ru: 'Научил соединять продуктовую стратегию с метриками и экономикой.', en: 'Taught how to connect product strategy with metrics and economics.' },
    tags: ['product', 'metrics', 'strategy'],
    featured: false,
  },
  {
    id: 'event-1',
    type: 'event',
    title: { ru: 'Переход от финансов к операциям', en: 'Transition from Finance to Operations' },
    subtitle: { ru: 'Момент, когда цифры стали процессами', en: 'The moment when numbers became processes' },
    period: '2017',
    shortDescription: { ru: 'Переход, который показал: управлять можно не только бюджетом, но и системой.', en: 'The transition that showed: you can manage not just budgets, but entire systems.' },
    fullDescription: { ru: 'После нескольких лет в финансовом анализе я перешёл в операционное управление ИТ. Это было изменение оптики. Я увидел, как финансовая дисциплина может стать основой операционной прозрачности.', en: 'After several years in financial analysis, I moved to IT operations management. This was a shift in perspective. I saw how financial discipline can become the foundation of operational transparency.' },
    impact: { ru: 'Показал, что финансовое мышление — это про управление любой системой.', en: 'Showed that financial thinking is about managing any system.' },
    tags: ['career', 'finance', 'operations'],
    featured: false,
  },
  {
    id: 'event-2',
    type: 'event',
    title: { ru: 'Запуск внутренней инженерной платформы', en: 'Launch of Internal Engineering Platform' },
    subtitle: { ru: 'Когда платформа стала продуктом', en: 'When a platform became a product' },
    period: '2021',
    shortDescription: { ru: 'Момент, когда внутренний инструмент стал продуктом для 100+ команд.', en: 'The moment when an internal tool became a product for 100+ teams.' },
    fullDescription: { ru: 'Внутренняя платформа начиналась как набор инструментов. Но когда мы стали думать о ней как о продукте — с метриками, user journey, маркетплейсом — она выросла до 2500+ пользователей и 40+ сервисов.', en: 'The internal platform started as a set of tools. But when we started thinking about it as a product — with metrics, user journey, marketplace — it grew to 2,500+ users and 40+ services.' },
    impact: { ru: 'Убедил, что платформенный подход масштабирует организацию лучше точечных решений.', en: 'Convinced me that platform thinking scales organizations better than point solutions.' },
    tags: ['platform', 'product', 'scale'],
    quote: { ru: 'Платформа — это не набор инструментов, а способ масштабировать решения.', en: 'A platform is not a set of tools, but a way to scale solutions.' },
    featured: false,
  },
];
