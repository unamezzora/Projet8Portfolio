import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './competence.scss'
import html from '../../assets/html.png'
import react from '../../assets/react.png'
import sass from '../../assets/sass.png'
import node from '../../assets/node.png'
import github from '../../assets/github.png'

const Competence = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="contenu">
      <div className="contenu__comp">
        <motion.div
          className="contenu__comp__img"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: 'easeOut',
            type: 'spring',
            duration: 2.0,
          }}
        >
          <img src={html} alt="Liste des competences: HTML, CSS, JavaScript" />
          <div className="contenu__comp__img__titre contenu__comp__img__titre--html">
            HTML CSS JavaScript
          </div>
        </motion.div>

        <motion.div
          className="contenu__comp__img"
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeOut',
            type: 'spring',
            duration: 2.0,
          }}
        >
          <img src={react} alt="Liste des competences: React" />
          <div className="contenu__comp__img__titre contenu__comp__img__titre--react">
            React
          </div>
        </motion.div>
        <motion.div
          className="contenu__comp__img"
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeOut',
            type: 'spring',
            duration: 2.0,
          }}
        >
          <img src={sass} alt="Liste des competences: SASS, SCSS" />
          <div className="contenu__comp__img__titre contenu__comp__img__titre--sass">
            Sass
          </div>
        </motion.div>
        <motion.div
          className="contenu__comp__img"
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeOut',
            type: 'spring',
            duration: 2.0,
          }}
        >
          <img
            src={node}
            alt="Liste des competences: Node.js, Express, MongoDB"
          />
          <div className="contenu__comp__img__titre contenu__comp__img__titre--node">
            Node.js <br /> MongoDB <br /> Express
          </div>
        </motion.div>
        <motion.div
          className="contenu__comp__img"
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: 'easeOut',
            type: 'spring',
            duration: 2.0,
          }}
        >
          <img src={github} alt="Liste des competences: github" />
          <div className="contenu__comp__img__titre contenu__comp__img__titre--github">
            GitHub
          </div>
        </motion.div>
      </div>
      <div className="contenu__formation">
        <ul className="contenu__formation__block">
          <li>Construction d'un site web responsive et dynamique.</li>
          <li>Création d'API et de bases de données.</li>
          <li>
            Optimisation des performances et maintenance de sites web déjà
            existants.
          </li>
          <li>Gestion d'un projet web de A à Z.</li>
        </ul>
        <div className="contenu__formation__block">
          <h3 className="contenu__formation__block__titre">
            Développeur Informatique:
          </h3>
          <p className="contenu__formation__block__desc">
            OpenClassrooms <br /> Diplôme RNCP niveau 5 Bac+2
          </p>
        </div>
        <motion.h2
          className="contenu__formation__couv"
          /*whileHover={{ scaleX: 0.9, transformOrigin: 'right' }}*/
          style={{ transformOrigin: 'right' }}
          drag={isLargeScreen ? 'x' : 'y'}
          dragConstraints={{
            left: 0,
            right: isLargeScreen ? 685 : 0,
            top: 0,
            bottom: isLargeScreen ? 0 : 155,
          }}
        >
          Formation:
        </motion.h2>
      </div>
    </div>
  )
}

export default Competence
