const { head, map, replace, evolve, pipe, concat } = require('ramda');

const toViewModel = evolve({
  password: replace(/./g, '*'),
  addresses: pipe(head, evolve({
    zip: concat('UK')
  }))
});

// const { view, over, pipe, lensProp, lensPath, replace, map, head, concat } = require('ramda');
// const obfuscatePassword = over(lensProp('password'), replace(/./g, '*'));
// const pickFirstAddress = over(lensProp('addresses'), head);
// const addUkPrefix = over(lensPath(['addresses', 'zip']), concat('UK'));
// const toViewModel = pipe(obfuscatePassword, pickFirstAddress, addUkPrefix);

//A megadott tombot alakitsd at ugy, hogy
//1: a password mezoben minden karakter helyett egy csillag legyen
//2: Addresses mezoben a legelso address legyen benne
//3: Az addresses mezoben erkezo zip fieldet elozze meg egy UK elotag
module.exports = map(toViewModel);
