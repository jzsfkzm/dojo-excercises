const fn = require('./5-deep-dive');
const { expect } = require('chai');
const freeze = require('deep-freeze-node');
const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);

const database = freeze([{
  name: 'darth vader',
  address: 'death star',
  likes: {
    facebook: 82,
    other: {
      insta: 99,
      linkedin: 1
    }
  }
}, {
  name: 'luke',
  address: 'Tatooine',
  likes: {
    facebook: 55,
    other: {
      linkedin: 2
    }
  }
}]);

describe('deep dive', () => {

  it('should increase the given users like path with one', () => {
    expect(fn(0, database)).to.containSubset([{
      likes: {
        other: {
          linkedin: 2
        }
      }
    }]);
  });

  it('should keep other properties untouched', () => {
    expect(fn(0, database)).to.containSubset([{
      name: 'darth vader',
      address: 'death star',
      likes: {
        facebook: 82,
        other: {
          insta: 99
        }
      }
    }]);
  });

  it('should not modify other users', () => {
    expect(fn(0, database)).to.containSubset([{
      name: 'luke',
      address: 'Tatooine',
      likes: {
        facebook: 55,
        other: {
          linkedin: 2
        }
      }
    }]);
  });

  it('should increase with 3 if I call 3 times', () => {
    expect(fn(1, fn(1, fn(1, database)))).to.containSubset([{
      name: 'luke',
      address: 'Tatooine',
      likes: {
        facebook: 55,
        other: {
          linkedin: 5
        }
      }
    }]);
  });

});


