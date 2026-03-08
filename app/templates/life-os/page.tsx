import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Agentic Life OS — Notion Template | Ops & Insights",
  description:
    "Goals, habits, finances, and health — managed by AI agents that run weekly reviews, flag overspending, and analyse your habit streaks. Notion template. $99 once.",
  alternates: { canonical: "/templates/life-os" },
  openGraph: {
    title: "Agentic Life OS — Notion Template",
    description:
      "A life management system with AI agents for weekly reviews, budget alerts, and habit analysis. $99 once. No subscription.",
    url: "/templates/life-os",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Agentic Life OS — Notion Template",
  description:
    "A Notion life management system with Custom Agents for weekly reviews, budget alerts, habit analysis, and quarterly goal tracking.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/life-os",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You set 5 goals in January. By March, you can't name 3 of them.",
    emphasis: "They're written down somewhere. You stopped checking.",
  },
  {
    text: "You track habits for 2 weeks, miss a day, and the whole streak collapses. The spreadsheet goes untouched.",
    emphasis: "Consistency died with the streak.",
  },
  {
    text: "You check your bank balance and see a number. No idea where the last $800 went.",
    emphasis: "Subscriptions, takeaways, impulse buys — invisible until month-end.",
  },
  {
    text: "Sunday night: you meant to review your week. Instead, you doom-scrolled for 45 minutes and went to bed anxious.",
    emphasis: "No review. No plan. Monday arrives unfiltered.",
  },
];

const FEATURES = [
  {
    title: "Weekly review agent",
    description:
      "Every Sunday at 9am, the Custom Agent compiles your week — goals progressed, habits hit, money spent, workouts logged — into a single review page. You read for 5 minutes and plan the next 7 days.",
    detail: "5-minute weekly reviews",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Goal tracker with quarterly reviews",
    description:
      "Set quarterly goals with measurable targets. The agent checks progress against deadlines and flags goals that are falling behind — before you miss them.",
    detail: "Never lose sight of Q-goals",
    span: "" as const,
  },
  {
    title: "Habit tracker with AI analysis",
    description:
      "Log habits daily. The agent analyses streaks, identifies your strongest and weakest days, and surfaces patterns — like how your gym consistency drops every time you travel.",
    detail: "Patterns you can't see yourself",
    span: "" as const,
  },
  {
    title: "Budget tracker with spending alerts",
    description:
      "Log income and expenses by category. The agent monitors spending against your monthly budget and flags when you're on pace to overshoot — mid-month, not after.",
    detail: "Alerts before you overspend",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Health & fitness log",
    description:
      "Track workouts, sleep, water, and energy levels. Over time, the data reveals what actually affects how you feel — not what you assume does.",
    detail: "Objective health data",
    span: "" as const,
  },
  {
    title: "Life dashboard",
    description:
      "One page. Goals, habits, budget, health — all visible at a glance. No switching between apps. No context-switching between life and planning.",
    detail: "Everything in one view",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Productivity enthusiasts",
    description:
      "You've tried Todoist, Habitica, YNAB, and Apple Health. Each works for one domain. None of them talk to each other. You spend more time managing tools than managing your life.",
    stat: "One system. Every domain. Zero app-switching.",
  },
  {
    role: "Self-improvement focused",
    description:
      "You read Atomic Habits, set up a habit tracker, and it lasted 3 weeks. The problem wasn't the book — it was the lack of a system that adapts when life gets messy.",
    stat: "AI catches the patterns your willpower misses",
  },
  {
    role: "Busy professionals",
    description:
      "Work consumes 50+ hours a week. By the time you get home, the last thing you want to do is review a spreadsheet. Your personal goals get the scraps of your attention.",
    stat: "5-minute reviews. Zero spreadsheets.",
  },
];

const BEFORE_AFTER = [
  {
    before: "5 goals set in January, 0 reviewed since",
    after: "Quarterly agent flags off-track goals before you miss them",
  },
  {
    before: "Habit streak dies after one missed day",
    after: "AI analyses patterns — shows you WHY streaks break",
  },
  {
    before: "No idea where last month's money went",
    after: "Mid-month alerts when spending exceeds budget",
  },
  {
    before: "Sunday night: no review, no plan, just anxiety",
    after: "5-minute AI-compiled review. Week planned in minutes.",
  },
];

const WHATS_INSIDE = [
  { item: "Life dashboard with all domains in one view", value: "$20" },
  { item: "Weekly review agent (Custom Agent configuration)", value: "$30" },
  { item: "Goal tracker with quarterly review automation", value: "$25" },
  { item: "Habit tracker with AI pattern analysis", value: "$25" },
  { item: "Budget tracker with mid-month spending alerts", value: "$25" },
  { item: "Health & fitness log (workouts, sleep, energy)", value: "$15" },
  { item: "Pre-built views: daily, weekly, monthly, quarterly", value: "$15" },
  { item: "Setup guide (video + written)", value: "$15" },
  { item: "Lifetime updates — every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan?",
    a: "The dashboards, trackers, and logs work on any Notion plan. The AI agents (weekly review, habit analysis, budget alerts) require Notion Business ($20/user/month) for Custom Agents. You can use the full system without agents and add them later.",
  },
  {
    q: "How is this different from separate habit/budget/goal apps?",
    a: "Separate apps create separate silos. You can't see how your spending habits affect your fitness goals or how travel disrupts your routines. The Life OS connects every domain in one workspace — and the AI agent reviews them together.",
  },
  {
    q: "How long does the weekly review take?",
    a: "The agent compiles the review automatically. You spend about 5 minutes reading it and setting intentions for next week. Compare that to the 30–45 minutes a manual review takes — or the 0 minutes most people spend because they skip it entirely.",
  },
  {
    q: "Can I customise which domains I track?",
    a: "Absolutely. Use all five domains (goals, habits, budget, health, weekly review) or start with one or two. Every database is independent — add or remove domains as your needs evolve.",
  },
  {
    q: "Does this replace YNAB / Mint for budgeting?",
    a: "It's a simpler, manual-entry budget tracker — not a bank-connected app. The advantage is context: your budget lives next to your goals and habits, and the AI agent reviews spending as part of your whole life, not in isolation.",
  },
  {
    q: "What if it doesn't work for my lifestyle?",
    a: "30-day money-back guarantee, no questions asked. If the Life OS doesn't fit how you live and work, full refund.",
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

/** Stylised life dashboard mockup */
function LifeDashboardMockup(): React.ReactElement {
  const habits = [
    { name: "Gym", streak: 12, today: true },
    { name: "Read 30min", streak: 8, today: true },
    { name: "No alcohol", streak: 5, today: false },
    { name: "Meditate", streak: 21, today: true },
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
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Life OS</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            Week 10 &middot; 2026
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 p-px">
          {/* Goals panel */}
          <div className="bg-white p-4">
            <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-2">Q1 Goals</p>
            <div className="space-y-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium text-primary">Launch side project</span>
                  <span className="text-[9px] text-green-primary font-medium">72%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-green-primary rounded-full" style={{ width: "72%" }} /></div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium text-primary">Read 12 books</span>
                  <span className="text-[9px] text-yellow-600 font-medium">25%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-yellow-400 rounded-full" style={{ width: "25%" }} /></div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium text-primary">Save $5,000</span>
                  <span className="text-[9px] text-green-primary font-medium">61%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-green-primary rounded-full" style={{ width: "61%" }} /></div>
              </div>
            </div>
          </div>

          {/* Habits panel */}
          <div className="bg-white p-4">
            <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-2">Habit Streaks</p>
            <div className="space-y-2">
              {habits.map((h) => (
                <div key={h.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[9px] ${h.today ? "bg-green-primary text-white" : "bg-gray-100 text-gray-400"}`}>
                      {h.today ? "\u2713" : ""}
                    </span>
                    <span className="text-[11px] font-medium text-primary">{h.name}</span>
                  </div>
                  <span className="text-[9px] text-secondary">{h.streak} day streak</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budget panel */}
          <div className="bg-white p-4">
            <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-2">March Budget</p>
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <div className="flex justify-between text-[9px] text-secondary mb-1">
                  <span>Spent</span>
                  <span>$1,847 / $3,000</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full"><div className="h-2 bg-green-primary rounded-full" style={{ width: "62%" }} /></div>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="text-[9px] bg-green-subtle text-green-primary px-1.5 py-0.5 rounded">On track</span>
              <span className="text-[9px] text-secondary">$1,153 remaining</span>
            </div>
          </div>

          {/* Weekly review panel */}
          <div className="bg-green-subtle/30 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-4 h-4 rounded-full bg-green-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 text-green-primary" aria-hidden="true">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-green-primary uppercase tracking-wider">Weekly Review</span>
            </div>
            <div className="bg-white rounded-lg border border-green-primary/20 p-3">
              <p className="text-[10px] font-medium text-primary mb-1">Week 9 Summary</p>
              <p className="text-[9px] text-secondary leading-relaxed">
                3/4 habits maintained. Gym streak at 12 days (personal record). Reading goal behind — only 3/12 books. Budget on track: 62% spent at 70% through the month. Recommendation: block 30 min reading time before bed...
              </p>
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

export default function LifeOSPage(): React.ReactElement {
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
            <span className="text-primary font-medium">Life OS</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming May 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Stop managing your life in 5 apps.{" "}
              <span className="text-green-primary">Run it from one.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Goals, habits, finances, and health — tracked in one Notion workspace.
              AI agents run your weekly review, flag overspending mid-month, and
              analyse which habits actually stick. Set up once. Reviewed forever.
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
                <span className="text-secondary">at launch &middot; one-time purchase</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary animate-fade-in-up delay-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Launching May 2026
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                No subscription &middot; Use forever
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                5 AI agents included
              </span>
            </div>
          </div>

          <LifeDashboardMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            You set goals. You track habits. You budget.
            <br />
            <span className="text-secondary/60">Then life gets busy and it all falls apart.</span>
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
            When everything feels like it&apos;s slipping, you don&apos;t need
            more motivation. You need a system that reviews itself — even when
            you forget to.
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
            One dashboard. Every domain.{" "}
            <span className="text-secondary/60">AI that reviews it for you.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            Goals, habits, budget, and health — connected in one workspace. AI
            agents compile your weekly review, flag overspending, and surface
            the patterns you can&apos;t see yourself.
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
            People who want to improve,{" "}
            <span className="text-secondary/60">not just plan to improve</span>
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
            5 separate apps. 5 separate subscriptions.
            <br />
            <span className="text-green-light">Or one Notion workspace for $99. Once.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "$8/mo", label: "habit tracker app" },
              { number: "$12/mo", label: "budget app" },
              { number: "$5/mo", label: "goal tracker" },
              { number: "$10/mo", label: "journal / review app" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-2xl font-bold text-white/80">{number}</span>
                <p className="mt-1 text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
              <p className="text-xs text-white/60">Combined annual cost</p>
              <p className="text-3xl font-bold text-white/80 line-through decoration-red-400">$420/yr</p>
            </div>
            <div className="text-3xl text-green-light font-bold">&rarr;</div>
            <div className="bg-green-light/10 border border-green-light/20 rounded-xl px-6 py-4">
              <p className="text-xs text-green-light">Life OS &middot; one-time</p>
              <p className="text-3xl font-bold text-green-light">$99</p>
            </div>
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            One purchase. No monthly fees. No per-seat pricing.
            The Life OS pays for itself in less than 3 months.
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
                &ldquo;I had goals in one app, habits in another, and a budget spreadsheet I never opened. Now{" "}
                <span className="text-green-primary">one AI agent reviews all four domains every Sunday at 9am</span>
                &mdash; and I actually read it.&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                I built the Life OS because I was tired of managing my life in
                fragments. Todoist for habits, YNAB for money, a journal for
                reviews — none of them connected. This is the system that
                replaced all of them. I&apos;ve used it every week for 6 months.
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
              One purchase. Your entire life system.{" "}
              <span className="text-secondary/60">Launching May.</span>
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
                <span className="text-sm font-bold text-primary">$170+</span>
              </div>
            </div>

            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Launching May 2026
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-6xl font-bold text-primary tracking-tight">$99</span>
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
            Your goals deserve more than a forgotten spreadsheet.
            <br />
            <span className="text-green-primary">Build the system that actually follows through.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching May 2026. $99 once — no subscription, no per-seat
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

      <WaitlistPopup productName="the Life OS" price={99} fullPrice={149} />
    </>
  );
}
