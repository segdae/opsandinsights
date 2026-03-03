import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { client, sanityFetch, urlFor } from "@/lib/sanity";
import { getArticleBySlug, getAllArticleSlugs } from "@/sanity/lib/queries";
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

type Article = {
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

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatDate(iso: string, long = false) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: long ? "long" : "short",
    year: "numeric",
  });
}

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
  const slugs = await client.fetch<{ slug: string }[]>(getAllArticleSlugs);
  return slugs.map(({ slug }) => ({ slug }));
}

// ─── SEO metadata ───────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await sanityFetch<Article | null>({
    query: getArticleBySlug,
    params: { slug: params.slug },
  });

  if (!article) return { title: "Article Not Found | Ops & Insights" };

  const canonicalUrl = `${SITE_URL}/articles/${article.slug.current}`;

  const ogImageUrl = article.ogImage
    ? urlFor(article.ogImage).width(1200).height(630).url()
    : undefined;

  return {
    title: `${article.title} | Ops & Insights`,
    description: article.excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      type: "article",
      ...(ogImageUrl && {
        images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      ...(ogImageUrl && { images: [ogImageUrl] }),
    },
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await sanityFetch<Article | null>({
    query: getArticleBySlug,
    params: { slug: params.slug },
  });

  if (!article) notFound();

  const readingTime = calcReadingTime(article.body ?? []);

  const canonicalUrl = `${SITE_URL}/articles/${article.slug.current}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt ?? "",
    datePublished: article.publishedAt,
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

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Article header ──────────────────────────────────────────────────── */}
      {article.pillar && (
        <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
          {article.pillar.name}
        </span>
      )}

      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight mt-4 leading-tight">
        {article.title}
      </h1>

      <p className="mt-3 text-sm text-secondary">
        {formatDate(article.publishedAt, true)}
        {" · "}
        {readingTime} min read
      </p>

      {/* ── Article body ────────────────────────────────────────────────────── */}
      <div className="mt-10">
        <PostBody body={article.body ?? []} />
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

      {/* ── Back link ───────────────────────────────────────────────────────── */}
      <div className="mt-12">
        <Link
          href="/articles"
          className="text-sm text-green-primary hover:text-green-light transition-colors"
        >
          ← Back to articles
        </Link>
      </div>
    </main>
  );
}
