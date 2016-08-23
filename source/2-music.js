const R = require('ramda');
const set = R.assocPath;

//A megadott objektum likes.music mezojet allitsd be a megadottra.
module.exports = set(['likes', 'music']);
