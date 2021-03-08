import PokemonSprite from '../../PokemonSprite/PokemonSprite'

const PokemonAppearanceFrontAndBack = ({ pokemon, frontSpriteKey, backSpriteKey, gender }) => (
  <div className="justify-content-center">
    <div className="w-100">
      <PokemonSprite
        className="img-fluid"
        pokemon={pokemon}
        spriteKey={frontSpriteKey}
      />
      <PokemonSprite
        className="img-fluid"
        pokemon={pokemon}
        spriteKey={backSpriteKey}
      />
    </div>
    <h6 className="text-center">
      <strong>{gender}</strong>
    </h6>
  </div>
)

const PokemonAppearance = ({ pokemon }) => {
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