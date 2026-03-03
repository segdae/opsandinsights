import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://opsandinsights.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep the Sanity Studio out of search results
      disallow: "/studio/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
