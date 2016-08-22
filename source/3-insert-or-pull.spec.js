const { expect } = require('chai');
const { BehaviorSubject } = require('rxjs');
const freeze = require('deep-freeze-node');
const insertOrPull = require('./3-insert-or-pull');

describe('Insert Or Pull', () => {

  const createSafeBehaviorSubject = (value) => {
    const array = new BehaviorSubject(freeze(value));
    array.next = array.next.bind(array);
    array.getValue = array.getValue.bind(array);
    return array;
  };

  it('should remove the given value if the array contains it', () => {
    const array = createSafeBehaviorSubject([1, 2, 3]);
    insertOrPull(array, 2);
    expect(array.getValue()).to.eql([1, 3]);
  });

  it('should insert the given value if the array doesnt contain it', () => {
    const array = createSafeBehaviorSubject([1, 2]);
    insertOrPull(array, 3);
    expect(array.getValue()).to.eql([1, 2, 3]);
  });

});