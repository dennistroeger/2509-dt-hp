'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {markdownSchema} from 'sanity-plugin-markdown'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {schemaTypes} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  basePath: '/studio',
  projectId: '0f6a65p1',
  dataset: 'production',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({structure}),
    markdownSchema(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
    colorInput(),
  ],
})
