import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import './header.scss'

// Регистрация плагина
gsap.registerPlugin(ScrollToPlugin)

function Header() {
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
    <nav className="navbar">
      <a
        className="navbar__link"
        href="#apropos"
        onClick={(e) => {
          e.preventDefault()
          handleScroll('apropos')
        }}
      >
        À propos
      </a>
      <a
        className="navbar__link"
        href="#competences"
        onClick={(e) => {
          e.preventDefault()
          handleScroll('competences')
        }}
      >
        Compétences
      </a>
      <a
        className="navbar__link"
        href="#projets"
        onClick={(e) => {
          e.preventDefault()
          handleScroll('projets')
        }}
      >
        Projets
      </a>

      <a
        className="navbar__link"
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          handleScroll('contact')
        }}
      >
        Contacts
      </a>
    </nav>
  )
}

export default Header
