import { Link } from 'react-router-dom'


import useHttp from '../../../utils/hooks/useHttp'
import LoadingSpinner from '../../Misc/LoadingSpinner'
import PokemonTypesList from '../PokemonTypesList/PokemonTypesList'
import PokemonSprite from '../PokemonSprite/PokemonSprite'
import './PokemonCard.scss'

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

const PokemonData = ({ pokemon }) => {
  const pokemonTypeClass = `pokemon-type-${pokemon?.types[0].type.name}`

  return (
    <>
      <PokemonSprite
        className={`card-img-top ${pokemonTypeClass} faded`}
        pokemon={pokemon}
      />
      <div className="card-body">
        <small className="pokemon-id">#{pokemon.id}</small>
        <p className="text-capitalize mb-0">{pokemon.name}</p>
        <PokemonTypesList pokemon={pokemon} />
      </div>
    </>
  )
}

const PokemonCard = ({ pokemonName }) => {
  const {
    data: pokemon,
    hasError,
    isLoading
  } = useHttp(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  return (
    <Link
      className="card pokemon-card mb-3"
      to={pokemon ? `/pokemon/${pokemonName}` : null}
    >
      {isLoading ? (
        <LoadingSpinner className="pokemon-loading" />
      ) : hasError ? (
        <PokemonData pokemon={buildUnkownPokemon(pokemonName)} />
      ) : (
        <PokemonData pokemon={pokemon} />
      )}
    </Link>
  )
}

export default PokemonCard
