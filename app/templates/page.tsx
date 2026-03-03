import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch, urlFor } from "@/lib/sanity";
import { getAllTemplates } from "@/sanity/lib/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Notion Templates for Consultants",
  description:
    "Notion templates built for AI and automation consultants. Project trackers, audit boards, client delivery systems.",
  alternates: { canonical: "/templates" },
};

type Template = {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  gumroadUrl: string;
  category?: string;
  featured?: boolean;
  image?: { asset: { _ref: string; _type: string } };
};

export default async function TemplatesPage() {
  const templates = await sanityFetch<Template[]>({ query: getAllTemplates });

  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 pb-16">

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Templates
      </h1>
      <p className="mt-2 text-secondary">
        Notion systems built by a consultant, for consultants. Not generic
        productivity — real frameworks from real client delivery.
      </p>

      {/* ── Lead magnet callout ─────────────────────────────────────────────── */}
      <div className="mt-8 bg-green-subtle rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-semibold text-primary">Free: AI Project Tracker Lite</p>
          <p className="mt-1 text-sm text-secondary">
            Track AI initiatives from ideation to deployment. The lite version of our most popular template.
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors whitespace-nowrap"
        >
          Download Free →
        </a>
      </div>

      {/* ── Template grid ───────────────────────────────────────────────────── */}
      {templates.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template._id}
              className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Preview image */}
              {template.image && (
                <div className="aspect-video overflow-hidden bg-gray-50">
                  <Image
                    src={urlFor(template.image).width(600).height(338).url()}
                    alt={`${template.name} preview`}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">
                {/* Category pill */}
                {template.category && (
                  <span className="self-start text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
                    {template.category}
                  </span>
                )}

                {/* Name + price */}
                <div className="mt-2 flex items-start justify-between gap-3">
                  <p className="font-semibold text-primary leading-snug">
                    {template.name}
                  </p>
                  {template.price != null && (
                    <span className="shrink-0 font-bold text-green-primary">
                      {template.price === 0 ? "Free" : `£${template.price}`}
                    </span>
                  )}
                </div>

                {/* Description */}
                {template.description && (
                  <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-3">
                    {template.description}
                  </p>
                )}

                {/* CTA — pinned to bottom of card */}
                <a
                  href={template.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 block w-full text-center text-sm font-medium bg-green-primary text-white px-4 py-2.5 rounded-lg hover:bg-green-light transition-colors"
                >
                  Get Template →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-secondary text-sm">Templates coming soon.</p>
      )}
    </main>
  );
}
