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

*/
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  
  return data;
}

console.log(processBands(bands));
