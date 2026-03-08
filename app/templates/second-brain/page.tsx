import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Personal Knowledge Base (Second Brain) — Notion Template | Ops & Insights",
  description:
    "Capture, organise, and retrieve everything you know — with an AI agent that searches, summarises, and delivers a weekly digest. Notion template for knowledge workers. $29 once.",
  alternates: { canonical: "/templates/second-brain" },
  openGraph: {
    title: "Personal Knowledge Base (Second Brain) — Notion Template",
    description:
      "An AI-powered second brain that captures notes, organises by topic, and retrieves what you need in seconds. $29 once. No subscription.",
    url: "/templates/second-brain",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Personal Knowledge Base (Second Brain) — Notion Template",
  description:
    "A Notion knowledge management system with AI Custom Agents for search, summarisation, and weekly knowledge digests.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/second-brain",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    text: "You read 3 articles this morning. By lunchtime, you can't remember a single key takeaway.",
    emphasis: "The knowledge is gone.",
  },
  {
    text: "You saved that brilliant thread to bookmarks six months ago. Now you need it and can't find it.",
    emphasis: "340 bookmarks. Zero retrieval system.",
  },
  {
    text: "You have notes in Apple Notes, Google Docs, Notion, and a paper notebook on your desk.",
    emphasis: "Four places. Nothing connected.",
  },
  {
    text: "A colleague asks for your summary on a topic you researched last quarter. You spend 40 minutes digging through folders.",
    emphasis: "You knew this. You just can't prove it.",
  },
];

const FEATURES = [
  {
    title: "AI search agent",
    description:
      "Ask a question in plain English. The Custom Agent searches your entire knowledge base and returns the answer with source links — no manual tagging required.",
    detail: "Answers in under 10 seconds",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Capture inbox",
    description:
      "One place to dump everything — articles, quotes, ideas, voice notes, meeting takeaways. Process later, capture now. Nothing falls through the cracks.",
    detail: "Zero-friction capture",
    span: "" as const,
  },
  {
    title: "Tag & topic system",
    description:
      "Organise notes by topic, project, and source type. Multi-select tags plus linked databases mean every note lives in context — not in isolation.",
    detail: "Find anything in 2 clicks",
    span: "" as const,
  },
  {
    title: "Weekly digest agent",
    description:
      "Every Sunday, the AI agent compiles a digest of your most recent captures — key themes, connections between notes, and gaps in your knowledge. Delivered to your Notion inbox.",
    detail: "Automated weekly review",
    span: "sm:col-span-2" as const,
  },
  {
    title: "Progressive summarisation",
    description:
      "Highlight the key points of any note in layers — bold, highlight, summary. When you revisit a note months later, the signal is already extracted.",
    detail: "Read once, remember forever",
    span: "" as const,
  },
  {
    title: "Source tracking",
    description:
      "Every note links back to its origin — URL, book, podcast, conversation. When you reference an insight, the source is one click away.",
    detail: "Always cite your sources",
    span: "" as const,
  },
];

const PERSONAS = [
  {
    role: "Knowledge workers",
    description:
      "Drowning in information from meetings, Slack, emails, and research. You consume 50+ pieces of content a week but retain a fraction of it.",
    stat: "Retrieve any insight in under 10 seconds",
  },
  {
    role: "Researchers & students",
    description:
      "Processing papers, lectures, and textbooks across multiple subjects. Your notes exist but finding the connection between them takes longer than reading them did.",
    stat: "AI finds connections you missed",
  },
  {
    role: "Writers & creators",
    description:
      "Collecting ideas, references, and inspiration constantly — but when you sit down to create, you start from scratch instead of building on what you already know.",
    stat: "Turn captured knowledge into finished work",
  },
];

const BEFORE_AFTER = [
  {
    before: "340 bookmarks, can't find any of them",
    after: "Ask the AI agent — answer with source in 10 seconds",
  },
  {
    before: "Notes scattered across 4 apps",
    after: "One capture inbox. Everything in one place.",
  },
  {
    before: "40 minutes digging for a research summary",
    after: "Weekly digest surfaces themes automatically",
  },
  {
    before: "\"I read something about this... somewhere\"",
    after: "Every note linked to its source, tagged by topic",
  },
];

const WHATS_INSIDE = [
  { item: "Knowledge base with tag & topic system", value: "$15" },
  { item: "AI search agent (Custom Agent configuration)", value: "$25" },
  { item: "Weekly digest agent (automated summary)", value: "$20" },
  { item: "Capture inbox with quick-add workflow", value: "$10" },
  { item: "Progressive summarisation framework", value: "$10" },
  { item: "Source tracking with backlinks", value: "$10" },
  { item: "Template gallery (meeting notes, book notes, article notes)", value: "$15" },
  { item: "Setup guide (video + written)", value: "$15" },
  { item: "Lifetime updates — every improvement, free", value: "Priceless" },
];

const FAQS = [
  {
    q: "Do I need a Notion Business plan?",
    a: "The knowledge base, tagging, and capture inbox work on any Notion plan. The AI search agent and weekly digest require Notion Business ($20/user/month) for Custom Agents. You can use the system without agents and upgrade later.",
  },
  {
    q: "How is this different from Notion's built-in search?",
    a: "Notion search finds pages by keyword. The AI agent understands questions — ask \"What did I learn about pricing strategy last quarter?\" and it returns a synthesised answer with source links, not a list of pages.",
  },
  {
    q: "Can I import notes from other apps?",
    a: "Yes. Notion supports imports from Evernote, Google Docs, Markdown files, and more. The capture inbox is designed to be the single entry point — once your notes are in, the system organises them.",
  },
  {
    q: "How long does setup take?",
    a: "The template installs in under 2 minutes. Configuring the AI agents takes another 10 minutes with the included guide. Migrating existing notes depends on volume — most people are fully set up within an afternoon.",
  },
  {
    q: "Is this a Zettelkasten / PARA / CODE system?",
    a: "It borrows the best ideas from all three — atomic notes, progressive summarisation, and a capture-organise-retrieve workflow — without locking you into one rigid methodology. Use the parts that work for you.",
  },
  {
    q: "What if it doesn't work for my workflow?",
    a: "30-day money-back guarantee, no questions asked. If the knowledge base doesn't fit how you think and work, full refund.",
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

/** Stylised knowledge base mockup */
function KnowledgeBaseMockup(): React.ReactElement {
  const notes = [
    { title: "Pricing psychology — anchoring effect", tag: "Marketing", date: "Mar 6" },
    { title: "Transformer architecture notes", tag: "AI/ML", date: "Mar 4" },
    { title: "Meeting: Q1 roadmap review", tag: "Work", date: "Mar 3" },
    { title: "Book: Thinking, Fast and Slow — Ch.7", tag: "Reading", date: "Mar 1" },
  ];

  const tagColors: Record<string, string> = {
    Marketing: "bg-purple-50 text-purple-600",
    "AI/ML": "bg-blue-50 text-blue-600",
    Work: "bg-orange-50 text-orange-600",
    Reading: "bg-green-50 text-green-700",
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
          <span className="ml-3 text-xs font-medium text-secondary tracking-wide">Second Brain</span>
          <span className="ml-auto text-[10px] text-secondary bg-green-subtle px-2 py-0.5 rounded-full">
            247 notes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-gray-100">
          {/* Notes list — left panel */}
          <div className="sm:col-span-3 bg-white p-4 space-y-2">
            {notes.map((note) => (
              <div key={note.title} className="border border-gray-100 rounded-lg p-3 hover:border-green-primary/30 transition-colors">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[12px] font-medium text-primary leading-tight truncate">{note.title}</p>
                  <span className="text-[10px] text-secondary shrink-0">{note.date}</span>
                </div>
                <div className="mt-1.5">
                  <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${tagColors[note.tag]}`}>
                    {note.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AI summary panel — right panel */}
          <div className="sm:col-span-2 bg-green-subtle/30 p-4">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-4 h-4 rounded-full bg-green-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 text-green-primary" aria-hidden="true">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-green-primary uppercase tracking-wider">AI Search</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-3 mb-3">
              <p className="text-[10px] text-secondary italic">&ldquo;What do my notes say about pricing?&rdquo;</p>
            </div>
            <div className="bg-white rounded-lg border border-green-primary/20 p-3">
              <p className="text-[10px] font-medium text-primary mb-1">Summary</p>
              <p className="text-[9px] text-secondary leading-relaxed">
                Your notes reference anchoring effect (Mar 6), decoy pricing from the pricing psychology article, and 3 highlights from Thinking, Fast and Slow on prospect theory...
              </p>
              <p className="text-[9px] text-green-primary font-medium mt-2">3 sources found</p>
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

export default function SecondBrainPage(): React.ReactElement {
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
            <span className="text-primary font-medium">Second Brain</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming April 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Remember everything.{" "}
              <span className="text-green-primary">Retrieve it instantly.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              An AI agent searches your notes and returns answers in seconds.
              A weekly digest surfaces connections you missed. Every idea,
              article, and insight — captured, organised, and retrievable.
              All inside Notion.
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
                AI search &amp; digest agents included
              </span>
            </div>
          </div>

          <KnowledgeBaseMockup />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">

        {/* ──────────────────────────────────────────────────────────────────
            PROBLEM (PAS)
        ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            You consume more information than ever.
            <br />
            <span className="text-secondary/60">You retain almost none of it.</span>
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
            The problem isn&apos;t that you don&apos;t read enough. The problem
            is you have no system to capture, organise, and retrieve what you
            already know.
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
            Capture everything. Retrieve anything.{" "}
            <span className="text-secondary/60">In seconds.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            An AI agent searches your knowledge and returns synthesised answers.
            A weekly digest surfaces patterns. A tagging system keeps every note
            in context.
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
            People who think for a living,{" "}
            <span className="text-secondary/60">not file for a living</span>
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
            You consume 50+ pieces of content a week.
            <br />
            <span className="text-green-light">Without a system, you retain less than 5%.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "50+", label: "articles, threads & notes per week" },
              { number: "2.5", label: "retained without a system" },
              { number: "10s", label: "to retrieve any insight with AI" },
              { number: "1", label: "weekly digest — zero effort" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-3xl font-bold text-green-light">{number}</span>
                <p className="mt-1 text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md">
            The average knowledge worker spends 9.3 hours per week searching for
            information they already have. A second brain cuts that to minutes.
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
                &ldquo;I used to save everything and find nothing. Now I ask the AI agent a question and{" "}
                <span className="text-green-primary">get a synthesised answer with sources in 10 seconds</span>.&rdquo;
              </blockquote>

              <p className="mt-6 text-secondary leading-relaxed max-w-md">
                I built this because my bookmarks folder had 400+ items and I
                couldn&apos;t find a single one when I needed it. This is the
                system I use every day to capture research, meeting notes, and
                ideas — and actually retrieve them when they matter.
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
              One purchase. Your entire knowledge system.{" "}
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
                <span className="text-sm font-bold text-primary">$120+</span>
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
            Your next great idea is buried in your notes.
            <br />
            <span className="text-green-primary">Build the system that finds it.</span>
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

      <WaitlistPopup productName="the Second Brain" price={29} fullPrice={39} />
    </>
  );
}
