import { getAllPokemons, getPokemonsByName } from '../../Functions/Functions'
import { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import './Board.css'

export function Board ({searchValue}) {
  const [Pokemons, setPokemons] = useState([]) 
  useEffect(() => {
    if(searchValue===''){
      getAllPokemons(setPokemons)
    }
    else{
      getPokemonsByName(searchValue,setPokemons)
    }
    
  }, [searchValue])
  const editPokemon = () => {
    console.log("Edit")
  }
  const deletePokemon = () => {
    console.log("Delete")
  }
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
        { Pokemons.map((item, index) => {
                return (<Card  key={index} item={item} editPokemon={editPokemon} deletePokemon={deletePokemon}/>)
            })}
        </section>
      </main>
    )
}