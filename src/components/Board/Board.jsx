import { getAllPokemons, getPokemonsByName,  } from '../../Functions/Functions'
import { useEffect} from 'react'
import { Card } from '../Card/Card'
import './Board.css'

export function Board ({searchValue, setStateModal, Pokemons, setPokemons, setItem, setEdit, setIdEdit}) {
    return (
      <main className="board">
        <section className="headerTable">
          <div className="itemBoard">Nombre</div>
          <div className="itemBoard">Imagen</div>
          <div className="itemBoard">Ataque</div>
          <div className="itemBoard">Defensa</div>
          <div className="itemBoard">Acciones</div>
        </section>
        <section className="pokemonsBoard">
          <Card  setStateModal={setStateModal} Pokemons = {Pokemons} setPokemons={setPokemons} searchValue={searchValue} setItem={setItem} setEdit={setEdit} setIdEdit={setIdEdit}/>
        </section>
      </main>
    )
}