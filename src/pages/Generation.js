import useHttp from '../utils/hooks/useHttp'
import PageLayout from '../components/Misc/PageLayout'
import PokemonsList from '../components/Pokemons/PokemonList/PokemonsList'

const Generation = ({ match }) => {
  const { params: { generationName } } = match

  const {
    data: generation,
    isLoading
  } = useHttp(`https://pokeapi.co/api/v2/generation/${generationName}`)

  return (
    <PageLayout>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <>
          <h1 className="text-white text-capitalize mt-4 mb-3">{generationName}</h1>
          <h3 className="text-white my-4">
            <strong>Main region</strong>:
            <span className="text-capitalize"> {generation.main_region.name}</span>
          </h3>
          <PokemonsList pokemons={generation.pokemon_species} />
        </>
      )}
    </PageLayout>
  )
}

export default Generation