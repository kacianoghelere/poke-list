import styled from 'styled-components'

import { Img } from 'react-image'

const PokemonImage = styled(Img)`
  max-height: 96px;
  max-width: 96px;
`

const PokemonSprite = ({ pokemon, spriteKey = 'front_default', ...props }) => (
  <PokemonImage
    alt={pokemon.name}
    src={[
      pokemon?.sprites[spriteKey],
      'https://cdn.iconscout.com/icon/free/png-256/question-mark-2646696-2194193.png'
    ]}
    {...props}
  />
)

export default PokemonSprite
