import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Freelancer Command Centre — Notion Template | Ops & Insights",
  description:
    "Manage clients, projects, invoices, and time tracking in one Notion workspace — with an AI agent that writes your weekly summary. $39 once.",
  alternates: { canonical: "/templates/freelancer-command-centre" },
  openGraph: {
    title: "Freelancer Command Centre — Notion Template",
    description:
      "Clients, projects, invoices, and time logs in one workspace. AI agent writes your weekly summary. $39 once. No subscription.",
    url: "/templates/freelancer-command-centre",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Freelancer Command Centre — Notion Template",
  description:
    "A Notion workspace for freelancers: client database, project tracker, invoice log, time tracking, and AI-generated weekly summaries.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "39.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/freelancer-command-centre",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You have 6 active clients and you can\u2019t remember who owes you money.",
    emphasis: "Two invoices are 30 days overdue.",
  },
  {
    text: "You track projects in a Notes app, invoices in a spreadsheet, and time in your head.",
    emphasis: "Nothing talks to anything else.",
  },
  {
    text: "Every Friday you spend 45 minutes piecing together what you actually did this week.",
    emphasis: "That\u2019s 3 hours a month you\u2019re not billing.",
  },
  {
    text: "A client asks for a status update. You scramble to check three different tools before replying.",
    emphasis: "You look disorganised. You\u2019re not \u2014 your system is.",
  },
];

const FEATURES = [
  {
    title: "Client database",
    description:
      "Every client in one place: contact details, contract status, project history, and total revenue. Filter by active, past, or prospective. Know exactly who you\u2019re working with and what they\u2019re worth.",
    detail: "All clients, one view",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Project tracker",
    description:
      "Each project linked to its client with scope, deadline, status, and deliverables. Kanban or table view \u2014 your choice. Never lose track of what\u2019s due when.",
    detail: "Linked to clients",
    span: "" as const,
  },
  {
    title: "Time log",
    description:
      "Log hours per project with one click. See weekly totals, billable vs non-billable splits, and per-client breakdowns. Know where your time actually goes.",
    detail: "Track every hour",
    span: "" as const,
  },
  {
    title: "Invoice tracker",
    description:
      "Track every invoice from Sent to Paid. See outstanding amounts at a glance, flag overdue payments, and link invoices to projects and time logs for a complete audit trail.",
    detail: "Sent \u2192 Paid pipeline",
    span: "sm:col-span-2" as const,
  },
  {
    title: "AI weekly summary agent",
    description:
      "A Custom Agent that reviews your time logs, project updates, and invoice statuses every Friday \u2014 then writes a weekly summary you can send to clients or keep for yourself.",
    detail: "Auto-generated every Friday",
    span: "" as const,
  },
  {
    title: "Revenue dashboard",
    description:
      "See monthly revenue, outstanding invoices, and projected earnings in one view. No more guessing whether you\u2019re on track this quarter.",
    detail: "Monthly + quarterly view",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "New freelancers",
    description:
      "You left your full-time job 3 months ago. You have clients coming in but no system to manage them. Right now it\u2019s sticky notes and good intentions.",
    stat: "Go from chaos to organised in one afternoon",
  },
  {
    role: "Solo consultants",
    description:
      "You\u2019re billing $100\u2013$250/hour across multiple clients. Tracking time accurately is the difference between leaving $2,000 on the table and collecting it.",
    stat: "Capture every billable hour automatically",
  },
  {
    role: "Creative freelancers",
    description:
      "Designers, writers, developers juggling 4\u20138 projects at once. You need to see what\u2019s due, what\u2019s paid, and what needs your attention \u2014 without context-switching into 5 apps.",
    stat: "One workspace for everything",
  },
];

const BEFORE_AFTER = [
  {
    before: "Client details in email, Notes, and your memory",
    after: "Every client in one database with full history",
  },
  {
    before: "\"Wait, did they pay that invoice?\"",
    after: "Invoice tracker shows Sent, Overdue, and Paid at a glance",
  },
  {
    before: "45 minutes reconstructing your week every Friday",
    after: "AI agent writes your weekly summary in 2 minutes",
  },
  {
    before: "Guessing if you\u2019re on track for the quarter",
    after: "Revenue dashboard shows monthly and projected earnings",
  },
];

const WHATS_INSIDE = [
  { item: "Client database with contact details, contracts, and revenue tracking", value: "$15" },
  { item: "Project tracker linked to clients with deadlines and deliverables", value: "$15" },
  { item: "Time log with billable/non-billable splits and per-client totals", value: "$15" },
  { item: "Invoice tracker (Sent \u2192 Paid pipeline with overdue alerts)", value: "$15" },
  { item: "AI weekly summary agent (Custom Agent configuration)", value: "$25" },
  { item: "Revenue dashboard with monthly and quarterly views", value: "$10" },
  { item: "Setup guide (video + written)", value: "$15" },
  { item: "Lifetime updates \u2014 every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan?",
    a: "The client database, project tracker, time log, and invoice tracker work on any Notion plan \u2014 including Free and Plus. The AI weekly summary agent requires Notion Business ($20/user/month) for Custom Agents. You can use the entire system without the agent and add it later.",
  },
  {
    q: "I already track clients in a spreadsheet. Why switch?",
    a: "A spreadsheet stores data. This is a system \u2014 clients link to projects, projects link to time logs, time logs link to invoices. Update one thing and everything connected updates too. Plus, the AI agent writes your weekly summary from that data automatically.",
  },
  {
    q: "Can I customise the fields for my type of freelancing?",
    a: "Every database is fully customisable. Add fields, remove fields, rename them. It\u2019s your Notion workspace. The template gives you the structure \u2014 you make it yours.",
  },
  {
    q: "Does it work for agencies or small teams?",
    a: "It\u2019s designed for solo freelancers and consultants. If you\u2019re a team of 2\u20133, it can work with shared access. For larger teams, check out the Smart Project Tracker or Team Ops Hub.",
  },
  {
    q: "How long does setup take?",
    a: "Duplicate the template, fill in your client details, and you\u2019re running. Most freelancers are fully set up in under 30 minutes. The setup guide walks you through every step.",
  },
  {
    q: "What if it doesn\u2019t work for my workflow?",
    a: "30-day money-back guarantee, no questions asked. If the Command Centre doesn\u2019t fit how you work, full refund.",
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

/** Stylised freelancer dashboard mockup */
function DashboardMockup(): React.ReactElement {
  const clients = [
    { name: "Acme Corp", status: "Active", revenue: "$4,200" },
    { name: "BluePeak Ltd", status: "Active", revenue: "$2,800" },
    { name: "Catalyst IO", status: "Invoiced", revenue: "$1,500" },
  ];

  const projects = [
    { title: "Website Redesign", client: "Acme Corp", deadline: "Mar 21", progress: 75 },
    { title: "API Integration", client: "BluePeak", deadline: "Mar 28", progress: 40 },
    { title: "Brand Audit", client: "Catalyst", deadline: "Apr 4", progress: 10 },
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
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Freelancer Command Centre</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
          {/* Clients panel */}
          <div className="bg-white p-4">
            <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-3">Clients</p>
            <div className="space-y-2">
              {clients.map((c) => (
                <div key={c.name} className="flex items-center justify-between border border-gray-100 rounded-lg p-2.5">
                  <div>
                    <p className="text-[11px] font-medium text-primary">{c.name}</p>
                    <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${c.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {c.status}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-primary">{c.revenue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects panel */}
          <div className="bg-white p-4">
            <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-3">Active Projects</p>
            <div className="space-y-2">
              {projects.map((p) => (
                <div key={p.title} className="border border-gray-100 rounded-lg p-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium text-primary">{p.title}</p>
                    <span className="text-[9px] text-secondary">{p.deadline}</span>
                  </div>
                  <p className="text-[9px] text-secondary mt-0.5">{p.client}</p>
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-primary rounded-full" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly summary card */}
        <div className="bg-green-subtle/40 border-t border-gray-100 px-4 py-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] font-semibold bg-green-primary/10 text-green-primary px-2 py-0.5 rounded-full">AI Summary</span>
            <span className="text-[9px] text-secondary">Week of Mar 10</span>
          </div>
          <p className="text-[10px] text-primary leading-relaxed">
            Logged 32.5 billable hours across 3 clients. $4,200 invoiced, $1,500 outstanding. Website Redesign on track for Mar 21 deadline.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function FreelancerCommandCentrePage(): React.ReactElement {
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
            <span className="text-primary font-medium">Freelancer Command Centre</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming April 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Run your freelance business{" "}
              <span className="text-green-primary">from one workspace.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Clients, projects, invoices, and time tracking — linked together
              in Notion. An AI agent writes your weekly summary so you spend
              Friday afternoons billing, not reporting.
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
                <span className="font-bold text-primary text-2xl">$39</span>
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
                AI weekly summary included
              </span>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            You didn&apos;t go freelance to
            <br />
            <span className="text-secondary/60">drown in admin.</span>
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
            Scattered tools aren&apos;t a freelancer problem &mdash; they&apos;re
            a system problem. Consolidate everything, and the business runs itself.
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
            Clients, projects, money &mdash;{" "}
            <span className="text-secondary/60">all connected</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            One workspace where clients link to projects, projects link to time
            logs, and time logs link to invoices. Update one thing and everything
            stays in sync.
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
            People who bill for their time,{" "}
            <span className="text-secondary/60">not waste it on admin</span>
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
            3 hours a month on admin. At $150/hour,
            <br />
            <span className="text-green-light">that&apos;s $450 you&apos;re not billing.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "32.5", label: "hours tracked/week" },
              { number: "3", label: "clients managed" },
              { number: "2 min", label: "weekly summary" },
              { number: "$0", label: "missed invoices" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-3xl font-bold text-green-light">{number}</span>
                <p className="mt-1 text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            The Command Centre pays for itself the first time it catches an
            overdue invoice or saves you a Friday afternoon of manual reporting.
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
                &ldquo;I was billing 6 clients, tracking time in a spreadsheet, and{" "}
                <span className="text-green-primary">losing $800/month to forgotten invoices</span>.
                This system fixed that in a weekend.&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                When I went freelance, I built this workspace out of necessity. Clients
                in one place, projects linked to time logs, invoices linked to projects.
                The AI agent replaced 45 minutes of Friday admin with a 2-minute summary.
                Now I&apos;m packaging the exact system I use every day.
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
              One purchase. Your entire freelance back office.{" "}
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
                <span className="text-6xl font-bold text-primary tracking-tight">$39</span>
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
                30-day money-back guarantee &mdash; no questions asked
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
            Stop juggling tools.
            <br />
            <span className="text-green-primary">Start running your business.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching April 2026. $39 once &mdash; no subscription, no per-seat
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

      <WaitlistPopup productName="the Freelancer Command Centre" price={39} fullPrice={49} />
    </>
  );
}
