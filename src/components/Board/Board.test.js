import React from 'react'
import { render, screen } from '@testing-library/react'
import { Board } from './Board'

describe('Board function', () => {
    const valueTest = "Pokemon"
    const mockFunction = jest.fn()
    const data=[
        {
            name: "poke",
            image: "URL",
            attack: 10,
            defense: 10

        }
    ]

  it('Render Board', () => {
    const view = render (<Board searchValue={valueTest} setStateModal={mockFunction} Pokemons={data} setPokemons={mockFunction}/>)
    screen.getByText('Nombre')
    expect(view).toBeDefined()
  })
})