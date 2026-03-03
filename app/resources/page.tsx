import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools, templates, and guides for AI and automation practitioners.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Resources
      </h1>
      <p className="mt-2 text-secondary">
        Free tools, templates, and guides for AI and automation practitioners.
      </p>

      <p className="mt-16 text-secondary text-sm">Coming soon.</p>
    </main>
  );
}
