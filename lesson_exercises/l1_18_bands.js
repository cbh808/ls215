/*
Problem:
Given array of objects about bands
Band 'country' key of all objects to have value of 'Canada'
Band 'name' keys to have values all capitalized
Band 'name' keys to have values with dots removed

Write function `processBands` that takes array as arg

Example: 
/* should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]

Algorithm:
Create function with array arg, returns cleaned up array (mutate original array)
Iterate over array, passing each object to a callback function
Use helper to change country
  reassign country to Canada
User helper to capitalize
  capitalize name
Use Helper Method to Iterate over array
  Iterate over each value accessed by name key of the object
  Convert string to array of single words
  transform any character dot at end of word by removing it
  join back chars to string with a space between words

*/
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function changeCountry(band) {
  band.country = 'Canada';
  return band;
}

function capitalizeName(band) {
  let bandName = band.name.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1, word.length);
  });
  band.name = bandName.join(' ')
  return band
}

function removeDot(band) {
  let words = band.name.split(' ');

  words = words.map(word => {
    if (word[word.length - 1] === '.') {
      return word.slice(0, word.length - 1);
    } else {
      return word;
    }
  });

  band.name = words.join(' ');
  return band
}

function processBands(bands) {
  return bands.map(band => {
    changeCountry(band);
    capitalizeName(band);
    removeDot(band);
    return band;
  });
}

console.log(processBands(bands));
console.log(bands);
