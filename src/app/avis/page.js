"use client"
import GoogleReviews from '../components/GoogleReviews'
import { useState } from 'react'

// Tes données Facebook existantes
const facebookReviewsData = [
   {
    id: 1,
    name: "Matthieu Soriano",
    rating: 5,
    content: "Très belle expérience, Vanessa est très professionnelle, elle prend le temps de la discussion et des explications. Durant les 20min de soins (hors introduction et bilan) je me suis senti serein, détendu et des larmes ont coulé dès lors que le soin énergétique a commencé. J'ai senti un profond bien être et j'ai même pu visualiser la protection que Vanessa a mis en place sur moi, et ce même en ayant les yeux fermés. Après ces 20 minutes de soins énergétiques où elle a pu sentir et travailler d'avantage des blocages au niveau des trois chakras: racine, plexus solaire et chakra de la gorge, Vanessa a pris le temps du bilan et je lui ai fais part de ce que j'avais ressenti, une synthèse de tout ce que je partage ici. Je recommande vraiment.",
    date: "Avril 2023",
    platform: "facebook"
  },
  {
    id: 2,
    name: "Deborah Goujon",
    rating: 5,
    content: "Vanessa est une personne très douce, professionnelle et à l'écoute des autres. Le premier soins qu'elle m'a fait c'était pour m'aider à sortir de ma dépression post partum et pendant ce soins j'était sereine, j'ai ressenti du bien être. Ce soins m'a énormément aidé. Le deuxième soins c'était a distance pour mon hyperthyroïdie ,  je me suis dit je ne sais pas si va fonctionner mais j'étais agréablement surprise , quand elle s'est connectée à mon énergie j'ai vue la lumière bleu du chakra de la gorge et une forme en 8 (qui signifie l'infinie et la protection) si j'ai bien compris... Merci beaucoup je recommande les soins de vanessa vous n'allez pas être déçu ",
    date: "Mai 2023",
    platform: "facebook"
  },
  {
    id: 3,
    name: "Agnès Borie Courivaud",
    rating: 5,
    content: "Vanessa est une belle âme , très connectée aux énergies célestes. J'étais dans un état émotionnel important et dès qu'elle m'a ouvert le chakra du plexus solaire  , j'ai versé des larmes et dans l'instant suivant je me sentais apaisée, soulagée et la lumière éblouissait mon âme . Après ce magnifique soin je suis repartie enchantée. Expérimentez et vous verrez les résultats incroyables de cette délicieuse  énergéticienne et Fée Papillon.🙌🫶🙏🦋🍀🌹🌟✨🧡💛💚💙💜",
    date : "Mai 2023",
    platform: "facebook"
  },
  {
    id: 4,
    name: "Inaya Shine",
    rating: 5,
    content: "Vanessa a la capacité de vous mettre très rapidement dans un puissant bien -être , je recommande ses soins",
    date: "Fevrier 2024",
    platform: "facebook"
  },
  {
    id: 5,
    name: "Matthieu Soriano",
    rating: 5,
    content: "Vanessa est extrêmement compétente dans son domaine. je la conseille vivement.",
    date: "Juillet 2024",
    platform: "facebook"
  }
]

export default function AvisPage() {
  const [activeTab, setActiveTab] = useState('tous') // 'tous', 'facebook', 'google'
  
  // Statistiques Facebook
  const facebookAverage = (facebookReviewsData.reduce((sum, review) => sum + review.rating, 0) / facebookReviewsData.length).toFixed(1)
  const totalFacebookReviews = facebookReviewsData.length
  const facebookFiveStars = facebookReviewsData.filter(r => r.rating === 5).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300">
      {/* Header principal */}
      <div className="pt-20 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-serif text-purple-800 mb-6">
            Témoignages clients 🦋
          </h1>
          <p className="text-xl text-purple-700 mb-8">
            Découvrez les expériences transformatrices de celles et ceux qui m&apos;ont fait confiance
          </p>
          
          {/* Statistiques globales Facebook */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 inline-flex items-center space-x-8 shadow-lg mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800">{totalFacebookReviews}</div>
              <div className="text-sm text-purple-600">Avis Facebook</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800 flex items-center justify-center">
                {facebookAverage} <span className="text-yellow-500 ml-1 text-2xl">⭐</span>
              </div>
              <div className="text-sm text-purple-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800">{facebookFiveStars}</div>
              <div className="text-sm text-purple-600">Avis 5 étoiles</div>
            </div>
          </div>

          {/* Onglets de navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('tous')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'tous' 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'text-purple-600 hover:bg-purple-50'
                }`}
              >
                🌟 Tous les avis
              </button>
              <button
                onClick={() => setActiveTab('facebook')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ml-2 ${
                  activeTab === 'facebook' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                📘 Facebook
              </button>
              <button
                onClick={() => setActiveTab('google')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ml-2 ${
                  activeTab === 'google' 
                    ? 'bg-red-600 text-white shadow-md' 
                    : 'text-red-600 hover:bg-red-50'
                }`}
              >
                🔍 Google
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu selon l'onglet actif */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Onglet: Tous les avis */}
        {activeTab === 'tous' && (
          <div className="space-y-12">
            {/* Section Facebook */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-lg font-medium">
                  📘 Témoignages Facebook
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facebookReviewsData.map((review, index) => (
                  <FacebookReviewCard key={review.id} review={review} index={index} />
                ))}
              </div>
            </div>

            {/* Section Google */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-lg font-medium">
                  🔍 Avis Google
                </div>
              </div>
              <GoogleReviews />
            </div>
          </div>
        )}

        {/* Onglet: Facebook uniquement */}
        {activeTab === 'facebook' && (
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-lg font-medium">
                📘 Témoignages Facebook vérifiés
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facebookReviewsData.map((review, index) => (
                <FacebookReviewCard key={review.id} review={review} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Onglet: Google uniquement */}
        {activeTab === 'google' && (
          <div>
            <GoogleReviews />
          </div>
        )}
      </div>

      {/* Section CTA - Laisser un avis */}
      <div className="bg-white/95 backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif text-purple-800 mb-4">
            Vous avez vécu une expérience avec moi ?
          </h2>
          <p className="text-purple-700 mb-8 text-lg">
            Partagez votre témoignage pour aider d&apos;autres personnes à découvrir les bienfaits de l&apos;énergie
          </p>
          
          {/* Boutons pour laisser un avis */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://g.co/kgs/xDTRDhZ" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
            >
              🔍 Laisser un avis Google
            </a>
            <a 
              href="https://www.facebook.com/lepapillonenergetique" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-800 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl"
            >
              📘 Avis Facebook
            </a>
          </div>
        </div>
      </div>


      <div className="fixed bottom-32 right-16 opacity-15 text-black text-8xl pointer-events-none">
        🦋
      </div>
    </div>
  )
}


function FacebookReviewCard({ review, index }) {
  const { name, rating, content, date } = review

  return (
    <div 
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-500"
      style={{ 
        animationDelay: `${index * 150}ms`
      }}
    >

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">

          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
          
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-purple-800">{name}</h3>
              <span className="text-blue-500 text-lg" title="Avis vérifié Facebook">
                📘
              </span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>


      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
        &quot;{content}&quot;
      </blockquote>


      <div className="flex justify-between items-center text-sm">
        <span className="text-blue-600 font-medium">{date}</span>
        <span className="text-blue-500 text-xs">Facebook</span>
      </div>
    </div>
  )
}