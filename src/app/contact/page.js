'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    prenom: '',
    from_email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    console.log('🔍 Variables env:', {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    })

    try {
      // Envoi de l'email
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          prenom: formData.prenom,
          from_email: formData.from_email,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      console.log('✅ Email envoyé:', result)
      setStatus('success')
      setFormData({ from_name: '', prenom: '', from_email: '', message: '' })
      
    } catch (error) {
      console.error('❌ Erreur complète:', error)
      console.error('❌ Message d\'erreur:', error.message)
      console.error('❌ Stack:', error.stack)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-4">
          Contact
        </h1>
        <p className="text-center text-purple-600 mb-8">
          Contactez-moi pour prendre rendez-vous ou pour toute question
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Nom */}
            <div>
              <label className="block text-purple-700 font-medium mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            {/* Prénom */}
            <div>
              <label className="block text-purple-700 font-medium mb-2">
                Prénom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Votre prénom"
                required
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-purple-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="votre.email@exemple.com"
                required
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-purple-700 font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Décrivez votre demande, vos besoins ou posez votre question..."
                required
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
              />
            </div>

            {/* Bouton Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {/* Messages de statut */}
            {status === 'success' && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                ✅ Message envoyé avec succès ! Je vous répondrai rapidement.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                ❌ Erreur lors de l&apos;envoi. Veuillez réessayer.
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  )
}