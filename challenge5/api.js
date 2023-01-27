async function fetchPokemon(pokemon) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()
     
        let poke = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        }        
};



module.exports = fetchPokemon;

/*
        let poke = {
          name: data.name,
          id: data.id,
          height: data.height,
          weight: data.weight,
          }
*/