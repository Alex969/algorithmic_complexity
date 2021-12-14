const reverseArray = (arrayInput) => {
  if(arrayInput.length === 0){
    throw new Error('cannot reverse empty array');
  } else {
    let reversedArray = [];
    for(i = 0; i < arrayInput.length; i++){
      let index = arrayInput.length - (i + 1);
      reversedArray.push(arrayInput[index])
  }
    return reversedArray;
  } 
}

module.exports = reverseArray;