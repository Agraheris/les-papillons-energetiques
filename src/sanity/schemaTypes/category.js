export const prestationCategory = {
  name: 'prestationCategory',
  title: 'Catégorie de Prestations',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom de la catégorie',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}