import axios from 'axios'


const getAllPokemons = async (state) => {    
    try{
        const response = await axios.get('https://bp-pokemons.herokuapp.com/?idAuthor=1')    
        state(response.data)
    }
    catch(e){console.log(e)}
}
const deletePokemonApi= async (id) => {
    try{
        const response = await axios.delete(`https://bp-pokemons.herokuapp.com/${id}`)
        return(response.data)
    }
    catch(e){console.log(e)}
}
const getPokemonsByName = async (name, state) => {
    try{
        const response = await axios.get('https://bp-pokemons.herokuapp.com/?idAuthor=1')
        const reponseFilter=response.data.filter((pokemon) => pokemon.name === name)
        state(reponseFilter)
    }
    catch(e){console.log(e)}
}
const postNewPokemon = async (poke) => {
    try{
        const response = await axios.post('https://bp-pokemons.herokuapp.com/', poke)
        return(response.data)
    }
    catch(e){console.log(e)}
    
}

export { getAllPokemons, postNewPokemon, getPokemonsByName, deletePokemonApi }