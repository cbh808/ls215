function nearestChapter(chapters, page) {
  let startPages = Object.values(chapters);
  let result = [];
  for (let idx = 0; idx < startPages.length; idx += 1) {

    if (startPages[idx] < page && (startPages[idx + 1] > page || startPages[idx + 1] === undefined )) {
      result.push(startPages[idx]);
      result.push(startPages[idx + 1]);
      break;
    } else if (startPages[idx + 1] === undefined ) {
        result.push(startPages[idx])
        break;
    } else {
        continue;
      }
  };

  console.log(result);
  
  let average = result.reduce((num, element) => {
    num += element
    return num;
  }, 0)/2;
  console.log(average);

  if (page >= average) {
    return Object.keys(chapters).find(key => chapters[key] === result[result.length -1]);
  }
  return Object.keys(chapters).find(key => chapters[key] === result[0]);
}

console.log(nearestChapter({
  "Chapter 1" : 1,  // 10 - 1   9
  "Chapter 2" : 15, //15 - 10. 5 
  "Chapter 3" : 37  // 37 - 10. 27
}, 10)); // ➞ "Chapter 2"


console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)); // ➞ "The End?"


console.log(nearestChapter({
  "Chapter 1a" : 1,  // 2
  "Chapter 1b" : 5   // 2
}, 3)); // ➞ "Chapter 1b"


/* ALTERNATIVE SOLUTION
function nearestChapter(chapters, page) {
  let pages = Object.values(chapters);
  let closestValues = [];
  let differences = pages.map(num => Math.abs(num - page))
  let min = Math.min(...differences)
  differences.forEach(num => {
    if (num === min) {
    closestValues.push(differences.indexOf(num))
    differences[differences.indexOf(num)] = undefined;
    }
  }) 
  // [1, 5, 3]
  // [2, 2]        [1, 5]
  if (closestValues.length === 2) {
    closestValues = Math.max(...closestValues.map(num => pages[num]))
  } else {
    closestValues = pages[closestValues[0]]
  } 

  return Object.keys(chapters).find(key => chapters[key] === closestValues)
}
*/