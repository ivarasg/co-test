const Product = require('../src/Product')

describe('Product', () => {
  test('At the end of each day our system lowers both values for every product', () => {
    const p = new Product('name', 1, 1)

    p.updatePrice()

    expect(p.price).toBe(0)
    expect(p.sellIn).toBe(0)
  })

  test('The price is never negative', () => {
    const p = new Product('name', 10, 0)

    p.updatePrice()

    expect(p.price).toBe(0)
  })

  test('Once the sell by date has passed, price degrades twice as fast', () => {
    const p = new Product('name', 0, 2)

    p.updatePrice()

    expect(p.price).toBe(0)
  })
})

