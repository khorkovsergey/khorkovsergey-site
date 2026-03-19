'use client';

import { useState, useEffect } from 'react';
import { useI18n, Locale } from '../lib/i18n';

export function Header() {
  const { locale, t, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'career', href: '#career' },
    { key: 'roles', href: '#roles' },
    { key: 'expertise', href: '#expertise' },
    { key: 'results', href: '#results' },
    { key: 'approach', href: '#approach' },
    { key: 'contact', href: '#contact' },
    // { key: 'influences', href: '/influences' },
  ] as const;

  const handleNav = (href: string) => {
    setMobileOpen(false);
   if (href.startsWith('/')) {
    window.location.href = href;
    } else {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
   }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding section-max">
        <div className="flex items-center justify-between h-16 md:h-18">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-lg md:text-xl text-textPrimary hover:text-accent transition-colors"
          >
            {t.nav.home || 'В начало'}
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(({ key, href }) => (
              <button
                key={key}
                onClick={() => handleNav(href)}
                className="text-sm text-textMuted hover:text-textPrimary transition-colors font-medium"
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}

            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-border">
              {(['ru', 'en'] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`px-2.5 py-1 text-sm font-medium rounded transition-all duration-200 ${
                    locale === lang
                      ? 'bg-accent text-base'
                      : 'text-textMuted hover:text-textPrimary'
                  }`}
                >
                  {t.langSwitch[lang]}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex lg:hidden items-center gap-3">
            <div className="flex items-center gap-1">
              {(['ru', 'en'] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                    locale === lang
                      ? 'bg-accent text-base'
                      : 'text-textMuted'
                  }`}
                >
                  {t.langSwitch[lang]}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-textPrimary"
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-base/95 backdrop-blur-xl border-t border-border">
          <nav className="section-padding py-6 flex flex-col gap-4">
            {navItems.map(({ key, href }) => (
              <button
                key={key}
                onClick={() => handleNav(href)}
                className="text-left text-base text-textSecondary hover:text-accent transition-colors font-medium"
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
