class ShoppingBasket {
    constructor() {
      this.basket = [];
    }
  
    addItem(item) {
      this.basket.push(item)
    }
  
    getTotalPrice() {
      let total = 0
      this.basket.map(item => item.getPrice()).forEach(price => total += price);
      return total;
    }
};

module.exports = ShoppingBasket;