import { defineType, defineField } from "sanity";

export const ebookPage = defineType({
  name: "ebookPage",
  title: "eBook Page",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "The title of this page, shown in the table of contents.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          // Keep styles and lists simple to align with a Markdown feel
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          // Only allow basic text decorators
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            // Standard link annotations
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        // By not including 'image' in this array, we prevent images from being added to the page content.
      ],
      description:
        "The content of the page (markdown-style). Images are not allowed here.",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Page",
      };
    },
  },
});

