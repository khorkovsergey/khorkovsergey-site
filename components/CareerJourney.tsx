'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import {
  careerDataRu,
  careerDataEn,
  domainConfig,
  type CareerStage,
  type CareerContent,
} from '../data/career';

export function CareerJourney() {
  const { locale } = useI18n();
  const data: CareerContent = locale === 'ru' ? careerDataRu : careerDataEn;
  const [activeId, setActiveId] = useState(data.stages[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);

  const activeStage = data.stages.find((s) => s.id === activeId) || data.stages[0];
  const dc = domainConfig[activeStage.domainKey];

  const handleSelect = (id: string) => {
    if (id === activeId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveId(id);
      setIsTransitioning(false);
    }, 200);
  };

  // Scroll detail panel to top on stage change
  useEffect(() => {
    if (detailRef.current) {
      detailRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeId]);

  // Update activeId when language changes (data.stages may differ)
  useEffect(() => {
    if (!data.stages.find((s) => s.id === activeId)) {
      setActiveId(data.stages[0].id);
    }
  }, [locale]);

  const activeIndex = data.stages.findIndex((s) => s.id === activeId);

  return (
    <section id="career" className="section-padding py-20 md:py-30 bg-white">
      <div className="section-max">
        {/* Header */}
        <div className="reveal max-w-3xl mb-16">
          <h2 className="heading-display text-3xl md:text-4xl mb-4">{data.sectionTitle}</h2>
          <p className="text-stone text-base md:text-lg leading-relaxed">{data.sectionSubtitle}</p>
        </div>

        {/* ===== DESKTOP: Split Panel Layout ===== */}
        <div className="hidden lg:grid lg:grid-cols-[340px_1fr] lg:gap-0 reveal">
          {/* Left: Timeline Rail */}
          <div className="relative pr-8 border-r border-sand/60">
            {/* Animated progress line */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-sand/40" />
            <div
              className="absolute right-0 top-0 w-px transition-all duration-500 ease-out"
              style={{
                height: `${((activeIndex + 0.5) / data.stages.length) * 100}%`,
                background: 'linear-gradient(to bottom, #B8734A 0%, #B8734A 80%, transparent 100%)',
              }}
            />

            <div className="space-y-1">
              {data.stages.map((stage, i) => {
                const sc = domainConfig[stage.domainKey];
                const isActive = stage.id === activeId;

                return (
                  <button
                    key={stage.id}
                    onClick={() => handleSelect(stage.id)}
                    className={`relative w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-cream shadow-sm'
                        : 'hover:bg-cream/50'
                    }`}
                  >
                    {/* Active indicator dot on the right edge */}
                    <div
                      className={`absolute right-[-20.5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full transition-all duration-300 ring-[3px] ring-white ${
                        isActive ? `${sc.dot} scale-100` : 'bg-mist scale-75'
                      }`}
                    />

                    {/* Period */}
                    <span className={`text-xs font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-copper' : 'text-mist group-hover:text-stone'
                    }`}>
                      {stage.period}
                    </span>

                    {/* Company */}
                    <p className={`text-sm font-semibold mt-1 transition-colors duration-200 ${
                      isActive ? 'text-charcoal' : 'text-stone group-hover:text-graphite'
                    }`}>
                      {stage.company}
                    </p>

                    {/* Title preview */}
                    <p className={`text-xs mt-0.5 transition-colors duration-200 leading-snug ${
                      isActive ? 'text-graphite' : 'text-mist group-hover:text-stone'
                    }`}>
                      {stage.formalTitle}
                    </p>

                    {/* Domain chip */}
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${sc.bg} ${sc.color} ${sc.border} border`}>
                        {stage.domainKey === 'foundation'
                          ? locale === 'ru' ? 'Фундамент' : 'Foundation'
                          : stage.domainKey === 'transformation'
                          ? locale === 'ru' ? 'Трансформация' : 'Transformation'
                          : stage.domainKey === 'product'
                          ? locale === 'ru' ? 'Продукт' : 'Product'
                          : stage.domainKey === 'platform'
                          ? locale === 'ru' ? 'Платформы' : 'Platforms'
                          : stage.domainKey === 'operations'
                          ? locale === 'ru' ? 'Операции' : 'Operations'
                          : locale === 'ru' ? 'Финансы' : 'Finance'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detail Panel */}
          <div ref={detailRef} className="pl-12 min-h-[560px]">
            <div
              className={`transition-all duration-200 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              <DetailPanel stage={activeStage} data={data} dc={dc} />
            </div>
          </div>
        </div>

        {/* ===== MOBILE: Accordion Cards ===== */}
        <div className="lg:hidden space-y-3 reveal">
          {data.stages.map((stage) => (
            <MobileCard
              key={stage.id}
              stage={stage}
              data={data}
              isOpen={stage.id === activeId}
              onToggle={() => handleSelect(stage.id === activeId ? stage.id : stage.id)}
              onClick={() => setActiveId(stage.id === activeId ? '' : stage.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Detail Panel (Desktop)
   ============================================ */
function DetailPanel({
  stage,
  data,
  dc,
}: {
  stage: CareerStage;
  data: CareerContent;
  dc: ReturnType<typeof getDc>;
}) {
  return (
    <div>
      {/* Header area */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className={`w-2.5 h-2.5 rounded-full ${dc.dot}`} />
          <span className="text-sm font-medium text-copper">{stage.period}</span>
          <span className="text-mist">·</span>
          <span className="text-sm font-medium text-stone">{stage.company}</span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4 leading-snug">
          {stage.formalTitle}
        </h3>

        {/* Practical roles */}
        <div className="mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone/60 mb-2 block">
            {data.labelPracticalRoles}
          </span>
          <div className="flex flex-wrap gap-2">
            {stage.practicalRoles.map((role, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-copper/8 text-copperDark border border-copper/15"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-8">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-stone/60 mb-2">
          {data.labelOverview}
        </h4>
        <p className="text-graphite leading-relaxed">{stage.overview}</p>
      </div>

      {/* Responsibilities & Achievements grid */}
      <div className={`grid gap-8 mb-8 ${stage.achievements ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-stone/60 mb-3">
            {data.labelResponsibilities}
          </h4>
          <ul className="space-y-2">
            {stage.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-graphite leading-relaxed">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${dc.dot} shrink-0 opacity-60`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {stage.achievements && stage.achievements.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone/60 mb-3">
              {data.labelAchievements}
            </h4>
            <ul className="space-y-2">
              {stage.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-graphite leading-relaxed">
                  <span className="mt-1 text-copper shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tools */}
      <div className="mb-8">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-stone/60 mb-3">
          {data.labelTools}
        </h4>
        <div className="flex flex-wrap gap-2">
          {stage.tools.map((tool, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-md text-xs font-medium bg-warm text-stone border border-sand/80"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Domains */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-stone/60 mb-3">
          {data.labelDomains}
        </h4>
        <div className="flex flex-wrap gap-2">
          {stage.domains.map((domain, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-md text-xs font-medium ${dc.bg} ${dc.color} ${dc.border} border`}
            >
              {domain}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function getDc(key: string) {
  return domainConfig[key];
}

/* ============================================
   Mobile Accordion Card
   ============================================ */
function MobileCard({
  stage,
  data,
  isOpen,
  onClick,
}: {
  stage: CareerStage;
  data: CareerContent;
  isOpen: boolean;
  onToggle: () => void;
  onClick: () => void;
}) {
  const dc = domainConfig[stage.domainKey];

  return (
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
      isOpen ? `${dc.border} bg-white shadow-sm` : 'border-sand/60 bg-cream/30'
    }`}>
      <button
        onClick={onClick}
        className="w-full text-left p-5 flex items-start justify-between gap-4"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2 h-2 rounded-full ${dc.dot}`} />
            <span className="text-xs font-medium text-copper">{stage.period}</span>
            <span className="text-mist">·</span>
            <span className="text-xs font-medium text-stone">{stage.company}</span>
          </div>
          <h3 className="font-display text-base text-charcoal leading-snug">{stage.formalTitle}</h3>
        </div>
        <svg
          className={`w-5 h-5 text-stone shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-5 pb-6">
          {/* Practical roles */}
          <div className="mb-5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone/60 mb-2 block">
              {data.labelPracticalRoles}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {stage.practicalRoles.map((role, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-copper/8 text-copperDark border border-copper/15">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <p className="text-sm text-graphite leading-relaxed mb-5">{stage.overview}</p>

          {/* Responsibilities */}
          <div className="mb-5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone/60 mb-2 block">
              {data.labelResponsibilities}
            </span>
            <ul className="space-y-1.5">
              {stage.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-graphite leading-relaxed">
                  <span className={`mt-1.5 w-1 h-1 rounded-full ${dc.dot} shrink-0 opacity-60`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          {stage.achievements && stage.achievements.length > 0 && (
            <div className="mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-stone/60 mb-2 block">
                {data.labelAchievements}
              </span>
              <ul className="space-y-1.5">
                {stage.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-graphite leading-relaxed">
                    <span className="mt-0.5 text-copper shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools */}
          <div className="mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone/60 mb-2 block">
              {data.labelTools}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {stage.tools.map((tool, i) => (
                <span key={i} className="px-2 py-0.5 rounded text-[10px] font-medium bg-warm text-stone border border-sand/80">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Domains */}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone/60 mb-2 block">
              {data.labelDomains}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {stage.domains.map((domain, i) => (
                <span key={i} className={`px-2 py-0.5 rounded text-[10px] font-medium ${dc.bg} ${dc.color} ${dc.border} border`}>
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
