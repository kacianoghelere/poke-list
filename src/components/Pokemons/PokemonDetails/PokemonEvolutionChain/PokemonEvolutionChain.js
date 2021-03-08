import { useContext } from 'react'

import PokemonContext from 'contexts/pokemon-context'
import useEvolutionChain from 'utils/hooks/useEvolutionChain'
import LoadingSpinner from 'components/Misc/LoadingSpinner'
import PokemonCard from 'components/Pokemons/PokemonCard/PokemonCard'

const PokemonEvolutionChain = () => {
  const { generationName, pokemon } = useContext(PokemonContext)

  const { evolutions, hasError, isLoading } = useEvolutionChain(pokemon.name)

  return (
    <div className="card mb-3 pokemon-types">
      <div className="card-body">
        <h3 className="card-title mb-3">Evolution Chain</h3>
        {isLoading ? (
          <LoadingSpinner className="pokemon-loading" />
        ) : hasError ? (
          <p>Can't display the evolution chain</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {evolutions.map(({ speciesName }) => (
              <div
                className="col mb-3"
                key={speciesName}
              >
                <PokemonCard
                  generationName={generationName}
                  key={PokemonCard}
                  pokemonName={speciesName}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PokemonEvolutionChain