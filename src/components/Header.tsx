"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/LanguageProvider";

const sections = [
  { id: "services", key: "services" as const },
  { id: "process", key: "process" as const },
  { id: "about", key: "about" as const },
  { id: "portfolio", key: "portfolio" as const },
  { id: "contact", key: "contact" as const },
];

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = !scrolled && !menuOpen;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled || menuOpen ? "#fafaf8" : "transparent",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(20,20,20,0.08)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href="#top" className="shrink-0">
          <Logo mode={isLight ? "light" : "dark"} className="scale-[0.8] md:scale-90" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-medium tracking-wide transition-opacity hover:opacity-60"
              style={{ color: isLight ? "#ffffff" : "#141414" }}
            >
              {t.nav[s.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageToggle mode={isLight ? "light" : "dark"} />
          <a
            href="#contact"
            className="rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-colors"
            style={{
              borderColor: isLight ? "#ffffff" : "#141414",
              color: isLight ? "#ffffff" : "#141414",
            }}
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className="h-px w-6 transition-transform"
            style={{
              backgroundColor: isLight ? "#ffffff" : "#141414",
              transform: menuOpen ? "translateY(3.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="h-px w-6 transition-transform"
            style={{
              backgroundColor: isLight ? "#ffffff" : "#141414",
              transform: menuOpen ? "translateY(-3.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-black/10 bg-[#fafaf8] px-6 py-4 md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-base font-medium text-[#141414]"
            >
              {t.nav[s.key]}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-black/10 pt-4">
            <LanguageToggle mode="dark" />
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-[#141414] px-5 py-2 text-sm font-medium text-[#141414]"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
