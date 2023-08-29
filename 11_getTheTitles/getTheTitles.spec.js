const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Percy Jackson and the Lightning Thief',
        author: 'Rick Rioridan'
      },
      {
        title: 'Harry Potter and the Sorceror\'s Stone',
        author: 'J. K. Rowling'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Percy Jackson and the Lightning Thief','Harry Potter and the Sorceror\'s Stone']);
  });
});
