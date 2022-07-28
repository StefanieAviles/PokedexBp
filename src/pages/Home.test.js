import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from './Home'

describe('Home function', () => {

  it('Render Home', () => {
    const view = render (<Home/>)
    screen.getByText('Nombre')
    expect(view).toBeDefined()
  })
})

/* test('renders learn react link', () => {
  const mockHandler = jest.fn()
  const view =  render (<Home function={mockHandler}/>)
  const button = screen.getByText('+ Nuevo')
  fireEvent.click(button)
  expect (mockHandler.mock.calls).toHaveLength(1)
}); */