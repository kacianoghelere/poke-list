import { useContext } from 'react'
import styled from 'styled-components'

import PokemonContext from 'contexts/pokemon-context'

const MoveBadge = styled.span`
  font-size: 100%;
  text-shadow: 1px 1px #00000055;
`

const PokemonMoves = () => {
  const { pokemon } = useContext(PokemonContext)

  return (
    <div className="card mb-3 pokemon-moves">
      <div className="card-body">
        <h3 className="card-title mb-3">Moves</h3>
        {pokemon.moves.length ? (
          pokemon.moves.map(({ move }) => (
            <MoveBadge
              className="badge badge-pill badge-secondary mb-2 mr-2"
              key={move.name}
            >
              {move.name}
            </MoveBadge>
          ))
        ) : (
          <span>This pokemon doesn't have a moves list.</span>
        )}
      </div>
    </div>
  )
}

export default PokemonMoves