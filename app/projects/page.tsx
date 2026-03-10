import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { getAllProjects } from "@/sanity/lib/queries";
import ProjectList from "@/components/ProjectList";

export const metadata: Metadata = {
  title: "Projects — Ops & Insights",
  description:
    "Selected AI, automation, and data engineering work — from intelligent document processing to enterprise AI strategy. Delivered at scale.",
  alternates: { canonical: "/projects" },
};

/* ═══════════════════════════════════════════════════════════════════════════
   Categories
   ═══════════════════════════════════════════════════════════════════════════ */

const CATEGORIES = [
  { slug: "ai-engineering", name: "AI Engineering" },
  { slug: "intelligent-automation", name: "Intelligent Automation" },
  { slug: "data-analytics", name: "Data & Analytics" },
  { slug: "strategy", name: "Strategy & Transformation" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════════════════ */

type SanityProject = {
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
  publishedAt: string;
  featured: boolean;
};

/* ═══════════════════════════════════════════════════════════════════════════
   Stats
   ═══════════════════════════════════════════════════════════════════════════ */

const STATS = [
  { value: "10+", label: "Projects delivered" },
  { value: "£2M+", label: "Client value generated" },
  { value: "6", label: "Industries" },
  { value: "50K+", label: "Users impacted" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function ProjectsPage(): Promise<JSX.Element> {
  const projects = await sanityFetch<SanityProject[]>({
    query: getAllProjects,
  });

  const featuredProject = projects.find((p) => p.featured);

  return (
    <main className="mx-auto max-w-4xl px-6 pb-16 pt-16">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section>
        <h1 className="font-serif text-4xl font-bold text-primary tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-3 text-lg text-secondary leading-relaxed max-w-2xl">
          Selected work from AI, automation, and data engineering engagements.
          Details anonymised where required.
        </p>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="mt-10 rounded-2xl bg-gray-50 px-8 py-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured highlight ────────────────────────────────────────────── */}
      {featuredProject && (
        <section className="mt-12">
          <div className="rounded-2xl bg-primary p-8 sm:p-10">
            <span className="inline-block text-xs bg-green-light/20 text-green-light px-2 py-0.5 rounded-full">
              Featured
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-white tracking-tight sm:text-3xl">
              {featuredProject.title}
            </h2>
            <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-xl">
              {featuredProject.summary}
            </p>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              {featuredProject.tools?.map((tool) => (
                <span
                  key={tool}
                  className="text-xs bg-white/10 text-white/60 px-2.5 py-0.5 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-green-light">
              {featuredProject.outcome}
            </p>
          </div>
        </section>
      )}

      {/* ── All projects with filters ─────────────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-primary mb-6">
          All projects
        </h2>
        <ProjectList projects={projects} categories={CATEGORIES} />
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="mt-16 rounded-2xl bg-gray-50 px-8 py-10 text-center">
        <h2 className="font-serif text-2xl font-bold text-primary">
          Got a project in mind?
        </h2>
        <p className="mt-2 text-secondary max-w-lg mx-auto">
          I help organisations build AI and automation solutions that actually
          work. If you have a challenge that fits, let&apos;s talk.
        </p>
        <div className="mt-6">
          <a
            href="https://linkedin.com/in/sheacampbell"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
