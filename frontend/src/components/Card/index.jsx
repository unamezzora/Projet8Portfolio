import './card.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
        <div>
          <div> {projet.title} </div>
          <div> {projet.description} </div>
          <div> {projet.skills} </div>
          <Link to={projet.github}>GitHub</Link>

          <div>
            {projet.images.map((image, index) => (
              <img key={index} src={image} alt={projet.title} />
            ))}
          </div>
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
