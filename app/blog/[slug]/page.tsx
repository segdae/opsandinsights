import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { client, sanityFetch, urlFor } from "@/lib/sanity";
import {
  getPostBySlug,
  getAllPostSlugs,
  getRelatedPosts,
} from "@/sanity/lib/queries";
import PostBody from "@/components/PostBody";
import NewsletterForm from "@/components/NewsletterForm";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://opsandinsights.com";

// ─── Types ──────────────────────────────────────────────────────────────────

type SanityBlock = {
  _type: string;
  _key?: string;
  [key: string]: unknown;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  body: SanityBlock[];
  pillar?: {
    name: string;
    slug: { current: string };
    colour: string;
  };
  ogImage?: unknown;
};

type RelatedPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatDate(iso: string, long = false) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: long ? "long" : "short",
    year: "numeric",
  });
}

/** Count words across all text spans in the body, divide by 200 wpm. */
function calcReadingTime(body: SanityBlock[]): number {
  let text = "";
  for (const block of body) {
    if (block._type === "block") {
      const children = block.children as
        | Array<{ _type: string; text: string }>
        | undefined;
      text += (children ?? [])
        .filter((c) => c._type === "span")
        .map((c) => c.text)
        .join(" ");
    } else if (block._type === "codeBlock") {
      text += " " + ((block.code as string) ?? "");
    }
  }
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

// ─── Static generation ──────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(getAllPostSlugs);
  return slugs.map(({ slug }) => ({ slug }));
}

// ─── SEO metadata ───────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await sanityFetch<Post | null>({
    query: getPostBySlug,
    params: { slug: params.slug },
  });

  if (!post) return { title: "Post Not Found | Ops & Insights" };

  const canonicalUrl = `${SITE_URL}/blog/${post.slug.current}`;

  const ogImageUrl = post.ogImage
    ? urlFor(post.ogImage).width(1200).height(630).url()
    : undefined;

  return {
    title: `${post.title} | Ops & Insights`,
    description: post.excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      ...(ogImageUrl && {
        images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(ogImageUrl && { images: [ogImageUrl] }),
    },
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityFetch<Post | null>({
    query: getPostBySlug,
    params: { slug: params.slug },
  });

  if (!post) notFound();

  const readingTime = calcReadingTime(post.body ?? []);

  const canonicalUrl = `${SITE_URL}/blog/${post.slug.current}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt ?? "",
    datePublished: post.publishedAt,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      name: "Shea Campbell",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Person",
      name: "Shea Campbell",
      url: SITE_URL,
    },
  };

  // Only fetch related posts if this post belongs to a pillar
  const related =
    post.pillar && post.pillar.slug?.current
      ? await sanityFetch<RelatedPost[]>({
          query: getRelatedPosts,
          params: {
            pillarSlug: post.pillar.slug.current,
            postId: post._id,
          },
        })
      : [];

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Post header ─────────────────────────────────────────────────────── */}
      {post.pillar && (
        <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
          {post.pillar.name}
        </span>
      )}

      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight mt-4 leading-tight">
        {post.title}
      </h1>

      <p className="mt-3 text-sm text-secondary">
        {formatDate(post.publishedAt, true)}
        {" · "}
        {readingTime} min read
        {post.pillar && ` · ${post.pillar.name}`}
      </p>

      {/* ── Post body ───────────────────────────────────────────────────────── */}
      <div className="mt-10">
        <PostBody body={post.body ?? []} />
      </div>

      {/* ── Newsletter CTA ──────────────────────────────────────────────────── */}
      <hr className="my-12 border-gray-200" />

      <section>
        <h2 className="font-serif text-2xl font-bold text-primary mb-3">
          Enjoyed this? Get more like it.
        </h2>
        <p className="text-secondary mb-6">
          A fortnightly filter of AI and automation news that actually matters
          for practitioners. No hype, no fluff.
        </p>
        <NewsletterForm />
      </section>

      {/* ── Related posts ───────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-xl font-semibold text-primary mb-6">
            More from {post.pillar?.name}
          </h2>
          <ul className="divide-y divide-gray-100">
            {related.map((rp) => (
              <li
                key={rp._id}
                className="flex items-baseline justify-between gap-6 py-3"
              >
                <Link
                  href={`/blog/${rp.slug.current}`}
                  className="font-medium text-primary hover:text-green-primary transition-colors"
                >
                  {rp.title}
                </Link>
                <time className="text-sm text-secondary whitespace-nowrap shrink-0">
                  {formatDate(rp.publishedAt)}
                </time>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Back link ───────────────────────────────────────────────────────── */}
      <div className="mt-12">
        <Link
          href="/blog"
          className="text-sm text-green-primary hover:text-green-light transition-colors"
        >
          ← Back to blog
        </Link>
      </div>
    </main>
  );
}
