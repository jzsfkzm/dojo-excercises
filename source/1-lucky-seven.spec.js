const { expect } = require('chai');
const freeze = require('deep-freeze-node');
const fn = require('./1-lucky-seven');

describe('Lucky Seven', () => {

  it('should give back false if the given array is empty', () => {
    expect(fn([])).to.be.false;
  });

  it('should give back false if the given array length is 1', () => {
    expect(fn(freeze([7]))).to.be.false;
  });

  it('should give back false if the given array length is 2', () => {
    expect(fn(freeze([6, 1]))).to.be.false;
  });

  it('should give back true if the given array has three consecutive elements sum to 7', () => {
    expect(fn(freeze([2, 1, 5, 1, 0]))).to.be.true;
  });

  it('should give back true if there is a negativ number and the sum is 7', () => {
    expect(fn(freeze([0, -2, 1, 8]))).to.be.true;
  });

  it('should give back false if the given array doesnt have three consecutive elements sum to 7', () => {
    expect(fn(freeze([7, 7, 7, 7]))).to.be.false;
    expect(fn(freeze([3, 4, 3, 4]))).to.be.false;
  });

});