import type { MetadataRoute } from "next";
import { siteUrl, publicRoutes } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({ url: new URL(path, siteUrl).href }));
}
