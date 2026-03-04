import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import en from '../locales/en.json';
import de from '../locales/de.json';

type Lang = 'EN' | 'DE';
type Dict = typeof en;

const dictionaries: Record<Lang, Dict> = { EN: en, DE: de };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dict: Dict;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang');
    return (stored === 'EN' || stored === 'DE') ? stored : 'EN';
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  }, []);

  const t = useCallback((key: string): string => {
    const value = getNestedValue(dictionaries[lang], key);
    if (typeof value === 'string') return value;
    // Fallback to English
    const fallback = getNestedValue(dictionaries.EN, key);
    if (typeof fallback === 'string') return fallback;
    // Show key as fallback for debugging
    return key;
  }, [lang]);

  const dict = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
