import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title:
    "Complete Solo Operator Bundle — Every System You Need | Ops & Insights",
  description:
    "Get Agentic Life OS, Solopreneur OS, and AI Automation Toolkit in one bundle. $249 instead of $307 — save 19%. One-time purchase.",
  alternates: { canonical: "/templates/solo-operator-bundle" },
  openGraph: {
    title: "Complete Solo Operator Bundle — $249 (Save $58)",
    description:
      "Three premium Notion systems for solopreneurs. Life OS + Solopreneur OS + AI Automation Toolkit. $249 once instead of $307.",
    url: "/templates/solo-operator-bundle",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Complete Solo Operator Bundle — Notion Templates",
  description:
    "Three premium Notion systems: Agentic Life OS, Solopreneur Operating System, and AI Automation Toolkit. Everything a solopreneur needs to run their life and business from Notion.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "249.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/solo-operator-bundle",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const INCLUDED_PRODUCTS = [
  {
    name: "Agentic Life OS",
    price: 99,
    slug: "/templates/life-os",
    description:
      "Life management system with AI agents for weekly reviews, budget alerts, and habit analysis. Goals, habits, finances, and health — all tracked, all reviewed automatically.",
  },
  {
    name: "Solopreneur Operating System",
    price: 129,
    slug: "/templates/solopreneur-os",
    description:
      "All-in-one business management: mini CRM, content calendar, revenue tracker, and project management. Custom agents handle each domain so you focus on the work.",
  },
  {
    name: "AI Automation Toolkit",
    price: 79,
    slug: "/templates/automation-toolkit",
    description:
      "20+ pre-built Custom Agent configurations for common workflows. Meeting notes to tasks, email triage, content repurposing, weekly reports, and database cleanup — ready to deploy.",
  },
];

const PERSONAS = [
  {
    role: "Full-time solopreneurs",
    description:
      "Running a one-person business and managing your own life at the same time. You need systems for both — not two separate apps.",
    stat: "One workspace for business and life",
  },
  {
    role: "Side-hustle builders",
    description:
      "Building something on the side while holding down a day job. Every hour matters. You need automation, not more admin.",
    stat: "Save 10+ hours/week on admin",
  },
  {
    role: "Productivity power users",
    description:
      "You already live in Notion. Now you want AI agents doing the repetitive work — reviews, reports, follow-ups — while you do the thinking.",
    stat: "20+ agents ready to deploy on day one",
  },
];

const FAQS = [
  {
    q: "What exactly is included in this bundle?",
    a: "Three complete Notion systems: Agentic Life OS ($99), Solopreneur Operating System ($129), and AI Automation Toolkit ($79). Each is a standalone product — the bundle gives you all three at $249 instead of $307.",
  },
  {
    q: "Can I buy each product individually instead?",
    a: "Yes. Every product in this bundle is available separately. But the bundle saves you $58 (19% off) and gives you three systems designed to work together.",
  },
  {
    q: "Do I get updates when you improve the products?",
    a: "Yes. Lifetime updates for all three products. When we add features, fix issues, or build new agents — you get everything, free, forever.",
  },
  {
    q: "Do I need Notion Business plan for the agents?",
    a: "Custom Agents require Notion Business ($20/user/month) or Enterprise. The workspace templates work on any Notion plan, but the AI agents need Business. The Automation Toolkit includes a guide for minimising agent credit costs.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "30-day money-back guarantee, no questions asked. If any part of the bundle doesn't fit your workflow, full refund.",
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

export default function SoloOperatorBundlePage(): React.ReactElement {
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
              Solo Operator Bundle
            </span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Your life. Your business.{" "}
              <span className="text-green-primary">One system.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Three premium Notion systems — life management, business
              operations, and AI automation — bundled together. Everything a
              solopreneur needs. Nothing they don&apos;t.
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
                  $307
                </span>
                <span className="font-bold text-primary text-2xl">$249</span>
                <span className="text-green-primary font-semibold bg-green-subtle px-2.5 py-1 rounded-full text-xs">
                  Save $58
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
                3 products, 1 price
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
                One-time purchase &middot; No subscription
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
                Lifetime updates on all 3
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
            Three systems.{" "}
            <span className="text-secondary/60">Zero gaps.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            Each product works standalone — together, they cover every part of
            your solo operation.
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
            Buy separately: $307.
            <br />
            <span className="text-green-light">
              Buy the bundle: $249. Save 19%.
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
              <span className="text-white/50 text-sm line-through">$307</span>
            </div>

            <div className="flex items-center justify-between rounded-xl px-6 py-4 bg-green-primary ring-2 ring-green-light/40">
              <span className="text-white font-bold">Bundle price</span>
              <div className="text-right">
                <span className="text-white font-bold text-xl">$249</span>
                <span className="ml-3 text-green-subtle text-xs font-semibold">
                  Save $58
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md mx-auto">
            One-time purchase. Three complete systems. Lifetime updates on
            everything.
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
            Operators who run{" "}
            <span className="text-secondary/60">everything themselves</span>
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
              Three systems. One price.{" "}
              <span className="text-secondary/60">No subscription.</span>
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
                <span className="text-sm font-bold text-primary">$307</span>
              </div>
            </div>

            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Bundle price — save 19%
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl text-secondary/40 line-through font-light">
                  $307
                </span>
                <span className="text-6xl font-bold text-primary tracking-tight">
                  $249
                </span>
              </div>
              <p className="mt-3 text-sm text-secondary">
                One-time purchase &middot; 3 complete systems &middot; Lifetime
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
            Your life and business,
            <br />
            <span className="text-green-primary">running on one system</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Three Notion systems. $249 instead of $307. One-time purchase,
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
            One-time purchase &middot; 3 complete systems &middot; Lifetime
            updates
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
        productName="the Complete Solo Operator Bundle"
        price={249}
        fullPrice={307}
      />
    </>
  );
}
