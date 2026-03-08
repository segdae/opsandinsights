import type { Metadata } from "next";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title:
    "Notion Templates with AI Agents — Pay Once, Use Forever | Ops & Insights",
  description:
    "Notion templates powered by Custom AI Agents. CRM, content calendar, project tracker, life OS, and more. One-time purchase — no subscription. Launching April 2026.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Notion Templates with AI Agents — Pay Once, Use Forever",
    description:
      "CRM, content calendar, project tracker, life OS — all powered by Notion Custom Agents. One-time purchase. Launching April 2026.",
    url: "/templates",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Notion Templates with AI Agents",
  description:
    "A collection of Notion templates powered by Custom AI Agents for CRM, content, project management, and productivity.",
  url: "https://opsandinsights.com/templates",
  provider: { "@type": "Organization", name: "Ops & Insights" },
};

/* ═══════════════════════════════════════════════════════════════════════════
   Product Data
   ═══════════════════════════════════════════════════════════════════════════ */

type Product = {
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  tagline: string;
  badge?: string;
  bg: string;
  textColor: string;
};

type Bundle = Product & { includes: string[]; savings: number };

const FEATURED: Product = {
  name: "Agentic CRM",
  slug: "/templates/agentic-crm",
  price: 99,
  originalPrice: 149,
  tagline:
    "A Notion CRM that follows up with your leads while you sleep. AI agents for lead scoring, email drafting, and pipeline automation.",
  badge: "Flagship",
  bg: "bg-primary",
  textColor: "text-white",
};

const FREE_PRODUCTS: Product[] = [
  {
    name: "Notion + AI Starter Kit",
    slug: "/templates/ai-starter-kit",
    price: 0,
    tagline:
      "Connect Notion to Claude via MCP. Your first AI agent in 10 minutes.",
    bg: "bg-green-subtle",
    textColor: "text-green-primary",
  },
  {
    name: "Weekly Review Agent",
    slug: "/templates/weekly-review-agent",
    price: 0,
    tagline: "Automated weekly planning. Set it up once, run it every Sunday.",
    bg: "bg-gray-50",
    textColor: "text-primary",
  },
  {
    name: "Automation Cheat Sheet",
    slug: "/templates/automation-cheat-sheet",
    price: 0,
    tagline: "Every Notion automation trigger + what it can do.",
    bg: "bg-gray-100",
    textColor: "text-primary",
  },
];

const CORE_PRODUCTS: Product[] = [
  {
    name: "Content Calendar",
    slug: "/templates/content-calendar",
    price: 29,
    originalPrice: 39,
    tagline:
      "AI agent drafts. Calendar schedules. Repurposing engine multiplies.",
    badge: "Popular",
    bg: "bg-primary",
    textColor: "text-white",
  },
  {
    name: "Smart Project Tracker",
    slug: "/templates/smart-project-tracker",
    price: 29,
    originalPrice: 39,
    tagline: "AI status reports and deadline alerts. No Monday surprises.",
    bg: "bg-gray-50",
    textColor: "text-primary",
  },
  {
    name: "Second Brain",
    slug: "/templates/second-brain",
    price: 29,
    originalPrice: 39,
    tagline:
      "Capture, organise, retrieve. AI search finds it before you finish typing.",
    bg: "bg-green-subtle",
    textColor: "text-green-primary",
  },
  {
    name: "Freelancer Command Centre",
    slug: "/templates/freelancer-command-centre",
    price: 39,
    originalPrice: 49,
    tagline: "Clients, projects, invoices, time — with AI weekly summaries.",
    bg: "bg-gray-100",
    textColor: "text-primary",
  },
  {
    name: "Job Search OS",
    slug: "/templates/job-search-os",
    price: 19,
    originalPrice: 29,
    tagline:
      "Application pipeline with AI company research and follow-up reminders.",
    bg: "bg-gray-50",
    textColor: "text-primary",
  },
];

const PREMIUM_PRODUCTS: Product[] = [
  {
    name: "Agentic Life OS",
    slug: "/templates/life-os",
    price: 99,
    originalPrice: 129,
    tagline: "Goals, habits, finance, health — managed by AI agents.",
    bg: "bg-primary",
    textColor: "text-white",
  },
  {
    name: "Solopreneur OS",
    slug: "/templates/solopreneur-os",
    price: 129,
    originalPrice: 169,
    tagline: "CRM + content + finance + projects. Your entire business OS.",
    bg: "bg-green-primary",
    textColor: "text-white",
  },
  {
    name: "AI Automation Toolkit",
    slug: "/templates/automation-toolkit",
    price: 79,
    originalPrice: 99,
    tagline: "20+ pre-built Custom Agent configs for every workflow.",
    badge: "Coming May",
    bg: "bg-gray-50",
    textColor: "text-primary",
  },
  {
    name: "Team Ops Hub",
    slug: "/templates/team-ops-hub",
    price: 149,
    originalPrice: 199,
    tagline:
      "Projects, OKRs, knowledge base, onboarding — for small teams.",
    badge: "Coming June",
    bg: "bg-gray-100",
    textColor: "text-primary",
  },
];

const BUNDLES: Bundle[] = [
  {
    name: "Solo Operator",
    slug: "/templates/solo-operator-bundle",
    price: 249,
    originalPrice: 307,
    tagline: "Life OS + Solopreneur OS + AI Automation Toolkit",
    bg: "bg-gray-50",
    textColor: "text-primary",
    includes: ["Agentic Life OS", "Solopreneur OS", "AI Automation Toolkit"],
    savings: 58,
  },
  {
    name: "Business-in-a-Box",
    slug: "/templates/business-bundle",
    price: 349,
    originalPrice: 506,
    tagline: "CRM + Team Ops + Content Calendar + Automation Toolkit",
    badge: "Best Value",
    bg: "bg-green-primary",
    textColor: "text-white",
    includes: [
      "Agentic CRM",
      "Team Ops Hub",
      "Content Calendar",
      "AI Automation Toolkit",
    ],
    savings: 157,
  },
  {
    name: "Everything Bundle",
    slug: "/templates/everything-bundle",
    price: 499,
    originalPrice: 750,
    tagline: "All products + future releases for 1 year",
    bg: "bg-primary",
    textColor: "text-white",
    includes: ["All 10+ products", "Future products for 1 year"],
    savings: 251,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Mini Mockup (featured card)
   ═══════════════════════════════════════════════════════════════════════════ */

function PipelineMockup(): JSX.Element {
  return (
    <div className="flex gap-2 px-3 pt-4 pb-2">
      {["New", "Qualified", "Proposal", "Won"].map((col, i) => (
        <div key={col} className="flex-1">
          <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-wider text-white/30">
            {col}
          </p>
          {Array.from({ length: 3 - i }).map((_, j) => (
            <div key={j} className="mb-1 rounded bg-white/10 p-1">
              <div className="h-1 w-3/4 rounded-full bg-white/20" />
              <div className="mt-0.5 h-0.5 w-1/2 rounded-full bg-green-light/30" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function TemplatesPage(): JSX.Element {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-16">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section>
        <span className="inline-block text-xs font-medium uppercase tracking-widest bg-green-subtle text-green-primary px-3 py-1 rounded-full">
          Launching April 2026
        </span>

        <h1 className="mt-4 font-serif text-4xl font-bold text-primary tracking-tight sm:text-5xl">
          Notion templates that work while you don&apos;t
        </h1>

        <p className="mt-4 max-w-xl text-lg text-secondary leading-relaxed">
          16 Notion templates with built-in AI agents. Automate follow-ups,
          reports, and reminders &mdash;{" "}
          <span className="font-semibold text-primary">
            pay once, keep forever.
          </span>
        </p>

        <p className="mt-2 text-sm text-secondary">
          Built by Shea Campbell, Senior Consultant at EY.{" "}
          <span className="text-green-primary font-medium">3 free templates</span> to start.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/templates/ai-starter-kit"
            className="text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
          >
            Get the free starter kit
          </Link>
          <Link
            href="#products"
            className="text-sm font-medium border border-gray-300 text-primary px-5 py-2.5 rounded-full hover:border-green-primary hover:text-green-primary transition-colors"
          >
            See all 16 templates
          </Link>
        </div>
      </section>

      {/* ── Featured — Agentic CRM (editorial card) ──────────────────────── */}
      <section className="mt-16">
        <Link
          href={FEATURED.slug}
          className="group block overflow-hidden rounded-2xl bg-primary transition-all hover:shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — text */}
            <div className="flex flex-col justify-end p-8 sm:p-10">
              <span className="inline-block w-fit text-xs bg-green-light/20 text-green-light px-2 py-0.5 rounded-full">
                {FEATURED.badge}
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white tracking-tight sm:text-4xl">
                {FEATURED.name}
              </h2>
              <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-sm">
                {FEATURED.tagline}
              </p>
              <div className="mt-5 flex items-center gap-4">
                <span className="text-sm font-medium bg-white text-primary px-5 py-2.5 rounded-full group-hover:bg-green-light group-hover:text-white transition-colors">
                  Join the CRM waitlist &mdash; $99 at launch
                </span>
                <span className="flex items-baseline gap-1.5">
                  <span className="text-xs text-white/30 line-through">
                    ${FEATURED.originalPrice}
                  </span>
                  <span className="text-lg font-bold text-white">
                    ${FEATURED.price}
                  </span>
                </span>
              </div>
            </div>

            {/* Right — mini mockup */}
            <div className="hidden items-end justify-center pb-8 pr-8 md:flex">
              <div className="w-60 rounded-xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-1 border-b border-white/10 px-3 py-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="ml-1.5 text-[9px] text-white/25">
                    Pipeline
                  </span>
                </div>
                <PipelineMockup />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="mt-16 rounded-2xl bg-gray-50 px-8 py-10 sm:px-12">
        <h2 className="font-serif text-2xl font-bold text-primary">
          How it works
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {[
            {
              num: "01",
              title: "Duplicate",
              desc: "One click adds the template to your Notion workspace. No install, no setup wizard.",
            },
            {
              num: "02",
              title: "Customise",
              desc: "Rename fields, adjust views, add properties. It\u2019s your Notion \u2014 make it yours.",
            },
            {
              num: "03",
              title: "Automate",
              desc: "AI Custom Agents run in the background \u2014 scoring leads, drafting content, sending reminders.",
            },
          ].map((step) => (
            <div key={step.num}>
              <span className="font-mono text-2xl font-bold text-primary/10">
                {step.num}
              </span>
              <h3 className="mt-1 font-semibold text-primary">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-secondary">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Free templates ───────────────────────────────────────────────── */}
      <section className="mt-20" id="products">
        <h2 className="font-serif text-2xl font-bold text-primary">
          Start free
        </h2>
        <p className="mt-1 text-sm text-secondary">
          No credit card, no catch. For anyone exploring Notion + AI.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FREE_PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 hover:border-green-primary transition-colors"
            >
              {/* Visual block */}
              <div
                className={`${p.bg} flex aspect-[3/2] items-end p-5`}
              >
                <p
                  className={`font-serif text-lg font-bold tracking-tight ${p.textColor}`}
                >
                  {p.name}
                </p>
              </div>
              {/* Info */}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm text-secondary leading-relaxed flex-1">
                  {p.tagline}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
                    Free
                  </span>
                  <span className="text-secondary group-hover:text-green-primary transition-colors text-lg leading-none">
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Core templates ───────────────────────────────────────────────── */}
      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary">
              Core templates
            </h2>
            <p className="mt-1 text-sm text-secondary">
              Focused systems for specific workflows. For freelancers, creators, and job seekers.
            </p>
          </div>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-secondary sm:block">
            Founding pricing
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_PRODUCTS.map((p) => {
            const isDark = p.bg === "bg-primary";
            return (
              <Link
                key={p.slug}
                href={p.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 hover:border-green-primary transition-colors"
              >
                {/* Visual block */}
                <div
                  className={`${p.bg} relative flex aspect-[3/2] items-end p-5`}
                >
                  {p.badge && (
                    <span
                      className={`absolute right-4 top-4 text-xs px-2 py-0.5 rounded-full ${
                        isDark
                          ? "bg-white/15 text-white"
                          : "bg-green-subtle text-green-primary"
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                  <p
                    className={`font-serif text-xl font-bold tracking-tight ${p.textColor}`}
                  >
                    {p.name}
                  </p>
                </div>
                {/* Info */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm text-secondary leading-relaxed flex-1">
                    {p.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      {p.originalPrice && (
                        <span className="text-xs text-secondary line-through">
                          ${p.originalPrice}
                        </span>
                      )}
                      <span className="text-sm font-semibold text-primary">
                        ${p.price}
                      </span>
                    </div>
                    <span className="text-secondary group-hover:text-green-primary transition-colors text-lg leading-none">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Premium systems ──────────────────────────────────────────────── */}
      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary">
              Premium systems
            </h2>
            <p className="mt-1 text-sm text-secondary">
              Complete operating systems with multiple AI agents. For solopreneurs, consultants, and teams.
            </p>
          </div>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-secondary sm:block">
            Replace your SaaS
          </span>
        </div>

        {/* Asymmetric 2-col grid — first item spans 2 rows */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {PREMIUM_PRODUCTS.map((p, i) => {
            const isDark =
              p.bg === "bg-primary" || p.bg === "bg-green-primary";
            const isLarge = i === 0;

            return (
              <Link
                key={p.slug}
                href={p.slug}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 hover:border-green-primary transition-colors ${
                  isLarge ? "lg:row-span-2" : ""
                }`}
              >
                {/* Visual block */}
                <div
                  className={`${p.bg} relative flex flex-col justify-end p-6 ${
                    isLarge
                      ? "aspect-[3/2] lg:aspect-auto lg:flex-1"
                      : "aspect-[3/2]"
                  }`}
                >
                  {p.badge && (
                    <span
                      className={`absolute right-4 top-4 text-xs px-2 py-0.5 rounded-full ${
                        isDark
                          ? "bg-white/15 text-white"
                          : "bg-green-subtle text-green-primary"
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                  <p
                    className={`font-serif text-2xl font-bold tracking-tight ${
                      isDark ? "text-white" : p.textColor
                    } ${isLarge ? "sm:text-3xl" : ""}`}
                  >
                    {p.name}
                  </p>
                </div>
                {/* Info */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm text-secondary leading-relaxed flex-1">
                    {p.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      {p.originalPrice && (
                        <span className="text-xs text-secondary line-through">
                          ${p.originalPrice}
                        </span>
                      )}
                      <span className="text-sm font-semibold text-primary">
                        ${p.price}
                      </span>
                    </div>
                    <span className="text-secondary group-hover:text-green-primary transition-colors text-lg leading-none">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── SaaS comparison callout ──────────────────────────────────────── */}
      <section className="mt-12 rounded-2xl bg-gray-50 px-8 py-10">
        <h2 className="font-serif text-2xl font-bold text-primary">
          Why pay $200/month for a tool you don&apos;t own?
        </h2>
        <p className="mt-2 text-sm text-secondary leading-relaxed max-w-xl">
          HubSpot, Pipedrive, Asana &mdash; they charge monthly for features
          you&apos;ll never use. Our templates give you 80% of the power at a
          one-time price, inside the tool you already use.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6">
          {[
            { value: "$2,400/yr", label: "Typical SaaS CRM" },
            { value: "$99", label: "Our CRM \u2014 once" },
            { value: "$2,301", label: "You save in year one" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bundles ──────────────────────────────────────────────────────── */}
      <section className="mt-20">
        <h2 className="font-serif text-2xl font-bold text-primary">
          Save more with bundles
        </h2>
        <p className="mt-1 text-sm text-secondary">
          Get multiple systems at a discount. Up to 33% off.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {BUNDLES.map((b) => {
            const isDark =
              b.bg === "bg-primary" || b.bg === "bg-green-primary";

            return (
              <Link
                key={b.slug}
                href={b.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 hover:border-green-primary transition-colors"
              >
                {/* Visual header */}
                <div
                  className={`${b.bg} flex flex-col justify-end p-6 pb-5`}
                  style={{ minHeight: "180px" }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    {b.badge && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          isDark
                            ? "bg-white/15 text-white"
                            : "bg-green-subtle text-green-primary"
                        }`}
                      >
                        {b.badge}
                      </span>
                    )}
                    <span
                      className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                        isDark
                          ? "bg-green-light/20 text-green-light"
                          : "bg-green-subtle text-green-primary"
                      }`}
                    >
                      Save ${b.savings}
                    </span>
                  </div>
                  <p
                    className={`font-serif text-2xl font-bold tracking-tight ${
                      isDark ? "text-white" : b.textColor
                    }`}
                  >
                    {b.name}
                  </p>
                  <p
                    className={`mt-1 text-xs leading-relaxed ${
                      isDark ? "text-white/40" : "text-secondary"
                    }`}
                  >
                    {b.tagline}
                  </p>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-5">
                  <ul className="space-y-1.5 flex-1">
                    {b.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-secondary"
                      >
                        <svg
                          className="h-3 w-3 shrink-0 text-green-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      {b.originalPrice && (
                        <span className="text-xs text-secondary line-through">
                          ${b.originalPrice}
                        </span>
                      )}
                      <span className="text-lg font-bold text-primary">
                        ${b.price}
                      </span>
                    </div>
                    <span className="text-secondary group-hover:text-green-primary transition-colors text-lg leading-none">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="mt-20">
        <h2 className="font-serif text-2xl font-bold text-primary">
          Questions
        </h2>

        <div className="mt-8 divide-y divide-gray-100">
          {[
            {
              q: "What are Notion Custom Agents?",
              a: "AI-powered automations built into Notion. They read your databases, take actions, and run on schedules \u2014 like an assistant that lives inside your workspace.",
            },
            {
              q: "Do I need a Notion AI subscription?",
              a: "You need a Notion plan that includes Custom Agents. The templates themselves are a one-time purchase \u2014 no recurring fee from us.",
            },
            {
              q: "Can I customise the templates?",
              a: "Completely. You duplicate to your workspace and they\u2019re fully yours. Rename, restructure, integrate \u2014 whatever you need.",
            },
            {
              q: "When do templates launch?",
              a: "First wave launches April 2026 with founding member pricing. Join the waitlist on any product page to lock in the launch price.",
            },
            {
              q: "What\u2019s the refund policy?",
              a: "14-day money back, no questions asked. If the template doesn\u2019t work for you, you get a full refund.",
            },
          ].map((faq) => (
            <div key={faq.q} className="py-5">
              <h3 className="font-semibold text-primary">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="mt-20 rounded-2xl bg-gray-50 px-8 py-10 text-center">
        <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">
          Start with a free template. Upgrade when you&apos;re ready.
        </h2>
        <p className="mt-3 text-secondary max-w-lg mx-auto">
          16 templates with built-in AI agents. 3 are completely free.
          One-time purchase on the rest &mdash; no subscription, no recurring fees.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/templates/ai-starter-kit"
            className="text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
          >
            Get the free starter kit
          </Link>
          <Link
            href="/templates/everything-bundle"
            className="text-sm font-medium border border-gray-300 text-primary px-5 py-2.5 rounded-full hover:border-green-primary hover:text-green-primary transition-colors"
          >
            Everything Bundle &mdash; $499
          </Link>
        </div>
        <p className="mt-4 text-xs text-secondary">
          Founding member pricing ends when we leave pre-launch.
        </p>
      </section>
    </main>
  );
}
