import PokemonType from '../PokemonType/PokemonType'

const PokemonTypes = ({ pokemon }) => {
  return (
    <>
      {(pokemon?.types || []).map(({ type }) => (
        <PokemonType
          key={type.name}
          typeName={type.name}
        />
      ))}
    </>
  )
}

export default PokemonTypes
