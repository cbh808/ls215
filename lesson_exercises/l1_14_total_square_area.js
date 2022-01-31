function totalArea(array) {
  let result = array.reduce((sum, rectangle) => {
    sum += rectangle[0] * rectangle[1];
    return sum;
  }, 0);

  return result;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141