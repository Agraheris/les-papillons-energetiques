"use client"
import Link from 'next/link'

// Données des avis en dur (remplace par les vrais avis Facebook)
const reviewsData = [
   {
    id: 1,
    name: "Matthieu Soriano",
    rating: 5,
    content: "Très belle expérience, Vanessa est très professionnelle, elle prend le temps de la discussion et des explications. Durant les 20min de soins (hors introduction et bilan) je me suis senti serein, détendu et des larmes ont coulé dès lors que le soin énergétique a commencé. J’ai senti un profond bien être et j’ai même pu visualiser la protection que Vanessa a mis en place sur moi, et ce même en ayant les yeux fermés. Après ces 20 minutes de soins énergétiques où elle a pu sentir et travailler d’avantage des blocages au niveau des trois chakras: racine, plexus solaire et chakra de la gorge, Vanessa a pris le temps du bilan et je lui ai fais part de ce que j’avais ressenti, une synthèse de tout ce que je partage ici. Je recommande vraiment.",
    date: "Avril 2023",
  },
  {
    id: 2,
    name: "Deborah Goujon",
    rating: 5,
    content: "Vanessa est une personne très douce, professionnelle et à l'écoute des autres. Le premier soins qu'elle m'a fait c'était pour m'aider à sortir de ma dépression post partum et pendant ce soins j'était sereine, j'ai ressenti du bien être. Ce soins m'a énormément aidé. Le deuxième soins c'était a distance pour mon hyperthyroïdie ,  je me suis dit je ne sais pas si va fonctionner mais j'étais agréablement surprise , quand elle s'est connectée à mon énergie j'ai vue la lumière bleu du chakra de la gorge et une forme en 8 (qui signifie l'infinie et la protection) si j'ai bien compris... Merci beaucoup je recommande les soins de vanessa vous n'allez pas être déçu ",
    date: "Mai 2023",
  },
  {
    id: 3,
    name: "Agnès Borie Courivaud",
    rating: 5,
    content: "Vanessa est une belle âme , très connectée aux énergies célestes. J'étais dans un état émotionnel important et dès qu'elle m'a ouvert le chakra du plexus solaire  , j'ai versé des larmes et dans l'instant suivant je me sentais apaisée, soulagée et la lumière éblouissait mon âme . Après ce magnifique soin je suis repartie enchantée. Expérimentez et vous verrez les résultats incroyables de cette délicieuse  énergéticienne et Fée Papillon.🙌🫶🙏🦋🍀🌹🌟✨🧡💛💚💙💜",
    date : "Mai 2023"
  },
  {
    id: 4,
    name: "Inaya Shine",
    rating: 5,
    content: "Vanessa a la capacité de vous mettre très rapidement dans un puissant bien -être , je recommande ses soins",
    date: "Fevrier 2024",
  },
  {
    id: 5,
    name: "Matthieu Soriano",
    rating: 5,
    content: "Vanessa est extrêmement compétente dans son domaine. je la conseille vivement.",
    date: "Juillet 2024",
  }
]

export default function AvisPage() {
  // Calculer la note moyenne
  const averageRating = (reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length).toFixed(1)
  const totalReviews = reviewsData.length
  const fiveStarReviews = reviewsData.filter(r => r.rating === 5).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300">
      {/* Header avec statistiques */}
      <div className="pt-20 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-serif text-purple-800 mb-6">
            Témoignages clients 🦋
          </h1>
          <p className="text-xl text-purple-700 mb-8">
            Découvrez les expériences transformatrices de celles et ceux qui m&apos;ont fait confiance
          </p>
          
          {/* Statistiques */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 inline-flex items-center space-x-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800">{totalReviews}</div>
              <div className="text-sm text-purple-600">Avis clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800 flex items-center justify-center">
                {averageRating} <span className="text-yellow-500 ml-1 text-2xl">⭐</span>
              </div>
              <div className="text-sm text-purple-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800">{fiveStarReviews}</div>
              <div className="text-sm text-purple-600">Avis 5 étoiles</div>
            </div>
          </div>

          {/* Badge Facebook */}
          <div className="mt-6">
            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              📘 Avis vérifiés Facebook
            </span>
          </div>
        </div>
      </div>

      {/* Grille des avis */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
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
              href="https://www.google.com/search?q=le+papillon+energetique" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
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

      {/* Papillons décoratifs */}
      <div className="fixed top-32 left-10 opacity-20 text-black text-6xl pointer-events-none animate-pulse">
        🦋
      </div>
      <div className="fixed bottom-32 right-16 opacity-15 text-black text-8xl pointer-events-none transform rotate-45 animate-bounce">
        🦋
      </div>
    </div>
  )
}

// Composant carte d'avis
function ReviewCard({ review, index }) {
  const { name, rating, content, date } = review

  return (
    <div 
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      style={{ 
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Avatar avec initiales */}
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
          
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-purple-800">{name}</h3>
              <span className="text-green-500 text-lg" title="Avis vérifié">
                ✓
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

      {/* Contenu */}
      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
        &quot;{content}&quot;
      </blockquote>

      {/* Footer */}
      <div className="flex justify-end items-center text-sm">
        <span className="text-purple-600 font-medium">{date}</span>
      </div>
    </div>
  )
}