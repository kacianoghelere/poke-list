import { Link } from 'react-router-dom'
import styled from 'styled-components'

import useHttp from '../utils/hooks/useHttp'
import PageLayout from '../components/Misc/PageLayout'
import PokemonBasicInfo from '../components/Pokemons/PokemonBasicInfo/PokemonBasicInfo'
import PokemonDetails from '../components/Pokemons/PokemonDetails/PokemonDetails'
import PokemonStats from '../components/Pokemons/PokemonStats/PokemonStats'

const Breadcrumb = styled.ol`
  background-color: #fff5;

  .breadcrumb-item,
  .breadcrumb-item a {
    color: white;
    text-shadow: 1px 1px #0003;

    &.active,
    &:active {
      color: white;
      font-weight: bold;
    }
  }
`

const PokemonName = styled.h1`
  color: white;
  text-transform: capitalize;
  text-shadow: 3px 3px #00000033;
`

const Pokemon = ({ match }) => {
  const { generationName, pokemonName } = match.params

  const {
    data: pokemon,
    hasError,
    isLoading
  } = useHttp(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  return (
    <PageLayout>
      {isLoading ? (
        <img
          alt="Loading..."
          source="https://fc03.deviantart.net/fs70/f/2013/019/b/6/pokeball_by_zel_duh-d5s04qj.gif"
        />
      ) : hasError ? (
        <h2>Error: Can't load {pokemonName} data.</h2>
      ) : (
        <div className="pokemon">
          <nav aria-label="breadcrumb">
            <Breadcrumb className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={`/generation/${generationName}`}>{generationName}</Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                {pokemonName}
              </li>
            </Breadcrumb>
          </nav>
          <PokemonName className="mb-4">{pokemonName}</PokemonName>
          <div className="row">
            <div className="col-sm-3">
              <PokemonBasicInfo pokemon={pokemon} />
              <PokemonStats pokemon={pokemon} />
            </div>
            <div className="col-sm-9">
              <PokemonDetails pokemon={pokemon} />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  )
}

export default Pokemon