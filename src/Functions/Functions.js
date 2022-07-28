import axios from 'axios'


const getAllPokemons = async (state) => {
    const response = await axios.get('https://bp-pokemons.herokuapp.com/?idAuthor=1')
    state(response.data)
}
const getPokemonsByName = async (name, state) => {
    const response = await axios.get('https://bp-pokemons.herokuapp.com/?idAuthor=1')
    const reponseFilter=response.data.filter((pokemon) => pokemon.name === name)
    state(reponseFilter)
}
const postNewPokemon = async () => {
    const poke = {
        name: "Bulbasaur",
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        attack:26,
        defense:49,
        hp:1000,
        type:"n/a",
        id_author:1
    }
    const peticion = await axios.post('https://bp-pokemons.herokuapp.com/?idAuthor=1', poke)
    console.log(peticion)
}
export { getAllPokemons, postNewPokemon, getPokemonsByName }