import { Link } from 'react-router-dom'
import styled from 'styled-components'

import useHttp from 'utils/hooks/useHttp'
import LoadingSpinner from 'components/Misc/LoadingSpinner'
import PokemonData from './PokemonData/PokemonData'

const PokemonLink = styled(Link)`
  color: #333;
  border: none;
  box-shadow: 0 1px 2px #00000030;

  &:hover {
    text-decoration: none;
  }

  .badge {
    font-size: 75%;
  }
`

const PokemonLoading = styled.div`
  align-items: center;
  height: 96px;
  padding: 1em;
  width: 100%;
`

const buildUnkownPokemon = (pokemonName) => ({
  id: '???',
  name: pokemonName,
  sprites: {},
  types: [{
    type: {
      name: 'unknown'
    }
  }]
})

const PokemonCard = ({ generationName, pokemonName }) => {
  const {
    data: pokemon,
    hasError,
    isLoading
  } = useHttp(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  return (
    <PokemonLink
      className="card mb-3"
      to={pokemon ? `/generation/${generationName}/pokemon/${pokemonName}` : null}
    >
      {isLoading ? (
        <PokemonLoading>
          <LoadingSpinner />
        </PokemonLoading>
      ) : hasError ? (
        <PokemonData pokemon={buildUnkownPokemon(pokemonName)} />
      ) : (
        <PokemonData pokemon={pokemon} />
      )}
    </PokemonLink>
  )
}

export default PokemonCard
