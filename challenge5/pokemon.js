const fetchPokemon = require('./api.js')
let pokemon = fetchPokemon('growlithe');
console.log(pokemon);