import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Agentic CRM — Notion CRM with AI Agents | Ops & Insights",
  description:
    "A Notion CRM that follows up with your leads while you sleep. AI agents for lead scoring, follow-up automation, and email drafting. $99 once — no subscription.",
  alternates: { canonical: "/templates/agentic-crm" },
  openGraph: {
    title: "Agentic CRM — The Notion CRM That Works While You Sleep",
    description:
      "AI agents score your leads, draft follow-ups, and move deals through your pipeline — automatically. $99 once. No subscription.",
    url: "/templates/agentic-crm",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Agentic CRM — Notion Template",
  description:
    "A full sales pipeline CRM built in Notion with AI Custom Agents for lead scoring, automated follow-ups, email drafting, and deal stage progression.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/agentic-crm",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You meant to follow up with that lead three days ago.",
    emphasis: "You didn't.",
  },
  {
    text: "Your pipeline lives in a spreadsheet you last updated...",
    emphasis: "when, exactly?",
  },
  {
    text: "You're paying $50-$200/month for a CRM that's",
    emphasis: "90% features you'll never touch.",
  },
  {
    text: "A warm lead goes cold because nobody reminded you.",
    emphasis: "That's revenue walking out the door.",
  },
];

const FEATURES = [
  {
    title: "Lead scoring agent",
    description:
      "Evaluates every new lead against your ideal client profile. You see who to call first — not who filled in a form last.",
    detail: "Runs on every new entry",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Automated follow-ups",
    description:
      "The agent checks your pipeline daily, finds deals going cold, and triggers follow-up actions before you lose them.",
    detail: "Set cadence once, runs forever",
    span: "" as const,
  },
  {
    title: "AI-drafted emails",
    description:
      "Personalised outreach based on lead profile, deal stage, and past interactions. Review, edit, send.",
    detail: "Drafts in under 3 minutes",
    span: "" as const,
  },
  {
    title: "Deal stage progression",
    description:
      "Deals move through your pipeline based on triggers you define. No dragging cards. The agent updates stages when criteria are met.",
    detail: "Fully customisable stages",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Pipeline analytics",
    description:
      "Conversion rates, deal velocity, revenue forecast, and drop-off points — generated from your Notion data.",
    detail: "No third-party BI tool",
    span: "" as const,
  },
  {
    title: "MCP integration",
    description:
      "Connects to Slack, email, and calendar through Notion's MCP ecosystem. Your CRM talks to the tools you already use.",
    detail: "Slack, email, calendar",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Solo consultants",
    description:
      "Managing 5-20 active clients with no sales team. You need every lead followed up without hiring.",
    stat: "Save 6+ hours/week on pipeline admin",
  },
  {
    role: "Freelancers",
    description:
      "Juggling client delivery and business development at the same time. Your CRM can't be another full-time job.",
    stat: "Close deals without dropping client work",
  },
  {
    role: "Small agencies",
    description:
      "2-10 person team sharing a pipeline. Everyone needs visibility, nobody wants to update a spreadsheet.",
    stat: "One pipeline, zero manual updates",
  },
];

const BEFORE_AFTER = [
  {
    before: "Leads tracked in a spreadsheet (or your head)",
    after: "Every lead scored, staged, and visible in one pipeline",
  },
  {
    before: "Follow-ups happen when you remember",
    after: "Follow-ups happen on schedule, every time",
  },
  {
    before: "Writing outreach emails from scratch, every time",
    after: "AI drafts personalised emails in under 3 minutes",
  },
  {
    before: "Paying $50-$200/month for bloated CRM software",
    after: "$99 once. Use it forever. Inside Notion.",
  },
];

const COMPETITOR_COMPARISON = [
  { name: "HubSpot", price: "$50-$800/mo", annual: "$600-$9,600/yr" },
  { name: "Pipedrive", price: "$14-$99/mo", annual: "$168-$1,188/yr" },
  { name: "Close", price: "$49-$139/mo", annual: "$588-$1,668/yr" },
  { name: "Agentic CRM", price: "$99 once", annual: "$99 total", highlight: true },
];

const WHATS_INSIDE = [
  { item: "Full CRM workspace — leads, deals, contacts, companies", value: "$60" },
  { item: "5 pre-built Custom Agent configurations", value: "$80" },
  { item: "Lead scoring agent with customisable criteria", value: "$40" },
  { item: "Follow-up automation agent", value: "$40" },
  { item: "Email drafting agent with templates", value: "$40" },
  { item: "Pipeline analytics dashboard", value: "$30" },
  { item: "MCP integration guide (Slack, email, calendar)", value: "$25" },
  { item: "Setup walkthrough (video + written)", value: "$30" },
  { item: "Agent optimisation guide (minimise credit spend)", value: "$20" },
  { item: "Lifetime updates — every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan?",
    a: "Yes. Custom Agents require Notion Business ($20/user/month) or Enterprise. The CRM workspace itself works on any plan, but the AI agents — lead scoring, follow-ups, email drafting — need Business. If you're running a real pipeline, you should be on Business anyway.",
  },
  {
    q: "Is this a template or actual software?",
    a: "It's a Notion workspace with pre-configured Custom Agents. Duplicate it into your account and it's yours. The agents run autonomously on schedules or triggers — scoring leads, drafting emails, moving deals. It's a system, not a static page layout.",
  },
  {
    q: "How much do Custom Agent credits cost after May 2026?",
    a: "Notion charges $10 per 1,000 credits (~$0.17-$0.33 per agent run). A typical CRM workflow — scoring a lead, checking for stale deals, drafting a follow-up — uses 3-5 credits. For most solopreneurs, that's $5-$15/month. The included optimisation guide helps you minimise spend.",
  },
  {
    q: "Can I customise everything?",
    a: "Pipeline stages, lead scoring criteria, follow-up cadences, email templates, dashboard views — all customisable. It's your Notion workspace. You own it completely.",
  },
  {
    q: "What if I already have leads in another CRM?",
    a: "Export as CSV and import into the Notion database. The setup guide walks you through migration from HubSpot, Pipedrive, and spreadsheets.",
  },
  {
    q: "What if it doesn't work for my workflow?",
    a: "30-day money-back guarantee, no questions asked. If the Agentic CRM doesn't fit how you work, you get a full refund.",
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

/** Stylised CRM pipeline mockup — built with divs, not a screenshot */
function PipelineMockup(): React.ReactElement {
  const stages = [
    {
      name: "New Leads",
      count: 4,
      cards: [
        { name: "Sarah Chen", company: "Meridian Co", score: 92, scoreColor: "text-green-600" },
        { name: "James Park", company: "Volta Labs", score: 74, scoreColor: "text-yellow-600" },
      ],
    },
    {
      name: "Qualified",
      count: 3,
      cards: [
        { name: "Amara Obi", company: "Nex Studio", score: 88, scoreColor: "text-green-600" },
      ],
    },
    {
      name: "Proposal",
      count: 2,
      cards: [
        { name: "Liam Torres", company: "Skyward", score: 95, scoreColor: "text-green-600" },
      ],
    },
    {
      name: "Won",
      count: 1,
      cards: [
        { name: "Priya Nair", company: "Finleap", score: 97, scoreColor: "text-green-600" },
      ],
    },
  ];

  return (
    <div className="relative mt-12 sm:mt-16 animate-fade-in-up delay-500">
      {/* Glow behind mockup */}
      <div className="absolute -inset-4 bg-gradient-to-b from-green-subtle/80 via-green-subtle/40 to-transparent rounded-3xl blur-2xl animate-pulse-soft" />

      {/* Window chrome */}
      <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/60 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Agentic CRM</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            Agent running...
          </span>
        </div>

        {/* Pipeline columns */}
        <div className="grid grid-cols-4 gap-px bg-gray-100 p-px">
          {stages.map((stage) => (
            <div key={stage.name} className="bg-white p-3">
              {/* Column header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {stage.name}
                </span>
                <span className="text-[10px] text-secondary bg-gray-100 px-1.5 py-0.5 rounded-full">
                  {stage.count}
                </span>
              </div>

              {/* Deal cards */}
              <div className="space-y-2">
                {stage.cards.map((card) => (
                  <div
                    key={card.name}
                    className="border border-gray-100 rounded-lg p-2.5 hover:border-green-primary/40 transition-colors"
                  >
                    <p className="text-xs font-medium text-primary truncate">{card.name}</p>
                    <p className="text-[10px] text-secondary truncate">{card.company}</p>
                    <div className="mt-1.5 flex items-center justify-between">
                      <span className="text-[10px] text-secondary">Score</span>
                      <span className={`text-[11px] font-bold ${card.scoreColor}`}>
                        {card.score}
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

export default function AgenticCrmPage(): React.ReactElement {
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
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-subtle/50 via-white to-white pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
          {/* Breadcrumb */}
          <nav className="mb-10 text-sm text-secondary animate-fade-in" aria-label="Breadcrumb">
            <Link href="/templates" className="hover:text-green-primary transition-colors">
              Templates
            </Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-primary font-medium">Agentic CRM</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming April 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              The Notion CRM that follows up{" "}
              <span className="text-green-primary">while you sleep</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              AI agents score your leads, draft personalised follow-ups, and move
              deals through your pipeline — automatically. Built in Notion. No
              subscription. Ever.
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
                <span className="font-bold text-primary text-2xl">$99</span>
                <span className="text-secondary">at launch &middot; founding members only</span>
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary animate-fade-in-up delay-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Launching April 2026
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                One-time purchase &middot; No subscription
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Founding members get $50 off
              </span>
            </div>
          </div>

          {/* Product mockup */}
          <PipelineMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Your pipeline is leaking.
            <br />
            <span className="text-secondary/60">You already know it.</span>
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
            Every day without a system, warm leads go cold. That&apos;s not a
            productivity problem — it&apos;s a revenue problem.
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
            A CRM that does the work — not{" "}
            <span className="text-secondary/60">just stores the data</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            Six AI agents run your pipeline on autopilot. They score, follow up,
            draft, track, and report — so you focus on closing.
          </p>

          {/* Bento grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`group relative border border-gray-200 rounded-2xl p-6 hover:border-green-primary/60 transition-all hover:shadow-sm ${feature.span}`}
              >
                {/* Detail chip */}
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
            People who close deals,{" "}
            <span className="text-secondary/60">not manage CRMs</span>
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
          COMPETITOR COMPARISON — full-bleed dark section
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold text-green-light uppercase tracking-widest mb-3">
            The maths
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Your CRM is costing you
            <br />
            <span className="text-green-light">$200/month. This one costs $99 once.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-3">
            {COMPETITOR_COMPARISON.map(({ name, price, annual, highlight }) => (
              <div
                key={name}
                className={`flex items-center justify-between rounded-xl px-6 py-4 ${
                  highlight
                    ? "bg-green-primary ring-2 ring-green-light/40"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                <span className={`font-semibold ${highlight ? "text-white" : "text-white/80"}`}>
                  {name}
                </span>
                <div className="text-right">
                  <span className={`text-sm ${highlight ? "text-white font-bold" : "text-white/60"}`}>
                    {price}
                  </span>
                  <span className={`ml-3 text-xs ${highlight ? "text-green-subtle" : "text-white/40"}`}>
                    {annual}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            One-time purchase. No per-seat pricing. No feature gates.
            <br />
            Your next closed deal pays for the entire system.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            SOCIAL PROOF
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <div className="relative bg-green-subtle rounded-3xl px-8 py-12 sm:px-12 sm:py-16 overflow-hidden">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-primary/5 rounded-bl-full" />

            <div className="relative">
              <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-6">
                Why I built this
              </p>

              <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-snug max-w-lg">
                &ldquo;I showed a client my Notion workspace. He said:{" "}
                <span className="text-green-primary">that&apos;s not a template — that&apos;s an employee.</span>&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                I manage 12 active projects, respond to every lead within 24 hours,
                and write content 3x a week. This is the system that makes it
                possible. I built it for myself — now you can have it too.
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
              One purchase. The whole system.{" "}
              <span className="text-secondary/60">Launching April.</span>
            </h2>
          </div>

          <div className="border-2 border-green-primary/20 rounded-3xl overflow-hidden">
            {/* Item list with values */}
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
                <span className="text-sm font-bold text-primary">$365+</span>
              </div>
            </div>

            {/* Price block */}
            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Launching April 2026 — founding member price
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl text-secondary/40 line-through font-light">$149</span>
                <span className="text-6xl font-bold text-primary tracking-tight">$99</span>
              </div>
              <p className="mt-3 text-sm text-secondary">
                First 50 buyers &middot; One-time purchase &middot; Lifetime updates
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

              <p className="mt-4 text-xs text-secondary">
                Join now to lock in $99. Price goes to $149 after the first 50 spots.
              </p>

              {/* Guarantee */}
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
            Stop losing leads to
            <br />
            <span className="text-green-primary">forgotten follow-ups</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching April 2026. Join the waitlist to lock in $99 founding member
            pricing before it goes to $149.
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
            First 50 founding members get $50 off &middot; One-time purchase &middot; Lifetime updates
          </p>

          <p className="mt-8 text-sm text-secondary">
            Questions?{" "}
            <Link href="/about#contact" className="text-green-primary hover:underline font-medium">
              Get in touch
            </Link>
            {" "}&mdash; happy to walk you through what&apos;s coming.
          </p>
        </section>

        {/* ── Back to templates ────────────────────────────────────────── */}
        <div className="pb-16 pt-8 border-t border-gray-100 text-center">
          <Link
            href="/templates"
            className="text-sm text-secondary hover:text-green-primary transition-colors"
          >
            &larr; Back to all templates
          </Link>
        </div>
      </main>

      {/* Waitlist email capture modal */}
      <WaitlistPopup productName="the Agentic CRM" price={99} fullPrice={149} />
    </>
  );
}
