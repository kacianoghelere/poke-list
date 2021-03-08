import { useContext } from 'react'

import PokemonContext from 'contexts/pokemon-context'
import PokemonTypesList from 'components/Pokemons/PokemonTypesList/PokemonTypesList'

const PokemonTypes = () => {
  const { pokemon } = useContext(PokemonContext)

  return (
    <div className="card mb-3 pokemon-types">
      <div className="card-body">
        <h3 className="card-title mb-3">Types</h3>
        <PokemonTypesList pokemon={pokemon} />
      </div>
    </div>
  )
}

export default PokemonTypes