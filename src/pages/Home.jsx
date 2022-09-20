import React from 'react'
import { Title } from '../components/TitleBar/Title'
import { Tool } from '../components/ToolBar/Tool'
import { Board } from '../components/Board/Board'
import {useState} from 'react'
import { Modal } from '../modals/createPokemon/Modal'
import '../modals/createPokemon/Modal.css'

export  function Home () {
  const [searchValue, setSearchValue] = useState('')
  const [item, setItem] = useState({})
  const [stateModal, setStateModal] = useState(false)
  const [edit, setEdit] = useState(false)
  const [Pokemons, setPokemons] = useState([]) 
  const [idEdit, setIdEdit] = useState('')
  return (
    <div>
      <Title></Title>
      <Tool searchValue={searchValue} setSearchValue={setSearchValue} setStateModal={setStateModal} Pokemons={Pokemons}></Tool>
      <Board searchValue={searchValue} setStateModal={setStateModal} Pokemons={Pokemons} setPokemons={setPokemons} setItem={setItem} setEdit={setEdit} setIdEdit={setIdEdit}></Board>
      <Modal stateModal={stateModal} setStateModal={setStateModal} item={item} setItem={setItem} edit={edit} idEdit={idEdit}></Modal>
    </div>
  )
}
