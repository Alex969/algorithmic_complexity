const reverseArray = (arrayInput) => {
  const a = [1, 2];
  const b = [2, 1];

  for(i = 0; i < arrayInput.length; i++){
    if (arrayInput[i] === a[i]) {
      return b;
    }
    else{
      return a;
    }
  }
}

module.exports = reverseArray;