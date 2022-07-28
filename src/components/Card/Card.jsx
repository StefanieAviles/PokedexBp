import './Card.css'
import { FaPlus, FaTrashAlt } from "react-icons/fa";

export function Card({ item, editPokemon, deletePokemon }) {
    
    return (
        <section className="card">
            <div className="item">{item.name}</div>
            <div className="item"><img className="pokeImage"src={item.image} alt="pokemon"></img></div>
            <div className="item">{item.attack}</div>
            <div className="item">{item.defense}</div>
            <div className="item">
                <FaPlus className="fa fa-plus" onClick={editPokemon}/>
                <FaTrashAlt className="fa fa-trash" onClick={deletePokemon}/>
            </div>
                    
        </section>
    )
}