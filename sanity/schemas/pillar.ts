import { defineField, defineType } from "sanity";

export const pillar = defineType({
  name: "pillar",
  title: "Pillar",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "colour",
      title: "Colour",
      type: "string",
      description: "Hex colour code for UI tags (e.g. #006039)",
    }),
  ],
});
