import type { Metadata } from "next";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Services — AI Consulting & Automation | Ops & Insights",
  description:
    "AI strategy, intelligent automation, solution design, and custom Notion systems. Hands-on consulting and delivery from a Senior Consultant at EY.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — AI Consulting & Automation | Ops & Insights",
    description:
      "AI strategy, intelligent automation, solution design, and custom Notion systems. Hands-on consulting and delivery from a Senior Consultant at EY.",
    url: "/services",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Consulting & Automation Services",
  description:
    "AI strategy, intelligent automation, solution design, and custom Notion systems. Hands-on consulting and delivery.",
  url: "https://opsandinsights.com/services",
  provider: { "@type": "Organization", name: "Ops & Insights" },
};

/* ═══════════════════════════════════════════════════════════════════════════
   Service Data
   ═══════════════════════════════════════════════════════════════════════════ */

type Service = {
  title: string;
  slug: string;
  tagline: string;
  suitableFor: string[];
  badge?: string;
  bg: string;
  textColor: string;
};

const FEATURED: Service = {
  title: "AI Strategy & Consulting",
  slug: "/services/ai-strategy",
  tagline:
    "Move from AI curiosity to working solutions. I map where AI creates real leverage, cut through the hype, and give you a clear implementation path.",
  suitableFor: ["Enterprise teams", "SMEs", "Consulting firms"],
  badge: "Most Popular",
  bg: "bg-primary",
  textColor: "text-white",
};

const SERVICES: Service[] = [
  FEATURED,
  {
    title: "Intelligent Automation",
    slug: "/services/intelligent-automation",
    tagline:
      "End-to-end automation systems — from document intelligence pipelines to multi-step agentic workflows. Built to last, not just to demo.",
    suitableFor: ["Operations teams", "Finance & legal", "Professional services"],
    bg: "bg-green-primary",
    textColor: "text-white",
  },
  {
    title: "Solution Design",
    slug: "/services/solution-design",
    tagline:
      "Bespoke architecture for your AI or automation challenge. I scope the problem, design the solution, and produce a spec your team can build from.",
    suitableFor: ["CTOs & tech leads", "Project sponsors", "Innovation teams"],
    bg: "bg-gray-50",
    textColor: "text-primary",
  },
  {
    title: "Notion Systems",
    slug: "/services/notion-systems",
    tagline:
      "Custom Notion workspaces that actually get used. Project trackers, client portals, knowledge bases — built for how you work.",
    suitableFor: ["Consultants", "Agencies", "Founders"],
    bg: "bg-gray-100",
    textColor: "text-primary",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Strategy Mockup (featured card visual)
   ═══════════════════════════════════════════════════════════════════════════ */

function StrategyMockup(): JSX.Element {
  return (
    <div className="flex items-center gap-4 px-4 py-6">
      {["Discover", "Map", "Deploy"].map((phase, i) => (
        <div key={phase} className="flex flex-1 items-center gap-3">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                i === 2 ? "bg-green-light/30" : "bg-white/10"
              }`}
            >
              <span className="text-xs font-bold text-white/60">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/30">
              {phase}
            </p>
            <div className="mt-1 h-0.5 w-8 rounded-full bg-white/10" />
          </div>
          {i < 2 && (
            <div className="h-px flex-1 bg-white/10" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ServicesPage(): JSX.Element {
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
          Services
        </span>

        <h1 className="mt-4 font-serif text-4xl font-bold text-primary tracking-tight sm:text-5xl">
          AI consulting and automation that ships.
        </h1>

        <p className="mt-4 max-w-xl text-lg text-secondary leading-relaxed">
          Hands-on consulting and delivery for teams serious about AI and
          automation. Not slides and frameworks &mdash; working systems that
          create measurable value.
        </p>

        <p className="mt-2 text-sm text-secondary">
          Shea Campbell &middot;{" "}
          <span className="font-medium text-primary">
            Senior Consultant at EY
          </span>{" "}
          &middot; AI &amp; Intelligent Automation
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/about#contact"
            className="text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
          >
            Get in touch &rarr;
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium border border-gray-300 text-primary px-5 py-2.5 rounded-full hover:border-green-primary hover:text-green-primary transition-colors"
          >
            See all services &darr;
          </Link>
        </div>
      </section>

      {/* ── Featured — AI Strategy & Consulting ────────────────────────── */}
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
                {FEATURED.title}
              </h2>
              <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-sm">
                {FEATURED.tagline}
              </p>
              <div className="mt-5">
                <span className="text-sm font-medium bg-white text-primary px-5 py-2.5 rounded-full group-hover:bg-green-light group-hover:text-white transition-colors">
                  Explore AI Strategy &rarr;
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
                    Strategy
                  </span>
                </div>
                <StrategyMockup />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── How I work ─────────────────────────────────────────────────── */}
      <section className="mt-16 rounded-2xl bg-gray-50 px-8 py-10 sm:px-12">
        <h2 className="font-serif text-2xl font-bold text-primary">
          How I work
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {[
            {
              num: "01",
              title: "Understand",
              desc: "I learn your business, your constraints, and where the real problems live. No assumptions.",
            },
            {
              num: "02",
              title: "Design",
              desc: "I architect the solution \u2014 tools, logic, integrations \u2014 and explain every decision.",
            },
            {
              num: "03",
              title: "Deliver",
              desc: "I build it, test it with real data, train your team, and hand it over. You own everything.",
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

      {/* ── All Services Grid ──────────────────────────────────────────── */}
      <section className="mt-20" id="services">
        <h2 className="font-serif text-2xl font-bold text-primary">
          Services
        </h2>
        <p className="mt-1 text-sm text-secondary">
          Hands-on consulting and delivery &mdash; tailored to your situation.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => {
            const isDark =
              s.bg === "bg-primary" || s.bg === "bg-green-primary";

            return (
              <Link
                key={s.slug}
                href={s.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 hover:border-green-primary transition-colors"
              >
                {/* Visual block */}
                <div
                  className={`${s.bg} relative flex aspect-[3/2] items-end p-5`}
                >
                  {s.badge && (
                    <span
                      className={`absolute right-4 top-4 text-xs px-2 py-0.5 rounded-full ${
                        isDark
                          ? "bg-white/15 text-white"
                          : "bg-green-subtle text-green-primary"
                      }`}
                    >
                      {s.badge}
                    </span>
                  )}
                  <p
                    className={`font-serif text-xl font-bold tracking-tight ${s.textColor}`}
                  >
                    {s.title}
                  </p>
                </div>
                {/* Info */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm text-secondary leading-relaxed flex-1">
                    {s.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {s.suitableFor.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-secondary px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
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

      {/* ── What Clients Get ───────────────────────────────────────────── */}
      <section className="mt-16 rounded-2xl bg-gray-50 px-8 py-10">
        <h2 className="font-serif text-2xl font-bold text-primary">
          What every engagement includes
        </h2>

        <div className="mt-8 grid grid-cols-3 gap-6">
          {[
            { stat: "4\u201312 weeks", label: "Typical engagement" },
            { stat: "Full ownership", label: "You own everything I build" },
            {
              stat: "No lock-in",
              label: "Documentation and training included",
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">
                {item.stat}
              </p>
              <p className="mt-1 text-xs text-secondary">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="mt-20">
        <h2 className="font-serif text-2xl font-bold text-primary">
          Questions
        </h2>

        <div className="mt-8 divide-y divide-gray-100">
          {[
            {
              q: "How do I know which service I need?",
              a: "Start with a conversation. Most clients come with a problem, not a service request. I\u2019ll recommend the right approach after understanding your situation.",
            },
            {
              q: "What does an engagement look like?",
              a: "Typically 4\u201312 weeks depending on scope. You get regular updates, working deliverables \u2014 not a final reveal after months of silence.",
            },
            {
              q: "Do you work with teams or individuals?",
              a: "Both. Enterprise teams, SMEs, consultants, and founders. The approach scales to fit.",
            },
            {
              q: "What if I need multiple services?",
              a: "Common. Many engagements start with strategy and move into build. We scope it as one project with clear phases.",
            },
            {
              q: "Where are you based?",
              a: "London, but I work with clients globally. Most engagements are remote with occasional on-site days.",
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

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="mt-20 rounded-2xl bg-gray-50 px-8 py-10 text-center">
        <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">
          Let&apos;s talk about what you&apos;re building.
        </h2>
        <p className="mt-3 text-secondary max-w-lg mx-auto">
          One conversation is usually enough to know if I can help. No sales
          pitch, no pressure.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/about#contact"
            className="text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
          >
            Get in touch &rarr;
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium border border-gray-300 text-primary px-5 py-2.5 rounded-full hover:border-green-primary hover:text-green-primary transition-colors"
          >
            View my work &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
