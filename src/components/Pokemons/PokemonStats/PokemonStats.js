import { useContext } from 'react'

import PokemonContext from '../../../contexts/pokemon-context'

const PokemonStats = () => {
  const { pokemon } = useContext(PokemonContext)

  return (
    <div className="card mb-3 pokemon-stats">
      <div className="card-body">
        <h5 className="card-title mb-0">Stats</h5>
      </div>
      <div className="list-group list-group-flush">
        {pokemon.stats.map(({ base_stat, stat }) => (
          <div
            className="list-group-item"
            key={stat.name}
          >
            <strong className="text-capitalize">{stat.name}</strong>: {base_stat}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonStats