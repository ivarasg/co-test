const SuperSale = require('../src/SuperSale')

describe('Super Sale', () => {
  test('Degrade in price twice as fast', () => {
    const p1 = new SuperSale(10, 10)
    const p2 = new SuperSale('name', 11, 11)

    p1.updatePrice()
    p2.updatePrice()

    expect(p1.price).toBe(8)
    expect(p2.price).toBe(9)
  })
})
