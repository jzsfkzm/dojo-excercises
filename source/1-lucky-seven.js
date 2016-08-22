const { tail, sum, take, pipe } = require('ramda');
const sumOfFirstThree = pipe(take(3), sum);

// Adjon vissza true-t ha van benne harom olyan egymast koveto szam aminek
// az osszege 7. Ha nincs akkor false;
const luckySeven = function(input) {
  if (input.length < 3) return false;
  if (sumOfFirstThree(input) === 7) return true;
  return luckySeven(tail(input));
};

module.exports = luckySeven;