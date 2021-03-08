import { useEffect, useState } from 'react'

import { getPokemonData } from 'utils/services/pokemon'

const usePokemonData = (pokemonName) => {
  const [isLoading, setLoading] = useState(true)

  const [pokemon, setPokemonData] = useState()

  const [hasError, setHasError] = useState(false)

  const fetchEvolutions = async (pokemonName) => {
    try {
      setLoading(true)

      setHasError(false)

      const response = await getPokemonData(pokemonName)

      setPokemonData(response)
    } catch (error) {
      setHasError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvolutions(pokemonName)

    return () => {
      setPokemonData(null)
    }
  }, [pokemonName])

  return {
    pokemon,
    hasError,
    isLoading
  }
}

export default usePokemonData