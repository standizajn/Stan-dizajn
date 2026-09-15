"use client";

import { display } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-[#fafaf8] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium tracking-[0.2em] text-[#8a8378] uppercase">
          {t.services.kicker}
        </p>
        <h2
          className={`${display.className} mt-4 max-w-2xl text-3xl font-medium leading-tight text-[#141414] sm:text-4xl md:text-5xl`}
        >
          {t.services.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3">
          {t.services.items.map((service, i) => (
            <div key={service.title} className="flex flex-col">
              <span className="text-sm font-medium text-[#8a8378]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`${display.className} mt-3 text-2xl font-medium text-[#141414]`}
              >
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4a463f]">
                {service.description}
              </p>
              {service.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm leading-snug text-[#4a463f]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8a8378]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
