import React from 'react'
import './Tool.css'
import { FaSistrix } from 'react-icons/fa'
import { useRef } from 'react'
import { postNewPokemon } from '../../Functions/Functions'

export function Tool ({searchValue, setSearchValue,setStateModal}) {
  const searchValueRef = useRef();
  function search (){
    searchValueRef.current.value=null
    setSearchValue('')
  }
  function newPokemon(){
    postNewPokemon()
    setStateModal(true)
  }
  return (
    <div className="containerSearch">
      <div id="seeker">
        <input placeholder="Buscar" onChange={(e) => setSearchValue(e.target.value)}ref={searchValueRef} type="text"></input>
        <FaSistrix onClick={search} id="searchLogo" data-testid="searchBtn"/>
      </div>
      <button onClick={newPokemon}> + Nuevo </button>
    </div>
  )
}
