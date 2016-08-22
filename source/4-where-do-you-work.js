const { head, map, replace, evolve, pipe, concat } = require('ramda');
const toViewModel = evolve({
  password: replace(/./g, '*'),
  addresses: pipe(head, evolve({
    zip: concat('UK')
  }))
});

//A megadott tombot alakitsd at ugy, hogy
//1: a password mezoben minden karakter helyett egy csillag legyen
//2: Addresses mezoben a legelso address legyen benne
//3: Az addresses mezoben erkezo zip fieldet elozze meg egy UK elotag
module.exports = map(toViewModel);
