import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export const projectId = 'en9wkvgo'
export const dataset = 'alphaops'
export const apiVersion = '2024-01-01'

export default defineConfig({
  name: 'default',
  title: 'Histack.io CMS',
  
  projectId,
  dataset,
  apiVersion,
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
