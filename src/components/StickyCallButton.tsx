"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageProvider";
import { siteMeta } from "@/lib/content";

export default function StickyCallButton() {
  const { locale } = useLanguage();
  const [pastHero, setPastHero] = useState(false);
  const [nearContact, setNearContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearContact(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !nearContact;

  const firstName = siteMeta.founder.split(" ")[0];
  const label = locale === "sr" ? `Pozovi ${firstName}a` : `Call ${firstName}`;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-0 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={`tel:${siteMeta.phone.replace(/\s/g, "")}`}
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#141414] py-4 text-base font-medium tracking-wide text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] active:scale-[0.98]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20.5c0 .6-.4 1-1 1C10.6 21.5 2.5 13.4 2.5 3.5c0-.6.4-1 1-1H7.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
        {label}
      </a>
    </div>
  );
}
