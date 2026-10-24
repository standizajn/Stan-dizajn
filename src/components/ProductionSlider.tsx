"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageProvider";

const slides = [
  {
    src: "https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/production/proizvodnja-01-konsultacija.webp",
    alt: {
      sr: "Milutin Stanković sa majstorom planira izradu nameštaja u radionici Topić Enterijeri",
      en: "Milutin Stanković with a craftsman planning furniture production at the Topić Enterijeri workshop",
    },
  },
  {
    src: "https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/production/proizvodnja-02-cnc-masina.webp",
    alt: {
      sr: "Majstor radi na CNC mašini za obradu drveta u radionici",
      en: "A craftsman operating a CNC woodworking machine in the workshop",
    },
  },
  {
    src: "https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/production/proizvodnja-03-montaza-detalj.webp",
    alt: {
      sr: "Detalj montaže nameštaja po meri, precizan rad majstora",
      en: "Detail of custom furniture assembly, precise craftsmanship",
    },
  },
  {
    src: "https://zeliak7tezbysyo8.public.blob.vercel-storage.com/images/production/proizvodnja-04-tim.webp",
    alt: {
      sr: "Tim majstora iz radionice Topić Enterijeri",
      en: "The team of craftsmen from the Topić Enterijeri workshop",
    },
  },
];

export default function ProductionSlider() {
  const { locale } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#141414]">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt[locale]}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
          priority={i === 0}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`${locale === "sr" ? "Prikaži sliku" : "Show image"} ${i + 1}`}
            onClick={() => setIndex(i)}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === index ? "20px" : "6px",
              backgroundColor: i === index ? "#ffffff" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
