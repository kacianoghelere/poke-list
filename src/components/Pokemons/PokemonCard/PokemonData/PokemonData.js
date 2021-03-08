import styled from 'styled-components'

import PokemonTypesList from '../../PokemonTypesList/PokemonTypesList'
import PokemonSprite from '../../PokemonSprite/PokemonSprite'

const PokemonImage = styled(PokemonSprite)`
  background-color: #eee;
  height: 96px;
  max-width: 100%;
  object-fit: contain;
`

const PokemonData = ({ pokemon }) => {
  const pokemonTypeClass = `pokemon-type-${pokemon?.types[0].type.name}`

  return (
    <>
      <PokemonImage
        className={`card-img-top ${pokemonTypeClass} faded`}
        pokemon={pokemon}
      />
      <div className="card-body">
        <small className="pokemon-id">#{pokemon.id}</small>
        <h5 className="text-capitalize mb-2">{pokemon.name}</h5>
        <PokemonTypesList pokemon={pokemon} />
      </div>
    </>
  )
}

export default PokemonData