/*
Problem Description

The Luhn formula is a simple checksum formula
It is used to validate a variety of identification numbers
    e.g. credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against an included check digit
It (the check digit) is usually appended to a partial number to generate the full number
(the check digit) number must pass the following test:

Problem:
Write a program that, given a number in string format, 
check if it is valid per the Luhn formula. 
This should treat, for example, "2323 2005 7766 3554" as valid. 
You can ignore all non-numeric characters in the input string.

Rules
- From the rightmost digit and moving left, double the value of every second digit
- 0 treated as 0, not 10
- For any digit that thus become 10 or more, subtract 9 from the result
- Sum the result
- check if valid number, i.e. ending in 0

input: string, a number as string
output: boolean, true if valid checksum is created

Examples
Create doubled values
    1111 becomes 2121
    8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Determine Checksum: Add all these digits together
    1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
    8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0)
    - number is valid according to the Luhn Formula; else it is not valid. 

Thus, 1111 is not valid (as shown above, it comes out to 6),
8763 is valid (as shown above, it comes out to 20).

Data Structures
string => cleaned array of numbers
manipulate numbers
sum numbers
return boolean

Algorithm:

*/
function validLuhn(string) {
    let numbers = string.replace(/[\D]/g, '').split('').map(Number);
    if (numbers.length === 0) return false;

    let transformed = numbers.reverse().map((num, idx) => {
        if (idx % 2 === 0) return num;
        return (num * 2 > 9 ? num * 2 - 9  : num * 2);
    });

    return transformed.reduce((sum, value) => sum += value) % 10 === 0;
}

console.log(validLuhn("2323 2005 7766 3554")=== true);
console.log(validLuhn("232y3 x2005 7,766 3554!")=== true);
console.log(validLuhn("232y3 x2105 7,766 3554!") === false);
console.log(validLuhn("") === false);
console.log(validLuhn("!@#$%^") === false);