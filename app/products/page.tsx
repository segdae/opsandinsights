import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Notion systems, templates, and digital products for consultants and knowledge workers.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Products
      </h1>
      <p className="mt-2 text-secondary">
        Notion systems, templates, and digital products for consultants and
        knowledge workers.
      </p>

      <p className="mt-16 text-secondary text-sm">Coming soon.</p>
    </main>
  );
}
