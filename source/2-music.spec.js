const { expect } = require('chai');
const freeze = require('deep-freeze-node');
const music = require('./2-music');

describe('Music', () => {
  const user = freeze({
    id: 1,
    name: 'Charles Bronson',
    password: 'total secret',
    likes: {
      books: 'foundation',
      music: 'edda'
    }
  });

  it('should update music to the given one', () => {
    expect(music('omega', user)).to.eql({
      id: 1,
      name: 'Charles Bronson',
      password: 'total secret',
      likes: {
        books: 'foundation',
        music: 'omega'
      }
    });
  });

});