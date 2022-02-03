/*
convert string to array of chars
tranform chars to digits
reverse order of digits
reduce digits to octal
*/
const BASE = 8;

function octalToDecimal(numberString) {
  let octalDigits = numberString.split('').map(char => {
    return Number(char);
  });

  // reverse digits so that index matches corresponding exponent
  return octalDigits.reverse().reduce((sum, num, index) => {
    return sum += num * BASE ** index;
  });
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9