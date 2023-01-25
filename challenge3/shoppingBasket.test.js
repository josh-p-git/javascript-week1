const ShoppingBasket = require('./shoppingBasket.js')

describe('returns total price of basket', () => {
    const basket = new ShoppingBasket();

    test('returns 0 when shopping basket is empty', () => {
        expect(basket.getTotalPrice()).toEqual(0);
  });
});