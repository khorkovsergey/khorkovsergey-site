'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ru } from './ru';
import { en } from './en';

export type Locale = 'ru' | 'en';

type DeepStringRecord = {
  [key: string]: string | DeepStringRecord | Array<any>;
};

type Translations = typeof ru;

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const dictionaries: Record<Locale, Translations> = { ru, en };

const I18nContext = createContext<I18nContextType>({
  locale: 'ru',
  t: ru,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru');

  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
    }
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t: dictionaries[locale], setLocale: handleSetLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
