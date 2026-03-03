import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { getSiteSettings, getLatestPosts, getAllTemplates } from "@/sanity/lib/queries";
import NewsletterForm from "@/components/NewsletterForm";
import CarouselSection, { type CarouselCard } from "@/components/CarouselSection";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://opsandinsights.com";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Revalidate every hour — update in the CMS and the site catches up automatically
export const revalidate = 3600;

type SiteSettings = {
  siteTitle: string;
  tagline: string;
  authorName: string;
  authorRole: string;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  pillar?: { name: string; colour: string };
};

type Template = {
  _id: string;
  name: string;
  slug?: { current: string };
  description?: string;
  price?: number;
  gumroadUrl?: string;
  category?: string;
};

// Placeholder resource cards until /resources has a Sanity schema
const RESOURCE_CARDS: CarouselCard[] = [
  {
    id: "r1",
    title: "AI Tools for Consultants",
    subtitle:
      "A curated list of the AI tools that actually make a difference in day-to-day consulting work.",
    badge: "Guide",
    href: "/resources",
  },
  {
    id: "r2",
    title: "Automation Readiness Checklist",
    subtitle:
      "Before you build anything, run through this checklist to validate the automation is worth pursuing.",
    badge: "Checklist",
    href: "/resources",
  },
  {
    id: "r3",
    title: "Prompt Library for Business",
    subtitle:
      "Tested prompts for the most common business tasks — from emails to slide decks to analysis.",
    badge: "Prompts",
    href: "/resources",
  },
  {
    id: "r4",
    title: "AI Implementation Playbook",
    subtitle:
      "How to take an AI idea from whiteboard to production inside a large organisation.",
    badge: "Playbook",
    href: "/resources",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function Home() {
  const [settings, posts, templates] = await Promise.all([
    sanityFetch<SiteSettings | null>({ query: getSiteSettings }),
    sanityFetch<Post[]>({ query: getLatestPosts }),
    sanityFetch<Template[]>({ query: getAllTemplates }),
  ]);

  const name = settings?.authorName ?? "Shea Campbell";
  const role =
    settings?.authorRole ?? "Expert — AI & Intelligent Automation";
  const tagline =
    settings?.tagline ?? "Making AI work for busy professionals and businesses.";

  const postCards: CarouselCard[] = posts.map((post) => ({
    id: post._id,
    title: post.title,
    subtitle: formatDate(post.publishedAt),
    badge: post.pillar?.name,
    href: `/writing/${post.slug.current}`,
  }));

  const templateCards: CarouselCard[] = templates.map((t) => ({
    id: t._id,
    title: t.name,
    subtitle: t.description,
    badge: t.category,
    href: t.gumroadUrl ?? (t.slug ? `/templates/${t.slug.current}` : "/templates"),
    external: !!t.gumroadUrl,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ops & Insights",
    url: SITE_URL,
    description:
      "Practitioner takes on AI, automation, and consulting. By Shea Campbell, Senior Consultant at EY.",
    author: {
      "@type": "Person",
      name: "Shea Campbell",
      url: `${SITE_URL}/about`,
      sameAs: [
        "https://linkedin.com/in/sheacampbell",
        "https://github.com/sheacampbell",
      ],
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left: text */}
        <div>
          <h1 className="font-serif text-5xl font-bold text-primary tracking-tight leading-tight">
            {name}
          </h1>
          <p className="mt-3 text-lg text-secondary">{role}</p>

          {/* Credential pill */}
          <span className="mt-3 inline-block text-xs font-medium uppercase tracking-widest bg-green-subtle text-green-primary px-3 py-1 rounded-full">
            EY
          </span>

          <p className="mt-6 text-xl text-primary leading-relaxed">{tagline}</p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/writing"
              className="text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
            >
              Read the blog
            </Link>
            <Link
              href="/cv"
              className="text-sm font-medium border border-gray-300 text-primary px-5 py-2.5 rounded-full hover:border-green-primary hover:text-green-primary transition-colors"
            >
              View my CV
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div className="rounded-2xl overflow-hidden mt-8 md:mt-0">
          <Image
            src="/shea-presenting.jpg"
            alt="Shea Campbell presenting on AI to a group"
            width={1120}
            height={630}
            className="w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* ── Latest Posts carousel ────────────────────────────────────────── */}
      <CarouselSection
        heading="Latest"
        viewAllHref="/writing"
        viewAllLabel="Read all posts"
        cards={postCards}
        emptyMessage="No posts yet."
      />

      {/* ── Resources carousel ───────────────────────────────────────────── */}
      <CarouselSection
        heading="Resources"
        viewAllHref="/resources"
        viewAllLabel="View all resources"
        cards={RESOURCE_CARDS}
      />

      {/* ── Templates carousel ───────────────────────────────────────────── */}
      <CarouselSection
        heading="Templates"
        viewAllHref="/templates"
        viewAllLabel="View all templates"
        cards={templateCards}
        emptyMessage="Templates coming soon."
      />

      {/* ── Newsletter ───────────────────────────────────────────────────── */}
      <section className="mt-20 bg-gray-50 rounded-2xl px-8 py-10">
        <h2 className="font-serif text-2xl font-bold text-primary mb-3">
          Get the signal, skip the noise
        </h2>
        <p className="text-secondary mb-6">
          A fortnightly filter of AI and automation news that actually matters
          for practitioners. No hype, no fluff.
        </p>
        <NewsletterForm />
      </section>
    </main>
  );
}
