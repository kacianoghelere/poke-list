import PokemonSprite from '../../../PokemonSprite/PokemonSprite'

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

export default PokemonAppearanceFrontAndBack