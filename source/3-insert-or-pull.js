const { without } = require('../lib');
const { pipe, ifElse, contains, append } = require('ramda');

const toggleValue = ifElse(contains, without, append);

//ha az adott elem letezik a tombben akkor ki kell venni, ha nem akkor hozzakell adni
module.exports = (arrayInObservable, value) => {
  const newArray = toggleValue(value, arrayInObservable.getValue());
  return arrayInObservable.next(newArray);
};