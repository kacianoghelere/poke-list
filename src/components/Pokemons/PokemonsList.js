import PokemonCard from './PokemonCard/PokemonCard'

const PokemonsList = ({ pokemons }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
    {pokemons.map((pokemon) => (
      <div
        className="col mb-4"
        key={pokemon.name}
      >
        <PokemonCard pokemonName={pokemon.name} />
      </div>
    ))}
  </div>
  )
}

export default PokemonsList
