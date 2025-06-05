// lib/sanity.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Pour les mutations côté serveur
})

// Requêtes utiles
export const queries = {
  // Récupérer toutes les prestations
  allPrestations: `*[_type == "prestation"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    image,
    category->{
      _id,
      name,
      slug
    },
    price,
    duration,
    location,
    order
  }`,

  // Récupérer une prestation par slug
  prestationBySlug: `*[_type == "prestation" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    longDescription,
    image,
    images,
    category->{
      _id,
      name,
      slug
    },
    price,
    duration,
    location,
    whatToExpect,
    benefits,
    process,
    recommendations,
    contraindications,
    seo
  }`,

  // Récupérer toutes les catégories
  allCategories: `*[_type == "category"] | order(order asc) {
    _id,
    name,
    slug,
    description,
    order
  }`
}