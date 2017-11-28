const orderTotal = require('./order-total')

it('Should run a test', () =>{
  expect(1).toBe(1)
})

it('Should return a total', () => {
  expect(orderTotal({
    items: [
      { 'name': 'Dragon candy', price: 2, quantity: 3 }
    ]
  })).toBe(6)
})

it('Should have a quantity', () => {
  expect(orderTotal({
    items: [
      { 'name': 'Dragon candy', price: 4 }
    ]
  })).not.toBe(3)
})

it('Should have the correct price', () => {
  expect(orderTotal({
    items: [
      { 'name': 'Dragon food', price: 8, quantity: 1 },
      { 'name': 'Dragon cage (small)', price: 800, quantity: 1 }
    ]
  })).toBe(808)
})