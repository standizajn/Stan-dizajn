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
        <p className="text-xs text-[#8a8378]">
          © {year} {siteMeta.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
