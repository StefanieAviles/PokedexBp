import './Card.css'
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import {deletePokemonApi, getAllPokemons,getPokemonsByName} from '../../Functions/Functions'
import { useEffect} from 'react'


export function Card({ setStateModal, Pokemons, setPokemons, searchValue, setItem, setEdit, setIdEdit}) {
    useEffect(() => {
        if(searchValue===''){
          getAllPokemons(setPokemons)
        }
        else{
          getPokemonsByName(searchValue,setPokemons)
        }
        
      })
    return (<>
            { Pokemons.map((option,item) => {
                const deletePokemon = () => {                    
                    deletePokemonApi(option.id)
                }
                const editPokemon = () => {
                    setItem(option)
                    setEdit(true)
                    setIdEdit(option.id)
                    setStateModal(true)
                  }
                return <section key={item}className="card">
                        <div className="item">{option.name}</div>
                        <div className="item"><img className="pokeImage"src={option.image} alt="pokemon"></img></div>
                        <div className="item">{option.attack}</div>
                        <div className="item">{option.defense}</div>
                        <div className="item">
                            <FaEdit className="fa fa-plus" onClick={editPokemon} data-testid="edit"/>
                            <FaTrashAlt className="fa fa-trash" onClick={deletePokemon} data-testid="trash"/>
                        </div>
                    </section>
            })}     
        </>
    )
}