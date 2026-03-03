import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { getAllProjects } from "@/sanity/lib/queries";
import ProjectList from "@/components/ProjectList";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Building",
  description:
    "Selected AI and automation consulting work — from intelligent document processing to enterprise AI strategy. Delivered at scale.",
  alternates: { canonical: "/building" },
};

type Project = {
  _id: string;
  title: string;
  client?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  tools?: string[];
  publishedAt: string;
  featured?: boolean;
};

export default async function BuildingPage() {
  const projects = await sanityFetch<Project[]>({ query: getAllProjects });

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Building
      </h1>
      <p className="mt-2 text-secondary">
        Selected work from AI and automation consulting engagements. Details
        anonymised where required.
      </p>

      <div className="mt-10">
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}
