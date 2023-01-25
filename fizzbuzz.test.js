const fizzbuzz = require('./fizzbuzz.js')

describe('fizzbuzz', () => {
  it('returns fizz when given 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  });

  it('returns fizz when given 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  });

  it('returns fizzbuzz when given multiples of 5 and 3', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  });
});