import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ViewProjet from '../../components/Card'

function Portfolio() {
  const { id: projetId } = useParams()
  const [projetData, setProjetData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (projetId) {
      fetch('/data.json')
        .then((response) => response.json())
        .then((jsonResponse) => {
          const projet = jsonResponse.find((item) => item._id === projetId)
          if (!projet) {
            navigate('/*')
          }
          setProjetData(projet)
        })
        .catch((error) => {
          console.error('Error fetching projet data:', error)
          navigate('/*')
        })
    }
  }, [projetId, navigate])

  return (
    <div>
      {projetData ? (
        <ViewProjet mode="page" projet={projetData} />
      ) : (
        <p>La page que vous demandez n'existe pas</p>
      )}
    </div>
  )
}

export default Portfolio
