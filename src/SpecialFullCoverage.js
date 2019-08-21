const FullCoverage = require('./FullCoverage')

class SpecialFullCoverage extends FullCoverage {
  constructor(name, sellIn, price) {
    let n, s, p

    if(arguments.length === 2) {
      n = "Special Full Coverage"
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
    let increment, adjustedPrice

    if(this.sellIn < 5) {
      increment = 3
    } else if(this.sellIn < 10) {
      increment = 2
    } else {
      increment = 1
    }

    adjustedPrice = this.sellIn < 0
      ? 0
      : this.price + increment

    this.price = adjustedPrice > 50
      ? 50
      : adjustedPrice
  }
}

module.exports = SpecialFullCoverage
