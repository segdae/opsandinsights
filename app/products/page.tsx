import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products & Resources — Ops & Insights",
  description:
    "Notion templates, guides, checklists, and prompt libraries for consultants, operators, and knowledge workers.",
  alternates: { canonical: "/products" },
};

// ─── Products ─────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    title: "Notion Templates",
    description:
      "Plug-and-play Notion systems with built-in AI agents for consultants, operators, and knowledge workers. Ready to use in minutes.",
    badge: "Templates",
    href: "/templates",
  },
];

// ─── Resources ────────────────────────────────────────────────────────────────

const RESOURCES = [
  {
    title: "AI Tools for Consultants",
    description:
      "A curated guide to the AI tools worth using in consulting — from research to deliverables.",
    badge: "Guide",
  },
  {
    title: "Automation Readiness Checklist",
    description:
      "10 questions to figure out if a process is ready to automate — before you spend a penny.",
    badge: "Checklist",
  },
  {
    title: "Prompt Library for Business",
    description:
      "Battle-tested prompts for client work, content creation, analysis, and admin.",
    badge: "Prompts",
  },
  {
    title: "AI Implementation Playbook",
    description:
      "A step-by-step framework for taking AI from idea to production inside an organisation.",
    badge: "Playbook",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage(): JSX.Element {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 pb-16">
      {/* Header */}
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Products &amp; Resources
      </h1>
      <p className="mt-3 text-lg text-secondary max-w-xl">
        Digital products you can use today, plus free guides and tools for AI
        and automation practitioners.
      </p>

      {/* ── Products ─────────────────────────────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-primary mb-1">
          Products
        </h2>
        <p className="text-sm text-secondary mb-8">
          Notion templates powered by AI agents. Pay once, keep forever.
        </p>

        {PRODUCTS.map((product) => (
          <Link
            key={product.title}
            href={product.href}
            className="group block border border-gray-200 rounded-2xl px-6 py-5 hover:border-green-primary transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
                {product.badge}
              </span>
              <span className="text-secondary group-hover:text-green-primary transition-colors text-lg leading-none">
                &rarr;
              </span>
            </div>
            <h3 className="font-semibold text-primary group-hover:text-green-primary transition-colors mt-1">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-secondary leading-relaxed">
              {product.description}
            </p>
          </Link>
        ))}
      </section>

      {/* Divider */}
      <hr className="my-14 border-gray-100" />

      {/* ── Resources ──────────────────────────────────────────────────── */}
      <section>
        <h2 className="font-serif text-2xl font-bold text-primary mb-1">
          Free Resources
        </h2>
        <p className="text-sm text-secondary mb-8">
          Guides, checklists, and prompt libraries — no sign-up required.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {RESOURCES.map((resource) => (
            <div
              key={resource.title}
              className="border border-gray-200 rounded-2xl px-6 py-5"
            >
              <span className="text-xs bg-gray-100 text-secondary px-2 py-0.5 rounded-full">
                {resource.badge}
              </span>
              <h3 className="font-semibold text-primary mt-3">
                {resource.title}
              </h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {resource.description}
              </p>
              <p className="mt-3 text-xs text-secondary">Coming soon</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="my-14 border-gray-100" />

      {/* ── Services callout ───────────────────────────────────────────── */}
      <section className="rounded-2xl bg-gray-50 px-8 py-10">
        <h2 className="font-serif text-2xl font-bold text-primary">
          Looking for consulting?
        </h2>
        <p className="mt-2 text-sm text-secondary leading-relaxed max-w-lg">
          AI strategy, intelligent automation, solution design, and custom
          Notion systems — hands-on consulting and delivery tailored to your
          situation.
        </p>
        <Link
          href="/services"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-lg hover:bg-green-light transition-colors"
        >
          View services &rarr;
        </Link>
      </section>
    </main>
  );
}
