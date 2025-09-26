import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../sanity.config'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to true in production
  // token: process.env.SANITY_API_TOKEN, // Add your token here
})

// For write operations (when you need to create/update content)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // token: process.env.SANITY_API_WRITE_TOKEN, // Add your write token here
})
