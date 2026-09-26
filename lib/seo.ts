import type { Metadata } from "next";
import { BUSINESS } from "./business";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://max-ai-personal-system.cuddly-daisy-4498.chatgpt.site";
export const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const publicRoutes = [
  "/",
  "/features",
  "/how-it-works",
  "/demo",
  "/pricing",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: new URL(path, siteUrl).href },
    robots: { index: isIndexable, follow: isIndexable },
    openGraph: {
      title,
      description,
      url: new URL(path, siteUrl).href,
      type: "website",
      siteName: BUSINESS.productName,
      images: [
        {
          url: new URL("/max-ai-social-preview.png", siteUrl).href,
          width: 1200,
          height: 630,
          alt: "MAX AI — Your Personal AI System",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/max-ai-social-preview.png", siteUrl).href],
    },
  };
}
export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: BUSINESS.productName,
  applicationCategory: "ProductivityApplication",
  operatingSystem: BUSINESS.platform,
  url: siteUrl,
  description:
    "MAX AI is a Windows personal AI system for voice, user-controlled memory, supported computer commands and configurable AI providers. Demo requests and purchases are handled manually through WhatsApp.",
  offers: (["PKR", "USD"] as const).map((currency) => ({
    "@type": "Offer",
    priceCurrency: currency,
    price: BUSINESS.pricing[currency],
    url: new URL("/pricing", siteUrl).href,
    description:
      "One-time current-version license. Purchase and delivery arranged manually through WhatsApp.",
  })),
};
