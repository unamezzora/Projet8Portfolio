import { motion } from 'framer-motion'
import './competence.scss'
import html from '../../assets/html.png'
import react from '../../assets/react.png'
import sass from '../../assets/sass.png'
import node from '../../assets/node.png'
import github from '../../assets/github.png'

function Competence() {
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
        <p className="contenu__formation__text">OpenClassrooms (Bac+2)</p>
        <p className="contenu__formation__text">Développeur Web</p>
        <motion.p
          className="contenu__formation__couv"
          whileHover={{ scaleX: 0.9, transformOrigin: 'right' }}
          style={{ transformOrigin: 'right' }}
          drag="x"
          dragConstraints={{ left: 0, right: 400 }}
        >
          Formation:
        </motion.p>
      </div>
    </div>
  )
}

export default Competence

/*return (
  <div className="bloc">
    <div className="bloc__img">
      <img src={html} alt="" />
    </div>
    <div className="bloc__img">
      <img src={react} alt="" />
    </div>
    <div className="bloc__img">
      <img src={sass} alt="" />
    </div>
    <div className="bloc__img">
      <img src={node} alt="" />
    </div>
    <div className="bloc__img">
      <img src={github} alt="" />
    </div>
  </div>
)*/
