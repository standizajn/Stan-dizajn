"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, locales, type Locale, type SiteContent } from "@/lib/content";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "stan-design-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("sr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && locales.includes(stored as Locale)) {
        setLocaleState(stored as Locale);
      }
    } catch {
      // localStorage unavailable — keep default
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const value = useMemo(
    () => ({ locale, setLocale, t: content[locale] }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
