import styled from 'styled-components'

const TypeBadge = styled.span`
  font-size: 100%;
  text-shadow: 1px 1px #00000055;
`

const PokemonType = ({ typeName }) => (
  <TypeBadge className={`badge badge-pill mb-1 mr-1 pokemon-type-${typeName} colorize-text`}>
    {typeName}
  </TypeBadge>
)

export default PokemonType
