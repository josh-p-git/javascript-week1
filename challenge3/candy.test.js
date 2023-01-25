const Candy = require('./candy.js')

describe('returns name of candy', () => {
    const candy = new Candy('Mars', 4.99);

    test('returns price of a new candy', () => {
        expect(candy.getName()).toEqual('Mars');
  });
});

describe('returns price of candy', () => {
    const candy = new Candy('Mars', 4.99);

    test('returns price of a new candy', () => {
        expect(candy.getPrice()).toEqual(4.99);
  });
});