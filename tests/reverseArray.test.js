// input     |     output
// [1,2]     |  [2,1]
// [1,2,3]   |  [3,2,1]
// []        |  error 'cannot reverse empty array'

describe('reverseArray', () => {
  it('tests that the second element and first inverse', () => {
    let arrayInput = [1, 2];
    let result = reverseArray(arrayInput);
    expect(result).toBe([2, 1]);
  })
})