import { useState } from 'react'
import styled from 'styled-components'

import PokemonCard from '../PokemonCard/PokemonCard'

const PokemonSearch = styled.input`
  background-color: transparent;
  border-color: white;
  border-width: 1px;

  &:focus {
    background-color: #ffffff75;
    border-color: white;
    box-shadow: 0 0 0 0.2rem rgb(255 255 255 / 25%);
  }

  &::placeholder {
    color: #ffffff75;
  }
`

const PokemonsList = ({ generation }) => {
  const [filter, setFilter] = useState('')

  const filteredPokemons = (generation.pokemon_species || [])
    .filter(({ name }) => {
      return !filter || name.toLowerCase().includes(filter.toLowerCase())
    })

  return (
    <div className="pokemon-list">
      <PokemonSearch
        aria-label="Search pokemon"
        className="form-control mb-4"
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Search pokemon"
        type="search"
        value={filter}
      />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
        {filteredPokemons.map((pokemon) => (
          <div
            className="col mb-3"
            key={pokemon.name}
          >
            <PokemonCard
              generationName={generation.name}
              pokemonName={pokemon.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonsList
