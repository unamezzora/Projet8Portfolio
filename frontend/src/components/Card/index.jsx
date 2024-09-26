import './card.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import github from '../../assets/github.png'

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

function Page({ projet }) {
  return (
    <div>
      {projet ? (
        <div className="page">
          <div className="page__contenu">
            <h1 className="page__contenu__titre"> {projet.title} </h1>

            {projet.images.map((image, index) => (
              <div className="page__contenu__projet__image">
                <img key={index} src={image} alt={projet.title} />
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
    </div>
  )
}

const ViewProjet = ({ mode, projet }) => {
  switch (mode) {
    case 'card':
      return <Card projet={projet} />
    case 'page':
      return <Page projet={projet} />
    default:
      return <div>Invalid mode</div>
  }
}

export default ViewProjet

/*



      */
