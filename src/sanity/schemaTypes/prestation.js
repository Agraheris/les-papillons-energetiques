// src/sanity/schemaTypes/prestation.js
export const prestation = {
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
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image d\'aperçu',
      type: 'image',
      description: 'Image affichée sur la page de liste des prestations',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
        }
      ]
    },
    {
      name: 'heroImage',
      title: 'Image principale (page détail)',
      type: 'image',
      description: 'Grande image affichée sur la page de détail',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
        }
      ]
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'currency',
      title: 'Devise',
      type: 'string',
      options: {
        list: [
          {title: 'Euro (€)', value: 'EUR'},
          {title: 'Dollar ($)', value: 'USD'}
        ]
      },
      initialValue: 'EUR'
    },
    {
      name: 'shortDescription',
      title: 'Description courte',
      type: 'text',
      description: 'Description affichée sur la page de liste',
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: {type: 'prestationCategory'}
    },
    {
      name: 'duration',
      title: 'Durée',
      type: 'string',
      description: 'Ex: 1h30, 2h, etc.'
    },
    // Citation pour certaines prestations
    {
      name: 'quote',
      title: 'Citation (optionnelle)',
      type: 'object',
      description: 'Citation poétique pour certaines prestations',
      fields: [
        {
          name: 'text',
          title: 'Texte de la citation',
          type: 'text',
          rows: 4
        },
        {
          name: 'author',
          title: 'Auteur',
          type: 'string'
        }
      ]
    },
    // Champs spécifiques à la page de détail
    {
      name: 'detailPage',
      title: 'Page de détail',
      type: 'object',
      description: 'Contenu affiché sur la page de détail de la prestation',
      fields: [
        {
          name: 'mainDescription',
          title: 'Description principale',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Description principale de la prestation'
        },
        {
          name: 'whatIsSection',
          title: 'Section "Qu\'est-ce que..."',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre de la section',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Contenu',
              type: 'array',
              of: [{type: 'block'}]
            },
            {
              name: 'definitions',
              title: 'Définitions (optionnel)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'term',
                      title: 'Terme',
                      type: 'string'
                    },
                    {
                      name: 'definition',
                      title: 'Définition',
                      type: 'string'
                    }
                  ],
                  preview: {
                    select: {
                      title: 'term',
                      subtitle: 'definition'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          name: 'processSection',
          title: 'Section Déroulement/Processus',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre de la section',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Description du processus',
              type: 'array',
              of: [{type: 'block'}]
            },
            {
              name: 'steps',
              title: 'Étapes (optionnel)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'stepTitle',
                      title: 'Titre de l\'étape',
                      type: 'string'
                    },
                    {
                      name: 'stepDescription',
                      title: 'Description',
                      type: 'text'
                    }
                  ],
                  preview: {
                    select: {
                      title: 'stepTitle'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          name: 'additionalInfo',
          title: 'Informations complémentaires',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Informations supplémentaires sur la prestation'
        }
      ]
    },
    {
      name: 'isActive',
      title: 'Prestation active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number'
    },
    // SEO pour la page de détail
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Titre meta',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Description meta',
          type: 'text'
        }
      ]
    }
  ],
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Prix croissant',
      name: 'priceAsc',
      by: [
        {field: 'price', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      price: 'price',
      currency: 'currency'
    },
    prepare(selection) {
      const {title, media, price, currency} = selection
      return {
        title: title,
        subtitle: price ? `${price}${currency === 'EUR' ? '€' : '$'}` : 'Prix non défini',
        media: media
      }
    }
  }
}