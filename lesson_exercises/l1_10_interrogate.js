function myOwnEvery(array, func) {

  array.forEach(element => {
    if (!func(element)) {
      return false
    }
  });
  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

/* Note: If code needs an early return while processing a list, consider
using a for loop. The JavaScript list processing abstractions, other than
every and some, all traverse the entire list, and that may be wasted effort. */