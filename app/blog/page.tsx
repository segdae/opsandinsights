import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { getAllPosts, getAllPillars } from "@/sanity/lib/queries";
import BlogPostList from "@/components/BlogPostList";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Practitioner takes on AI, automation, and consulting. No fluff.",
  alternates: { canonical: "/writing" },
};

type Pillar = {
  _id: string;
  name: string;
  slug: { current: string };
  colour: string;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  pillar?: {
    name: string;
    slug: { current: string };
    colour: string;
  };
};

export default async function BlogPage() {
  const [posts, pillars] = await Promise.all([
    sanityFetch<Post[]>({ query: getAllPosts }),
    sanityFetch<Pillar[]>({ query: getAllPillars }),
  ]);

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">Blog</h1>
      <p className="mt-2 text-secondary">
        Practitioner takes on AI, automation, and consulting. No fluff.
      </p>

      <div className="mt-10">
        <BlogPostList posts={posts} pillars={pillars} />
      </div>
    </main>
  );
}
