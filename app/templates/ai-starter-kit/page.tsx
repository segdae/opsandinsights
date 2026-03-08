import type { Metadata } from "next";
import Link from "next/link";
import FreeDownloadForm from "@/components/FreeDownloadForm";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Notion + AI Starter Kit (Free) — Connect Notion to Claude | Ops & Insights",
  description:
    "A free 1-page guide and Notion template showing how to connect Notion to Claude via MCP. Set up in 10 minutes. No code required.",
  alternates: { canonical: "/templates/ai-starter-kit" },
  openGraph: {
    title: "Notion + AI Starter Kit (Free) — Connect Notion to Claude",
    description:
      "Free guide and template: connect Notion to Claude via MCP in 10 minutes. No code required.",
    url: "/templates/ai-starter-kit",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Notion + AI Starter Kit",
  description:
    "A free 1-page guide and Notion template showing how to connect Notion to Claude via MCP. Set up in 10 minutes.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://opsandinsights.com/templates/ai-starter-kit",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const WHAT_YOU_GET = [
  "Step-by-step setup guide: Notion to Claude via MCP in under 10 minutes",
  "Pre-built Notion template with example pages ready for AI interaction",
  "3 starter prompts to test your connection immediately",
  "Troubleshooting checklist for common MCP setup issues",
];

const WHO_ITS_FOR = [
  "You use Notion daily but haven't connected it to AI yet",
  "You've heard of Claude and MCP but don't know where to start",
  "You want to automate tasks in Notion without writing code",
];

const FAQS = [
  {
    q: "Do I need a paid Notion plan?",
    a: "No. The starter kit works on Notion's free plan. You only need a paid plan if you want to use Notion's Custom Agents later — this guide uses Claude directly via MCP.",
  },
  {
    q: "How long does setup take?",
    a: "About 10 minutes. The guide walks you through every step with screenshots. No coding or API keys required.",
  },
  {
    q: "What can I do with Notion + Claude once it's connected?",
    a: "Ask Claude to read, summarise, and write content in your Notion pages. Draft blog posts, extract tasks from meeting notes, organise databases — all from a single chat interface.",
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

/** Stylised setup guide mockup showing Notion-Claude connection */
function StarterKitMockup(): React.ReactElement {
  const steps = [
    { step: "1", label: "Install Claude Desktop", status: "complete" },
    { step: "2", label: "Enable MCP Server", status: "complete" },
    { step: "3", label: "Connect Notion Workspace", status: "active" },
    { step: "4", label: "Test Your First Prompt", status: "pending" },
  ];

  const statusStyles: Record<string, string> = {
    complete: "bg-green-100 text-green-700 border-green-200",
    active: "bg-blue-50 text-blue-700 border-blue-200 ring-2 ring-blue-100",
    pending: "bg-gray-50 text-gray-400 border-gray-200",
  };

  const stepIcon: Record<string, string> = {
    complete: "text-green-primary",
    active: "text-blue-600",
    pending: "text-gray-300",
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
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Notion + AI Starter Kit</span>
        </div>

        <div className="p-6 sm:p-8">
          {/* Connection diagram */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white text-lg font-bold">
                N
              </div>
              <span className="text-[10px] font-medium text-secondary">Notion</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-8 h-px bg-green-primary" />
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-primary" aria-hidden="true">
                <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <div className="w-2 h-px bg-green-primary" />
              <span className="text-[9px] font-semibold text-green-primary bg-green-subtle px-2 py-0.5 rounded-full">MCP</span>
              <div className="w-2 h-px bg-green-primary" />
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-primary" aria-hidden="true">
                <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <div className="w-8 h-px bg-green-primary" />
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-lg font-bold">
                C
              </div>
              <span className="text-[10px] font-medium text-secondary">Claude</span>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {steps.map((s) => (
              <div
                key={s.step}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${statusStyles[s.status]}`}
              >
                <span className={`text-sm font-bold ${stepIcon[s.status]}`}>
                  {s.status === "complete" ? (
                    <svg viewBox="0 0 16 16" className="w-4 h-4">
                      <path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  ) : (
                    s.step
                  )}
                </span>
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function AIStarterKitPage(): React.ReactElement {
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
            <span className="text-primary font-medium">AI Starter Kit</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Free Download
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Connect Notion to Claude.{" "}
              <span className="text-green-primary">In 10 minutes.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              A step-by-step guide and ready-made Notion template that gets
              Claude reading and writing in your workspace via MCP. No code.
              No API keys. No guesswork.
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
                Free &middot; No credit card required
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary animate-fade-in-up delay-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Available Now
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                10-minute setup
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                No code required
              </span>
            </div>
          </div>

          <StarterKitMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ── WHAT YOU GET ────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            What you get
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-lg">
            Everything you need to start{" "}
            <span className="text-secondary/60">in one download</span>
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
              Get the Notion + AI Starter Kit
            </h2>
            <p className="mt-4 text-secondary max-w-md mx-auto">
              Enter your email and we&apos;ll send you the template and setup
              guide. Takes 10 minutes to set up. Zero cost.
            </p>

            <div className="mt-8">
              <FreeDownloadForm productName="the Notion + AI Starter Kit" />
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
