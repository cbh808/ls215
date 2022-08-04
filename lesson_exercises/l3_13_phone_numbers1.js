/*
16:23 start
16:47 test cases done
17:04 done
total 41 minutes

Problem Description
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. 
Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

input: string, phone number
output: string, representing cleaned up phone number

Rules:
If the phone number < 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If phone number is 11 digits and first number is 1, trim 1 and use last 10 digits.
If phone number is 11 digits and first number not 1, then is a bad number.
If phone number > 11 digits, assume that it is a bad number.
For bad numbers, return a string of 10 0s.

Steps:
Convert argument passed in to string
Clean string to reduce it to digits only (string numbers)
  use regex to replace non-digit strings with empty strings
    (/[^\d]/g,'')
if length 10 return string number
if length > 11 or < 10 return 10 zeros (badString)
if length 11 with number at first idx equal 1 
  Y: return rest of string 
  N: return 10 zeros (badString)
*/
const BADSTRING = '0'.repeat(10);

function phoneNumber(number) {
  number = String(number);
  let cleanNumber = number.replace(/[^\d]/g, '');
  let len = cleanNumber.length;

  if (len === 10) return cleanNumber;
  if (len === 11 && cleanNumber[0] === '1') return cleanNumber.slice(1);

  return BADSTRING;
}


// If the phone number is 10 digits, assume that it is good.
console.log(phoneNumber('5615950403'));        // '5615950403'
console.log(phoneNumber('261-595 0403'));      // '2615950403'

// number may also contain special character such as spaces, dash, dot, and parentheses
console.log(phoneNumber('(281) 595-0403 '));   // '2815950403'

// number contains letters
console.log(phoneNumber('(321)a595-0403B '));   // '3215950403'

// If the phone number < 10 digits, assume that it is a bad number.
console.log(phoneNumber('(321)95-0403 '));   // '0000000000'

// 11 digits num & first number is 1 => trim 1 and use last 10 digits
console.log(phoneNumber('(13321)95-0403 '));   // '33215950403'

// phone number 11 digits & first number not 1 => bad number
console.log(phoneNumber('(3321)95-04039 '));   // '0000000000'

// phone number > 11 digits, assume that it is a bad number
console.log(phoneNumber('(332159504039 '));   // '0000000000'

// phone number is a number 10 digits => return a string
console.log(phoneNumber(3321595043));   // '3321595043'

// phone number is a negatvie number 10 digits => return a string
console.log(phoneNumber(-3321595043));   // '3321595043'

// number is 11 digits number with leading 1 => return a string
console.log(phoneNumber(13321595043));   // '3321595043'

// number is 11 digits number with NO leading 1 => return a string
console.log(phoneNumber(33321595043));   // '0000000000'

// number is > 11 digits number  => return a string
console.log(phoneNumber(333215978565043));   // '0000000000'

// number is < 10 digits number  => return a string
console.log(phoneNumber(33));   // '0000000000'

// number is 10 digits in an array => return a string
console.log(phoneNumber([1234567890]));   // '1234567890'

// number is 10 digits string in an array => return a string
console.log(phoneNumber(['1234567890']));   // '1234567890'

// number is empty string => return a string
console.log(phoneNumber(''));   // '0000000000'

// no argument give => return a string
console.log(phoneNumber());   // '0000000000'