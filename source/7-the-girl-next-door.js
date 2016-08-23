const { curry, concat, find, toUpper, path, whereEq, pipe } = require('ramda');
const Maybe = require('data.maybe')
const findPath = curry(pipe(path, Maybe.fromNullable));

//Visszakell adni az adatbazisbol  a usernek a cimet csupa nagybetuvel es UK elotaggal.
//Ha nem letezik a user akkor a kovetkezo user cimet kell visszaadni
module.exports = (userId, database) => {
  const findAddressInDatabase = findAddress(database);
  return findAddressInDatabase(userId)
    .orElse(() => findAddressInDatabase(userId + 1))
    .map(toUpper)
    .map(concat('UK '))
    .getOrElse(null);
};

const findAddress = curry((database, userId) => {
  return Maybe
    .fromNullable(find(whereEq({ id: userId }), database))
    .chain(findPath(['address', 'street']));
});

