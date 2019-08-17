class Product {
  constructor(name, sellIn, price) {
    this.name = name
    this.sellIn = sellIn
    this.price = price
  }

  updatePrice() {
    this.adjustSellIn()
    this.adjustPrice()
  }

  adjustSellIn() {
    this.sellIn = this.sellIn - 1
  }

  adjustPrice() {
    let adjustedPrice = this.sellIn < 0
      ? this.price - 2
      : this.price - 1

    this.price = adjustedPrice < 0
      ? 0
      : adjustedPrice
  }
}

module.exports = Product
