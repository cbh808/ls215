// program that checks whether all elements of an array are Numbers.

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber)
}

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1)
    if (!func(array[i])) {
      return false
    }
  return true;
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false