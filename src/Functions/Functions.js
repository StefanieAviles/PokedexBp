import axios from 'axios'


const getAllPokemons = async (state) => {    
    try{
        const response = await axios.get('https://bp-pokemons.herokuapp.com/?idAuthor=1')    
        state(response.data)
    }
    catch(e){console.log(e)}
}
const getPokemonById = async (id, state) => {    
    try{
        const response = await axios.get(`https://bp-pokemons.herokuapp.com/${id}`)    
        state(response.data)
    }
    catch(e){console.log(e)}
}
const deletePokemonApi= async (id) => {
    try{
        await axios.delete(`https://bp-pokemons.herokuapp.com/${id}`)
    }
    catch(e){console.log(e)}
}
const getPokemonsByName = async (name, state) => {
    try{
        const response = await axios.get('https://bp-pokemons.herokuapp.com/?idAuthor=1')
        const newname = name.toLowerCase()

        const reponseFilter=response.data.filter((pokemon) => pokemon.name.toLowerCase().includes(newname))
        
        state(reponseFilter)
    }
    catch(e){console.log(e)}
}
const postNewPokemon = async (poke) => {
    try{
        await axios.post('https://bp-pokemons.herokuapp.com/', poke)
    }
    catch(e){console.log(e)}
    
}
const editPokemon = async (pokemon, id) => {
    console.log(pokemon+'EN AXIOS')
    try{
        await axios.put(`https://bp-pokemons.herokuapp.com/${id}`, pokemon)
    }
    catch(e){console.log(e)}
    
}


export { getAllPokemons, postNewPokemon, getPokemonsByName, deletePokemonApi, getPokemonById, editPokemon }