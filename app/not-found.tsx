import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-16 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-green-primary mb-4">
        404
      </p>
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-secondary">
        It may have been moved, deleted, or you might have followed a broken link.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium bg-green-primary text-white px-6 py-2.5 rounded-full hover:bg-green-light transition-colors"
      >
        Back to home →
      </Link>
    </main>
  );
}
