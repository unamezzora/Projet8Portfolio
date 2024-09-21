import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import enveloppe from '../../assets/envelope .svg'
import './contact.scss'

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
        <label>Nom</label>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          className="contact__form__nom"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="nom@mail.com"
          className="contact__form__email"
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Bonjour, "
          className="contact__form__message"
        />
        <input
          type="submit"
          value="Envoyer"
          className="contact__form__bouton"
        />
      </form>
      {messageStatus && <p>{messageStatus}</p>}
      <div className="contact__form__adresse">
        <img src={enveloppe} alt="Enveloppe" />
        <p>tatianayouss@gmail.com</p>
      </div>
    </div>
  )
}
