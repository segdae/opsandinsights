import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Strategy & Consulting — Ops & Insights",
  description:
    "Move from AI curiosity to working solutions. I map where AI creates real leverage, cut through the hype, and give you a clear implementation path.",
  alternates: { canonical: "/services/ai-strategy" },
};

const problems: string[] = [
  "Your leadership team talks about AI weekly — but nothing ships.",
  "You've run pilots that impressed in demos and died in production.",
  "Every vendor says their tool is the answer. You can't tell who's right.",
  "You're spending on AI initiatives with no clear way to measure return.",
];

const deliverables: { number: string; title: string; description: string }[] = [
  {
    number: "1",
    title: "AI Opportunity Map",
    description:
      "A prioritised view of where AI creates real leverage in your organisation — ranked by impact, feasibility, and time to value.",
  },
  {
    number: "2",
    title: "Implementation Roadmap",
    description:
      "A phased plan with clear milestones, resource requirements, and decision points. Not a slide deck — a working document your team can execute.",
  },
  {
    number: "3",
    title: "Vendor & Tool Guidance",
    description:
      "Independent assessment of which tools, platforms, and partners fit your situation. No affiliate deals, no bias — just what works.",
  },
];

const steps: { title: string; description: string }[] = [
  {
    title: "Discovery",
    description:
      "I spend time with your team understanding the business, current tech stack, and where the real friction lives.",
  },
  {
    title: "Opportunity Mapping",
    description:
      "I identify where AI creates genuine leverage — not where it sounds impressive, but where it moves numbers.",
  },
  {
    title: "Strategy & Roadmap",
    description:
      "You get a prioritised implementation plan with clear phases, costs, and expected outcomes.",
  },
  {
    title: "Handoff or Build",
    description:
      "I either hand off the roadmap to your team or stay on to build it. Your call.",
  },
];

const audiences: { title: string; description: string }[] = [
  {
    title: "Enterprise teams",
    description:
      "You have budget and ambition but need someone who's done this before to cut through internal politics and vendor noise.",
  },
  {
    title: "SMEs",
    description:
      "You can't afford to waste your first AI investment. You need the right use case, the right tool, and a plan that fits your resources.",
  },
  {
    title: "Consulting firms",
    description:
      "Your clients are asking about AI. You need a delivery partner who can go deep on implementation, not just strategy slides.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How long does an engagement typically take?",
    answer:
      "Most strategy engagements run 4\u20138 weeks depending on scope. You'll have a working roadmap, not a year-long consulting project.",
  },
  {
    question: "Do you only work with large enterprises?",
    answer:
      "No. I work with organisations of all sizes. The approach scales — what changes is the depth and breadth of the opportunity mapping.",
  },
  {
    question: "What if we already have an AI strategy?",
    answer:
      "Good. I can audit it, pressure-test the assumptions, and fill the gaps between strategy and execution.",
  },
  {
    question: "Can you also build the solutions?",
    answer:
      "Yes. I design and build AI and automation systems end-to-end. Strategy is often the starting point, not the end.",
  },
];

export default function AIStrategyPage(): React.ReactElement {
  return (
    <main>
      {/* Hero */}
      <section className="bg-alt py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-sans uppercase tracking-widest text-green-primary font-semibold mb-4">
            AI Strategy &amp; Consulting
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
            Stop exploring AI. Start deploying it.
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            Most organisations know AI matters. Few know where it actually
            creates leverage. I map the opportunities, cut through the hype, and
            build a clear path from strategy to working system.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-green-primary text-white rounded-full px-6 py-3 font-semibold hover:bg-green-light transition-colors"
          >
            Let&apos;s talk about your AI strategy &rarr;
          </Link>
          <p className="text-sm text-secondary mt-4">
            Senior Consultant at EY &middot; AI &amp; Intelligent Automation
          </p>
        </div>
      </section>

      {/* Problem (PAS) */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10">
            Sound familiar?
          </h2>
          <div className="space-y-4 mb-8">
            {problems.map((problem): React.ReactElement => (
              <div
                key={problem}
                className="border-l-2 border-green-primary pl-5 py-3 bg-alt rounded-r-2xl"
              >
                <p className="text-primary leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
          <p className="text-secondary text-lg leading-relaxed">
            Without a clear strategy, AI spend becomes AI waste. And your
            competitors aren&apos;t waiting.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-alt py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10">
            What you get
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {deliverables.map((item): React.ReactElement => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="w-10 h-10 rounded-full bg-green-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                  {item.number}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10">
            How it works
          </h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {steps.map((step, index): React.ReactElement => (
                <div key={step.title} className="relative pl-14">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-green-primary text-white flex items-center justify-center font-bold text-lg z-10">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-alt py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10">
            Who this is for
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {audiences.map((audience): React.ReactElement => (
              <div
                key={audience.title}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
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

      {/* Why Me */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Why work with me
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            I&apos;m not a strategy consultant who hands you a PDF and
            disappears. I&apos;m an engineer who builds AI and automation
            systems every day at EY. I&apos;ve seen what works inside large
            organisations — and what doesn&apos;t. You get someone who can draw
            the architecture on a whiteboard and write the code that runs it.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-alt py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10">
            Common questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq): React.ReactElement => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to turn AI ambition into AI results?
          </h2>
          <p className="text-secondary text-lg mb-8">
            One conversation is usually enough to know if I can help.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-green-primary text-white rounded-full px-6 py-3 font-semibold hover:bg-green-light transition-colors"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
