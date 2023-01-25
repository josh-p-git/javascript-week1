const searchCandies = require('./candies.js')

describe('candies', () => {
  it('given name and maximum price returns affordable candies', () => {
    expect(searchCandies('Mar', 2)).toEqual(['Mars'])
  });
});