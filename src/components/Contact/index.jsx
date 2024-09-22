import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import enveloppe from '../../assets/envelope .svg'
import './contact.scss'
import { motion } from 'framer-motion'

export const Contact = () => {
  const form = useRef()
  const [messageStatus, setMessageStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_k5kohic', 'template_ptep4ah', form.current, {
        publicKey: 'S-hH2pE2v95KEkpL_',
      })
      .then(
        (result) => {
          console.log(result.text)
          setMessageStatus('Votre message a bien été envoyé!')
        },
        (error) => {
          console.log(error.text)
          setMessageStatus("Echec de l'envoi du message!")
        }
      )
  }

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          className="contact__form__bloc contact__form__bloc--nom"
        />
        <input
          type="email"
          name="email"
          placeholder="email@email.fr"
          className="contact__form__bloc contact__form__bloc--email"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="contact__form__bloc contact__form__bloc--message"
        />
        <motion.input
          type="submit"
          value="Envoyer"
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
