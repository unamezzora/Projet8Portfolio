import React, { useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import photo from '../../assets/photoNB.webp'
import WebDev from '../../assets/WebDev.svg'
import weblink from '../../assets/weblink.svg'
import ordinateur from '../../assets/ordi.webp'
import textDW from '../../assets/texteDW.svg'
import pages from '../../assets/pages.png'
import circle from '../../assets/circleB.png'
import cv from '../../assets/TYS-CV.pdf'
import './apropos.scss'
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

  const [isImage, setIsImage] = useState(true)
  const handleImageClick = () => {
    setIsImage((imageState) => !imageState)
  }

  return (
    <div className="home">
      <motion.div
        className="blocApropos"
        initial={{ opacity: 0, x: -600 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: 'easeInOut',
          type: 'spring',
          duration: 1.5,
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
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
              alt="Tatiana Youssoufa Saidou"
              className="blocBleu__image__photo"
            />
          </div>
          <div className="blocBleu__contenu">
            <div className="blocBleu__contenu__text">
              <p>Je suis</p>
              <motion.img
                src={WebDev}
                alt="Web Developpeur"
                className="blocBleu__contenu__text__dev"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 4,
                }}
              />
            </div>
            <h2 className="blocBleu__contenu__nom">
              Tatiana
              <br />
              Youssoufa Saidou
            </h2>
          </div>
        </div>
      </motion.div>

      <div className="blocMenu">
        <h1 className="blocMenu__titre">Portfolio˺</h1>
        <div className="blocMenu__contenu1">
          <motion.div
            className="blocMenu__contenu1__image"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleImageClick}
          >
            {isImage ? (
              <img src={ordinateur} alt="La conception WEB" />
            ) : (
              <img src={textDW} alt="à propos de moi" />
            )}
          </motion.div>

          <motion.div
            className="blocMenu__contenu1__blocs"
            initial={{ opacity: 0, x: 600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeOut',
              type: 'spring',
              duration: 3.5,
            }}
          >
            <motion.div
              className="blocMenu__contenu1__blocs__gris"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                aria-label="Télécharger CV au format PDF"
              >
                CV
              </a>
            </motion.div>

            <motion.a
              className="blocMenu__contenu1__blocs__bleu"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('contact')
              }}
            >
              Contacts
            </motion.a>
          </motion.div>
        </div>

        <div className="blocMenu__contenu2">
          <motion.a
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeOut',
              type: 'spring',
              duration: 2.0,
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

          <motion.div
            className="blocMenu__contenu2__blocNoir"
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2.5,
            }}
          >
            <img
              className="blocMenu__contenu2__blocNoir__imageBleu"
              src={circle}
              alt="Structure réseau web"
            />
            <motion.img
              className="blocMenu__contenu2__blocNoir__image"
              src={weblink}
              alt="Abstraction"
              initial={{ opacity: 0, x: 600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: 'easeInOut',
                type: 'spring',
                duration: 5.5,
              }}
            />

            <motion.a
              className="blocMenu__contenu2__blocNoir__icon"
              href="#projets"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('projets')
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={pages} alt="Pages" />
            </motion.a>
          </motion.div>
          <motion.div
            className="blocMenu__contenu2__blocBeige"
            initial={{ opacity: 0, x: 600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 3.0,
            }}
            whileHover={{ scaleX: 0.9, transformOrigin: 'left' }}
            style={{ transformOrigin: 'left' }}
            drag="x"
            dragConstraints={{ left: -100, right: 0 }}
          >
            Projets
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Apropos
