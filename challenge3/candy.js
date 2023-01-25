class Candy {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getName() {
      return this.name;
    }
  
    getPrice() {
      return this.price;
    }
};

/*const candy = new Candy('Mars', 4.99);

console.log(candy)
console.log(candy.getName())
console.log(candy.getPrice())

const basket = new ShoppingBasket();
basket.getTotalPrice();

console.log(basket.getTotalPrice())

basket.addItem(candy);

console.log(basket.getTotalPrice())

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice())*/

module.exports = Candy;