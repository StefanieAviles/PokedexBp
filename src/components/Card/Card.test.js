import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import { Card } from './Card'

describe('Card function', () => {
    const mockFunction = jest.fn()
    const setFunction = jest.fn()
    const data=[
        {
            name: "poke",
            image: "URL",
            attack: 10,
            defense: 10

        }
    ]

  it('Render Card', () => {
    const view = render (<Card Pokemons={data} setPokemons={mockFunction} setItem={setFunction}/>)
    
    expect(view).toBeDefined()
    const Button = screen.getByTestId('trash')
    fireEvent.click(Button);
    
  })
})