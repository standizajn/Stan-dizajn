"use client";

import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";
import AboutSlider from "@/components/AboutSlider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#fafaf8] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-[#8a8378] uppercase">
            {t.about.kicker}
          </p>
          <h2
            className={`${display.className} mt-4 text-3xl font-medium leading-tight text-[#141414] sm:text-4xl md:text-5xl`}
          >
            {t.about.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {t.about.paragraphs.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-[#4a463f]">
                {p}
              </p>
            ))}
          </div>
        </div>
        <AboutSlider />
      </div>
    </section>
  );
}
