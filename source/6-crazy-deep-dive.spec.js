const { expect } = require('chai');
const freeze = require('deep-freeze-node');
const crazyDeep = require('./6-crazy-deep-dive');
const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);

describe('Crazy Deep Dive', () => {

  const db = freeze([{
    id: 1,
    name: 'Charles Bronson',
    addresses: [{
      id: 88,
      zip: 1081,
      street: 'Blaha square'
    }, {
      id: 89,
      zip: 1052,
      street: 'Realtanoda'
    }]
  }, {
    id: 2,
    name: 'Darth Vader',
    addresses: []
  }]);

  it('should modify the given street', () => {
    expect(crazyDeep({ id: 1, addressId: 89 }, 'Death Star', db)).to.containSubset([{
      addresses: [{
        street: 'Death Star'
      }]
    }]);
  });

  it('should keep other streets untouched', () => {
    expect(crazyDeep({ id: 1, addressId: 89 }, 'Death Star', db)).to.containSubset([{
      addresses: [{
        id: 88,
        zip: 1081,
        street: 'Blaha square'
      }]
    }]);
  });

  it('should keep other properties untouched', () => {
    expect(crazyDeep({ id: 1, addressId: 89 }, 'Death Star', db)).to.containSubset([{
      id: 1,
      name: 'Charles Bronson'
    }]);
  });

  it('should keep other users untouched', () => {
    expect(crazyDeep({ id: 1, addressId: 89 }, 'Death Star', db)).to.containSubset([{
      id: 2,
      name: 'Darth Vader',
      addresses: []
    }]);
  });

});