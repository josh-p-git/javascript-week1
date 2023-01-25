const ShoppingBasket = require('./shoppingBasket.js')
const Candy = require('./candy.js')

describe('returns total price of basket', () => {
    const basket = new ShoppingBasket();

    test('returns 0 when shopping basket is empty', () => {
        expect(basket.getTotalPrice()).toEqual(0);
  });
});

describe('returns total price of basket', () => {
    const candy = new Candy('Mars', 4.99);
    const basket = new ShoppingBasket();
    basket.addItem(candy);

    test('returns 4.99 when shopping basket has a 4.99 candy in it', () => {
        expect(basket.getTotalPrice()).toEqual(4.99);
  });
});

describe('returns total price of basket', () => {
    const candy = new Candy('Mars', 4.99);
    const candy2 = new Candy('Skittle', 3.99);
    const basket = new ShoppingBasket();
    basket.addItem(candy);
    basket.addItem(candy2);
    basket.addItem(candy2);
    
    test('returns 12.97 when shopping basket has 3 candies totalling that price in it', () => {
        expect(basket.getTotalPrice()).toEqual(12.97);
  });
});