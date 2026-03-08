import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Notion AI Automation Toolkit — 20+ Custom Agent Configs | Ops & Insights",
  description:
    "20+ pre-built Custom Agent configurations for Notion. Meeting notes to tasks, email triage, content repurposing, status reports, and database cleanup — all set up in minutes. $79 once.",
  alternates: { canonical: "/templates/automation-toolkit" },
  openGraph: {
    title: "Notion AI Automation Toolkit — 20+ Custom Agents",
    description:
      "Pre-built Custom Agent configurations for every common Notion workflow. Set up in minutes, not hours. $79 once. No subscription.",
    url: "/templates/automation-toolkit",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Notion AI Automation Toolkit — 20+ Custom Agent Configurations",
  description:
    "A library of 20+ pre-built Custom Agent configurations for Notion covering meeting notes, email triage, content repurposing, status reports, and database cleanup.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "79.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/automation-toolkit",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You read that Notion has Custom Agents. You opened the docs. You closed the docs 20 minutes later, more confused than before.",
    emphasis: "You still have zero agents running.",
  },
  {
    text: "You tried building one from scratch. You spent 2 hours writing instructions, testing prompts, tweaking database properties.",
    emphasis: "It half-works. You don't trust it.",
  },
  {
    text: "Your meeting notes sit in a page nobody revisits. Action items vanish. Decisions are forgotten by Friday.",
    emphasis: "The meeting happened. Nothing changed.",
  },
  {
    text: "You know automation could save your team 5+ hours a week. But nobody has time to figure out the setup.",
    emphasis: "The irony isn't lost on you.",
  },
];

const FEATURES = [
  {
    title: "Meeting notes to tasks agent",
    description:
      "Point it at your meeting notes. It extracts action items, creates tasks with owners and deadlines, and links them back to the source meeting. No more lost follow-ups.",
    detail: "Notes → tasks in 30 seconds",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Email triage agent",
    description:
      "Classifies incoming emails by urgency and topic. Flags the 3 that need a reply today, archives the noise. Your inbox stops running your day.",
    detail: "3-priority classification",
    span: "" as const,
  },
  {
    title: "Content repurposing agent",
    description:
      "Feed it a blog post. It generates a LinkedIn update, a tweet thread, and a newsletter intro — matched to your voice instructions.",
    detail: "1 post → 4 formats",
    span: "" as const,
  },
  {
    title: "Weekly status report agent",
    description:
      "Every Friday at 5pm, it scans your project databases and generates a status report: what shipped, what's blocked, what's next. Copy-paste into Slack or email.",
    detail: "Automated every Friday",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Database cleanup agent",
    description:
      "Finds stale tasks older than 30 days, duplicate entries, and missing fields. Flags them for review or archives them automatically. Your databases stay clean without manual effort.",
    detail: "Catches 40+ issues per run",
    span: "" as const,
  },
  {
    title: "Setup guide for every agent",
    description:
      "Each agent includes step-by-step instructions, the exact prompt configuration, required database properties, and a troubleshooting checklist. No guesswork.",
    detail: "12-minute average setup",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Notion power users",
    description:
      "You've built dashboards, linked databases, and written formulas. But Custom Agents are new territory — and you'd rather start with proven configs than experiment blind.",
    stat: "Skip 40+ hours of trial and error",
  },
  {
    role: "Team leads & managers",
    description:
      "Your team runs on Notion. You need meeting notes that turn into tasks, status reports that write themselves, and databases that stay organised without policing.",
    stat: "Save your team 5+ hours every week",
  },
  {
    role: "Ops & productivity nerds",
    description:
      "You automate everything you can. You've used Zapier, Make, n8n. Now Notion has native agents — and you want the full library, not one at a time.",
    stat: "20+ agents ready on day one",
  },
];

const BEFORE_AFTER = [
  {
    before: "2 hours writing agent instructions from scratch",
    after: "Copy the config, customise 3 fields, running in 12 minutes",
  },
  {
    before: "Meeting notes nobody reads again",
    after: "Action items extracted and assigned automatically",
  },
  {
    before: "Friday status reports take 45 minutes to compile",
    after: "Agent generates the report from your live data",
  },
  {
    before: "Stale tasks and duplicates cluttering every database",
    after: "Cleanup agent flags issues weekly — databases stay lean",
  },
];

const WHATS_INSIDE = [
  { item: "20+ pre-built Custom Agent configurations", value: "$60" },
  { item: "Meeting notes → tasks agent", value: "$15" },
  { item: "Email triage & classification agent", value: "$15" },
  { item: "Content repurposing agent (4 formats)", value: "$15" },
  { item: "Weekly status report agent", value: "$15" },
  { item: "Database cleanup & maintenance agent", value: "$15" },
  { item: "Step-by-step setup guide for each agent", value: "$25" },
  { item: "Prompt engineering tips for custom agents", value: "$15" },
  { item: "Troubleshooting checklist per agent", value: "$10" },
  { item: "Lifetime updates — every new agent, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need Notion Business plan for this?",
    a: "Yes. Custom Agents are a Notion Business feature ($20/user/month). The toolkit gives you the agent configurations — Notion Business gives you the runtime. Without it, you can still use the setup guides and database templates, but the agents won't run.",
  },
  {
    q: "How long does it take to set up an agent?",
    a: "Average setup time is 12 minutes per agent. Each config includes the exact prompt, required database properties, and a step-by-step walkthrough. Most people get their first agent running in under 15 minutes.",
  },
  {
    q: "Can I customise the agents for my workflow?",
    a: "Every agent is fully editable. The configurations are starting points — tested and proven — but you own them. Change the prompts, adjust the triggers, add database properties. The prompt engineering guide shows you how.",
  },
  {
    q: "What if I only need 2 or 3 agents?",
    a: "The toolkit is priced as a library. Buying 3 individual agent templates elsewhere would cost $45–$75. At $79 for 20+, you're paying less than $4 per agent — and you get every future addition free.",
  },
  {
    q: "Do the agents work with my existing Notion databases?",
    a: "Yes. Each setup guide specifies the minimum database properties needed. If your database already has them, point the agent at it. If not, the guide shows you which 2–3 properties to add. No need to rebuild anything.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "30-day money-back guarantee, no questions asked. If the toolkit doesn't save you time, full refund.",
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

/** Stylised agent library mockup — grid of agent cards */
function AgentLibraryMockup(): React.ReactElement {
  const agents = [
    { name: "Meeting Notes → Tasks", type: "Extraction", status: "Active", lastRun: "2 min ago", statusColor: "bg-green-100 text-green-700" },
    { name: "Email Triage", type: "Classification", status: "Active", lastRun: "15 min ago", statusColor: "bg-green-100 text-green-700" },
    { name: "Content Repurposer", type: "Generation", status: "Paused", lastRun: "1 day ago", statusColor: "bg-yellow-100 text-yellow-700" },
    { name: "Weekly Status Report", type: "Reporting", status: "Active", lastRun: "3 days ago", statusColor: "bg-green-100 text-green-700" },
    { name: "Database Cleanup", type: "Maintenance", status: "Active", lastRun: "6 hrs ago", statusColor: "bg-green-100 text-green-700" },
    { name: "Standup Summary", type: "Extraction", status: "Paused", lastRun: "5 days ago", statusColor: "bg-yellow-100 text-yellow-700" },
  ];

  const typeColors: Record<string, string> = {
    Extraction: "bg-purple-50 text-purple-600",
    Classification: "bg-blue-50 text-blue-600",
    Generation: "bg-orange-50 text-orange-600",
    Reporting: "bg-sky-50 text-sky-600",
    Maintenance: "bg-red-50 text-red-600",
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
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">AI Automation Toolkit</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            20+ agents
          </span>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 p-px">
          {agents.map((agent) => (
            <div key={agent.name} className="bg-white p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${typeColors[agent.type]}`}>
                  {agent.type}
                </span>
                <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${agent.statusColor}`}>
                  {agent.status}
                </span>
              </div>
              <p className="text-[12px] font-semibold text-primary leading-tight">{agent.name}</p>
              <p className="mt-1.5 text-[10px] text-secondary">Last run: {agent.lastRun}</p>
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

export default function AutomationToolkitPage(): React.ReactElement {
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
            <span className="text-primary font-medium">Automation Toolkit</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming May 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              20+ Notion agents.{" "}
              <span className="text-green-primary">Pre-built. Pre-tested. Ready to run.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Stop spending 2 hours building each Custom Agent from scratch. Get a
              library of 20+ proven configurations — meeting notes to tasks, email
              triage, status reports, database cleanup — and set each one up in
              12 minutes.
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
                <span className="font-bold text-primary text-2xl">$79</span>
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
                20+ agents included
              </span>
            </div>
          </div>

          <AgentLibraryMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Notion has Custom Agents now.
            <br />
            <span className="text-secondary/60">You still haven&apos;t set one up.</span>
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
            The problem isn&apos;t the technology — it&apos;s the blank prompt box.
            Give people a starting point, and they&apos;ll run with it.
          </p>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            SOLUTION — Features (Bento Grid)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">
            The library
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-lg">
            Every agent you need —{" "}
            <span className="text-secondary/60">already built</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            Each configuration includes the prompt, the database properties, the
            trigger setup, and a step-by-step guide. Copy, customise, run.
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
            People who use Notion daily,{" "}
            <span className="text-secondary/60">not people who tinker with it</span>
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
            Building 20 agents from scratch takes 40+ hours.
            <br />
            <span className="text-green-light">This toolkit saves you 38 of them.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "20+", label: "agent configs" },
              { number: "12", label: "min avg setup" },
              { number: "40+", label: "hours saved" },
              { number: "$3.95", label: "per agent" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-3xl font-bold text-green-light">{number}</span>
                <p className="mt-1 text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            At $79 for the full library, each agent costs less than a
            coffee. Build one from scratch? That&apos;s 2 hours of your time —
            worth a lot more than $3.95.
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
                &ldquo;I spent 3 weeks building Custom Agents for my own Notion workspace.{" "}
                <span className="text-green-primary">Then I realised every team needs the same 20 agents.</span>&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                Meeting notes that create tasks. Status reports that write themselves.
                Databases that clean up overnight. I built all of these for my consulting
                work — and watched colleagues spend days rebuilding the same things from
                scratch. This toolkit is every configuration I use, packaged so you can
                set each one up in minutes instead of hours.
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
              One purchase. 20+ agents ready to deploy.{" "}
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
                <span className="text-sm font-bold text-primary">$185+</span>
              </div>
            </div>

            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Launching May 2026
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-6xl font-bold text-primary tracking-tight">$79</span>
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
            Your Notion workspace can run itself.
            <br />
            <span className="text-green-primary">Give it the agents to do it.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching May 2026. $79 once — 20+ agents, setup guides for each one,
            and every future agent added free. Join the waitlist and we&apos;ll
            email you on launch day.
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

      <WaitlistPopup productName="the AI Automation Toolkit" price={79} fullPrice={99} />
    </>
  );
}
