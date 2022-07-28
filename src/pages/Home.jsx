import React from 'react'
import { Title } from '../components/TitleBar/Title'
import { Tool } from '../components/ToolBar/Tool'
import { Board } from '../components/Board/Board'
import {useState} from 'react'
import { Modal } from '../modals/createPokemon/Modal'
import '../modals/createPokemon/Modal.css'

export function Home () {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div>
      <Title></Title>
      <Tool searchValue={searchValue} setSearchValue={setSearchValue}></Tool>
      <Board searchValue={searchValue}></Board>
      <Modal></Modal>
    </div>
  )
}
