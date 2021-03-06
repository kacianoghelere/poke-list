import useHttp from '../utils/hooks/useHttp'
import PageLayout from '../components/Misc/PageLayout'
import PokemonsList from '../components/Pokemons/PokemonsList'

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
          <h1>{generation.name}</h1>
          <p>Main region: {generation.main_region.name}</p>
          <PokemonsList pokemons={generation.pokemon_species} />
        </>
      )}
    </PageLayout>
  )
}

export default Generation