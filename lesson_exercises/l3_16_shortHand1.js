/*
Problem Description
Given list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.
Your job is to return a list of complete numbers.
The possible separators are: ["-", ":", ".."]

    "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
    "1-3, 1-2" --> 1, 2, 3, 11, 12
    "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
    "104-2" --> 104, 105, ... 112
    "104-02" --> 104, 105, ... 202
    "545, 64:11" --> 545, 564, 565, .. 611  [545, 64, 11]

input: string
output: array of numbers

rules:
shorthand numbers represent the right-hand most digits of a number
the digits to the left of the short hand number increase

exploration:
1, 3, 7, 2, 4, 1
exploration 1a
1 is the first number (lower limit) => add to list
is 3 > 1? => y => add 3 to list
is 7 > 3 => y => add 7 to list
is 2 > 7 => n => find next number starting at 7 that has 2 on right side:
  8 => does string '8' have last digit of '2' => no => continue
  9 => n
  10 => n
  11 => n
  12 => does string '12' have last digit '2'? => y => add to list
is 4 > 12? => n => find next number starting at 13 that has 4 on right side
  subroutine ...
  14 => add to list
exploration 1b
1, 3, 7, 2, 4, 1
get range -> 1, 2, 3, 4, 5, 6, 7, ..., 12, ..., 14, ..., 21
  min number is first number
  max number is largest number with one more digit than last number
min = 1
max = 99
from min to max
  do subroutine to check if right most digit of input matches number
    y => add to list

Explore 2
result = []
("1-3, 1-2") => ['1-3', '1-2']
'1-3'
min = 1, max = 3
[1, 2, 3]
result = [1, 2, 3]
'1-2'
min = 1, max  = 2
[1, 2]
result = [1, 2, 3, 11, 12]

Explore 3 
result = []
("1:5:2") =>  [ '1', '5', '2' ] => length = 3
min = 1, max = 5 => [1, 2, 3, 4, 5]
result = [1, 2, 3, 4, 5]
min = 6, max = 2 => determine range [6, 7, 8, 9, 10, 11, 12]
concatenate range 

length === 0 


algorithm: 

// create results list and set to empty array
// split input string using ', ' as delimiter
// for each digit only, determine number to add to list
// for each range with '-', determine range of numbers in 'range' list
// concatenate to 'results'
// for each range with ':', determine range of numbers in 'range' list and concatenate to 'results'

keep track of last number in list => start at -1
Split input by ', '
For each element (string)
  is a range (has ':', '-', '..')?  
    N: => add to results => subroutine for adding single number to results
      is num > last num in results => y => add num to list
      is num > last num =>  find next number starting at last num + 1 that has digit(s) of num on right side
        get length of candidate => min = last num + 1, max = '9' + candidate
          loop from min to max (as number) until short hand digits === candidate.slice(candidatelength - shorthand.length)

    Y: => split by delimiter
    for each element from idx 0 to idx Array.length - 2
      min = current index
      max = value at index + 1 if > min
        if not determine num with subroutine for next number
      run subrouting to determine range
        is current num > last num in results?
          y? => create range from min to max
          n? => run subrouting for finding next number for first number
          find max - min more numbers - 1 to range
return result*/

function shortHand(string) {
  let splitString = string.split(', ');
  let result = [];
  // console.log(splitString);
  splitString.forEach(chars => {
    let range;
    if (chars.match(/:|-|\.\./)) {
      chars = chars.split(/:|-|\.\./g);
      range = getRange(chars, result)
      result = result.concat(range);
    } else result = result.concat(appendNumber(chars, result))
  });
  return result;
}

function getRange(chars, result) {
  let min;
  let max;
  let diff;
  let range = [];
  // console.log(chars);
  for (let idx = 0; idx <= chars.length - 2; idx += 1) {
    min = chars[idx];
    max = chars[idx + 1];
    // console.log(Number(min));
    // console.log(range);
    // console.log(range[range.length - 1]);
    if (numGreaterThanLast(min, result)) {
      min = Number(min)
    } else {
      min = numberLessThanLast(min, result)
    }

    if (Number(min) === range[range.length - 1]) {
      min = Number(min) + 1;
    }

    if (Number(max) < Number(min)) {
      max = numberLessThanLast(max, [min]);
    }
    // console.log('min: ' + min);
    // console.log('max: ' + max);
    diff = max - min;
    // console.log('diff: ' + diff);
    for (let num = min; num <= min + diff; num +=1) {
      range.push(num);
    }

  }
  // console.log(range);
  return range;
}
function appendNumber(num, result) {
  
  num = Number(num);
  if (numGreaterThanLast(num, result)) {
    return num
  } else {
    return numberLessThanLast(num, result);
  }
}

function numberLessThanLast(num, result) {
  let min = result[result.length - 1] + 1;
  // let len = String(min).length;
  // let lenNum = String(num).length;
  let max = Number('999' + String(num));
  // console.log(max);
  // let lastDigits = String(num);
  for (let cand = min; cand <= Number(max); cand += 1) {
    if (String(num) === String(cand).slice(String(cand).length - String(num).length)) {
      return cand;
    }
  }
}

function numGreaterThanLast(num, result) {
  //num = Number(num);
  let lastNum = result[result.length - 1] || -Infinity;
  return Number(num) > lastNum;
}

console.log(shortHand("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(shortHand("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(shortHand("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(shortHand("104-2")); // --> 104, 105, ... 112
console.log(shortHand("104-02")); // --> 104, 105, ... 202
console.log(shortHand("545, 64:11")); // --> 545, 564, 565, .. 611

