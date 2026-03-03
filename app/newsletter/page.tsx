import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "A fortnightly filter of AI and automation news that actually matters for practitioners. No hype, no fluff.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        The Signal
      </h1>
      <p className="mt-3 text-lg text-secondary">
        A fortnightly filter of AI and automation news that actually matters.
        No hype, no fluff — just what practitioners need to know.
      </p>

      <div className="mt-10 bg-gray-50 rounded-2xl px-8 py-10">
        <NewsletterForm />
      </div>

      <ul className="mt-10 space-y-3">
        {[
          "Practical takes on new AI tools and what they're actually good for",
          "Automation patterns worth stealing for your own work",
          "Consulting insights from inside enterprise AI delivery",
          "No sponsored content, ever",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-primary">
            <span className="text-green-primary mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}
