same as reverseArray function but instead of returning a new array 
with the reversed indexes, we want to mimic the actual .reverse() method
that's in-built to javaScript and reverse and return the same array 

what we need to do : 

use .splice method

Reverses first half of the array : 

const reverse = (array) => {

  let hold = [];
  let size = Math.round((array.length - 1) / 2);

  for(let i = 0; i < size; i++){
    hold.push(array[i]);
    array.splice(i, 1, array[array.length - (i + 1)])
    
    } 
    console.log(hold);
    console.log(array);
 }
  