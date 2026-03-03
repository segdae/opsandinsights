/**
 * Sanity seed script — populates the dataset with sample content.
 *
 * Prerequisites:
 *   1. NEXT_PUBLIC_SANITY_PROJECT_ID is set in .env.local
 *   2. SANITY_API_TOKEN is set in .env.local (Editor-level token from sanity.io/manage)
 *
 * Usage:  pnpm seed
 * Re-run safely: uses createOrReplace with fixed _id values — no duplicates.
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "next-sanity";

// ─── Guard: fail fast with a clear message if env vars are missing ─────────
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || projectId === "your-project-id") {
  console.error(
    "\n❌  NEXT_PUBLIC_SANITY_PROJECT_ID is not set (or still placeholder) in .env.local\n"
  );
  process.exit(1);
}

if (!token || token === "your-write-token-here") {
  console.error(
    "\n❌  SANITY_API_TOKEN is not set in .env.local\n" +
      "    → Go to sanity.io/manage → your project → API → Tokens\n" +
      "    → Create a token with Editor permissions and paste it in\n"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ─── Helpers ───────────────────────────────────────────────────────────────
let _k = 0;
const k = () => `k${++_k}`;

/** Build a portable-text paragraph block */
function para(text: string) {
  return {
    _type: "block",
    _key: k(),
    style: "normal",
    children: [{ _type: "span", _key: k(), text, marks: [] }],
    markDefs: [],
  };
}

/** Build a Sanity slug object */
function slug(val: string) {
  return { _type: "slug", current: val };
}

// ─── Dates ────────────────────────────────────────────────────────────────
const today = new Date();
const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

// ─── Pillars ──────────────────────────────────────────────────────────────
const PILLARS = [
  {
    _id: "pillar-ai-in-the-wild",
    _type: "pillar",
    name: "AI in the Wild",
    slug: slug("ai-in-the-wild"),
    colour: "#006039",
  },
  {
    _id: "pillar-automation-playbooks",
    _type: "pillar",
    name: "Automation Playbooks",
    slug: slug("automation-playbooks"),
    colour: "#00834d",
  },
  {
    _id: "pillar-consulting-from-the-inside",
    _type: "pillar",
    name: "Consulting from the Inside",
    slug: slug("consulting-from-the-inside"),
    colour: "#2563eb",
  },
  {
    _id: "pillar-systems-and-productivity",
    _type: "pillar",
    name: "Systems & Productivity",
    slug: slug("systems-and-productivity"),
    colour: "#7c3aed",
  },
  {
    _id: "pillar-ai-signal-vs-noise",
    _type: "pillar",
    name: "AI Signal vs Noise",
    slug: slug("ai-signal-vs-noise"),
    colour: "#dc2626",
  },
];

// ─── Posts ────────────────────────────────────────────────────────────────
const POSTS = [
  {
    _id: "post-enterprise-ai-failures",
    _type: "post",
    title: "Why Most Enterprise AI Projects Fail Before They Start",
    slug: slug("why-most-enterprise-ai-projects-fail"),
    pillar: { _type: "reference", _ref: "pillar-ai-in-the-wild" },
    publishedAt: today.toISOString(),
    excerpt:
      "After sitting in dozens of AI strategy sessions, the pattern is always the same. The technology isn't the problem — the problem definition is.",
    body: [
      para(
        "After sitting in dozens of AI strategy sessions across financial services, consumer goods, and manufacturing, the pattern is always the same. By the time a team is ready to discuss model selection and infrastructure, the project is already in trouble. The failure wasn't waiting in the technology. It was in the room two months earlier, when someone agreed to a vague objective because disagreeing felt like slowing things down."
      ),
      para(
        "The most common version of this: a senior stakeholder says they want 'an AI that summarises our reports'. The team nods. A proof of concept gets scoped. Six months later, they've built something that summarises reports perfectly well — but nobody uses it, because what the stakeholder actually needed was a way to surface exceptions faster, not summaries. These are not the same problem. One requires reading; the other requires ranking."
      ),
      para(
        "The fix isn't technical. It's spending two weeks before any vendor conversation asking three questions: What decision does this need to improve? How is that decision currently made? And what does 'better' actually look like in measurable terms? Most organisations skip this because it's slow and uncomfortable. It requires someone senior enough to say 'I don't think we've defined this properly' in a room full of people who've already been planning for weeks."
      ),
      para(
        "The projects I've seen succeed all share one trait: someone was empowered to slow things down at the right moment. That's not a technology problem. That's a governance problem — and it's entirely solvable before a single line of code gets written."
      ),
    ],
  },
  {
    _id: "post-power-automate-flow",
    _type: "post",
    title: "The Power Automate Flow I Build for Every New Client",
    slug: slug("power-automate-flow-every-new-client"),
    pillar: { _type: "reference", _ref: "pillar-automation-playbooks" },
    publishedAt: yesterday.toISOString(),
    excerpt:
      "There's one automation I set up in the first week of every engagement. It takes 20 minutes and builds immediate trust with the team.",
    body: [
      para(
        "In the first week of an engagement, before I've finished mapping the current state or run a single workshop, I build the same flow. It monitors a shared team inbox for approval requests — the kind that arrive by email, require someone to read, decide, and reply, and currently live in someone's head as a vague obligation. The flow parses the email, posts a formatted adaptive card to Teams, and captures the approve/reject response directly in the channel. The decision gets logged to a SharePoint list. The original sender gets an automated reply."
      ),
      para(
        "The whole thing takes about 20 minutes to configure. The trigger is 'When a new email arrives in a shared mailbox' with a subject filter. The Teams card uses the Adaptive Cards schema — you don't need to write JSON manually, Power Automate has a visual builder. The SharePoint logging is a single 'Create item' action. If your tenant has sensitivity labels or data handling policies, that's the only part that adds time."
      ),
      para(
        "Why this specific flow? Because it solves a problem every team has — approval bottlenecks via email — and it's visible. The team sees the automation working on day three. That's not nothing. On complex engagements where the real value is six months away, having something that obviously works immediately changes how the client relates to the project. They stop asking when they'll see results because they're already seeing one."
      ),
      para(
        "The more important principle is this: automation trust compounds. The first flow doesn't need to be impressive. It needs to be reliable, understandable, and solve a real problem. Once people see a flow handle something they used to do manually, they start bringing you their other problems. That's when the interesting work starts."
      ),
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    _id: "project-intelligent-document-processing",
    _type: "project",
    title: "Intelligent Document Processing Pipeline",
    slug: slug("intelligent-document-processing-pipeline"),
    client: "Global FMCG Manufacturer",
    challenge:
      "Manual processing of 2,000+ supplier invoices monthly across 12 markets, with error rates above 8% and a 15-day average processing time.",
    approach:
      "Designed and deployed an Azure AI Document Intelligence pipeline with Power Automate orchestration, integrated into the existing SAP workflow.",
    outcome:
      "Processing time reduced to 2 days. Error rate below 1%. £340K annual cost saving.",
    tools: [
      "Azure AI Document Intelligence",
      "Power Automate",
      "SAP",
      "Python",
    ],
    publishedAt: new Date("2024-01-15").toISOString(),
    featured: true,
  },
];

// ─── Templates ────────────────────────────────────────────────────────────
const TEMPLATES = [
  {
    _id: "template-ai-project-tracker",
    _type: "template",
    name: "AI Project Tracker",
    slug: slug("ai-project-tracker"),
    description:
      "Track AI initiatives from ideation to deployment. Built for programme managers and senior consultants managing multiple AI workstreams.",
    price: 19,
    category: "AI & Strategy",
    gumroadUrl: "https://gumroad.com/placeholder",
    featured: true,
  },
  {
    _id: "template-automation-audit-board",
    _type: "template",
    name: "Automation Audit Board",
    slug: slug("automation-audit-board"),
    description:
      "Map, score, and prioritise automation opportunities across your organisation. The framework I use with enterprise clients.",
    price: 29,
    category: "Consulting Ops",
    gumroadUrl: "https://gumroad.com/placeholder",
    featured: false,
  },
];

// ─── CV Entries ───────────────────────────────────────────────────────────
const CV_ENTRIES = [
  {
    _id: "cv-senior-consultant-ey",
    _type: "cvEntry",
    role: "Senior Consultant",
    company: "EY",
    startDate: "2023-01-01",
    // no endDate → current role
    description:
      "AI & Intelligent Automation practice. Leading automation delivery for Kenvue and Microsoft workstreams. Power Automate, Azure AI, Databricks.",
    skills: [
      "Power Automate",
      "Azure AI",
      "Databricks",
      "Python",
      "AI Strategy",
    ],
  },
  {
    _id: "cv-consultant-ey",
    _type: "cvEntry",
    role: "Consultant",
    company: "EY",
    startDate: "2021-01-01",
    endDate: "2022-12-31",
    description:
      "Technology consulting across financial services and consumer products. Process automation, data migration, and system integration.",
    skills: ["Power Automate", "SQL", "Azure", "Process Design"],
  },
  {
    _id: "cv-analyst-ey",
    _type: "cvEntry",
    role: "Analyst",
    company: "EY",
    startDate: "2019-01-01",
    endDate: "2020-12-31",
    description:
      "Graduate programme. Rotations across technology risk, data analytics, and digital transformation.",
    skills: ["Excel", "SQL", "Power BI", "Data Analysis"],
  },
];

// ─── Site Settings ────────────────────────────────────────────────────────
const SITE_SETTINGS = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteTitle: "Ops & Insights",
  tagline: "Making AI real for the people who build with it.",
  authorName: "Shea Campbell",
  authorRole: "Senior Consultant — AI & Intelligent Automation",
  linkedinUrl: "https://linkedin.com/in/sheacampbell",
  githubUrl: "https://github.com/sheacampbell",
};

// ─── Runner ───────────────────────────────────────────────────────────────
type SeedDoc = Record<string, unknown> & { _id: string; _type: string };

async function upsertAll(label: string, docs: SeedDoc[]) {
  console.log(`\n  ${label}`);
  for (const doc of docs) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (client as any).createOrReplace(doc);
    const name =
      (doc.name as string) ??
      (doc.title as string) ??
      (doc.role ? `${doc.role as string} — ${doc.company as string}` : doc._id);
    console.log(`    ✓  ${name}`);
  }
}

async function main() {
  console.log(`\n🌱  Seeding "${dataset}" on project ${projectId}...\n`);

  await upsertAll("Pillars (5)", PILLARS);
  await upsertAll("Posts (2)", POSTS);
  await upsertAll("Projects (1)", PROJECTS);
  await upsertAll("Templates (2)", TEMPLATES);
  await upsertAll("CV Entries (3)", CV_ENTRIES);
  await upsertAll("Site Settings (1)", [SITE_SETTINGS]);

  console.log(
    "\n✅  Done — 14 documents written to Sanity.\n" +
      "    Open /studio to verify, or check sanity.io/manage → Content.\n"
  );
}

main().catch((err: Error) => {
  console.error("\n❌  Seed failed:", err.message, "\n");
  process.exit(1);
});
