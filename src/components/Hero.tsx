"use client";

import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";
import PlaceholderArt from "@/components/PlaceholderArt";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#141414] text-white"
    >
      <PlaceholderArt
        seed={1}
        className="absolute inset-0 h-full w-full text-white opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <h1
          className={`${display.className} max-w-3xl text-4xl leading-[1.1] font-medium sm:text-5xl md:text-6xl`}
        >
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-base font-light text-white/80 md:text-lg">
          {t.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium tracking-wide text-[#141414] transition-transform hover:scale-[1.03]"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
