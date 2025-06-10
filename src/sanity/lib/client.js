import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'lrvomu9d',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
  perspective: 'published',
  token: process.env.SANITY_API_TOKEN,
})