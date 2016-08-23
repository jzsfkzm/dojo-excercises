const { expect } = require('chai');
const freeze = require('deep-freeze-node');
const nextDoor = require('./7-the-girl-next-door');

describe('The Girl Next Door', () => {

  it(`should give null if the given user and the next user doesnt exist`, () => {
    const database = freeze([{
      id: 1,
      name: 'Charles Bronson',
      address: {
        street: 'Blaha square',
        zip: 1081
      }
    }]);
    expect(nextDoor(4, database)).to.eql(null);
  });

  it(`should give back the user's address in an uppercased format with uk prefix for the given id`, () => {
    const database = freeze([{
      id: 1,
      name: 'Charles Bronson',
      address: {
        street: 'Blaha square',
        zip: 1081
      }
    }, {
      id: 3,
      name: 'Leila',
      address: {
        street: 'Tatooine',
        zip: 111
      }
    }]);
    expect(nextDoor(1, database)).to.eql('UK BLAHA SQUARE');
  });

  it(`should give back the next user's address in an uppercased format with uk prefix if the given id doesnt exist`, () => {
    const database = freeze([{
      id: 1,
      name: 'Charles Bronson',
      address: {
        street: 'Blaha square',
        zip: 1081
      }
    }, {
      id: 3,
      name: 'Leila',
      address: {
        street: 'Tatooine',
        zip: 111
      }
    }]);
    expect(nextDoor(2, database)).to.eql('UK TATOOINE');
  });

  it(`should give back the next user's address if the user exists but there is no address`, () => {
    const database = freeze([{
      id: 2,
      name: 'Charles Bronson'
    }, {
      id: 3,
      name: 'Leila',
      address: {
        street: 'Tatooine',
        zip: 111
      }
    }]);
    expect(nextDoor(2, database)).to.eql('UK TATOOINE');
  });

  it(`should give back the next user's address if the user exists but there is no street`, () => {
    const database = freeze([{
      id: 2,
      name: 'Charles Bronson',
      address: {
        zip: 1081
      }
    }, {
      id: 3,
      name: 'Leila',
      address: {
        street: 'Tatooine',
        zip: 111
      }
    }]);
    expect(nextDoor(2, database)).to.eql('UK TATOOINE');
  });

  it(`should give back null if the given id doesnt exist and the next door address is empty`, () => {
    const database = freeze([{
      id: 3,
      name: 'Leila',
    }]);
    expect(nextDoor(2, database)).to.eql(null);
  });

  it(`should give back null if the given id doesnt exist and the next door street is empty`, () => {
    const database = freeze([{
      id: 3,
      name: 'Leila',
      address: {
        zip: 111
      }
    }]);
    expect(nextDoor(2, database)).to.eql(null);
  });

});