import { defineType, defineField } from "sanity";

export const legalProcess = defineType({
  name: "legalProcess",
  title: "Legal Process",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(150),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order (1, 2, 3 …)",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Step Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "order",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Step ${subtitle}` : "",
        media,
      };
    },
  },
});
