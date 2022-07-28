import React from 'react'
import { render, screen } from '@testing-library/react'
import { Title } from './Title'

describe('Title function', () => {

  it('Render Title', () => {
    const view = render (<Title/>)
    screen.getByText('Listado de Pokemons')
    expect(view).toBeDefined()
  })
})