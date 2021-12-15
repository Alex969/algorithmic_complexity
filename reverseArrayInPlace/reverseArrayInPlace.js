const reverseArray = require("../reverseArray/reverseArray");

function reverseArrayInPlace(array) {
  for(i = 0; i < array.length; i++) {
    let valueIndexDeleted = array.splice(i, 1)[0];
    array.unshift(valueIndexDeleted);
  }
  return array;
}

module.exports = reverseArrayInPlace;