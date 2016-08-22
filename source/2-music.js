const { assocPath } = require('ramda');

//A megadott objektum likes.music mezojet allitsd be a megadottra.
module.exports = assocPath(['likes', 'music']);
