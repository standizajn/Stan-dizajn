"use client";

import Image from "next/image";
import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";

const stepImages = [
  "/images/process/step-01-konsultacije.jpg",
  "/images/process/step-02-vizuelizacija.jpg",
  "/images/process/step-03-ponuda.jpg",
  "/images/process/step-04-mere.jpg",
  "/images/process/step-05-proizvodnja.jpg",
  "/images/process/step-06-montaza.jpg",
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="bg-[#141414] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
          {t.process.kicker}
        </p>
        <h2
          className={`${display.className} mt-4 max-w-2xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl`}
        >
          {t.process.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {t.process.steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-sm p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] to-[#2b2b2b]" />
              <Image
                src={stepImages[i]}
                alt={step.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-35"
              />
              <div className="relative z-10">
                <span
                  className={`${display.className} text-4xl font-medium text-white/75`}
                >
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
