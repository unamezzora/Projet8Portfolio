import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import photo from '../../assets/photo.svg'
import WebDev from '../../assets/WebDev.svg'
import weblink from '../../assets/weblink.svg'
import ordinateur from '../../assets/ordinateur.svg'
import './apropos.scss'
import { Fade } from 'react-reveal'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollToPlugin)

function Apropos() {
  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      gsap.to(window, {
        scrollTo: { y: element, offsetY: 50 },
        duration: 1.5,
        ease: 'power2.inOut',
      })
    }
  }
  return (
    <div className="home">
      <Fade left>
        <div className="blocApropos">
          <div className="blocTitre">
            <div className="blocTitre__titre">À propos</div>
            <div className="blocTitre__bloc"></div>
          </div>
          <div className="blocBleu">
            <div className="blocBleu__image">
              <div className="blocBleu__image__ellipseBlanche">
                <div className="blocBleu__image__ellipseRose"></div>
              </div>
              <img
                src={photo}
                alt="Tatiana"
                className="blocBleu__image__photo"
              />
            </div>
            <div className="blocBleu__contenu">
              <div className="blocBleu__contenu__text">
                <p>Je suis</p>
                <img
                  src={WebDev}
                  alt="Web Developpeur"
                  className="blocBleu__contenu__text__dev"
                />
              </div>
              <p className="blocBleu__contenu__nom">
                Tatiana
                <br />
                Youssoufa Saidou
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <div className="blocMenu">
        <h1 className="blocMenu__titre">Portfolio˺</h1>
        <div className="blocMenu__contenu1">
          <div className="blocMenu__contenu1__image">
            <img src={ordinateur} alt="La conception WEB" />
          </div>

          <div className="blocMenu__contenu1__blocs">
            <Fade top delay={500}>
              <div className="blocMenu__contenu1__blocs__gris">CV</div>
            </Fade>
            <Fade right delay={400}>
              <a
                className="blocMenu__contenu1__blocs__bleu"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll('contact')
                }}
              >
                Contacts
              </a>
            </Fade>
          </div>
        </div>

        <div className="blocMenu__contenu2">
          <motion.a
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              duration: 1.5,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="blocMenu__contenu2__blocRose"
            href="#competences"
            onClick={(e) => {
              e.preventDefault()
              handleScroll('competences')
            }}
          >
            Mes compétences
          </motion.a>

          <Fade bottom delay={200}>
            <div className="blocMenu__contenu2__blocNoir">
              <img
                className="blocMenu__contenu2__blocNoir__image"
                src={weblink}
                alt="Abstraction"
              />
            </div>
          </Fade>
          <Fade right delay={300}>
            <a
              className="blocMenu__contenu2__blocBeige"
              href="#projets"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('projets')
              }}
            >
              Projets
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

/*
<div className="competences">
        <h1 className="competences__titre">Mes compétences˺</h1>
      </div>
      <div className="imageLink">
        <img className="imageLink__img" src={weblinklong} alt="Abstraction" />
      </div>
      <div className="projets">
        <h1 className="projets__titre">Projets˺</h1>
      </div>
      <div className="contact">
        <h1 className="contact__titre">Me contacter˺</h1>
      </div>
*/

export default Apropos

//<Fade bottom delay={100}></Fade>
