import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Team Ops Hub — Notion Template for Small Teams | Ops & Insights",
  description:
    "Projects, OKRs, knowledge base, and onboarding — all in one Notion workspace with AI agents that write standups, track progress, and onboard new hires. For teams of 3-10. $149 once.",
  alternates: { canonical: "/templates/team-ops-hub" },
  openGraph: {
    title: "Team Ops Hub — One Notion Workspace for Your Entire Team",
    description:
      "Replace Asana + Confluence + onboarding tools with one Notion workspace. AI agents handle standups, OKR reports, and onboarding. $149 once. No per-seat pricing.",
    url: "/templates/team-ops-hub",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Team Ops Hub — Notion Template for Small Teams",
  description:
    "A Notion workspace for small teams (3-10) combining project management, OKRs, knowledge base, and onboarding with AI Custom Agents for standups, progress reports, and action item extraction.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/team-ops-hub",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "Your team uses Asana for projects, Confluence for docs, a Google Sheet for OKRs, and Slack threads for standups.",
    emphasis: "Four tools. None of them talk to each other.",
  },
  {
    text: "New hires spend their first week asking where things are. By week three, they've bookmarked 23 links and still can't find the brand guidelines.",
    emphasis: "Onboarding is a scavenger hunt.",
  },
  {
    text: "Your Monday standup takes 35 minutes because everyone is reading their updates off scattered notes and half-remembered Slack messages.",
    emphasis: "That's 3 hours of team time burned every month.",
  },
  {
    text: "You set OKRs in January. By March, nobody can find the tracker. By Q2, you're setting new ones because the old ones are lost in a doc somewhere.",
    emphasis: "Goals without tracking are wishes.",
  },
];

const FEATURES = [
  {
    title: "Project tracker with standup agent",
    description:
      "Every project in one database — status, owner, deadline, blockers. The standup agent scans active projects daily and generates a summary: what shipped, what's blocked, what's next. Paste it into Slack in 10 seconds.",
    detail: "Standups in 10 seconds",
    span: "sm:col-span-2" as const,
  },
  {
    title: "OKR tracker with progress reports",
    description:
      "Set objectives, link key results to projects, and watch progress update automatically. The agent generates a monthly OKR report — who's on track, who needs support.",
    detail: "Auto-linked to projects",
    span: "" as const,
  },
  {
    title: "Team wiki & knowledge base",
    description:
      "Processes, brand guidelines, tool access, meeting notes — all searchable, all in one place. New hires find answers instead of asking questions.",
    detail: "One source of truth",
    span: "" as const,
  },
  {
    title: "New hire onboarding + agent",
    description:
      "A checklist that assigns tasks, shares access, and introduces the team — automatically. The onboarding agent checks progress daily and nudges incomplete items. New hires are productive in 3 days, not 3 weeks.",
    detail: "Productive in 3 days",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Meeting notes with action items",
    description:
      "Drop your meeting notes into the database. The agent extracts action items, creates tasks with owners and deadlines, and links them to the right project. Nothing falls through the cracks.",
    detail: "Notes → tasks automatically",
    span: "" as const,
  },
  {
    title: "Team dashboard",
    description:
      "One view showing active projects, OKR progress, recent decisions, and upcoming deadlines. The whole team sees the same picture — no more \"can someone send me the link?\"",
    detail: "Everything at a glance",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Startup ops leads",
    description:
      "You're running ops for a team of 5-10. You need a system that keeps everyone aligned without becoming a full-time project manager. You don't have time to configure enterprise tools.",
    stat: "Set up your team workspace in one afternoon",
  },
  {
    role: "Small team managers",
    description:
      "Your team is growing. The informal systems that worked at 3 people are breaking at 7. You need structure — but not bureaucracy. Notion gives you both.",
    stat: "Scale from 3 to 10 without new tools",
  },
  {
    role: "Agency & studio founders",
    description:
      "Client work, internal projects, knowledge management, hiring — you're juggling everything. One workspace that handles all of it means fewer context switches and fewer dropped balls.",
    stat: "Replace 4 tools with 1 workspace",
  },
];

const BEFORE_AFTER = [
  {
    before: "Asana + Confluence + Google Sheets + onboarding tool",
    after: "One Notion workspace. Everything connected.",
  },
  {
    before: "35-minute standups reading from scattered notes",
    after: "Agent-generated standup summary in 10 seconds",
  },
  {
    before: "New hires productive after 3 weeks",
    after: "Onboarding agent gets them productive in 3 days",
  },
  {
    before: "OKRs set in January, lost by March",
    after: "Auto-updated progress linked to active projects",
  },
];

const WHATS_INSIDE = [
  { item: "Project tracker with status, owners, and deadlines", value: "$30" },
  { item: "AI standup agent (daily summaries from live data)", value: "$25" },
  { item: "OKR tracker linked to project progress", value: "$20" },
  { item: "AI progress report agent (monthly OKR reports)", value: "$20" },
  { item: "Team wiki & knowledge base with templates", value: "$25" },
  { item: "New hire onboarding checklist + AI agent", value: "$30" },
  { item: "Meeting notes database + action item agent", value: "$25" },
  { item: "Team dashboard (projects, OKRs, decisions)", value: "$20" },
  { item: "Setup guide for teams (video + written)", value: "$20" },
  { item: "Lifetime updates — every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "How many team members can use this?",
    a: "Notion has no seat limits on shared workspaces. The Team Ops Hub is designed for teams of 3-10, but the structure works for larger teams too. Everyone on the workspace gets access to projects, OKRs, wiki, and dashboards.",
  },
  {
    q: "Does everyone need Notion Business plan?",
    a: "The project tracker, OKRs, wiki, and dashboard work on any Notion plan — including free. The AI agents (standup summaries, onboarding nudges, action item extraction) require Notion Business ($20/user/month). You can run the system without agents and add them later.",
  },
  {
    q: "Can I migrate my existing projects into this?",
    a: "Yes. The project tracker uses standard Notion database properties — title, status, owner, deadline. Import from CSV, copy from another database, or add projects manually. The setup guide walks through all three methods.",
  },
  {
    q: "How long does it take to set up for a team?",
    a: "Plan for one afternoon. Duplicate the template (5 minutes), customise properties and views (30 minutes), configure agents (30 minutes), invite your team (5 minutes). Most teams are fully running within 2 hours.",
  },
  {
    q: "What if my team already uses Notion?",
    a: "The Team Ops Hub is a standalone workspace you duplicate into your existing Notion account. It won't overwrite anything. You can link to existing databases or migrate content at your own pace.",
  },
  {
    q: "What if it doesn't work for my team?",
    a: "30-day money-back guarantee, no questions asked. If the Team Ops Hub doesn't fit how your team works, full refund.",
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

/** Stylised team dashboard mockup */
function TeamDashboardMockup(): React.ReactElement {
  const projects = [
    { name: "Website Redesign", status: "In Progress", progress: 65, statusColor: "bg-blue-100 text-blue-700" },
    { name: "Q2 Marketing Push", status: "On Track", progress: 40, statusColor: "bg-green-100 text-green-700" },
    { name: "API Integration", status: "Blocked", progress: 30, statusColor: "bg-red-100 text-red-700" },
  ];

  const okrs = [
    { objective: "Ship v2.0 by June", progress: 55 },
    { objective: "Grow MRR to $50k", progress: 72 },
    { objective: "Reduce churn to <3%", progress: 38 },
  ];

  return (
    <div className="relative mt-12 sm:mt-16 animate-fade-in-up delay-500">
      <div className="absolute -inset-4 bg-gradient-to-b from-green-subtle/80 via-green-subtle/40 to-transparent rounded-3xl blur-2xl animate-pulse-soft" />

      <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/60 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Team Ops Hub</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            Dashboard
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 p-px">
          {/* Projects panel */}
          <div className="bg-white p-4">
            <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-3">Active Projects</p>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.name} className="border border-gray-100 rounded-lg p-2.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[11px] font-medium text-primary">{p.name}</p>
                    <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${p.statusColor}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-green-primary rounded-full h-1.5"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <p className="text-[9px] text-secondary mt-1">{p.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>

          {/* OKRs + Standup panel */}
          <div className="bg-white flex flex-col gap-px">
            <div className="p-4">
              <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-3">OKR Progress</p>
              <div className="space-y-2.5">
                {okrs.map((okr) => (
                  <div key={okr.objective}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[10px] font-medium text-primary">{okr.objective}</p>
                      <span className="text-[10px] font-semibold text-green-primary">{okr.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="bg-green-primary rounded-full h-1.5"
                        style={{ width: `${okr.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standup summary card */}
            <div className="bg-green-subtle/40 p-4 flex-1">
              <p className="text-[11px] font-semibold text-green-primary uppercase tracking-wider mb-2">Today&apos;s Standup</p>
              <div className="space-y-1.5">
                <p className="text-[10px] text-primary"><span className="font-medium">Shipped:</span> Auth flow, onboarding email</p>
                <p className="text-[10px] text-primary"><span className="font-medium">Blocked:</span> API rate limits (waiting on vendor)</p>
                <p className="text-[10px] text-primary"><span className="font-medium">Next:</span> Dashboard v2, user interviews</p>
              </div>
              <p className="text-[9px] text-secondary mt-2">Generated by AI agent &middot; 8:55 AM</p>
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

export default function TeamOpsHubPage(): React.ReactElement {
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
            <span className="text-primary font-medium">Team Ops Hub</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming June 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Your team runs on 4 tools.{" "}
              <span className="text-green-primary">It should run on 1.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Projects, OKRs, knowledge base, onboarding — one Notion workspace
              with AI agents that write standups, track progress, and get new
              hires productive in 3 days. Built for teams of 3&ndash;10.
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
                <span className="font-bold text-primary text-2xl">$149</span>
                <span className="text-secondary">at launch &middot; one-time purchase</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary animate-fade-in-up delay-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Launching June 2026
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                No per-seat pricing &middot; Use forever
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                5 AI agents included
              </span>
            </div>
          </div>

          <TeamDashboardMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Your team has tools for everything.
            <br />
            <span className="text-secondary/60">None of them work together.</span>
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
            Small teams don&apos;t need enterprise software. They need one
            workspace where everything connects — and AI agents that handle
            the busywork nobody wants to do.
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
            One workspace. Five AI agents.{" "}
            <span className="text-secondary/60">Zero busywork.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            Projects, OKRs, docs, onboarding, and meetings — all connected.
            AI agents handle standups, progress reports, action items, and
            onboarding nudges so your team focuses on the work.
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
            Teams that ship fast,{" "}
            <span className="text-secondary/60">not teams that manage tools</span>
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
            Your current stack costs $2,360/year.
            <br />
            <span className="text-green-light">The Team Ops Hub costs $149 once.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "$1,800", label: "Asana ($30/user/mo x 5)" },
              { number: "$360", label: "Confluence ($6/user/mo x 5)" },
              { number: "$200", label: "Onboarding tool / year" },
              { number: "$2,360", label: "Total per year" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-2xl sm:text-3xl font-bold text-red-400">{number}</span>
                <p className="mt-1 text-[10px] sm:text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-light/10 border border-green-light/20 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-sm text-green-light font-medium mb-2">Replace all three with</p>
            <span className="text-5xl sm:text-6xl font-bold text-green-light">$149</span>
            <p className="mt-2 text-sm text-white/60">One-time purchase. No per-seat pricing. Use it forever.</p>
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            That&apos;s 94% less than one year of the tools you&apos;re using
            now. And unlike SaaS, you never pay again.
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
                &ldquo;I ran a team of 6 across three time zones.{" "}
                <span className="text-green-primary">We replaced Asana, Confluence, and a shared Google Sheet with one Notion workspace.</span>&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                Our standups went from 35 minutes to a 10-second paste. New hires
                stopped asking &ldquo;where do I find...&rdquo; by day two. OKRs
                updated themselves because they were linked to project status. The
                Team Ops Hub is the workspace I built for my team — packaged so
                yours can use it from day one.
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
              One purchase. Your entire team operating system.{" "}
              <span className="text-secondary/60">Launching June.</span>
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
                <span className="text-sm font-bold text-primary">$215+</span>
              </div>
            </div>

            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Launching June 2026
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-6xl font-bold text-primary tracking-tight">$149</span>
              </div>
              <p className="mt-3 text-sm text-secondary">
                One-time purchase &middot; No per-seat pricing &middot; Lifetime updates
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
            Your team deserves one workspace.
            <br />
            <span className="text-green-primary">Not four tools held together with Slack threads.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching June 2026. $149 once — projects, OKRs, wiki, onboarding,
            and 5 AI agents. No per-seat pricing. Join the waitlist and
            we&apos;ll email you on launch day.
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

      <WaitlistPopup productName="the Team Ops Hub" price={149} fullPrice={199} />
    </>
  );
}
