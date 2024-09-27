import { Link } from 'react-router-dom'
import '../../style/error.scss'

function Error() {
  return (
    <div className="error">
      <p className="error__text">
        <span>Oups!</span> La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
