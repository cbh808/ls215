/*
Problem Description

Write a program that cleans up user-entered phone numbers
Other than digits, the number may also contain special characters
  e.g. spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

    If the phone number is less than 10 digits, assume that it is a bad number.
    If the phone number is 10 digits, assume that it is good.
    If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
    If the phone number is 11 digits and the first number is not 1, then it is a bad number.
    If the phone number is more than 11 digits, assume that it is a bad number.

For bad numbers, just a return a string of 10 0s.

Algorithm:
write function that takes number
clean number removing non numbers and replacing with empty string
if len 10 return number
if len 11 and first num === 1 return last 10 digits
else return 10 0's
    number < len 10
    num len 11 without leading one
    len > 11
*/

function cleanNumber(inputNumber) {
  let stringNumber = inputNumber.replace(/[^0-9]/g, '');
  if (stringNumber.length === 10) {
    return stringNumber;
  } else if (stringNumber.length === 11 && stringNumber[0] === '1') {
    return stringNumber.slice(1);
  } else {
    return '0000000000';
  }
}

console.log(cleanNumber('1234567890')    === '1234567890');
console.log(cleanNumber('123.456.7890')  === '1234567890');
console.log(cleanNumber(' 123.456.7890')  === '1234567890');
console.log(cleanNumber('123456789')     === '0000000000');
console.log(cleanNumber('11234567890')   === '1234567890');
console.log(cleanNumber('1(123)4567890') === '1234567890');
console.log(cleanNumber('01234567890')   === '0000000000');
console.log(cleanNumber('123456789012')  === '0000000000');