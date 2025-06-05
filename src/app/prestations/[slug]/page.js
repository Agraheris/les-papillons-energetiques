// src/app/prestations/[slug]/page.jsx

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

// Composants pour le PortableText
const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700 text-center">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-3 text-gray-700 text-center italic">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-none mb-4 space-y-2 text-center">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-gray-600">{children}</li>,
  },
};

export default async function PrestationDetailPage({ params }) {
  const { slug } = await params;

  const prestation = await client.fetch(`
    *[_type == "prestation" && slug.current == $slug][0]{
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
      heroImage {
        asset->{
          url
        },
        alt
      },
      category->{
        name
      },
      quote,
      detailPage {
        mainDescription,
        whatIsSection {
          title,
          content,
          definitions
        },
        processSection {
          title,
          content,
          steps
        },
        additionalInfo
      },
      seo
    }
  `, { slug });

  if (!prestation) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#FEEBFF] overflow-hidden">
      {/* Papillons décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Papillon gauche */}
        <div className="absolute left-8 top-1/4 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400">
            <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Papillon droite */}
        <div className="absolute right-8 top-1/3 w-28 h-28 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400">
            <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Papillons supplémentaires pour remplir */}
        <div className="absolute left-4 bottom-1/3 w-20 h-20 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-300">
            <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute right-12 bottom-1/4 w-24 h-24 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-300">
            <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/prestations"
            className="inline-flex items-center text-gray-600 hover:text-[#b85cb3] transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Prestations
          </Link>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2 italic">
          Prestations
        </h1>

        {/* Catégorie */}
        {prestation.category?.name && (
          <h2 className="text-2xl text-center text-gray-600 mb-8 italic">
            {prestation.category.name}
          </h2>
        )}

        {/* Section principale avec image et infos */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
          
          {/* Image */}
          {(prestation.heroImage?.asset?.url || prestation.image?.asset?.url) && (
            <div className="flex-shrink-0">
              <div className="w-64 h-48 relative rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={prestation.heroImage?.asset?.url || prestation.image?.asset?.url}
                  alt={prestation.heroImage?.alt || prestation.image?.alt || prestation.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Infos prestation */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2 italic">
              {prestation.title}
            </h3>
            
            <p className="text-lg text-gray-600 mb-2 italic">
              {prestation.shortDescription}
            </p>
            
            <div className="text-4xl font-bold text-[#b85cb3] mb-4">
              {prestation.price}
              {prestation.currency === 'EUR' ? '€' : '$'}
            </div>

            {prestation.duration && (
              <div className="text-gray-600">
                Durée : {prestation.duration}
              </div>
            )}
          </div>
        </div>

        {/* Titre de section détaillée */}
        {prestation.detailPage?.whatIsSection?.title && (
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 italic underline">
            {prestation.detailPage.whatIsSection.title}
          </h2>
        )}

        {/* Citation si présente */}
        {prestation.quote && (
          <div className="text-center mb-8 px-8">
            <blockquote className="text-lg italic text-gray-700 leading-relaxed">
              &quot;{prestation.quote.text}&quot;
            </blockquote>
            {prestation.quote.author && (
              <cite className="block mt-2 text-[#b85cb3] font-medium">
                {prestation.quote.author}
              </cite>
            )}
          </div>
        )}

        {/* Description principale */}
        {prestation.detailPage?.mainDescription && (
          <div className="text-center mb-8 px-4">
            <PortableText 
              value={prestation.detailPage.mainDescription} 
              components={portableTextComponents}
            />
          </div>
        )}

        {/* Contenu de la section "Qu'est-ce que..." */}
        {prestation.detailPage?.whatIsSection?.content && (
          <div className="text-center mb-8 px-4">
            <PortableText 
              value={prestation.detailPage.whatIsSection.content} 
              components={portableTextComponents}
            />
          </div>
        )}

        {/* Définitions en colonnes */}
        {prestation.detailPage?.whatIsSection?.definitions && 
         prestation.detailPage.whatIsSection.definitions.length > 0 && (
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {prestation.detailPage.whatIsSection.definitions.map((def, index) => (
                <div key={index} className="text-center">
                  <div className="font-bold text-gray-800 mb-1">
                    {def.term}
                  </div>
                  <div className="text-sm text-gray-600">
                    {def.definition}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section processus */}
        {prestation.detailPage?.processSection && (
          <div className="text-center mb-8 px-4">
            {prestation.detailPage.processSection.title && (
              <h3 className="text-xl font-semibold text-gray-800 mb-4 italic">
                {prestation.detailPage.processSection.title}
              </h3>
            )}
            
            {prestation.detailPage.processSection.content && (
              <PortableText 
                value={prestation.detailPage.processSection.content} 
                components={portableTextComponents}
              />
            )}

            {/* Étapes */}
            {prestation.detailPage.processSection.steps && 
             prestation.detailPage.processSection.steps.length > 0 && (
              <div className="space-y-3 mt-6">
                {prestation.detailPage.processSection.steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="font-semibold text-gray-800 mb-1">
                      {step.stepTitle}
                    </div>
                    <div className="text-sm text-gray-600">
                      {step.stepDescription}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Informations complémentaires */}
        {prestation.detailPage?.additionalInfo && (
          <div className="text-center mb-8 px-4">
            <PortableText 
              value={prestation.detailPage.additionalInfo} 
              components={portableTextComponents}
            />
          </div>
        )}
      </div>
    </main>
  );
}

// Génération des métadonnées SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const prestation = await client.fetch(`
    *[_type == "prestation" && slug.current == $slug][0]{
      title,
      shortDescription,
      seo
    }
  `, { slug });

  if (!prestation) {
    return {
      title: 'Prestation non trouvée',
    };
  }

  return {
    title: prestation.seo?.metaTitle || `${prestation.title} | Le Papillon Énergétique`,
    description: prestation.seo?.metaDescription || prestation.shortDescription,
  };
}

// Génération statique des pages
export async function generateStaticParams() {
  const prestations = await client.fetch(`
    *[_type == "prestation" && isActive == true]{
      "slug": slug.current
    }
  `);

  return prestations.map((prestation) => ({
    slug: prestation.slug,
  }));
}