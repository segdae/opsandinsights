import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notion Systems — Ops & Insights",
  description:
    "Custom Notion workspaces that actually get used. Project trackers, client portals, knowledge bases, and operating systems built for consultants and solo operators.",
  alternates: { canonical: "/services/notion-systems" },
};

const problems: string[] = [
  "You started with Notion full of enthusiasm. Now it's a graveyard of half-finished pages and abandoned databases.",
  "Your project info lives in Notion, your tasks in Todoist, your notes in Apple Notes, and your CRM in a spreadsheet.",
  "You've tried templates before — they looked great on the demo but didn't match how you actually work.",
  "You spend more time managing your tools than doing the work the tools are supposed to help with.",
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
      <section className="bg-alt py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-sans uppercase tracking-widest text-green-primary font-semibold mb-4">
            Notion Systems
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
            Your Notion workspace has 47 pages. You use 4.
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            I build custom Notion workspaces that consultants, agencies, and
            founders actually use every day. Project trackers, client portals,
            knowledge bases &mdash; systems that work the way you work.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-green-primary text-white rounded-full px-6 py-3 font-semibold hover:bg-green-light transition-colors"
          >
            Let&apos;s build your system &rarr;
          </Link>
          <p className="text-sm text-secondary mt-4">
            I run my entire business on Notion. Every system I build, I&apos;d
            use myself.
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
            The problem isn&apos;t Notion. The problem is building a workspace
            around templates instead of around your workflow. Off-the-shelf
            systems weren&apos;t designed for the way you work.
          </p>
        </div>
      </section>

      {/* What I Build */}
      <section className="bg-alt py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10">
            What I build
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((item): React.ReactElement => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-200 p-6"
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

      {/* Why Custom Beats Templates */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10">
            Why custom beats off-the-shelf
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Generic templates column */}
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-secondary mb-4">
                Generic templates
              </h3>
              <ul className="space-y-3">
                {genericItems.map((item): React.ReactElement => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-secondary text-sm leading-relaxed"
                  >
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-gray-300 shrink-0" />
                    <span className="line-through">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Custom systems column */}
            <div className="rounded-2xl border-2 border-green-primary p-6">
              <h3 className="font-semibold text-green-primary mb-4">
                Custom Notion systems
              </h3>
              <ul className="space-y-3">
                {customItems.map((item): React.ReactElement => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-primary text-sm leading-relaxed"
                  >
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-secondary leading-relaxed mt-8">
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
                <p className="text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready for a Notion workspace that actually works?
          </h2>
          <p className="text-secondary text-lg mb-8">
            Tell me what&apos;s not working. I&apos;ll show you what&apos;s
            possible.
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
