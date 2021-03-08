import { Link } from 'react-router-dom'
import styled from 'styled-components'

import useHttp from '../../utils/hooks/useHttp'
import LoadingSpinner from '../../components/Misc/LoadingSpinner'

const GenerationLink = styled(Link)`
  color: #333;
  border: none;
  box-shadow: 0 1px 2px #00000030;

  &:hover {
    color: #b53e62;
    text-decoration: none;
  }
`

const GenerationLoading = styled.div`
  align-items: center;
  height: 96px;
  padding: 1em;
  width: 100%;
`

const GenerationName = styled.h5`
  text-transform: capitalize;
`

const GenerationCard = ({ generationName }) => {
  const {
    data: generation,
    hasError,
    isLoading
  } = useHttp(`https://pokeapi.co/api/v2/generation/${generationName}`)

  return (
    <GenerationLink
      className="card generation-card mb-3"
      to={generation ? `/generation/${generationName}` : null}
    >
      {isLoading ? (
        <GenerationLoading>
          <LoadingSpinner />
        </GenerationLoading>
      ) : hasError ? (
        <div className="card-body">
          <GenerationName className="card-title">
            {generationName}
          </GenerationName>
        </div>
      ) : (
        <div className="card-body">
          <GenerationName className="card-title mb-0">
            {generationName}
          </GenerationName>
          <p className="card-text mb-0 mt-3">
            <strong>Main Region</strong>:
            <span className="text-capitalize"> {generation.main_region.name}</span>
          </p>
          <p className="card-text mb-0 mt-3">
            {generation.pokemon_species.length} Pokemon Species
          </p>
        </div>
      )}
    </GenerationLink>
  )
}

export default GenerationCard
