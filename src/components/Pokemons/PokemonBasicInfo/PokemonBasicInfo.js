import { useContext } from 'react'

import PokemonContext from 'contexts/pokemon-context'

const PokemonBasicInfo = () => {
  const { pokemon } = useContext(PokemonContext)

  const officialArtwork = pokemon?.sprites?.other['official-artwork'].front_default

  return (
    <div className="card mb-3 pokemon-basic-info">
      {officialArtwork && (
        <img
          alt={pokemon.name}
          className="card-img-top"
          src={officialArtwork}
        />
      )}
      <div className="list-group list-group-flush">
        <div className="list-group-item">
          <strong>Base exp</strong>: {pokemon.base_experience}
        </div>
        <div className="list-group-item">
          <strong>Height</strong>: {pokemon.height / 10} m.
        </div>
        <div className="list-group-item">
          <strong>Weight</strong>: {pokemon.weight / 10} kg.
        </div>
        <div className="list-group-item">
          <strong>Habitat</strong>: {pokemon?.habitat?.name || '???'}
        </div>
      </div>
    </div>
  )
}

export default PokemonBasicInfo