import Competence from '../../components/Competences'
import Apropos from '../../components/Apropos'
import Header from '../../components/Header'
import { Contact } from '../../components/Contact'
import weblinklong from '../../assets/weblinklong.svg'
import '../../style/home.scss'
import Projets from '../../components/Projets'

function Home() {
  return (
    <div className="pagehome">
      <div id="apropos" className="pagehome__apropos">
        <Header />
        <Apropos />
      </div>

      <div id="competences" className="pagehome__competences">
        <Header />
        <div className="pagehome__competences__contenu">
          <h1 className="pagehome__competences__contenu__titre">
            Mes compétences˺
          </h1>
          <div className="pagehome__competences__contenu__bloc">
            <Competence />
          </div>
        </div>
      </div>
      <div className="pagehome__imageLink">
        <img
          className="pagehome__imageLink__img"
          src={weblinklong}
          alt="Schéma de réseau web"
        />
      </div>
      <div id="projets" className="pagehome__projets">
        <Header />
        <div className="pagehome__projets__contenu">
          <h1 className="pagehome__projets__contenu__titre">Projets˺</h1>
          <Projets />
        </div>
      </div>
      <div id="contact" className="pagehome__contact">
        <Header />
        <div className="pagehome__contact__contenu">
          <h1 className="pagehome__contact__contenu__titre">Me contacter˺</h1>
          <Contact />
        </div>
      </div>
      <div className="pagehome__imageLink">
        <img
          className="pagehome__imageLink__img"
          src={weblinklong}
          alt="Abstraction"
        />
      </div>
    </div>
  )
}

export default Home
