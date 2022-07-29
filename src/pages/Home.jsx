import React from 'react'
import { Title } from '../components/TitleBar/Title'
import { Tool } from '../components/ToolBar/Tool'
import { Board } from '../components/Board/Board'
import {useState} from 'react'
import { Modal } from '../modals/createPokemon/Modal'
import '../modals/createPokemon/Modal.css'

export  function Home () {
  const [searchValue, setSearchValue] = useState('')
  const [stateModal, setStateModal] = useState(false)
  const [Pokemons, setPokemons] = useState([]) 
  
  return (
    <div>
      <Title></Title>
      <Tool searchValue={searchValue} setSearchValue={setSearchValue} setStateModal={setStateModal} Pokemons={Pokemons}></Tool>
      <Board searchValue={searchValue} setStateModal={setStateModal} Pokemons={Pokemons} setPokemons={setPokemons}></Board>
      <Modal stateModal={stateModal} setStateModal={setStateModal} setPokemons={setPokemons}></Modal>
    </div>
  )
}
