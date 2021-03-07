import PokemonCard from '../PokemonCard/PokemonCard'
import './PokemonsList.scss'

const PokemonsList = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      <input
        className="pokemon-search form-control mb-3"
        type="search"
        placeholder="Search pokemon"
        aria-label="Search pokemon"
      />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
        {pokemons.map((pokemon) => (
          <div
            className="col mb-3"
            key={pokemon.name}
          >
            <PokemonCard pokemonName={pokemon.name} key={pokemon.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonsList
