/* 
Write a function that takes a string as an argument
return true if the string contains properly balanced parentheses
return false otherwise. 

Rules:
Parentheses are properly balanced when '(' and ')' occur in matching pairs,
with each pair starting with '('.

input: string with parenthesi
output: boolean

Algorithm:
iterate over chars
counter 
  increments by one with '('
  decrements by one with ')'
if counter ever negative, return false

when finished iteration
if counter != 0
  return false
  return true
*/

function isBalanced(string) {
let counter = 0;
  for (idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === '(') {
      counter += 1;
    } else if (string[idx] === ')') {
      counter -= 1;
    }
    if (counter < 0) {
      return false;
    }
  }
  return counter === 0;
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false