import type { Metadata } from "next";
import Link from "next/link";
import WaitlistPopup from "@/components/WaitlistPopup";

/* ═══════════════════════════════════════════════════════════════════════════
   Metadata & JSON-LD
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Everything Bundle — All Notion Templates + Future Products | Ops & Insights",
  description:
    "Every Notion template we make — current and future — for one price. $499 instead of $800+. One-time purchase with 1 year of new product access.",
  alternates: { canonical: "/templates/everything-bundle" },
  openGraph: {
    title: "Everything Bundle — Every Notion Template for $499",
    description:
      "All current products plus everything we release for a year. $499 instead of $800+. Save 38%.",
    url: "/templates/everything-bundle",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Everything Bundle — All Notion Templates",
  description:
    "Every Notion template and AI agent system from Ops & Insights — current catalogue plus all new products released within one year of purchase.",
  brand: { "@type": "Brand", name: "Ops & Insights" },
  offers: {
    "@type": "Offer",
    price: "499.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://opsandinsights.com/templates/everything-bundle",
  },
  category: "Software > Productivity > Templates",
};

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const ALL_PRODUCTS = [
  { name: "Agentic CRM", price: 149, slug: "/templates/agentic-crm", description: "Full sales pipeline with AI agents for lead scoring, follow-ups, and email drafting." },
  { name: "Solopreneur Operating System", price: 129, slug: "/templates/solopreneur-os", description: "All-in-one business management — CRM, content, finance, and projects with domain-specific agents." },
  { name: "Team Ops Hub", price: 149, slug: "/templates/team-ops-hub", description: "Project management, OKRs, knowledge base, and onboarding for small teams — all with custom agents." },
  { name: "Agentic Life OS", price: 99, slug: "/templates/life-os", description: "Goals, habits, finance, and health management with AI agents for weekly reviews and budget alerts." },
  { name: "AI Automation Toolkit", price: 79, slug: "/templates/automation-toolkit", description: "20+ pre-built Custom Agent configurations for common workflows — meeting notes, email triage, reports." },
  { name: "Freelancer Command Centre", price: 39, slug: "/templates/freelancer-command-centre", description: "Clients, projects, invoices, and time tracking with AI-generated weekly summaries." },
  { name: "AI-Powered Content Calendar", price: 29, slug: "/templates/content-calendar", description: "Multi-platform content planning with AI drafting agent and repurposing workflows." },
  { name: "Smart Project Tracker", price: 29, slug: "/templates/smart-project-tracker", description: "Project management with AI agent triggers for status updates and deadline reminders." },
  { name: "Personal Knowledge Base", price: 29, slug: "/templates/second-brain", description: "Note-taking with AI-powered retrieval, summarisation, and weekly digest." },
  { name: "Job Search OS", price: 19, slug: "/templates/job-search-os", description: "Application tracker with AI company research agent and follow-up reminders." },
];

const INDIVIDUAL_TOTAL = ALL_PRODUCTS.reduce((sum, p) => sum + p.price, 0);

const PERSONAS = [
  {
    role: "All-in operators",
    description: "You want every system, every agent, every workflow — and you don't want to think about which ones to buy individually.",
    stat: "One purchase, zero decisions",
  },
  {
    role: "Teams & agencies",
    description: "Equipping a team with a complete Notion stack. The bundle is cheaper than buying even 4 products separately.",
    stat: `$${INDIVIDUAL_TOTAL - 499} saved vs buying individually`,
  },
  {
    role: "Early adopters",
    description: "You want to lock in access to everything — including products that haven't been built yet. One year of new releases included.",
    stat: "Future products included free",
  },
];

const FAQS = [
  {
    q: "What exactly do I get?",
    a: `All ${ALL_PRODUCTS.length} products in our current catalogue — plus every new product we release within 1 year of your purchase. That's $${INDIVIDUAL_TOTAL}+ worth of templates and systems for $499.`,
  },
  {
    q: "What does \"1 year of new products\" mean?",
    a: "From the date you purchase, any new template or system we release is automatically added to your account at no extra cost. After the year, you keep everything you have — you just stop getting new additions.",
  },
  {
    q: "Can I buy products individually instead?",
    a: "Yes. Every product is available separately. But the Everything Bundle saves you 38%+ and includes future releases. If you're interested in 4+ products, the bundle is almost certainly better value.",
  },
  {
    q: "Do I get lifetime updates on everything?",
    a: "Yes. Every product in the bundle includes lifetime updates. When we improve a template, add new agents, or fix issues — you get the update, free, forever.",
  },
  {
    q: "What if a product doesn't work for me?",
    a: "30-day money-back guarantee on the entire bundle, no questions asked. If the products don't fit your workflow, full refund.",
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

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function EverythingBundlePage(): React.ReactElement {
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
            <span className="text-primary font-medium">Everything Bundle</span>
          </nav>

          <div className="text-center">
            <span className="inline-block text-xs font-semibold bg-green-primary/10 text-green-primary px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide uppercase">
              Coming 2026
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-balance animate-fade-in-up delay-100">
              Every template. Every agent.{" "}
              <span className="text-green-primary">One price.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              All {ALL_PRODUCTS.length} products in our catalogue — plus everything we build over the
              next year. CRM, content engine, life OS, automation toolkit, team
              hub, and more. One purchase. Done.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300">
              <a href="#waitlist" className="group inline-flex items-center gap-2 text-base font-semibold bg-green-primary text-white pl-8 pr-6 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20">
                Join the waitlist
                <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-secondary line-through text-lg">${INDIVIDUAL_TOTAL}</span>
                <span className="font-bold text-primary text-2xl">$499</span>
                <span className="text-green-primary font-semibold bg-green-subtle px-2.5 py-1 rounded-full text-xs">
                  Save ${INDIVIDUAL_TOTAL - 499}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary animate-fade-in-up delay-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                {ALL_PRODUCTS.length} products included
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                1 year of new releases
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-primary" aria-hidden="true"><path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                Lifetime updates on everything
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">
        {/* WHAT'S INCLUDED */}
        <section className="py-20 sm:py-28">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">What&apos;s included</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-lg">
            {ALL_PRODUCTS.length} products.{" "}
            <span className="text-secondary/60">Every AI agent we build.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-lg">
            Each product works standalone. Together, they cover every part of
            your work and life — CRM, projects, content, finances, hiring, and more.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-3">
            {ALL_PRODUCTS.map(({ name, price, slug, description }) => (
              <div key={name} className="group border border-gray-200 rounded-2xl p-5 hover:border-green-primary/60 transition-all hover:shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckIcon />
                      <h3 className="font-semibold text-primary group-hover:text-green-primary transition-colors">{name}</h3>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed pl-8">{description}</p>
                    <Link href={slug} className="inline-block mt-2 pl-8 text-sm text-green-primary font-medium hover:underline">
                      View details
                    </Link>
                  </div>
                  <span className="text-sm font-semibold text-secondary shrink-0">${price}</span>
                </div>
              </div>
            ))}

            {/* Future products row */}
            <div className="border-2 border-dashed border-green-primary/30 rounded-2xl p-5 bg-green-subtle/30">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 shrink-0 rounded-full bg-green-primary/10 flex items-center justify-center">
                  <span className="text-green-primary text-xs font-bold">+</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">All future products (1 year)</h3>
                  <p className="text-sm text-secondary mt-1">Every new template and system released within 12 months of your purchase — added to your account automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SAVINGS — dark section */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-green-light uppercase tracking-widest mb-3">The maths</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Buy separately: ${INDIVIDUAL_TOTAL}.
            <br />
            <span className="text-green-light">Buy everything: $499. Save {Math.round(((INDIVIDUAL_TOTAL - 499) / INDIVIDUAL_TOTAL) * 100)}%.</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: `${ALL_PRODUCTS.length}`, label: "products included" },
              { number: `$${INDIVIDUAL_TOTAL - 499}`, label: "saved" },
              { number: "1 yr", label: "of new releases" },
              { number: "∞", label: "lifetime updates" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center">
                <span className="text-3xl font-bold text-green-light">{number}</span>
                <p className="mt-1 text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-md mx-auto">
            One-time purchase. No per-seat pricing. No subscription.
            Every product. Every agent. Every update.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6">
        {/* WHO IT'S FOR */}
        <section className="py-20 sm:py-28">
          <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">Built for</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
            People who go{" "}<span className="text-secondary/60">all in</span>
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

        {/* PRICING */}
        <section className="py-20 sm:py-28 border-t border-gray-100" id="pricing">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-green-primary uppercase tracking-widest mb-3">The bundle</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Everything. One price.{" "}<span className="text-secondary/60">No subscription.</span>
            </h2>
          </div>

          <div className="border-2 border-green-primary/20 rounded-3xl overflow-hidden">
            <div className="p-6 sm:p-8 space-y-3">
              {ALL_PRODUCTS.map(({ name, price }) => (
                <div key={name} className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-primary text-sm leading-relaxed">{name}</span>
                  </div>
                  <span className="text-xs text-secondary shrink-0 font-medium">${price}</span>
                </div>
              ))}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-primary text-sm leading-relaxed font-medium">All future products (1 year)</span>
                </div>
                <span className="text-xs text-secondary shrink-0 font-medium">Included</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-primary text-sm leading-relaxed">Lifetime updates on everything</span>
                </div>
                <span className="text-xs text-secondary shrink-0 font-medium">Included</span>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">Individual total</span>
                <span className="text-sm font-bold text-primary">${INDIVIDUAL_TOTAL}+</span>
              </div>
            </div>

            <div className="bg-green-subtle/60 px-6 sm:px-8 py-10 text-center">
              <p className="text-sm font-medium text-green-primary mb-2">
                Everything Bundle — save {Math.round(((INDIVIDUAL_TOTAL - 499) / INDIVIDUAL_TOTAL) * 100)}%
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl text-secondary/40 line-through font-light">${INDIVIDUAL_TOTAL}</span>
                <span className="text-6xl font-bold text-primary tracking-tight">$499</span>
              </div>
              <p className="mt-3 text-sm text-secondary">
                One-time purchase &middot; {ALL_PRODUCTS.length} products + future releases &middot; Lifetime updates
              </p>

              <a href="#waitlist" className="mt-8 group inline-flex items-center gap-2 text-lg font-semibold bg-green-primary text-white pl-10 pr-8 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20">
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
            Stop buying piece by piece.
            <br /><span className="text-green-primary">Get everything.</span>
          </h2>
          <p className="mt-5 text-lg text-secondary max-w-md mx-auto">
            {ALL_PRODUCTS.length} products. $499 once. Every future release for a year.
            Lifetime updates on everything.
          </p>
          <a href="#waitlist" className="mt-10 group inline-flex items-center gap-2 text-lg font-semibold bg-green-primary text-white pl-10 pr-8 py-4 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20">
            Join the waitlist
            <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>
          <p className="mt-5 text-xs text-secondary">One-time purchase &middot; 30-day guarantee &middot; Lifetime updates</p>
          <p className="mt-8 text-sm text-secondary">
            Questions?{" "}<Link href="/about#contact" className="text-green-primary hover:underline font-medium">Get in touch</Link>{" "}&mdash; happy to walk you through the bundle.
          </p>
        </section>

        <div className="pb-16 pt-8 border-t border-gray-100 text-center">
          <Link href="/templates" className="text-sm text-secondary hover:text-green-primary transition-colors">&larr; Back to all templates</Link>
        </div>
      </main>

      <WaitlistPopup productName="the Everything Bundle" price={499} fullPrice={INDIVIDUAL_TOTAL} />
    </>
  );
}
