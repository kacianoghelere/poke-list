import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import PokemonData from './PokemonData'

const mockPokemon = {
  id: 123,
  name: 'Test Pokemon',
  sprites: {},
  types: [{
    type: {
      name: 'unknown'
    }
  }]
}

test('renders pokemon id', () => {
  render(<PokemonData pokemon={mockPokemon} />)

  const pokemonIdElement = screen.getByText(`#${mockPokemon.id}`)

  expect(pokemonIdElement).toBeInTheDocument()
})

test('renders pokemon name', () => {
  render(<PokemonData pokemon={mockPokemon} />)

  const pokemonNameElement = screen.getByText(mockPokemon.name)

  expect(pokemonNameElement).toBeInTheDocument()
})
