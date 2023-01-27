const Pokedex = require('./pokedex.js')

describe('pokedex can have pokemon added to it and list them', () => {
    const pokedex = new Pokedex();

    test('pokedex can have pokemon added to it and list them', () => {
        pokedex.catch('growlithe')
        expect(pokedex.all()).toStrictEqual(['growlithe'])
  });
});