/*Problem1:
Take a string decoded and encode it for a 'railfence' with 3 rails

input: string, encoded message
output: special spaced message

ENCODING:
"WE ARE DISCOVERED FLEE AT ONCE"
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

if have string without spaces
WEAREDISCOVEREDFLEEATONCE

letters of string belonging to each line to encode are:
line1 = [0, 4, 8, ...] all four starting at index 0
line2 = [1, 3, 5, ...] odds
line3 = [2, 6, 10, ...] all four starting at index 2

concatenate line 1 + line 2 + line 3;

data structures
input: string with spaces => string without spaces
develop arrays to hold chars
output joined arrays concatenated together

Algorithm:
Convert string to string without spaces
  split at spaces and join back together without spaces
Set 3 empty arrays to represent lines
use case statement to allocate array
0 index or index % 4 === 0 => line1Array
odd index => line2Array
2 index or (index - 2) % 4 === 0 => line3Array
concatenate arrays
return joined array as string

Problem2:
Take an encoded string and output it in railfence formatting
WECRLTEERDSOEEFEAOCAIVDEN
width of ciper is length of encoded word
line1 leters will be length / 4 rounded up 
  e.g. 
  25 / 4 = 6.25 => 7 letters
line2 letters => length / 2 rounded down
  25 / 2 = 12.5 => 12 letters
line3 letters => rest of letters
  (length - 3) / 4 rounded down + 1
    25 - 3 / 4 = 22 / 4 = 5.5 rounded down + 1 = 6

line 1 separators are 3 dots, prefix is ''
line 2 separators are 1 dot, with prefix '.'
line 3 separators are 3 dots, with prefix '..'
*/
function cleanMessage(message){
  let regex = /[^a-z]/gi;
  return message.replace(regex,'');
}

function arraysToEncoded(line1Array, line2Array, line3Array) {
  return (line1Array.concat(line2Array, line3Array)).join('');
}

function encodeMessage(message) {
  let line1Array = [];
  let line2Array = [];
  let line3Array = [];

  message.split('').forEach((letter, index)=> {
    if (index === 0 || index % 4 === 0) {
      line1Array.push(letter);
    } else if (index % 2 === 1) {
      line2Array.push(letter);
    } else line3Array.push(letter);
  });

  return arraysToEncoded(line1Array, line2Array, line3Array);
}

function railFenceEncode(message) {
  message = cleanMessage(message);
  return encodeMessage(message);
}

function splitArray(array){
  return array.split('');
}

function outputLine(prefix, separator, line, railFenceLength) {
  line = line.split('').reduce((str, current) => {
    return str + current + separator
  }, prefix);
  console.log(line.slice(0, railFenceLength));
}

function outputRailFence(line1, line2, line3, railFenceLength){
  let prefix1 = '';
  let prefix2 = '. ';
  let prefix3 = '. . ';

  let separator1 = ' . . . '
  let separator2 = ' . '
  let separator3 = ' . . . '

  outputLine(prefix1, separator1, line1, railFenceLength);
  outputLine(prefix2, separator2, line2, railFenceLength);
  outputLine(prefix3, separator3, line3, railFenceLength);
}

function railFenceDecode(encodedMessage){
  let cipherLength = encodedMessage.length;
  let railfenceLength = (cipherLength - 1) * 2 + 1;
  let line1Length = Math.ceil(cipherLength / 4);
  let line2Length = Math.floor(cipherLength / 2);
  // let line3Length = cipherLength - line1Length - line2Length;
  let line1 = encodedMessage.slice(0, line1Length);
  let line2 = encodedMessage.slice(line1Length, line1Length + line2Length);
  let line3 = encodedMessage.slice(line1Length + line2Length);
  outputRailFence(line1, line2, line3, railfenceLength);
}

console.log(railFenceEncode('WE ARE DISCOVERED FLEE AT ONCE')  === 'WECRLTEERDSOEEFEAOCAIVDEN');
console.log(railFenceEncode('WE AR%E-DISCOVERED_FLEE AT ONCE') === 'WECRLTEERDSOEEFEAOCAIVDEN');
console.log(railFenceDecode('WECRLTEERDSOEEFEAOCAIVDEN')); // output railFence

console.log(railFenceEncode('I WANT TO EAT A BIG PIECE OF PIZZA') === 'ITAIEFZWNTETBGICOPZAAOAPEI');
console.log(railFenceDecode('ITAIEFZWNTETBGICOPZAAOAPEI'));

console.log(railFenceEncode('') === '');
console.log(railFenceDecode(''));