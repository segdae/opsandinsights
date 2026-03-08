import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Solopreneur Operating System — Notion Template | Ops & Insights",
  description:
    "CRM, content calendar, revenue tracker, and project management — with AI agents for each domain. One Notion workspace replaces $1,200/yr in SaaS. $129 once.",
  alternates: { canonical: "/templates/solopreneur-os" },
  openGraph: {
    title: "Solopreneur Operating System — Notion Template",
    description:
      "Run your entire one-person business from Notion. CRM, content, finance, projects — with Custom Agents that do the work. $129 once. No subscription.",
    url: "/templates/solopreneur-os",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Solopreneur Operating System — Notion Template",
  description:
    "An all-in-one Notion business management system with mini CRM, content calendar, revenue tracker, project management, and domain-specific Custom Agents.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "129.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/solopreneur-os",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You have client details in a spreadsheet, projects in Trello, finances in QuickBooks, and content ideas in Apple Notes.",
    emphasis: "Four tools. None of them talk to each other.",
  },
  {
    text: "A lead messaged you 5 days ago. You meant to follow up Tuesday. It's Friday.",
    emphasis: "That's revenue walking out the door.",
  },
  {
    text: "You invoiced a client 3 weeks ago. Did they pay? You'll check... later.",
    emphasis: "Your accounts receivable is a guessing game.",
  },
  {
    text: "You spend more time switching between apps than doing the work those apps are supposed to help with.",
    emphasis: "The tools are the bottleneck.",
  },
];

const FEATURES = [
  {
    title: "Mini CRM with pipeline",
    description:
      "Track leads, clients, and deals through your sales pipeline. The CRM agent drafts follow-up messages and flags leads going cold — so you never lose a deal to a missed email.",
    detail: "Never lose a lead again",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Content calendar with drafting agent",
    description:
      "Plan, draft, and schedule content across every channel. The AI agent writes first drafts in your voice — you edit for 15 minutes instead of staring at a blank page for an hour.",
    detail: "AI drafts in 2 minutes",
    span: "" as const,
  },
  {
    title: "Revenue & expense tracker",
    description:
      "Log income by client, track expenses by category, see monthly profit at a glance. The finance agent flags unusual spending and sends monthly revenue summaries.",
    detail: "Know your numbers instantly",
    span: "" as const,
  },
  {
    title: "Project management",
    description:
      "Kanban boards, timelines, and task lists for every active project. Link projects to clients, track deadlines, and see what's overdue before your client asks.",
    detail: "Clients + projects, linked",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Domain-specific Custom Agents",
    description:
      "Not one generic agent — four specialised ones. CRM agent for follow-ups. Content agent for drafts. Finance agent for summaries. Project agent for status reports.",
    detail: "4 agents, 4 domains",
    span: "" as const,
  },
  {
    title: "Business dashboard",
    description:
      "One page shows pipeline value, monthly revenue, content scheduled, and project status. The 30-second morning check that replaces 20 minutes of app-switching.",
    detail: "30-second daily overview",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Solopreneurs",
    description:
      "Running a one-person business means wearing every hat — sales, marketing, finance, delivery. You need a system that handles the operational overhead so you can focus on the work that generates revenue.",
    stat: "One workspace. Every business function.",
  },
  {
    role: "Indie hackers",
    description:
      "Building a product, acquiring users, managing support, and creating content — all at once. Your business tools shouldn't cost more than your hosting. This replaces $1,200/yr in SaaS.",
    stat: "$129 once. Not $100/month forever.",
  },
  {
    role: "Freelancers going full-time",
    description:
      "You've outgrown spreadsheets but can't justify enterprise software. You need a business operating system that scales from 3 clients to 30 — without adding another monthly bill.",
    stat: "Scales from day 1 to year 5",
  },
];

const BEFORE_AFTER = [
  {
    before: "Client details in 4 different places",
    after: "One CRM with pipeline, notes, and follow-up reminders",
  },
  {
    before: "Forgot to follow up — lead went cold",
    after: "CRM agent flags stale leads and drafts follow-ups",
  },
  {
    before: "\"Did that client pay?\" — no idea",
    after: "Revenue tracker shows outstanding invoices at a glance",
  },
  {
    before: "20 minutes of app-switching every morning",
    after: "30-second business dashboard. Everything in one view.",
  },
];

const WHATS_INSIDE = [
  { item: "Mini CRM with sales pipeline and client database", value: "$35" },
  { item: "CRM agent — follow-up drafts and cold lead alerts", value: "$30" },
  { item: "Content calendar with multi-platform scheduling", value: "$25" },
  { item: "Content drafting agent (Custom Agent configuration)", value: "$25" },
  { item: "Revenue & expense tracker with monthly summaries", value: "$25" },
  { item: "Finance agent — spending alerts and revenue reports", value: "$20" },
  { item: "Project management with Kanban, timeline, and tasks", value: "$25" },
  { item: "Project status agent — weekly status reports", value: "$20" },
  { item: "Business dashboard (pipeline, revenue, content, projects)", value: "$20" },
  { item: "Setup guide (video + written)", value: "$15" },
  { item: "Lifetime updates — every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan?",
    a: "The CRM, content calendar, finance tracker, and project management work on any Notion plan. The four AI agents require Notion Business ($20/user/month) for Custom Agents. You can use the full system without agents and add them when you're ready.",
  },
  {
    q: "Can this replace a real CRM like HubSpot?",
    a: "For solopreneurs managing up to 50–100 active contacts, yes. You get a pipeline, client database, deal tracking, and AI follow-ups. If you need marketing automation, A/B testing, or enterprise reporting, you need a dedicated CRM. For everyone else, this is more than enough.",
  },
  {
    q: "How is this different from buying separate templates?",
    a: "Separate templates create separate silos. The Solopreneur OS connects everything — clients link to projects, projects link to revenue, content links to pipeline stages. The AI agents review across domains, not within them.",
  },
  {
    q: "How long does setup take?",
    a: "The template installs in under 2 minutes. Configuring all four AI agents takes about 20 minutes with the included guide. Migrating your existing client and project data depends on volume — most people are fully operational within a weekend.",
  },
  {
    q: "Can I use this with a small team?",
    a: "It's designed for one person, but Notion's sharing features mean you can add a VA or contractor to specific databases. If you're a team of 3+, look at the Team Ops Hub instead.",
  },
  {
    q: "What if it doesn't work for my business?",
    a: "30-day money-back guarantee, no questions asked. If the Solopreneur OS doesn't fit how you run your business, full refund.",
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

/** Stylised business dashboard mockup */
function BusinessDashboardMockup(): React.ReactElement {
  const pipelineStages = [
    { stage: "Lead", count: 4, color: "bg-blue-400" },
    { stage: "Proposal", count: 2, color: "bg-yellow-400" },
    { stage: "Negotiation", count: 1, color: "bg-orange-400" },
    { stage: "Closed", count: 3, color: "bg-green-400" },
  ];

  const contentItems = [
    { title: "LinkedIn: AI tools", status: "Scheduled", statusColor: "bg-blue-100 text-blue-700" },
    { title: "Blog: Client wins", status: "Draft", statusColor: "bg-yellow-100 text-yellow-700" },
    { title: "Newsletter #8", status: "Published", statusColor: "bg-green-100 text-green-700" },
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
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Solopreneur OS</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            March 2026
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 p-px">
          {/* CRM Pipeline */}
          <div className="bg-white p-4">
            <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-3">CRM Pipeline</p>
            <div className="flex items-end gap-2">
              {pipelineStages.map((s) => (
                <div key={s.stage} className="flex-1 text-center">
                  <div className="mx-auto w-full max-w-[40px]">
                    <div
                      className={`${s.color} rounded-t-md mx-auto`}
                      style={{ height: `${s.count * 16}px`, width: "100%" }}
                    />
                  </div>
                  <p className="text-[9px] font-medium text-primary mt-1">{s.count}</p>
                  <p className="text-[8px] text-secondary">{s.stage}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 text-[9px] text-green-primary font-medium">$12,400 pipeline value</div>
          </div>

          {/* Content Calendar */}
          <div className="bg-white p-4">
            <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-2">Content This Week</p>
            <div className="space-y-1.5">
              {contentItems.map((item) => (
                <div key={item.title} className="flex items-center justify-between border border-gray-100 rounded-lg px-2.5 py-1.5">
                  <span className="text-[10px] font-medium text-primary truncate">{item.title}</span>
                  <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full shrink-0 ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white p-4">
            <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-2">March Revenue</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">$8,240</span>
              <span className="text-[9px] text-green-primary font-medium">+22% vs Feb</span>
            </div>
            <div className="mt-2 flex gap-1.5">
              {[65, 80, 45, 90, 70, 55, 85].map((h, i) => (
                <div key={i} className="flex-1">
                  <div className="bg-green-primary/20 rounded-t-sm" style={{ height: `${h * 0.4}px` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-secondary mt-1">
              <span>Wk 1</span>
              <span>Wk 4</span>
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-white p-4">
            <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-2">Active Projects</p>
            <div className="space-y-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-medium text-primary">Website redesign — Acme</span>
                  <span className="text-[8px] text-green-primary font-medium">80%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-green-primary rounded-full" style={{ width: "80%" }} /></div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-medium text-primary">Brand strategy — Bloom Co</span>
                  <span className="text-[8px] text-yellow-600 font-medium">35%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-yellow-400 rounded-full" style={{ width: "35%" }} /></div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-medium text-primary">AI audit — TechStart</span>
                  <span className="text-[8px] text-blue-600 font-medium">10%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-blue-400 rounded-full" style={{ width: "10%" }} /></div>
              </div>
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

export default function SolopreneurOSPage(): React.ReactElement {
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
            <span className="text-primary font-medium">Solopreneur OS</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming May 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Run your entire business{" "}
              <span className="text-green-primary">from one Notion workspace.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              CRM, content calendar, revenue tracker, and project management —
              with four AI agents that draft follow-ups, write content, flag
              overspending, and generate status reports. One workspace.
              $129 once. Not $100/month forever.
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
                <span className="font-bold text-primary text-2xl">$129</span>
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
                4 domain-specific AI agents
              </span>
            </div>
          </div>

          <BusinessDashboardMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            You&apos;re running a business in 6 tabs.
            <br />
            <span className="text-secondary/60">And none of them talk to each other.</span>
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
            A one-person business doesn&apos;t need enterprise software. It needs
            one workspace where clients, content, money, and projects are all
            connected — and AI agents handle the operational work you shouldn&apos;t
            be doing manually.
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
            Four business functions. Four AI agents.{" "}
            <span className="text-secondary/60">One Notion workspace.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            CRM, content, finance, and projects — connected in one workspace.
            Each domain has its own Custom Agent that handles the repetitive
            work while you focus on revenue.
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
            One-person businesses{" "}
            <span className="text-secondary/60">that operate like a team</span>
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
          THE MATHS — full-bleed dark section (competitor cost comparison)
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold text-green-light uppercase tracking-widest mb-3">
            The maths
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            The SaaS stack you&apos;re paying for costs $1,200 a year.
            <br />
            <span className="text-green-light">This costs $129. Once.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { tool: "CRM (HubSpot / Pipedrive)", cost: "$50/mo" },
              { tool: "Project management (Asana / Monday)", cost: "$20/mo" },
              { tool: "Content tool (Hootsuite / Buffer)", cost: "$30/mo" },
            ].map(({ tool, cost }) => (
              <div key={tool} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-2xl font-bold text-white/80">{cost}</span>
                <p className="mt-1 text-xs text-white/60">{tool}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
              <p className="text-xs text-white/60">Combined annual cost</p>
              <p className="text-3xl font-bold text-white/80 line-through decoration-red-400">$1,200/yr</p>
            </div>
            <div className="text-3xl text-green-light font-bold">&rarr;</div>
            <div className="bg-green-light/10 border border-green-light/20 rounded-xl px-6 py-4">
              <p className="text-xs text-green-light">Solopreneur OS &middot; one-time</p>
              <p className="text-3xl font-bold text-green-light">$129</p>
            </div>
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            CRM + project management + content tool + accounting overview = $100/month
            in subscriptions. The Solopreneur OS replaces all four for the cost
            of one month. And you keep it forever.
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
                &ldquo;I was paying $100/month for tools I barely used. Now I run{" "}
                <span className="text-green-primary">CRM, content, finance, and projects from one Notion workspace</span>
                &mdash; with AI agents handling the busywork.&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                I built the Solopreneur OS because I was drowning in SaaS.
                HubSpot for CRM. Trello for projects. Buffer for content.
                QuickBooks for invoices. None of them connected. Now everything
                lives in one workspace, and four AI agents handle the follow-ups,
                drafts, reports, and alerts I used to do manually.
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
              One purchase. Your entire business operating system.{" "}
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
                <span className="text-sm font-bold text-primary">$240+</span>
              </div>
            </div>

            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Launching May 2026
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-6xl font-bold text-primary tracking-tight">$129</span>
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
            Your business deserves an operating system.
            <br />
            <span className="text-green-primary">Not 6 apps held together with hope.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching May 2026. $129 once — no subscription, no per-seat
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

      <WaitlistPopup productName="the Solopreneur OS" price={129} fullPrice={179} />
    </>
  );
}
