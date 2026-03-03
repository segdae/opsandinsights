"use client";

import { useState } from "react";

type Project = {
  _id: string;
  title: string;
  client?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  tools?: string[];
  publishedAt: string;
  featured?: boolean;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
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

export default function ProjectList({ projects }: { projects: Project[] }) {
  // Allow multiple panels open simultaneously
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  }

  if (projects.length === 0) {
    return (
      <p className="text-secondary text-sm py-5">No projects yet.</p>
    );
  }

  return (
    <ul>
      {projects.map((project) => {
        const isOpen = openIds.has(project._id);

        return (
          <li key={project._id} className="border-b border-gray-100">
            {/* ── Collapsed header (always visible) ──────────────────────── */}
            <button
              onClick={() => toggle(project._id)}
              className="w-full py-5 flex items-start justify-between gap-4 text-left group"
              aria-expanded={isOpen}
            >
              <div className="flex-1 min-w-0">
                {/* Title + Featured pill */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-primary group-hover:text-green-primary transition-colors">
                    {project.title}
                  </span>
                  {project.featured && (
                    <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Client + tool pills */}
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  {project.client && (
                    <span className="text-sm text-secondary">
                      {project.client}
                    </span>
                  )}
                  {project.tools?.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full whitespace-nowrap"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <ChevronIcon open={isOpen} />
            </button>

            {/* ── Expanded detail ─────────────────────────────────────────── */}
            {isOpen && (
              <div className="pb-6 space-y-5 border-t border-gray-100 pt-4">
                {project.challenge && (
                  <div>
                    <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-primary leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.approach && (
                  <div>
                    <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1">
                      Approach
                    </p>
                    <p className="text-sm text-primary leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                )}

                {project.outcome && (
                  <div>
                    <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1">
                      Outcome
                    </p>
                    {/* Outcome is the money line — emphasise it */}
                    <p className="text-sm font-medium text-green-primary leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
