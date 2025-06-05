import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export default async function PrestationsPage() {
  const prestations = await client.fetch(`
    *[_type == "prestation" && isActive == true]{
      _id,
      title,
      slug,
      shortDescription,
      price,
      currency,
      duration,
      image {
        asset->{
          url
        },
        alt
      },
      category->{
        name
      }
    } | order(order asc)
  `);

  return (
    <main className="bg-[#FEEBFF] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mes Prestations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes différents soins énergétiques et accompagnements 
            pour votre bien-être et votre transformation personnelle.
          </p>
        </div>

        {/* Grid des prestations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prestations.map((prestation) => (
            <Link
              key={prestation._id}
              href={`/prestations/${prestation.slug.current}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col h-full">
                {/* Image */}
                {prestation.image?.asset?.url && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={prestation.image.asset.url}
                      alt={prestation.image.alt || prestation.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Contenu */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Catégorie */}
                  {prestation.category?.name && (
                    <span className="inline-block bg-[#b85cb3]/10 text-[#b85cb3] text-xs font-medium px-3 py-1 rounded-full mb-3 self-start">
                      {prestation.category.name}
                    </span>
                  )}

                  {/* Titre */}
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b85cb3] transition-colors duration-300">
                    {prestation.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {prestation.shortDescription}
                  </p>

                  {/* Footer card */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    {/* Prix */}
                    <div className="text-2xl font-bold text-[#b85cb3]">
                      {prestation.price}
                      {prestation.currency === 'EUR' ? '€' : '$'}
                    </div>

                    {/* Durée */}
                    {prestation.duration && (
                      <div className="text-sm text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {prestation.duration}
                      </div>
                    )}
                  </div>

                  {/* Call to action */}
                  <div className="mt-4">
                    <span className="inline-flex items-center text-[#b85cb3] font-medium group-hover:text-[#9d4a98] transition-colors duration-300">
                      En savoir plus
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Message si aucune prestation */}
        {prestations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucune prestation disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}