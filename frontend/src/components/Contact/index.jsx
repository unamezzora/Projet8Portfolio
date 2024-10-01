import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import enveloppe from '../../assets/envelope .svg'
import './contact.scss'
import { motion } from 'framer-motion'

export const Contact = () => {
  const form = useRef()
  const [messageStatus, setMessageStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  })

  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateField = (name, value) => {
    let error = ''
    if (name === 'nom' && !value.trim()) {
      error = 'Le nom est requis.'
    }
    if (name === 'email') {
      if (!value) {
        error = "L'adresse email est requise."
      } else if (!emailRegEx.test(value)) {
        error = "L'adresse email n'est pas valide."
      }
    }
    if (name === 'message' && !value.trim()) {
      error = 'Le message est requis.'
    }
    return error
  }

  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    })
  }

  const sendEmail = async (e) => {
    e.preventDefault()

    if (!validateForm()) return
    setLoading(true)
    try {
      const result = await emailjs.sendForm(
        'service_k5kohic',
        'template_ptep4ah',
        form.current,
        'S-hH2pE2v95KEkpL_'
      )
      console.log(result.text)
      setMessageStatus('Votre message a bien été envoyé!')
    } catch (error) {
      console.log(error.text)
      setMessageStatus("Echec de l'envoi du message!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          className="contact__form__bloc contact__form__bloc--nom"
          value={formData.nom}
          onChange={handleChange}
          autoComplete="name"
        />
        {errors.nom && <p className="contact__form__error">{errors.nom}</p>}
        <input
          type="email"
          name="email"
          placeholder="email@email.fr"
          className="contact__form__bloc contact__form__bloc--email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        {errors.email && <p className="contact__form__error">{errors.email}</p>}
        <textarea
          name="message"
          placeholder="Message"
          className="contact__form__bloc contact__form__bloc--message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="contact__form__error">{errors.message}</p>
        )}
        <motion.input
          type="submit"
          value={loading ? 'Envoi en cours...' : 'Envoyer'}
          className="contact__form__bloc contact__form__bloc--bouton"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        />
      </form>

      {messageStatus && <p className="contact__message">{messageStatus}</p>}

      <div className="contact__adresse">
        <img src={enveloppe} alt="Enveloppe" />
        <p>tatianayouss@gmail.com</p>
      </div>
    </div>
  )
}
