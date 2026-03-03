import { defineField, defineType } from "sanity";

export const template = defineType({
  name: "template",
  title: "Template",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "price",
      title: "Price (GBP)",
      type: "number",
      description: "Price in GBP — use 0 for free templates",
    }),
    defineField({
      name: "gumroadUrl",
      title: "Gumroad URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "AI & Strategy", value: "AI & Strategy" },
          { title: "Consulting Ops", value: "Consulting Ops" },
          { title: "Productivity", value: "Productivity" },
          { title: "Career", value: "Career" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Preview Image",
      type: "image",
      options: { hotspot: true },
      description: "Template preview screenshot (optional)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
});
