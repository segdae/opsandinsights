import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Smart Project Tracker — Notion Template | Ops & Insights",
  description:
    "Project management with AI agent triggers for automated status reports and deadline reminders. Notion template for freelancers and small teams. $29 once.",
  alternates: { canonical: "/templates/smart-project-tracker" },
  openGraph: {
    title: "Smart Project Tracker — Notion Template",
    description:
      "AI-powered project tracking with automated status reports, deadline alerts, and team views. $29 once. No subscription.",
    url: "/templates/smart-project-tracker",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Smart Project Tracker — Notion Template",
  description:
    "A Notion project management template with Custom Agent triggers for automated status updates, deadline reminders, and team views.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/smart-project-tracker",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You have 12 tasks across 3 projects and no idea which ones are actually on track.",
    emphasis: "You find out something\u2019s late when the client asks.",
  },
  {
    text: "Every Monday starts with 20 minutes of checking Slack, email, and your task app to figure out where things stand.",
    emphasis: "You still miss something.",
  },
  {
    text: "A deadline is in 48 hours. Nobody mentioned it until today.",
    emphasis: "Now it\u2019s a fire drill.",
  },
  {
    text: "Your client wants a status update. You spend 15 minutes writing it instead of doing the work.",
    emphasis: "Multiply that by 4 clients and you\u2019ve lost an hour.",
  },
];

const FEATURES = [
  {
    title: "Automated status reports",
    description:
      "A Custom Agent scans your project database every Monday and generates a status report: what\u2019s done, what\u2019s in progress, what\u2019s blocked. Copy-paste it to Slack or email in 30 seconds.",
    detail: "Generated every Monday",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Deadline alerts via Custom Agent",
    description:
      "The agent flags tasks due within 72 hours and tasks that slipped past their deadline. No more surprises. You see what needs attention before it becomes urgent.",
    detail: "72-hour early warning",
    span: "" as const,
  },
  {
    title: "Team view",
    description:
      "See who\u2019s working on what. Filter by person, project, or status. Great for freelancers managing subcontractors or small teams splitting deliverables.",
    detail: "Per-person workload",
    span: "" as const,
  },
  {
    title: "Project timeline",
    description:
      "Gantt-style timeline view across all projects. See overlapping deadlines, spot bottlenecks, and plan capacity before you overcommit.",
    detail: "Visual timeline",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Kanban board",
    description:
      "Drag tasks through To Do, In Progress, Review, and Done. Each card shows assignee, deadline, and priority. The board your brain actually wants to look at.",
    detail: "4-stage workflow",
    span: "" as const,
  },
  {
    title: "Project templates",
    description:
      "Pre-built task lists for common project types: website launch, client onboarding, content campaign. Duplicate and go \u2014 no starting from scratch.",
    detail: "Start in 2 minutes",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Freelancers",
    description:
      "Managing 3\u20135 client projects at once. Each has different timelines, deliverables, and expectations. You need to see everything in one view without context-switching between tools.",
    stat: "See every project status at a glance",
  },
  {
    role: "Small teams",
    description:
      "A team of 2\u20135 people sharing tasks and deadlines. You need accountability without expensive project management software. Notion is already in your stack.",
    stat: "Replace your $30/seat/month PM tool",
  },
  {
    role: "Agency owners",
    description:
      "Running multiple client projects with subcontractors. You need to know what\u2019s on track and what needs your attention \u2014 without chasing people for updates.",
    stat: "Automated status reports every Monday",
  },
];

const BEFORE_AFTER = [
  {
    before: "\"Which tasks are due this week?\" *checks 3 tools*",
    after: "One dashboard shows every deadline across every project",
  },
  {
    before: "15 minutes writing a status update for each client",
    after: "AI agent generates status reports automatically on Monday",
  },
  {
    before: "Deadline missed because nobody flagged it",
    after: "72-hour alerts before any task is due",
  },
  {
    before: "Team members working on the same task without knowing",
    after: "Team view shows who\u2019s doing what in real time",
  },
];

const WHATS_INSIDE = [
  { item: "Project database with timeline, Kanban, and table views", value: "$10" },
  { item: "Task tracker linked to projects with deadlines and assignees", value: "$10" },
  { item: "Automated status report agent (Custom Agent configuration)", value: "$25" },
  { item: "Deadline alert agent (72-hour early warning system)", value: "$15" },
  { item: "Team workload view with per-person filtering", value: "$10" },
  { item: "Pre-built project templates (5 common project types)", value: "$10" },
  { item: "Setup guide (video + written)", value: "$15" },
  { item: "Lifetime updates \u2014 every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan?",
    a: "The project tracker, Kanban board, timeline, and team views work on any Notion plan. The automated status report and deadline alert agents require Notion Business ($20/user/month) for Custom Agents. You can use the full tracker without agents and add them later.",
  },
  {
    q: "How is this different from Asana or Monday.com?",
    a: "Those tools charge $10\u2013$30 per user per month. This is $29 once. Plus, your projects live inside Notion alongside your notes, docs, and everything else \u2014 no context-switching between apps.",
  },
  {
    q: "Can I use this for personal projects, not just client work?",
    a: "Absolutely. Side projects, renovations, event planning \u2014 anything with tasks and deadlines. The structure works for any project type. Remove the client fields and it adapts instantly.",
  },
  {
    q: "What if my team uses a different project management structure?",
    a: "Every database is fully customisable. Rename stages, add fields, change views. The template gives you a proven starting structure \u2014 you shape it to match how your team actually works.",
  },
  {
    q: "How does the deadline alert agent work?",
    a: "The Custom Agent scans your task database daily. Any task due within 72 hours gets flagged with a summary: task name, project, assignee, and days remaining. It surfaces what needs attention so you can act, not react.",
  },
  {
    q: "What if it doesn\u2019t work for my workflow?",
    a: "30-day money-back guarantee, no questions asked. If the Smart Project Tracker doesn\u2019t fit how you work, full refund.",
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

/** Stylised project board mockup */
function ProjectBoardMockup(): React.ReactElement {
  const columns = [
    {
      name: "To Do",
      color: "bg-gray-100 text-gray-600",
      tasks: [
        { title: "Write API docs", deadline: "Mar 24", priority: "bg-yellow-100 text-yellow-700" },
        { title: "Design mockups", deadline: "Mar 26", priority: "bg-gray-100 text-gray-600" },
      ],
    },
    {
      name: "In Progress",
      color: "bg-blue-100 text-blue-700",
      tasks: [
        { title: "Build auth flow", deadline: "Mar 18", priority: "bg-red-100 text-red-700" },
        { title: "User testing", deadline: "Mar 22", priority: "bg-yellow-100 text-yellow-700" },
      ],
    },
    {
      name: "Review",
      color: "bg-purple-100 text-purple-700",
      tasks: [
        { title: "Homepage copy", deadline: "Mar 15", priority: "bg-green-100 text-green-700" },
      ],
    },
    {
      name: "Done",
      color: "bg-green-100 text-green-700",
      tasks: [
        { title: "DB schema", deadline: "Mar 10", priority: "bg-green-100 text-green-700" },
        { title: "CI/CD setup", deadline: "Mar 12", priority: "bg-green-100 text-green-700" },
      ],
    },
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
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Smart Project Tracker</span>
          <span className="ml-auto text-[10px] text-secondary bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-medium">
            2 tasks due in 48hrs
          </span>
        </div>

        {/* Kanban board */}
        <div className="grid grid-cols-4 gap-px bg-gray-100 p-px">
          {columns.map((col) => (
            <div key={col.name} className="bg-white p-3 min-h-[140px]">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${col.color}`}>
                  {col.name}
                </span>
                <span className="text-[9px] text-secondary">{col.tasks.length}</span>
              </div>
              <div className="space-y-2">
                {col.tasks.map((task) => (
                  <div key={task.title} className="border border-gray-100 rounded-lg p-2">
                    <p className="text-[10px] font-medium text-primary leading-tight">{task.title}</p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="text-[8px] text-secondary">{task.deadline}</span>
                      <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full ${task.priority}`}>
                        {task.deadline <= "Mar 18" ? "Urgent" : "On track"}
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

export default function SmartProjectTrackerPage(): React.ReactElement {
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
            <span className="text-primary font-medium">Smart Project Tracker</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming April 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Never miss a deadline.{" "}
              <span className="text-green-primary">Never write a status update.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              A Notion project tracker with an AI agent that writes your status
              reports on Monday and flags deadlines 72 hours before they hit.
              You manage the work. The system manages the updates.
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
                AI status reports included
              </span>
            </div>
          </div>

          <ProjectBoardMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            You know what&apos;s due.
            <br />
            <span className="text-secondary/60">You found out too late.</span>
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
            Missed deadlines aren&apos;t a focus problem &mdash; they&apos;re a
            visibility problem. When you can see everything in one place, nothing
            slips through.
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
            Track projects. Get alerts.{" "}
            <span className="text-secondary/60">Ship on time.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            An AI agent writes your status reports automatically. Another flags
            deadlines before they become emergencies. You stay in the work, not
            in the updates.
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
            People who ship work,{" "}
            <span className="text-secondary/60">not status updates</span>
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
            One missed deadline costs more than this template.
            <br />
            <span className="text-green-light">One saved client relationship? Priceless.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "15 min", label: "saved per status report" },
              { number: "72 hrs", label: "advance deadline warning" },
              { number: "4", label: "views (board, table, timeline, team)" },
              { number: "$29", label: "once vs $30/seat/month" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-3xl font-bold text-green-light">{number}</span>
                <p className="mt-1 text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            You could spend $360/year on project management software. Or $29
            once on a system that lives inside Notion and writes your status
            reports for you.
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
                &ldquo;I was managing 5 client projects and{" "}
                <span className="text-green-primary">spending an hour every Monday writing status updates</span>.
                Now the AI agent does it in 30 seconds.&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                This started as my own project tracker. Kanban board, timeline view,
                deadline alerts. When I added the Custom Agent for automated status
                reports, I got an hour back every week. That&apos;s 52 hours a year I
                now spend on billable work instead of admin.
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
              One purchase. Project management that runs itself.{" "}
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
                <span className="text-sm font-bold text-primary">$95+</span>
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
            Your projects are waiting.
            <br />
            <span className="text-green-primary">Ship them on time.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching April 2026. $29 once &mdash; no subscription, no per-seat
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

      <WaitlistPopup productName="the Smart Project Tracker" price={29} fullPrice={39} />
    </>
  );
}
