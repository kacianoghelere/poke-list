import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import PokemonType from './PokemonType'

test('renders pokemon type', () => {
  const typeName = 'unknown'

  render(<PokemonType typeName={typeName} />)

  const pokemonTypeElement = screen.getByText(typeName)

  expect(pokemonTypeElement).toBeInTheDocument()

  expect(pokemonTypeElement).toHaveClass(`pokemon-type-${typeName}`)
})
