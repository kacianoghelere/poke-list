const PokemonMoves = ({ pokemon }) => {
  return (
    <div className="card mb-3 pokemon-moves">
      <div className="card-body">
        <h5 className="card-title">Moves</h5>
        {pokemon.moves.map(({ move }) => (
          <span
            className="badge badge-pill badge-secondary mr-1"
            key={move.name}
          >
            {move.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PokemonMoves