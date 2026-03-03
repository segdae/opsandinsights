import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shea Campbell — Senior Consultant at EY specialising in AI and Intelligent Automation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        About
      </h1>

      <div className="mt-8 space-y-5 text-primary leading-relaxed">
        <p>
          I&apos;m Shea Campbell — Senior Consultant at EY specialising in AI
          and Intelligent Automation. I help large organisations turn AI strategy
          into working systems, from document intelligence pipelines to
          enterprise automation platforms.
        </p>
        <p>
          Outside of client work, I build Notion systems for consultants and
          write about what actually works in AI implementation at Ops &amp;
          Insights.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/cv"
          className="text-sm font-medium border border-gray-300 text-primary px-5 py-2.5 rounded-full hover:border-green-primary hover:text-green-primary transition-colors"
        >
          View my CV
        </Link>
        <a
          href="https://www.linkedin.com/in/s%C3%A9gd%C3%A1e-shay-campbell/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium border border-gray-300 text-primary px-5 py-2.5 rounded-full hover:border-green-primary hover:text-green-primary transition-colors"
        >
          Connect on LinkedIn →
        </a>
      </div>
    </main>
  );
}
