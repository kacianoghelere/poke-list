import useHttp from '../utils/hooks/useHttp'
import PageLayout from '../components/Misc/PageLayout'

const Pokemon = ({ match }) => {
  const { params: { pokemonName } } = match

  const {
    data: pokemon,
    isLoading
  } = useHttp(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  return (
    <PageLayout>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <p>Pokemon {pokemon.name}!</p>
      )}
    </PageLayout>
  )
}

export default Pokemon