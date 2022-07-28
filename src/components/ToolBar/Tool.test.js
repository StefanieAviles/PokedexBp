import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Tool } from './Tool'


describe('Tool function', () => {
    const value = ""
    const mockFunction = jest.fn()

  it('Render Tool', () => {    
    const view = render (<Tool searchValue={value} setSearchValue={mockFunction} setStateModal={mockFunction}/>)
    screen.getByPlaceholderText('Buscar')
    expect(view).toBeDefined()
  })
  it('renders learn react link', () => {
    render (<Tool searchValue={value} setSearchValue={mockFunction} setStateModal={mockFunction}/>)
    const button = screen.getByTestId('searchBtn')
    fireEvent.click(button)
    expect (mockFunction.mock.calls).toHaveLength(1)
  })
})