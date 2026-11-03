import { company } from "@/data/content";

/**
 * Canonical origin for the deployed site. Set NEXT_PUBLIC_SITE_URL in Vercel
 * to the live domain; the fallback is the company's existing domain so link
 * previews and sitemap URLs are never relative or wrong in production.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.goruralindia.in"
).replace(/\/$/, "");

export const siteName = company.name;

export const siteDescription =
  "Go Rural India is a full-service marketing and advertising agency in Hyderabad, pairing on-ground rural campaigns across Telangana and Andhra Pradesh with modern digital strategy.";

/**
 * Schema.org description of the business. Local-intent searches ("rural
 * marketing agency Hyderabad") are the main way this company gets found, so
 * the structured data carries the address, phone and service list explicitly.
 */
export function organisationJsonLd(serviceNames: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "AdvertisingAgency"],
    "@id": `${siteUrl}/#organisation`,
    name: company.legalName,
    alternateName: company.name,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/opengraph-image.png`,
    description: siteDescription,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "126 & 127 Swarnajayanthi Complex, Ameerpet",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500038",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Andhra Pradesh" },
    ],
    sameAs: [company.social.facebook, company.social.linkedin],
    slogan: "Taking Your Brand To Hinterlands",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rural marketing services",
      itemListElement: serviceNames.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}
