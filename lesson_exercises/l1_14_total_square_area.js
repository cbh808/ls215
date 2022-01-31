/* Write a Function totalArea that takes Array of rectangles as argument
Function should return total area covered by all rectangles 
Return total area covered by rectangles

Example:
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
totalArea(rectangles);    // 141

Data:
input: nested arrays with two numbers each (lengths of rectangle sides)
output: number, sum of nums obtained by multiplying values in each nested array

Algorithm:
declare local variable and assign to reduce call on original array
reduce array directly to number sought in output
  within reducing code block
  -multiply numbers of each array together
  -increment accumulator result to the accumulator
  -return accumulator
return result variable
*/
function totalArea(array) {
  let result = array.reduce((sum, rectangle) => {
    sum += rectangle[0] * rectangle[1];
    return sum;
  }, 0);

  return result;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141