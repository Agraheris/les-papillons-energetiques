'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import schemaTypes from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: 'lrvomu9d',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2025-06-01' }),
  ],
})