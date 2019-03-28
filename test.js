const operations = require('./index.js')
const assert = require('assert')


describe('Unit testing suite', function() {
  describe('calculateIncome', function () {
    it('returns annual income when given monthly income', () => {
      assert.deepEqual(operations.calculateIncome(25000000), 300000000);
    });
  });

  describe('tierOneTax', function () {
    it('testing tier one of annual income(0 to 50,000,000 IDR): correctly returns annual tax of 1,250,000 IDR when annual income is 25,000,000 IDR', () => {
      assert.deepEqual(operations.tierOneTax(25000000), 1250000);
    });
  });

  describe('tierTwoTax', function () {
    it('testing tier two of annual income(50,000,000 to 250,000,000 IDR): correctly returns annual tax of 17,500,000 IDR if annual income is 150,000,000 IDR', () => {
      assert.deepEqual(operations.tierTwoTax(150000000), 17500000);
    });
  });

  describe('tierThreeTax', function () {
    it('testing tier three of annual income(250,000,000 to 500,000,000 IDR): correctly returns annual tax of 63,750,000 IDR if annual income is 375,000,000 IDR', () => {
      assert.deepEqual(operations.tierThreeTax(375000000), 63750000);
    });
  });
	 
  describe('tierFourTax', function () {
    it('testing tier four of annual income(above 500,000,000 IDR): correctly returns annual tax of 125,000,000 IDR if annual income is 600,000,000 IDR', () => {
      assert.deepEqual(operations.tierFourTax(600000000), 125000000);
    });
  });
});
  

describe('Integration testing suite', function() {
  describe('calculateTax', function () {
    describe('step one: uses function tierOneTax correctly', function () {
      it('correctly returns annual tax of 1,500,000 IDR if a persons annual income is 30,000,000 IDR', () => {
        assert.deepEqual(operations.calculateTax(30000000), 1500000);
      });
    });
    describe('step two: uses function tierTwoTax correctly', function () {
      it('correctly returns annual tax of 10,000,000 IDR if a persons annual income is 100,000,000 IDR', () => {
        assert.deepEqual(operations.calculateTax(100000000), 10000000);
      });
    });
    describe('step three: uses function tierThreeTax correctly', function () {
      it('correctly returns annual tax of 45,000,000 IDR if a persons annual income is 300,000,000 IDR', () => {
        assert.deepEqual(operations.calculateTax(300000000), 45000000);
      });
    });
    describe('step four: uses function tierFourTax correctly', function () {
      it('correctly returns annual tax of 10,000,000 IDR if a persons annual income is 600,000,000 IDR', () => {
        assert.deepEqual(operations.calculateTax(600000000), 125000000);
      });
    });
  });
});


describe('End-to-end testing suite', function() {
  describe('calculating annual tax correctly when given persons monthly income:', function () {
    describe('step one: calculates annual income', function () {
      it('correctly calculates annual income', () => {
        assert.deepEqual(operations.calculateIncome(10000000), 120000000);
      });
      describe('step two: calculates tax', function () {
        it('correctly calculates annual tax using annual income', () => {
          assert.deepEqual(operations.calculateTax(120000000), 13000000);
        });
      });
    });
  });
});
