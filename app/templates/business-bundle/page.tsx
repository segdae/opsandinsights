import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title:
    "Business-in-a-Box Bundle — CRM, Team Ops, Content & Automation | Ops & Insights",
  description:
    "Agentic CRM, Team Ops Hub, Content Calendar, and AI Automation Toolkit in one bundle. $349 instead of $406 — save 14%. One-time purchase.",
  alternates: { canonical: "/templates/business-bundle" },
  openGraph: {
    title: "Business-in-a-Box Bundle — $349 (Save $57)",
    description:
      "Four premium Notion systems for growing businesses. CRM + Team Ops + Content + Automation. $349 once instead of $406.",
    url: "/templates/business-bundle",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Business-in-a-Box Bundle — Notion Templates",
  description:
    "Four premium Notion systems: Agentic CRM, Team Ops Hub, AI-Powered Content Calendar, and AI Automation Toolkit. Everything a small team needs to run their business from Notion.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "349.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/business-bundle",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const INCLUDED_PRODUCTS = [
  {
    name: "Agentic CRM",
    price: 149,
    slug: "/templates/agentic-crm",
    description:
      "Full sales pipeline with AI agents for lead scoring, automated follow-ups, email drafting, and deal stage progression. MCP integration with Slack, email, and calendar.",
  },
  {
    name: "Team Ops Hub",
    price: 149,
    slug: "/templates/team-ops-hub",
    description:
      "Project management, OKRs, knowledge base, and onboarding for teams of 3-10. Custom agents for standups, progress reports, and action item extraction.",
  },
  {
    name: "AI-Powered Content Calendar",
    price: 29,
    slug: "/templates/content-calendar",
    description:
      "Content planning system with AI agent for drafting, scheduling, and repurposing across channels. Multi-platform scheduling and automated content workflows.",
  },
  {
    name: "AI Automation Toolkit",
    price: 79,
    slug: "/templates/automation-toolkit",
    description:
      "20+ pre-built Custom Agent configurations: meeting notes to tasks, email triage, content repurposing, weekly reports, database cleanup, and more.",
  },
];

const PERSONAS = [
  {
    role: "Small teams (3-10 people)",
    description:
      "Everyone needs visibility. Nobody wants to update a spreadsheet. This bundle gives your team a CRM, project tracker, content engine, and AI automation — in one workspace.",
    stat: "One workspace, zero manual updates",
  },
  {
    role: "Agency owners",
    description:
      "Managing clients, projects, content, and team operations across 5 different tools. Consolidate everything into Notion with AI agents handling the admin.",
    stat: "Replace 4+ SaaS subscriptions",
  },
  {
    role: "Growing businesses",
    description:
      "You&apos;ve outgrown spreadsheets but can&apos;t justify enterprise software. This is the middle ground: powerful systems at a one-time price.",
    stat: "Enterprise-grade ops, startup price",
  },
];

const FAQS = [
  {
    q: "What exactly is included in this bundle?",
    a: "Four complete Notion systems: Agentic CRM ($149), Team Ops Hub ($149), AI-Powered Content Calendar ($29), and AI Automation Toolkit ($79). Each is a standalone product — the bundle gives you all four at $349 instead of $406.",
  },
  {
    q: "Can I buy each product individually instead?",
    a: "Yes. Every product in this bundle is available separately. But the bundle saves you $57 (14% off) and gives you four systems designed to work together in one Notion workspace.",
  },
  {
    q: "How many team members can use this?",
    a: "Unlimited. Once you duplicate the workspace into your Notion account, your entire team can use it. Notion handles per-seat billing — our template is a one-time purchase regardless of team size.",
  },
  {
    q: "Do I get updates when you improve the products?",
    a: "Yes. Lifetime updates for all four products. New features, new agents, bug fixes — you get everything, free, forever.",
  },
  {
    q: "What if it doesn't work for our team?",
    a: "30-day money-back guarantee, no questions asked. If the bundle doesn't fit your team's workflow, full refund.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Components
   ═══════════════════════════════════════════════════════════════════════════ */

function CheckIcon(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 text-green-primary shrink-0"
      aria-hidden="true"
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function BusinessBundlePage(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ──────────────────────────────────────────────────────────────────
          HERO
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-subtle/50 via-white to-white pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
          <nav
            className="mb-10 text-sm text-secondary animate-fade-in"
            aria-label="Breadcrumb"
          >
            <Link
              href="/templates"
              className="hover:text-green-primary transition-colors"
            >
              Templates
            </Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-primary font-medium">
              Business-in-a-Box Bundle
            </span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              CRM. Team ops. Content. Automation.{" "}
              <span className="text-green-primary">One workspace.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Four premium Notion systems that cover sales, operations, content,
              and AI automation. Built for small teams and agencies who want
              enterprise-grade ops without enterprise pricing.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 text-base font-semibold bg-green-primary text-white pl-8 pr-6 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20"
              >
                Join the waitlist
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-secondary line-through text-lg">
                  $406
                </span>
                <span className="font-bold text-primary text-2xl">$349</span>
                <span className="text-green-primary font-semibold bg-green-subtle px-2.5 py-1 rounded-full text-xs">
                  Save $57
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary animate-fade-in-up delay-400">
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 16 16"
                  className="w-3.5 h-3.5 text-green-primary"
                  aria-hidden="true"
                >
                  <path
                    d="M13.3 4.3 6 11.6 2.7 8.3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                4 products, 1 price
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 16 16"
                  className="w-3.5 h-3.5 text-green-primary"
                  aria-hidden="true"
                >
                  <path
                    d="M13.3 4.3 6 11.6 2.7 8.3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                One-time purchase &middot; No per-seat pricing
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 16 16"
                  className="w-3.5 h-3.5 text-green-primary"
                  aria-hidden="true"
                >
                  <path
                    d="M13.3 4.3 6 11.6 2.7 8.3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                Lifetime updates on all 4
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">
        {/* ──────────────────────────────────────────────────────────────────
            WHAT'S INCLUDED
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            What&apos;s included
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-lg">
            Four departments.{" "}
            <span className="text-secondary/60">One Notion workspace.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            Sales, operations, content, and automation — each backed by AI
            agents that do the repetitive work for you.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4">
            {INCLUDED_PRODUCTS.map(({ name, price, slug, description }) => (
              <div
                key={name}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-green-primary/60 transition-all hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckIcon />
                      <h3 className="font-semibold text-primary text-lg group-hover:text-green-primary transition-colors">
                        {name}
                      </h3>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed pl-8">
                      {description}
                    </p>
                    <Link
                      href={slug}
                      className="inline-block mt-3 pl-8 text-sm text-green-primary font-medium hover:underline"
                    >
                      View product details
                    </Link>
                  </div>
                  <span className="text-sm font-semibold text-secondary shrink-0">
                    ${price} value
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ──────────────────────────────────────────────────────────────────
          THE SAVINGS — full-bleed dark section
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-green-light uppercase tracking-widest mb-3">
            The maths
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Buy separately: $406.
            <br />
            <span className="text-green-light">
              Buy the bundle: $349. Save 14%.
            </span>
          </h2>

          <div className="mt-12 space-y-3 max-w-md mx-auto">
            {INCLUDED_PRODUCTS.map(({ name, price }) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl px-6 py-4 bg-white/5 border border-white/10"
              >
                <span className="text-white/80 font-medium">{name}</span>
                <span className="text-white/60 text-sm">${price}</span>
              </div>
            ))}

            <div className="flex items-center justify-between rounded-xl px-6 py-3 border-t border-white/10">
              <span className="text-white/50 text-sm">Individual total</span>
              <span className="text-white/50 text-sm line-through">$406</span>
            </div>

            <div className="flex items-center justify-between rounded-xl px-6 py-4 bg-green-primary ring-2 ring-green-light/40">
              <span className="text-white font-bold">Bundle price</span>
              <div className="text-right">
                <span className="text-white font-bold text-xl">$349</span>
                <span className="ml-3 text-green-subtle text-xs font-semibold">
                  Save $57
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md mx-auto">
            One-time purchase. No per-seat pricing. Your next closed deal pays
            for the entire stack.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">
        {/* ──────────────────────────────────────────────────────────────────
            WHO IT'S FOR
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            Built for
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Teams that move fast,{" "}
            <span className="text-secondary/60">not teams that manage tools</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PERSONAS.map(({ role, description, stat }) => (
              <div
                key={role}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col"
              >
                <h3 className="font-semibold text-primary text-base">
                  {role}
                </h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed flex-1">
                  {description}
                </p>
                <p className="mt-4 pt-4 border-t border-gray-200 text-xs font-semibold text-green-primary">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            PRICING
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100" id="pricing">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
              The bundle
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Four systems. One price.{" "}
              <span className="text-secondary/60">No per-seat fees.</span>
            </h2>
          </div>

          <div className="border-2 border-green-primary/20 rounded-3xl overflow-hidden">
            <div className="p-6 sm:p-8 space-y-4">
              {INCLUDED_PRODUCTS.map(({ name, price }) => (
                <div
                  key={name}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-primary text-sm leading-relaxed">
                      {name}
                    </span>
                  </div>
                  <span className="text-xs text-secondary shrink-0 font-medium">
                    ${price}
                  </span>
                </div>
              ))}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-primary text-sm leading-relaxed">
                    Lifetime updates on all products
                  </span>
                </div>
                <span className="text-xs text-secondary shrink-0 font-medium">
                  Included
                </span>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">
                  Individual total
                </span>
                <span className="text-sm font-bold text-primary">$406</span>
              </div>
            </div>

            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Bundle price — save 14%
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl text-secondary/40 line-through font-light">
                  $406
                </span>
                <span className="text-6xl font-bold text-primary tracking-tight">
                  $349
                </span>
              </div>
              <p className="mt-3 text-sm text-secondary">
                One-time purchase &middot; 4 complete systems &middot; Lifetime
                updates
              </p>

              <a
                href="#waitlist"
                className="mt-8 group inline-flex items-center gap-2 text-lg font-semibold bg-green-primary text-white pl-10 pr-8 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20"
              >
                Join the waitlist
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-secondary bg-white/80 px-5 py-2.5 rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-green-primary"
                  aria-hidden="true"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                30-day money-back guarantee — no questions asked
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            FAQ
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary text-center leading-tight mb-12">
            Common questions
          </h2>

          <div className="space-y-3 max-w-xl mx-auto">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group border border-gray-200 rounded-xl hover:border-green-primary/40 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium text-primary text-sm hover:text-green-primary transition-colors select-none">
                  {q}
                  <span className="text-secondary group-open:rotate-45 transition-transform duration-200 text-xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-secondary leading-relaxed">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            FINAL CTA
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Your entire business,
            <br />
            <span className="text-green-primary">running from one workspace</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Four Notion systems. $349 instead of $406. One-time purchase,
            lifetime updates, 30-day guarantee.
          </p>

          <a
            href="#waitlist"
            className="mt-10 group inline-flex items-center gap-2 text-lg font-semibold bg-green-primary text-white pl-10 pr-8 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20"
          >
            Join the waitlist
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </a>

          <p className="mt-5 text-xs text-secondary">
            One-time purchase &middot; 4 complete systems &middot; No per-seat
            fees
          </p>

          <p className="mt-8 text-sm text-secondary">
            Questions?{" "}
            <Link
              href="/about#contact"
              className="text-green-primary hover:underline font-medium"
            >
              Get in touch
            </Link>{" "}
            &mdash; happy to walk you through the bundle.
          </p>
        </section>

        <div className="pb-16 pt-8 border-t border-gray-100 text-center">
          <Link
            href="/templates"
            className="text-sm text-secondary hover:text-green-primary transition-colors"
          >
            &larr; Back to all templates
          </Link>
        </div>
      </main>

      <WaitlistPopup
        productName="the Business-in-a-Box Bundle"
        price={349}
        fullPrice={406}
      />
    </>
  );
}
