import React from 'react'
import './Tool.css'
import { FaSistrix } from 'react-icons/fa'
import {useRef} from 'react'
import { postNewPokemon } from '../../Functions/Functions'

export function Tool ({searchValue, setSearchValue}) {
  const searchValueRef = useRef();
  function search (){
    searchValueRef.current.value=null
    setSearchValue('')
  }
  function uploadPokemon(){
    postNewPokemon()
  }
  return (
    <div className="containerSearch">
      <div id="seeker">
        <input placeholder="Buscar" onChange={(e) => setSearchValue(e.target.value)}ref={searchValueRef} type="text"></input>
        <FaSistrix onClick={search} id="searchLogo"/>
      </div>
      <button onClick={uploadPokemon}> + Nuevo </button>
    </div>
  )
}
