import { defineType, defineField } from "sanity";

export const lawyer = defineType({
  name: "lawyer",
  title: "Lawyer",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "fullName",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      description: "e.g. Lead Attorney, Associate, Partner",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
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
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short bio shown in listings and previews.",
      validation: (Rule) => Rule.max(250),
    }),
    defineField({
      name: "expertise",
      title: "Expertise",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "expertise" }],
        },
      ],
      description: "Select one or more expertise areas this lawyer specialises in.",
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Controls the order lawyers appear in listings. Lower numbers appear first.",
      validation: (Rule) => Rule.integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "position",
      media: "photo",
    },
  },
});
