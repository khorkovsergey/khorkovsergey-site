'use client';

import { useI18n } from '../lib/i18n';

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="about" className="min-h-screen flex items-center section-padding pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="section-max w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-fade-up opacity-0 mb-6">
            <span className="text-copper font-medium text-sm tracking-wide uppercase">
              Product · Platforms · Transformation
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-up opacity-0 animate-delay-100 heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            {t.hero.greeting}
          </h1>

          {/* Headline */}
          <p className="animate-fade-up opacity-0 animate-delay-200 font-display text-xl sm:text-2xl md:text-3xl text-graphite leading-snug mb-8 text-balance whitespace-pre-line">
            {t.hero.headline}
          </p>

          {/* Subtext */}
          <p className="animate-fade-up opacity-0 animate-delay-300 text-stone text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {t.hero.subtext}
          </p>

          {/* Domain pills */}
          <div className="animate-fade-up opacity-0 animate-delay-400 flex flex-wrap gap-2.5 mb-12">
            {t.hero.domains.map((domain, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium bg-warm text-graphite border border-sand hover:border-copper/30 hover:bg-copper/5 transition-all duration-200"
              >
                {domain}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up opacity-0 animate-delay-500 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-charcoal text-cream rounded-lg font-medium text-sm hover:bg-graphite transition-colors"
            >
              {t.hero.cta.contact}
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-charcoal/20 text-charcoal rounded-lg font-medium text-sm hover:border-charcoal/40 transition-colors"
            >
              {t.hero.cta.resume}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 5v14m0 0l-4-4m4 4l4-4" />
              </svg>
            </a>
            <a
              href="https://t.me/S_Khkv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-charcoal/20 text-charcoal rounded-lg font-medium text-sm hover:border-charcoal/40 transition-colors"
            >
              {t.hero.cta.telegram}
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2">
          <div className="w-px h-64 bg-gradient-to-b from-transparent via-copper/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
