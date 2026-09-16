"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { PortfolioProject } from "@/lib/content";

interface PortfolioLightboxProps {
  project: PortfolioProject;
  onClose: () => void;
}

export default function PortfolioLightbox({ project, onClose }: PortfolioLightboxProps) {
  const images = project.images ?? [];
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  if (images.length === 0 || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black/95" onClick={onClose}>
      <div
        className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-6 text-white md:px-10 md:py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-xs font-medium tracking-[0.15em] text-white/50 uppercase">{project.category}</p>
          <p className="text-sm font-medium">{project.title}</p>
        </div>
        <button
          type="button"
          aria-label="Zatvori"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center px-4 py-24 md:px-16 md:py-28"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index]}
          alt={`${project.title} ${index + 1}`}
          className="block"
          style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Prethodna slika"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-4"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Sledeća slika"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % images.length);
            }}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-4"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 px-4 py-6 md:py-10"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Prikaži sliku ${i + 1}`}
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === index ? "20px" : "6px",
                  backgroundColor: i === index ? "#ffffff" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>,
    document.body
  );
}
