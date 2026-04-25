import { defineType, defineField } from "sanity";

export const globalOffice = defineType({
  name: "globalOffice",
  title: "Global Office",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Headquarters", value: "headquarters" },
          { title: "Regional", value: "regional" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "continent",
      title: "Continent",
      type: "string",
      description: "e.g. North America, Europe, Africa, Asia",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullAddress",
      title: "Full Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "city",
      subtitle: "country",
    },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
