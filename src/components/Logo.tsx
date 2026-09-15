import { poppins } from "@/lib/fonts";
import { siteMeta } from "@/lib/content";

interface LogoProps {
  mode?: "light" | "dark";
  className?: string;
}

export default function Logo({ mode = "dark", className = "" }: LogoProps) {
  const isLight = mode === "light";

  return (
    <div
      className={`inline-flex flex-col items-start border px-3 py-1.5 leading-[1.05] ${poppins.className} ${className}`}
      style={{
        borderColor: isLight ? "rgba(255,255,255,0.85)" : "rgba(20,20,20,0.85)",
        color: isLight ? "#ffffff" : "#141414",
      }}
      aria-label={siteMeta.brand}
    >
      <span className="text-[0.95rem] tracking-[0.02em]">STAN.</span>
      <span className="text-[0.95rem] tracking-[0.02em]">design</span>
    </div>
  );
}
