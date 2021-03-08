import { useContext } from 'react'

import PokemonContext from '../../../../contexts/pokemon-context'
import PokemonAppearanceFrontAndBack from './PokemonAppearanceFrontAndBack/PokemonAppearanceFrontAndBack'

const PokemonAppearance = () => {
  const { pokemon } = useContext(PokemonContext)

  return (
    <div className="card mb-3 pokemon-appearance">
      <div className="card-body">
        <h3 className="card-title">Appearance</h3>
        <div className="d-flex flex-wrap">
          <PokemonAppearanceFrontAndBack
            pokemon={pokemon}
            frontSpriteKey="front_default"
            backSpriteKey="back_default"
            gender="Male"
          />
          <PokemonAppearanceFrontAndBack
            pokemon={pokemon}
            frontSpriteKey="front_female"
            backSpriteKey="back_female"
            gender="Female"
          />
        </div>
      </div>
    </div>
  )
}

export default PokemonAppearance