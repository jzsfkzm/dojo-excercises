const { index, modify, prop, compose } = require('partial.lenses');
const { inc } = require('ramda');

module.exports = (userIndex, database) => {
  const linkedinPath = compose(
    index(userIndex),
    prop('likes'),
    prop('other'),
    prop('linkedin')
  );
  return modify(linkedinPath, inc, database);
}