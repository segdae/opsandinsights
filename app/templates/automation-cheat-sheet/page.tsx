import type { Metadata } from "next";
import Link from "next/link";
import FreeDownloadForm from "@/components/FreeDownloadForm";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Notion Automation Cheat Sheet (Free) — Every Trigger Explained | Ops & Insights",
  description:
    "A free cheat sheet listing every Notion automation trigger and what it can do. PDF + Notion page. Stop guessing what's possible — see it all in one view.",
  alternates: { canonical: "/templates/automation-cheat-sheet" },
  openGraph: {
    title: "Notion Automation Cheat Sheet (Free) — Every Trigger Explained",
    description:
      "Free cheat sheet: every Notion automation trigger explained with use cases. PDF + Notion page.",
    url: "/templates/automation-cheat-sheet",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Notion Automation Cheat Sheet",
  description:
    "A free cheat sheet listing every Notion automation trigger with explanations and practical use cases.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://opsandinsights.com/templates/automation-cheat-sheet",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const WHAT_YOU_GET = [
  "Complete list of every Notion automation trigger — nothing missing",
  "Plain-English explanation of what each trigger does",
  "Practical use case for each trigger so you know when to use it",
  "Available as both a Notion page and a downloadable PDF",
];

const WHO_ITS_FOR = [
  "You know Notion has automations but you're not sure what's possible",
  "You've set up one or two automations and want to see the full picture",
  "You want a quick reference to check before building a new workflow",
];

const FAQS = [
  {
    q: "Which Notion plans support automations?",
    a: "Notion automations are available on all plans, including free. Some advanced actions (like Custom Agent triggers) require Notion Business. The cheat sheet clearly marks which triggers need a paid plan.",
  },
  {
    q: "Is this a Notion template or a PDF?",
    a: "Both. You get a Notion page you can duplicate into your workspace for quick reference, plus a PDF version you can print or save to your desktop.",
  },
  {
    q: "How often is the cheat sheet updated?",
    a: "We update it whenever Notion adds new automation triggers. Download once and you'll get notified of updates via email.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Components
   ═══════════════════════════════════════════════════════════════════════════ */

function CheckIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-primary shrink-0" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** Stylised cheat sheet mockup showing automation triggers in a grid */
function CheatSheetMockup(): React.ReactElement {
  const triggers = [
    { name: "Page added", description: "Runs when a new page is created in a database", category: "Database" },
    { name: "Property changed", description: "Runs when a specific property value updates", category: "Database" },
    { name: "Status changed", description: "Runs when a status property moves to a new stage", category: "Database" },
    { name: "Date arrived", description: "Runs when a date property reaches the current date", category: "Schedule" },
    { name: "Every day/week", description: "Runs on a recurring schedule you define", category: "Schedule" },
    { name: "Button clicked", description: "Runs when a user clicks a button in a page", category: "Manual" },
  ];

  const categoryColors: Record<string, string> = {
    Database: "bg-blue-50 text-blue-600",
    Schedule: "bg-purple-50 text-purple-600",
    Manual: "bg-orange-50 text-orange-600",
  };

  return (
    <div className="relative mt-12 sm:mt-16 animate-fade-in-up delay-500">
      <div className="absolute -inset-4 bg-gradient-to-b from-green-subtle/80 via-green-subtle/40 to-transparent rounded-3xl blur-2xl animate-pulse-soft" />

      <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/60 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Automation Cheat Sheet</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            Quick Reference
          </span>
        </div>

        {/* Grid of triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 p-px">
          {triggers.map((t) => (
            <div key={t.name} className="bg-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[t.category]}`}>
                  {t.category}
                </span>
              </div>
              <p className="text-sm font-semibold text-primary">{t.name}</p>
              <p className="text-[11px] text-secondary mt-1 leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-3 bg-green-subtle/40 border-t border-gray-100 text-center">
          <span className="text-[10px] text-secondary">
            Preview — full cheat sheet includes all triggers + use cases
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function AutomationCheatSheetPage(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-subtle/50 via-white to-white pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
          <nav className="mb-10 text-sm text-secondary animate-fade-in" aria-label="Breadcrumb">
            <Link href="/templates" className="hover:text-green-primary transition-colors">
              Templates
            </Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-primary font-medium">Automation Cheat Sheet</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Free Download
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Every Notion automation.{" "}
              <span className="text-green-primary">One page.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Stop guessing what Notion automations can do. This cheat sheet
              lists every trigger, explains what it does, and shows you when
              to use it. PDF + Notion page.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300">
              <a
                href="#download"
                className="group inline-flex items-center gap-2 text-base font-semibold bg-green-primary text-white pl-8 pr-6 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20"
              >
                Download Free
                <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
              <span className="text-sm text-secondary">
                Free &middot; PDF + Notion page
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary animate-fade-in-up delay-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Available Now
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Every trigger listed
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Updated regularly
              </span>
            </div>
          </div>

          <CheatSheetMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ── WHAT YOU GET ────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            What you get
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-lg">
            The complete reference{" "}
            <span className="text-secondary/60">you&apos;ll actually use</span>
          </h2>

          <div className="mt-10 space-y-4">
            {WHAT_YOU_GET.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-lg text-primary leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHO IT'S FOR ────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            Built for
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            This is for you if&hellip;
          </h2>

          <div className="mt-8 space-y-3">
            {WHO_ITS_FOR.map((item) => (
              <p key={item} className="text-lg text-secondary leading-relaxed pl-5 border-l-2 border-green-primary/30">
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* ── DOWNLOAD ────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100" id="download">
          <div className="bg-green-subtle/60 rounded-3xl px-8 py-12 sm:px-12 sm:py-16 text-center">
            <span className="inline-block text-xs font-semibold text-green-primary uppercase tracking-widest mb-4">
              Free download
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Get the Automation Cheat Sheet
            </h2>
            <p className="mt-4 text-secondary max-w-md mx-auto">
              Enter your email and we&apos;ll send you the PDF and Notion
              template link. Keep it on your desk. Reference it every time
              you build.
            </p>

            <div className="mt-8">
              <FreeDownloadForm productName="the Notion Automation Cheat Sheet" />
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary text-center leading-tight mb-12">
            Common questions
          </h2>

          <div className="space-y-3 max-w-xl mx-auto">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-xl hover:border-green-primary/40 transition-colors">
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

        {/* ── BACK LINK ──────────────────────────────────────────────────── */}
        <div className="pb-16 pt-8 border-t border-gray-100 text-center">
          <Link
            href="/templates"
            className="text-sm text-secondary hover:text-green-primary transition-colors"
          >
            &larr; Back to all templates
          </Link>
        </div>
      </main>
    </>
  );
}
