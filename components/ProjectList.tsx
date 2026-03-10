"use client";

import { useState } from "react";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  client: string;
  summary: string;
  category: string;
  challenge: string;
  approach: string;
  outcome: string;
  tools: string[];
  featured?: boolean;
};

type Category = {
  slug: string;
  name: string;
};

function ChevronIcon({ open }: { open: boolean }): JSX.Element {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-secondary transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function ProjectList({
  projects,
  categories,
}: {
  projects: Project[];
  categories: Category[];
}): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function toggle(id: string): void {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function selectCategory(slug: string | null): void {
    setActiveCategory(slug);
    setOpenIds(new Set());
  }

  const filtered =
    activeCategory === null
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* ── Category filter tabs ──────────────────────────────────────────── */}
      <div className="flex gap-1 flex-wrap border-b border-gray-200 mb-8">
        <button
          onClick={() => selectCategory(null)}
          className={`px-3 py-2 text-sm transition-colors border-b-2 -mb-px ${
            activeCategory === null
              ? "border-green-primary text-green-primary font-medium"
              : "border-transparent text-secondary hover:text-green-primary"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => selectCategory(cat.slug)}
            className={`px-3 py-2 text-sm transition-colors border-b-2 -mb-px ${
              activeCategory === cat.slug
                ? "border-green-primary text-green-primary font-medium"
                : "border-transparent text-secondary hover:text-green-primary"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ── Project cards ─────────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="space-y-4">
          {filtered.map((project) => {
            const isOpen = openIds.has(project._id);

            return (
              <div
                key={project._id}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-green-primary bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-green-primary/40"
                }`}
              >
                {/* ── Card header (always visible) ────────────────────────── */}
                <button
                  onClick={() => toggle(project._id)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-primary group-hover:text-green-primary transition-colors text-base">
                        {project.title}
                      </span>
                      {project.featured && (
                        <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Client + summary */}
                    <p className="text-sm text-secondary mt-1">
                      {project.client}
                    </p>
                    <p className="text-sm text-secondary mt-1 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Tool pills */}
                    <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                      {project.tools?.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs bg-gray-100 text-secondary px-2 py-0.5 rounded-full whitespace-nowrap"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ChevronIcon open={isOpen} />
                </button>

                {/* ── Expanded detail ──────────────────────────────────────── */}
                {isOpen && (
                  <div className="px-6 pb-6 grid grid-cols-1 gap-5 border-t border-gray-100 pt-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1.5">
                        Challenge
                      </p>
                      <p className="text-sm text-primary leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1.5">
                        Approach
                      </p>
                      <p className="text-sm text-primary leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1.5">
                        Outcome
                      </p>
                      <p className="text-sm font-medium text-green-primary leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-secondary text-sm py-5">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
