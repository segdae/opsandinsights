import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";
import { getAllPosts } from "@/sanity/lib/queries";

// Revalidate the feed every hour so new posts appear without a redeploy
export const revalidate = 3600;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://opsandinsights.com";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
};

/** Escape the five XML special characters. Used for element text content. */
function x(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await client.fetch<Post[]>(getAllPosts);

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug.current}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      // Wrap description in CDATA so any HTML/special chars in excerpts are safe
      const description = post.excerpt
        ? `<![CDATA[${post.excerpt}]]>`
        : "";

      return `
    <item>
      <title>${x(post.title)}</title>
      <link>${url}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${url}</guid>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ops &amp; Insights</title>
    <link>${SITE_URL}</link>
    <description>Practitioner takes on AI, automation, and consulting.</description>
    <language>en-gb</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // CDN-cacheable for 1 hour, stale content served for up to 24 h while revalidating
      "Cache-Control":
        "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
