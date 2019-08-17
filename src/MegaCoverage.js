const Product = require('./Product')

class MegaCoverage extends Product {
  constructor(name, sellIn, price) {
    let n, s, p

    if(arguments.length === 2) {
      n = "Mega Coverage"
      s = name
      p = sellIn
    } else {
      n = name
      s = sellIn
      p = price
    }

    super(n, s, p)
  }

  updatePrice() {}
}

module.exports = MegaCoverage
