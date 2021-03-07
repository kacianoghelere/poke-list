import PokemonAbilities from './PokemonAbilities/PokemonAbilities'
import PokemonAppearance from './PokemonAppearance/PokemonAppearance'
import PokemonEvolutionChain from './PokemonEvolutionChain/PokemonEvolutionChain'
import PokemonMoves from './PokemonMoves/PokemonMoves'
import PokemonTypes from './PokemonTypes/PokemonTypes'

const PokemonDetails = ({ pokemon }) => {
  return (
    <>
      <PokemonAppearance pokemon={pokemon} />
      <PokemonTypes pokemon={pokemon} />
      <PokemonAbilities pokemon={pokemon} />
      <PokemonMoves pokemon={pokemon} />
      <PokemonEvolutionChain pokemon={pokemon} />
    </>
  )
}

export default PokemonDetails