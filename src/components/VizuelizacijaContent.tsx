"use client";

import Image from "next/image";
import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";

export default function VizuelizacijaContent() {
  const { t, locale } = useLanguage();
  const service = t.services.items[1];

  return (
    <section className="bg-[#fafaf8] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/service-pages/3d-vizuelizacija-hero.webp"
              alt={
                locale === "sr"
                  ? "3D render radnog prostora u toplim drvenim tonovima"
                  : "3D render of a home office in warm wood tones"
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
              {locale === "sr"
                ? "Vidi kako će izgledati prostor, pre nego što potrošiš prvi dinar"
                : "See how your space will look, before you spend a dime"}
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-[#4a463f]">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
