import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "AI consulting and automation services, plus digital products for consultants and knowledge workers.",
  alternates: { canonical: "/products" },
};

// ─── Services ────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "AI Strategy & Consulting",
    description:
      "Helping organisations move from AI curiosity to working solutions. I map where AI creates real leverage, cut through the hype, and give you a clear implementation path.",
    suitableFor: ["Enterprise teams", "SMEs", "Consulting firms"],
  },
  {
    title: "Intelligent Automation",
    description:
      "End-to-end design and delivery of automation systems — from document intelligence pipelines to multi-step agentic workflows. Built to last, not just to demo.",
    suitableFor: ["Operations teams", "Finance & legal", "Professional services"],
  },
  {
    title: "Solution Design",
    description:
      "Bespoke architecture for your AI or automation challenge. I scope the problem, design the solution, and produce a spec your team can build from — or I build it.",
    suitableFor: ["CTOs & tech leads", "Project sponsors", "Internal innovation teams"],
  },
  {
    title: "Notion Systems",
    description:
      "Custom Notion workspaces that actually get used. Project trackers, client portals, knowledge bases, and operating systems built for consultants and solo operators.",
    suitableFor: ["Consultants", "Agencies", "Founders"],
  },
];

// ─── Products ─────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    title: "Notion Templates",
    description:
      "Plug-and-play Notion systems for consultants, operators, and knowledge workers. Ready to use in minutes.",
    badge: "Templates",
    href: "/templates",
    external: false,
  },
  {
    title: "Guides & Resources",
    description:
      "Practical guides, checklists, and prompt libraries covering AI tools, automation, and consulting workflows.",
    badge: "Free",
    href: "/resources",
    external: false,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      {/* Header */}
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Work with me
      </h1>
      <p className="mt-3 text-lg text-secondary">
        Services for teams serious about AI and automation, plus digital products
        you can use today.
      </p>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-primary mb-1">
          Services
        </h2>
        <p className="text-sm text-secondary mb-8">
          Hands-on consulting and delivery — tailored to your situation.
        </p>

        <div className="space-y-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-2xl px-6 py-5 hover:border-green-primary transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-primary group-hover:text-green-primary transition-colors">
                  {service.title}
                </h3>
                <span className="text-secondary group-hover:text-green-primary transition-colors shrink-0 text-lg leading-none mt-0.5">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {service.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {service.suitableFor.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-secondary px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-14 border-gray-100" />

      {/* ── Products ─────────────────────────────────────────────────────── */}
      <section>
        <h2 className="font-serif text-2xl font-bold text-primary mb-1">
          Products
        </h2>
        <p className="text-sm text-secondary mb-8">
          Digital products you can pick up and use straight away.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {PRODUCTS.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              {...(product.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group border border-gray-200 rounded-2xl px-6 py-5 hover:border-green-primary transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
                  {product.badge}
                </span>
                <span className="text-secondary group-hover:text-green-primary transition-colors text-lg leading-none">
                  →
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
        </div>
      </section>
    </main>
  );
}
