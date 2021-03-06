import './PokemonType.scss'

const PokemonType = ({ typeName }) => {
  return <small className={`pokemon-type pokemon-type-${typeName}`}>{typeName}</small>
}

export default PokemonType
