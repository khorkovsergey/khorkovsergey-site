'use client';

import { useI18n } from '../lib/i18n';

export function Approach() {
  const { t } = useI18n();

  return (
    <section id="approach" className="section-padding py-20 md:py-30 bg-white">
      <div className="section-max">
        <div className="reveal mb-14">
          <h2 className="heading-display text-3xl md:text-4xl">{t.approach.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
          {t.approach.principles.map((p, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-copper/8 text-copper flex items-center justify-center text-sm font-semibold mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{p.heading}</h3>
                  <p className="text-stone text-sm md:text-base leading-relaxed">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
