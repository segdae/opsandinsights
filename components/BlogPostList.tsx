"use client";

import Link from "next/link";
import { useState } from "react";

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

const PER_PAGE = 10;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPostList({
  posts,
  pillars,
}: {
  posts: Post[];
  pillars: Pillar[];
}) {
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const filtered =
    activePillar === null
      ? posts
      : posts.filter((p) => p.pillar?.slug?.current === activePillar);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  function selectPillar(slug: string | null) {
    setActivePillar(slug);
    setPage(0);
  }

  return (
    <div>
      {/* ── Filter tabs ─────────────────────────────────────────────────────── */}
      <div className="flex gap-1 flex-wrap border-b border-gray-200 mb-8">
        <button
          onClick={() => selectPillar(null)}
          className={`px-3 py-2 text-sm transition-colors border-b-2 -mb-px ${
            activePillar === null
              ? "border-green-primary text-green-primary font-medium"
              : "border-transparent text-secondary hover:text-green-primary"
          }`}
        >
          All
        </button>
        {pillars.map((pillar) => (
          <button
            key={pillar._id}
            onClick={() => selectPillar(pillar.slug.current)}
            className={`px-3 py-2 text-sm transition-colors border-b-2 -mb-px ${
              activePillar === pillar.slug.current
                ? "border-green-primary text-green-primary font-medium"
                : "border-transparent text-secondary hover:text-green-primary"
            }`}
          >
            {pillar.name}
          </button>
        ))}
      </div>

      {/* ── Post list ───────────────────────────────────────────────────────── */}
      {visible.length > 0 ? (
        <ul>
          {visible.map((post) => (
            <li key={post._id} className="border-b border-gray-100 last:border-b-0">
              <div className="py-5 px-3 -mx-3 rounded-xl hover:bg-gray-50 transition-colors">
                {/* Title + meta row */}
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <div className="flex items-baseline gap-2 flex-wrap min-w-0">
                    <Link
                      href={`/writing/${post.slug.current}`}
                      className="font-semibold text-primary hover:text-green-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                    {post.pillar && (
                      <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                        {post.pillar.name}
                      </span>
                    )}
                  </div>
                  <time className="text-sm text-secondary whitespace-nowrap shrink-0">
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
                {/* Excerpt */}
                {post.excerpt && (
                  <p className="mt-1 text-sm text-secondary line-clamp-1">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-secondary text-sm py-5">
          No posts in this category yet.
        </p>
      )}

      {/* ── Pagination ──────────────────────────────────────────────────────── */}
      {totalPages > 1 && (
        <div className="flex justify-between mt-8 text-sm">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            className="text-green-primary hover:text-green-light transition-colors disabled:text-secondary disabled:cursor-not-allowed"
          >
            ← Older
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= totalPages - 1}
            className="text-green-primary hover:text-green-light transition-colors disabled:text-secondary disabled:cursor-not-allowed"
          >
            Newer →
          </button>
        </div>
      )}
    </div>
  );
}
