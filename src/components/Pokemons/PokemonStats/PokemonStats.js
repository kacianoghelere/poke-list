import { useContext } from 'react'
import styled from 'styled-components'

import PokemonContext from 'contexts/pokemon-context'

const ProgressBar = styled.div`
  background-color: #ee5281;
`

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
            <p className="mb-1">
              <strong className="text-capitalize">{stat.name}</strong>: {base_stat}
            </p>
            <div className="progress">
              <ProgressBar
                className="progress-bar"
                role="progressbar"
                style={{ width: `${100 * base_stat/255}%` }}
                aria-valuenow={base_stat}
                aria-valuemin="0"
                aria-valuemax="255"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonStats