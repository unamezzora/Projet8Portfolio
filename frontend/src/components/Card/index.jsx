import './card.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import github from '../../assets/gh.png'
import close from '../../assets/Close.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Card({ projet }) {
  return (
    <div className="card">
      <picture className="card__image">
        <source srcSet={projet.cover} media="(min-width: 768px)" />
        <img src={projet.cover_sm} alt={`Projet: ${projet.title}`} />
      </picture>
      <motion.div
        className={`card__couv card__couv--${projet.color}`}
        whileHover={{ scaleX: 0.8, transformOrigin: 'right' }}
        style={{ transformOrigin: 'right' }}
        whileTap={{ scale: 0.98 }}
      >
        <h2 className="card__couv__titre">{projet.title}</h2>
        <p className="card__couv__text">{projet.skills}</p>
      </motion.div>
    </div>
  )
}

Card.propTypes = {
  projet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  }).isRequired,
}

function Page({ projet }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const handleImageClick = (image) => {
    setCurrentImage(image)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setCurrentImage('')
  }

  return (
    <div>
      {projet ? (
        <div className="page">
          <div className="page__projets">
            <div className="page__projets__contenu">
              <h1 className="page__projets__contenu__titre">
                {' '}
                {projet.title}{' '}
              </h1>

              {projet.images.map((image, index) => (
                <div className="page__projets__contenu__image" key={index}>
                  <img
                    src={image}
                    alt={projet.title}
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
            <p className="page__projets__description"> {projet.description} </p>
          </div>
          <div className="page__compet">
            {projet.skills}
            <Link className="page__compet__ferm" to="/">
              <motion.img
                className="page__compet__ferm__icon"
                src={close}
                alt="Retourner sur la page d’accueil"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </div>
          <Link
            to={projet.github}
            className="page__lien"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              className="page__lien__icon"
              src={github}
              alt="GitHub"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="modal__close">&times;</span>
          <img className="modal__image" src={currentImage} alt="Full Screen" />
        </div>
      )}
    </div>
  )
}

Page.propTypes = {
  projet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
}

const ViewProjet = ({ mode, projet }) => {
  if (!projet) {
    return <div>Loading...</div>
  }
  switch (mode) {
    case 'card':
      return <Card projet={projet} />
    case 'page':
      return <Page projet={projet} />
    default:
      return <div>Invalid mode</div>
  }
}

ViewProjet.propTypes = {
  mode: PropTypes.string.isRequired,
  projet: PropTypes.object.isRequired,
}

export default ViewProjet
