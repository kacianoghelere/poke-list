import styled from 'styled-components'

import PokemonContext from 'contexts/pokemon-context'
import usePokemonData from 'utils/hooks/usePokemonData'
import PageBreadcrumb from 'components/Misc/PageBreadcrumb'
import PageError from 'components/Misc/PageError'
import PageLayout from 'components/Misc/PageLayout/PageLayout'
import PageLoadingIndicator from 'components/Misc/PageLoadingIndicator'
import PokemonBasicInfo from 'components/Pokemons/PokemonBasicInfo/PokemonBasicInfo'
import PokemonDetails from 'components/Pokemons/PokemonDetails/PokemonDetails'
import PokemonFlavorText from 'components/Pokemons/PokemonFlavorText/PokemonFlavorText'
import PokemonStats from 'components/Pokemons/PokemonStats/PokemonStats'

const PokemonName = styled.h1`
  color: white;
  text-transform: capitalize;

  span:not(.badge) {
    text-shadow: 3px 3px #00000033;
  }

  span.badge {
    font-size: 60%;
  }
`

const SpecialBadge = ({ children }) => (
  <span className="badge badge-secondary bg-light text-dark rounded-pill ml-3">
    <strong>{children}</strong>
  </span>
)

const Pokemon = ({ match }) => {
  const { generationName, pokemonName } = match.params

  const {
    pokemon,
    hasError,
    isLoading
  } = usePokemonData(pokemonName)

  const breadcrumbSections = [
    {
      name: 'Generations',
      link: `/`
    },
    {
      name: generationName,
      link: `/generation/${generationName}`
    },
    {
      name: pokemonName
    }
  ]

  return (
    <PageLayout title={pokemonName}>
      {isLoading ? (
        <PageLoadingIndicator />
      ) : hasError ? (
        <PageError resourceName={pokemonName} />
      ) : (
        <PokemonContext.Provider value={{ generationName, pokemon }}>
          <div className="pokemon">
            <PageBreadcrumb sections={breadcrumbSections} />
            <PokemonName className="mb-4">
              <span>{pokemonName}</span>
              {pokemon.is_legendary && (
                <SpecialBadge>Legendary</SpecialBadge>
              )}
              {pokemon.is_mythical && (
                <SpecialBadge>Mythical</SpecialBadge>
              )}
            </PokemonName>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <PokemonBasicInfo />
                <PokemonStats />
              </div>
              <div className="col-12 col-md-8 col-lg-9">
                <PokemonFlavorText />
                <PokemonDetails />
              </div>
            </div>
          </div>
        </PokemonContext.Provider>
      )}
    </PageLayout>
  )
}

export default Pokemon