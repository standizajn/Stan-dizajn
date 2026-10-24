"use client";

import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";
import { siteMeta } from "@/lib/content";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#fafaf8] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-[#141414] px-6 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:divide-x sm:divide-white/15">
          {t.stats.map((stat) => (
            <div key={stat.label} className="px-4">
              <p className={`${display.className} text-2xl font-bold text-white md:text-3xl`}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
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
      </div>
    </section>
  );
}
