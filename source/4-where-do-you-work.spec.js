const { expect } = require('chai');
const freeze = require('deep-freeze-node');
const whereDoYouWork = require('./4-where-do-you-work');
const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);

describe('Where do you work?', () => {

  const db = freeze([{
    id: 1,
    name: 'Charles Bronson',
    password: 'total secret',
    not: 'rel',
    otherNot: 'rel',
    whatever: 'okay',
    addresses: [{
      street: '99 Walnut Dr.',
      zip: '04821'
    }, {
      street: '2321 Crane Way',
      zip: '08082'
    }, {
      street: '221 Photo Street',
      zip: '08082'
    }]
  }, {
    id: 2,
    name: 'Darth Vader',
    password: 'not that much',
    not: 'rel',
    otherNot: 'rel',
    whatever: 'okay',
    addresses: [{
      street: 'Solar Panel 1',
      zip: '111'
    }, {
      street: 'Solar Panel 2',
      zip: '222'
    }, {
      street: 'Solar Panel 3',
      zip: '333'
    }]
  }]);

  it('should obfuscate the password', () => {
    expect(whereDoYouWork(db)).to.containSubset([{
      id: 1,
      password: '************'
    }, {
      id: 2,
      password: '*************'
    }]);
  });

  it('should give back the first address as addresses', () => {
    expect(whereDoYouWork(db)).to.containSubset([{
      id: 1,
      addresses: {
        street: '99 Walnut Dr.',
        zip: 'UK04821'
      }
    }, {
      id: 2,
      addresses: {
        street: 'Solar Panel 1',
        zip: 'UK111'
      }
    }]);
  });

  it('should give back every other field without transformation', () => {
    expect(whereDoYouWork(db)).to.containSubset([{
      id: 1,
      name: 'Charles Bronson',
      not: 'rel',
      otherNot: 'rel',
      whatever: 'okay'
    }, {
      id: 2,
      name: 'Darth Vader',
      not: 'rel',
      otherNot: 'rel',
      whatever: 'okay'
    }]);
  });

});