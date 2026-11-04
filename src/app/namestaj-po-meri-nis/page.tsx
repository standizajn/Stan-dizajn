import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
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
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <h1 className="text-3xl font-medium text-[#141414] sm:text-4xl">
          Nameštaj po meri
        </h1>
        <p className="mt-4 max-w-md text-[15px] text-[#4a463f]">
          Stranica je u pripremi.
        </p>
      </main>
      <Footer />
      <StickyCallButton />
    </LanguageProvider>
  );
}
