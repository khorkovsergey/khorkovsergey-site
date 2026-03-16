'use client';

import { useState, useEffect, useRef } from 'react';
import { useI18n, Locale } from '../lib/i18n';

/* =============================================
   DATA
   ============================================= */

interface MapNode {
  id: string;
  year: string;
  period: string;
  company: string;
  companyShort: string;
  logo: string; // SVG initials as fallback
  title: string;
  practicalRoles: string[];
  description: string;
  achievements?: string[];
  tools: string[];
  domain: 'finance' | 'operations' | 'platform' | 'product' | 'transformation';
  track: number; // vertical position track 0-4
}

interface MapContent {
  pageTitle: string;
  pageSubtitle: string;
  backLabel: string;
  domainLabels: Record<string, string>;
  labelRoles: string;
  labelTools: string;
  labelAchievements: string;
  nodes: MapNode[];
  skillStreams: { label: string; color: string; startNode: number; endNode: number }[];
}

const mapDataRu: MapContent = {
  pageTitle: 'Карьерная карта',
  pageSubtitle: 'Интерактивная карта карьерного пути — от финансового анализа к продуктовому управлению и цифровой трансформации',
  backLabel: '← На главную',
  domainLabels: {
    finance: 'Финансы',
    operations: 'Операции',
    platform: 'Платформы',
    product: 'Продукт',
    transformation: 'Продукты и трансформация',
  },
  labelRoles: 'Практические роли',
  labelTools: 'Инструменты',
  labelAchievements: 'Ключевые результаты',
  nodes: [
    {
      id: 'early',
      year: '2009',
      period: '2009 — 2017',
      company: 'Huawei · NEC · Tele2',
      companyShort: 'HW/NEC/T2',
      logo: 'HW',
      title: 'Финансовый и коммерческий аналитик',
      practicalRoles: ['Contract Support', 'Procurement Analyst', 'Commercial Analytics'],
      description: 'Старт карьеры в телеком-индустрии: контрактная поддержка, закупки, финансовый анализ проектов и коммерческая аналитика.',
      tools: ['Financial Analysis', 'Contracts', 'Procurement'],
      domain: 'finance',
      track: 0,
    },
    {
      id: 'beeline-finance',
      year: '2017',
      period: '2017 — 2019',
      company: 'Билайн',
      companyShort: 'Beeline',
      logo: 'BL',
      title: 'Старший финансовый аналитик',
      practicalRoles: ['Financial Analyst', 'Investment Analysis Lead', 'IT Finance Partner'],
      description: 'Финансовое планирование ИТ-инфраструктуры. ROI-модели, бизнес-кейсы, инвестиционная приоритизация, CAPEX/OPEX прозрачность.',
      achievements: ['Дашборды эффективности для технологических функций', 'ROI-модели для ключевых ИТ-инвестиций'],
      tools: ['Financial Modeling', 'ROI', 'CAPEX/OPEX', 'Dashboards'],
      domain: 'finance',
      track: 0,
    },
    {
      id: 'beeline-ops',
      year: '2019',
      period: '2019 — 2021',
      company: 'Билайн',
      companyShort: 'Beeline',
      logo: 'BL',
      title: 'Руководитель операционного контроля ИТ',
      practicalRoles: ['IT Operations Lead', 'Governance Lead', 'Delivery Framework Lead'],
      description: 'SOX-комплаенс, ресурсное планирование, ИТ-бюджетирование, delivery framework на базе Jira, governance модель для подрядчиков.',
      achievements: ['Delivery framework на базе Jira', 'Модель управления подрядчиками'],
      tools: ['Jira', 'SOX Controls', 'Resource Planning', 'Budgeting'],
      domain: 'operations',
      track: 1,
    },
    {
      id: 'beeline-platform',
      year: '2021',
      period: '2021 — 2024',
      company: 'Билайн',
      companyShort: 'Beeline',
      logo: 'BL',
      title: 'Product Manager: инженерная платформа',
      practicalRoles: ['Product Manager', 'Internal Platform Lead', 'Developer Experience Lead'],
      description: 'Внутренняя платформа для 100+ продуктовых команд. Интеграция 40+ инструментов, маркетплейс сервисов, self-service для инженеров.',
      achievements: ['100+ продуктовых команд', '2 500+ MAU', '40+ интегрированных инструментов', '1 268 управляемых сред'],
      tools: ['Miro', 'Figma', 'Git', 'Jenkins', 'CI/CD', 'APIs', 'Zabbix'],
      domain: 'platform',
      track: 2,
    },
    {
      id: 'beeline-cloud',
      year: '2024',
      period: '2024 — 2025',
      company: 'Beeline Cloud',
      companyShort: 'BL Cloud',
      logo: 'BC',
      title: 'Product Lead: облачная платформа',
      practicalRoles: ['Product Lead', 'Platform Strategist', 'P&L Owner', 'Customer Journey Lead'],
      description: 'Развитие облачной платформы IaaS, PaaS, SaaS. Продуктовая стратегия, метрики, P&L, self-service портал, customer journey.',
      achievements: ['Участие в росте платформы >$60M выручки', 'Внедрение продуктовых метрик', 'Развитие self-service'],
      tools: ['QlikSense', 'Product Metrics', 'P&L', 'CJM', 'IaaS/PaaS/SaaS'],
      domain: 'product',
      track: 3,
    },
    {
      id: 'sibur',
      year: '2026',
      period: '2026 — н.в.',
      company: 'СИБУР',
      companyShort: 'SIBUR',
      logo: 'SB',
      title: 'Руководитель цифровой трансформации',
      practicalRoles: ['Transformation Lead', 'Process Improvement Lead', 'Jira/Confluence Platform Lead'],
      description: 'Автоматизация ИТ-процессов: закупки, бюджетирование, инфраструктура. Task & Process Mining, KPI-дашборды, Jira/Confluence как платформа управления.',
      achievements: ['Запуск Task & Process Mining', 'KPI-дашборды', 'Единая платформа Jira + Confluence'],
      tools: ['Jira', 'Confluence', 'SAP', 'FineBI', 'Process Mining'],
      domain: 'transformation',
      track: 4,
    },
  ],
  skillStreams: [
    { label: 'Финансовая дисциплина', color: '#D4A855', startNode: 0, endNode: 5 },
    { label: 'Операционное управление', color: '#7B8AB5', startNode: 2, endNode: 5 },
    { label: 'Платформенное мышление', color: '#5BA4E6', startNode: 3, endNode: 5 },
    { label: 'Продуктовый подход', color: '#00D4AA', startNode: 3, endNode: 5 },
  ],
};

const mapDataEn: MapContent = {
  pageTitle: 'Career Map',
  pageSubtitle: 'Interactive career journey — from financial analysis to product management and digital transformation',
  backLabel: '← Back to main',
  domainLabels: {
    finance: 'Finance',
    operations: 'Operations',
    platform: 'Platforms',
    product: 'Product',
    transformation: 'Products & Transformation',
  },
  labelRoles: 'Practical Roles',
  labelTools: 'Tools',
  labelAchievements: 'Key Results',
  nodes: [
    {
      id: 'early',
      year: '2009',
      period: '2009 — 2017',
      company: 'Huawei · NEC · Tele2',
      companyShort: 'HW/NEC/T2',
      logo: 'HW',
      title: 'Financial & Commercial Analyst',
      practicalRoles: ['Contract Support', 'Procurement Analyst', 'Commercial Analytics'],
      description: 'Career foundation in telecom: contract support, procurement, project financial analysis and commercial analytics.',
      tools: ['Financial Analysis', 'Contracts', 'Procurement'],
      domain: 'finance',
      track: 0,
    },
    {
      id: 'beeline-finance',
      year: '2017',
      period: '2017 — 2019',
      company: 'Beeline',
      companyShort: 'Beeline',
      logo: 'BL',
      title: 'Senior Financial Analyst',
      practicalRoles: ['Financial Analyst', 'Investment Analysis Lead', 'IT Finance Partner'],
      description: 'IT infrastructure financial planning. ROI models, business cases, investment prioritization, CAPEX/OPEX transparency.',
      achievements: ['Performance dashboards for tech functions', 'ROI models for key IT investments'],
      tools: ['Financial Modeling', 'ROI', 'CAPEX/OPEX', 'Dashboards'],
      domain: 'finance',
      track: 0,
    },
    {
      id: 'beeline-ops',
      year: '2019',
      period: '2019 — 2021',
      company: 'Beeline',
      companyShort: 'Beeline',
      logo: 'BL',
      title: 'Lead of IT Operations',
      practicalRoles: ['IT Operations Lead', 'Governance Lead', 'Delivery Framework Lead'],
      description: 'SOX compliance, resource planning, IT budgeting, Jira-based delivery framework, vendor governance model.',
      achievements: ['Jira-based delivery framework', 'Vendor governance model'],
      tools: ['Jira', 'SOX Controls', 'Resource Planning', 'Budgeting'],
      domain: 'operations',
      track: 1,
    },
    {
      id: 'beeline-platform',
      year: '2021',
      period: '2021 — 2024',
      company: 'Beeline',
      companyShort: 'Beeline',
      logo: 'BL',
      title: 'Product Manager: Engineering Platform',
      practicalRoles: ['Product Manager', 'Internal Platform Lead', 'Developer Experience Lead'],
      description: 'Internal platform for 100+ product teams. Integration of 40+ tools, service marketplace, self-service for engineers.',
      achievements: ['100+ product teams', '2,500+ MAU', '40+ integrated tools', '1,268 managed environments'],
      tools: ['Miro', 'Figma', 'Git', 'Jenkins', 'CI/CD', 'APIs', 'Zabbix'],
      domain: 'platform',
      track: 2,
    },
    {
      id: 'beeline-cloud',
      year: '2024',
      period: '2024 — 2025',
      company: 'Beeline Cloud',
      companyShort: 'BL Cloud',
      logo: 'BC',
      title: 'Product Lead: Cloud Platform',
      practicalRoles: ['Product Lead', 'Platform Strategist', 'P&L Owner', 'Customer Journey Lead'],
      description: 'Cloud platform development across IaaS, PaaS, SaaS. Product strategy, metrics, P&L, self-service portal, customer journey.',
      achievements: ['Part of platform growth >$60M revenue', 'Product metrics framework', 'Self-service evolution'],
      tools: ['QlikSense', 'Product Metrics', 'P&L', 'CJM', 'IaaS/PaaS/SaaS'],
      domain: 'product',
      track: 3,
    },
    {
      id: 'sibur',
      year: '2026',
      period: '2026 — Present',
      company: 'SIBUR',
      companyShort: 'SIBUR',
      logo: 'SB',
      title: 'Digital Transformation Lead',
      practicalRoles: ['Transformation Lead', 'Process Improvement Lead', 'Jira/Confluence Platform Lead'],
      description: 'IT process automation: procurement, budgeting, infrastructure. Task & Process Mining, KPI dashboards, Jira/Confluence as management platform.',
      achievements: ['Task & Process Mining launch', 'KPI dashboards', 'Unified Jira + Confluence platform'],
      tools: ['Jira', 'Confluence', 'SAP', 'FineBI', 'Process Mining'],
      domain: 'transformation',
      track: 4,
    },
  ],
  skillStreams: [
    { label: 'Financial Discipline', color: '#D4A855', startNode: 0, endNode: 5 },
    { label: 'Operational Management', color: '#7B8AB5', startNode: 2, endNode: 5 },
    { label: 'Platform Thinking', color: '#5BA4E6', startNode: 3, endNode: 5 },
    { label: 'Product Approach', color: '#00D4AA', startNode: 3, endNode: 5 },
  ],
};

const domainColors: Record<string, { text: string; bg: string; border: string; dot: string; glow: string }> = {
  finance: { text: 'text-[#D4A855]', bg: 'bg-[rgba(212,168,85,0.1)]', border: 'border-[rgba(212,168,85,0.25)]', dot: 'bg-[#D4A855]', glow: 'rgba(212,168,85,0.3)' },
  operations: { text: 'text-[#7B8AB5]', bg: 'bg-[rgba(123,138,181,0.1)]', border: 'border-[rgba(123,138,181,0.25)]', dot: 'bg-[#7B8AB5]', glow: 'rgba(123,138,181,0.3)' },
  platform: { text: 'text-[#5BA4E6]', bg: 'bg-[rgba(91,164,230,0.1)]', border: 'border-[rgba(91,164,230,0.25)]', dot: 'bg-[#5BA4E6]', glow: 'rgba(91,164,230,0.3)' },
  product: { text: 'text-[#00D4AA]', bg: 'bg-[rgba(0,212,170,0.1)]', border: 'border-[rgba(0,212,170,0.25)]', dot: 'bg-[#00D4AA]', glow: 'rgba(0,212,170,0.3)' },
  transformation: { text: 'text-[#B07AE6]', bg: 'bg-[rgba(176,122,230,0.1)]', border: 'border-[rgba(176,122,230,0.25)]', dot: 'bg-[#B07AE6]', glow: 'rgba(176,122,230,0.3)' },
};

const domainColorHex: Record<string, string> = {
  finance: '#D4A855',
  operations: '#7B8AB5',
  platform: '#5BA4E6',
  product: '#00D4AA',
  transformation: '#B07AE6',
};

/* =============================================
   COMPONENT
   ============================================= */

export function CareerMap() {
  const { locale, t, setLocale } = useI18n();
  const data = locale === 'ru' ? mapDataRu : mapDataEn;
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animatedNodes, setAnimatedNodes] = useState<Set<string>>(new Set());
  const mapRef = useRef<HTMLDivElement>(null);

  // Animate nodes appearing sequentially
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    data.nodes.forEach((node, i) => {
      const timer = setTimeout(() => {
        setAnimatedNodes(prev => new Set(prev).add(node.id));
      }, 300 + i * 200);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, [locale]);

  const activeData = activeNode ? data.nodes.find(n => n.id === activeNode) : null;

  return (
    <div className="min-h-screen bg-base text-textSecondary font-body">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16">
          <a href="/" className="text-sm text-accent hover:text-accentLight transition-colors font-medium">
            {data.backLabel}
          </a>
          <div className="flex items-center gap-1">
            {(['ru', 'en'] as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-2.5 py-1 text-sm font-medium rounded transition-all duration-200 ${
                  locale === lang ? 'bg-accent text-base' : 'text-textMuted hover:text-textPrimary'
                }`}
              >
                {t.langSwitch[lang]}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Title */}
      <section className="pt-28 pb-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-content mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-textPrimary mb-4">{data.pageTitle}</h1>
          <p className="text-textMuted text-base md:text-lg max-w-2xl leading-relaxed">{data.pageSubtitle}</p>
        </div>
      </section>

      {/* Domain legend */}
      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-content mx-auto flex flex-wrap gap-3">
          {Object.entries(data.domainLabels).map(([key, label]) => {
            const dc = domainColors[key];
            return (
              <span key={key} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${dc.bg} ${dc.text} ${dc.border} border`}>
                <span className={`w-2 h-2 rounded-full ${dc.dot}`} />
                {label}
              </span>
            );
          })}
        </div>
      </section>

      {/* Main map area */}
      <section className="px-6 md:px-10 lg:px-16 pb-20" ref={mapRef}>
        <div className="max-w-content mx-auto">
          {/* Timeline track */}
          <div className="relative">
            {/* Horizontal base line */}
            <div className="hidden md:block absolute top-[140px] left-0 right-0 h-px bg-border/40" />

            {/* Nodes grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {data.nodes.map((node, i) => {
                const dc = domainColors[node.domain];
                const isActive = activeNode === node.id;
                const isAnimated = animatedNodes.has(node.id);
                const colorHex = domainColorHex[node.domain];

                return (
                  <div
                    key={node.id}
                    className={`transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    {/* Year marker */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-3 h-3 rounded-full ${dc.dot} transition-all duration-300`}
                        style={isActive ? { boxShadow: `0 0 12px ${dc.glow}, 0 0 24px ${dc.glow}` } : {}}
                      />
                      <span className={`text-xs font-bold tracking-wider ${dc.text}`}>{node.year}</span>
                      <div className="flex-1 h-px bg-border/30" />
                      <span className="text-[10px] text-textGhost font-medium">{node.period}</span>
                    </div>

                    {/* Card */}
                    <button
                      onClick={() => setActiveNode(isActive ? null : node.id)}
                      className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 group ${
                        isActive
                          ? `${dc.border} bg-elevated shadow-lg`
                          : 'border-border bg-elevated/40 hover:bg-elevated/70 hover:border-borderLight'
                      }`}
                      style={isActive ? { boxShadow: `0 0 30px ${dc.glow.replace('0.3', '0.1')}` } : {}}
                    >
                      {/* Company logo + name */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold ${dc.bg} ${dc.text} ${dc.border} border`}
                        >
                          {node.logo}
                        </div>
                        <div>
                          <p className="text-xs text-textMuted font-medium">{node.company}</p>
                          <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider mt-0.5 ${dc.bg} ${dc.text}`}>
                            {data.domainLabels[node.domain]}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-base text-textPrimary mb-2 leading-snug group-hover:text-[#E8ECF4] transition-colors">
                        {node.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-textMuted leading-relaxed mb-3">{node.description}</p>

                      {/* Practical roles */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {node.practicalRoles.map((role, j) => (
                          <span key={j} className={`px-2 py-0.5 rounded text-[10px] font-medium ${dc.bg} ${dc.text} ${dc.border} border`}>
                            {role}
                          </span>
                        ))}
                      </div>

                      {/* Expand indicator */}
                      <div className={`flex items-center gap-1 text-[10px] font-medium transition-colors ${isActive ? dc.text : 'text-textGhost'}`}>
                        <svg className={`w-3 h-3 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                        {isActive ? '' : '···'}
                      </div>
                    </button>

                    {/* Expanded content */}
                    <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isActive ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                      <div className={`rounded-xl border ${dc.border} ${dc.bg} p-4`}>
                        {/* Achievements */}
                        {node.achievements && node.achievements.length > 0 && (
                          <div className="mb-4">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-textGhost mb-2 block">
                              {data.labelAchievements}
                            </span>
                            <ul className="space-y-1.5">
                              {node.achievements.map((a, j) => (
                                <li key={j} className="flex items-start gap-2 text-xs text-textPrimary leading-relaxed">
                                  <svg className={`w-3 h-3 mt-0.5 shrink-0 ${dc.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path d="M5 13l4 4L19 7" />
                                  </svg>
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tools */}
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-textGhost mb-2 block">
                            {data.labelTools}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {node.tools.map((tool, j) => (
                              <span key={j} className="px-2 py-0.5 rounded text-[10px] font-medium bg-elevated text-textMuted border border-border">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skill streams legend */}
            <div className="mt-16 pt-8 border-t border-border/30">
              <h3 className="font-display text-lg text-textPrimary mb-6">
                {locale === 'ru' ? 'Сквозные компетенции' : 'Cross-cutting competencies'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.skillStreams.map((stream, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border bg-elevated/30"
                  >
                    <div className="w-8 h-1 rounded-full" style={{ backgroundColor: stream.color }} />
                    <span className="text-sm text-textSecondary font-medium">{stream.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain evolution visual */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <h3 className="font-display text-lg text-textPrimary mb-6">
                {locale === 'ru' ? 'Эволюция доменов' : 'Domain Evolution'}
              </h3>
              <div className="space-y-3">
                {Object.entries(data.domainLabels).map(([key, label]) => {
                  const colorHex = domainColorHex[key];
                  const nodesInDomain = data.nodes.filter(n => n.domain === key);
                  const startIdx = data.nodes.findIndex(n => n.domain === key);
                  const endIdx = data.nodes.length - 1;
                  // how much of the timeline this domain covers
                  const startPct = (startIdx / data.nodes.length) * 100;
                  const isActive = key === 'finance' || key === 'operations' || key === 'transformation';
                  const widthPct = isActive ? 100 - startPct : ((nodesInDomain.length) / data.nodes.length) * 100;

                  return (
                    <div key={key} className="flex items-center gap-4">
                      <span className="text-xs text-textMuted font-medium w-32 shrink-0 text-right">{label}</span>
                      <div className="flex-1 h-6 bg-elevated/30 rounded-full relative overflow-hidden">
                        <div
                          className="absolute top-0 bottom-0 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
                          style={{
                            left: `${startPct}%`,
                            width: `${Math.min(widthPct, 100 - startPct)}%`,
                            backgroundColor: `${colorHex}15`,
                            borderRight: `2px solid ${colorHex}`,
                          }}
                        >
                          <span className="text-[10px] font-bold" style={{ color: colorHex }}>
                            {nodesInDomain.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 lg:px-16 py-8 border-t border-border">
        <div className="max-w-content mx-auto flex items-center justify-between">
          <a href="/" className="text-sm text-accent hover:text-accentLight transition-colors">{data.backLabel}</a>
          <p className="text-xs text-textGhost">khorkovsergey.com</p>
        </div>
      </footer>
    </div>
  );
}
