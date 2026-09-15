"use client";

import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";
import PlaceholderArt from "@/components/PlaceholderArt";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="bg-[#fafaf8] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium tracking-[0.2em] text-[#8a8378] uppercase">
          {t.portfolio.kicker}
        </p>
        <h2
          className={`${display.className} mt-4 max-w-2xl text-3xl font-medium leading-tight text-[#141414] sm:text-4xl md:text-5xl`}
        >
          {t.portfolio.heading}
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4a463f]">
          {t.portfolio.comingSoon}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.projects.map((project, i) => (
            <div key={project.title} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#141414]">
                <PlaceholderArt
                  seed={i + 10}
                  className="h-full w-full text-white opacity-40 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-medium tracking-[0.15em] text-[#8a8378] uppercase">
                {project.category}
              </p>
              <h3 className={`${display.className} mt-1 text-xl font-medium text-[#141414]`}>
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-[#4a463f]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
