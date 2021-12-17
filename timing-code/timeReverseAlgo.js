const reverseArray = (arrayInput, size) => {
  for(let i = 1; arrayInput.push(i++) < size;){};
  let start = performance.now()
  if(arrayInput.length === 0){
    throw new Error('cannot reverse empty             array');
  } else {
      let reversedArray = [];
      for(i = 0; i < arrayInput.length; i++){
        let index = arrayInput.length - (i+1);
        reversedArray.push(arrayInput[index])
    }
    let end = performance.now();
    console.log(`Size : ${arrayInput.length}`)
    console.log(`Execution time: ${end - start} ms`);
    return reversedArray;
  } 
}