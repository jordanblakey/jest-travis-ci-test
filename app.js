"use strict";

function orderTotal(order) {
  return order.items.reduce(function (prev, cur) {
    return cur.price * (cur.quantity || 1) + prev;
  }, 0);
}

module.exports = orderTotal;
'use strict';

var orderTotal = require('./order-total');

it('Should run a test', function () {
  expect(1).toBe(1);
});

it('Should return a total', function () {
  expect(orderTotal({
    items: [{ 'name': 'Dragon candy', price: 2, quantity: 3 }]
  })).toBe(6);
});

it('Should have a quantity', function () {
  expect(orderTotal({
    items: [{ 'name': 'Dragon candy', price: 4 }]
  })).not.toBe(3);
});

it('Should have the correct price', function () {
  expect(orderTotal({
    items: [{ 'name': 'Dragon food', price: 8, quantity: 1 }, { 'name': 'Dragon cage (small)', price: 800, quantity: 1 }]
  })).toBe(808);
});
