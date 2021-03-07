import { useEffect, useState } from 'react'

import { buildEvolutionChain } from '../services/evolution-chain'

const useEvolutionChain = (pokemonName) => {
  const [isLoading, setLoading] = useState(true)

  const [evolutions, setEvolutions] = useState()

  const [hasError, setHasError] = useState(false)

  const fetchEvolutions = async (pokemonName) => {
    try {
      setLoading(true)

      setHasError(false)

      const response = await buildEvolutionChain(pokemonName)

      setEvolutions(response)
    } catch (error) {
      setHasError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvolutions(pokemonName)

    return () => {
      setEvolutions(null)
    }
  }, [pokemonName])

  return {
    evolutions,
    hasError,
    isLoading
  }
}

export default useEvolutionChain