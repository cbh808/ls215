/*
Problem Description
You are given a list of numbers in a "short-hand" range
only the significant part of the next number is written
because we know the numbers are always increasing
Your job is to return a list of complete numbers.

Example:
"1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]).
Some people use different separators for their ranges:
"1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]).
Range limits are always inclusive.

The possible separators are: ["-", ":", ".."]

    "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
    "1-3, 1-2" --> 1, 2, 3, 11, 12
    "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
    "104-2" --> 104, 105, ... 112
    "104-02" --> 104, 105, ... 202
    "545, 64:11" --> 545, 564, 565, .. 611
Rules:
whole numbers / shorthand numbers are comma separated
ranges: have range notatin with '-', ':', or '..'
        range can have more than one range separator
        one range is also comma-separated, i.e. 1-3, 1:5:2, etc.

input: string, representing list of numbers in short-hand form
    either
        a whole number, in full or shorthand number
            numbers that are smaller than previous number;
                use shorthand part at end of number
                be first number larger than previous number
        range, two or more whole number or shorthand number with range separator
            need to find min / max and add all numbers inclusive to result list
output: array, full list of numbers derived from short-form numbers and ranges




Data Structures:
input: string => parse string to derive partial & missing nums => add to array
"1, 3, 7, 2, 4, 1" --> ['1', '3', '7', '2', '4', '1'] => [1, 3, 7, 12, 14, 21]
"1-3, 1-2" --> ['1-3', '1-2'] => [1, 2, 3, 11, 12])

Algorithm:
convert string to array of strings, either digit as str., or range as str.

convert ranges to list of string numbers
    iterate over each array element
        if range delimiter found,
            determine start and end and add all numbers inclusive
                number before delimiter is start
                number after delimter is finish
            return and push those numbers to result array


iterate over number strings checking if one is lower than previous number
    next number: push number to result array if larger than last number of array
        if lower => add lowest digit in front of number that makes it larger than previous number
            getLargerNumber(previousNumStr, currentNumStr)
            '7'and '2' (strings)
            7 is > 2  (nums)
           = length of '7' is 1 => add 10 ** 1 * (numbers from 1 to 10), pushing number and 
                breaking loop when
                (number to String + 'significant' part) to Number > currentNum (numbers)
*/

function rangeFound(nums) {
    let regex = new RegExp(/[-:]|[\.]{2}/g);
    return regex.test(nums);
}

function getLargerNumber(currentNumStr, previousNumStr) {
    let previous = Number(previousNumStr);
    let current = Number(currentNumStr);
    while ((current < previous) || !String(current).endsWith(currentNumStr)) {
        current += 1;
        }
    return String(current);
}

function confirmLarger(currentNumStr, previousNumStr) {
    return (Number(currentNumStr) > Number(previousNumStr));
}

function mapIncreasingSequence(array, lastNumber) {
    lastNumber = lastNumber;
    let result = array.map((strNum) => {
        if (confirmLarger(strNum, lastNumber)) {
            lastNumber = strNum;
            return strNum;
        } else {
            lastNumber = getLargerNumber(strNum, lastNumber);
            return lastNumber;
        }
    });
    return result;
}

function getRange(range, lastNumber) {
    let result = [];
    let array = range.split(/[-:]|[\.]{2}/g)
    array = mapIncreasingSequence(array, lastNumber);
    let min = array[0];
    let max = array[array.length - 1];
    for(let num = Number(min); num <= Number(max); num += 1) {
        result.push(String(num));
    }
    return result;
}

function expandRanges(stringArray) {
    let result = [];
    let lastNumber = '0'
    stringArray.forEach((numString) => {
        if (rangeFound(numString)) {
            result.push(getRange(numString, lastNumber));
        } else {
            result.push(numString);
            lastNumber = numString;
        }
    });
    return result;
}

function shortHand(string) {
    let result = [];
    let stringArray = string.split(', ');
    result.push(expandRanges(stringArray));
    result = result.flat(3)
    result = mapIncreasingSequence(result);
    return result.map(Number);
}

console.log(shortHand("1, 3, 7, 2, 4, 1")); // === [1, 3, 7, 12, 14, 21]);
console.log(shortHand("1-3, 1..2"));// === [1, 2, 3, 11, 12]);
console.log(shortHand("1:5:2")); //=== [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(shortHand("104-2")); //=== [104, 105, 106, 107, 108, 109, 110, 111, 112]);
console.log(shortHand("104-02")); //=== [104, 105, ... 202]);
console.log(shortHand("545, 64:66")); //=== [545, 564, 565, 566]);
console.log(shortHand("545, 64:11")); //=== [545, 564, 565, .. 611]);