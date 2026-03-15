'use client';

import { useI18n } from '../lib/i18n';

const domainColors: Record<string, { dot: string; bg: string; text: string; border: string }> = {
  finance: { dot: 'bg-amber-500', bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' },
  operations: { dot: 'bg-slate-500', bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' },
  platform: { dot: 'bg-sky-500', bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200' },
  product: { dot: 'bg-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
  transformation: { dot: 'bg-violet-500', bg: 'bg-violet-50', text: 'text-violet-800', border: 'border-violet-200' },
};

export function Career() {
  const { t } = useI18n();

  return (
    <section id="career" className="section-padding py-20 md:py-30 bg-white">
      <div className="section-max">
        {/* Section header */}
        <div className="reveal max-w-2xl mb-16">
          <h2 className="heading-display text-3xl md:text-4xl mb-4">{t.career.title}</h2>
          <p className="text-stone text-base md:text-lg leading-relaxed">{t.career.subtitle}</p>
        </div>

        {/* Domain legend */}
        <div className="reveal reveal-delay-1 flex flex-wrap gap-3 mb-14">
          {Object.entries(t.career.domainLabels).map(([key, label]) => {
            const c = domainColors[key];
            return (
              <span key={key} className={`domain-pill ${c.bg} ${c.text} ${c.border}`}>
                <span className={`inline-block w-2 h-2 rounded-full ${c.dot} mr-2`} />
                {label}
              </span>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {t.career.phases.map((phase, i) => {
              const c = domainColors[phase.domain] || domainColors.finance;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i % 4) + 1} relative md:flex md:items-start md:gap-8 ${
                    i > 0 ? 'md:mt-12' : ''
                  }`}
                >
                  {/* Mobile timeline dot */}
                  <div className="md:hidden flex items-start gap-4 mb-3">
                    <div className={`mt-1.5 w-3 h-3 rounded-full ${c.dot} ring-4 ring-cream shrink-0`} />
                    <span className="text-sm font-medium text-stone">{phase.period}</span>
                  </div>

                  {/* Desktop: left side */}
                  <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    {isEven ? (
                      <TimelineCard phase={phase} colors={c} domainLabel={t.career.domainLabels[phase.domain as keyof typeof t.career.domainLabels]} />
                    ) : (
                      <div className="flex flex-col items-end pt-2">
                        <span className="text-sm font-medium text-stone">{phase.period}</span>
                      </div>
                    )}
                  </div>

                  {/* Desktop: center dot */}
                  <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
                    <div className={`w-3.5 h-3.5 rounded-full ${c.dot} ring-4 ring-white`} />
                  </div>

                  {/* Desktop: right side */}
                  <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:pl-12' : 'md:order-1 md:text-right md:pr-12'}`}>
                    {isEven ? (
                      <div className="flex flex-col pt-2">
                        <span className="text-sm font-medium text-stone">{phase.period}</span>
                      </div>
                    ) : (
                      <TimelineCard phase={phase} colors={c} domainLabel={t.career.domainLabels[phase.domain as keyof typeof t.career.domainLabels]} />
                    )}
                  </div>

                  {/* Mobile card */}
                  <div className="md:hidden ml-7">
                    <TimelineCard phase={phase} colors={c} domainLabel={t.career.domainLabels[phase.domain as keyof typeof t.career.domainLabels]} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  phase,
  colors,
  domainLabel,
}: {
  phase: { role: string; company: string; description: string; label: string };
  colors: { bg: string; text: string; border: string };
  domainLabel: string;
}) {
  return (
    <div className={`p-5 md:p-6 rounded-xl border ${colors.border} ${colors.bg}/50 bg-opacity-50`}>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} ${colors.border} border mb-3`}>
        {domainLabel}
      </span>
      <h3 className="font-display text-lg md:text-xl text-charcoal mb-1">{phase.role}</h3>
      <p className="text-sm text-copper font-medium mb-3">{phase.company}</p>
      <p className="text-sm text-stone leading-relaxed">{phase.description}</p>
    </div>
  );
}
