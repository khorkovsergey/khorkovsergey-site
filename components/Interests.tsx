'use client';

import { useI18n } from '../lib/i18n';

const interestIcons = [
  <svg key="travel" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="history" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  <svg key="music" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>,
];

export function Interests() {
  const { t } = useI18n();

  return (
    <section id="interests" className="section-padding py-20 md:py-30">
      <div className="section-max">
        <div className="reveal mb-14">
          <h2 className="heading-display text-3xl md:text-4xl">{t.interests.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {t.interests.items.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}>
              <div className="w-10 h-10 rounded-xl bg-warm text-stone flex items-center justify-center mb-4">
                {interestIcons[i]}
              </div>
              <h3 className="font-display text-lg text-charcoal mb-2">{item.name}</h3>
              <p className="text-sm text-stone leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
