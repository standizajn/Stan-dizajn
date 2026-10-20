import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageProvider";
import HomeSections from "@/components/HomeSections";
import { siteMeta } from "@/lib/content";

const pageTitle = "Interior Design & Custom Furniture";
const fullTitle = `${siteMeta.brand} — ${pageTitle}`;
const description = siteMeta.description.en;
const url = `${siteMeta.url}/en`;

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: {
    canonical: url,
    languages: {
      sr: siteMeta.url,
      en: url,
    },
  },
  openGraph: {
    type: "website",
    url,
    siteName: siteMeta.brand,
    title: fullTitle,
    description,
    locale: "en_US",
    alternateLocale: ["sr_RS"],
    images: [`${siteMeta.url}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
  },
};

export default function EnglishHome() {
  return (
    <LanguageProvider initialLocale="en">
      <HomeSections />
    </LanguageProvider>
  );
}
