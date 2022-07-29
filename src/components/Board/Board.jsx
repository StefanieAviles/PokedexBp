import { getAllPokemons, getPokemonsByName,  } from '../../Functions/Functions'
import { useEffect} from 'react'
import { Card } from '../Card/Card'
import './Board.css'

export function Board ({searchValue, setStateModal, Pokemons, setPokemons}) {
  //const [Pokemons, setPokemons] = useState([]) 
  useEffect(() => {
    if(searchValue===''){
      getAllPokemons(setPokemons)
    }
    else{
      getPokemonsByName(searchValue,setPokemons)
    }
    
  }, [searchValue])
  const editPokemon = () => {
    setStateModal(true)
    console.log("Edit")
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
          <Card  editPokemon={editPokemon} pokemons = {Pokemons}/>
        </section>
      </main>
    )
}