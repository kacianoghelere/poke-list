
import { Img } from 'react-image'
import './PokemonSprite.scss'

const PokemonSprite = ({ pokemon, spriteKey = 'front_default', ...props }) => (
  <Img
    alt={pokemon.name}
    src={[
      pokemon?.sprites[spriteKey],
      'https://cdn.iconscout.com/icon/free/png-256/question-mark-2646696-2194193.png'
    ]}
    {...props}
  />
)

export default PokemonSprite
