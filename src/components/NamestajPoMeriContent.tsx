"use client";

import Image from "next/image";
import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";

export default function NamestajPoMeriContent() {
  const { locale } = useLanguage();

  return (
    <section className="bg-[#fafaf8] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
          <Image
            src="https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/service-pages/namestaj-po-meri-hero.webp"
            alt={
              locale === "sr"
                ? "Stolar sklapa nameštaj po meri od furnirane ploče"
                : "Carpenter assembling custom veneered furniture"
            }
            fill
            sizes="(min-width: 768px) 80vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <h1
            className={`${display.className} text-3xl font-medium leading-tight text-[#141414] sm:text-4xl md:text-5xl`}
          >
            {locale === "sr"
              ? "Nameštaj po tvojoj meri, jer se svaki milimetar računa."
              : "Furniture made to your exact measurements, because every millimeter counts."}
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-[#4a463f]">
            {locale === "sr"
              ? "Izrada nameštaja prilagođenog tačno vašem prostoru."
              : "Furniture made to fit your space exactly."}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4a463f]">
            {locale === "sr"
              ? "Proizvodimo kuhinje, stolove, stolice, police i razne druge komade nameštaja po vašoj želji — vrlo povoljno."
              : "We make kitchens, tables, chairs, shelves and various other furniture pieces to your wishes — at very fair prices."}
          </p>
        </div>
      </div>
    </section>
  );
}
