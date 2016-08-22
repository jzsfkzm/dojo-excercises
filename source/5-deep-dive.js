const { whereEq } = require('ramda');
const { modify, get, prop, find, compose, set } = require('partial.lenses');

const streetPath = (id, addressId) => {
  return compose(
    find(whereEq({ id: id })),
    prop('addresses'),
    find(whereEq({ id: addressId })),
    prop('street')
  );
};

// az adatbazisban szereplo userhez tartozo cimet at kell irni a megadottra.
module.exports = ({ id, addressId }, newAddress, database) => {
  return set(streetPath(id, addressId), newAddress, database);
};

// over(path, concat('UK'), database);
// view(path, database);
