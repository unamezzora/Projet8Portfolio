import './projets.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ViewProjet from '../Card'

function Projets() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`/data.json`).then((response) =>
      response
        .json()
        .then((data) => setData(data))
        .catch((error) => console.log(error))
    )
  }, [])

  return (
    <div className="projets">
      {data.map((projet) => (
        <Link
          key={`${projet._id}`}
          to={`/projet/${projet._id}`}
          className="projets__card"
        >
          <ViewProjet mode="card" projet={projet} />
        </Link>
      ))}
    </div>
  )
}
export default Projets
