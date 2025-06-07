"use client"
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Reset des messages d'erreur quand l'utilisateur tape
    if (submitStatus === 'error') {
      setSubmitStatus('')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', surname: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Une erreur est survenue')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus('error')
      setErrorMessage('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.surname && formData.email && formData.message

  return (
    <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300 p-4 relative">
      <div className="max-w-2xl mx-auto py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif text-purple-800 mb-4">Contact</h2>
          <p className="text-purple-700">
            Contactez-moi pour prendre rendez-vous ou pour toute question
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <div>
                  <strong>Message envoyé avec succès !</strong>
                  <p className="text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <div className="flex items-center">
                <span className="text-red-500 mr-2">❌</span>
                <div>
                  <strong>Erreur d&apos;envoi</strong>
                  <p className="text-sm mt-1">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
         
            <div>
              <label className="block text-sm font-medium text-purple-800 mb-2">
                Nom *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-purple-100 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-800 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-purple-100 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="Votre prénom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-800 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-purple-100 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-800 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-purple-100 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none"
                placeholder="Décrivez votre demande, vos besoins ou posez votre question..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="w-full py-4 bg-purple-800 text-white font-medium rounded-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Envoi en cours...
                </div>
              ) : (
                'Envoyer le message'
              )}
            </button>
          </form>
        </div>

        <div className="absolute top-32 left-20 opacity-30 text-black text-7xl pointer-events-none transform -rotate-12">
          🦋
        </div>
        <div className="absolute bottom-40 right-32 opacity-25 text-black text-9xl pointer-events-none transform rotate-45">
          🦋
        </div>
      </div>
    </div>
  )
}