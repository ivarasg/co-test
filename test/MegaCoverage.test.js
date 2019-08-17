const MegaCoverage = require('../src/MegaCoverage')

describe('Mega Coverage', () => {
  test('being a legendary product, never has to be sold or decreases in price', () => {
    const p1 = new MegaCoverage(-1, 80)
    const p2 = new MegaCoverage(10, 15)

    p1.updatePrice()
    p2.updatePrice()

    expect(p1.sellIn).toBe(-1)
    expect(p1.price).toBe(80)

    expect(p2.sellIn).toBe(10)
    expect(p2.price).toBe(15)
  })
})
