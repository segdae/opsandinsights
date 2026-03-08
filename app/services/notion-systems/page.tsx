import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notion Systems — Ops & Insights",
  description:
    "Custom Notion workspaces that actually get used. Project trackers, client portals, knowledge bases, and operating systems built for consultants and solo operators.",
  alternates: { canonical: "/services/notion-systems" },
};

const problems: { title: string; description: string }[] = [
  {
    title: "The graveyard workspace",
    description:
      "You started with Notion full of enthusiasm. Now it's a graveyard of half-finished pages and abandoned databases.",
  },
  {
    title: "Tools everywhere",
    description:
      "Your project info lives in Notion, your tasks in Todoist, your notes in Apple Notes, and your CRM in a spreadsheet.",
  },
  {
    title: "Templates that don't fit",
    description:
      "You've tried templates before — they looked great on the demo but didn't match how you actually work.",
  },
  {
    title: "Managing the tools",
    description:
      "You spend more time managing your tools than doing the work the tools are supposed to help with.",
  },
];

const capabilities: { title: string; description: string }[] = [
  {
    title: "Project Trackers",
    description:
      "Track every project, deadline, and deliverable in one view. Built for consultants managing multiple clients simultaneously.",
  },
  {
    title: "Client Portals",
    description:
      "Give your clients a clean, professional window into project status — without giving them access to your internal chaos.",
  },
  {
    title: "Knowledge Bases",
    description:
      "Capture what your team knows before they forget it. SOPs, processes, and institutional knowledge — searchable and maintained.",
  },
  {
    title: "Operating Systems",
    description:
      "A single workspace that connects your projects, tasks, notes, finances, and goals. One place for everything that matters.",
  },
];

const steps: { title: string; description: string }[] = [
  {
    title: "Workflow Audit",
    description:
      "I learn how you actually work — not how you think you should work. What tools do you use? Where does information get stuck?",
  },
  {
    title: "System Design",
    description:
      "I design the workspace around your workflows — databases, views, automations, and integrations. Every element earns its place.",
  },
  {
    title: "Build & Iterate",
    description:
      "I build the system and test it with your real data. You use it for a week. We adjust what needs adjusting.",
  },
  {
    title: "Handoff & Training",
    description:
      "You get a workspace you understand, documentation you can reference, and enough knowledge to maintain and extend it yourself.",
  },
];

const audiences: { title: string; description: string }[] = [
  {
    title: "Consultants",
    description:
      "You manage multiple clients, projects, and deliverables. You need one system that keeps everything visible without constant maintenance.",
  },
  {
    title: "Agencies",
    description:
      "Your team needs shared project tracking, client visibility, and knowledge management that scales as you grow.",
  },
  {
    title: "Founders",
    description:
      "You're running everything yourself. You need a personal operating system that handles projects, tasks, finances, and goals in one place.",
  },
];

const genericItems: string[] = [
  "Designed for everyone, fits no one perfectly",
  "You adapt your workflow to the template",
  "Breaks down when your needs evolve",
  "No support when things stop working",
];

const customItems: string[] = [
  "Designed around how you actually work",
  "The system adapts to your workflow",
  "Built to grow with your business",
  "Full documentation and training included",
];

const stats: { value: string; label: string }[] = [
  { value: "Custom-built", label: "Designed around your workflow" },
  { value: "Full training", label: "You maintain it yourself" },
  { value: "Data migration", label: "From any tool into Notion" },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How much does a custom Notion build cost?",
    answer:
      "It depends on complexity. A focused project tracker is a smaller engagement than a full operating system. I'll scope it after our first conversation and give you a clear quote.",
  },
  {
    question: "Do I need Notion Business or Enterprise?",
    answer:
      "For most solo consultants and small teams, Notion Plus is enough. I'll advise on the right plan based on what we're building.",
  },
  {
    question: "Can you migrate my data from other tools?",
    answer:
      "Yes. I've migrated data from spreadsheets, Trello, Asana, Airtable, and various CRMs into Notion. It's part of the build process.",
  },
  {
    question: "What if I need changes after the build?",
    answer:
      "The system is yours — you'll have the knowledge to make changes yourself. If you want ongoing support, we can arrange that separately.",
  },
];

export default function NotionSystemsPage(): React.ReactElement {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-sans uppercase tracking-widest text-green-primary font-semibold mb-5">
            Notion Systems
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
            Your Notion workspace has 47&nbsp;pages. You use&nbsp;4.
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            I build custom Notion workspaces that consultants, agencies, and
            founders actually use every day. Project trackers, client portals,
            knowledge bases &mdash; systems that work the way you work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about#contact"
              className="inline-block bg-green-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-light transition-colors"
            >
              Let&apos;s build your system &rarr;
            </Link>
            <Link
              href="#how-it-works"
              className="inline-block border border-gray-300 text-primary rounded-lg px-6 py-3 font-semibold hover:border-gray-400 transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="text-sm text-secondary mt-6">
            I run my entire business on Notion. Every system I build, I&apos;d
            use myself.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Sound familiar?
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
                <p className="text-secondary text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-secondary text-lg leading-relaxed mt-12 text-center max-w-2xl mx-auto">
            The problem isn&apos;t Notion. The problem is building a workspace
            around templates instead of around your workflow. Off-the-shelf
            systems weren&apos;t designed for the way you work.
          </p>
        </div>
      </section>

      {/* What I Build */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What I build
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((item): React.ReactElement => (
              <div
                key={item.title}
                className="bg-white shadow-sm rounded-xl border border-gray-100 p-6"
              >
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
      <section id="how-it-works" className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
            How it works
          </h2>
          <div className="grid gap-12 sm:grid-cols-2">
            {steps.map((step, index): React.ReactElement => (
              <div key={step.title} className="relative">
                <span className="font-mono text-5xl font-bold text-primary/5 leading-none block mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
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

      {/* Comparison Table */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Why custom beats off-the-shelf
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Generic templates column */}
            <div>
              <h3 className="font-semibold text-secondary mb-6 text-sm uppercase tracking-wide">
                Generic templates
              </h3>
              <div className="divide-y divide-gray-100">
                {genericItems.map((item): React.ReactElement => (
                  <div key={item} className="py-4 flex items-start gap-3">
                    <span className="text-gray-300 mt-0.5 shrink-0">
                      &times;
                    </span>
                    <span className="text-secondary text-sm line-through">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Custom systems column */}
            <div>
              <h3 className="font-semibold text-green-primary mb-6 text-sm uppercase tracking-wide">
                Custom Notion systems
              </h3>
              <div className="divide-y divide-gray-100">
                {customItems.map((item): React.ReactElement => (
                  <div key={item} className="py-4 flex items-start gap-3">
                    <span className="text-green-primary mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <span className="text-primary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-secondary leading-relaxed mt-12 text-center">
            Want something between a template and a custom build? Check out my{" "}
            <Link
              href="/templates"
              className="text-green-primary underline hover:text-green-light transition-colors"
            >
              Notion templates
            </Link>{" "}
            &mdash; pre-built systems designed for common consulting workflows.
          </p>
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
                className="bg-white shadow-sm rounded-xl border border-gray-100 p-6"
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

      {/* Proof Stats */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {stats.map((stat): React.ReactElement => (
              <div key={stat.value}>
                <p className="font-serif text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-secondary mt-2 uppercase tracking-wide">
                  {stat.label}
                </p>
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
                <p className="text-secondary leading-relaxed">
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
            Ready for a Notion workspace that actually works?
          </h2>
          <p className="text-secondary text-lg mb-10">
            Tell me what&apos;s not working. I&apos;ll show you what&apos;s
            possible.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-green-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-light transition-colors"
          >
            Get in touch &rarr;
          </Link>
          <p className="text-sm text-secondary mt-6">
            Or browse my{" "}
            <Link
              href="/templates"
              className="text-green-primary underline hover:text-green-light transition-colors"
            >
              Notion templates
            </Link>{" "}
            for ready-made systems.
          </p>
        </div>
      </section>
    </main>
  );
}
