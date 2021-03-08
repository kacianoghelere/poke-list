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

const PokemonData = ({ pokemon }) => {
  const pokemonTypeClass = `pokemon-type-${pokemon?.types[0].type.name}`

  return (
    <>
      <PokemonImage
        className={`card-img-top ${pokemonTypeClass} faded`}
        pokemon={pokemon}
      />
      <PokemonCardBody className="card-body">
        <PokemonId>#{pokemon.id}</PokemonId>
        <h5 className="text-capitalize mb-2">{pokemon.name}</h5>
        <PokemonTypesList pokemon={pokemon} />
      </PokemonCardBody>
    </>
  )
}

export default PokemonData