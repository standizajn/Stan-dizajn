"use client";

import Image from "next/image";
import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";

export default function DizajnEnterijeraContent() {
  const { t, locale } = useLanguage();
  const service = t.services.items[0];

  return (
    <section className="bg-[#fafaf8] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/service-pages/dizajn-enterijera-hero.webp"
              alt={
                locale === "sr"
                  ? "Dizajn enterijera dnevne sobe u toplim, prirodnim tonovima"
                  : "Living room interior design in warm, natural tones"
              }
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1
              className={`${display.className} text-3xl font-medium leading-tight text-[#141414] sm:text-4xl md:text-5xl`}
            >
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#4a463f]">
              {locale === "sr"
                ? "Od ideje i 3D vizualizacije do izvođenja i nameštaja po meri."
                : "From idea and 3D visualization to execution and custom furniture."}
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-[#4a463f]">
              {service.description}
            </p>
            {service.bullets && (
              <ul className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-[15px] leading-snug text-[#4a463f]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8a8378]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
