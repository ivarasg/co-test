const Product = require('./Product')

class FullCoverage extends Product {
  constructor(name, sellIn, price) {
    let n, s, p

    if(arguments.length === 2) {
      n = "Full Coverage"
      s = name
      p = sellIn
    } else {
      n = name
      s = sellIn
      p = price
    }

    super(n, s, p)
  }

  adjustPrice() {
    let adjustedPrice, increment

    if(this.sellIn < 0) {
      increment = 2
    } else {
      increment = 1
    }

    adjustedPrice = this.price + increment

    if(adjustedPrice > 50) {
      this.price = 50
    } else {
      this.price = adjustedPrice
    }
  }
}

module.exports = FullCoverage
