import React from 'react'
import { Title } from '../components/TitleBar/Title'
import { Tool } from '../components/ToolBar/Tool'
import { Board } from '../components/Board/Board'
import {useState} from 'react'
import { Modal } from '../modals/createPokemon/Modal'
import '../modals/createPokemon/Modal.css'

export function Home () {
  const [searchValue, setSearchValue] = useState('')
  const [stateModal, setStateModal] = useState(false)
  return (
    <div>
      <Title></Title>
      <Tool searchValue={searchValue} setSearchValue={setSearchValue} setStateModal={setStateModal}></Tool>
      <Board searchValue={searchValue} setStateModal={setStateModal}></Board>
      <Modal stateModal={stateModal} setStateModal={setStateModal}></Modal>
    </div>
  )
}
