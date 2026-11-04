import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import VizuelizacijaContent from "@/components/VizuelizacijaContent";
import { siteMeta } from "@/lib/content";

const pageTitle = "3D vizuelizacija";

export const metadata: Metadata = {
  title: pageTitle,
  alternates: {
    canonical: `${siteMeta.url}/3D-vizuelizacija`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function VizuelizacijaPage() {
  return (
    <LanguageProvider initialLocale="sr">
      <Header />
      <main className="pt-20">
        <VizuelizacijaContent />
      </main>
      <Footer />
      <StickyCallButton />
    </LanguageProvider>
  );
}
