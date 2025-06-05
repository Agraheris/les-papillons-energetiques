
const sanity_image = {
  name: 'prestation',
  title: 'Prestation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[àáâãäå]/g, 'a')
          .replace(/[èéêë]/g, 'e')
          .replace(/[ìíîï]/g, 'i')
          .replace(/[òóôõö]/g, 'o')
          .replace(/[ùúûü]/g, 'u')
          .replace(/[ÿý]/g, 'y')
          .replace(/[ç]/g, 'c')
          .slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'shortDescription',
      title: 'Description courte',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'longDescription',
      title: 'Description détaillée',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'images',
      title: 'Images supplémentaires',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }]
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'string',
      description: 'Ex: "80€" ou "À partir de 120€"'
    },
    {
      name: 'duration',
      title: 'Durée',
      type: 'string',
      description: 'Ex: "1h30" ou "2-3 heures"'
    },
    {
      name: 'location',
      title: 'Lieu',
      type: 'string',
      options: {
        list: [
          {title: 'À domicile', value: 'domicile'},
          {title: 'À distance', value: 'distance'},
          {title: 'Cabinet', value: 'cabinet'},
          {title: 'Sur site', value: 'site'}
        ]
      }
    },
    {
      name: 'whatToExpect',
      title: 'À quoi s\'attendre',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'benefits',
      title: 'Bienfaits',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Liste des bienfaits'
    },
    {
      name: 'process',
      title: 'Déroulement de la séance',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'recommendations',
      title: 'Recommandations',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'contraindications',
      title: 'Contre-indications',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Titre SEO',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Description SEO',
          type: 'text',
          rows: 3
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.name',
      media: 'image'
    }
  }
}

export default sanity_image