const { without, isArrayLike, flip } = require('ramda');

module.exports.without = (value, values) => {
  return isArrayLike(values) ? without([value], values) : without(value, values);
};