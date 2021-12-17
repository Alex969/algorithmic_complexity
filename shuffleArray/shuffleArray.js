const shuffle = (arrayToShuffle) => {
  newArray = []

  while(arrayToShuffle.length !== 0){
    newArray.push(
      arrayToShuffle.splice(
        Math.floor(arrayToShuffle.length * Math.random()), 1)[0]
    );
  }
  return newArray;
}

module.exports = shuffle;