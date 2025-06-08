// components/GoogleReviews.js
// Composant élégant pour afficher les avis Google

'use client';

import { useState, useEffect } from 'react';
import { Star, MapPin, Phone, ExternalLink, RefreshCw } from 'lucide-react';
import Image from 'next/image';

const GoogleReviews = () => {
  const [reviewsData, setReviewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/reviews');
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des avis');
      }
      
      const data = await response.json();
      setReviewsData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  const formatText = (text) => {
    if (!text) return '';
    return text.length > 200 ? text.substring(0, 200) + '...' : text;
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-6">
            <div className="h-8 bg-gray-300 rounded-lg mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="grid gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="text-red-600 mb-4">
            <ExternalLink className="w-8 h-8 mx-auto mb-2" />
            <p className="font-medium">Impossible de charger les avis</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
          <button
            onClick={fetchReviews}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  if (!reviewsData) return null;

  const { business, reviews } = reviewsData;

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* En-tête avec infos business */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border border-purple-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {business.name}
            </h2>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{business.address}</span>
            </div>
            {business.phone && (
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{business.phone}</span>
              </div>
            )}
          </div>
          
          {business.rating > 0 && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {renderStars(Math.round(business.rating))}
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {business.rating.toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">
                {business.totalReviews} avis
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Liste des avis */}
      {reviews && reviews.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Avis clients ({reviews.length})
            </h3>
            <button
              onClick={fetchReviews}
              className="text-purple-600 hover:text-purple-700 transition-colors inline-flex items-center gap-2 text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              Actualiser
            </button>
          </div>

          <div className="grid gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {review.profilePhoto && (
                    <Image
                      src={review.profilePhoto}
                      alt={review.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">
                        {review.author}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {review.relativeTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    
                    {review.text && (
                      <p className="text-gray-700 leading-relaxed">
                        {formatText(review.text)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lien vers Google */}
          <div className="text-center mt-8">
            <a
              href="https://g.co/kgs/xDTRDhZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Voir tous les avis sur Google
            </a>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">Aucun avis trouvé</p>
            <p className="text-sm">Les avis apparaîtront ici automatiquement</p>
          </div>
          <a
            href="https://g.co/kgs/xDTRDhZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors mt-4"
          >
            <ExternalLink className="w-4 h-4" />
            Laisser un avis sur Google
          </a>
        </div>
      )}
    </div>
  );
};

export default GoogleReviews;