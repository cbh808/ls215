// only sum squares in totalArea

function totalArea(array) {
  let result = array.reduce((sum, rectangle) => {
    if (rectangle[0] === rectangle[1]) {
      sum += rectangle[0] * rectangle[1];
    }
    return sum;
  }, 0);

  return result;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 121