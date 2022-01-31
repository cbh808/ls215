// only sum squares in totalArea

// function totalArea(array) {
//   let result = array.reduce((sum, rectangle) => {
//     if (rectangle[0] === rectangle[1]) {
//       sum += rectangle[0] * rectangle[1];
//     }
//     return sum;
//   }, 0);

//   return result;
// }

// alt:
function totalArea(array) {
  let squares = array.filter(subarray => subarray[0] === subarray[1]);

  let areas = squares.map(sides => sides[0] * sides[1]);

  return areas.reduce((sum, area) => sum += area);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 121