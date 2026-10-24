"use client";

import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";

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
    </section>
  );
}
