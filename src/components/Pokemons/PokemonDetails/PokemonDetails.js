import PokemonAbilities from './PokemonAbilities/PokemonAbilities'
import PokemonAppearance from './PokemonAppearance/PokemonAppearance'
import PokemonEvolutionChain from './PokemonEvolutionChain/PokemonEvolutionChain'
import PokemonMoves from './PokemonMoves/PokemonMoves'
import PokemonTypes from './PokemonTypes/PokemonTypes'

const PokemonDetails = () => (
  <>
    <PokemonAppearance />
    <PokemonTypes />
    <PokemonEvolutionChain />
    <PokemonAbilities />
    <PokemonMoves />
  </>
)

export default PokemonDetails