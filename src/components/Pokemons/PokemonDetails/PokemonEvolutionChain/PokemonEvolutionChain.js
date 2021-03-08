import LoadingSpinner from '../../../Misc/LoadingSpinner'
import PokemonCard from '../../PokemonCard/PokemonCard'
import useEvolutionChain from '../../../../utils/hooks/useEvolutionChain'

const PokemonEvolutionChain = ({ pokemon }) => {
  const { evolutions, hasError, isLoading } = useEvolutionChain(pokemon.name)

  return (
    <div className="card mb-3 pokemon-types">
      <div className="card-body">
        <h3 className="card-title">Evolution Chain</h3>
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