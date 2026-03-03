import type { Metadata } from "next";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { getAllArticles } from "@/sanity/lib/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles",
  description:
    "In-depth guides and resources on AI, automation, and consulting practice.",
  alternates: { canonical: "/articles" },
};

type Article = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  pillar?: { name: string; colour: string };
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function ArticlesPage() {
  const articles = await sanityFetch<Article[]>({ query: getAllArticles });

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Articles
      </h1>
      <p className="mt-2 text-secondary">
        In-depth guides and resources on AI, automation, and consulting practice.
      </p>

      <div className="mt-10">
        {articles.length > 0 ? (
          <ul className="space-y-1">
            {articles.map((article) => (
              <li key={article._id}>
                <Link
                  href={`/articles/${article.slug.current}`}
                  className="flex items-baseline justify-between gap-6 py-4 px-3 -mx-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-baseline gap-2 flex-wrap min-w-0">
                    <span className="font-medium text-primary group-hover:text-green-primary transition-colors">
                      {article.title}
                    </span>
                    {article.pillar && (
                      <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                        {article.pillar.name}
                      </span>
                    )}
                  </div>
                  <time className="text-sm text-secondary whitespace-nowrap shrink-0">
                    {formatDate(article.publishedAt)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-secondary text-sm">Articles coming soon.</p>
        )}
      </div>
    </main>
  );
}
