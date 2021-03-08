import styled from 'styled-components'

import PokemonTypesList from '../../PokemonTypesList/PokemonTypesList'
import PokemonSprite from '../../PokemonSprite/PokemonSprite'

const PokemonImage = styled(PokemonSprite)`
  background-color: #eee;
  height: 96px;
  max-width: 100%;
  object-fit: contain;
`

const PokemonCardBody = styled.div`
  position: relative;
`

const PokemonId = styled.small`
  background-color: #fff;
  border-top-right-radius: 4px;
  color: #999;
  left: 0;
  padding: 4px 16px;
  position: absolute;
  top: -12px;
`

const PokemonName = styled.h5`
  text-transform: capitalize;
`

const PokemonData = ({ pokemon }) => {
  const pokemonTypeClass = `pokemon-type-${pokemon?.types[0].type.name}`

  return (
    <>
      <PokemonImage
        className={`card-img-top ${pokemonTypeClass} faded`}
        pokemon={pokemon}
        role="pokemon-image"
      />
      <PokemonCardBody className="card-body">
        <PokemonId>#{pokemon.id}</PokemonId>
        <PokemonName className="mb-2">{pokemon.name}</PokemonName>
        <PokemonTypesList pokemon={pokemon} />
      </PokemonCardBody>
    </>
  )
}

export default PokemonData