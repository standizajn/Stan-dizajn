"use client";

import Logo from "@/components/Logo";
import { useLanguage } from "@/lib/LanguageProvider";
import { siteMeta } from "@/lib/content";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#fafaf8] px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Logo mode="dark" className="scale-[0.8]" />
          <p className="text-sm text-[#4a463f]">{t.footer.tagline}</p>
        </div>
        <a
          href={siteMeta.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#141414] transition-colors hover:bg-black/5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
          </svg>
        </a>
        <p className="text-xs text-[#8a8378]">
          © {year} {siteMeta.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
