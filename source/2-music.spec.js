const { expect } = require('chai');
const freeze = require('deep-freeze-node');
const music = require('./2-music');
const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);

describe('Music', () => {

  it('should update music to the given one', () => {
    const user = freeze({
      id: 1,
      name: 'Charles Bronson',
      password: 'total secret',
      likes: {
        books: 'foundation',
        music: 'edda'
      }
    });
    expect(music('omega', user)).to.containSubset({
      likes: {
        music: 'omega'
      }
    });
  });

  it('should keep other properties untouched', () => {
    const user = freeze({
      id: 1,
      name: 'Charles Bronson',
      password: 'total secret',
      likes: {
        books: 'foundation',
        music: 'edda'
      }
    });
    expect(music('omega', user)).to.containSubset({
      id: 1,
      name: 'Charles Bronson',
      password: 'total secret',
      likes: {
        books: 'foundation'
      }
    });
  });

  it('should insert music to the given one if music property doesnt exist', () => {
    const user = freeze({
      id: 1,
      name: 'Charles Bronson',
      password: 'total secret',
      likes: {
        books: 'foundation'
      }
    });
    expect(music('akela', user)).to.eql({
      id: 1,
      name: 'Charles Bronson',
      password: 'total secret',
      likes: {
        books: 'foundation',
        music: 'akela'
      }
    });
  });

  it('should insert music to the given one if likes property doesnt exist', () => {
    const user = freeze({
      id: 1,
      name: 'Charles Bronson',
      password: 'total secret'
    });
    expect(music('edda', user)).to.eql({
      id: 1,
      name: 'Charles Bronson',
      password: 'total secret',
      likes: {
        music: 'edda'
      }
    });
  });

});