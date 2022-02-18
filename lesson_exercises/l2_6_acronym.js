/*
Write a function that generates and returns an acronym 
input is a string of words.
Rules:
Count compound words (words connected with a dash) as separate words

Example, 
return "PNG" for the string "Portable Network Graphics"

Algorithm;
replace the dashes out of input string with spaces
collect first letter of each word in uppercase
return combined letters 
*/

function acronym(string) {
  let newString = string.replace(/-/g, ' ');
  return newString.split(' ').reduce((acro, word) => {
    return acro += word[0].toUpperCase();
  }, '');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"