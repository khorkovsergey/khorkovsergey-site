'use client';

import { useI18n } from '../lib/i18n';

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative min-h-screen flex items-center section-padding pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="section-max w-full relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up opacity-0 mb-6">
            <span className="text-accent font-medium text-sm tracking-wide uppercase">
              Products · Projects · Operations
            </span>
          </div>
          <h1 className="animate-fade-up opacity-0 animate-delay-100 heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            {t.hero.greeting}
          </h1>
          <p className="animate-fade-up opacity-0 animate-delay-200 font-display text-xl sm:text-2xl md:text-3xl text-textSecondary leading-snug mb-8 text-balance whitespace-pre-line">
            {t.hero.headline}
          </p>
          <p className="animate-fade-up opacity-0 animate-delay-300 text-textMuted text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {t.hero.subtext}
          </p>
          <div className="animate-fade-up opacity-0 animate-delay-400 flex flex-wrap gap-2.5 mb-12">
            {t.hero.domains.map((domain, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-elevated text-textSecondary border border-border hover:border-accent/30 hover:bg-accentGlow hover:text-accent transition-all duration-200">
                {domain}
              </span>
            ))}
          </div>
          <div className="animate-fade-up opacity-0 animate-delay-500 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-accent text-base rounded-lg font-semibold text-sm hover:bg-accentDark transition-colors shadow-glow-sm hover:shadow-glow-md">
              {t.hero.cta.contact}
            </a>
            <a href={t.contact.resumeFile} download className="inline-flex items-center px-6 py-3 border border-borderLight text-textPrimary rounded-lg font-medium text-sm hover:border-accent/30 hover:text-accent transition-all">
              {t.hero.cta.resume}
            </a>
            <a href="https://t.me/S_Khkv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-borderLight text-textPrimary rounded-lg font-medium text-sm hover:border-accent/30 hover:text-accent transition-all">
              {t.hero.cta.telegram}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}