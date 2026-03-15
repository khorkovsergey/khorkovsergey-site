'use client';

import { useI18n } from '../lib/i18n';

export function Results() {
  const { t } = useI18n();

  return (
    <section id="results" className="section-padding py-20 md:py-30">
      <div className="section-max">
        <div className="reveal max-w-2xl mb-14">
          <h2 className="heading-display text-3xl md:text-4xl mb-4">{t.results.title}</h2>
          <p className="text-stone text-base md:text-lg leading-relaxed">{t.results.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.results.items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} p-6 rounded-2xl bg-white border border-sand/60 hover:border-copper/20 transition-all duration-300 group`}
            >
              <div className="mb-4">
                <span className="font-display text-2xl md:text-3xl text-copper group-hover:text-copperDark transition-colors">
                  {item.metric}
                </span>
              </div>
              <p className="text-sm font-semibold text-charcoal mb-2">{item.label}</p>
              <p className="text-sm text-stone leading-relaxed">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
