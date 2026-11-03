import type { MetadataRoute } from "next";
import { workCategories } from "@/data/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...workCategories.map((c) => ({
      url: `${siteUrl}/work/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
