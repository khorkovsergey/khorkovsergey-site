'use client';

import { useI18n } from '../lib/i18n';

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-padding py-20 md:py-30 bg-elevated">
      <div className="section-max">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-textPrimary mb-4">{t.contact.title}</h2>
          <p className="text-textMuted text-base md:text-lg leading-relaxed mb-10">{t.contact.subtitle}</p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href={`mailto:${t.contact.emailAddress}`}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-accent text-base rounded-xl font-semibold text-sm hover:bg-accentDark transition-colors shadow-glow-sm hover:shadow-glow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.contact.email}
            </a>

            <a
              href="https://t.me/S_Khkv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-borderLight text-textPrimary rounded-xl font-medium text-sm hover:border-accent/30 hover:text-accent hover:bg-accentGlow transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.628-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              {t.contact.telegram}
            </a>

            <a
              href={t.contact.resumeFile}
              download
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-borderLight text-textPrimary rounded-xl font-medium text-sm hover:border-accent/30 hover:text-accent hover:bg-accentGlow transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              {t.contact.resume}
            </a>

            <a
              href="https://www.linkedin.com/in/sergey-khorkov-12708140/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-borderLight text-textPrimary rounded-xl font-medium text-sm hover:border-accent/30 hover:text-accent hover:bg-accentGlow transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
