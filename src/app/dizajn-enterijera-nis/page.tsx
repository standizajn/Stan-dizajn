import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import DizajnEnterijeraContent from "@/components/DizajnEnterijeraContent";
import { siteMeta } from "@/lib/content";

const pageTitle = "Dizajn enterijera Niš";

export const metadata: Metadata = {
  title: pageTitle,
  alternates: {
    canonical: `${siteMeta.url}/dizajn-enterijera-nis`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DizajnEnterijeraPage() {
  return (
    <LanguageProvider initialLocale="sr">
      <Header />
      <main className="pt-20">
        <DizajnEnterijeraContent />
      </main>
      <Footer />
      <StickyCallButton />
    </LanguageProvider>
  );
}
