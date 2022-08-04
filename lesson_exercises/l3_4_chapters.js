/*
An Example Problem: Comparing Version Numbers
compare software version numbers
The following are all legal version numbers:
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and compares them
the result of comparison shows whether first is less than, equal to, or greater than second version:

    If version1 > version2, we should return 1.
    If version1 < version2, we should return -1.
    If version1 === version2, we should return 0.
    If either version number contains characters other than digits and the . character, we should return null.

Here is an example of version number ordering:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

Problem:

input: string, represention of chapter number
output: 
  integer, -1, 1, 0 based on comparison of value, -OR-
  null, if invalid input

Rules:
valid input:
starts and ends with a number
can have 0 or more 'dots' plus another number

invalid input:
cannot end in a 'dot'
must be numbers and dots only  - no other characters

a number with a last number = 0 is equivalent to same number without the trailing 0
e.g. 1 = 1.0, 1 = 1.0.0.0

Algorithm:
check that both input strings have valid input
  contains a digit char 1 or more times followed by a dot and 1 or more digits, all 0 or more times
  anchor first number to start of string, anchor optional part to back of string
  if not return null
split each valid string into arrays of numbers
find length of longest array
for each idx from 0 to longest array length - 1, 
  obtain current value, which is either value at the current idx or 0
make comparison of values and return -1, 1 or 0 acc. rules
  If version1 > version2, we should return 1.
  If version1 < version2, we should return -1.
  If version1 === version2, we should return 0.
*/
function compareVersions(version1, version2) {
  let regex = /^\d+(\.\d)*$/
  if (!version1.match(regex) || !version2.match(regex)) {
    return null;
  }

  let ver1arr = version1.split('.').map(Number);
  let ver2arr = version2.split('.').map(Number);
  let longest = Math.max(ver1arr.length, ver2arr.length);

  for (let idx = 0; idx <= longest; idx += 1) {
    let v1 = ver1arr[idx] || 0;
    let v2 = ver2arr[idx] || 0;

    if (v1 < v2) {
      return -1;
    } else if (v1 > v2) {
      return 1;
    } else continue;
  }
  return 0;
}

console.log(compareVersions('1.x', '1.2.0.0'))    // null
console.log(compareVersions('1..2', '1.2.0.0'))   // null
console.log(compareVersions('1.2.', '1.2.0.0'))   // null
console.log(compareVersions('0.2.0', '1.2.0.'))   // null

console.log(compareVersions('1', '2'))           // -1
console.log(compareVersions('0.1', '2'))         // -1
console.log(compareVersions('1', '0.1'))         // 1
console.log(compareVersions('1.2', '1.2.0.0'))   // 0
console.log(compareVersions('1.2.0.0', '1.2'))   // 0
console.log(compareVersions('1.2.1', '1.2.0'))   // 1
console.log(compareVersions('1.2.0', '1.3'))     // -1