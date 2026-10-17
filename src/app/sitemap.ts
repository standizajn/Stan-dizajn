import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMeta.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          sr: siteMeta.url,
          en: `${siteMeta.url}/en`,
        },
      },
    },
    {
      url: `${siteMeta.url}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          sr: siteMeta.url,
          en: `${siteMeta.url}/en`,
        },
      },
    },
  ];
}
