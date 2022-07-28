import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import App from './App'

describe('App function', () => {

  it('Render App', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App  />
      </Router>
    )
    const text = screen.getByText(/Listado/i)
    expect(text).toBeInTheDocument()
  })
})

