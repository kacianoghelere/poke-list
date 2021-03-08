import styled from 'styled-components'

import useHttp from '../utils/hooks/useHttp'
import PageLayout from '../components/Misc/PageLayout'
import PokemonsList from '../components/Pokemons/PokemonList/PokemonsList'

const GenerationName = styled.h1`
  color: white;
  text-transform: capitalize;
  text-shadow: 3px 3px #00000033;
`

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
          <GenerationName className="mb-3">{generationName}</GenerationName>
          <h3 className="text-white my-4">
            <strong>Main region</strong>:
            <span className="text-capitalize"> {generation.main_region.name}</span>
          </h3>
          <PokemonsList generation={generation} />
        </>
      )}
    </PageLayout>
  )
}

export default Generation