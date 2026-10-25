"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageProvider";

export default function AboutSlider() {
  const { locale } = useLanguage();

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#141414]">
      <Image
        src="https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/about/milutin-stankovic.webp"
        alt={
          locale === "sr"
            ? "Milutin Stanković, inženjer arhitekture, STAN.design"
            : "Milutin Stanković, architectural engineer, STAN.design"
        }
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 py-6">
        <p className="text-lg font-medium text-white">Milutin Stanković</p>
        <p className="text-sm text-white/75">
          {locale === "sr" ? "inženjer arhitekture" : "architectural engineer"}
        </p>
      </div>
    </div>
  );
}
