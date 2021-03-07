import useHttp from '../utils/hooks/useHttp'
import PageLayout from '../components/Misc/PageLayout'
import PokemonBasicInfo from '../components/Pokemons/PokemonBasicInfo/PokemonBasicInfo'
import PokemonDetails from '../components/Pokemons/PokemonDetails/PokemonDetails'
import PokemonStats from '../components/Pokemons/PokemonStats/PokemonStats'

const Pokemon = ({ match }) => {
  const { pokemonName } = match.params

  const {
    data: pokemon,
    isLoading
  } = useHttp(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  return (
    <PageLayout>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <div className="pokemon">
          <h1 className="text-white text-capitalize my-4">{pokemonName}</h1>
          <div className="row">
            <div className="col-sm-3">
              <PokemonBasicInfo pokemon={pokemon} />
              <PokemonStats pokemon={pokemon} />
            </div>
            <div className="col-sm-9">
              <PokemonDetails pokemon={pokemon} />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  )
}

export default Pokemon