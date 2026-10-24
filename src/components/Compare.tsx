"use client";

import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Compare() {
  const { t, locale } = useLanguage();

  return (
    <section className="bg-[#fafaf8] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-xs font-medium tracking-[0.2em] text-[#8a8378] uppercase">
          {t.compare.kicker}
        </p>
        <h2
          className={`${display.className} mt-4 text-center text-3xl font-medium leading-tight text-[#141414] sm:text-4xl md:text-5xl`}
        >
          {t.compare.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-[#4a463f]">
          {t.compare.description}
        </p>

        <div className="mt-10">
          <BeforeAfterSlider
            beforeSrc="https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/portfolio-compare/3d-prikaz.webp"
            afterSrc="https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/portfolio-compare/zavrseno.webp"
            beforeAlt={
              locale === "sr"
                ? "3D prikaz kuhinje pre izrade"
                : "3D render of the kitchen before construction"
            }
            afterAlt={
              locale === "sr"
                ? "Izvedena kuhinja po meri, završeno stanje"
                : "The finished custom kitchen"
            }
            labelBefore={t.compare.labelBefore}
            labelAfter={t.compare.labelAfter}
          />
        </div>
      </div>
    </section>
  );
}
