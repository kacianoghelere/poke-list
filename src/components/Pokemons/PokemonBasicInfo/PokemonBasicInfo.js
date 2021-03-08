const PokemonBasicInfo = ({ pokemon }) => {
  return (
    <div className="card mb-3 pokemon-basic-info">
      <img
        alt={pokemon.name}
        className="card-img-top"
        src={pokemon?.sprites?.other['official-artwork'].front_default}
      />
      <div className="list-group list-group-flush">
        <div className="list-group-item">
          <strong>Base exp</strong>: {pokemon.base_experience}
        </div>
        <div className="list-group-item">
          <strong>Height</strong>: {pokemon.height}
        </div>
        <div className="list-group-item">
          <strong>Weight</strong>: {pokemon.weight}
        </div>
      </div>
    </div>
  )
}

export default PokemonBasicInfo