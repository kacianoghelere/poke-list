import PokemonTypesList from '../../PokemonTypesList/PokemonTypesList'

const PokemonTypes = ({ pokemon }) => (
  <div className="card mb-3 pokemon-types">
    <div className="card-body">
      <h3 className="card-title">Types</h3>
      <PokemonTypesList pokemon={pokemon} />
    </div>
  </div>
)

export default PokemonTypes