import './Card.css'
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import {getPokemonById} from '../../Functions/Functions'

export function Card({ editPokemon, pokemons }) {

    return (
        <section className="card">
            { pokemons.map(option => {
                const deletePoke = () => {
                    //deletePokemon(option.id, pokemons)
                    getPokemonById(option.id, pokemons)
                }
                return <>
                        <div className="item">{option.name}</div>
                        <div className="item"><img className="pokeImage"src={option.image} alt="pokemon"></img></div>
                        <div className="item">{option.attack}</div>
                        <div className="item">{option.defense}</div>
                        <div className="item">
                            <FaEdit className="fa fa-plus" onClick={editPokemon}/>
                            <FaTrashAlt className="fa fa-trash" onClick={deletePoke}/>
                        </div>
                    </>
            })}     
        </section>
    )
}