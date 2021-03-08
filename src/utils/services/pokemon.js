import httpClient from './http-client'

export const getPokemonSpecies = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`

  const pokemonSpecies = await httpClient.get(url)

  return pokemonSpecies
}

export const getPokemonData = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

  const pokemon = await httpClient.get(url)

  const pokemonSpecies = await getPokemonSpecies(pokemonName)

  return {
    ...pokemon,
    ...pokemonSpecies
  }
}

export const getEvolutionChain = async (pokemonName) => {
  const pokemonSpecies = await getPokemonSpecies(pokemonName)

  const evolutionChain = await httpClient.get(pokemonSpecies.evolution_chain.url)

  return evolutionChain
}

export const buildEvolutionChain = async (pokemonName) => {
  let evolutions = []

  const evolutionChain = await getEvolutionChain(pokemonName)

  let evoData = evolutionChain.chain

  do {
    let numberOfEvolutions = evoData.evolves_to.length

    evolutions.push({
      speciesName: evoData.species.name,
      minLevel: !evoData ? 1 : evoData.min_level
    })

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evolutions.push({
          speciesName: evoData.evolves_to[i].species.name,
          minLevel: !evoData.evolves_to[i]? 1 : evoData.evolves_to[i].min_level
        })
      }
    }

    evoData = evoData.evolves_to[0]
  } while (evoData !== undefined && evoData.hasOwnProperty('evolves_to'))

  return evolutions
}