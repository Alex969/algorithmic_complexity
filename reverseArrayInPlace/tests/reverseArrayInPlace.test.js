const reverseArrayInPlace = require('../reverseArrayInPlace');

describe('reverseArrayInPlace', () => {
  it('tests that the [1, 2] array inverses to [2, 1]', () => {
    let arrayInput = [1, 2];
    let result = reverseArrayInPlace(arrayInput);
    expect(result).toEqual([2, 1]);
  })

  it('tests that the [2, 1] array inverses to [1, 2]', () => {
    let arrayInput = [2, 1];
    let result = reverseArrayInPlace(arrayInput);
    expect(result).toEqual([1, 2]);
  })

  it('tests that the [1, 4, 5, 2] array inverses to [2, 5, 4, 1]', () => {
    let arrayInput = [1, 4, 5, 2];
    let result = reverseArrayInPlace(arrayInput);
    expect(result).toEqual([2, 5, 4, 1]);
  })
});