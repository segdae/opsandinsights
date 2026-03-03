import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      initialValue: "Ops & Insights",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Making AI real for the people who build with it.",
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      initialValue: "Shea Campbell",
    }),
    defineField({
      name: "authorRole",
      title: "Author Role",
      type: "string",
      initialValue: "Senior Consultant — AI & Intelligent Automation",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "newsletterUrl",
      title: "Newsletter URL",
      type: "url",
      description: "Beehiiv signup link",
    }),
    defineField({
      name: "ogImage",
      title: "Default OG Image",
      type: "image",
      options: { hotspot: true },
      description: "Default social sharing image",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
