const SpecialFullCoverage = require('../src/SpecialFullCoverage')

describe('Special Full Coverage', () => {
  test('Price icreases normally for more than 10 days left', () => {
    const p1 = new SpecialFullCoverage(11, 5)
    const p2 = new SpecialFullCoverage('name', 12, 7)

    p1.updatePrice()
    p2.updatePrice()

    expect(p1.price).toBe(6)
    expect(p2.price).toBe(8)
  })

  test('Price increases by 2 when there are 10 days or less', () => {
    const p = new SpecialFullCoverage(9, 0)

    p.updatePrice()

    expect(p.price).toBe(2)
  })

  test('Price increases by 3 when there are 5 days or less', () => {
    const p = new SpecialFullCoverage(4, 0)

    p.updatePrice()

    expect(p.price).toBe(3)
  })

  test('Price drops to 0 when no more days are left', () => {
    const p = new SpecialFullCoverage(0, 10)

    p.updatePrice()

    expect(p.price).toBe(0)
  })

  test('Price cannot be greater than 50', () => {
    const p1 = new SpecialFullCoverage(1, 50)
    const p2 = new SpecialFullCoverage(1, 49)

    p1.updatePrice()
    p2.updatePrice()

    expect(p1.price).toBe(50)
    expect(p2.price).toBe(50)
  })
})
