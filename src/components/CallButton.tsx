"use client";

import { useState } from "react";
import { siteMeta } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageProvider";

export default function CallButton() {
  const { locale } = useLanguage();
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      window.location.href = `tel:${siteMeta.phone.replace(/\s/g, "")}`;
    } else {
      setRevealed(true);
    }
  };

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        aria-label={locale === "sr" ? "Pozovi" : "Call"}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#141414] text-white transition-transform active:scale-95"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20.5c0 .6-.4 1-1 1C10.6 21.5 2.5 13.4 2.5 3.5c0-.6.4-1 1-1H7.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
      </button>
      {revealed && (
        <a
          href={`tel:${siteMeta.phone.replace(/\s/g, "")}`}
          className="text-sm font-medium text-[#141414]"
        >
          {siteMeta.phone}
        </a>
      )}
    </span>
  );
}
