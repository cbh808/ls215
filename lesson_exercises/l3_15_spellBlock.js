/*
Problem Description
A collection of spelling blocks has two letters per block, as shown in this list:
Write a function that takes a word string as an argument
Returns true if word can be spelled using the set of blocks, 
Return false otherwise. 

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

Rules
Words can be spelled using only one letter from any given block.
Each block can be used once.
The letters are case-insensitive
ignore non-alpabetic characters

input: string, single word with only alphabetic characters
output: boolean, describing if word/block rules are met

Examples:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

Data Structures;
input: string
comparison of each letter:
  isBlockWord('BATCH');
  'B' first letter compare to block, e.g. subarray in an array
Block; [B, O] both having same index in an array
'B' => [[B,O], [X, K], [D, Q], [C, P], [N,A]
[G, T]   [R, E]   [F, S]   [J, W]   [H, U]
[V, I]   [L, Y]   [Z, M]]
or both having same block key/value pair in object from which can count number of keys
output: boolean

Algorithm
For each letter of string, find the index of the array in which the block is
  create empty object
  iterate manually over string chars
    iterate over array of blocks
      if current block contains letter of string
        Create an object key/value pair using the index as key, any value as value
Count the number of key entries and compare to length of the input string
Return true if same value, else false
*/

function isBlockWord(string) {
  let blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  let obj = {};
  string = string.replace(/[^a-zA-Z]/g, '');
  console.log(string);

  for(let strIdx = 0; strIdx < string.length; strIdx += 1) {
    let currentLetter = string[strIdx].toUpperCase();
    blocks.forEach((block, blkIdx) => {
      if (block.includes(currentLetter)) {
        obj[blkIdx] = 99;
      }
    });
  }
  console.log(obj);
  return Object.keys(obj).length === string.length;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(' j est '));       // true