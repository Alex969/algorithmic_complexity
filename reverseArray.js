// check for the first element and make it last 
// making the first element last means that [0] becomes [array.length - 1]
// and [array.length - 1] becomes [0]
// [array.length - 2]  becomes [1]
// [array.length - (i + 1)] becomes [i]
// we can just push them in a new array and return that array 
// check for the second element and make it second to last
// [1] becomes [array.length - 2]
// [i] becomes [array.length - (i+1)]
// 
// for(i = 0; i < array1.legnth; i++)
// array2.push(array[array.length - (i+1)])
// return array2
// check for the i element and make it i to last 
// check for the last element and make it first

const reverseArray = (arrayInput) => {
  let reversedArray = [];
    for(i = 0; i < arrayInput.length; i++){
      let index = arrayInput.length - (i + 1);
      reversedArray.push(arrayInput[index])
  }
    return reversedArray
}

module.exports = reverseArray;