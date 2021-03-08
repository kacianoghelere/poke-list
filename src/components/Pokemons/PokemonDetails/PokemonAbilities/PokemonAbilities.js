import { useContext } from 'react'
import styled from 'styled-components'

import PokemonContext from '../../../../contexts/pokemon-context'

const AbilityBadge = styled.span`
  font-size: 100%;
  text-shadow: 1px 1px #00000055;
`

const PokemonAbilities = () => {
  const { pokemon } = useContext(PokemonContext)

  return (
    <div className="card mb-3 pokemon-abilities">
      <div className="card-body">
        <h3 className="card-title">Abilities</h3>
        {pokemon.abilities.map(({ ability }) => (
          <AbilityBadge
            className="badge badge-pill badge-secondary mb-2 mr-2"
            key={ability.name}
          >
            {ability.name}
          </AbilityBadge>
        ))}
      </div>
    </div>
  )
}

export default PokemonAbilities