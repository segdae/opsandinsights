import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Job Search OS — Notion Template with AI Agent | Ops & Insights",
  description:
    "Track every application, research companies with AI, and never miss a follow-up. Notion template for job seekers and career changers. $19 once.",
  alternates: { canonical: "/templates/job-search-os" },
  openGraph: {
    title: "Job Search OS — Notion Template for Job Seekers",
    description:
      "An AI agent researches companies for you and reminds you to follow up. Application pipeline, interview prep, and offer tracking. $19 once.",
    url: "/templates/job-search-os",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Job Search OS — Notion Template",
  description:
    "A Notion job search system with AI agent for company research, application pipeline tracking, follow-up reminders, and interview preparation.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "19.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/job-search-os",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You applied to 30 roles last month.",
    emphasis: "You can't remember which ones.",
  },
  {
    text: "You meant to follow up after that interview.",
    emphasis: "That was two weeks ago.",
  },
  {
    text: "You're researching every company from scratch — Googling, checking LinkedIn, reading Glassdoor.",
    emphasis: "For every. Single. Application.",
  },
  {
    text: "Your job search lives across email, spreadsheets, notes, and browser tabs.",
    emphasis: "Nothing connects to anything.",
  },
];

const FEATURES = [
  {
    title: "Company research agent",
    description:
      "Add a company name. The AI agent pulls together a research brief — what they do, recent news, company size, culture signals, and interview tips. Done in under 2 minutes.",
    detail: "Research briefs in 2 minutes",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Application pipeline",
    description:
      "Every role moves through Saved → Applied → Phone Screen → Interview → Offer → Accepted/Rejected. See your entire search at a glance.",
    detail: "6-stage pipeline",
    span: "" as const,
  },
  {
    title: "Follow-up reminders",
    description:
      "The agent checks for applications without responses and nudges you to follow up. No more ghosting yourself out of opportunities.",
    detail: "Never miss a follow-up",
    span: "" as const,
  },
  {
    title: "Interview prep workspace",
    description:
      "Dedicated space per role for company notes, prepared questions, STAR stories, and post-interview reflections. Walk in prepared every time.",
    detail: "Per-role prep pages",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Networking tracker",
    description:
      "Log every connection, coffee chat, and referral. Track who introduced you, what you discussed, and when to follow up.",
    detail: "Relationships matter",
    span: "" as const,
  },
  {
    title: "Salary & offer comparison",
    description:
      "Compare offers side-by-side — base, bonus, equity, benefits, commute, growth potential. Make decisions with data, not gut feel.",
    detail: "Side-by-side comparison",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Active job seekers",
    description:
      "Applying to 10-30 roles at a time and losing track of where you stand with each one. You need a system, not another spreadsheet.",
    stat: "Track every application in one view",
  },
  {
    role: "Career changers",
    description:
      "Moving into a new field and doing twice the research. You need company briefs, industry context, and interview prep — fast.",
    stat: "AI research briefs save 3+ hours/week",
  },
  {
    role: "Passive searchers",
    description:
      "Not urgently looking but keeping an eye out. You need somewhere to save interesting roles and companies without it becoming a project.",
    stat: "Save now, apply when ready",
  },
];

const BEFORE_AFTER = [
  {
    before: "30 applications in a spreadsheet with no status",
    after: "Every role in a pipeline — see exactly where you stand",
  },
  {
    before: "Googling every company before each interview",
    after: "AI research brief generated in 2 minutes",
  },
  {
    before: "Forgetting to follow up after interviews",
    after: "Agent reminds you exactly when to follow up",
  },
  {
    before: "Comparing offers in your head",
    after: "Side-by-side comparison with every detail",
  },
];

const WHATS_INSIDE = [
  { item: "Application pipeline (6 stages, filtered views)", value: "$8" },
  { item: "Company research AI agent configuration", value: "$15" },
  { item: "Follow-up reminder agent", value: "$10" },
  { item: "Interview prep workspace (per role)", value: "$8" },
  { item: "Networking tracker with follow-up dates", value: "$5" },
  { item: "Salary & offer comparison tool", value: "$8" },
  { item: "Setup guide (video + written)", value: "$10" },
  { item: "Lifetime updates — every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan?",
    a: "The pipeline, interview prep, and tracking work on any Notion plan including free. The AI company research agent requires Notion Business ($20/user/month) for Custom Agents. You can use the full system without the agent and add it later.",
  },
  {
    q: "How does the company research agent work?",
    a: "Add a company name to your application. The Custom Agent generates a research brief — company overview, recent news, size, culture signals, and suggested interview questions. It pulls from the company's public information and structures it in your workspace.",
  },
  {
    q: "Can I import my existing applications?",
    a: "Yes. Export from your spreadsheet or other tracker as CSV and import into the Notion database. The setup guide walks you through it.",
  },
  {
    q: "Is this only for tech jobs?",
    a: "No. The pipeline, research agent, and prep system work for any industry. The stages, tags, and fields are fully customisable to your search.",
  },
  {
    q: "How many applications can it track?",
    a: "Unlimited. Notion databases have no row limits. Whether you're tracking 10 roles or 200, the filtered views keep everything manageable.",
  },
  {
    q: "What if it doesn't work for my search?",
    a: "30-day money-back guarantee, no questions asked. If the Job Search OS doesn't fit how you work, full refund.",
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

function PipelineMockup(): React.ReactElement {
  const stages = [
    {
      name: "Applied",
      cards: [
        { company: "Stripe", role: "Solutions Eng", days: "2d ago" },
        { company: "Notion", role: "PM", days: "5d ago" },
      ],
    },
    {
      name: "Phone Screen",
      cards: [{ company: "Vercel", role: "Sales Eng", days: "Tomorrow" }],
    },
    {
      name: "Interview",
      cards: [{ company: "Linear", role: "Ops Lead", days: "Mar 14" }],
    },
    {
      name: "Offer",
      cards: [{ company: "Raycast", role: "GTM", days: "Pending" }],
    },
  ];

  return (
    <div className="relative mt-12 sm:mt-16 animate-fade-in-up delay-500">
      <div className="absolute -inset-4 bg-gradient-to-b from-green-subtle/80 via-green-subtle/40 to-transparent rounded-3xl blur-2xl animate-pulse-soft" />

      <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/60 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Job Search OS</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            12 active applications
          </span>
        </div>

        <div className="grid grid-cols-4 gap-px bg-gray-100 p-px">
          {stages.map((stage) => (
            <div key={stage.name} className="bg-white p-3 min-h-[110px]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {stage.name}
                </span>
                <span className="text-[10px] text-secondary bg-gray-100 px-1.5 py-0.5 rounded-full">
                  {stage.cards.length}
                </span>
              </div>
              <div className="space-y-2">
                {stage.cards.map((card) => (
                  <div key={card.company} className="border border-gray-100 rounded-lg p-2.5">
                    <p className="text-xs font-medium text-primary">{card.company}</p>
                    <p className="text-[10px] text-secondary">{card.role}</p>
                    <p className="mt-1 text-[10px] text-green-primary font-medium">{card.days}</p>
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

export default function JobSearchOsPage(): React.ReactElement {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-subtle/50 via-white to-white pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
          <nav className="mb-10 text-sm text-secondary animate-fade-in" aria-label="Breadcrumb">
            <Link href="/templates" className="hover:text-green-primary transition-colors">Templates</Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-primary font-medium">Job Search OS</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming April 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Land the job.{" "}
              <span className="text-green-primary">Not another spreadsheet.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              An AI agent researches companies for you, a pipeline tracks every
              application, and reminders make sure you never miss a follow-up.
              All inside Notion.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300">
              <a href="#waitlist" className="group inline-flex items-center gap-2 text-base font-semibold bg-green-primary text-white pl-8 pr-6 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20">
                Join the waitlist
                <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold text-primary text-2xl">$19</span>
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
                AI research agent included
              </span>
            </div>
          </div>

          <PipelineMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">
        {/* PROBLEM */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Your job search is chaos.
            <br />
            <span className="text-secondary/60">It doesn&apos;t have to be.</span>
          </h2>
          <div className="mt-10 space-y-5">
            {PAIN_POINTS.map(({ text, emphasis }) => (
              <p key={text} className="text-lg text-secondary leading-relaxed pl-5 border-l-2 border-gray-200">
                {text}{" "}<span className="text-primary font-medium">{emphasis}</span>
              </p>
            ))}
          </div>
          <p className="mt-10 text-lg text-primary font-medium max-w-lg">
            A disorganised search doesn&apos;t just feel bad — it costs you
            opportunities. The best candidates aren&apos;t the most talented.
            They&apos;re the most systematic.
          </p>
        </section>

        {/* FEATURES */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">The system</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-lg">
            From application to offer —{" "}
            <span className="text-secondary/60">nothing falls through the cracks</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            An AI agent does your company research. A pipeline tracks every role.
            Reminders make sure you follow up. You focus on interviewing well.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className={`group relative border border-gray-200 rounded-2xl p-6 hover:border-green-primary/60 transition-all hover:shadow-sm ${f.span}`}>
                <span className="inline-block text-[11px] font-medium text-green-primary bg-green-subtle px-2.5 py-1 rounded-full mb-4">{f.detail}</span>
                <h3 className="font-semibold text-primary text-lg group-hover:text-green-primary transition-colors">{f.title}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">Built for</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            People who land jobs,{" "}<span className="text-secondary/60">not just apply for them</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PERSONAS.map(({ role, description, stat }) => (
              <div key={role} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
                <h3 className="font-semibold text-primary text-base">{role}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed flex-1">{description}</p>
                <p className="mt-4 pt-4 border-t border-gray-200 text-xs font-semibold text-green-primary">{stat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BEFORE/AFTER */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary text-center leading-tight">Here&apos;s what changes</h2>
          <div className="mt-12 space-y-4 max-w-xl mx-auto">
            {BEFORE_AFTER.map(({ before, after }, i) => (
              <div key={i} className="flex items-stretch gap-3">
                <div className="flex-1 bg-gray-50 rounded-xl px-5 py-4 text-sm text-secondary leading-relaxed border border-gray-100">{before}</div>
                <div className="flex items-center shrink-0"><ArrowIcon /></div>
                <div className="flex-1 bg-green-subtle rounded-xl px-5 py-4 text-sm text-primary font-medium leading-relaxed border border-green-primary/10">{after}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* DARK SECTION */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold text-green-light uppercase tracking-widest mb-3">The maths</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            The average job search takes 5 months.
            <br />
            <span className="text-green-light">Organised candidates land offers 40% faster.</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "5", label: "months avg search" },
              { number: "40%", label: "faster with a system" },
              { number: "3+", label: "hours saved per week" },
              { number: "$19", label: "one-time cost" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-3xl font-bold text-green-light">{number}</span>
                <p className="mt-1 text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/50 text-sm max-w-md">
            Your next role is worth $50K-$200K+. $19 for the system that helps you land it is the easiest investment you&apos;ll make.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">
        {/* SOCIAL PROOF */}
        <section className="py-20 sm:py-28">
          <div className="relative bg-green-subtle rounded-3xl px-8 py-12 sm:px-12 sm:py-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-primary/5 rounded-bl-full" />
            <div className="relative">
              <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-6">Why I built this</p>
              <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-snug max-w-lg">
                &ldquo;I changed careers twice. Both times, the candidates who got offers weren&apos;t more talented —{" "}
                <span className="text-green-primary">they were more organised.</span>&rdquo;
              </blockquote>
              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                I built this system after watching smart people lose opportunities
                to disorganisation. Forgotten follow-ups, botched interview prep,
                identical cover letters. The Job Search OS fixes the process so
                your talent can actually show.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center text-white font-bold text-sm">SC</div>
                <div>
                  <p className="text-sm font-semibold text-primary">Shea Campbell</p>
                  <p className="text-xs text-secondary">AI Automation Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 sm:py-28 border-t border-gray-100" id="pricing">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">Everything included</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Your entire job search. One workspace.{" "}<span className="text-secondary/60">Launching April.</span>
            </h2>
          </div>
          <div className="border-2 border-green-primary/20 rounded-3xl overflow-hidden">
            <div className="p-6 sm:p-8 space-y-4">
              {WHATS_INSIDE.map(({ item, value }) => (
                <div key={item} className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3"><CheckIcon /><span className="text-primary text-sm leading-relaxed">{item}</span></div>
                  <span className="text-xs text-secondary shrink-0 font-medium">{value}</span>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">Total value</span>
                <span className="text-sm font-bold text-primary">$64+</span>
              </div>
            </div>
            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">Launching April 2026</p>
              <span className="text-6xl font-bold text-primary tracking-tight">$19</span>
              <p className="mt-3 text-sm text-secondary">One-time purchase &middot; Lifetime updates &middot; No subscription</p>
              <a href="#waitlist" className="mt-8 group inline-flex items-center gap-2 text-lg font-semibold bg-green-primary text-white pl-10 pr-8 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20">
                Join the waitlist
                <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
              </a>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-secondary bg-white/80 px-5 py-2.5 rounded-full">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-green-primary" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                30-day money-back guarantee — no questions asked
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 border-t border-gray-100">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary text-center leading-tight mb-12">Common questions</h2>
          <div className="space-y-3 max-w-xl mx-auto">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-xl hover:border-green-primary/40 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium text-primary text-sm hover:text-green-primary transition-colors select-none">
                  {q}
                  <span className="text-secondary group-open:rotate-45 transition-transform duration-200 text-xl leading-none shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-secondary leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 sm:py-28 border-t border-gray-100 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Your next role is out there.
            <br /><span className="text-green-primary">Go get it — organised.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            Launching April 2026. $19 once — less than a single coffee-chat lunch. Join the waitlist and we&apos;ll email you on launch day.
          </p>
          <a href="#waitlist" className="mt-10 group inline-flex items-center gap-2 text-lg font-semibold bg-green-primary text-white pl-10 pr-8 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20">
            Join the waitlist
            <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </a>
          <p className="mt-5 text-xs text-secondary">30-day money-back guarantee &middot; One-time purchase &middot; Lifetime updates</p>
          <p className="mt-8 text-sm text-secondary">
            Questions?{" "}<Link href="/about#contact" className="text-green-primary hover:underline font-medium">Get in touch</Link>{" "}&mdash; happy to walk you through what&apos;s coming.
          </p>
        </section>

        <div className="pb-16 pt-8 border-t border-gray-100 text-center">
          <Link href="/templates" className="text-sm text-secondary hover:text-green-primary transition-colors">&larr; Back to all templates</Link>
        </div>
      </main>

      <WaitlistPopup productName="the Job Search OS" price={19} fullPrice={29} />
    </>
  );
}
