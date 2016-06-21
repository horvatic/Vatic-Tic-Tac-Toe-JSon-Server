// Test/cart-summary-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var CartSummary = require('./../WebSite/cart-summary');

describe('CartSummary', function() {
  it('getSubtotal() should return 0 if no items are passed in', function() {
    var cartSummary = new CartSummary([]);
    expect(cartSummary.getSubtotal()).to.equal(0);
  });
  it('getSubtotal() should return the sum of the price * quantity for all items', function () {
      var cartSummary = new CartSummary([{
          id: 1,
          quantity: 4,
          price: 50
      }, {
          id: 2,
          quantity: 2,
          price: 30
      }, {
          id: 3,
          quantity: 1,
          price: 40
      }]);

      expect(cartSummary.getSubtotal()).to.equal(300);
  });
});