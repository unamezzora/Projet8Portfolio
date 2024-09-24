import './projets.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ViewProjet from '../Card'

function Projets() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/api/projet`).then((response) =>
      response
        .json()
        .then((data) => setData(data))
        .catch((error) => console.log(error))
    )
  }, [])

  return (
    <div className="projets">
      {data.map((projet) => (
        <Link key={`${projet.id}`} to={`/projet/${projet.id}`}>
          <ViewProjet mode="card" projet={projet} />
        </Link>
      ))}
    </div>
  )
}
export default Projets
