//import { useLayoutEffect, useRef } from 'react'
//import gsap from 'gsap'
import { Fade } from 'react-reveal'
import './competence.scss'
import html from '../../assets/html.png'
import react from '../../assets/react.png'
import sass from '../../assets/sass.png'
import node from '../../assets/node.png'
import github from '../../assets/github.png'

function Competence() {
  return (
    <div className="bloc">
      <Fade left delay={500}>
        <div className="bloc__img">
          <img src={html} alt="HTML CSS JavaScript" />
          <div className="bloc__img__titre bloc__img__titre--html">
            HTML CSS JavaScript
          </div>
        </div>
      </Fade>
      <Fade top delay={600}>
        <div className="bloc__img">
          <img src={react} alt="React" />
          <div className="bloc__img__titre bloc__img__titre--react">React</div>
        </div>
      </Fade>
      <Fade bottom delay={700}>
        <div className="bloc__img">
          <img src={sass} alt="Sass" />
          <div className="bloc__img__titre bloc__img__titre--sass">Sass</div>
        </div>
      </Fade>
      <Fade top delay={800}>
        <div className="bloc__img">
          <img src={node} alt="Node.js MongoDb Express" />
          <div className="bloc__img__titre bloc__img__titre--node">
            Node.js <br /> MongoDB <br /> Express
          </div>
        </div>
      </Fade>
      <Fade right delay={900}>
        <div className="bloc__img">
          <img src={github} alt="GitHub" />
          <div className="bloc__img__titre bloc__img__titre--github">
            GitHub
          </div>
        </div>
      </Fade>
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
