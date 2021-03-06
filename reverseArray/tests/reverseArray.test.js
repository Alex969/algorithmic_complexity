const reverseArray = require('../reverseArray');

describe('reverseArray', () => {
  it('tests that the [1, 2] array inverses to [2, 1]', () => {
    let arrayInput = [1, 2];
    let result = reverseArray(arrayInput);
    expect(result).toEqual([2, 1]);
  })

  it('tests that the [2, 1] array inverses to [1, 2]', () => {
    let arrayInput = [2, 1];
    let result = reverseArray(arrayInput);
    expect(result).toEqual([1, 2]);
  })

  it('tests that the [1, 4, 5, 2] array inverses to [2, 5, 4, 1]', () => {
    let arrayInput = [1, 4, 5, 2];
    let result = reverseArray(arrayInput);
    expect(result).toEqual([2, 5, 4, 1]);
  })

  it('tests that you can\'t reverse an empty array', () => {
    let arrayInput = [];
    expect(() => {
      reverseArray(arrayInput)
    }).toThrowError('cannot reverse empty array');
  })
})