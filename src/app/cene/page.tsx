import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageProvider";
import Header from "@/components/Header";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { siteMeta } from "@/lib/content";

const pageTitle = "Cenovnik";
const fullTitle = `${siteMeta.brand} — ${pageTitle}`;
const description =
  "Cene usluga dizajna enterijera, 3D vizuelizacije i nameštaja po meri. Prvi razgovor je besplatan.";
const url = `${siteMeta.url}/cene`;

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "website",
    url,
    siteName: siteMeta.brand,
    title: fullTitle,
    description,
    locale: "sr_RS",
    images: [`${siteMeta.url}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
  },
};

export default function PricingPage() {
  return (
    <LanguageProvider initialLocale="sr">
      <Header />
      <main className="pt-20">
        <PricingCards />
      </main>
      <Footer />
      <StickyCallButton />
    </LanguageProvider>
  );
}
