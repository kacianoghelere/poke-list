import './PokemonType.scss'

const PokemonType = ({ typeName }) => (
  <small className={`badge badge-pill mr-1 pokemon-type pokemon-type-${typeName} colorize-text`}>
    {typeName}
  </small>
)

export default PokemonType
