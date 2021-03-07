const PokemonBasicInfo = ({ pokemon }) => {
  return (
    <div className="card mb-3 pokemon-basic-info">
      <div className="card-body">
        <h5 className="card-title mb-0">Info</h5>
      </div>
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