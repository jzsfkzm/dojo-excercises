const { expect } = require('chai');
const freeze = require('deep-freeze-node');
const crazyDeep = require('./5-deep-dive');

describe('Deep Dive', () => {

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
    expect(crazyDeep({ id: 1, addressId: 89 }, 'Death Star', db)).to.eql([{
      id: 1,
      name: 'Charles Bronson',
      addresses: [{
        id: 88,
        zip: 1081,
        street: 'Blaha square'
      }, {
        id: 89,
        zip: 1052,
        street: 'Death Star'
      }]
    }, {
      id: 2,
      name: 'Darth Vader',
      addresses: []
    }]);
  });

});