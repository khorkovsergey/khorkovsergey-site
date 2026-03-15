'use client';

import { useI18n } from '../lib/i18n';

export function Roles() {
  const { t } = useI18n();

  return (
    <section id="roles" className="section-padding py-20 md:py-30">
      <div className="section-max">
        {/* Header */}
        <div className="reveal max-w-3xl mb-6">
          <h2 className="heading-display text-3xl md:text-4xl mb-4">{t.roles.title}</h2>
          <p className="text-stone text-base md:text-lg leading-relaxed">{t.roles.subtitle}</p>
        </div>

        {/* Key message banner */}
        <div className="reveal reveal-delay-1 mb-14">
          <div className="inline-flex items-start gap-3 px-5 py-4 bg-copper/5 border border-copper/15 rounded-xl max-w-2xl">
            <svg className="w-5 h-5 text-copper shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm md:text-base text-graphite leading-relaxed font-medium">
              {t.roles.note}
            </p>
          </div>
        </div>

        {/* Role cards */}
        <div className="space-y-6">
          {t.roles.items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-white rounded-2xl border border-sand/80 hover:border-copper/20 transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6 md:p-8">
                {/* Title row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  {/* Left: Title */}
                  <div className="lg:w-[320px] shrink-0 mb-4 lg:mb-0">
                    <span className="text-xs font-medium text-stone uppercase tracking-wider">{t.roles.labelTitle}</span>
                    <h3 className="font-display text-lg md:text-xl text-charcoal mt-1">{item.title}</h3>
                  </div>

                  {/* Arrow on desktop */}
                  <div className="hidden lg:flex items-center shrink-0 pt-6">
                    <svg className="w-8 h-5 text-copper" fill="none" viewBox="0 0 32 20" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M0 10h28m0 0l-5-5m5 5l-5 5" />
                    </svg>
                  </div>

                  {/* Right: Reality */}
                  <div className="flex-1">
                    <span className="text-xs font-medium text-stone uppercase tracking-wider">{t.roles.labelReality}</span>
                    <p className="text-graphite leading-relaxed mt-1">{item.reality}</p>
                  </div>
                </div>

                {/* Matching roles */}
                <div className="mt-5 pt-5 border-t border-sand/60">
                  <span className="text-xs font-medium text-stone uppercase tracking-wider">{t.roles.labelFit}</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.fitRoles.map((role, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-copper/8 text-copperDark border border-copper/15"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
