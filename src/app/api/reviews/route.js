import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const forceRefresh = searchParams.get('refresh') === 'true'

  try {

    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const businessName = process.env.BUSINESS_NAME || "Le papillon énergétique"
    const businessLocation = process.env.BUSINESS_LOCATION || "Ganges, Hérault, France"
    const businessCoordinates = process.env.BUSINESS_COORDINATES || "43.9447693,3.7039287"

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Clé API Google Places manquante' },
        { status: 500 }
      )
    }

    console.log('🔍 Recherche Google Places avec:', {
      businessName,
      businessLocation,
      businessCoordinates
    })


    const searchQuery = `${businessName} ${businessLocation}`
    const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?` +
      `query=${encodeURIComponent(searchQuery)}&` +
      `location=${businessCoordinates}&` +
      `radius=1000&` +
      `key=${apiKey}`

    console.log('🌐 URL Text Search:', textSearchUrl)

    const textSearchResponse = await fetch(textSearchUrl)
    const textSearchData = await textSearchResponse.json()

    console.log('📊 Réponse Text Search:', {
      status: textSearchData.status,
      results_count: textSearchData.results?.length || 0
    })

    if (textSearchData.status !== 'OK') {
      return NextResponse.json({
        error: 'Erreur lors de la recherche',
        details: textSearchData.status,
        message: getStatusMessage(textSearchData.status)
      }, { status: 400 })
    }

    if (!textSearchData.results || textSearchData.results.length === 0) {
      return NextResponse.json({
        error: 'Aucun établissement trouvé',
        searchQuery,
        suggestions: [
          'Vérifiez le nom exact de l\'établissement',
          'Vérifiez la localisation (ville, adresse)',
          'L\'établissement a peut-être une fiche Google My Business inactive'
        ]
      }, { status: 404 })
    }


    let bestMatch = textSearchData.results[0]
    

    if (textSearchData.results.length > 1) {
      const [targetLat, targetLng] = businessCoordinates.split(',').map(Number)
      
      bestMatch = textSearchData.results.reduce((best, current) => {
        const bestDistance = calculateDistance(
          targetLat, targetLng,
          best.geometry.location.lat, best.geometry.location.lng
        )
        const currentDistance = calculateDistance(
          targetLat, targetLng,
          current.geometry.location.lat, current.geometry.location.lng
        )
        return currentDistance < bestDistance ? current : best
      })
    }

    const placeId = bestMatch.place_id
    console.log('🎯 Place ID trouvé:', placeId)


    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?` +
      `place_id=${placeId}&` +
      `fields=name,formatted_address,formatted_phone_number,website,opening_hours,rating,user_ratings_total,reviews,photos,geometry&` +
      `language=fr&` +
      `key=${apiKey}`

    console.log('🌐 URL Details:', detailsUrl)

    const detailsResponse = await fetch(detailsUrl)
    const detailsData = await detailsResponse.json()

    console.log('📊 Réponse Details:', {
      status: detailsData.status,
      has_reviews: !!detailsData.result?.reviews
    })

    if (detailsData.status !== 'OK') {
      return NextResponse.json({
        error: 'Erreur lors de la récupération des détails',
        details: detailsData.status,
        place_id: placeId
      }, { status: 400 })
    }

    const businessData = detailsData.result


    const formattedReviews = (businessData.reviews || []).map((review, index) => ({
      id: `review_${index}`,
      author_name: review.author_name,
      author_url: review.author_url,
      profile_photo_url: review.profile_photo_url,
      rating: review.rating,
      relative_time_description: review.relative_time_description,
      text: review.text,
      time: review.time,
      language: review.language
    }))

    const photos = (businessData.photos || []).slice(0, 5).map(photo => ({
      photo_reference: photo.photo_reference,
      url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${apiKey}`,
      html_attributions: photo.html_attributions
    }))

    const response = {
      success: true,
      business: {
        place_id: placeId,
        name: businessData.name,
        address: businessData.formatted_address,
        phone: businessData.formatted_phone_number,
        website: businessData.website,
        rating: businessData.rating || 0,
        user_ratings_total: businessData.user_ratings_total || 0,
        coordinates: {
          lat: businessData.geometry?.location?.lat,
          lng: businessData.geometry?.location?.lng
        },
        opening_hours: businessData.opening_hours ? {
          open_now: businessData.opening_hours.open_now,
          periods: businessData.opening_hours.periods,
          weekday_text: businessData.opening_hours.weekday_text
        } : null,
        photos: photos
      },
      reviews: {
        total: formattedReviews.length,
        data: formattedReviews
      },
      metadata: {
        search_query: searchQuery,
        search_coordinates: businessCoordinates,
        found_results: textSearchData.results.length,
        selected_result: {
          name: bestMatch.name,
          rating: bestMatch.rating,
          user_ratings_total: bestMatch.user_ratings_total
        },
        last_updated: new Date().toISOString(),
        api_usage: {
          text_search: 1,
          place_details: 1,
          total_requests: 2
        }
      }
    }

    console.log('✅ Données formatées:', {
      business_name: response.business.name,
      reviews_count: response.reviews.total,
      rating: response.business.rating
    })

    return NextResponse.json(response)

  } catch (error) {
    console.error('❌ Erreur API:', error)
    return NextResponse.json({
      error: 'Erreur interne du serveur',
      message: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}


function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}


function getStatusMessage(status) {
  const messages = {
    'ZERO_RESULTS': 'Aucun résultat trouvé pour cette recherche',
    'OVER_QUERY_LIMIT': 'Quota API dépassé',
    'REQUEST_DENIED': 'Requête refusée - vérifiez votre clé API',
    'INVALID_REQUEST': 'Requête invalide - paramètres manquants',
    'NOT_FOUND': 'Place ID non trouvé',
    'UNKNOWN_ERROR': 'Erreur inconnue du serveur Google'
  }
  return messages[status] || `Erreur: ${status}`
}


export async function POST() {
  return NextResponse.json(
    { error: 'Méthode non autorisée. Utilisez GET.' },
    { status: 405 }
  )
}