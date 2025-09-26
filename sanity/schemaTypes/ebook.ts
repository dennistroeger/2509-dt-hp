import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ebook',
  title: 'eBook',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverTagline',
      title: 'Cover Tagline',
      type: 'string',
    }),
    defineField({
      name: 'coverBenefit1',
      title: 'Cover Benefit 1',
      type: 'string',
    }),
    defineField({
      name: 'coverBenefit2',
      title: 'Cover Benefit 2',
      type: 'string',
    }),
    defineField({
      name: 'coverBackgroundColor',
      title: 'Cover Background Color',
      type: 'color',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'page',
          title: 'Page',
          type: 'reference',
          to: [{type: 'ebookPage'}],
        },
        {
          name: 'chapter',
          title: 'Chapter',
          type: 'reference',
          to: [{type: 'chapter'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
})
