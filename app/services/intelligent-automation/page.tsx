import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intelligent Automation — Ops & Insights",
  description:
    "End-to-end design and delivery of automation systems — from document intelligence pipelines to multi-step agentic workflows. Built to last, not just to demo.",
  alternates: { canonical: "/services/intelligent-automation" },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const problems: { title: string; description: string }[] = [
  {
    title: "Repetitive data work",
    description:
      "Your team spends hours on data entry, document processing, or report generation that follows the same pattern every time.",
  },
  {
    title: "Broken automations",
    description:
      "You\u2019ve tried automating before \u2014 the RPA bot broke after two weeks and nobody fixed it.",
  },
  {
    title: "Inbox bottlenecks",
    description:
      "Processes that should take minutes take days because they\u2019re stuck waiting in someone\u2019s inbox.",
  },
  {
    title: "Hiring for volume",
    description:
      "You\u2019re hiring people to handle volume when you should be building systems to handle it.",
  },
];

const capabilities: { title: string; description: string }[] = [
  {
    title: "Document Intelligence",
    description:
      "Extract, classify, and route information from invoices, contracts, emails, and forms. No more manual data entry from PDFs.",
  },
  {
    title: "Agentic Workflows",
    description:
      "Multi-step AI agents that make decisions, call APIs, and complete tasks end-to-end \u2014 not just chatbots, but systems that do real work.",
  },
  {
    title: "Process Automation",
    description:
      "End-to-end automation of business processes using n8n, APIs, and custom integrations. Designed for reliability, not just demos.",
  },
  {
    title: "Integration Pipelines",
    description:
      "Connect your tools \u2014 CRM, ERP, document stores, communication platforms \u2014 into workflows that move data where it needs to go, when it needs to go there.",
  },
];

const steps: { label: string; title: string; description: string }[] = [
  {
    label: "01",
    title: "Process Audit",
    description:
      "I map your current workflows, measure the time and cost, and identify the highest-value automation opportunities.",
  },
  {
    label: "02",
    title: "Solution Design",
    description:
      "I architect the automation \u2014 choosing the right tools, defining the logic, and planning for edge cases your team deals with daily.",
  },
  {
    label: "03",
    title: "Build & Test",
    description:
      "I build the system, test it against real data, and iterate until it handles your actual workload \u2014 not just a demo dataset.",
  },
  {
    label: "04",
    title: "Deploy & Support",
    description:
      "I deploy to production, train your team, and provide documentation that means you\u2019re never locked into needing me.",
  },
];

const comparisonRows: { usual: string; deliver: string }[] = [
  {
    usual: "RPA bot that breaks when a form changes",
    deliver: "Systems designed for real-world variability",
  },
  {
    usual: "Demo that works on 5 test documents",
    deliver: "Tested against your actual data and edge cases",
  },
  {
    usual: "Automation that needs constant maintenance",
    deliver: "Self-healing pipelines with error handling built in",
  },
  {
    usual: "Vendor lock-in with no documentation",
    deliver: "Full documentation and knowledge transfer",
  },
];

const audiences: { title: string; description: string }[] = [
  {
    title: "Operations teams",
    description:
      "You\u2019re processing high volumes of documents, data, or requests and need systems that scale without adding headcount.",
  },
  {
    title: "Finance & legal",
    description:
      "Compliance checks, invoice processing, contract review \u2014 processes that demand accuracy and eat your team\u2019s time.",
  },
  {
    title: "Professional services",
    description:
      "You bill for expertise, not admin. Every hour spent on manual ops is an hour you can\u2019t bill a client.",
  },
];

const proofPoints: { stat: string; label: string }[] = [
  { stat: "2\u201312 weeks", label: "From simple to complex" },
  { stat: "Production-grade", label: "Built for real workloads" },
  { stat: "Full handoff", label: "Documentation + training" },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "What tools do you use?",
    answer:
      "It depends on the problem. n8n for workflow orchestration, Python for custom logic, various APIs and AI models for intelligence. I\u2019m tool-agnostic \u2014 I pick what fits.",
  },
  {
    question: "How long does a typical automation project take?",
    answer:
      "Simple automations: 2\u20134 weeks. Complex multi-step systems: 6\u201312 weeks. You\u2019ll see working output within the first sprint.",
  },
  {
    question: "Will my team be able to maintain it?",
    answer:
      "Yes. I build with maintenance in mind \u2014 clear documentation, modular design, and training for your team. You own it completely.",
  },
  {
    question: "What if our processes are messy and undocumented?",
    answer:
      "That\u2019s normal. The process audit phase handles this. I\u2019ll map what actually happens, not what the SOP says should happen.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function IntelligentAutomationPage(): React.ReactElement {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-primary">
            Intelligent Automation
          </p>

          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-primary md:text-5xl">
            Your team is doing work a machine should handle.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary">
            I design and deliver automation systems that actually survive
            contact with production&nbsp;&mdash; from document intelligence
            pipelines to multi-step agentic workflows.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/about#contact"
              className="inline-block rounded-lg bg-green-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-light"
            >
              Tell me what you want to automate &rarr;
            </Link>
            <Link
              href="#how-it-works"
              className="inline-block rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-gray-50"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-8 text-sm text-secondary">
            Senior Consultant at EY&nbsp;&middot; AI &amp; Intelligent
            Automation
          </p>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary">
              The real cost of manual work
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-secondary">{p.description}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-relaxed text-primary">
            Every month you run manual processes is another month of
            compounding cost&nbsp;&mdash; in salary, in errors, and in
            opportunities you can&rsquo;t pursue because your team is buried
            in busywork.
          </p>
        </div>
      </section>

      {/* ── What I Build ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary">
              What I build
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {cap.title}
                </h3>
                <p className="mt-3 text-secondary">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary">
              From problem to production
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.label} className="relative">
                <span className="font-mono text-5xl font-bold text-green-primary/5">
                  {step.label}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary">
              Built to last, not just to demo
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-2 border-b border-gray-100 bg-gray-50">
              <div className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-secondary">
                What you usually get
              </div>
              <div className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-green-primary">
                What I deliver
              </div>
            </div>

            {/* Table rows */}
            <div className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <div key={row.usual} className="grid grid-cols-2">
                  <div className="flex items-start gap-3 px-6 py-5">
                    <span className="mt-0.5 shrink-0 text-secondary">
                      &times;
                    </span>
                    <span className="text-secondary line-through">
                      {row.usual}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-5">
                    <span className="mt-0.5 shrink-0 font-bold text-green-primary">
                      &#10003;
                    </span>
                    <span className="font-medium text-primary">
                      {row.deliver}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary">
              Who this is for
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {a.title}
                </h3>
                <p className="mt-3 text-secondary">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="grid gap-8 sm:grid-cols-3">
            {proofPoints.map((p) => (
              <div key={p.stat} className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">
                  {p.stat}
                </p>
                <p className="mt-2 text-sm text-secondary">{p.label}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-secondary">
            I&rsquo;ve designed and delivered automation systems across
            document processing, financial operations, and enterprise
            workflows. Every build is production-grade and fully handed over.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary">
              Common questions
            </h2>
          </div>

          <div className="mt-12 divide-y divide-gray-100">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-2 text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl">
            Stop paying people to do what machines do better.
          </h2>

          <p className="mt-4 text-lg text-secondary">
            Tell me what&rsquo;s eating your team&rsquo;s time. I&rsquo;ll
            tell you if it can be automated.
          </p>

          <Link
            href="/about#contact"
            className="mt-8 inline-block rounded-lg bg-green-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-light"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
