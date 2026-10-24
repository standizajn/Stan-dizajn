"use client";

import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";
import ProductionSlider from "@/components/ProductionSlider";

export default function Production() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#fafaf8] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <ProductionSlider />
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-[#8a8378] uppercase">
            {t.production.kicker}
          </p>
          <h2
            className={`${display.className} mt-4 whitespace-pre-line text-3xl font-medium leading-tight text-[#141414] sm:text-4xl md:text-5xl`}
          >
            {t.production.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {t.production.paragraphs.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-[#4a463f]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
