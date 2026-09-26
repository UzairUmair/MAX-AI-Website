import type { MetadataRoute } from "next";
import { siteUrl, isIndexable } from "@/lib/seo";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isIndexable
        ? {
            allow: "/",
            disallow: [
              "/api/",
              "/account/",
              "/license/",
              "/download/",
              "/refund-policy",
            ],
          }
        : { disallow: "/" }),
    },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
