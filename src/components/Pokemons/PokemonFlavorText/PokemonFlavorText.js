import { useContext, useMemo } from 'react'

import PokemonContext from 'contexts/pokemon-context'

const PokemonFlavorText = () => {
  const { pokemon } = useContext(PokemonContext)

  const flavorText = useMemo(() => {
    return pokemon.flavor_text_entries
      .find(({ language }) => language?.name === 'en')
  }, [pokemon.flavor_text_entries])

  if (!flavorText) {
    return null
  }

  return (
    <div className="card mb-3 pokemon-flavor-text">
      <div className="card-body">
        <h6 className="card-title mb-0">{flavorText?.flavor_text}</h6>
      </div>
    </div>
  )
}

export default PokemonFlavorText