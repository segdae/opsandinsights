import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { getAllProjects } from "@/sanity/lib/queries";
import ProjectList from "@/components/ProjectList";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects | Ops & Insights",
  description:
    "Selected AI and automation consulting work — from intelligent document processing to enterprise AI strategy. Delivered at scale.",
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

export default async function ProjectsPage() {
  const projects = await sanityFetch<Project[]>({ query: getAllProjects });

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Projects
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
