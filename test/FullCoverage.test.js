const FullCoverage = require('../src/FullCoverage')

describe('Full Coverage', () => {
  test('Increases in price the older it gets', () => {
    const p1 = new FullCoverage(10, 10)
    const p2 = new FullCoverage('name', 0, 10)

    p1.updatePrice()
    p2.updatePrice()

    expect(p1.price).toBe(11)
    expect(p2.price).toBe(12)
  })

  test('Price cannot be greater than 50', () => {
    const p1 = new FullCoverage(1, 50)
    const p2 = new FullCoverage(0, 49)

    p1.updatePrice()
    p2.updatePrice()

    expect(p1.price).toBe(50)
    expect(p2.price).toBe(50)
  })
})
