import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { getCvEntries, getSiteSettings } from "@/sanity/lib/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About — Shea Campbell | Ops & Insights",
  description:
    "Shea Campbell — AI Engineer at EY, founder of AutoWorkLabs and Ops & Insights. Career history, entrepreneurial ventures, and skills.",
  alternates: { canonical: "/about" },
};

/* ═══════════════════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════════════════ */

type CvEntry = {
  _id: string;
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
  skills?: string[];
};

type SiteSettings = {
  authorName: string;
  authorRole: string;
  linkedinUrl?: string;
};

type DisplayEntry = {
  key: string;
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
  skills?: string[];
};

/* ═══════════════════════════════════════════════════════════════════════════
   Date helpers
   ═══════════════════════════════════════════════════════════════════════════ */

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function fmtMonthYear(dateStr: string): string {
  const [year, month] = dateStr.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

function fmtDateRange(start: string, end?: string): string {
  return end
    ? `${fmtMonthYear(start)} – ${fmtMonthYear(end)}`
    : `${fmtMonthYear(start)} – Present`;
}

/* ═══════════════════════════════════════════════════════════════════════════
   Static data
   ═══════════════════════════════════════════════════════════════════════════ */

const KEY_SKILLS = [
  "Generative AI Fundamentals",
  "Certified Scrum Master",
  "Databricks Fundamentals",
  "UiPath BA Associate",
  "BCS Business Processes",
  "Power Automate",
  "Azure AI",
  "Python",
];

const EXPERIENCE_FALLBACK: Omit<DisplayEntry, "key">[] = [
  {
    role: "AI Engineer, Intelligent Automation",
    company: "EY",
    startDate: "2025-04-01",
    description:
      "Building AI-powered automation solutions for enterprise clients. Leading delivery of intelligent document processing and agentic AI workflows.",
    skills: ["Azure AI", "Power Automate", "Python", "AI Agents"],
  },
  {
    role: "Automation Specialist",
    company: "OpsKings",
    startDate: "2024-04-01",
    endDate: "2025-03-01",
    description:
      "Led 30+ automation engagements for SME and enterprise clients. Helped grow the company 3\u20134\u00d7 through delivery excellence and client referrals.",
    skills: ["Power Automate", "Make.com", "Zapier", "n8n"],
  },
  {
    role: "Founder & Lead Engineer",
    company: "AutoWorkLabs",
    startDate: "2023-11-01",
    endDate: "2024-12-01",
    description:
      "Built and launched NotionTalent.com (12,000+ organisations). Delivered automation systems for 42 clients across consulting, legal, and SaaS.",
    skills: ["Notion API", "Python", "Make.com", "Webflow"],
  },
  {
    role: "Consultant",
    company: "Deloitte",
    startDate: "2021-06-01",
    endDate: "2023-12-01",
    description:
      "Delivered technology and transformation projects for Google, JLR, Virgin Media, Barclays, and Network Rail.",
    skills: ["Business Analysis", "Agile", "Stakeholder Management"],
  },
  {
    role: "Business Intelligence Analyst",
    company: "Keysight Technologies",
    startDate: "2019-01-01",
    endDate: "2019-08-01",
    description:
      "Data analytics and BI reporting for global sales operations. Based in Barcelona.",
    skills: ["Power BI", "SQL", "Excel"],
  },
];

const VENTURES = [
  {
    name: "Ops & Insights",
    role: "Founder",
    period: "2025 – Present",
    description:
      "Personal brand and digital product business. Notion templates with AI agents, content on AI implementation, and consulting services for organisations adopting AI.",
    link: "https://opsandinsights.com",
  },
  {
    name: "AutoWorkLabs",
    role: "Founder & Lead Engineer",
    period: "2023 – 2024",
    description:
      "Automation consultancy serving 42 clients across consulting, legal, and SaaS. Built and launched NotionTalent.com, a Notion consultant marketplace used by 12,000+ organisations.",
    link: null,
  },
];

const EDUCATION = [
  {
    degree: "MBA",
    institution: "Queen's University Belfast",
    years: "2020 – 2021",
  },
  {
    degree: "BSc International Business",
    institution: "Sheffield Hallam University",
    years: "2016 – 2020",
  },
  {
    degree: "Erasmus Exchange",
    institution: "Universidad de Alicante",
    years: "2018",
  },
];

const LANGUAGES = [
  { language: "English", level: "Native" },
  { language: "French", level: "Professional" },
  { language: "Spanish", level: "Professional" },
];

const LINKEDIN_URL =
  "https://www.linkedin.com/in/s%C3%A9gd%C3%A1e-shay-campbell/";

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function AboutPage(): Promise<React.ReactElement> {
  const [entries, settings] = await Promise.all([
    sanityFetch<CvEntry[]>({ query: getCvEntries }),
    sanityFetch<SiteSettings | null>({ query: getSiteSettings }),
  ]);

  const name = settings?.authorName ?? "Shea Campbell";
  const role =
    settings?.authorRole ?? "AI Engineer, Intelligent Automation";
  const linkedinUrl = settings?.linkedinUrl ?? LINKEDIN_URL;

  const displayEntries: DisplayEntry[] =
    entries.length > 0
      ? entries.map((e) => ({ ...e, key: e._id }))
      : EXPERIENCE_FALLBACK.map((e, i) => ({ ...e, key: String(i) }));

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        {name}
      </h1>
      <p className="mt-2 text-lg text-secondary">{role}</p>

      {/* Credential pill */}
      <span className="mt-3 inline-block text-xs font-medium uppercase tracking-widest bg-green-subtle text-green-primary px-3 py-1 rounded-full">
        EY
      </span>

      {/* ── Bio ─────────────────────────────────────────────────────────── */}
      <div className="mt-8 space-y-5 text-primary leading-relaxed">
        <p>
          I&apos;m Shea &mdash; I help large organisations turn AI strategy into
          working systems. From document intelligence pipelines to enterprise
          automation platforms, I build AI-powered solutions that ship, not just
          demo.
        </p>
        <p>
          Outside of client work, I run{" "}
          <a
            href="https://opsandinsights.com"
            className="text-green-primary hover:text-green-light transition-colors"
          >
            Ops &amp; Insights
          </a>{" "}
          &mdash; building Notion templates with AI agents, writing about what
          actually works in AI implementation, and consulting for teams adopting
          automation.
        </p>
      </div>

      {/* ── CTAs ────────────────────────────────────────────────────────── */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
        >
          Connect on LinkedIn
        </a>
        <a
          href="https://github.com/segdae"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium border border-gray-300 text-primary px-5 py-2.5 rounded-full hover:border-green-primary hover:text-green-primary transition-colors"
        >
          GitHub
        </a>
      </div>

      {/* ── Key skills / certs ──────────────────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-primary mb-4">
          Skills &amp; certifications
        </h2>
        <div className="flex flex-wrap gap-2">
          {KEY_SKILLS.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-green-subtle text-green-primary px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-primary mb-10">
          Experience
        </h2>

        <div className="ml-1.5 border-l border-gray-200 pl-6 space-y-10">
          {displayEntries.map((entry) => (
            <div key={entry.key} className="relative">
              <div className="absolute -left-[1.875rem] top-1 w-3 h-3 rounded-full bg-green-primary ring-2 ring-white" />

              <p className="font-semibold text-primary leading-snug">
                {entry.role}
              </p>
              <p className="text-sm text-secondary mt-0.5">
                {entry.company}
                {" \u00b7 "}
                {fmtDateRange(entry.startDate, entry.endDate)}
              </p>

              {entry.description && (
                <p className="mt-3 text-sm text-primary leading-relaxed">
                  {entry.description}
                </p>
              )}

              {entry.skills && entry.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-gray-100 text-secondary px-2 py-0.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Entrepreneurial ventures ────────────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-primary mb-6">
          Ventures
        </h2>

        <div className="space-y-6">
          {VENTURES.map((v) => (
            <div
              key={v.name}
              className="border border-gray-200 rounded-2xl px-6 py-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-primary">{v.name}</p>
                  <p className="text-sm text-secondary mt-0.5">
                    {v.role} &middot; {v.period}
                  </p>
                </div>
                {v.link && (
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-green-primary transition-colors text-lg leading-none shrink-0"
                  >
                    &rarr;
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm text-primary leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ───────────────────────────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-primary mb-10">
          Education
        </h2>
        <div className="ml-1.5 border-l border-gray-200 pl-6 space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.institution} className="relative">
              <div className="absolute -left-[1.875rem] top-1 w-3 h-3 rounded-full bg-green-primary ring-2 ring-white" />
              <p className="font-semibold text-primary leading-snug">
                {edu.degree}
              </p>
              <p className="text-sm text-secondary mt-0.5">
                {edu.institution} &middot; {edu.years}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Languages ───────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-bold text-primary mb-6">
          Languages
        </h2>
        <div className="flex flex-wrap gap-3">
          {LANGUAGES.map(({ language, level }) => (
            <span
              key={language}
              className="text-sm text-primary border border-gray-200 rounded-full px-4 py-1.5"
            >
              {language}{" "}
              <span className="text-secondary">&mdash; {level}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Footer actions ──────────────────────────────────────────────── */}
      <div className="mt-14 flex flex-wrap gap-6 items-center border-t border-gray-100 pt-8">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary border border-gray-300 rounded-full px-5 py-2 hover:border-green-primary hover:text-green-primary transition-colors"
        >
          Connect on LinkedIn &rarr;
        </a>
        <a
          href="https://github.com/segdae"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-primary hover:text-green-light transition-colors"
        >
          GitHub &rarr;
        </a>
      </div>
    </main>
  );
}
