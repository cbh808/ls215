/*
Practice Problem: Anagrams

Write a Function named anagram that takes two args a word and an array of words
Function to return array
  contains all words from array arg that are anagrams of the word argument.

Example:
given the word "listen" and an array of candidate words
 "enlist", "google", "inlets", and "banana
return an array that contains "enlist" and "inlets".

Algorithm;
declare variable and assign to empty array
convert input word to chars and sort and convert back into word
convert each word to chars and sort and convert back into word
compare current word to input word and add original word into results array
  if strictly equivalent
return variable
*/

function anagram(word, list) {
  let anagrams = [];
  let wordSorted = word.split('').sort().join('');
  let listWordsSorted = list.map(word => word.split('').sort().join(''))
  listWordsSorted.forEach((sortedWord, index) => {
      if (sortedWord === wordSorted) {
        anagrams.push(list[index]);
      }
    })
  return anagrams;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
