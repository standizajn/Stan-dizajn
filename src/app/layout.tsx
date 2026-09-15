import type { Metadata } from "next";
import { poppins, display, body } from "@/lib/fonts";
import { LanguageProvider } from "@/lib/LanguageProvider";
import { siteMeta } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteMeta.brand} — Dizajn enterijera & nameštaj po meri`,
  description:
    "Dizajniramo, vizuelizujemo i izrađujemo nameštaj po meri — sve pod jednim krovom. Sedište u Nišu, radimo širom Srbije.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${poppins.variable} ${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className={`${body.className} min-h-full flex flex-col bg-[#fafaf8] text-[#141414]`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
