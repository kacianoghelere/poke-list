const PokemonAbilities = ({ pokemon }) => {
  return (
    <div className="card mb-3 pokemon-abilities">
      <div className="card-body">
        <h5 className="card-title">Abilities</h5>
        {pokemon.abilities.map(({ ability }) => (
          <span
            className="badge badge-pill badge-secondary mr-1"
            key={ability.name}
          >
            {ability.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PokemonAbilities