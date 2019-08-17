const Product = require('./Product')

class SuperSale extends Product {
  constructor(name, sellIn, price) {
    let n, s, p

    if(arguments.length === 2) {
      n = "Super Sale"
      s = name
      p = sellIn
    } else {
      n = name
      s = sellIn
      p = price
    }

    super(n, s, p)
  }

  updatePrice() {
    this.adjustSellIn()
    this.adjustPrice()
    this.adjustPrice()
  }
}

module.exports = SuperSale
