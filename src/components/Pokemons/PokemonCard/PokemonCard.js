import { Link } from 'react-router-dom'
import { Img } from 'react-image'

import useHttp from '../../../utils/hooks/useHttp'
import PokemonType from '../PokemonType/PokemonType'
import './PokemonCard.scss'

const PokemonCard = ({ pokemonName }) => {
  const {
    data: pokemon,
    isLoading
  } = useHttp(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  const pokemonTypeClass = `pokemon-type-${pokemon?.types[0].type.name}`

  return (
    <Link to={pokemon ? `/pokemon/${pokemonName}` : '/not-found'}>
      <div className={`card pokemon-card ${pokemonTypeClass} faded mb-3`}>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <Img
            alt={pokemonName}
            className="card-img-top"
            src={[
              pokemon?.sprites?.front_default,
              'https://cdn.iconscout.com/icon/free/png-256/question-mark-2646696-2194193.png'
            ]}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{pokemonName}</h5>
          {(pokemon?.types || []).map(({ type }) => (
            <PokemonType
              key={type.name}
              typeName={type.name}
            />
          ))}
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard
