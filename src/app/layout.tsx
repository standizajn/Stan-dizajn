import type { Metadata } from "next";
import { poppins, display, body } from "@/lib/fonts";
import { siteMeta } from "@/lib/content";
import "./globals.css";

const title = "Dizajn enterijera i nameštaj po meri Niš | STAN.design";
const description =
  "Projekat, 3D prikaz i nameštaj po meri iz radionice u Nišu. Jedna osoba od ideje do useljenja. Prvi razgovor je besplatan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: title,
    template: `%s — ${siteMeta.brand}`,
  },
  description,
  authors: [{ name: siteMeta.founder }],
  creator: siteMeta.founder,
  alternates: {
    canonical: siteMeta.url,
    languages: {
      sr: siteMeta.url,
      en: `${siteMeta.url}/en`,
    },
  },
  openGraph: {
    type: "website",
    url: siteMeta.url,
    siteName: siteMeta.brand,
    title,
    description,
    locale: "sr_RS",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "ProfessionalService"],
  name: siteMeta.brand,
  description,
  url: siteMeta.url,
  telephone: siteMeta.phone,
  email: siteMeta.email,
  image: `${siteMeta.url}/opengraph-image`,
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: siteMeta.founder,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteMeta.city,
    addressCountry: siteMeta.country,
  },
  areaServed: {
    "@type": "Country",
    name: "Serbia",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dizajn enterijera" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nameštaj po meri" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D vizuelizacija" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ugradnja i renoviranje" } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${poppins.variable} ${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className={`${body.className} min-h-full flex flex-col bg-[#fafaf8] text-[#141414]`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
