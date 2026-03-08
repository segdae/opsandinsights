import type { Metadata } from "next";
import Link from "next/link";
import FreeDownloadForm from "@/components/FreeDownloadForm";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Weekly Review Agent Template (Free) — Notion + AI | Ops & Insights",
  description:
    "A free Notion template with AI agent instructions for automated weekly planning. Review goals, track wins, and plan your next week — all summarised by Claude.",
  alternates: { canonical: "/templates/weekly-review-agent" },
  openGraph: {
    title: "Weekly Review Agent Template (Free) — Notion + AI",
    description:
      "Free Notion template: an AI agent that compiles your weekly review. Goals, wins, and next week's priorities — summarised automatically.",
    url: "/templates/weekly-review-agent",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Weekly Review Agent Template",
  description:
    "A free Notion template with AI agent instructions for automated weekly planning and review.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://opsandinsights.com/templates/weekly-review-agent",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const WHAT_YOU_GET = [
  "Weekly review Notion template with goals, wins, and priorities sections",
  "AI agent prompt that compiles your review from your Notion data",
  "Instructions for setting up a recurring weekly trigger",
  "Example review output so you know exactly what to expect",
  "Guide to customising the agent for your specific workflow",
];

const WHO_ITS_FOR = [
  "You skip weekly reviews because they take too long to compile manually",
  "You want to see your progress at a glance without trawling through pages",
  "You're curious about what AI agents can actually do in Notion",
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan for this?",
    a: "The template works on any Notion plan. The AI agent instructions are designed for Claude via MCP — no Notion Business plan needed. If you want to use Notion's built-in Custom Agents instead, that requires Business.",
  },
  {
    q: "How does the AI agent know what happened this week?",
    a: "The agent reads your Notion databases — tasks completed, notes written, goals updated — and compiles a summary. The template includes the exact prompt and setup instructions.",
  },
  {
    q: "Can I customise what the review covers?",
    a: "Absolutely. The template includes instructions for adding or removing sections. Track habits, finances, client work, fitness — whatever matters to your week.",
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

/** Stylised weekly review card mockup */
function WeeklyReviewMockup(): React.ReactElement {
  return (
    <div className="relative mt-12 sm:mt-16 animate-fade-in-up delay-500">
      <div className="absolute -inset-4 bg-gradient-to-b from-green-subtle/80 via-green-subtle/40 to-transparent rounded-3xl blur-2xl animate-pulse-soft" />

      <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/60 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Weekly Review — Mar 3–9</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            AI Generated
          </span>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Goals section */}
          <div>
            <h4 className="text-[11px] font-semibold text-green-primary uppercase tracking-wider mb-3">
              Goals Progress
            </h4>
            <div className="space-y-2">
              {[
                { goal: "Ship 2 template pages", progress: 100 },
                { goal: "Write weekly newsletter", progress: 100 },
                { goal: "Record 1 YouTube video", progress: 0 },
              ].map((g) => (
                <div key={g.goal} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-primary">{g.goal}</span>
                      <span className={`text-[10px] font-semibold ${g.progress === 100 ? "text-green-primary" : "text-secondary"}`}>
                        {g.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${g.progress === 100 ? "bg-green-primary" : "bg-gray-200"}`}
                        style={{ width: `${g.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wins section */}
          <div>
            <h4 className="text-[11px] font-semibold text-green-primary uppercase tracking-wider mb-3">
              Wins This Week
            </h4>
            <div className="space-y-1.5">
              {[
                "Launched AI Starter Kit — 47 downloads in 3 days",
                "Newsletter open rate hit 52% (up from 38%)",
                "Closed consulting engagement with new client",
              ].map((win) => (
                <div key={win} className="flex items-start gap-2">
                  <span className="text-green-primary text-xs mt-0.5">&#10003;</span>
                  <span className="text-xs text-primary">{win}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next week */}
          <div>
            <h4 className="text-[11px] font-semibold text-green-primary uppercase tracking-wider mb-3">
              Next Week&apos;s Priorities
            </h4>
            <div className="space-y-1.5">
              {[
                "Build Weekly Review Agent template",
                "Draft LinkedIn post series (3 posts)",
                "Client workshop prep — Thursday",
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-[10px] font-bold text-secondary bg-gray-100 w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-xs text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function WeeklyReviewAgentPage(): React.ReactElement {
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
            <span className="text-primary font-medium">Weekly Review Agent</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Free Download
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Your week, reviewed.{" "}
              <span className="text-green-primary">By AI.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              An AI agent reads your Notion workspace and compiles a weekly
              review — goals, wins, and next week&apos;s priorities — in under
              3 minutes. You review it. You don&apos;t build it.
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
                AI-powered review
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                3-minute setup
              </span>
            </div>
          </div>

          <WeeklyReviewMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ── WHAT YOU GET ────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            What you get
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-lg">
            A weekly review that writes itself{" "}
            <span className="text-secondary/60">every Sunday</span>
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
              Get the Weekly Review Agent
            </h2>
            <p className="mt-4 text-secondary max-w-md mx-auto">
              Enter your email and we&apos;ll send you the template with full
              agent instructions. Set up once, reviewed every week.
            </p>

            <div className="mt-8">
              <FreeDownloadForm productName="the Weekly Review Agent Template" />
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
