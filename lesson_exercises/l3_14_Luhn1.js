/*
start: 17:46
problem read & input / output, given test cases evaluated, rules established done: 17:56
mental model of problem created: 18:00
further questions & test cases done: 18:09
high level steps listed: 18:14
data structures evaluated: 18:15
algorithm done: 18:15
run test case(s) through algorithm done: 18:16
coding done (before final running) 18:27
success acheived: 18:27
refactor: -
time: 41 min

Problem Description
The Luhn formula is a checksum formula used to validate id numbers

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

    Counting from the rightmost digit and moving left, 
      double the value of every second digit
    For any digit that thus become 10 or more, subtract 9 from the result
        1111 becomes 2121
        8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
    Add all these digits together
        1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
        8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (included, if the total modulo 10 is congruent to 0), 
      then the number is valid according to the Luhn Formula; 
      else it is not valid. 
  Thus, 1111 is not valid, it comes out to 6
        8763 is valid, it comes out to 20

Write a program that, 
  given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

input: number as string, contains spaces
output: boolean, true if Luhn valid, false if Luhn invalid

Mental model: take a number & convert it to an array of characters,reverse the order, transforming each string char to a number but doubling every 2nd of the digits of the odd indexed chars. If the sum of any number is more than 10, then subtract 9 from that number and use that result in the place of the number. Add all the numbers up and check if the sum is divisible by 10 or not, returning true if it is.

questions: what is every other number to double? 
2nd from right is first to be doubled, then every other 2nd number from right
  => array of chars can be reversed, then would be every 2nd number from left => idx 1, 3, 5,... (odd idx)

Can number be given directly instead of string? => no
Empty String => false
Can any other data structure be given than a string => no
Can no argument be given => y, return false
Can a number contain non-digits such as spaces => yes, ignore them, they don't factor into selection of numbers to be doubled
Can the number have letters or others chars interrupting the number => yes, ignore them as per spaces

Steps:
Guard clause: if empty string or argument is undefined return false
Clean all non-digits from input
Convert string to array of digits
Reverse order of characters of array
Transform each character to its number equivalent BUT
  if idx is odd => double number
    if doubled number > 10, reduce doubled number by 9
Reduce array of numbers to its sum
Return boolean result of whether or not sum remainder 10 is 0
*/
function checkLuhn(numberString) {
  if (numberString === undefined || numberString === '') {
    return false;
  }

  let cleanString = numberString.replace(/[^\d]/g, '');
  let digits = cleanString.split('').reverse();
  let sum = digits.map(getDigits).reduce((sum, cur) => sum += cur);
  return sum % 10 === 0;
}

let getDigits = (el, idx) => {
  let num = Number(el);
  if (idx % 2 === 1) {
    return (num * 2 >= 10 ? num * 2 - 9 : num * 2);
  } else return num;
}

console.log(checkLuhn('2323 2005 7766 3554')); // 'true'
console.log(checkLuhn('2323 2005 7766 3553')); // 'false'
console.log(checkLuhn('8763')); // 'true'
console.log(checkLuhn('1111')); // 'false'

// non digits in the number
console.log(checkLuhn('2323-2005.7766A3554b')); // 'true'
console.log('------------------------');
// Empty String => false
console.log(checkLuhn('')); // 'false'

// no argument => false
console.log(checkLuhn()); // 'false'