import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solution Design — Ops & Insights",
  description:
    "Bespoke architecture for your AI or automation challenge. I scope the problem, design the solution, and produce a spec your team can build from — or I build it.",
  alternates: { canonical: "/services/solution-design" },
};

const problems: { title: string; description: string }[] = [
  {
    title: "No architecture",
    description:
      "Your team has a great idea for AI or automation — but no one can draw the architecture.",
  },
  {
    title: "Already rebuilding",
    description:
      "You've started building without a proper design. Now you're six months in and refactoring.",
  },
  {
    title: "Vendor gap",
    description:
      "The vendor's solution doesn't quite fit. You need someone to bridge the gap between product and reality.",
  },
  {
    title: "No spec, no budget",
    description:
      "You need a technical spec before you can get budget approval — but you don't have the in-house expertise to write one.",
  },
];

const deliverables: { number: string; title: string; description: string }[] = [
  {
    number: "01",
    title: "Technical Architecture",
    description:
      "System diagrams, data flows, and integration points — documented clearly enough for any engineering team to implement.",
  },
  {
    number: "02",
    title: "Implementation Spec",
    description:
      "A detailed spec covering components, dependencies, APIs, data models, and edge cases. Everything your team needs to start building on day one.",
  },
  {
    number: "03",
    title: "Build-or-Brief Decision",
    description:
      "I can hand off the spec to your team, bring in builders I trust, or build it myself. You choose what fits your timeline and budget.",
  },
];

const steps: { title: string; description: string }[] = [
  {
    title: "Scoping",
    description:
      "I work with you to define the problem clearly — what you're trying to achieve, what constraints exist, and what success looks like.",
  },
  {
    title: "Research & Options",
    description:
      "I evaluate technical options, identify trade-offs, and recommend an approach. You'll understand why each decision was made.",
  },
  {
    title: "Architecture & Spec",
    description:
      "I produce the technical architecture and implementation specification — tested against your requirements and edge cases.",
  },
  {
    title: "Review & Handoff",
    description:
      "We walk through the design together. I answer every question until your team is confident they can build it.",
  },
];

const audiences: { title: string; description: string }[] = [
  {
    title: "CTOs & tech leads",
    description:
      "You need an experienced architect for a specific AI or automation challenge — without hiring a full-time senior engineer.",
  },
  {
    title: "Project sponsors",
    description:
      "You need a credible technical spec to get budget approval and de-risk the build before committing resources.",
  },
  {
    title: "Internal innovation teams",
    description:
      "You've identified the opportunity. You need someone who can turn it into a buildable, maintainable system.",
  },
];

const highlights: string[] = [
  "Every design is tested against real edge cases",
  "I write specs I'd be happy to build from myself",
  "You own everything — no proprietary frameworks or lock-in",
];

const stats: { value: string; label: string }[] = [
  { value: "2–6 weeks", label: "Typical design engagement" },
  { value: "Build-ready", label: "Specs any team can implement" },
  { value: "Zero lock-in", label: "You own the architecture" },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How is this different from hiring a solutions architect?",
    answer:
      "You get senior-level architecture expertise for a defined engagement — no recruitment, no onboarding, no ongoing salary. I'm in, I deliver, I hand off.",
  },
  {
    question: "What if we don't have a technical team to build from the spec?",
    answer:
      "I can either build it myself or recommend trusted builders. The spec is designed to be implementable by any competent engineering team.",
  },
  {
    question: "How long does solution design take?",
    answer:
      "Typically 2–6 weeks depending on complexity. Simple integrations on the shorter end, enterprise AI systems on the longer end.",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer:
      "Yes. I design around your constraints — existing tools, platforms, security requirements, and team capabilities. No greenfield assumptions.",
  },
];

export default function SolutionDesignPage(): React.ReactElement {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-sans uppercase tracking-widest text-green-primary font-semibold mb-4">
            Solution Design
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
            The gap between idea and implementation is architecture.
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            You have an AI or automation challenge. I scope the problem, design
            the architecture, and produce a spec your team can build from — or I
            build it myself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about#contact"
              className="inline-block bg-green-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-light transition-colors"
            >
              Describe your challenge &rarr;
            </Link>
            <Link
              href="#how-it-works"
              className="inline-block border border-gray-300 text-primary rounded-lg px-6 py-3 font-semibold hover:border-gray-400 transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="text-sm text-secondary mt-6">
            Senior Consultant at EY &middot; AI &amp; Intelligent Automation
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            When the architecture is wrong, everything is wrong
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {problems.map((problem): React.ReactElement => (
              <div
                key={problem.title}
                className="shadow-sm rounded-xl border border-gray-100 p-6"
              >
                <h3 className="font-semibold text-primary mb-2">
                  {problem.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-secondary text-lg leading-relaxed mt-12 text-center max-w-2xl mx-auto">
            Bad architecture doesn&apos;t fail loudly. It fails slowly — in
            maintenance costs, missed deadlines, and systems that can&apos;t
            scale past the pilot.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-14 text-center">
            What you get
          </h2>
          <div className="space-y-12">
            {deliverables.map((item): React.ReactElement => (
              <div key={item.title} className="flex gap-6">
                <span className="font-mono text-5xl font-bold text-primary/5 leading-none shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-14 text-center">
            From ambiguity to architecture
          </h2>
          <div className="grid gap-10 sm:grid-cols-2">
            {steps.map((step, index): React.ReactElement => (
              <div key={step.title}>
                <span className="font-mono text-5xl font-bold text-primary/5 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-lg text-primary mt-3 mb-1">
                  {step.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Not a slide deck. A blueprint.
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-10">
            Most consultancies deliver strategy decks. I deliver architecture you
            can build from. Every solution design includes system diagrams, data
            models, API specifications, and implementation notes — written by
            someone who builds these systems, not someone who only reviews them.
          </p>
          <ul className="space-y-4">
            {highlights.map((highlight): React.ReactElement => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-green-primary shrink-0" />
                <span className="text-primary leading-relaxed">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Who this is for
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {audiences.map((audience): React.ReactElement => (
              <div
                key={audience.title}
                className="shadow-sm rounded-xl border border-gray-100 p-6"
              >
                <h3 className="font-semibold text-lg text-primary mb-2">
                  {audience.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Stats */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            {stats.map((stat): React.ReactElement => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-secondary text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Common questions
          </h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq): React.ReactElement => (
              <div key={faq.question} className="py-6">
                <h3 className="font-semibold text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Have a challenge that needs architecture?
          </h2>
          <p className="text-secondary text-lg mb-10">
            Describe what you&apos;re trying to build. I&apos;ll tell you how
            I&apos;d approach it.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-green-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-light transition-colors"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
