import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";
import { getAllPostSlugs, getAllArticleSlugs } from "@/sanity/lib/queries";

export const revalidate = 3600;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://opsandinsights.com";

type PostSlug = {
  slug: string;
  publishedAt: string;
};

const STATIC_PAGES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/",           priority: 1.0, changeFrequency: "weekly"  },
  { path: "/writing",    priority: 0.9, changeFrequency: "weekly"  },
  { path: "/articles",   priority: 0.7, changeFrequency: "weekly"  },
  { path: "/building",   priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources",  priority: 0.6, changeFrequency: "monthly" },
  { path: "/products",   priority: 0.6, changeFrequency: "monthly" },
  { path: "/about",      priority: 0.5, changeFrequency: "yearly"  },
  { path: "/cv",         priority: 0.5, changeFrequency: "yearly"  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, articles] = await Promise.all([
    client.fetch<PostSlug[]>(getAllPostSlugs),
    client.fetch<PostSlug[]>(getAllArticleSlugs),
  ]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  const postEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, publishedAt }) => ({
      url: `${SITE_URL}/writing/${slug}`,
      lastModified: publishedAt ? new Date(publishedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const articleEntries: MetadataRoute.Sitemap = articles.map(
    ({ slug, publishedAt }) => ({
      url: `${SITE_URL}/articles/${slug}`,
      lastModified: publishedAt ? new Date(publishedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticEntries, ...postEntries, ...articleEntries];
}
