import PokemonTypesList from '../../PokemonTypesList/PokemonTypesList'

const PokemonTypes = ({ pokemon }) => (
  <div className="card mb-3 pokemon-types">
    <div className="card-body">
      <h5 className="card-title">Types</h5>
      <PokemonTypesList pokemon={pokemon} />
    </div>
  </div>
)

export default PokemonTypes