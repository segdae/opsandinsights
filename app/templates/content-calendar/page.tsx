import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "AI-Powered Content Calendar — Notion Template | Ops & Insights",
  description:
    "Plan, draft, and publish content across every channel — with an AI agent that writes first drafts for you. Notion template for content creators and marketers. $29 once.",
  alternates: { canonical: "/templates/content-calendar" },
  openGraph: {
    title: "AI-Powered Content Calendar — Notion Template",
    description:
      "An AI agent drafts your content, a calendar schedules it, and a repurposing engine multiplies it. $29 once. No subscription.",
    url: "/templates/content-calendar",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AI-Powered Content Calendar — Notion Template",
  description:
    "A Notion content planning system with an AI Custom Agent for drafting, multi-platform scheduling, and repurposing workflows.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/content-calendar",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You have 14 post ideas scattered across Notes, Slack, and your head.",
    emphasis: "None of them are published.",
  },
  {
    text: "You sit down to write and spend 45 minutes staring at a blank page.",
    emphasis: "Then you give up and do client work instead.",
  },
  {
    text: "You posted on LinkedIn three weeks ago. Twitter? You can't remember.",
    emphasis: "Your audience forgot you exist.",
  },
  {
    text: "You know repurposing is the move. A blog post becomes a thread becomes a newsletter.",
    emphasis: "But who has time to do that manually?",
  },
];

const FEATURES = [
  {
    title: "AI drafting agent",
    description:
      "Feed it a topic or brief. The Custom Agent writes a first draft — blog post, LinkedIn update, tweet thread, newsletter — in your voice. You edit, not create from scratch.",
    detail: "First drafts in under 2 minutes",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Multi-platform calendar",
    description:
      "One calendar view across blog, LinkedIn, Twitter/X, newsletter, and YouTube. See gaps before they become silence.",
    detail: "5 channels, 1 view",
    span: "" as const,
  },
  {
    title: "Repurposing workflows",
    description:
      "Turn one blog post into 5 pieces of content. The template maps the transformation: blog → thread → LinkedIn → newsletter → short-form video script.",
    detail: "1 post → 5 pieces",
    span: "" as const,
  },
  {
    title: "Content pipeline",
    description:
      "Every piece moves through Idea → Brief → Draft → Review → Scheduled → Published. No more wondering what stage something is at.",
    detail: "6-stage workflow",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Pillar & topic tracking",
    description:
      "Tag content by pillar and topic cluster. Instantly see which themes you're over-indexing on and where the gaps are.",
    detail: "Stay on-strategy",
    span: "" as const,
  },
  {
    title: "Analytics log",
    description:
      "Track impressions, engagement, and clicks per post. Over time, the data shows you what actually works — not what you think works.",
    detail: "Data-driven decisions",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Solopreneurs",
    description:
      "Building in public, growing an audience, selling products — but content always falls to the bottom of the list because everything else feels more urgent.",
    stat: "Publish 3x more without working 3x harder",
  },
  {
    role: "Content creators",
    description:
      "Producing across multiple platforms but struggling to stay consistent. Some weeks you post daily. Some weeks you disappear.",
    stat: "Never miss a posting day again",
  },
  {
    role: "Marketers",
    description:
      "Managing content for a brand or client but drowning in spreadsheets, shared docs, and Slack threads about what's going live when.",
    stat: "One source of truth for every channel",
  },
];

const BEFORE_AFTER = [
  {
    before: "14 ideas in Notes, 0 published",
    after: "Every idea in a pipeline, moving toward publish",
  },
  {
    before: "45 minutes staring at a blank page",
    after: "AI draft in 2 minutes. You edit for 15.",
  },
  {
    before: "Post once, forget about it",
    after: "1 post repurposed into 5 pieces across channels",
  },
  {
    before: "\"When did I last post on LinkedIn?\"",
    after: "Calendar shows every channel at a glance",
  },
];

const WHATS_INSIDE = [
  { item: "Content calendar with multi-platform scheduling", value: "$15" },
  { item: "AI drafting agent (Custom Agent configuration)", value: "$25" },
  { item: "6-stage content pipeline (Idea → Published)", value: "$10" },
  { item: "Repurposing workflow templates", value: "$15" },
  { item: "Pillar & topic cluster tracker", value: "$10" },
  { item: "Per-post analytics log", value: "$10" },
  { item: "Voice & tone instructions for the AI agent", value: "$10" },
  { item: "Setup guide (video + written)", value: "$15" },
  { item: "Lifetime updates — every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan?",
    a: "The calendar, pipeline, and tracking work on any Notion plan. The AI drafting agent requires Notion Business ($20/user/month) for Custom Agents. You can use the system without the agent and add it later when you upgrade.",
  },
  {
    q: "What platforms does the calendar cover?",
    a: "Blog, LinkedIn, Twitter/X, newsletter, and YouTube out of the box. You can add or remove channels — it's your Notion database, fully customisable.",
  },
  {
    q: "Does the AI agent write in my voice?",
    a: "Yes — the template includes a voice & tone instruction page that you fill in once. The agent uses it for every draft. The more examples you add, the closer it gets to your natural style.",
  },
  {
    q: "How is this different from a Google Sheets calendar?",
    a: "A spreadsheet stores dates. This is a system — it drafts content, tracks it through a pipeline, maps repurposing, and shows analytics. It does the work, not just organises it.",
  },
  {
    q: "Can I use this for client content?",
    a: "Absolutely. Duplicate the workspace per client, or use filtered views within one workspace. The pillar tracking keeps different brands and strategies separate.",
  },
  {
    q: "What if it doesn't work for my workflow?",
    a: "30-day money-back guarantee, no questions asked. If the content calendar doesn't fit how you work, full refund.",
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

function ArrowIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-primary shrink-0" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** Stylised content calendar mockup */
function CalendarMockup(): React.ReactElement {
  const days = [
    { day: "Mon", items: [{ title: "LinkedIn post", tag: "LinkedIn", status: "published" }] },
    { day: "Tue", items: [{ title: "Blog: AI workflows", tag: "Blog", status: "draft" }] },
    { day: "Wed", items: [{ title: "Twitter thread", tag: "Twitter", status: "scheduled" }] },
    { day: "Thu", items: [{ title: "Newsletter #12", tag: "Email", status: "draft" }] },
    { day: "Fri", items: [{ title: "LinkedIn carousel", tag: "LinkedIn", status: "idea" }] },
  ];

  const statusColors: Record<string, string> = {
    published: "bg-green-100 text-green-700",
    scheduled: "bg-blue-100 text-blue-700",
    draft: "bg-yellow-100 text-yellow-700",
    idea: "bg-gray-100 text-gray-600",
  };

  const tagColors: Record<string, string> = {
    LinkedIn: "bg-blue-50 text-blue-600",
    Blog: "bg-purple-50 text-purple-600",
    Twitter: "bg-sky-50 text-sky-600",
    Email: "bg-orange-50 text-orange-600",
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
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Content Calendar</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            Week of Mar 10
          </span>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-5 gap-px bg-gray-100 p-px">
          {days.map((d) => (
            <div key={d.day} className="bg-white p-3 min-h-[100px]">
              <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                {d.day}
              </span>
              <div className="mt-2 space-y-1.5">
                {d.items.map((item) => (
                  <div key={item.title} className="border border-gray-100 rounded-lg p-2">
                    <p className="text-[11px] font-medium text-primary leading-tight">{item.title}</p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${tagColors[item.tag]}`}>
                        {item.tag}
                      </span>
                      <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ContentCalendarPage(): React.ReactElement {
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
          <nav className="mb-10 text-sm text-secondary animate-fade-in" aria-label="Breadcrumb">
            <Link href="/templates" className="hover:text-green-primary transition-colors">
              Templates
            </Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-primary font-medium">Content Calendar</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming April 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Stop staring at blank pages.{" "}
              <span className="text-green-primary">Start publishing.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              An AI agent writes first drafts in your voice. A calendar keeps
              every channel on schedule. A repurposing engine turns one post
              into five. All inside Notion.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 text-base font-semibold bg-green-primary text-white pl-8 pr-6 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20"
              >
                Join the waitlist
                <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold text-primary text-2xl">$29</span>
                <span className="text-secondary">at launch &middot; one-time purchase</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary animate-fade-in-up delay-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Launching April 2026
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                No subscription &middot; Use forever
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                AI drafting agent included
              </span>
            </div>
          </div>

          <CalendarMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            You know you should post more.
            <br />
            <span className="text-secondary/60">You just never do.</span>
          </h2>

          <div className="mt-10 space-y-5">
            {PAIN_POINTS.map(({ text, emphasis }) => (
              <p key={text} className="text-lg text-secondary leading-relaxed pl-5 border-l-2 border-gray-200">
                {text}{" "}
                <span className="text-primary font-medium">{emphasis}</span>
              </p>
            ))}
          </div>

          <p className="mt-10 text-lg text-primary font-medium max-w-lg">
            Inconsistent publishing isn&apos;t a discipline problem — it&apos;s a
            system problem. Fix the system, and the content follows.
          </p>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            SOLUTION — Features (Bento Grid)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            The system
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-lg">
            From blank page to published —{" "}
            <span className="text-secondary/60">on autopilot</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            An AI agent handles first drafts. A pipeline moves each piece from
            idea to published. A calendar shows every channel at a glance.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`group relative border border-gray-200 rounded-2xl p-6 hover:border-green-primary/60 transition-all hover:shadow-sm ${feature.span}`}
              >
                <span className="inline-block text-[11px] font-medium text-green-primary bg-green-subtle px-2.5 py-1 rounded-full mb-4">
                  {feature.detail}
                </span>
                <h3 className="font-semibold text-primary text-lg group-hover:text-green-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            WHO IT'S FOR
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            Built for
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            People who create content,{" "}
            <span className="text-secondary/60">not manage spreadsheets</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PERSONAS.map(({ role, description, stat }) => (
              <div key={role} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
                <h3 className="font-semibold text-primary text-base">{role}</h3>
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
            TRANSFORMATION (Before → After)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary text-center leading-tight">
            Here&apos;s what changes
          </h2>

          <div className="mt-12 space-y-4 max-w-xl mx-auto">
            {BEFORE_AFTER.map(({ before, after }, i) => (
              <div key={i} className="flex items-stretch gap-3">
                <div className="flex-1 bg-gray-50 rounded-xl px-5 py-4 text-sm text-secondary leading-relaxed border border-gray-100">
                  {before}
                </div>
                <div className="flex items-center shrink-0">
                  <ArrowIcon />
                </div>
                <div className="flex-1 bg-green-subtle rounded-xl px-5 py-4 text-sm text-primary font-medium leading-relaxed border border-green-primary/10">
                  {after}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ──────────────────────────────────────────────────────────────────
          THE MATHS — full-bleed dark section
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold text-green-light uppercase tracking-widest mb-3">
            The maths
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            One blog post repurposed into 5 pieces.
            <br />
            <span className="text-green-light">That&apos;s 20 pieces of content a month from 4 posts.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "1", label: "blog post" },
              { number: "1", label: "tweet thread" },
              { number: "1", label: "LinkedIn post" },
              { number: "1", label: "newsletter" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-3xl font-bold text-green-light">{number}</span>
                <p className="mt-1 text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            Write once, publish everywhere. The repurposing workflows
            show you exactly how to transform each piece.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            SOCIAL PROOF
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <div className="relative bg-green-subtle rounded-3xl px-8 py-12 sm:px-12 sm:py-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-primary/5 rounded-bl-full" />

            <div className="relative">
              <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-6">
                Why I built this
              </p>

              <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-snug max-w-lg">
                &ldquo;I went from posting once a week to{" "}
                <span className="text-green-primary">publishing 12 pieces across 4 channels</span>
                &mdash; with less effort than before.&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                This is the exact system I use to run the Ops &amp; Insights content
                engine. Blog, LinkedIn, Twitter, newsletter — all planned, drafted,
                and scheduled from one Notion workspace. The AI agent handles the
                blank-page problem. I handle the editing.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center text-white font-bold text-sm">
                  SC
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Shea Campbell</p>
                  <p className="text-xs text-secondary">AI Automation Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            PRICING & OFFER STACK
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100" id="pricing">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
              Everything included
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
              One purchase. Your entire content engine.{" "}
              <span className="text-secondary/60">Launching April.</span>
            </h2>
          </div>

          <div className="border-2 border-green-primary/20 rounded-3xl overflow-hidden">
            <div className="p-6 sm:p-8 space-y-4">
              {WHATS_INSIDE.map(({ item, value }) => (
                <div key={item} className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-primary text-sm leading-relaxed">{item}</span>
                  </div>
                  <span className="text-xs text-secondary shrink-0 font-medium">
                    {value}
                  </span>
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">Total value</span>
                <span className="text-sm font-bold text-primary">$110+</span>
              </div>
            </div>

            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Launching April 2026
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-6xl font-bold text-primary tracking-tight">$29</span>
              </div>
              <p className="mt-3 text-sm text-secondary">
                One-time purchase &middot; Lifetime updates &middot; No subscription
              </p>

              <a
                href="#waitlist"
                className="mt-8 group inline-flex items-center gap-2 text-lg font-semibold bg-green-primary text-white pl-10 pr-8 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20"
              >
                Join the waitlist
                <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-secondary bg-white/80 px-5 py-2.5 rounded-full">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-green-primary" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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

        {/* ──────────────────────────────────────────────────────────────────
            FINAL CTA
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Your audience is waiting.
            <br />
            <span className="text-green-primary">Give them something to read.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching April 2026. $29 once — no subscription, no per-seat
            pricing. Join the waitlist and we&apos;ll email you on launch day.
          </p>

          <a
            href="#waitlist"
            className="mt-10 group inline-flex items-center gap-2 text-lg font-semibold bg-green-primary text-white pl-10 pr-8 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20"
          >
            Join the waitlist
            <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>

          <p className="mt-5 text-xs text-secondary">
            30-day money-back guarantee &middot; One-time purchase &middot; Lifetime updates
          </p>

          <p className="mt-8 text-sm text-secondary">
            Questions?{" "}
            <Link href="/about#contact" className="text-green-primary hover:underline font-medium">
              Get in touch
            </Link>
            {" "}&mdash; happy to walk you through what&apos;s coming.
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

      <WaitlistPopup productName="the Content Calendar" price={29} fullPrice={39} />
    </>
  );
}
