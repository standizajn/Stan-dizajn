"use client";

import { useState } from "react";
import Image from "next/image";
import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";
import PlaceholderArt from "@/components/PlaceholderArt";
import PortfolioLightbox from "@/components/PortfolioLightbox";

export default function Portfolio() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          {t.portfolio.projects.map((project, i) => {
            const hasImages = !!project.images && project.images.length > 0;
            return (
              <button
                key={project.title}
                type="button"
                onClick={() => hasImages && setOpenIndex(i)}
                disabled={!hasImages}
                className={`group text-left ${hasImages ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#141414]">
                  {hasImages ? (
                    <Image
                      src={project.images![0]}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderArt
                      seed={i + 10}
                      className="h-full w-full text-white opacity-40 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {hasImages && project.images!.length > 1 && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white">
                      +{project.images!.length - 1}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-xs font-medium tracking-[0.15em] text-[#8a8378] uppercase">
                  {project.category}
                </p>
                <h3 className={`${display.className} mt-1 text-xl font-medium text-[#141414]`}>
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-[#4a463f]">{project.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <PortfolioLightbox
          project={t.portfolio.projects[openIndex]}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
