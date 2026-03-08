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
    number: "01",
    title: "AI Opportunity Map",
    description:
      "A prioritised view of where AI creates real leverage in your organisation — ranked by impact, feasibility, and time to value.",
  },
  {
    number: "02",
    title: "Implementation Roadmap",
    description:
      "A phased plan with clear milestones, resource requirements, and decision points. Not a slide deck — a working document your team can execute.",
  },
  {
    number: "03",
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

const comparisons: { oldWay: string; newWay: string }[] = [
  {
    oldWay: "Strategy deck that sits in a drawer",
    newWay: "Implementation roadmap your team can execute",
  },
  {
    oldWay: "Vendor-influenced recommendations",
    newWay: "Independent, tool-agnostic guidance",
  },
  {
    oldWay: "Months of analysis before any output",
    newWay: "Working deliverables within weeks",
  },
  {
    oldWay: "Consultant disappears after handoff",
    newWay: "Option to stay and build what I designed",
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

const stats: { value: string; label: string }[] = [
  { value: "4\u20138 weeks", label: "Typical engagement" },
  { value: "100%", label: "Clients own everything" },
  { value: "End-to-end", label: "Strategy through to build" },
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
      <section className="bg-gray-50 py-20 md:py-28">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/about#contact"
              className="inline-block bg-green-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-light transition-colors"
            >
              Talk to me about AI strategy &rarr;
            </Link>
            <a
              href="#how-it-works"
              className="inline-block border border-gray-200 text-primary rounded-lg px-6 py-3 font-semibold hover:bg-white transition-colors"
            >
              See how it works &darr;
            </a>
          </div>
          <p className="text-sm text-secondary">
            Senior Consultant at EY &middot; AI &amp; Intelligent Automation
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-primary mb-10">
            Sound familiar?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem): React.ReactElement => (
              <div
                key={problem}
                className="shadow-sm rounded-xl p-6 bg-white border border-gray-100"
              >
                <p className="text-primary leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
          <p className="text-secondary text-lg leading-relaxed mt-8">
            Without a clear strategy, AI spend becomes AI waste. And your
            competitors aren&apos;t waiting.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-primary mb-12">
            What you get
          </h2>
          <div className="space-y-10">
            {deliverables.map((item): React.ReactElement => (
              <div key={item.title} className="flex gap-6 items-start">
                <span className="font-mono text-5xl font-bold text-primary/5 leading-none shrink-0 select-none">
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
          <h2 className="font-serif text-3xl font-bold text-primary mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index): React.ReactElement => (
              <div key={step.title} className="relative">
                <span className="font-mono text-5xl font-bold text-primary/5 leading-none block mb-3 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-lg text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-0 translate-x-1/2 text-gray-200 text-2xl select-none">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-primary mb-10">
            The old way vs working with me
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-100">
            {/* Header row */}
            <div className="grid grid-cols-2">
              <div className="bg-white px-6 py-4 border-b border-gray-100">
                <p className="font-semibold text-secondary text-sm">
                  The usual approach
                </p>
              </div>
              <div className="bg-green-subtle px-6 py-4 border-b border-green-primary/20">
                <p className="font-semibold text-green-primary text-sm">
                  Working with me
                </p>
              </div>
            </div>
            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {comparisons.map((row, index): React.ReactElement => (
                <div
                  key={row.oldWay}
                  className={`grid grid-cols-2 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <div className="px-6 py-5 text-secondary text-sm leading-relaxed">
                    {row.oldWay}
                  </div>
                  <div className="px-6 py-5 bg-green-subtle/40 text-primary text-sm leading-relaxed font-medium">
                    {row.newWay}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-primary mb-10">
            Who this is for
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {audiences.map((audience): React.ReactElement => (
              <div
                key={audience.title}
                className="shadow-sm rounded-xl p-6 bg-white border border-gray-100"
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

      {/* Proof / Authority */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 text-center">
            {stats.map((stat): React.ReactElement => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-secondary text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-secondary text-lg leading-relaxed text-center max-w-2xl mx-auto">
            I&apos;m not a strategy consultant who hands you a PDF and
            disappears. I&apos;m an engineer who builds AI and automation
            systems every day at EY. I&apos;ve seen what works inside large
            organisations — and what doesn&apos;t. You get someone who can draw
            the architecture on a whiteboard and write the code that runs it.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-primary mb-10">
            Common questions
          </h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq): React.ReactElement => (
              <div key={faq.question} className="py-6">
                <h3 className="font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="text-secondary leading-relaxed mt-2">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to turn AI ambition into AI results?
          </h2>
          <p className="text-secondary text-lg mb-8">
            One conversation is usually enough to know if I can help.
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
