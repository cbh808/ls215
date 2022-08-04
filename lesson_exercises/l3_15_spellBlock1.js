/*
start: 
problem read & input / output, given test cases evaluated, rules established & mental model of problem created: 
further questions & test cases done: 
high level steps listed: 
data structures evaluated:
algorithm done: 
run test case(s) through algorithm done: 
coding done (before final running) 
success acheived: 
refactor: -
time:  min

start: 7:46
problem read & input / output, given test cases evaluated, rules established & mental model of problem created: 7:52
further questions & test cases done: 8:03
high level steps listed: 
data structures evaluated:
algorithm done: 8:20
run test case(s) through algorithm done: 8:27
coding done (before final running) 
success acheived: 
refactor: -
time:  min


Problem Description
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Problem
input: string of letters
output: boolean

Mental model:
compare string characters to pairs of characters. if all pairs of letters are only used one time, then return true

Rules: 
use each letter only once
use each pair only once
words are case-insensitive
if input string is empty return true
ignore non-alphabetic letters
all non-strings as input return 'invalid input'
no input resturns 'invalid input'

Put letter groups in appropriate data structure
Guard clause to ensure input is given and is string
For each char in string determine if char not yet used or not letter
 if not letter: go to next char
 if not uses: mark letter group as used, go to next letter
 if used: return false

Data Structures:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

store letter pairs as 2 letter strings and store pairs in array
['bo', 'xk', 
for each char, delete out the pair that contains the char
   for each element of array check if current letter is contained in string
   if no matches return false

Algorithm
Put letter groups in array of two letter strings
Guard clause to ensure input is given and type is string
  othewise return 'invalid string'
clean string
  to remove non-alphabetic characters
  to make all lowercase
For each char in string determine if char not yet used
  get character
  set found to false
    for each pair in pairs array
      if pair contains character
        delete it
        set found to true
        break from loop
  return false if found is false
return true
*/


function isBlockWord(candidate) {
  let pairs = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];

  if (typeof candidate !== 'string') {
    return 'invalid input'
  }

  let cleanCandidate = candidate.replace(/[^a-z]/ig, '').toLowerCase();

  let chars = cleanCandidate.split('');
  let counter;
  for (let index = 0; index < chars.length; index += 1) {
    let char = chars[index];
    counter = 0;
    for (let idx = 0; idx < pairs.length; idx += 1) {
      let pair = pairs[idx];
      if (!pair) {
        continue;
      } else if (pair.includes(char)) {
        delete pairs[idx];
        counter += 1;
        // break;
      }
    }
    if (counter === 0) return false;
  }
  
  return true;
}



// if input string is empty return true
console.log(isBlockWord(''));           // true

// // no input resturns 'invalid input'
console.log(isBlockWord());             // 'invalid input'

// // if input string contains non-alpha chars, ignore those letters
console.log(isBlockWord('@BA7TCH'));    // true
console.log(isBlockWord('BUTCh64H'));   // false

// non-strings as input return 'invalid input'
console.log(isBlockWord(72));              // 'invalid input'
console.log(isBlockWord(['word']));        // 'invalid input'
console.log(isBlockWord({a:'word'}));      // 'invalid input'

// case insensitive
console.log(isBlockWord('bB'));         // 'false'
console.log(isBlockWord('BatCh'));      // 'true'

// happy cases
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true