function myForEach(array, func) {
  for (let i = 0; i < array.length; i += 1) {
      func(array[i])
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3

/* The myForEach function is invoked on line 9 with two arguments, an array and
the `getMin` function. Within `myForEach, a for loop iterates over the counter
`i`. On each iteration of 'i', the function `getMin` is invoked with the current
element of the array passed in as an argument., i.e the element that is
accessible by `array[i]`.
`getMin` uses the element to compare it to the current value of the
global variable `min` and updates it if the ternary evaluates to true.