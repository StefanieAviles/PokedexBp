import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from './Modal'


describe('Modal function', () => {
    const stateModal= true
    const setStateModal= jest.fn()
    const item={
      name:"name",
      attack:25,
      defense:50
    }

  it('Render Modal', () => {    
    const view = render (<Modal stateModal={stateModal} setStateModal={setStateModal} item={item}/>)
    screen.getByText('Guardar')
    screen.getByText('Defensa:')
    expect(view).toBeDefined()  
    const closeIcon = screen.getByTestId('close');
    fireEvent.click(closeIcon);
    expect(setStateModal).toHaveBeenCalledTimes(1); 
  })
})