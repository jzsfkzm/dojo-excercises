const { without } = require('../lib');
const { pipe, ifElse, contains, append, withoutValue } = require('ramda');

const toggleValue = ifElse(contains, without, append);

//ha az adott elem letezik a tombben akkor ki kell venni, ha nem akkor hozzakell adni
module.exports = (arrayInObservable, value) => {
  pipe(
    toggleValue(value),
    arrayInObservable.next
  )(arrayInObservable.getValue());
};