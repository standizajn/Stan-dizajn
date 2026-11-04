import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import NamestajPoMeriContent from "@/components/NamestajPoMeriContent";
import { siteMeta } from "@/lib/content";

const pageTitle = "Nameštaj po meri Niš";

export const metadata: Metadata = {
  title: pageTitle,
  alternates: {
    canonical: `${siteMeta.url}/namestaj-po-meri-nis`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NamestajPoMeriPage() {
  return (
    <LanguageProvider initialLocale="sr">
      <Header />
      <main className="pt-20">
        <NamestajPoMeriContent />
      </main>
      <Footer />
      <StickyCallButton />
    </LanguageProvider>
  );
}
