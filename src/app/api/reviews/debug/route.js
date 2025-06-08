import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const testQuery = searchParams.get('test') || '1'

  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: 'Clé API manquante' }, { status: 500 })
    }

    const coordinates = "43.9447693,3.7039287"
    
    // Différentes variantes de recherche à tester
    const searchVariants = [
      {
        id: 1,
        query: "Le papillon énergétique",
        description: "Nom exact avec espaces"
      },
      {
        id: 2, 
        query: "papillon énergétique",
        description: "Sans 'Le'"
      },
      {
        id: 3,
        query: "papillon energetique",
        description: "Sans accents"
      },
      {
        id: 4,
        query: "Le papillon énergétique Ganges",
        description: "Avec ville"
      },
      {
        id: 5,
        query: "papillon énergétique rue des Arts Ganges",
        description: "Avec adresse complète"
      },
      {
        id: 6,
        query: "Le papillon énergétique 34190",
        description: "Avec code postal"
      },
      {
        id: 7,
        query: "médecine alternative Ganges",
        description: "Par type d'activité"
      },
      {
        id: 8,
        query: "thérapeute énergétique Ganges",
        description: "Par profession"
      }
    ]

    const testIndex = parseInt(testQuery) - 1
    const currentTest = searchVariants[testIndex] || searchVariants[0]
    
    console.log(`🧪 Test ${currentTest.id}: ${currentTest.description}`)
    console.log(`🔍 Requête: "${currentTest.query}"`)

    // Test avec Text Search
    const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?` +
      `query=${encodeURIComponent(currentTest.query)}&` +
      `location=${coordinates}&` +
      `radius=5000&` + // Augmenté à 5km
      `language=fr&` +
      `key=${apiKey}`

    console.log('🌐 URL complète:', textSearchUrl)

    const textResponse = await fetch(textSearchUrl)
    const textData = await textResponse.json()

    // Test avec Nearby Search en parallèle
    const nearbySearchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?` +
      `location=${coordinates}&` +
      `radius=5000&` +
      `type=health&` + // Type santé/bien-être
      `language=fr&` +
      `key=${apiKey}`

    const nearbyResponse = await fetch(nearbySearchUrl)
    const nearbyData = await nearbyResponse.json()

    // Recherche dans un rayon plus large (test de géolocalisation)
    const wideSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?` +
      `query=${encodeURIComponent("papillon énergétique France")}&` +
      `key=${apiKey}`

    const wideResponse = await fetch(wideSearchUrl)
    const wideData = await wideResponse.json()

    const results = {
      test_info: {
        test_number: currentTest.id,
        description: currentTest.description,
        query: currentTest.query,
        coordinates: coordinates,
        all_tests: searchVariants.map(v => `Test ${v.id}: ${v.description}`)
      },
      text_search: {
        status: textData.status,
        results_count: textData.results?.length || 0,
        results: textData.results?.slice(0, 3).map(r => ({
          name: r.name,
          formatted_address: r.formatted_address,
          place_id: r.place_id,
          rating: r.rating,
          types: r.types
        })) || [],
        error_message: textData.error_message
      },
      nearby_search: {
        status: nearbyData.status,
        results_count: nearbyData.results?.length || 0,
        health_businesses: nearbyData.results?.slice(0, 5).map(r => ({
          name: r.name,
          vicinity: r.vicinity,
          place_id: r.place_id,
          rating: r.rating,
          types: r.types
        })) || [],
        error_message: nearbyData.error_message
      },
      wide_search: {
        status: wideData.status,
        results_count: wideData.results?.length || 0,
        france_results: wideData.results?.filter(r => 
          r.formatted_address?.toLowerCase().includes('france')
        ).slice(0, 3).map(r => ({
          name: r.name,
          formatted_address: r.formatted_address,
          place_id: r.place_id,
          rating: r.rating
        })) || [],
        error_message: wideData.error_message
      },
      next_test: {
        message: `Pour tester la variante suivante, utilisez: /api/reviews/debug?test=${currentTest.id + 1}`,
        available_tests: searchVariants.length
      }
    }

    return NextResponse.json(results)

  } catch (error) {
    console.error('❌ Erreur debug:', error)
    return NextResponse.json({
      error: 'Erreur lors du debug',
      message: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Méthode non autorisée. Utilisez GET.' },
    { status: 405 }
  )
}