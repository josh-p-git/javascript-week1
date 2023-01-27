const fetchPokemon = require('./api.js')

class Pokedex {
    constructor() {
        this.list = []
    }

    catch(pokemon) {
        fetchPokemon(pokemon);
        this.list.push(pokemon);
    }

    all() {
        return this.list
    }
};

module.exports = Pokedex;