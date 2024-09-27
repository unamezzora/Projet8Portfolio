import './card.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import github from '../../assets/github.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Card({ projet }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={projet.cover} alt={projet.title} />
      </div>
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
          <div className="page__contenu">
            <h1 className="page__contenu__titre"> {projet.title} </h1>

            {projet.images.map((image, index) => (
              <div className="page__contenu__projet__image" key={index}>
                <img
                  src={image}
                  alt={projet.title}
                  onClick={() => handleImageClick(image)}
                />
              </div>
            ))}

            <p className="page__contenu__description"> {projet.description} </p>
          </div>
          <div className="page__compet"> {projet.skills} </div>
          <Link
            to={projet.github}
            className="page__lien"
            target="_blank"
            rel="noreferrer"
          >
            <img className="page__lien__icon" src={github} alt="GitHub" />
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

/*



      */
