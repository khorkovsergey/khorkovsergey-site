'use client';

import { useState } from 'react';
import { useI18n, Locale } from '../lib/i18n';
import {
  influences,
  influencesPageRu,
  influencesPageEn,
  type Influence,
  type InfluenceType,
  type InfluencesPageContent,
} from '../data/influences';

const typeIcons: Record<InfluenceType, JSX.Element> = {
  book: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>),
  person: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>),
  event: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>),
};

const typeColors: Record<InfluenceType, { text: string; bg: string; border: string; hex: string }> = {
  book: { text: 'text-[#5BA4E6]', bg: 'bg-[rgba(91,164,230,0.1)]', border: 'border-[rgba(91,164,230,0.2)]', hex: '#5BA4E6' },
  person: { text: 'text-[#00D4AA]', bg: 'bg-[rgba(0,212,170,0.1)]', border: 'border-[rgba(0,212,170,0.2)]', hex: '#00D4AA' },
  event: { text: 'text-[#B07AE6]', bg: 'bg-[rgba(176,122,230,0.1)]', border: 'border-[rgba(176,122,230,0.2)]', hex: '#B07AE6' },
};

type FilterType = 'all' | InfluenceType;

export function InfluencesPage() {
  const { locale, t, setLocale } = useI18n();
  const page: InfluencesPageContent = locale === 'ru' ? influencesPageRu : influencesPageEn;
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const l = (obj: { ru: string; en: string }) => obj[locale];
  const filtered = filter === 'all' ? influences : influences.filter(i => i.type === filter);
  const featured = influences.filter(i => i.featured);
  const selected = selectedId ? influences.find(i => i.id === selectedId) : null;

  const tabs: { key: FilterType; label: string }[] = [
    { key: 'all', label: page.tabAll },
    { key: 'book', label: page.tabBooks },
    { key: 'person', label: page.tabPeople },
    { key: 'event', label: page.tabEvents },
  ];

  const getTypeLabel = (type: InfluenceType) => type === 'book' ? page.tabBooks : type === 'person' ? page.tabPeople : page.tabEvents;

  return (
    <div className="min-h-screen bg-base text-textSecondary font-body">
      <header className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16">
          <a href="/" className="text-sm text-accent hover:text-accentLight transition-colors font-medium">{page.backLabel}</a>
          <div className="flex items-center gap-1">
            {(['ru', 'en'] as Locale[]).map((lang) => (
              <button key={lang} onClick={() => setLocale(lang)} className={`px-2.5 py-1 text-sm font-medium rounded transition-all duration-200 ${locale === lang ? 'bg-accent text-base' : 'text-textMuted hover:text-textPrimary'}`}>{t.langSwitch[lang]}</button>
            ))}
          </div>
        </div>
      </header>

      <section className="pt-28 pb-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-content mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-textPrimary mb-4">{page.pageTitle}</h1>
          <p className="text-textMuted text-base md:text-lg max-w-2xl leading-relaxed">{page.pageSubtitle}</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-12">
        <div className="max-w-content mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-textGhost mb-6">{page.featuredTitle}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((item) => {
              const tc = typeColors[item.type];
              return (
                <button key={item.id} onClick={() => setSelectedId(item.id)} className={`text-left p-5 rounded-2xl border ${tc.border} ${tc.bg} hover:shadow-lg transition-all duration-300 group`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={tc.text}>{typeIcons[item.type]}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${tc.text}`}>{getTypeLabel(item.type)}</span>
                    <span className="text-textGhost text-[10px] ml-auto">{item.period}</span>
                  </div>
                  <h3 className="font-display text-base text-textPrimary mb-1 group-hover:text-white transition-colors leading-snug">{l(item.title)}</h3>
                  <p className="text-xs text-textMuted mb-3">{l(item.subtitle)}</p>
                  {item.quote && (
                    <p className="text-xs text-textMuted italic border-l-2 pl-3 leading-relaxed" style={{ borderColor: tc.hex }}>{l(item.quote)}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-4 sticky top-16 z-40 bg-base/80 backdrop-blur-xl">
        <div className="max-w-content mx-auto flex gap-2 py-4 border-b border-border/30">
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setFilter(tab.key)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${filter === tab.key ? 'bg-accent text-base' : 'text-textMuted hover:text-textPrimary hover:bg-elevated'}`}>{tab.label}</button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-8 pb-20">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => {
              const tc = typeColors[item.type];
              return (
                <button key={item.id} onClick={() => setSelectedId(item.id)} className="text-left p-5 rounded-2xl border border-border bg-elevated/40 hover:bg-elevated/70 hover:border-borderLight hover:shadow-card-hover transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={tc.text}>{typeIcons[item.type]}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${tc.text}`}>{getTypeLabel(item.type)}</span>
                    <span className="text-textGhost text-[10px] ml-auto">{item.period}</span>
                  </div>
                  <h3 className="font-display text-base text-textPrimary mb-1 group-hover:text-white transition-colors leading-snug">{l(item.title)}</h3>
                  <p className="text-xs text-textMuted mb-3">{l(item.subtitle)}</p>
                  <p className="text-xs text-[#C0C7D6] leading-relaxed mb-3">{l(item.shortDescription)}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 rounded text-[10px] font-medium bg-elevated text-textMuted border border-border">{tag}</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedId(null)}>
          <div className="absolute inset-0 bg-base/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const tc = typeColors[selected.type];
              return (
                <div className="p-6 md:p-8">
                  <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-elevated flex items-center justify-center text-textMuted hover:text-textPrimary transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={tc.text}>{typeIcons[selected.type]}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${tc.text}`}>{getTypeLabel(selected.type)}</span>
                    <span className="text-textGhost text-xs ml-2">{selected.period}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-textPrimary mb-2 leading-snug pr-8">{l(selected.title)}</h2>
                  <p className="text-sm text-textMuted mb-6">{l(selected.subtitle)}</p>
                  {selected.quote && (
                    <div className={`mb-6 p-4 rounded-xl ${tc.bg} border ${tc.border}`}>
                      <p className={`text-sm italic ${tc.text} leading-relaxed`}>&laquo;{l(selected.quote)}&raquo;</p>
                    </div>
                  )}
                  <p className="text-[#C0C7D6] leading-relaxed mb-6">{l(selected.fullDescription)}</p>
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-textGhost mb-2">{page.labelImpact}</h3>
                    <p className="text-textPrimary leading-relaxed text-sm">{l(selected.impact)}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 rounded-md text-xs font-medium bg-elevated text-textMuted border border-border">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      <footer className="px-6 md:px-10 lg:px-16 py-8 border-t border-border">
        <div className="max-w-content mx-auto flex items-center justify-between">
          <a href="/" className="text-sm text-accent hover:text-accentLight transition-colors">{page.backLabel}</a>
          <p className="text-xs text-textGhost">khorkovsergey.com</p>
        </div>
      </footer>
    </div>
  );
}
