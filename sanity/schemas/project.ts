import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: 'e.g. "Global FMCG — Kenvue" or an anonymised label',
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 3,
      description: "What was the problem?",
    }),
    defineField({
      name: "approach",
      title: "Approach",
      type: "text",
      rows: 3,
      description: "What did you do?",
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 3,
      description: "What happened?",
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
      description: 'e.g. ["Power Automate", "Azure OpenAI", "Databricks"]',
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Highlight this project on the projects page",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client",
    },
  },
});
