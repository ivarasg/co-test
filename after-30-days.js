const Product = require('./src/Product')
const FullCoverage = require('./src/FullCoverage')
const SpecialFullCoverage = require('./src/SpecialFullCoverage')
const MegaCoverage = require('./src/MegaCoverage')
const SuperSale = require('./src/SuperSale')

const log = console.log.bind(console)

const tap = f => x => { f(x); return x; }

const printProduct = product =>
  log(`${product.name}, ${product.sellIn}, ${product.price}`)

const updatePrice = product =>
  product.updatePrice()

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new FullCoverage(2, 0),
  new Product('Low Coverage', 5, 7),
  new MegaCoverage(0, 80),
  new MegaCoverage(-1, 80),
  new SpecialFullCoverage(15, 20),
  new SpecialFullCoverage(10, 49),
  new SpecialFullCoverage(5, 49),
  new SuperSale(3, 6),
]

for (let i = 1; i <= 30; i += 1) {
  log(`-------- day ${i} --------`)
  log('name, sellIn, price')

  productsAtDayZero
    .map(tap(updatePrice))
    .forEach(printProduct)

  log('')
}

