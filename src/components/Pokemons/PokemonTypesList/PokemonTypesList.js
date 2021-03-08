import PokemonType from '../PokemonType/PokemonType'

const PokemonTypes = ({ pokemon }) => (
  <>
    {(pokemon?.types || []).map(({ type }) => (
      <PokemonType
        key={type.name}
        typeName={type.name}
      />
    ))}
  </>
)

export default PokemonTypes
