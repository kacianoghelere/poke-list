import { Link } from 'react-router-dom'

const GenerationCard = ({ generationName }) => (
  <Link to={`/generation/${generationName}`}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{generationName}</h5>
      </div>
    </div>
  </Link>
)

export default GenerationCard
