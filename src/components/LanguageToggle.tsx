"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageProvider";
import { locales, type Locale } from "@/lib/content";

interface LanguageToggleProps {
  mode?: "light" | "dark";
}

const PATH_BY_LOCALE: Record<Locale, string> = {
  sr: "/",
  en: "/en",
};

export default function LanguageToggle({ mode = "dark" }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();
  const router = useRouter();
  const isLight = mode === "light";

  const handleSelect = (code: Locale) => {
    setLocale(code);
    router.push(PATH_BY_LOCALE[code]);
  };

  return (
    <div
      className="inline-flex items-center gap-1 text-xs font-medium tracking-wide"
      style={{ color: isLight ? "#ffffff" : "#141414" }}
    >
      {locales.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => handleSelect(code)}
            aria-pressed={locale === code}
            className="cursor-pointer uppercase transition-opacity"
            style={{ opacity: locale === code ? 1 : 0.5 }}
          >
            {code}
          </button>
          {i < locales.length - 1 && <span style={{ opacity: 0.4 }}>/</span>}
        </span>
      ))}
    </div>
  );
}
